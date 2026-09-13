import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/motion.css'

// The prerender script (scripts/prerender.mjs) ships fully rendered static
// HTML for every route so crawlers and social scrapers get complete content,
// titles and schema without running JavaScript.
//
// We intentionally do NOT hydrate that HTML: the app is full of
// animation-driven state (scroll reveals, counters, sliders) whose DOM
// legitimately differs from a fresh client render, which makes hydration
// mismatch errors unavoidable. Instead we always client-render — the static
// HTML gives an instant first paint, then React takes over with the same
// content and entrance animations. Users see no difference; the console
// stays clean.
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
