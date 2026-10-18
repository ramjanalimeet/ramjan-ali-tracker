/**
 * 90-day playbooks shown on /case-studies. These are typical starting points
 * and the work that follows, not results from named clients. Real client case
 * studies get added here only with the client's permission and real numbers.
 */
export type ServiceKey = "local-seo" | "ai-search" | "technical" | "on-page" | "links" | "audit";

export const PLAYBOOK_SERVICES: { key: ServiceKey; name: string; href: string }[] = [
  { key: "local-seo", name: "Local SEO", href: "/local-seo" },
  { key: "ai-search", name: "GEO & AI Visibility", href: "/ai-search" },
  { key: "technical", name: "Technical SEO", href: "/seo-services/technical-seo" },
  { key: "on-page", name: "On-Page SEO", href: "/seo-services/on-page-seo" },
  { key: "links", name: "Link Building", href: "/seo-services/link-building" },
  { key: "audit", name: "SEO Audit", href: "/seo-services/seo-audits" },
];

export type Playbook = {
  id: string;
  trade: string;
  /** Industry page under /local-seo. */
  tradeSlug: string;
  service: ServiceKey;
  plan: "Starter" | "Growth" | "Pro";
  title: string;
  summary: string;
  start: string[];
  first90: string[];
  measured: string[];
};

