import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PlaybookExplorer } from "@/components/PlaybookExplorer";
import { Sparkline } from "@/components/charts/CaseCharts";
import { CASE_STUDIES, monthLabel } from "@/lib/case-studies";
import { SITE_URL, pageMeta } from "@/lib/site";

const TITLE = "Case Studies & 90-Day SEO Playbooks | Ramjan Ali Akash";
const DESCRIPTION =
  "How local SEO, GEO & AI visibility, technical SEO, on-page, link building and audits run for home service businesses, from starting point to results.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/case-studies" });

const METRICS = [
  {
    t: "Map pack rankings",
    d: "Checked on a grid of points across your whole service area, not just from your office.",
  },
  {
    t: "AI mentions",
    d: "A fixed set of real customer questions asked in ChatGPT, Gemini, Perplexity and AI Overviews.",
  },
  { t: "Calls", d: "Tracked by source, so you can see which calls came from Google, the map and your website." },
  { t: "Form leads", d: "Every quote request and booking from your site, tied back to the page it came from." },
  { t: "Reviews", d: "Count, rating and how recent they are, compared with the top three competitors." },
  { t: "Pages and indexing", d: "Which pages Google has indexed, how fast they load and what they rank for." },
];

const STEPS = [
  { t: "Real numbers only", d: "Rankings, calls and leads from your own tracking tools, not estimates." },
  { t: "Your permission first", d: "Nothing is published without your written approval of every number and quote." },
  { t: "Your name optional", d: "Prefer to stay anonymous? Results can be shown by trade and region instead." },
];

// Illustrative rank grid: lower numbers near the center, where the business is.
const GRID = [
  [7, 5, 4, 5, 8],
  [5, 3, 2, 3, 6],
  [4, 2, 1, 2, 4],
  [6, 3, 2, 3, 5],
  [9, 6, 4, 6, 10],
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/case-studies#webpage`,
      url: `${SITE_URL}/case-studies`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
      ],
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      {/* Shown once real, approved client case studies are added to lib/case-studies.ts. */}
      {CASE_STUDIES.length > 0 && (
        <section className="sec" id="results">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">Client results</span>
                <h2>Real results, real data.</h2>
              </div>
              <p>
                {
                  "Published with each client's permission, with numbers from their own Search Console, map rank scans and AI visibility checks."
                }
              </p>
            </div>
            <div className="grid g3">
              {CASE_STUDIES.map((c) => (
                <Link className="card case-card rv" href={`/case-studies/${c.slug}`} key={c.slug}>
                  <span className="tag">
                    {c.sample ? "Sample format · not a real client" : `${c.trade} · ${c.location}`}
                  </span>
                  <h3>{c.title}</h3>
                  {c.searchConsole && (
                    <div className="case-spark">
                      <Sparkline values={c.searchConsole.clicks.map((p) => p.value)} />
                      <span>
                        Clicks {monthLabel(c.period.start)} to {monthLabel(c.period.end)}
                      </span>
                    </div>
                  )}
                  <ul className="case-hl">
                    {c.highlights.slice(0, 2).map((h) => (
                      <li key={h.label}>
                        <b>{h.after}</b> {h.label.toLowerCase()} <span>(from {h.before})</span>
                      </li>
                    ))}
                  </ul>
                  <span className="go">
                    {c.sample ? "See the sample" : "Read the case study"} <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="sec alt case-index-top" id="playbooks">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Case Studies</li>
            </ol>
          </nav>
          <div className="sec-head playbook-head rv">
            <div>
              <span className="eyebrow">90-day case studies</span>
              <h1>
                See our <span className="hl">case studies</span>.
              </h1>
            </div>
            <p>
              Explore practical home-service SEO case studies by trade and service. Each page covers the starting
              problem, the first 90 days of work and the results that should be measured.
            </p>
          </div>
          <PlaybookExplorer />
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Your monthly report</span>
            <h2>See exactly where you rank, town by town.</h2>
            <p>
              Every month you get a plain-English report: what I changed, why, and what it did. The centerpiece is a map
              rank grid that shows where you appear in the map pack across your whole service area.
            </p>
            <p>
              Green means you are in the top three, where the calls happen. As the work builds, the green spreads
              outward from your location into the towns you want to win.
            </p>
          </div>
          <div className="report rv" aria-label="Illustration of a map rank grid">
            <div className="report-head">
              <b>Map rank grid</b>
              <span>Illustration</span>
            </div>
            <div className="rgrid">
              {GRID.flat().map((n, i) => (
                <span key={i} className={n <= 3 ? "top" : n <= 6 ? "mid" : "low"}>
                  {n}
                </span>
              ))}
            </div>
            <div className="report-key">
              <span>
                <i className="top" /> Top 3
              </span>
              <span>
                <i className="mid" /> 4 to 6
              </span>
              <span>
                <i className="low" /> 7+
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">How results are measured</span>
              <h2>Calls and jobs, not vanity metrics.</h2>
            </div>
            <p>The same six measures in every report, so you can see progress month over month.</p>
          </div>
          <div className="grid g3">
            {METRICS.map((m, i) => (
              <div className="card rv" key={m.t}>
                <span className="ic" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Client case studies</span>
            <h2>Your business could be the next one here.</h2>
            <p>
              When a client agrees, their results are written up here: the starting point, the work, and the numbers
              that changed. No made-up figures and no cherry-picked screenshots.
            </p>
            <div className="cta-row">
              <Link className="btn btn-dark" href="/pricing">
                See plans <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="panel rv">
            <h3>How case studies are published</h3>
            <ul className="ticks">
              {STEPS.map((s) => (
                <li key={s.t}>
                  <strong>{s.t}.</strong> {s.d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Want this playbook run on your business?" />
    </>
  );
}
