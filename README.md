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

- `app/(site)/` — one folder per page (`app/(site)/pricing/page.tsx` serves `/pricing`), with
  `app/(site)/layout.tsx` adding the header and footer; `app/` keeps `layout.tsx` (fonts), `globals.css`, `robots.ts`, the XML sitemaps
  (`sitemap.xml` index plus `page-`, `service-`, `industry-`, `location-`, `post-` and
  `case-study-sitemap.xml`, built in `lib/sitemaps.ts` and styled by `public/sitemap.xsl`),
  `opengraph-image.tsx` and `api/lead` (free audit form endpoint)
- `components/` — shared pieces: `Header`, `Footer`, `CtaBand`, `Faq`, `HowItWorks`,
  `PricingPlans`, `LeadForm`, `PostCards`, `WhatsAppButton`
- `lib/site.ts` — site URL, contact links, industries, page metadata helper
- `lib/pricing.ts` — **every price on the site**; edit plans and prices here
- `lib/industries/` — industry pages. Only the trades in `CORE_SLUGS` (index.ts) get a
  dedicated page under `/local-seo/<slug>`, rendered by `app/local-seo/[slug]/page.tsx` with
  trade-specific depth from `deep.ts`. Every other trade is listed by name on `/industries`,
  and its old URL redirects there (see `next.config.ts`)
- `lib/cities/` — city location pages. Only cities in `ACTIVE_GROUPS` (index.ts, currently
  the US) are built under `/locations/<city>`; the others stay in `data.ts` and their old
  URLs redirect to `/locations`. `docs/location-research.md` explains why each city was picked
- `lib/testimonials.ts` — real client quotes, shown on the home and pricing pages once the
  list is not empty. `lib/case-studies.ts` — real case studies (the sample is noindexed)
- `lib/services.ts` — the Services menu and service pages list
- `lib/posts.ts` — blog article list (each article lives in `app/blog/<slug>/page.tsx`)
- `public/` — images and favicon
- `next.config.ts` — 301 redirects for retired `/seo-services/*`, `/locations/*`
  and blog category URLs

## Deploy

Cloudflare Workers: `npm run build` (OpenNext) then `npx wrangler deploy`. `wrangler.jsonc`
points at `worker.ts`, which wraps the Next.js worker and adds the admin dashboard backend.

## Admin dashboard (`/admin`)

A private, Notion-style workspace at `/admin` for social posting, email outreach and leads.

- **Sign in** with the dashboard password. Change it in Settings → General, or set an
  `ADMIN_PASSWORD` secret in Cloudflare (that one then wins).
- **Settings** (bottom of the sidebar) connects X, LinkedIn, Facebook Pages and Medium, and
  4–5 sending inboxes (Gmail/Workspace or Outlook with an app password, any SMTP+IMAP host, or
  Resend). Each panel explains where to get the keys.
- **Social posts / Calendar** — write once, pick accounts and a time; posts publish on their own.
- **Email** — campaigns with a first email and follow-ups. Sending is spread across the selected
  inboxes within each inbox's daily limit, only in the campaign's sending hours, and follow-ups
  reply in the same thread. A reply (found over IMAP) stops the sequence and lands in the Inbox.
- **Contacts** — CSV import, “Find emails” (reads public emails from business websites), website
  form leads and Cal.com bookings. Campaigns can auto-enroll new contacts by source.
- **Inbox** — outreach replies, website form submissions (`POST /api/lead`), Cal.com bookings
  (webhook URL shown in Settings → Website & bookings) and X mentions / Facebook comments.

Backend: `worker/` — one SQLite Durable Object (`AdminStore`) holds everything; a cron every 5
minutes (`triggers` in `wrangler.jsonc`) publishes due posts, sends due emails and checks replies.
The dashboard UI is `app/admin` + `components/admin`. Typecheck the worker with
`npx tsc -p worker/tsconfig.json`. `npm run dev` serves the UI only; use `npm run preview` (or
`npx wrangler dev` after `npm run build`) to run it with the backend.

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
