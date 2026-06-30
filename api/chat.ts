/// <reference types="node" />
/**
 * Veloxa AI Chatbot — Vercel serverless function (Edge runtime).
 *
 * Securely proxies chat requests to Google Gemini so the API key is never
 * exposed to the browser. Set the GEMINI_API_KEY environment variable in your
 * Vercel project settings (Project → Settings → Environment Variables).
 *
 * Get a free key at: https://aistudio.google.com/app/apikey
 */

import { generateReply, type ClientMessage } from './_gemini.js';

export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let messages: ClientMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const result = await generateReply(messages, process.env.GEMINI_API_KEY ?? '');
  if (result.ok) {
    return json({ reply: result.reply }, 200);
  }
  return json({ error: result.error }, result.status);
}

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
