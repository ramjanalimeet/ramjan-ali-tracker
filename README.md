# ramjan-ali-tracker

Website for **ramjan-akash.vercel.app** — Local SEO & AI Search Visibility for Home
Service Businesses (Ramjan Ali Akash). Built with Next.js (App Router, TypeScript).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Structure

- `app/` — one folder per page (`app/pricing/page.tsx` serves `/pricing`), plus
  `layout.tsx` (header, footer, fonts), `globals.css`, `sitemap.ts`, `robots.ts`,
  `opengraph-image.tsx` and `api/lead` (free audit form endpoint)
- `components/` — shared pieces: `Header`, `Footer`, `CtaBand`, `Faq`, `HowItWorks`,
  `PricingPlans`, `LeadForm`, `PostCards`, `WhatsAppButton`
- `lib/site.ts` — site URL, contact links, industries, page metadata helper
- `lib/pricing.ts` — **every price on the site**; edit plans and prices here
- `lib/industries/` — the 56 generated industry pages (one file per category);
  rendered by `app/local-seo/[slug]/page.tsx` and listed on `/industries`
- `lib/cities/` — the 58 city location pages (US, UK, Europe, Canada, Australia,
  Middle East); rendered by `app/locations/[city]/page.tsx` and listed on `/locations`.
  `docs/location-research.md` explains why each city was picked
- `lib/services.ts` — the Services menu and service pages list
- `lib/posts.ts` — blog article list (each article lives in `app/blog/<slug>/page.tsx`)
- `public/` — images and favicon
- `next.config.ts` — 301 redirects for retired `/seo-services/*`, `/locations/*`
  and blog category URLs

## Deploy

Vercel detects Next.js automatically; no extra configuration is needed.

## Adding a case study

Case studies live in `lib/case-studies.ts`. Only publish a client's results with
their written permission, using numbers from their own tools. Never invent
clients or figures.

1. Copy `SAMPLE_CASE` into the `CASE_STUDIES` array, give it a new `slug`, and
   remove `sample: true`.
2. Fill in the client (or an anonymous description such as "Roofing company,
   Tampa"), trade, services, plan, location, period and the story fields.
3. **Search Console:** Performance > Search results, set the date range, export
   and copy the monthly totals into `searchConsole.clicks` and `impressions`.
4. **Map rankings:** run the same grid scan (e.g. Local Falcon or BrightLocal)
   for one keyword at the start and end of the period, and copy each grid's
   ranks into `mapGrid` (use 0 for "not in top 20").
5. **AI visibility:** ask the same fixed question set in each AI tool every
   month, and record how many answers named the business in `ai`.
6. Make sure `highlights` match the data exactly, add a `quote` only if the
   client wrote and approved it, then build.

The page at `/case-studies/<slug>` and its charts, the listing on
`/case-studies` and the sitemap entry are generated automatically. The "Client
results" section on `/case-studies` appears once at least one real case study
exists. The labelled sample stays at `/case-studies/sample-roofing-local-seo`
(noindexed, not linked) as a format reference.
