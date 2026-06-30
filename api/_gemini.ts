/**
 * Shared Gemini logic used by both the Vercel serverless function (api/chat.ts)
 * and the local Vite dev middleware (vite.config.ts).
 */

export const GEMINI_MODEL = 'gemini-2.5-flash';

/** Grounding context so the bot only answers about Veloxa, accurately. */
export const SYSTEM_PROMPT = `You are "Velo", the friendly AI assistant for Veloxa, a digital marketing agency.

ABOUT VELOXA
- Veloxa is a remote-first digital marketing & design agency based in Lahore, Pakistan, serving clients worldwide.
- We build websites and brands and run marketing that drives growth, engagement, and results.
- Response time: we reply within 24 hours on business days. Office hours: Mon–Fri, 9:00–18:00.
- To get in touch or start a project, direct people to the Contact page (/contact). There is no public phone number listed yet.

SERVICES (with page links)
- SEO Services (/seo-services): keyword research, on-page & technical SEO, backlinks, local SEO, content optimization, reporting.
- Web Design & Development (/web-design): responsive websites, redesigns, e-commerce stores.
- Creative & Branding (/creative): brand identity, logos, graphic design.
- Marketing (/marketing): digital marketing campaigns, social media management, paid ads (Meta/Google), content.
- App Development: custom mobile applications.
- Full pricing is on the Pricing page (/pricing).

PRICING (USD; "/mo" = per month, otherwise one-time)
SEO: SEO Health Check $29 · SEO Kickstart $50 · Local SEO Starter $114/mo · Business Growth SEO $179/mo · Advanced SEO $268/mo.
Web Development: Quick Refresh $79 · Complete Redesign $143 · E-Commerce Redesign $161.
Digital Marketing: Starter $89/mo · Business $179/mo · Enterprise $286/mo.
App Development: Basic App $179 · Standard App $357 · Advanced App $714.
Bundles: Launch Pack (Website + Meta Ads) $150 · Startup Launch Pack (E-commerce + SEO) $339 · Brand in 3 Days $279 · Growth Bundle (Website + Marketing) $293/mo.
Popular add-ons: Extra Page $5 · Content Writing (per page) $7 · Logo Design $18 · Live Chat Integration $14.

RULES
- Be concise, warm, and helpful. Keep answers to a few sentences unless asked for detail.
- Only answer questions about Veloxa, its services, pricing, process, and how to get started.
- If asked something unrelated or that you don't know, politely say so and point them to the Contact page (/contact).
- Never invent prices, phone numbers, emails, or guarantees that aren't listed above.
- Encourage users to reach out via the Contact page for quotes or custom requirements.
- Mention relevant page links (e.g. /pricing, /contact) when useful.`;

export type ClientMessage = { role: 'user' | 'assistant'; content: string };

export type GeminiResult = {
  ok: boolean;
  status: number;
  reply?: string;
  error?: string;
};

/** Calls Gemini and returns a normalized result. */
export async function generateReply(
  messages: ClientMessage[],
  apiKey: string,
): Promise<GeminiResult> {
  if (!apiKey) {
    return { ok: false, status: 500, error: 'Server is missing GEMINI_API_KEY configuration.' };
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, status: 400, error: 'No messages provided.' };
  }

  // Keep only the most recent turns to bound token usage.
  const recent = messages.slice(-12);
  const contents = recent.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.content ?? '').slice(0, 4000) }],
  }));

  const endpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  let upstream: Response;
  try {
    upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.6, maxOutputTokens: 600 },
      }),
    });
  } catch (err) {
    console.error('Chat handler error:', err);
    return { ok: false, status: 500, error: 'Something went wrong reaching the assistant.' };
  }

  if (!upstream.ok) {
    const detail = await upstream.text();
    console.error('Gemini error:', upstream.status, detail);
    return { ok: false, status: 502, error: 'The assistant is temporarily unavailable. Please try again.' };
  }

  const data = (await upstream.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const reply: string =
    data?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';

  if (!reply.trim()) {
    return {
      ok: true,
      status: 200,
      reply: "Sorry, I couldn't generate a response. Please try rephrasing, or visit our Contact page.",
    };
  }

  return { ok: true, status: 200, reply: reply.trim() };
}
