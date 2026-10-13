export type Post = { slug: string; title: string; tag: string; minutes: number; excerpt: string };

/** Blog articles, newest first. Each has its own page under app/blog/<slug>. */
export const POSTS: Post[] = [
  {
    slug: "local-seo-checklist-for-contractors",
    title: "Local SEO checklist for contractors",
    tag: "Local SEO",
    minutes: 8,
    excerpt:
      "A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each item yourself, in order.",
  },
  {
    slug: "how-to-rank-in-google-map-pack",
    title: "How to rank in the Google map pack",
    tag: "Google Maps",
    minutes: 7,
    excerpt:
      "What decides which three businesses show in the Google map pack, and the practical steps contractors can take to get into it.",
  },
  {
    slug: "technical-seo-for-service-business-websites",
    title: "Technical SEO for service business websites: the fixes that matter",
    tag: "Technical SEO",
    minutes: 7,
    excerpt:
      "The technical SEO problems most common on contractor websites, and how to find and fix them without a developer degree.",
  },
  {
    slug: "service-area-pages-that-rank",
    title: "How to write service area pages that rank (without doorway spam)",
    tag: "Content SEO",
    minutes: 7,
    excerpt:
      "How home-service businesses can create location pages for the towns they serve that are genuinely useful, rank well and stay clear of Google's doorway rules.",
  },
  {
    slug: "how-long-does-local-seo-take",
    title: "How long does local SEO take? A realistic timeline",
    tag: "SEO Strategy",
    minutes: 6,
    excerpt:
      "A realistic month-by-month timeline for local SEO results for home-service businesses, and what changes how fast you see them.",
  },
];
