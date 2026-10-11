# ramjan-ali-tracker

Static site for **ramjan-akash.vercel.app** — Local SEO services (Ramjan Ali Akash).

This repository is a static snapshot of the live site: pre-rendered HTML pages plus
CSS, JS, and image assets. It deploys as-is on Vercel (no build step).

## Structure

- `index.html` and the `*.html` files — the site's pages
- `blog/`, `local-seo/`, `locations/`, `seo-services/` — section pages
- `style.css`, `app.js` — styles and client script
- `assets/` — images (e.g. `akash.webp`)
- `favicon.svg`, `robots.txt`, `sitemap.xml`
- `vercel.json` — enables clean URLs (`/blog` serves `blog.html`)

## Deploy

Import this repo into Vercel (or run `vercel`). No framework or build command is
required — it is served as static files with `cleanUrls` enabled.

## Note

This snapshot was reconstructed from the deployed/rendered site. If you still have
the original project sources (the Python build scripts: `build.py`, `seo.py`,
`og.py`, etc.), prefer committing those for future edits.
