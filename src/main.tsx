import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/motion.css'

hydrateRoot(document.getElementById('root')!,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
