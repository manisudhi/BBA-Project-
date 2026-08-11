/**
 * Build-time prerendering.
 *
 * Vite alone ships an empty <div id="root">, which means search engines and
 * link previews see a blank page. This script renders every route to real
 * HTML after the client build, so the deployed site is crawlable and paints
 * instantly — then React hydrates it in the browser.
 *
 * Run automatically as part of `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr-dist');

const { render } = await import(path.join(ssrDir, 'entry-server.js'));
// site.js is plain ESM (no JSX), so Node can import the source directly.
const { pageMeta, routes } = await import('./src/data/site.js');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let written = 0;

for (const route of routes) {
  const meta = pageMeta[route];
  const appHtml = render(route);

  let html = template
    .replace('<!--app-html-->', appHtml)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    .replace(
      /<meta name="description" content="[\s\S]*?">/,
      `<meta name="description" content="${escapeAttr(meta.description)}">`
    )
    .replace(
      /<meta property="og:title" content="[\s\S]*?">/,
      `<meta property="og:title" content="${escapeAttr(meta.title)}">`
    )
    .replace(
      /<meta property="og:description" content="[\s\S]*?">/,
      `<meta property="og:description" content="${escapeAttr(meta.description)}">`
    );

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html');

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  written += 1;
  console.log(`  prerendered ${route.padEnd(12)} -> ${path.relative(root, outPath)}`);
}

// SPA fallback for hosts that need one (Netlify/Vercel/S3 style rewrites).
fs.writeFileSync(path.join(distDir, '_redirects'), '/*  /index.html  200\n');

// The SSR bundle is a build artefact, not something to deploy.
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`\n✓ Prerendered ${written} routes into dist/`);
