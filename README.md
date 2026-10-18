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

## Location pages

City pages (`locations/<city>.html`, served at `/locations/<city>`) are generated,
and all of them are listed on the main Locations page:

```
python3 scripts/build_locations.py
```

City content lives in `scripts/city_data/`. The script also adds the city list
to `locations.html` and the sitemap (no other existing page is changed), and writes
`docs/location-research.md` (why each city was picked and what it targets).

## Blog posts

New blog posts are generated from `scripts/blog_data/posts.py`:

```
python3 scripts/build_blog_posts.py
```

Each post gets the site header/footer, a table of contents, FAQ section and
BlogPosting + FAQPage schema. The script also lists the posts on `blog.html`,
their topic page and the sitemap (between marker comments, so re-running is safe).

## Deploy

Import this repo into Vercel (or run `vercel`). No framework or build command is
required — it is served as static files with `cleanUrls` enabled.

## Note

This snapshot was reconstructed from the deployed/rendered site. If you still have
the original project sources (the Python build scripts: `build.py`, `seo.py`,
`og.py`, etc.), prefer committing those for future edits.
