// Server entry for prerendering (TS, no JSX)
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App.tsx';

/**
 * Render the React app to a string for a given URL.
 * This is used by the prerender script to generate static HTML.
 */
export function render(url: string): string {
  return renderToString(
    React.createElement(
      StaticRouter,
      { location: url },
      React.createElement(AppShell)
    )
  );
}
