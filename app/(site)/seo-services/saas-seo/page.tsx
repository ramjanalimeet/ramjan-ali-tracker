import { type OnlineService, OnlineServicePage } from "@/components/OnlineServicePage";
import { SAAS_PLANS, usd } from "@/lib/pricing";
import { pageMeta } from "@/lib/site";

const S: OnlineService = {
  path: "/seo-services/saas-seo",
  name: "SaaS SEO",
  title: "SaaS SEO Services & Pricing | Ramjan Ali Akash",
  description:
    `SaaS SEO that turns search into trials and demos: feature, use-case, comparison and integration pages, technical SEO and links. Plans from ${usd(SAAS_PLANS[0].price)}/month.`,
  eyebrow: "SEO Services · SaaS",
  h1: ["SaaS SEO that drives ", "signups", "."],
  lead: "Traffic is easy to buy and hard to keep. SaaS SEO builds the pages your buyers search for when they compare tools, look for alternatives and solve the problem your product fixes, so organic search becomes a steady source of trials and demos.",
  facts: [
    ["For", "B2B and B2C SaaS, from early stage to scale-up"],
    ["Focus", "Feature, use-case, comparison and integration pages"],
    ["Measured by", "Trials, demos and signups from search"],
    ["Contract", "Month to month. Pause or cancel with a week of notice."],
  ],
  why: {
    heading: "Blog traffic is not pipeline.",
    paragraphs: [
      'Many SaaS companies publish lots of top-of-funnel articles that bring visitors who never sign up. Meanwhile the searches closest to a purchase, like "best tool for X", "Y alternatives" or "Z integration", go to competitors and review sites.',
      "SaaS SEO starts at the bottom of the funnel: the pages that convert. Then it builds outward with content that earns links and feeds those pages.",
    ],
    listTitle: "What I work on",
    list: [
      "Keyword map by funnel stage",
      "Feature and use-case pages",
      "Comparison and alternatives pages",
      "Integration and template pages",
      "Technical SEO for app and marketing sites",
      "Programmatic pages that scale",
      "Links and PR mentions",
      "Visibility in AI answers",
    ],
  },
  included: {
    heading: "What SaaS SEO includes.",
    cards: [
      ["Funnel keyword map", "Every search your buyers make, grouped by intent and matched to one page."],
      ["Bottom-of-funnel pages", "Comparison, alternatives and use-case pages built to convert, not just rank."],
      ["Product-led content", "Articles that show your product solving real problems, with clear paths to signup."],
      ["Technical health", "Clean indexing between your marketing site, docs, blog and app."],
      ["Authority", "Relevant links and mentions from industry publications and partners."],
      ["Reporting", "Signups, trials and demos from organic search, not just traffic."],
    ],
  },
  pricingHeading: "SaaS SEO pricing.",
  plans: SAAS_PLANS,
  faq: [
    {
      q: "How long does SaaS SEO take?",
      a: "Bottom-of-funnel pages can start bringing signups within 2 to 4 months. Competitive category terms usually take 6 to 12 months.",
    },
    {
      q: "Do you write the content?",
      a: "Yes. I write or brief every page, and your team reviews product details before anything is published.",
    },
    {
      q: "Do you work with B2B SaaS?",
      a: "Yes, B2B and B2C. The strategy changes with deal size and sales cycle, but the funnel-first approach stays the same.",
    },
    {
      q: "How do you measure results?",
      a: "Signups, trials and demo requests from organic search, alongside rankings for the pages that matter.",
    },
  ],
  topics: ["content", "ai-search", "technical"],
  ctaTitle: "Find out which searches should be bringing you signups.",
  ctaText: "Book a free strategy call. I will review your site, content, links and top competitors, and show you what I would fix first, whether you hire me or not.",
};

export const metadata = pageMeta({ title: S.title, description: S.description, path: S.path });

export default function SaasSeoPage() {
  return <OnlineServicePage s={S} />;
}
