import { useEffect } from 'react';

/**
 * Injects a robots meta tag (`index,follow`) into the document head.
 * This component is intentionally side‑effect‑only and renders nothing.
 */
export const MetaRobots: React.FC = () => {
  useEffect(() => {
    const existing = document.querySelector('meta[name="robots"]');
    if (existing) {
      existing.setAttribute('content', 'index,follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index,follow';
      document.head.appendChild(meta);
    }
  }, []);

  return null;
};
