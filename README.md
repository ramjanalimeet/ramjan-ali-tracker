# ramjan-ali-tracker

Static site for **ramjan-akash.vercel.app** — Local SEO & AI Search Visibility for Home Service Businesses (Ramjan Ali Akash).

This repository is a static snapshot of the live site: pre-rendered HTML pages plus
CSS, JS, and image assets. It deploys as-is on Vercel (no build step).

## Structure

- `index.html` and the `*.html` files — the site's pages
- `local-seo.html`, `ai-search.html` — the two core service pages
- `local-seo/` — industry pages (roofing, plumbing, septic, HVAC, home services)
- `blog/` — articles
- `style.css`, `app.js` — styles and client script
- `assets/` — images (e.g. `akash.webp`)
- `favicon.svg`, `robots.txt`, `sitemap.xml`
- `vercel.json` — enables clean URLs (`/blog` serves `blog.html`) and 301-redirects
  the retired `/seo-services/*`, `/locations/*` and blog category URLs

## Deploy

Import this repo into Vercel (or run `vercel`). No framework or build command is
required — it is served as static files with `cleanUrls` enabled.

## Note

This snapshot was reconstructed from the deployed/rendered site. If you still have
the original project sources (the Python build scripts: `build.py`, `seo.py`,
`og.py`, etc.), prefer committing those for future edits.
