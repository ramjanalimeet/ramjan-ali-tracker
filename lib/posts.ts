export type TopicId = "local-seo" | "google-maps" | "ai-search" | "technical" | "content" | "strategy";

export type Topic = {
  id: TopicId;
  name: string;
  /** One line shown on the blog page. */
  blurb: string;
  /** The service this topic supports. */
  service: { href: string; name: string };
};

/** Blog topics, one per service on the site. */
export const TOPICS: Topic[] = [
  {
    id: "local-seo",
    name: "Local SEO",
    blurb: "The full playbook for ranking a home service business in its own towns.",
    service: { href: "/local-seo", name: "Local SEO" },
  },
  {
    id: "google-maps",
    name: "Google Maps",
    blurb: "Google Business Profile, reviews and what puts you in the map pack.",
    service: { href: "/local-seo", name: "Local SEO" },
  },
  {
    id: "ai-search",
    name: "GEO & AI Search",
    blurb: "Getting named by ChatGPT, Gemini, Perplexity and Google's AI Overviews.",
    service: { href: "/ai-search", name: "GEO & AI Visibility" },
  },
  {
    id: "technical",
    name: "Technical SEO",
    blurb: "Speed, indexing, schema and the fixes that let Google trust your site.",
    service: { href: "/seo-services/technical-seo", name: "Technical SEO" },
  },
  {
    id: "content",
    name: "Content & On-Page",
    blurb: "Service pages, area pages and copy that rank and convert.",
    service: { href: "/seo-services/on-page-seo", name: "On-Page SEO" },
  },
  {
    id: "strategy",
    name: "Strategy",
    blurb: "Timelines, budgets and how to judge whether SEO is working.",
    service: { href: "/seo-services/seo-audits", name: "SEO Audit" },
  },
];

export type Post = {
  slug: string;
  title: string;
  topic: TopicId;
  minutes: number;
  /** First published, YYYY-MM-DD. */
  date: string;
  /** Last substantial update, YYYY-MM-DD. */
  updated?: string;
  excerpt: string;
  /** Shown large at the top of the blog page. */
  featured?: boolean;
};

