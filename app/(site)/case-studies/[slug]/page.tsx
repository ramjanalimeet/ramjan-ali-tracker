import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AiVisibilityCharts, MapGridCompare, SearchConsoleCharts } from "@/components/charts/CaseCharts";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ALL_CASES, getCase, monthLabel } from "@/lib/case-studies";
import { serviceOf } from "@/lib/playbooks";
import { SITE_URL, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_CASES.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  const meta = pageMeta({
    title: c.sample ? "Sample Case Study Format | Ramjan Ali Akash" : `${c.title} | Case Study`,
    description: c.summary.slice(0, 160),
    path: `/case-studies/${c.slug}`,
  });
  // The sample is a format example, so keep it out of search results.
  return c.sample ? { ...meta, robots: { index: false, follow: true } } : meta;
}

function SampleNote() {
  return (
    <p className="sample-note" role="note">
      <b>Sample data.</b> Illustration of the case study format, not a real client.
    </p>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const url = `${SITE_URL}/case-studies/${c.slug}`;
  const period = `${monthLabel(c.period.start, true)} to ${monthLabel(c.period.end, true)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      },
      ...(c.sample
        ? []
        : [
            {
              "@type": "Article",
              headline: c.title,
              description: c.summary,
              url,
              datePublished: c.published,
              author: { "@id": `${SITE_URL}/#person` },
              publisher: { "@id": `${SITE_URL}/#business` },
            },
          ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      {c.sample && (
        <div className="sample-banner" role="note">
          <div className="wrap">
            <b>This is a sample case study.</b> The business and numbers are illustrations of the format, not a real
            client. Real case studies are published only with client permission and data from their own tools.
          </div>
        </div>
      )}
      <section className="phero">
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
          <div className="phero-grid">
            <div>
              <span className="eyebrow">
                Case study · {c.trade} · {c.location}
              </span>
              <h1 style={{ fontSize: "clamp(34px,4.4vw,58px)" }}>{c.title}</h1>
              <p className="lead">{c.summary}</p>
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

      <section className="sec tight">
        <div className="wrap">
          {c.sample && <SampleNote />}
          <div className="stats">
            {c.highlights.map((h) => (
              <div className="stat rv" key={h.label}>
                <span className="stat-label">{h.label}</span>
                <span className="stat-val">{h.after}</span>
                <span className="stat-from">from {h.before}</span>
              </div>
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
            {c.sample && <SampleNote />}
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
            {c.sample && <SampleNote />}
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
            {c.sample && <SampleNote />}
            <AiVisibilityCharts data={c.ai} />
          </div>
        </section>
      )}

      {c.quote && (
        <section className="sec tight">
          <div className="wrap">
            <blockquote className="quote rv">
              <p>&ldquo;{c.quote.text}&rdquo;</p>
              <cite>
                {c.quote.name}, {c.quote.role}
              </cite>
            </blockquote>
          </div>
        </section>
      )}

      <CtaBand
        title={
          c.sample ? "Want a case study like this for your business?" : "Want results like this for your business?"
        }
      />
    </>
  );
}
