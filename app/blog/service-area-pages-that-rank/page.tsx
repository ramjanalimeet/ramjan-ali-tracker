import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PostCards } from "@/components/PostCards";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "How to Write Service Area Pages That Rank | Ramjan Ali Akash",
  description:
    "How home-service businesses can create location pages for the towns they serve that are genuinely useful, rank well and stay clear of Google's doorway rules.",
  path: "/blog/service-area-pages-that-rank",
  type: "article",
});

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ramjan-akash.vercel.app/#website",
      url: "https://ramjan-akash.vercel.app/",
      name: "Ramjan Ali Akash",
      inLanguage: "en",
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://ramjan-akash.vercel.app/blog/service-area-pages-that-rank#webpage",
      url: "https://ramjan-akash.vercel.app/blog/service-area-pages-that-rank",
      name: "How to Write Service Area Pages That Rank | Ramjan Ali Akash",
      description:
        "How home-service businesses can create location pages for the towns they serve that are genuinely useful, rank well and stay clear of Google's doorway rules.",
      isPartOf: {
        "@id": "https://ramjan-akash.vercel.app/#website",
      },
      about: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ramjan-akash.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://ramjan-akash.vercel.app/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to write service area pages that rank (without doorway spam)",
          item: "https://ramjan-akash.vercel.app/blog/service-area-pages-that-rank",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "How to write service area pages that rank (without doorway spam)",
      description:
        "How home-service businesses can create location pages for the towns they serve that are genuinely useful, rank well and stay clear of Google's doorway rules.",
      url: "https://ramjan-akash.vercel.app/blog/service-area-pages-that-rank",
      mainEntityOfPage: "https://ramjan-akash.vercel.app/blog/service-area-pages-that-rank",
      datePublished: "2026-10-01",
      dateModified: "2026-10-01",
      author: {
        "@id": "https://ramjan-akash.vercel.app/#person",
      },
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      image: "https://ramjan-akash.vercel.app/assets/akash.webp",
      articleSection: "Content SEO",
      inLanguage: "en",
    },
  ],
};

export default function ServiceAreaPagesThatRankPage() {
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
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-current="page">How to write service area pages that rank (without doorway spam)</li>
            </ol>
          </nav>
          <span className="eyebrow">Content SEO</span>
          <h1 style={{ maxWidth: "22ch", fontSize: "clamp(36px,4.6vw,62px)" }}>
            How to write service area pages that rank (without doorway spam)
          </h1>
          <p className="lead">
            How home-service businesses can create location pages for the towns they serve that are genuinely useful,
            rank well and stay clear of Google's doorway rules.
          </p>
          <div className="ameta">
            <span>By Ramjan Ali Akash</span>
            <span>7 min read</span>
            <span>Updated October 1, 2026</span>
          </div>
        </div>
      </section>
      <section className="sec tight" style={{ paddingTop: 20 }}>
        <div className="wrap art-grid">
          <article className="prose">
            <p>
              Service area pages, sometimes called location pages or city pages, are pages on your website about the
              specific towns you serve. Done well, they help you rank in places further from your office. Done badly,
              they are one of the fastest ways to fill a site with pages Google ignores.
            </p>
            <h2>Why most city pages fail</h2>
            <p>
              The classic approach is a template: "Best Plumber in [City]", the same few paragraphs, and the city name
              swapped in fifty times. Google's spam policies specifically call out doorway pages, which are pages
              created to rank for similar searches that lead to essentially the same content.
            </p>
            <p>
              The test is simple. If you could swap the town name and the page would still be true, it is not a real
              local page.
            </p>
            <h2>Only create pages for towns that matter</h2>
            <p>Start with a short list:</p>
            <ul>
              <li>Towns where you already do a lot of work</li>
              <li>Towns where you want more work and can reach quickly</li>
              <li>Towns with enough searches to be worth targeting</li>
            </ul>
            <p>Five excellent pages beat fifty thin ones. You can always add more once the first ones rank.</p>
            <h2>What to put on a service area page</h2>
            <h3>Real jobs in that town</h3>
            <p>
              This is the most valuable content you have. A short write-up of a few jobs: what the problem was, what you
              did, and photos. "Replaced a 20-year-old furnace in a 1970s ranch in Plano" is local content no competitor
              can copy.
            </p>
            <h3>Reviews from customers there</h3>
            <p>Feature reviews from customers in that town. They are proof that you really work there.</p>
            <h3>Local details that matter for the job</h3>
            <p>Think about what is genuinely different about working in that area:</p>
            <ul>
              <li>Typical housing age and what that means for plumbing, roofs or HVAC</li>
              <li>Soil and water conditions (very relevant for septic and plumbing)</li>
              <li>Weather patterns: hail, freezes, humidity, hurricanes</li>
              <li>Permit or inspection requirements, linked to the official local source</li>
            </ul>
            <h3>Practical service information</h3>
            <ul>
              <li>Which services you offer in that area</li>
              <li>Typical response times</li>
              <li>Neighborhoods and ZIP codes you cover</li>
              <li>Your phone number and a simple way to book</li>
            </ul>
            <h3>Links to your service pages</h3>
            <p>
              Each area page should link to your main service pages, and the most important service pages should link
              back to your top area pages.
            </p>
            <h2>Page titles and headings</h2>
            <p>
              Keep them natural. A title like "Roof Repair &amp; Replacement in Katy, TX | Your Company" is clear for
              both searchers and Google. Avoid stuffing several towns and services into one title.
            </p>
            <h2>Service area pages and the map pack</h2>
            <p>
              Area pages mainly help you rank in regular organic results for towns further from your office. The map
              pack still leans heavily on distance from your verified address. Both together give you the widest reach.
            </p>
            <div className="note">
              <p>
                <strong>Rule of thumb:</strong> If a homeowner in that town would find the page useful even without
                wanting to hire you today, you are on the right track.
              </p>
            </div>
            <h2>Keep them updated</h2>
            <p>
              Add new jobs and reviews over time. A page that keeps growing with real local work keeps getting stronger.
            </p>
            <p>
              Need help planning or writing them? That is part of my <Link href="/local-seo">Local SEO service</Link>.
            </p>
          </article>
          <aside className="aside">
            <div className="panel">
              <h3>Free Local SEO &amp; AI audit</h3>
              <p>
                I'll review your Google Business Profile, website and top 3 map competitors, and send the fixes in
                priority order.
              </p>
              <WhatsAppButton className="btn-sm" />
            </div>
            <div className="panel">
              <h3>Related service</h3>
              <p>
                I plan and write service and area pages as part of every Local SEO plan for home service businesses.
              </p>
              <Link className="btn btn-ghost btn-sm" href="/local-seo">
                Local SEO →
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <PostCards exclude="service-area-pages-that-rank" limit={3} style={{ marginTop: 6 }} />
        </div>
      </section>
      <RelatedLinks
        page="/blog/service-area-pages-that-rank"
        topics={["local-seo"]}
        posts={0}
        industriesTitle="Guides for your trade"
      />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