/** Blog articles, newest first. Each has its own page under app/blog/<slug>. */
export const POSTS: Post[] = [
  {
    slug: "google-business-profile-categories-for-contractors",
    title: "Google Business Profile categories for contractors: how to pick the right ones",
    topic: "google-maps",
    minutes: 8,
    date: "2026-10-18",
    excerpt:
      "How to choose the primary and secondary Google Business Profile categories that win map-pack calls, with a category table for every major trade.",
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to get more Google reviews as a contractor (scripts and templates)",
    topic: "google-maps",
    minutes: 8,
    date: "2026-10-18",
    excerpt:
      "A simple review system for contractors: when to ask, word-for-word request scripts, how to reply, and the Google and FTC rules to stay inside.",
  },
  {
    slug: "roofing-storm-damage-leads",
    title: "How roofers get more storm damage leads from Google (without chasing storms)",
    topic: "local-seo",
    minutes: 7,
    date: "2026-10-18",
    excerpt:
      "How roofing companies win hail and wind damage searches after every storm: what to build before the season, and what to do in the first 72 hours.",
  },
  {
    slug: "high-value-plumbing-keywords",
    title: "Plumbing keywords that bring high-value jobs (and the pages to rank for them)",
    topic: "content",
    minutes: 8,
    date: "2026-10-18",
    excerpt:
      "The plumbing searches that lead to water heater, repipe, sewer and slab leak jobs, grouped by intent, with the page each one needs to rank.",
  },
  {
    slug: "hvac-seo-calendar",
    title: "HVAC SEO calendar: what to do each month to own the busy seasons",
    topic: "strategy",
    minutes: 7,
    date: "2026-10-18",
    excerpt:
      "A month-by-month HVAC SEO plan: what to publish, update and fix before summer and winter peaks so rankings are ready when the calls start.",
  },
  {
    slug: "how-much-does-local-seo-cost",
    title: "How much does local SEO cost for a home service business?",
    topic: "strategy",
    minutes: 8,
    date: "2026-10-18",
    excerpt:
      "What local SEO costs for home service businesses, what each budget level gets you, the red flags to avoid, and how to check if it pays off.",
  },
  {
    slug: "local-link-building-for-contractors",
    title: "Local link building for contractors: 15 ideas that actually work",
    topic: "local-seo",
    minutes: 8,
    date: "2026-10-18",
    excerpt:
      "15 safe, practical ways roofers, plumbers and HVAC companies earn local links, ranked by effort and value, plus the link tactics to avoid.",
  },
  {
    slug: "local-seo-audit",
    title: "How to audit your local SEO in 60 minutes (with a competitor scorecard)",
    topic: "strategy",
    minutes: 8,
    date: "2026-10-18",
    excerpt:
      "A 60-minute local SEO audit that compares you with the top 3 map competitors and shows exactly what to fix first.",
  },
  {
    slug: "local-business-schema-for-contractors",
    title: "Local business schema for contractors: a plain-English guide with examples",
    topic: "technical",
    minutes: 6,
    date: "2026-10-18",
    excerpt:
      "What schema markup home service businesses actually need, which type to pick, a copy-ready JSON-LD example and the mistakes to avoid.",
  },
  {
    slug: "check-if-ai-recommends-your-business",
    title: "Does ChatGPT recommend your business? How to check, and what to fix",
    topic: "ai-search",
    minutes: 7,
    date: "2026-10-18",
    excerpt:
      "A repeatable way to check whether ChatGPT, Gemini, Perplexity and Google's AI answers name your business, with test prompts and a fix map.",
  },
  {
    slug: "google-business-profile-suspended",
    title: "Google Business Profile suspended? A contractor's guide to getting reinstated",
    topic: "google-maps",
    minutes: 7,
    date: "2026-10-18",
    excerpt:
      "Why Google suspends contractor profiles, what to fix before you appeal, and the evidence that gets a profile reinstated.",
  },
  {
    slug: "local-services-ads-vs-seo-for-contractors",
    title: "Local Services Ads vs SEO for contractors: which brings cheaper calls?",
    topic: "strategy",
    minutes: 6,
    date: "2026-10-18",
    excerpt:
      "How Local Services Ads, Google Ads and local SEO compare on cost per lead, speed and control, and how to choose.",
  },
  {
    slug: "how-to-get-more-septic-pumping-customers",
    title: "How to get more septic pumping customers from Google: a 90-day plan",
    topic: "local-seo",
    minutes: 6,
    date: "2026-10-18",
    excerpt:
      "A 90-day plan for septic companies to get more pumping, inspection and repair calls from Google across a wide service area.",
  },
  {
    slug: "get-recommended-by-chatgpt",
    title: "How to get your home service business recommended by ChatGPT and AI search",
    topic: "ai-search",
    minutes: 10,
    date: "2026-10-13",
    featured: true,
    excerpt:
      "More homeowners now ask AI tools who to call. Here is where those answers come from, and the practical steps that make your business one of the names they hear.",
  },
  {
    slug: "geo-vs-seo-home-services",
    title: "GEO vs SEO: what home service businesses actually need to know",
    topic: "ai-search",
    minutes: 10,
    date: "2026-10-13",
    excerpt:
      "Generative engine optimization is the new buzzword. What it really means for a roofer, plumber or HVAC company, and how it fits with the local SEO you already need.",
  },
  {
    slug: "local-seo-checklist-for-contractors",
    title: "Local SEO checklist for contractors",
    topic: "local-seo",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-10-13",
    excerpt:
      "A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each item yourself, in order.",
  },
  {
    slug: "how-to-rank-in-google-map-pack",
    title: "How to rank in the Google map pack",
    topic: "google-maps",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-10-13",
    excerpt:
      "What decides which three businesses show in the Google map pack, and the practical steps contractors can take to get into it.",
  },
  {
    slug: "technical-seo-for-service-business-websites",
    title: "Technical SEO for service business websites: the fixes that matter",
    topic: "technical",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-10-13",
    excerpt:
      "The technical SEO problems most common on contractor websites, and how to find and fix them without a developer degree.",
  },
  {
    slug: "service-area-pages-that-rank",
    title: "How to write service area pages that rank (without doorway spam)",
    topic: "content",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-10-13",
    excerpt:
      "How home-service businesses can create location pages for the towns they serve that are genuinely useful, rank well and stay clear of Google's doorway rules.",
  },
  {
    slug: "how-long-does-local-seo-take",
    title: "How long does local SEO take? A realistic timeline",
    topic: "strategy",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-10-13",
    excerpt:
      "A realistic month-by-month timeline for local SEO results for home-service businesses, and what changes how fast you see them.",
  },
];

export const topicOf = (id: TopicId) => TOPICS.find((t) => t.id === id)!;
export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
