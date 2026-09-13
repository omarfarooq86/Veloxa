#!/usr/bin/env node

/**
 * Browser-based prerender.
 *
 * Serves the freshly built `dist/` with `vite preview`, crawls every internal
 * route with headless Chromium, and saves the fully rendered HTML (per-page
 * titles, meta tags, canonical links, JSON-LD schema and content — all of
 * which the app applies client-side in effects) as static files:
 *
 *   /            → dist/index.html
 *   /portfolio   → dist/portfolio/index.html
 *   /blog/xyz    → dist/blog/xyz/index.html
 *   ...
 *
 * Vercel serves these static files before applying the SPA rewrite, so
 * crawlers and social scrapers get complete, per-route HTML without running
 * JavaScript. Routes are discovered by following internal links, so new
 * blog posts and portfolio projects are picked up automatically.
 */

import { spawn } from 'node:child_process';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'dist');
const PORT = 4173;
let BASE = `http://localhost:${PORT}`; // reassigned once the preview server binds a port

const seedRoutes = [
  '/',
  '/lahore',
  '/seo-services',
  '/web-design',
  '/creative',
  '/marketing',
  '/portfolio',
  '/pricing',
  '/blog',
  '/contact',
];

const ASSET_PATTERN = /\.(png|jpe?g|gif|svg|webp|avif|ico|pdf|css|js|map|xml|txt|json|woff2?|ttf|zip)$/i;

/**
 * Starts `vite preview` on the first free port starting at PORT. Returns
 * { child, base } where `base` is the origin of the server WE started —
 * readiness is only accepted while our own child is alive, and a child that
 * exits (e.g. port taken) makes us move to the next port. This guarantees we
 * never crawl content served by an unrelated process.
 */
async function startPreviewServer() {
  const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');

  for (let attempt = 0; attempt < 5; attempt++) {
    const port = PORT + attempt;
    const base = `http://localhost:${port}`;
    const child = spawn(process.execPath, [viteBin, 'preview', '--port', String(port), '--strictPort'], {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    child.stdout.on('data', (d) => process.stdout.write(d));
    child.stderr.on('data', (d) => process.stderr.write(d));

    const exited = new Promise((resolve) => child.once('exit', (code) => resolve(code)));
    const ready = new Promise((resolve) => {
      const poll = async () => {
        const startedAt = Date.now();
        while (Date.now() - startedAt < 8000 && child.exitCode === null) {
          try {
            const res = await fetch(`${base}/`);
            if (res.ok && child.exitCode === null) return resolve(true);
          } catch {
            // not up yet
          }
          await new Promise((r) => setTimeout(r, 250));
        }
        resolve(false);
      };
      poll();
    });

    const outcome = await Promise.race([ready, exited.then(() => false)]);
    if (outcome) {
      return { child, base };
    }
    child.kill();
    console.log(`[prerender] port ${port} unavailable, trying ${port + 1}…`);
  }
  throw new Error('[prerender] could not start vite preview on any port (4173–4177)');
}

async function saveRoute(route, html) {
  // Saved as `<route>.html` files: Vercel's `cleanUrls` (see vercel.json)
  // serves them at the exact non-trailing-slash paths used in the site's
  // canonical links. (Directories would only be served for trailing-slash
  // URLs, while non-slash URLs would fall through to the SPA rewrite.)
  const outPath =
    route === '/'
      ? path.join(outDir, 'index.html')
      : path.join(outDir, `${route.replace(/^\//, '')}.html`);
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, html, 'utf8');
  return outPath;
}

async function prerender() {
  const preview = await startPreviewServer();
  BASE = preview.base;
  let browser;
  try {
    browser = await chromium.launch({ chromiumSandbox: false });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    page.on('pageerror', (err) => console.warn(`[prerender] pageerror: ${err.message}`));

    const pending = [...seedRoutes];
    const seen = new Set();
    const rendered = []; // { route, outPath } — written after the crawl

    while (pending.length > 0) {
      const route = pending.shift();
      if (seen.has(route)) continue;
      seen.add(route);

      const url = BASE + route;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      // Small buffer so effect-driven head tags (title/meta/schema) settle.
      await page.waitForTimeout(400);
      const html = await page.content();
      rendered.push({ route, html });
      console.log(`[prerender] captured ${route}`);

      const hrefs = await page.$$eval('a[href]', (as) =>
        as.map((a) => a.getAttribute('href')).filter(Boolean)
      );
      for (const raw of hrefs) {
        let resolved;
        try {
          resolved = new URL(raw, url);
        } catch {
          continue;
        }
        if (resolved.origin !== BASE) continue; // external / tel: / mailto:
        const pathname = resolved.pathname;
        if (ASSET_PATTERN.test(pathname)) continue;
        if (!seen.has(pathname)) pending.push(pathname);
      }
    }

    // Write everything only after the crawl, so the preview server keeps
    // serving the original SPA shell while pages are being captured.
    for (const { route, html } of rendered) {
      const outPath = await saveRoute(route, html);
      console.log(`[prerender] wrote ${route} → ${path.relative(rootDir, outPath)}`);
    }
    console.log(`[prerender] done: ${rendered.length} routes prerendered`);
  } finally {
    if (browser) await browser.close();
    preview.child.kill();
  }
}

prerender().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
