import { type OnlineService, OnlineServicePage } from "@/components/OnlineServicePage";
import { ECOMMERCE_PLANS, usd } from "@/lib/pricing";
import { pageMeta } from "@/lib/site";

const S: OnlineService = {
  path: "/seo-services/ecommerce-seo",
  name: "Ecommerce SEO",
  title: "Ecommerce SEO Services & Pricing | Ramjan Ali Akash",
  description:
    `Ecommerce SEO for online stores: category and product page optimization, technical fixes, faceted navigation, schema and links. Plans from ${usd(ECOMMERCE_PLANS[0].price)}/month.`,
  eyebrow: "SEO Services · Ecommerce",
  h1: ["Ecommerce SEO that brings ", "buyers", "."],
  lead: "Most buying searches land on category pages, not your homepage. I make your categories, products and store structure easy for Google to understand and hard for shoppers to ignore.",
  facts: [
    ["Platforms", "Shopify, WooCommerce, BigCommerce, Magento and custom"],
    ["Focus", "Category pages, product pages and site structure"],
    ["Measured by", "Organic revenue, not just traffic"],
    ["Contract", "Month to month. Pause or cancel with a week of notice."],
  ],
  why: {
    heading: "Stores leak rankings in predictable ways.",
    paragraphs: [
      "Filters that create thousands of duplicate URLs. Category pages with a heading and a grid but no words. Product pages copied from the manufacturer. Out-of-stock pages that disappear and take their links with them.",
      "Each one quietly caps how much search traffic a store can win. Fix them, and the categories you already have start ranking for the searches that end in a sale.",
    ],
    listTitle: "What I check and fix",
    list: [
      "Faceted navigation and duplicate URLs",
      "Category page content and structure",
      "Product titles, descriptions and templates",
      "Product, review and breadcrumb schema",
      "Internal links from blogs to categories",
      "Out-of-stock and discontinued products",
      "Site speed on mobile",
      "International stores and hreflang",
    ],
  },
  included: {
    heading: "What ecommerce SEO includes.",
    cards: [
      [
        "Keyword mapping",
        "Every buying search matched to the right category or product page, so pages stop competing with each other.",
      ],
      [
        "Category pages",
        "Useful copy, FAQs and internal links that help categories rank without hurting the shopping layout.",
      ],
      ["Product templates", "Title, description and schema templates that scale across the whole catalog."],
      ["Technical health", "Crawl control, canonical tags, pagination, speed and index cleanup."],
      ["Buying guides", "Content that answers pre-purchase questions and links to the categories that sell."],
      ["Links and PR", "Relevant links and mentions that build authority for your most valuable categories."],
    ],
  },
  pricingHeading: "Ecommerce SEO pricing.",
  plans: ECOMMERCE_PLANS,
  faq: [
    {
      q: "Which ecommerce platforms do you work with?",
      a: "Shopify, WooCommerce, BigCommerce, Magento and custom builds. For Shopify-specific work, see the Shopify SEO page.",
    },
    {
      q: "How long does ecommerce SEO take?",
      a: "Technical fixes and category improvements usually show movement in 6 to 12 weeks. Competitive product categories take 4 to 9 months of steady work.",
    },
    {
      q: "Will you write product descriptions?",
      a: "I build templates and rewrite priority products. For very large catalogs, I give your team a template and checklist to apply across the rest.",
    },
    {
      q: "How do you report results?",
      a: "Monthly, with organic revenue, transactions and rankings for your key categories, alongside the work done.",
    },
  ],
  topics: ["technical", "content", "strategy"],
  ctaTitle: "Find out what is holding your store back.",
  ctaText: "Book a free strategy call. I will review your site, content, links and top competitors, and show you what I would fix first, whether you hire me or not.",
};

export const metadata = pageMeta({ title: S.title, description: S.description, path: S.path });

export default function EcommerceSeoPage() {
  return <OnlineServicePage s={S} />;
}
