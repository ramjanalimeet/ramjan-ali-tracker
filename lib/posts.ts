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
  graphic: { height: number; mobileHeight: number; title: string; caption: string; steps: string[] };
  /** Shown large at the top of the blog page. */
  featured?: boolean;
};

/** Blog articles, newest first. Each has its own page under app/blog/<slug>. */
export const POSTS: Post[] = [
  {
    slug: "google-business-profile-categories-for-contractors",
    takeaway: "Start with the category that describes the work your business mainly sells. Add secondary categories for services you actually provide, then check that your website gives customers a clear way to book those services.",
    cover: {
      url: "/assets/blog/google-business-profile-categories-for-contractors-story.webp",
      thumbnail: "/assets/blog/google-business-profile-categories-for-contractors-story-640.webp",
      alt: "Google Business Profile. Example: Roofing contractor.",
    },
    graphic: {
      height: 602,
      mobileHeight: 650,
      title: "Google Business Profile",
      caption: "A roofing contractor can list a secondary category when it describes a service the company actually offers.",
      steps: [
        "Primary category: Roofing contractor",
        "Secondary category: Gutter cleaning service",
        "Website: Roof repair and gutter services",
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
      url: "/assets/blog/how-to-get-more-google-reviews-story.webp",
      thumbnail: "/assets/blog/how-to-get-more-google-reviews-story-640.webp",
      alt: "Google reviews. Example: After a completed service call.",
    },
    graphic: {
      height: 656,
      mobileHeight: 654,
      title: "Google reviews",
      caption: "A direct link makes it easier for customers to leave an honest review.",
      steps: [
        "Ask: Thanks for choosing us. Would you share an honest review?",
        "Make it easy: Send your direct Google review link.",
        "Reply: Thank the customer without sharing job details.",
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
      url: "/assets/blog/roofing-storm-damage-leads-story.webp",
      thumbnail: "/assets/blog/roofing-storm-damage-leads-story-640.webp",
      alt: "Google Search. Example: emergency roof repair after hail.",
    },
    graphic: {
      height: 602,
      mobileHeight: 608,
      title: "Google Search",
      caption: "Storm-related searches can signal different needs, from urgent repairs to insurance research.",
      steps: [
        "Urgent search: Emergency roof repair",
        "Inspection search: Hail damage roof inspection",
        "Insurance research: What to document after hail",
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
      url: "/assets/blog/high-value-plumbing-keywords-story.webp",
      thumbnail: "/assets/blog/high-value-plumbing-keywords-story-640.webp",
      alt: "Plumbing keyword tracker. Example: Service and location queries.",
    },
    graphic: {
      height: 718,
      mobileHeight: 636,
      title: "Plumbing keyword tracker",
      caption: "Example positions show how to track distinct plumbing jobs separately. These are sample rankings.",
      steps: [
        "drain cleaning near me: #3",
        "water heater repair: #6",
        "emergency plumber: #9",
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
      url: "/assets/blog/hvac-seo-calendar-story.webp",
      thumbnail: "/assets/blog/hvac-seo-calendar-story-640.webp",
      alt: "HVAC search calendar. Example: Publish ahead of demand.",
    },
    graphic: {
      height: 454,
      mobileHeight: 598,
      title: "HVAC search calendar",
      caption: "Publish cooling and heating content before seasonal demand peaks.",
      steps: [
        "SPRING: Update AC repair and tune-up pages",
        "SUMMER: Track cooling calls and appointment capacity",
        "FALL: Refresh furnace and maintenance pages",
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
      url: "/assets/blog/how-much-does-local-seo-cost-story.webp",
      thumbnail: "/assets/blog/how-much-does-local-seo-cost-story-640.webp",
      alt: "Break-even estimate. Example: Illustrative monthly budget.",
    },
    graphic: {
      height: 490,
      mobileHeight: 438,
      title: "Break-even estimate",
      caption: "At $900 a month and $300 gross profit per additional booked job, three jobs cover the SEO fee in this example.",
      steps: [
        "SEO fee: $900",
        "Gross profit / job: $300",
        "Jobs to cover fee: 3 jobs",
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
      url: "/assets/blog/local-link-building-for-contractors-story.webp",
      thumbnail: "/assets/blog/local-link-building-for-contractors-story-640.webp",
      alt: "Find local backlink opportunities. Example: roofing supplier contractor directory.",
    },
    graphic: {
      height: 950,
      mobileHeight: 990,
      title: "Find local backlink opportunities",
      caption: "Start with real relationships that can send people to your service pages.",
      steps: [
        "Supplier directory: Ask for a listing on an installer page.",
        "Trade association: Update your member profile and website link.",
        "Community partner: Share a local resource worth referencing.",
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
      url: "/assets/blog/local-seo-audit-story.webp",
      thumbnail: "/assets/blog/local-seo-audit-story-640.webp",
      alt: "Local SEO audit scorecard. Example: Compare the same items across businesses.",
    },
    graphic: {
      height: 650,
      mobileHeight: 582,
      title: "Local SEO audit scorecard",
      caption: "Compare the same listing, website and lead-tracking checks across competitors.",
      steps: [
        "Primary GBP category: Check",
        "Indexing on service pages: Verify",
        "Tracked calls and forms: Test",
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
      url: "/assets/blog/local-business-schema-for-contractors-story.webp",
      thumbnail: "/assets/blog/local-business-schema-for-contractors-story-640.webp",
      alt: "LocalBusiness structured data. Example: Example contractor entity.",
    },
    graphic: {
      height: 670,
      mobileHeight: 562,
      title: "LocalBusiness structured data",
      caption: "Keep the business details in structured data consistent with what visitors can read on the page.",
      steps: [
        "@type: RoofingContractor",
        "name: Example Roofing",
        "areaServed: Tampa, FL",
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
      url: "/assets/blog/check-if-ai-recommends-your-business-story.webp",
      thumbnail: "/assets/blog/check-if-ai-recommends-your-business-story-640.webp",
      alt: "Track AI recommendations. Example: Who repairs water heaters in Tampa?.",
    },
    graphic: {
      height: 672,
      mobileHeight: 744,
      title: "Track AI recommendations",
      caption: "Record the service, location, date and cited source each time you test an AI recommendation.",
      steps: [
        "Mention: Was your business named?",
        "Source: Which website was cited?",
        "Repeat: Compare results with the same prompt.",
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
      url: "/assets/blog/google-business-profile-suspended-story.webp",
      thumbnail: "/assets/blog/google-business-profile-suspended-story-640.webp",
      alt: "Google Business Profile appeal. Example: Evidence to compare with your listing.",
    },
    graphic: {
      height: 602,
      mobileHeight: 650,
      title: "Google Business Profile appeal",
      caption: "Review the appeal evidence for consistency with your profile before submitting it.",
      steps: [
        "Business name: Matches registration or license",
        "Business address: Matches eligible location evidence",
        "Service area: Reflects places you actually serve",
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
      url: "/assets/blog/local-services-ads-vs-seo-for-contractors-story.webp",
      thumbnail: "/assets/blog/local-services-ads-vs-seo-for-contractors-story-640.webp",
      alt: "Where Google leads come from. Example: roof repair near me.",
    },
    graphic: {
      height: 602,
      mobileHeight: 608,
      title: "Where Google leads come from",
      caption: "Identify the search surface where a lead first found you before comparing channel performance.",
      steps: [
        "Sponsored: Local Services Ads",
        "Map pack: Google Business Profile listings",
        "Organic results: Service pages and guides",
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
      url: "/assets/blog/how-to-get-more-septic-pumping-customers-story.webp",
      thumbnail: "/assets/blog/how-to-get-more-septic-pumping-customers-story-640.webp",
      alt: "Search intent for septic services. Example: septic pumping near me.",
    },
    graphic: {
      height: 602,
      mobileHeight: 646,
      title: "Search intent for septic services",
      caption: "Separate routine pumping searches from urgent calls and pricing research.",
      steps: [
        "Routine maintenance: Schedule septic tank pumping",
        "Urgent help: Septic backup or overflowing tank",
        "Buyer research: Septic pumping cost in your area",
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
      url: "/assets/blog/get-recommended-by-chatgpt-story.webp",
      thumbnail: "/assets/blog/get-recommended-by-chatgpt-story-640.webp",
      alt: "An answer-first service page. Example: Who repairs leaking roofs in Tampa?.",
    },
    graphic: {
      height: 716,
      mobileHeight: 782,
      title: "An answer-first service page",
      caption: "State the service and location early, then give readers verifiable evidence for the claim.",
      steps: [
        "Service: Name the repair you handle.",
        "Location: Say which neighborhoods you serve.",
        "Evidence: Link to a relevant job example or credential.",
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
      url: "/assets/blog/geo-vs-seo-home-services-story.webp",
      thumbnail: "/assets/blog/geo-vs-seo-home-services-story-640.webp",
      alt: "Compare SEO and GEO signals. Example: Two ways people find your business.",
    },
    graphic: {
      height: 650,
      mobileHeight: 582,
      title: "Compare SEO and GEO signals",
      caption: "Measure search clicks, Business Profile call clicks and AI citations as distinct signals.",
      steps: [
        "Google Search: Clicks",
        "Google Maps: Call clicks",
        "AI answers: Citations",
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
      url: "/assets/blog/local-seo-checklist-for-contractors-story.webp",
      thumbnail: "/assets/blog/local-seo-checklist-for-contractors-story-640.webp",
      alt: "Google Business Profile checklist. Example: What a customer sees before calling.",
    },
    graphic: {
      height: 602,
      mobileHeight: 650,
      title: "Google Business Profile checklist",
      caption: "Check the profile details that help customers decide if they can reach you.",
      steps: [
        "Category: Matches your main service",
        "Hours: Includes holiday exceptions",
        "Contact: Call and website links work",
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
      url: "/assets/blog/how-to-rank-in-google-map-pack-story.webp",
      thumbnail: "/assets/blog/how-to-rank-in-google-map-pack-story-640.webp",
      alt: "Google Maps rank grid. Example: emergency plumber near me.",
    },
    graphic: {
      height: 712,
      mobileHeight: 658,
      title: "Google Maps rank grid",
      caption: "This illustrative grid shows how the same query can return different rankings at different locations.",
      steps: [
        "North side: #2",
        "City center: #5",
        "South side: #9",
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
      url: "/assets/blog/technical-seo-for-service-business-websites-story.webp",
      thumbnail: "/assets/blog/technical-seo-for-service-business-websites-story-640.webp",
      alt: "Search Console URL Inspection. Example: /services/drain-cleaning.",
    },
    graphic: {
      height: 704,
      mobileHeight: 696,
      title: "Search Console URL Inspection",
      caption: "Compare the indexed URL, declared canonical and live fetch when investigating an indexing issue.",
      steps: [
        "Page indexing: URL is on Google",
        "Declared canonical: /services/drain-cleaning",
        "Live test: Check that Google can fetch it",
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
      url: "/assets/blog/service-area-pages-that-rank-story.webp",
      thumbnail: "/assets/blog/service-area-pages-that-rank-story-640.webp",
      alt: "Plan a service area page. Example: Roof repair in your service area.",
    },
    graphic: {
      height: 852,
      mobileHeight: 896,
      title: "Plan a service area page",
      caption: "A service area page should tell a visitor what you do locally and how to book it.",
      steps: [
        "Confirmed coverage: Name the town you serve",
        "Local evidence: Show a nearby job example",
        "Next step: Link to roof repair and booking",
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
      url: "/assets/blog/how-long-does-local-seo-take-story.webp",
      thumbnail: "/assets/blog/how-long-does-local-seo-take-story-640.webp",
      alt: "Search Console + GBP. Example: Illustrative search visibility trend.",
    },
    graphic: {
      height: 860,
      mobileHeight: 852,
      title: "Search Console + GBP",
      caption: "Read impressions, call clicks and verified bookings together. The example trend is illustrative.",
      steps: [
        "Search impressions: Check Search Console",
        "GBP call clicks: Review Business Profile performance",
        "Booked jobs: Verify in your CRM",
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
