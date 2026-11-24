import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDY_HERO, CaseStudySections, CaseStudyTrust } from "@/components/CaseStudySections";
import { notFound } from "next/navigation";
import { AiVisibilityCharts, MapGridCompare, SearchConsoleCharts } from "@/components/charts/CaseCharts";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ALL_CASES, getCase, monthLabel } from "@/lib/case-studies";
import { type Playbook, serviceOf } from "@/lib/playbooks";
import { SITE_URL, pageMeta } from "@/lib/site";
import { MainCta } from "@/components/MainCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_CASES.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const c = getCase(slug);
  if (!c) return {};
  return pageMeta({
    title: `${c.title} | Local SEO Case Study`,
    description: c.summary.slice(0, 160),
    path: `/case-studies/${c.slug}`,
    type: "article",
    image: { url: c.image, width: 1280, height: 720, alt: c.imageAlt },
  });
}

function PlaybookCaseStudyPage({ p }: { p: Playbook }) {
  const service = serviceOf(p.service);
  const url = `${SITE_URL}/case-studies/${p.id}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${p.trade} SEO Case Study: 90-Day Plan`,
        description: p.summary,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        mainEntity: { "@id": `${url}#article` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
          { "@type": "ListItem", position: 3, name: `${p.trade} SEO case study`, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${p.trade} SEO Case Study: 90-Day Plan`,
        description: p.summary,
        inLanguage: "en",
        mainEntityOfPage: { "@id": `${url}#webpage` },
        image: {
          "@type": "ImageObject",
          "@id": `${url}#primaryimage`,
          url: `${SITE_URL}${p.image}`,
          contentUrl: `${SITE_URL}${p.image}`,
          width: 640,
          height: 360,
          caption: p.imageAlt,
        },
        url,
        datePublished: "2026-11-21",
        dateModified: "2026-11-21",
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#business` },
        about: [p.trade, service.name, "Home service SEO"],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="case-detail-hero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li aria-current="page">{p.trade}</li>
            </ol>
          </nav>
          <div className="case-detail-grid">
            <div>
              <span className="eyebrow">90-day {p.trade} SEO case study · {service.name}</span>
              <h1>{p.title}</h1>
              <p className="lead">{p.summary}</p>
              <div className="case-detail-actions">
                <Link className="btn btn-dark" href={p.website ?? `/local-seo/${p.tradeSlug}`} target={p.website ? "_blank" : undefined} rel={p.website ? "noopener" : undefined}>
                  {p.website ? "Visit client website" : `Explore ${p.trade} SEO`} <span className="arr">→</span>
                </Link>
                <Link className="btn btn-accent" href="/pricing">View {p.plan} pricing <span className="arr">→</span></Link>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="case-detail-cover" src={p.image} alt={p.imageAlt} width={640} height={360} />
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <p className="case-context"><b>About this case study.</b> This is a practical 90-day playbook based on a common {p.trade.toLowerCase()} business starting point. It shows the strategy and measurement framework without claiming results for a named client.</p>
          <div className="case-plan-grid">
            <article className="case-plan-card">
              <span className="ic" aria-hidden="true">01</span>
              <h2>The starting point</h2>
              <ul className="ticks">{p.start.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="case-plan-card featured">
              <span className="ic" aria-hidden="true">02</span>
              <h2>The first 90 days</h2>
              <ul className="ticks">{p.first90.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="case-plan-card">
              <span className="ic" aria-hidden="true">03</span>
              <h2>What gets measured</h2>
              <ul className="ticks">{p.measured.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Why this plan</span>
            <h2>A focused roadmap for a {p.trade.toLowerCase()} business.</h2>
            <p>The sequence starts with the issues most likely to block visibility, then builds the pages, profile signals and proof customers need before they contact the business.</p>
            <p>Progress is reviewed using the same measures throughout the 90 days, so rankings can be connected to calls, forms and the services the business wants to sell.</p>
          </div>
          <aside className="panel rv">
            <h3>Explore the related pages</h3>
            <div className="case-related-links">
              <Link href={`/local-seo/${p.tradeSlug}`}>{p.trade} SEO services →</Link>
              <Link href={service.href}>{service.name} →</Link>
              <Link href="/pricing">{p.plan} plan pricing →</Link>
              <Link href="/case-studies">All case studies →</Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title={`Want this ${p.trade.toLowerCase()} SEO playbook for your business?`} />
    </>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const slug = (await params).slug;
  const c = getCase(slug);
  if (!c) notFound();
  const url = `${SITE_URL}/case-studies/${c.slug}`;
  const period = `${monthLabel(c.period.start, true)} to ${monthLabel(c.period.end, true)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: c.title,
        description: c.summary,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        mainEntity: { "@id": `${url}#article` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: c.title,
        description: c.summary,
        url,
        inLanguage: "en",
        mainEntityOfPage: { "@id": `${url}#webpage` },
        datePublished: c.published,
        dateModified: c.published,
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#business` },
        image: {
          "@type": "ImageObject",
          "@id": `${url}#primaryimage`,
          url: `${SITE_URL}${c.image}`,
          contentUrl: `${SITE_URL}${c.image}`,
          width: 1280,
          height: 720,
          caption: c.imageAlt,
        },
        about: [c.trade, ...c.services.map((service) => serviceOf(service).name), c.location],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="phero case-client-hero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li aria-current="page">{c.client}</li>
            </ol>
          </nav>
          <div className="phero-grid case-client-hero-grid">
            <div className="case-client-intro">
              <span className="eyebrow">
                {CASE_STUDY_HERO}
              </span>
              <h1>{c.title}</h1>
              <p className="lead">{c.summary}</p>
              <div className="cta-row case-client-actions">
                <Link className="btn btn-dark" href={c.website} target="_blank" rel="noopener">
                  Visit Ecoverde website
                </Link>
                <MainCta />
              </div>
            </div>
            <aside className="facts">
              <h2>At a glance</h2>
              <ul>
                <li>
                  <b>Client</b>
                  <span>{c.client}</span>
                </li>
                <li>
                  <b>Trade</b>
                  <span>
                    <Link href={`/local-seo/${c.tradeSlug}`}>{c.trade}</Link>
                  </span>
                </li>
                <li>
                  <b>Services</b>
                  <span>{c.services.map((s) => serviceOf(s).name).join(", ")}</span>
                </li>
                <li>
                  <b>Plan</b>
                  <span>
                    <Link href="/pricing">{c.plan}</Link>
                  </span>
                </li>
                <li>
                  <b>Period</b>
                  <span>{period}</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <CaseStudyTrust />

      <section className="sec tight case-site-preview">
        <div className="wrap">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.imageAlt} width={1280} height={720} />
            <figcaption>Ecoverde&apos;s conversion-focused homepage presents the offer, location, proof and contact actions in one clear view.</figcaption>
          </figure>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="stats">
            {c.highlights.map((h) => (
              <div className="stat rv" key={h.label}>
                <span className="stat-label">{h.label}</span>
                <span className="stat-val">{h.after}</span>
                <span className="stat-from">{h.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec case-impact">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Business impact</span>
              <h2>How visibility became profitable customer acquisition.</h2>
            </div>
            <p>
              Private revenue and margin figures are not published here. The commercial impact is explained using the
              verified acquisition signals and the conversion path visible on the website.
            </p>
          </div>
          <div className="grid g2">
            {c.businessImpact.map((item, index) => (
              <article className="case-impact-card rv" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Starting point</span>
            <h2>The challenge.</h2>
            <ul className="ticks">
              {c.challenge.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="body rv">
            <span className="eyebrow">The work</span>
            <h2>What was done.</h2>
            <ul className="ticks">
              {c.work.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {c.searchConsole && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">Google Search Console</span>
                <h2>Clicks and impressions from Google.</h2>
              </div>
              <p>Monthly totals exported from the client&apos;s Search Console property.</p>
            </div>
            <SearchConsoleCharts data={c.searchConsole} />
          </div>
        </section>
      )}

      {c.mapGrid && (
        <section className="sec alt">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">Map rankings</span>
                <h2>&quot;{c.mapGrid.keyword}&quot; across the service area.</h2>
              </div>
              <p>The same grid of points and the same keyword, scanned before and after. Each number is the rank.</p>
            </div>
            <MapGridCompare data={c.mapGrid} />
          </div>
        </section>
      )}

      {c.ai && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">AI visibility</span>
                <h2>Named in AI answers.</h2>
              </div>
              <p>
                The same {c.ai.questions} customer questions asked every month in Google AI Overviews, ChatGPT, Gemini
                and Perplexity.
              </p>
            </div>
            <AiVisibilityCharts data={c.ai} />
          </div>
        </section>
      )}

      <CaseStudySections quote={c.quote} />
    </>
  );
}
