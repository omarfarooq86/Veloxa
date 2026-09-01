// React import not needed for JSX with new transform
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App';

/**
 * Render the React app to a string for a given URL.
 * This is used by the prerender script to generate static HTML.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
