import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { AiMock, MapMock } from "@/components/Mocks";
import { PricingSection } from "@/components/PricingPlans";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ALL_INDUSTRIES, INDUSTRIES, getIndustry, type Industry } from "@/lib/industries";
import { fromPrice, usd } from "@/lib/pricing";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

// Only the industries in lib/industries exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustry((await params).slug);
  if (!ind) return {};
  return pageMeta({ title: ind.title, description: ind.description, path: `/local-seo/${ind.slug}` });
}

const GENERAL_INCLUDED = [
  {
    t: "Google Business Profile",
    d: "Categories, services, service areas, real job photos and weekly posts, managed for you.",
  },
  {
    t: "Reviews and listings",
    d: "A simple review system and consistent details on the directories Google and AI tools check.",
  },
  {
    t: "Tracking and reports",
    d: "Map rankings across your area, AI mentions, calls and leads, in a plain-English monthly report.",
  },
];

/** Lowercases a trade name for mid-sentence use, keeping acronyms like EV and AV. */
const lower = (s: string) =>
  s
    .split(" ")
    .map((w) => (w === w.toUpperCase() ? w : w.toLowerCase()))
    .join(" ");

function faqFor(ind: Industry): FaqItem[] {
  return [
    ...ind.faq,
    {
      q: `How long does ${lower(ind.short)} SEO take?`,
      a: "Profile and technical fixes often show movement in 4 to 8 weeks. Competitive searches in large cities usually take 4 to 9 months of steady work. AI answers tend to follow as your profile, reviews and listings get stronger.",
    },
    {
      q: "How much does it cost?",
      a: `Plans start at ${usd(fromPrice())}/month, month to month, with no setup fees. GEO & AI Visibility is included from the Growth plan up. See the plans below.`,
    },
  ];
}

export default async function IndustryPage({ params }: Props) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();

  const url = `${SITE_URL}/local-seo/${ind.slug}`;
  const faq = faqFor(ind);
  const related = ALL_INDUSTRIES.filter((i) => i.category === ind.category && i.slug !== ind.slug);
  const business = `Your ${ind.short} Co.`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: ind.title,
        description: ind.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
          { "@type": "ListItem", position: 3, name: `${ind.short} SEO`, item: url },
        ],
      },
      {
        "@type": "Service",
        name: `${ind.short} SEO`,
        serviceType: `Local SEO and AI search visibility for ${ind.name.toLowerCase()}`,
        description: ind.description,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: "Worldwide",
      },
      faqSchema(faq),
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
                <Link href="/industries">Industries</Link>
              </li>
              <li aria-current="page">{ind.short} SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Industries · {ind.name}</span>
              <h1>
                {ind.h1[0]}
                <span className="hl">{ind.h1[1]}</span>
                {ind.h1[2]}
              </h1>
              <p className="lead">{ind.lead}</p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-dark" href="/book-a-call">
                  Book a Call
                </Link>
              </div>
            </div>
            <aside className="facts">
              <h2>At a glance</h2>
              <ul>
                <li>
                  <b>For</b>
                  <span>{ind.name}, in any city or country</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Google Maps, local search and AI answers</span>
                </li>
                <li>
                  <b>Price</b>
                  <span>
                    From {usd(fromPrice())}/month. <Link href="#pricing">See plans</Link>
                  </span>
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

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">The problem</span>
            <h2>{ind.problemTitle}</h2>
            <p>{ind.problem[0]}</p>
            <p>{ind.problem[1]}</p>
          </div>
          <MapMock query={ind.searches[0]} name={business} />
        </div>
      </section>

      <section className="sec tight alt">
        <div className="wrap split">
          <div className="rv">
            <span className="eyebrow">Target searches</span>
            <h2>The searches worth ranking for.</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              Examples. Your real list comes from keyword data for your service area.
            </p>
          </div>
          <div className="rv">
            <ul className="ticks two">
              {ind.searches.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">GEO &amp; AI visibility</span>
            <h2>What customers ask AI before they call.</h2>
            <p>
              More homeowners now ask ChatGPT, Gemini or Google&apos;s AI Overviews for a recommendation first. These
              answers come from your profile, reviews, listings and website, so I make sure all of them tell the same
              clear story.
            </p>
            <ul className="ticks">
              {ind.ai.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <div className="cta-row">
              <Link className="btn btn-ghost" href="/ai-search">
                How GEO &amp; AI visibility works <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <AiMock prompt={ind.ai[0]} name={business} />
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything needed to rank, built for {lower(ind.name)}.</h2>
            </div>
            <p>Built around how your customers search, in the towns you serve.</p>
          </div>
          <div className="grid g3">
            {[...ind.focus, ...GENERAL_INCLUDED].map((f, i) => (
              <div className="card rv" key={f.t}>
                <span className="ic" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <PricingSection id="pricing" alt showAllLink />
      <Faq items={faq} />

      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">Related industries</span>
          <div className="chips" style={{ marginTop: 6 }}>
            {related.map((r) => (
              <Link className="chip" href={`/local-seo/${r.slug}`} key={r.slug}>
                {r.name} →
              </Link>
            ))}
            <Link className="chip" href="/industries">
              All industries →
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks page={`/local-seo/${ind.slug}`} topics={["local-seo", "google-maps", "ai-search"]} industries={0} />
      <CtaBand title={ind.cta} />
    </>
  );
}
