import { pageMeta, SITE_NAME } from "./site";

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
  takeaway: string;
  cover: { url: string; thumbnail: string; alt: string };
  /** Shown large at the top of the blog page. */
  featured?: boolean;
};

/** Blog articles, newest first. Each has its own page under app/blog/<slug>. */
export const POSTS: Post[] = [
  {
    slug: "google-business-profile-categories-for-contractors",
    takeaway: "Start with the category that describes the work your business mainly sells. Add secondary categories for services you actually provide, then check that your website gives customers a clear way to book those services.",
    cover: {
      url: "/assets/blog/google-business-profile-categories-for-contractors.webp",
      thumbnail: "/assets/blog/google-business-profile-categories-for-contractors-480.webp",
      alt: "Contractor reviewing a laptop at a tool bench",
    },
    title: "Google Business Profile categories for contractors: how to pick the right ones",
    topic: "google-maps",
    minutes: 8,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "How to choose the primary and secondary Google Business Profile categories that win map-pack calls, with a category table for every major trade.",
  },
  {
    slug: "how-to-get-more-google-reviews",
    takeaway: "Ask every eligible customer for an honest review once the job is complete. Put the direct review link in the follow-up message and use the same process regardless of how you expect the customer to rate you.",
    cover: {
      url: "/assets/blog/how-to-get-more-google-reviews.webp",
      thumbnail: "/assets/blog/how-to-get-more-google-reviews-480.webp",
      alt: "Service technician writing a follow-up on a phone in a parked van",
    },
    title: "How to get more Google reviews as a contractor (scripts and templates)",
    topic: "google-maps",
    minutes: 8,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "A simple review system for contractors: when to ask, word-for-word request scripts, how to reply, and the Google and FTC rules to stay inside.",
  },
  {
    slug: "roofing-storm-damage-leads",
    takeaway: "Publish one useful storm-damage page before severe weather. Explain the warning signs, where you can respond, and what happens during an inspection. Update availability after a storm and track calls to that page.",
    cover: {
      url: "/assets/blog/roofing-storm-damage-leads.webp",
      thumbnail: "/assets/blog/roofing-storm-damage-leads-480.webp",
      alt: "Shingled suburban roof under clearing storm clouds",
    },
    title: "How roofers get more storm damage leads from Google (without chasing storms)",
    topic: "local-seo",
    minutes: 7,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "How roofing companies win hail and wind damage searches after every storm: what to build before the season, and what to do in the first 72 hours.",
  },
  {
    slug: "high-value-plumbing-keywords",
    takeaway: "Group plumbing keywords by the job the customer needs, such as drain cleaning or water heater repair. Prioritize services you can deliver profitably and give each distinct job a page with a clear booking option.",
    cover: {
      url: "/assets/blog/high-value-plumbing-keywords.webp",
      thumbnail: "/assets/blog/high-value-plumbing-keywords-480.webp",
      alt: "Gloved hands using a wrench on copper plumbing beneath a sink",
    },
    title: "Plumbing keywords that bring high-value jobs (and the pages to rank for them)",
    topic: "content",
    minutes: 8,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "The plumbing searches that lead to water heater, repipe, sewer and slab leak jobs, grouped by intent, with the page each one needs to rank.",
  },
  {
    slug: "hvac-seo-calendar",
    takeaway: "Update cooling pages before the first hot spell and heating pages before the first cold one. Use the quieter months to refresh maintenance offers, check booking forms and review which pages brought in calls last season.",
    cover: {
      url: "/assets/blog/hvac-seo-calendar.webp",
      thumbnail: "/assets/blog/hvac-seo-calendar-480.webp",
      alt: "HVAC technician inspecting an outdoor air-conditioning unit",
    },
    title: "HVAC SEO calendar: what to do each month to own the busy seasons",
    topic: "strategy",
    minutes: 7,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "A month-by-month HVAC SEO plan: what to publish, update and fix before summer and winter peaks so rankings are ready when the calls start.",
  },
  {
    slug: "how-much-does-local-seo-cost",
    takeaway: "Compare SEO quotes by the work included each month, the markets covered and how leads are measured. Estimate how many additional booked jobs would cover the fee using gross profit per job.",
    cover: {
      url: "/assets/blog/how-much-does-local-seo-cost.webp",
      thumbnail: "/assets/blog/how-much-does-local-seo-cost-480.webp",
      alt: "Business owner reviewing invoices and a calculator at a desk",
    },
    title: "How much does local SEO cost for a home service business?",
    topic: "strategy",
    minutes: 8,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "What local SEO costs for home service businesses, what each budget level gets you, the red flags to avoid, and how to check if it pays off.",
  },
  {
    slug: "local-link-building-for-contractors",
    takeaway: "Start with suppliers, associations and local partners who can genuinely recommend your work. Give them a useful resource to link to, then check that new links point to the page a referred customer needs.",
    cover: {
      url: "/assets/blog/local-link-building-for-contractors.webp",
      thumbnail: "/assets/blog/local-link-building-for-contractors-480.webp",
      alt: "Contractors discussing a brochure with a local supplier",
    },
    title: "Local link building for contractors: 15 ideas that actually work",
    topic: "local-seo",
    minutes: 8,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "15 safe, practical ways roofers, plumbers and HVAC companies earn local links, ranked by effort and value, plus the link tactics to avoid.",
  },
  {
    slug: "local-seo-audit",
    takeaway: "Audit the path a customer takes from search to booking. Check that your listing is accurate, your priority pages can be indexed, and a customer on a phone can reach you without getting stuck.",
    cover: {
      url: "/assets/blog/local-seo-audit.webp",
      thumbnail: "/assets/blog/local-seo-audit-480.webp",
      alt: "Business owner reviewing a website and printed checklist",
    },
    title: "How to audit your local SEO in 60 minutes (with a competitor scorecard)",
    topic: "strategy",
    minutes: 8,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "A 60-minute local SEO audit that compares you with the top 3 map competitors and shows exactly what to fix first.",
  },
  {
    slug: "local-business-schema-for-contractors",
    takeaway: "Mark up facts already visible on your site, such as your business name, phone and services. Keep those details consistent with your listing and validate the JSON-LD after publishing.",
    cover: {
      url: "/assets/blog/local-business-schema-for-contractors.webp",
      thumbnail: "/assets/blog/local-business-schema-for-contractors-480.webp",
      alt: "Code editor on a laptop beside work gloves",
    },
    title: "Local business schema for contractors: a plain-English guide with examples",
    topic: "technical",
    minutes: 6,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "What schema markup home service businesses actually need, which type to pick, a copy-ready JSON-LD example and the mistakes to avoid.",
  },
  {
    slug: "check-if-ai-recommends-your-business",
    takeaway: "Write a short list of service-and-city questions your customers ask. Run the same prompts across the AI tools you want to monitor and record the date, whether you were named, and which sources were cited.",
    cover: {
      url: "/assets/blog/check-if-ai-recommends-your-business.webp",
      thumbnail: "/assets/blog/check-if-ai-recommends-your-business-480.webp",
      alt: "Business owner comparing search results on a laptop and phone",
    },
    title: "Does ChatGPT recommend your business? How to check, and what to fix",
    topic: "ai-search",
    minutes: 7,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "A repeatable way to check whether ChatGPT, Gemini, Perplexity and Google's AI answers name your business, with test prompts and a fix map.",
  },
  {
    slug: "google-business-profile-suspended",
    takeaway: "Check the suspension notice against the profile rules, then collect registration and other evidence that matches the profile. Submit a single appeal with consistent business details and keep the case reference.",
    cover: {
      url: "/assets/blog/google-business-profile-suspended.webp",
      thumbnail: "/assets/blog/google-business-profile-suspended-480.webp",
      alt: "Contractor gathering business paperwork beside work van keys",
    },
    title: "Google Business Profile suspended? A contractor's guide to getting reinstated",
    topic: "google-maps",
    minutes: 7,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "Why Google suspends contractor profiles, what to fix before you appeal, and the evidence that gets a profile reinstated.",
  },
  {
    slug: "local-services-ads-vs-seo-for-contractors",
    takeaway: "Compare Local Services Ads and SEO using booked jobs and revenue by channel. Decide how much immediate demand you need and which services deserve a longer-term investment in organic visibility.",
    cover: {
      url: "/assets/blog/local-services-ads-vs-seo-for-contractors.webp",
      thumbnail: "/assets/blog/local-services-ads-vs-seo-for-contractors-480.webp",
      alt: "Contractor comparing lead reports at a desk",
    },
    title: "Local Services Ads vs SEO for contractors: which brings cheaper calls?",
    topic: "strategy",
    minutes: 6,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "How Local Services Ads, Google Ads and local SEO compare on cost per lead, speed and control, and how to choose.",
  },
  {
    slug: "how-to-get-more-septic-pumping-customers",
    takeaway: "Make your pumping page useful to a homeowner ready to call. List where you work, what affects the quote and how to prepare for a visit. Give emergency and routine jobs distinct contact instructions if your process differs.",
    cover: {
      url: "/assets/blog/how-to-get-more-septic-pumping-customers.webp",
      thumbnail: "/assets/blog/how-to-get-more-septic-pumping-customers-480.webp",
      alt: "Septic service truck and vacuum hose on a rural driveway",
    },
    title: "How to get more septic pumping customers from Google: a 90-day plan",
    topic: "local-seo",
    minutes: 6,
    date: "2026-10-18",
    updated: "2026-11-21",
    excerpt:
      "A 90-day plan for septic companies to get more pumping, inspection and repair calls from Google across a wide service area.",
  },
  {
    slug: "get-recommended-by-chatgpt",
    takeaway: "Make your service and coverage pages specific enough to answer who you help, what you do and where you work. Publish evidence you can verify and track whether AI answers cite those pages over time.",
    cover: {
      url: "/assets/blog/get-recommended-by-chatgpt.webp",
      thumbnail: "/assets/blog/get-recommended-by-chatgpt-480.webp",
      alt: "Business owner using a chat interface beside a work notebook",
    },
    title: "How to get your home service business recommended by ChatGPT and AI search",
    topic: "ai-search",
    minutes: 10,
    date: "2026-10-13",
    updated: "2026-11-21",
    featured: true,
    excerpt:
      "More homeowners now ask AI tools who to call. Here is where those answers come from, and the practical steps that make your business one of the names they hear.",
  },
  {
    slug: "geo-vs-seo-home-services",
    takeaway: "Use local SEO to improve visibility in search results and Maps. Test AI visibility separately with a repeatable set of customer questions and record the sources each answer cites.",
    cover: {
      url: "/assets/blog/geo-vs-seo-home-services.webp",
      thumbnail: "/assets/blog/geo-vs-seo-home-services-480.webp",
      alt: "Two screens showing a web search and a chat response",
    },
    title: "GEO vs SEO: what home service businesses actually need to know",
    topic: "ai-search",
    minutes: 10,
    date: "2026-10-13",
    updated: "2026-11-21",
    excerpt:
      "Generative engine optimization is the new buzzword. What it really means for a roofer, plumber or HVAC company, and how it fits with the local SEO you already need.",
  },
  {
    slug: "local-seo-checklist-for-contractors",
    takeaway: "Start with the work that removes friction for customers. Verify your listing, test the phone and form on mobile, and improve the pages for your highest-priority jobs before expanding to new towns.",
    cover: {
      url: "/assets/blog/local-seo-checklist-for-contractors.webp",
      thumbnail: "/assets/blog/local-seo-checklist-for-contractors-480.webp",
      alt: "Home services contractor checking tasks on a workshop clipboard",
    },
    title: "Local SEO checklist for contractors",
    topic: "local-seo",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-11-21",
    excerpt:
      "A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each item yourself, in order.",
  },
  {
    slug: "how-to-rank-in-google-map-pack",
    takeaway: "Compare map rankings from several points across your service area. Improve category and service relevance, keep your profile accurate and track calls alongside changes in geographic coverage.",
    cover: {
      url: "/assets/blog/how-to-rank-in-google-map-pack.webp",
      thumbnail: "/assets/blog/how-to-rank-in-google-map-pack-480.webp",
      alt: "Phone displaying a street map and location markers",
    },
    title: "How to rank in the Google map pack",
    topic: "google-maps",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-11-21",
    excerpt:
      "What decides which three businesses show in the Google map pack, and the practical steps contractors can take to get into it.",
  },
  {
    slug: "technical-seo-for-service-business-websites",
    takeaway: "Check that your most important service pages return a successful status, can be indexed and have working mobile contact controls. Fix those issues before spending time on minor performance scores.",
    cover: {
      url: "/assets/blog/technical-seo-for-service-business-websites.webp",
      thumbnail: "/assets/blog/technical-seo-for-service-business-websites-480.webp",
      alt: "Developer testing a business website on desktop and mobile",
    },
    title: "Technical SEO for service business websites: the fixes that matter",
    topic: "technical",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-11-21",
    excerpt:
      "The technical SEO problems most common on contractor websites, and how to find and fix them without a developer degree.",
  },
  {
    slug: "service-area-pages-that-rank",
    takeaway: "Publish area pages for places you actually serve. Use relevant job examples, travel details or service limitations to explain what a customer in that area can expect.",
    cover: {
      url: "/assets/blog/service-area-pages-that-rank.webp",
      thumbnail: "/assets/blog/service-area-pages-that-rank-480.webp",
      alt: "Elevated view of tree-lined suburban neighborhoods",
    },
    title: "How to write service area pages that rank (without doorway spam)",
    topic: "content",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-11-21",
    excerpt:
      "How home-service businesses can create location pages for the towns they serve that are genuinely useful, rank well and stay clear of Google's doorway rules.",
  },
  {
    slug: "how-long-does-local-seo-take",
    takeaway: "Set a baseline for impressions, calls and booked jobs before changing anything. Compare similar seasons and use early visibility changes to decide what to investigate while lead volume catches up.",
    cover: {
      url: "/assets/blog/how-long-does-local-seo-take.webp",
      thumbnail: "/assets/blog/how-long-does-local-seo-take-480.webp",
      alt: "Business owner comparing printed search charts and a calendar",
    },
    title: "How long does local SEO take? A realistic timeline",
    topic: "strategy",
    minutes: 10,
    date: "2026-10-01",
    updated: "2026-11-21",
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


/** Preserve each article's search title and description while sharing its image and dates. */
export function postMeta(post: Post, { title, description }: { title: string; description: string }) {
  const metadata = pageMeta({
    title,
    description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: { url: post.cover.url, width: 1200, height: 675, alt: post.cover.alt },
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article" as const,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [SITE_NAME],
      section: topicOf(post.topic).name,
    },
  };
}
