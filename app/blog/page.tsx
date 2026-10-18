import Link from "next/link";
import { BlogExplorer } from "@/components/BlogExplorer";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { AiMock } from "@/components/Mocks";
import { ALL_INDUSTRIES } from "@/lib/industries";
import { POSTS, TOPICS, formatDate, topicOf } from "@/lib/posts";
import { SITE_URL, pageMeta } from "@/lib/site";

const TITLE = "Local SEO & AI Search Blog for Home Service Businesses";
const DESCRIPTION =
  "Plain-English guides on local SEO, Google Maps, GEO & AI search, technical SEO and content for roofers, plumbers, HVAC and other home service businesses.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/blog" });

const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
const latest = POSTS.reduce((a, b) => (a.date > b.date ? a : b)).date;
const popularTrades = ALL_INDUSTRIES.slice(0, 12);

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      url: `${SITE_URL}/blog`,
      name: TITLE,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#business` },
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.date,
        articleSection: topicOf(p.topic).name,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      ],
    },
  ],
};

export default function BlogPage() {
  const topic = topicOf(featured.topic);
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
              <li aria-current="page">Blog</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Blog</span>
              <h1>
                Local SEO &amp; AI search, <span className="hl">explained plainly</span>.
              </h1>
              <p className="lead">
                Practical guides for home service business owners on Google Maps, local rankings, GEO &amp; AI search,
                technical fixes and content. No jargon, just what actually makes the phone ring.
              </p>
            </div>
            <aside className="facts">
              <h2>What you&apos;ll find</h2>
              <ul>
                <li>
                  <b>Articles</b>
                  <span>{POSTS.length} in-depth guides</span>
                </li>
                <li>
                  <b>Topics</b>
                  <span>{TOPICS.map((t) => t.name).join(", ")}</span>
                </li>
                <li>
                  <b>Written by</b>
                  <span>
                    <Link href="/about">Ramjan Ali Akash</Link>
                  </span>
                </li>
                <li>
                  <b>Updated</b>
                  <span>{formatDate(latest)}</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <Link className="feature rv" href={`/blog/${featured.slug}`}>
            <div className="feature-body">
              <span className="tag">
                Featured · {topic.name} · {featured.minutes} min read
              </span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="post-foot">
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span className="btn btn-dark btn-sm">
                  Read article <span className="arr">→</span>
                </span>
              </span>
            </div>
            <AiMock prompt="Who is the best-reviewed plumber near me?" name="Your Business" />
          </Link>
        </div>
      </section>

      <section className="sec alt" id="articles">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">All articles</span>
              <h2>Browse by topic.</h2>
            </div>
            <p>Every topic matches a service I offer, so you can read up first and see how the work is done.</p>
          </div>
          <BlogExplorer />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Learn by service</span>
              <h2>From reading to results.</h2>
            </div>
            <p>Each topic links to the service behind it, for when you would rather have it done for you.</p>
          </div>
          <div className="grid g3">
            {TOPICS.map((t, i) => {
              const n = POSTS.filter((p) => p.topic === t.id).length;
              return (
                <div className="card topic-card rv" key={t.id}>
                  <span className="ic" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{t.name}</h3>
                  <p>{t.blurb}</p>
                  <div className="topic-links">
                    <a href={`#topic-${t.id}`}>
                      {n} {n === 1 ? "article" : "articles"}
                    </a>
                    <Link href={t.service.href}>{t.service.name} service →</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec tight alt">
        <div className="wrap split">
          <div className="rv">
            <span className="eyebrow">By industry</span>
            <h2>See how it works for your trade.</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              Searches, AI questions and a page-by-page plan for {ALL_INDUSTRIES.length} core home service trades.
            </p>
          </div>
          <div className="chips rv">
            {popularTrades.map((t) => (
              <Link className="chip" href={`/local-seo/${t.slug}`} key={t.slug}>
                {t.name}
              </Link>
            ))}
            <Link className="chip" href="/industries">
              All industries →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Rather have it done for you?" />
    </>
  );
}
