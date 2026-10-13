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
