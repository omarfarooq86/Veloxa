import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { generateReply, type ClientMessage } from "./api/_gemini"

/**
 * Dev-only middleware that serves POST /api/chat locally, mirroring the Vercel
 * serverless function so the chatbot works under `npm run dev` without the
 * Vercel CLI. Reads GEMINI_API_KEY from .env.local (kept server-side).
 */
function chatApiDevPlugin(apiKey: string): Plugin {
  return {
    name: 'veloxa-chat-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/chat', (req, res, next) => {
        if (req.method !== 'POST') return next()
        let raw = ''
        req.on('data', (chunk) => (raw += chunk))
        req.on('end', async () => {
          const send = (status: number, payload: unknown) => {
            res.statusCode = status
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(payload))
          }
          let messages: ClientMessage[]
          try {
            const body = JSON.parse(raw || '{}')
            messages = Array.isArray(body?.messages) ? body.messages : []
          } catch {
            return send(400, { error: 'Invalid JSON body.' })
          }
          const result = await generateReply(messages, apiKey)
          if (!result.ok) return send(result.status, { error: result.error })
          return send(200, { reply: result.reply })
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [react(), chatApiDevPlugin(env.GEMINI_API_KEY ?? '')],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  }
})