export const PLAYBOOKS: Playbook[] = [
  {
    id: "roofing-storm",
    trade: "Roofing",
    tradeSlug: "roofing-seo",
    service: "local-seo",
    plan: "Growth",
    title: "A roofer losing storm work to out-of-town crews.",
    summary:
      "A profile with few photos and reviews, one generic services page, and storm chasers outranking them after every hail event.",
    start: [
      "Wrong or missing secondary categories",
      "One page for all services",
      "Reviews coming in only now and then",
      "No tracking of calls by source",
    ],
    first90: [
      "Profile rebuilt: categories, services, areas, job photos",
      "Separate pages for repair, replacement and storm damage",
      "Area pages for the top five towns",
      "Review requests after every job",
    ],
    measured: [
      "Map rankings across the service area",
      "Calls and forms from Google",
      "Inspection requests by service",
      "Review count and recency",
    ],
  },
  {
    id: "electrician-ai",
    trade: "Electrical",
    tradeSlug: "electrician-seo",
    service: "ai-search",
    plan: "Growth",
    title: "An electrician missing from ChatGPT and AI Overview answers.",
    summary:
      "Solid map rankings, but when homeowners ask AI tools for an electrician, competitors are named and this company never is.",
    start: [
      "Bing Places and Apple Business Connect never claimed",
      "Different hours and phone numbers across directories",
      "Service pages that never state towns, prices or response times",
      "Security plugin blocking AI crawlers",
    ],
    first90: [
      "Business details made identical on every major listing",
      "Panel upgrade, EV charger and rewiring pages rewritten to answer questions directly",
      "LocalBusiness and service schema added",
      "Crawler access fixed and 25 real customer questions tracked monthly",
    ],
    measured: [
      "How often the business is named in AI answers",
      "Accuracy of what AI tools say about it",
      "Map rankings for core services",
      "Calls from high-value service pages",
    ],
  },
  {
    id: "plumbing-onpage",
    trade: "Plumbing",
    tradeSlug: "plumbing-seo",
    service: "on-page",
    plan: "Growth",
    title: "A plumber getting small calls, wanting bigger jobs.",
    summary:
      "Decent rankings for 'plumber' but almost nothing for water heaters, repipes or sewer lines, the jobs that pay best.",
    start: [
      "Rankings only for broad terms",
      "No dedicated high-value service pages",
      "Titles and headings that never mention the towns served",
      "Thin pages with no proof or pricing",
    ],
    first90: [
      "Pages for water heaters, repipes, sewer and leak detection",
      "Titles, headings and copy rewritten around real searches",
      "Reviews, photos and price ranges added to each page",
      "Internal links pushing to the high-value pages",
    ],
    measured: [
      "Rankings for high-value services",
      "Calls by service type",
      "Average job value of leads from search",
      "Organic traffic to service pages",
    ],
  },
  {
    id: "pest-technical",
    trade: "Pest Control",
    tradeSlug: "pest-control-seo",
    service: "technical",
    plan: "Starter",
    title: "A pest control site Google could barely read.",
    summary:
      "Plenty of pages for every pest, but half of them were missing from Google's index and the site took ages to load on phones.",
    start: [
      "Key pest pages excluded from Google's index",
      "Slow mobile load times from oversized images",
      "Duplicate town pages competing with each other",
      "No structured data",
    ],
    first90: [
      "Indexing fixed and duplicate pages merged or redirected",
      "Images compressed and page speed improved on mobile",
      "Clean internal links between pest and town pages",
      "LocalBusiness and FAQ schema added",
    ],
    measured: [
      "Pages indexed in Search Console",
      "Mobile speed and Core Web Vitals",
      "Impressions and clicks for pest searches",
      "Calls and form leads",
    ],
  },
  {
    id: "hvac-seasonal",
    trade: "HVAC",
    tradeSlug: "hvac-seo",
    service: "local-seo",
    plan: "Growth",
    title: "An HVAC company invisible until summer is over.",
    summary: "SEO started in June, rankings arrived in September, after the rush.",
    start: ["No seasonal plan", "Thin pages for AC and heating", "No maintenance plan page", "Few recent reviews"],
    first90: [
      "Seasonal content calendar set before the next peak",
      "Strong AC, heating and heat pump pages",
      "Maintenance plan page and offer",
      "Seasonal profile posts",
    ],
    measured: [
      "Rankings before each season",
      "Repair vs replacement leads",
      "Maintenance plan sign-ups",
      "Calls from the map pack",
    ],
  },
  {
    id: "landscaping-links",
    trade: "Landscaping",
    tradeSlug: "landscaping-seo",
    service: "links",
    plan: "Pro",
    title: "A landscaper with great work and no local authority.",
    summary:
      "Beautiful projects and good reviews, but a site with almost no links, losing competitive design-build searches to older firms.",
    start: [
      "Almost no links from other local websites",
      "Supplier and association memberships not listed anywhere",
      "Award-winning projects never featured outside the site",
      "Competitors with years of local mentions",
    ],
    first90: [
      "Listings on supplier, manufacturer and association directories",
      "Local sponsorships and community projects turned into mentions",
      "Project stories pitched to local news and home magazines",
      "Links pointed at the design-build pages that matter most",
    ],
    measured: [
      "New links and mentions from local sites",
      "Rankings for design-build searches",
      "Mentions in AI answers",
      "Project enquiries from search",
    ],
  },
  {
    id: "septic-area",
    trade: "Septic",
    tradeSlug: "septic-seo",
    service: "local-seo",
    plan: "Pro",
    title: "A septic company with a 40-mile service area.",
    summary: "Ranking well near the yard, invisible in the towns 30 or 40 minutes away where many customers live.",
    start: [
      "Service area not set properly",
      "No county or town pages",
      "Reviews only from nearby customers",
      "No real estate inspection page",
    ],
    first90: [
      "Service area and categories fixed",
      "County and town pages with real local detail",
      "Real estate inspection page and agent outreach",
      "Reviews requested across the whole area",
    ],
    measured: ["Rankings town by town", "Calls by town and service", "Inspection requests", "Coverage across the area"],
  },
  {
    id: "restoration-audit",
    trade: "Water Damage Restoration",
    tradeSlug: "water-damage-restoration-seo",
    service: "audit",
    plan: "Starter",
    title: "A restoration company paying too much for leads.",
    summary:
      "Most jobs came from lead sellers and ads. They wanted to know why their own site and profile brought in so few emergency calls.",
    start: [
      "No clear picture of what was holding rankings back",
      "Profile hours not showing 24/7 availability",
      "Water, fire and mold all on one page",
      "No call tracking to compare sources",
    ],
    first90: [
      "Full audit of profile, site, citations, reviews and competitors",
      "Prioritized fix list, quick wins marked",
      "Emergency hours and services corrected first",
      "Roadmap for separate water, fire and mold pages",
    ],
    measured: [
      "Issues found and fixed",
      "Emergency calls from Google vs lead sites",
      "Map rankings for water damage searches",
      "Cost per job by source",
    ],
  },
];

export const serviceOf = (key: ServiceKey) => PLAYBOOK_SERVICES.find((s) => s.key === key)!;
