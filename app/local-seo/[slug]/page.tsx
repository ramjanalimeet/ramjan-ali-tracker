import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { AiMock, MapMock } from "@/components/Mocks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ALL_INDUSTRIES, INDUSTRIES, getIndustry, type Industry } from "@/lib/industries";
import { getDeep } from "@/lib/industries/deep";
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
      a: `Plans start at ${usd(fromPrice())}/month, month to month, with no setup fees. GEO & AI Visibility is included from the Growth plan up. See the pricing page for every plan.`,
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
  const deep = getDeep(ind.slug);

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
        areaServed: { "@type": "Country", name: "United States" },
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
                  <span>{ind.name} across the US</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Google Maps, local search and AI answers</span>
                </li>
                <li>
                  <b>Price</b>
                  <span>
                    From {usd(fromPrice())}/month. <Link href="/pricing">See plans</Link>
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

      {deep && (
        <>
          <section className="sec">
            <div className="wrap split">
              <div className="body rv">
                <span className="eyebrow">How {lower(ind.name)} get found</span>
                <h2>How customers search for {lower(ind.short)} services.</h2>
                <p>{deep.market[0]}</p>
                <p>{deep.market[1]}</p>
              </div>
              <div className="panel rv">
                <h3>Google Business Profile categories</h3>
                <p className="muted" style={{ margin: "8px 0 14px" }}>
                  A starting point. Confirm exact names in your dashboard and check what the top three competitors use.
                </p>
                <ul className="ticks">
                  <li>
                    <strong>Primary:</strong> {deep.categories.primary}
                  </li>
                  {deep.categories.secondary.map((c) => (
                    <li key={c}>
                      <strong>Secondary:</strong> {c}
                    </li>
                  ))}
                </ul>
                <Link className="btn btn-ghost btn-sm" href="/blog/google-business-profile-categories-for-contractors">
                  How to choose categories <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </section>

          <section className="sec tight alt">
            <div className="wrap">
              <div className="sec-head rv">
                <div>
                  <span className="eyebrow">Page plan</span>
                  <h2>
                    The pages {/^[aeiou]/i.test(ind.short) ? "an" : "a"} {lower(ind.short)} website needs.
                  </h2>
                </div>
                <p>One strong page per job beats one long services list. These are the pages I build first.</p>
              </div>
              <div className="prose rv" style={{ maxWidth: "none" }}>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Page</th>
                        <th>Why it matters</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deep.pages.map((r) => (
                        <tr key={r.page}>
                          <td>
                            <strong>{r.page}</strong>
                          </td>
                          <td>{r.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="sec">
            <div className="wrap split">
              <div className="rv">
                <span className="eyebrow">Seasonal demand</span>
                <h2>When {lower(ind.short)} searches rise.</h2>
                <div className="prose" style={{ maxWidth: "none", marginTop: 20 }}>
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>When</th>
                          <th>What to have ready</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deep.seasons.map((r) => (
                          <tr key={r.when}>
                            <td>
                              <strong>{r.when}</strong>
                            </td>
                            <td>{r.what}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel rv">
                <h3>Mistakes that cost {lower(ind.name)} calls</h3>
                <ul className="ticks" style={{ marginTop: 12 }}>
                  {deep.mistakes.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <p className="muted" style={{ margin: "14px 0" }}>Related guide:</p>
                <Link className="btn btn-ghost btn-sm" href={deep.guide.href}>
                  {deep.guide.label} <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

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

      <section className="sec tight alt" id="pricing">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Plans</span>
            <h2>One plan, everything included.</h2>
            <p>
              Every plan covers your Google Business Profile, new {lower(ind.short)} service and area pages each month,
              reviews, listings and a plain-English monthly report. Plans start at {usd(fromPrice())}/month, month to
              month, with no setup fees.
            </p>
          </div>
          <div className="panel rv">
            <h3>Compare the three plans</h3>
            <p className="muted" style={{ margin: "8px 0 16px" }}>
              Starter, Growth and Pro, with what each includes and who it suits.
            </p>
            <Link className="btn btn-dark btn-sm" href="/pricing">
              See pricing <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
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
