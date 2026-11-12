import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks, type Step } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { PricingPlans } from "@/components/PricingPlans";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ServiceChips } from "@/components/ServiceChips";
import { type Plan } from "@/lib/pricing";
import { type TopicId } from "@/lib/posts";
import { type FaqItem, SITE_URL, faqSchema } from "@/lib/site";
import { MainCta } from "./MainCta";

/** Everything one SaaS / ecommerce / Shopify service page needs. */
export type OnlineService = {
  path: string;
  /** Short name, used in the breadcrumb and schema. */
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  /** The h1, with the highlighted words split out. */
  h1: [before: string, highlight: string, after: string];
  lead: string;
  facts: [label: string, value: string][];
  why: { heading: string; paragraphs: string[]; listTitle: string; list: string[] };
  included: { heading: string; cards: [title: string, text: string][] };
  pricingHeading: string;
  plans: Plan[];
  faq: FaqItem[];
  topics: TopicId[];
  ctaTitle: string;
  ctaText: string;
};

/** Engagement steps for online businesses (the default steps talk about map packs and towns). */
const ONLINE_STEPS: Step[] = [
  {
    title: "Audit",
    text: "I review your site, content, links, analytics and the competitors ranking above you, plus what AI tools say when asked for a product like yours. You keep the findings either way.",
  },
  {
    title: "Plan",
    text: "Target pages, keywords and markets, written down as one 90-day roadmap you approve before any work starts.",
  },
  {
    title: "Fix and build",
    text: "Technical fixes, page improvements and new content. The foundations go in first, so later work compounds.",
  },
  {
    title: "Grow and report",
    text: "Content, links and visibility work every month, with a plain-English report on rankings, traffic and revenue from search.",
  },
];

export function OnlineServicePage({ s }: { s: OnlineService }) {
  const url = `${SITE_URL}${s.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Ramjan Ali Akash",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: s.title,
        description: s.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "SEO Services", item: `${SITE_URL}/seo-services` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
      {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        serviceType: s.name,
        offers: s.plans.map((p) => ({
          "@type": "Offer",
          name: `${s.name} ${p.name}`,
          price: p.price,
          priceCurrency: "USD",
        })),
      },
      faqSchema(s.faq),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="phero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/seo-services">SEO Services</Link>
              </li>
              <li aria-current="page">{s.name}</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">{s.eyebrow}</span>
              <h1>
                {s.h1[0]}
                <span className="hl">{s.h1[1]}</span>
                {s.h1[2]}
              </h1>
              <p className="lead">{s.lead}</p>
              <div className="cta-row">
                <MainCta />
              </div>
            </div>
            <aside className="facts">
              <h2>At a glance</h2>
              <ul>
                {s.facts.map(([label, value]) => (
                  <li key={label}>
                    <b>{label}</b>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Why it matters</span>
            <h2>{s.why.heading}</h2>
            {s.why.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="panel rv">
            <h3>{s.why.listTitle}</h3>
            <ul className="ticks">
              {s.why.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>{s.included.heading}</h2>
            </div>
          </div>
          <div className="grid g3">
            {s.included.cards.map(([title, text], i) => (
              <div className="card rv" key={title}>
                <span className="ic" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec alt" id="pricing">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Pricing</span>
              <h2>{s.pricingHeading}</h2>
            </div>
            <p>
              Fixed prices, published up front. The exact scope is confirmed in writing after a free strategy call,
              before any work starts. Month to month, cancel with a week of notice.
            </p>
          </div>
          <PricingPlans plans={s.plans} />
        </div>
      </section>
      <HowItWorks steps={ONLINE_STEPS} />
      <Faq items={s.faq} />
      <ServiceChips exclude={s.path} />
      <RelatedLinks page={s.path} topics={s.topics} industries={0} />
      <CtaBand title={s.ctaTitle} text={s.ctaText} />
    </>
  );
}
