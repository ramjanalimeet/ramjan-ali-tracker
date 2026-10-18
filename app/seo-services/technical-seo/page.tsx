import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceChips } from "@/components/ServiceChips";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Technical SEO Services for Local Businesses | Ramjan Ali Akash",
  description:
    "Technical SEO for local service businesses: site speed, Core Web Vitals, indexing, site structure and local business schema. Fixes that help rankings.",
  path: "/seo-services/technical-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "Do I need technical SEO if my site looks fine?",
    a: "A site can look fine and still have indexing, speed or duplicate content problems. The audit shows whether there is anything worth fixing.",
  },
  {
    q: "Will you need access to my website?",
    a: "Yes, admin access to the site and Search Console. Everything stays in your name and you can remove my access anytime.",
  },
  {
    q: "Can you fix a Wix or Squarespace site?",
    a: "Yes, within what those platforms allow. Most important fixes are possible. If a platform is truly holding you back, I will tell you plainly.",
  },
  {
    q: "How fast will I see results?",
    a: "Technical fixes are often picked up within a few weeks, as Google recrawls the site.",
  },
];

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
      "@id": "https://ramjan-akash.vercel.app/seo-services/technical-seo#webpage",
      url: "https://ramjan-akash.vercel.app/seo-services/technical-seo",
      name: "Technical SEO Services for Local Businesses | Ramjan Ali Akash",
      description:
        "Technical SEO for local service businesses: site speed, Core Web Vitals, indexing, site structure and local business schema. Fixes that help rankings.",
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
          name: "SEO Services",
          item: "https://ramjan-akash.vercel.app/seo-services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Technical SEO",
          item: "https://ramjan-akash.vercel.app/seo-services/technical-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Technical SEO",
      description:
        "Technical SEO for local service businesses: site speed, Core Web Vitals, indexing, site structure and local business schema. Fixes that help rankings.",
      url: "https://ramjan-akash.vercel.app/seo-services/technical-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Technical SEO",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function TechnicalSeoPage() {
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
                <Link href="/seo-services">SEO Services</Link>
              </li>
              <li aria-current="page">Technical SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services · Technical</span>
              <h1>
                Technical SEO that clears the <span className="hl">roadblocks</span>.
              </h1>
              <p className="lead">
                Great content cannot rank if Google cannot crawl it, or if the page takes eight seconds to load on a
                phone. I find and fix the technical problems holding your site back.
              </p>
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
                  <span>Service business websites on WordPress, Webflow, Wix, Squarespace or custom</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Speed, indexing, structure and schema</span>
                </li>
                <li>
                  <b>Typical timing</b>
                  <span>Most fixes in the first 30 days</span>
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
            <span className="eyebrow">Why it matters</span>
            <h2>Small sites break in quiet ways.</h2>
            <p>
              Most contractor websites have problems nobody notices: pages blocked from Google, duplicate town pages
              competing with each other, heavy images, broken forms, or a theme that loads slowly on phones.
            </p>
            <p>
              None of this shows up until you look. But it caps how well the site can ever rank, no matter how much
              content or how many links you add.
            </p>
            <p>
              Technical SEO is usually the fastest win in a local SEO plan, because a few fixes can unlock pages Google
              was already close to ranking.
            </p>
          </div>
          <div className="panel rv">
            <h3>What I check and fix</h3>
            <ul className="ticks">
              <li>Indexing and crawl errors in Search Console</li>
              <li>Core Web Vitals: LCP, INP and CLS</li>
              <li>Mobile layout and tap targets</li>
              <li>Site structure and internal links</li>
              <li>Duplicate and thin pages</li>
              <li>Redirects, broken links and 404s</li>
              <li>XML sitemap and robots.txt</li>
              <li>LocalBusiness and service schema</li>
              <li>HTTPS and security basics</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>What a technical SEO engagement includes.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Full crawl</h3>
              <p>A complete crawl of your site to find errors, duplicates, broken links and pages Google cannot see.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Speed work</h3>
              <p>
                Image compression, caching, script cleanup and theme fixes aimed at passing Core Web Vitals on mobile.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Indexing cleanup</h3>
              <p>Making sure the pages that matter are indexed and the junk pages are not.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Structure</h3>
              <p>A clear service and location structure with internal links that pass authority to money pages.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Schema</h3>
              <p>
                LocalBusiness, service, review and FAQ markup that helps Google understand who you are and where you
                work.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Monitoring</h3>
              <p>Ongoing checks in Search Console so new issues are caught and fixed early.</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Faq items={FAQ} />
      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">Free guides</span>
          <div className="chips" style={{ marginTop: 6 }}>
            <Link className="chip" href="/blog/local-business-schema-for-contractors">
              Local business schema guide →
            </Link>
          </div>
        </div>
      </section>
      <ServiceChips exclude="/seo-services/technical-seo" />
      <RelatedLinks page="/seo-services/technical-seo" topics={["technical"]} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
