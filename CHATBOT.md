# Veloxa AI Chatbot

A Gemini-powered assistant ("Velo") that answers visitors' common questions about
Veloxa's services, pricing, and how to get started.

## How it works

- **Frontend:** `src/components/ChatWidget.tsx` — a floating chat widget rendered
  globally from `src/App.tsx`. It POSTs the conversation to `/api/chat`.
- **Backend:** `api/chat.ts` — a Vercel serverless (Edge) function that calls the
  Google Gemini API. Your API key stays on the server and is never exposed to the browser.
- The bot is grounded with Veloxa's services and pricing via a system prompt inside
  `api/chat.ts`. Update that prompt whenever your offerings change.

## Setup

### 1. Get a free Gemini API key
Create one at https://aistudio.google.com/app/apikey

### 2. Local development
The chat API only runs under the Vercel dev server (plain `npm run dev` serves the
frontend but not `/api`).

```bash
npm i -g vercel        # one-time
cp .env.example .env.local   # then paste your key into .env.local
vercel dev
```

### 3. Production (Vercel)
1. Push the repo and import it into Vercel (it auto-detects Vite).
2. Add an environment variable: `GEMINI_API_KEY = <your key>`.
3. Deploy. The widget appears bottom-right on every page.

## Customizing
- **Bot knowledge / tone:** edit `SYSTEM_PROMPT` in `api/_gemini.ts`.
- **Model:** change `GEMINI_MODEL` in `api/_gemini.ts` (default `gemini-2.5-flash`).
- **Look & feel / suggested questions:** edit `src/components/ChatWidget.tsx`.
