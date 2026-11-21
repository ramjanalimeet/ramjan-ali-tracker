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
  graphic: { title: string; steps: string[] };
  /** Shown large at the top of the blog page. */
  featured?: boolean;
};

/** Blog articles, newest first. Each has its own page under app/blog/<slug>. */
export const POSTS: Post[] = [
  {
    slug: "google-business-profile-categories-for-contractors",
    takeaway: "Start with the category that describes the work your business mainly sells. Add secondary categories for services you actually provide, then check that your website gives customers a clear way to book those services.",
    cover: {
      url: "/assets/blog/google-business-profile-categories-for-contractors-editorial.webp",
      thumbnail: "/assets/blog/google-business-profile-categories-for-contractors-editorial-640.webp",
      alt: "Illustrated business profile card for a guide to choosing GBP categories.",
    },
    graphic: {
      title: "Choose your GBP categories",
      steps: [
        "Primary category: Pick the category that describes your main business.",
        "Secondary categories: Add only categories for work you actually provide.",
        "Service pages: Make each advertised service easy to find and book.",
      ],
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
      url: "/assets/blog/how-to-get-more-google-reviews-editorial.webp",
      thumbnail: "/assets/blog/how-to-get-more-google-reviews-editorial-640.webp",
      alt: "Three stars inside a review card for a guide to getting Google reviews.",
    },
    graphic: {
      title: "Build a review routine",
      steps: [
        "Finish the job: Confirm the work is complete and explain what comes next.",
        "Send your review link: Ask customers for an honest review using a direct link.",
        "Reply to feedback: Answer reviews without exposing private job details.",
      ],
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
      url: "/assets/blog/roofing-storm-damage-leads-editorial.webp",
      thumbnail: "/assets/blog/roofing-storm-damage-leads-editorial-640.webp",
      alt: "House and lightning bolt for a guide to roofing leads after storms.",
    },
    graphic: {
      title: "Turn storm demand into calls",
      steps: [
        "Storm damage page: Explain what you inspect and which areas you cover.",
        "Availability: Update response times after severe weather.",
        "Booked inspections: Track calls and which ones turn into inspections.",
      ],
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
      url: "/assets/blog/high-value-plumbing-keywords-editorial.webp",
      thumbnail: "/assets/blog/high-value-plumbing-keywords-editorial-640.webp",
      alt: "Plumbing pipes for a guide to keywords that attract calls.",
    },
    graphic: {
      title: "Map plumbing keywords to jobs",
      steps: [
        "Drain cleaning: Give recurring clogs and blocked drains one useful service page.",
        "Water heater repair: Explain repair and replacement options on a focused page.",
        "Emergency plumbing: Set clear hours and show the fastest way to reach you.",
      ],
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
      url: "/assets/blog/hvac-seo-calendar-editorial.webp",
      thumbnail: "/assets/blog/hvac-seo-calendar-editorial-640.webp",
      alt: "Calendar with sun and snowflake icons for seasonal HVAC SEO.",
    },
    graphic: {
      title: "Plan around HVAC seasons",
      steps: [
        "Before cooling season: Update AC repair and installation pages before demand peaks.",
        "Between peaks: Check maintenance offers, forms and last season’s leads.",
        "Before heating season: Refresh heating pages and confirm emergency coverage.",
      ],
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
      url: "/assets/blog/how-much-does-local-seo-cost-editorial.webp",
      thumbnail: "/assets/blog/how-much-does-local-seo-cost-editorial-640.webp",
      alt: "Budget checklist for comparing local SEO costs.",
    },
    graphic: {
      title: "Compare SEO plans by scope",
      steps: [
        "Scope: Compare the pages, listings and reports each quote includes.",
        "Cost: Add setup fees and monthly charges over the same period.",
        "Break-even jobs: Divide monthly SEO cost by gross profit per booked job.",
      ],
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
      url: "/assets/blog/local-link-building-for-contractors-editorial.webp",
      thumbnail: "/assets/blog/local-link-building-for-contractors-editorial-640.webp",
      alt: "Connected dots for a guide to earning links through local relationships.",
    },
    graphic: {
      title: "Earn local referrals and links",
      steps: [
        "Suppliers: Ask about relevant partner or installer directories.",
        "Trade associations: Update your member profile and service information.",
        "Community partners: Share a genuinely useful resource they can reference.",
      ],
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
      url: "/assets/blog/local-seo-audit-editorial.webp",
      thumbnail: "/assets/blog/local-seo-audit-editorial-640.webp",
      alt: "Checklist and magnifier for finding gaps in a local SEO audit.",
    },
    graphic: {
      title: "Audit the path to a lead",
      steps: [
        "Search Console: Check whether key service pages are indexed and earning clicks.",
        "Business Profile: Verify services, coverage, hours and contact information.",
        "Mobile site: Test the call button and finish a test form submission.",
      ],
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
      url: "/assets/blog/local-business-schema-for-contractors-editorial.webp",
      thumbnail: "/assets/blog/local-business-schema-for-contractors-editorial-640.webp",
      alt: "Code window for a guide to LocalBusiness structured data.",
    },
    graphic: {
      title: "Check your LocalBusiness schema",
      steps: [
        "Visible facts: Use the business details a customer can verify on your site.",
        "JSON-LD: Use the same name, phone and website in structured data.",
        "Validation: Check the rendered page after publishing and fix errors.",
      ],
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
      url: "/assets/blog/check-if-ai-recommends-your-business-editorial.webp",
      thumbnail: "/assets/blog/check-if-ai-recommends-your-business-editorial-640.webp",
      alt: "Chat bubble for checking whether AI tools recommend a business.",
    },
    graphic: {
      title: "Track AI mentions and sources",
      steps: [
        "Record the prompt: Use the same service-and-location questions each time.",
        "Record the answer: Note the date, tool and whether the business was mentioned.",
        "Record cited sources: Save the links and compare them between checks.",
      ],
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
      url: "/assets/blog/google-business-profile-suspended-editorial.webp",
      thumbnail: "/assets/blog/google-business-profile-suspended-editorial-640.webp",
      alt: "Alert shield for handling a suspended Google Business Profile.",
    },
    graphic: {
      title: "Prepare a GBP appeal",
      steps: [
        "Read the notice: Identify the profile or policy issue listed by Google.",
        "Collect matching records: Gather business documents that match the profile details.",
        "Submit and track: Keep the appeal reference and check for a response.",
      ],
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
      url: "/assets/blog/local-services-ads-vs-seo-for-contractors-editorial.webp",
      thumbnail: "/assets/blog/local-services-ads-vs-seo-for-contractors-editorial-640.webp",
      alt: "Two report cards for comparing Local Services Ads and organic SEO.",
    },
    graphic: {
      title: "Compare lead sources",
      steps: [
        "Local Services Ads: Track charged leads and which ones turn into jobs.",
        "Organic SEO: Track calls and forms from service pages and Maps.",
        "Compare booked jobs: Use the same measurement window and compare cost per job.",
      ],
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
      url: "/assets/blog/how-to-get-more-septic-pumping-customers-editorial.webp",
      thumbnail: "/assets/blog/how-to-get-more-septic-pumping-customers-editorial-640.webp",
      alt: "Service truck for a guide to finding septic pumping customers.",
    },
    graphic: {
      title: "Turn local searches into bookings",
      steps: [
        "Show coverage: List the communities you serve and any limits.",
        "Explain the visit: Describe what changes the quote and how to prepare.",
        "Offer a clear next step: Show how customers book routine pumping or get urgent help.",
      ],
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
      url: "/assets/blog/get-recommended-by-chatgpt-editorial.webp",
      thumbnail: "/assets/blog/get-recommended-by-chatgpt-editorial-640.webp",
      alt: "Chat message with a citation marker for a guide to earning ChatGPT citations.",
    },
    graphic: {
      title: "Make your business easy to cite",
      steps: [
        "Clear service pages: State the work you do and the areas you cover.",
        "Verifiable evidence: Link to factual examples, credentials or references you can verify.",
        "Citation checks: Track which sources AI answers point to over time.",
      ],
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
      url: "/assets/blog/geo-vs-seo-home-services-editorial.webp",
      thumbnail: "/assets/blog/geo-vs-seo-home-services-editorial-640.webp",
      alt: "Search bubble for comparing local SEO and generative engine optimization.",
    },
    graphic: {
      title: "Measure SEO and GEO separately",
      steps: [
        "Local SEO: Measure organic visits, Maps visibility and calls.",
        "GEO: Track mentions and citations across a fixed question set.",
        "Shared foundation: Keep business details and service information consistent.",
      ],
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
      url: "/assets/blog/local-seo-checklist-for-contractors-editorial.webp",
      thumbnail: "/assets/blog/local-seo-checklist-for-contractors-editorial-640.webp",
      alt: "Checklist for local SEO tasks contractors can work through.",
    },
    graphic: {
      title: "Work through a local SEO checklist",
      steps: [
        "Business Profile: Verify your category, details, service area and hours.",
        "Service pages: Improve the pages for jobs you most want to book.",
        "Lead capture: Test call links and forms and log where leads come from.",
      ],
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
      url: "/assets/blog/how-to-rank-in-google-map-pack-editorial.webp",
      thumbnail: "/assets/blog/how-to-rank-in-google-map-pack-editorial-640.webp",
      alt: "Map with two location pins for comparing Google Maps rankings.",
    },
    graphic: {
      title: "Read map rankings by location",
      steps: [
        "Pick a keyword: Use the same service query at every grid point.",
        "Record each point: Record individual ranks because visibility changes by location.",
        "Compare calls: Look at Business Profile call clicks and compare booked jobs separately.",
      ],
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
      url: "/assets/blog/technical-seo-for-service-business-websites-editorial.webp",
      thumbnail: "/assets/blog/technical-seo-for-service-business-websites-editorial-640.webp",
      alt: "Desktop screen and phone for auditing technical SEO on service websites.",
    },
    graphic: {
      title: "Check pages before tuning speed",
      steps: [
        "Status and access: Confirm key pages load successfully and can be crawled.",
        "Indexing: Use Search Console URL Inspection to check the indexed version.",
        "Mobile experience: Check the site and its main contact actions on a phone.",
      ],
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
      url: "/assets/blog/service-area-pages-that-rank-editorial.webp",
      thumbnail: "/assets/blog/service-area-pages-that-rank-editorial-640.webp",
      alt: "Map with three location pins for building useful service area pages.",
    },
    graphic: {
      title: "Build pages for places you serve",
      steps: [
        "Confirm coverage: Choose areas your team can actually reach and serve.",
        "Add local detail: Describe relevant jobs, access considerations or service limits.",
        "Connect the pages: Link each area to the services people can book there.",
      ],
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
      url: "/assets/blog/how-long-does-local-seo-take-editorial.webp",
      thumbnail: "/assets/blog/how-long-does-local-seo-take-editorial-640.webp",
      alt: "Illustrative trend chart for tracking organic search visibility over time.",
    },
    graphic: {
      title: "Track visibility and booked jobs",
      steps: [
        "Visibility: Use Search Console to compare impressions for priority pages.",
        "Lead activity: Review organic inquiry and Business Profile call-click trends.",
        "Booked jobs: Confirm outcomes in your own job or CRM records.",
      ],
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
    image: { url: post.cover.url, width: 1600, height: 900, alt: post.cover.alt },
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
