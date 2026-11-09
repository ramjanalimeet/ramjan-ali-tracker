import { type OnlineService, OnlineServicePage } from "@/components/OnlineServicePage";
import { SHOPIFY_PLANS, usd } from "@/lib/pricing";
import { pageMeta } from "@/lib/site";

const S: OnlineService = {
  path: "/seo-services/shopify-seo",
  name: "Shopify SEO",
  title: "Shopify SEO Services & Pricing | Ramjan Ali Akash",
  description:
    `Shopify SEO: fix duplicate product URLs, slow themes and thin collection pages, then grow organic sales. Plans from ${usd(SHOPIFY_PLANS[0].price)}/month.`,
  eyebrow: "SEO Services · Shopify",
  h1: ["Shopify SEO that grows ", "sales", "."],
  lead: "Shopify is a great platform to sell on, but it has SEO quirks: duplicate product URLs, heavy apps, thin collection pages and a fixed URL structure. I work with those limits to get your store ranking.",
  facts: [
    ["For", "Shopify and Shopify Plus stores"],
    ["Focus", "Collections, products, speed and structure"],
    ["Measured by", "Organic revenue and orders"],
    ["Contract", "Month to month. Pause or cancel with a week of notice."],
  ],
  why: {
    heading: "Common Shopify SEO problems.",
    paragraphs: [
      "Shopify creates more than one URL for the same product when it is reached through a collection. Tag pages can multiply into thin, near-empty pages. Every app you install can add scripts that slow the store down.",
      "None of this means Shopify is bad for SEO. It means a Shopify store needs a few specific fixes, and then steady work on the collection and product pages that customers search for.",
    ],
    listTitle: "What I fix",
    list: [
      "Collection-path product URLs and canonicals",
      "Tag and filter pages that should not be indexed",
      "Theme speed and unused app scripts",
      "Collection page copy and FAQs",
      "Product title, meta and schema templates",
      "Image size and alt text",
      "Blog posts that link to collections",
      "Shopify Markets and multi-language setup",
    ],
  },
  included: {
    heading: "What Shopify SEO includes.",
    cards: [
      ["Store audit", "A full review of your theme, apps, URLs, indexing and content, with fixes in priority order."],
      ["Speed work", "Theme and app cleanup aimed at passing Core Web Vitals on mobile."],
      ["Collections", "Collection pages built to rank for the category searches that bring buyers."],
      ["Products", "Templates for titles, descriptions and schema across your whole catalog."],
      ["Content", "Guides and comparison posts that answer buyer questions and link to collections."],
      ["Authority", "Relevant links and mentions for your most valuable collections."],
    ],
  },
  pricingHeading: "Shopify SEO pricing.",
  plans: SHOPIFY_PLANS,
  faq: [
    {
      q: "Is Shopify good for SEO?",
      a: "Yes. It handles a lot well out of the box. It does need specific fixes for duplicate URLs, tag pages and app bloat, plus steady work on collection pages.",
    },
    {
      q: "Do you need access to my Shopify admin?",
      a: "Yes, staff access with the permissions needed for themes, products and content. You can remove it anytime.",
    },
    {
      q: "Will SEO changes break my theme?",
      a: "No. Changes are tested on a duplicate theme first and published only after you approve them.",
    },
    {
      q: "Do you work with Shopify Plus?",
      a: "Yes, including Shopify Markets, multi-language and multi-currency stores.",
    },
  ],
  topics: ["technical", "content", "strategy"],
  ctaTitle: "Find out what is holding your Shopify store back.",
  ctaText: "Book a free strategy call. I will review your site, content, links and top competitors, and show you what I would fix first, whether you hire me or not.",
};

export const metadata = pageMeta({ title: S.title, description: S.description, path: S.path });

export default function ShopifySeoPage() {
  return <OnlineServicePage s={S} />;
}
