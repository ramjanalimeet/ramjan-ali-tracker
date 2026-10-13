import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PricingSection } from "@/components/PricingPlans";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AI_PLAN, PLANS, fromPrice, usd } from "@/lib/pricing";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

const TITLE = "Pricing | Local SEO & AI Search Visibility | Ramjan Ali Akash";
const DESCRIPTION = `All-in-one monthly pricing for home service businesses. Local SEO from ${usd(fromPrice())}/month, with GEO & AI Visibility included from ${usd(AI_PLAN.price)}/month.`;

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/pricing" });

const FAQ: FaqItem[] = [
  {
    q: "Are there setup fees?",
    a: "No. You pay the monthly price and nothing else. The first month covers the audit, plan and foundation fixes.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Every plan is month to month and can be paused or cancelled with a week of notice.",
  },
  {
    q: "Which plan is right for me?",
    a: "It depends on your market, competition and how many services and towns you want to rank for. The free audit shows where you stand, and I will recommend a plan in writing before anything starts.",
  },
  {
    q: "Why is GEO & AI Visibility part of the plans instead of sold separately?",
    a: "AI tools like ChatGPT, Gemini and Google's AI Overviews build their answers from the same profile, reviews, listings and pages that Local SEO works on. Doing both together is faster and cheaper, so Growth includes a medium level of GEO & AI work and Pro includes the full version.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can move up or down at the start of any month.",
  },
  {
    q: "Do you charge for ads or tools on top?",
    a: "No. Tracking and reporting tools are included. Ad spend is not part of these plans because I do not run ads.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/pricing#webpage`,
      url: `${SITE_URL}/pricing`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
      ],
    },
    {
      "@type": "Service",
      name: "Local SEO & GEO / AI Visibility",
      url: `${SITE_URL}/pricing`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: "Worldwide",
      offers: PLANS.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.price,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      })),
    },
    faqSchema(FAQ),
  ],
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="phero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Pricing</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Pricing</span>
              <h1>
                Simple, <span className="hl">monthly</span> pricing.
              </h1>
              <p className="lead">
                One all-in-one plan with Local SEO and GEO &amp; AI Visibility together. Fixed monthly prices, no setup
                fees and no long-term contracts. Every plan starts with a free audit, so you know exactly what you are
                paying for.
              </p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-ghost" href="/book-a-call">
                  Book a call
                </Link>
              </div>
            </div>
            <aside className="facts">
              <h2>At a glance</h2>
              <ul>
                <li>
                  <b>Starter</b>
                  <span>{usd(PLANS[0].price)}/month · Local SEO</span>
                </li>
                <li>
                  <b>Growth</b>
                  <span>{usd(PLANS[1].price)}/month · Local SEO + GEO &amp; AI (medium)</span>
                </li>
                <li>
                  <b>Pro</b>
                  <span>{usd(PLANS[2].price)}/month · Local SEO + GEO &amp; AI (full)</span>
                </li>
                <li>
                  <b>Contract</b>
                  <span>Month to month. Pause or cancel with a week of notice.</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <PricingSection id="plans" />
      <Faq items={FAQ} title="Pricing questions." />
      <CtaBand title="Not sure which plan fits?" />
    </>
  );
}
