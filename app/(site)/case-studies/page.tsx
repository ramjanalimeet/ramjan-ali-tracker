import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ELITE_SEPTIC_PATH, ELITE_SEPTIC_METRICS, ELITE_SEPTIC_WEBSITE } from "@/lib/elite-septic";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SITE_URL, pageMeta } from "@/lib/site";

const TITLE = "Local SEO & AI Visibility Case Studies | Ramjan Ali Akash";
const DESCRIPTION =
  "Real Local SEO and AI visibility case studies showing the strategy, verified search data and business impact behind stronger local customer acquisition.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/case-studies" });

const PROJECT_CARDS = [
  ...CASE_STUDIES.map((c) => {
    const isEcoverde = c.slug === "ecoverde-valeting-local-seo-ai-visibility";
    return {
      name: c.client,
      category: isEcoverde ? "Car Detailing (UK)" : c.trade,
      cover: isEcoverde ? "/assets/case-studies/ecoverde-card.webp" : c.image,
      alt: isEcoverde ? "A vehicle being foam washed by Ecoverde" : c.imageAlt,
      summary: isEcoverde
        ? "Local SEO and AI visibility work for an eco-friendly mobile valeting service in West London."
        : c.summary,
      highlights: c.highlights.slice(0, 3).map(({ after, label }) => ({ value: after, label })),
      website: c.website,
      href: `/case-studies/${c.slug}`,
      detailLabel: "Read case study",
    };
  }),
  {
    name: "Elite Septic Service",
    category: "Septic Service (USA)",
    cover: "/assets/case-studies/elite-card.webp",
    alt: "An Elite Septic Service technician working on a septic system",
    summary: "An industry example of how a service website and Google Business Profile help East Texas homeowners find and call a septic company.",
    highlights: ELITE_SEPTIC_METRICS,
    website: ELITE_SEPTIC_WEBSITE,
    href: ELITE_SEPTIC_PATH,
    detailLabel: "Read case study",
  },
  {
    name: "Wolfpixel",
    category: "Design Agency",
    cover: "/assets/case-studies/wolfpixel-card.webp",
    alt: "Wolfpixel’s branding and product design agency cover",
    summary: "A design agency for SaaS companies and startups, with a portfolio spanning product design, branding and websites.",
    highlights: [
      { value: "Product", label: "Digital design" },
      { value: "Brand", label: "Visual identity" },
      { value: "Web", label: "Site design" },
    ],
    website: "https://www.wolfpixel.agency/",
    href: "/case-studies/wolfpixel",
    detailLabel: "Read overview",
  },
];

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
      <section className="sec alt case-index-top" id="results">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Case Studies</li>
            </ol>
          </nav>
          <div className="case-index-intro rv">
            <div>
              <span className="eyebrow">Client work and industry examples</span>
              <h1>
                See our <span className="hl">case studies</span>.
              </h1>
            </div>
            <p>
              Explore the strategy, measurable search visibility and commercial thinking behind real Local SEO and AI
              visibility work, including clearly labeled industry examples.
            </p>
          </div>
          <div className="case-results-grid">
            {PROJECT_CARDS.map((project) => (
              <article className="case-result-card rv" key={project.href}>
                <Link className="case-result-image" href={project.href} aria-label={`${project.detailLabel}: ${project.name}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.cover} alt={project.alt} width={960} height={540} />
                  <span className="case-result-category">{project.category}</span>
                  <span className="case-result-arrow" aria-hidden="true">↗</span>
                </Link>
                <div className="case-result-body">
                  <h2>{project.name}</h2>
                  <p>{project.summary}</p>
                  <ul className="case-result-metrics">
                    {project.highlights.map(({ label, value }) => (
                      <li key={label}><b>{value}</b><span>{label}</span></li>
                    ))}
                  </ul>
                  <div className="case-result-actions">
                    <Link className="btn btn-ghost btn-sm" href={project.website} target="_blank" rel="noopener">View website</Link>
                    <Link className="btn btn-dark btn-sm" href={project.href}>{project.detailLabel} <span aria-hidden="true">→</span></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
