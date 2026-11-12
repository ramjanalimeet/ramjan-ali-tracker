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
  title: "On-Page SEO Services for Service Businesses | Ramjan Ali Akash",
  description:
    "On-page SEO for local businesses: page titles, headings, service page copy, internal links and local signals that help each page rank for the right search.",
  path: "/seo-services/on-page-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "Will you rewrite my whole website?",
    a: "Only the pages that matter for rankings and leads. Many pages need edits rather than full rewrites.",
  },
  {
    q: "Do I get to approve changes?",
    a: "Yes. You see and approve new copy before it goes live, especially anything about pricing, warranties or licensing.",
  },
  {
    q: "Is keyword stuffing still a thing?",
    a: "No, and it can hurt you. Modern on-page SEO is about clear, helpful pages that match what people search for.",
  },
  {
    q: "How fast does on-page SEO work?",
    a: "Changes are often reflected within a few weeks as Google recrawls the pages.",
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
      "@id": "https://ramjan-akash.vercel.app/seo-services/on-page-seo#webpage",
      url: "https://ramjan-akash.vercel.app/seo-services/on-page-seo",
      name: "On-Page SEO Services for Service Businesses | Ramjan Ali Akash",
      description:
        "On-page SEO for local businesses: page titles, headings, service page copy, internal links and local signals that help each page rank for the right search.",
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
          name: "On-Page SEO",
          item: "https://ramjan-akash.vercel.app/seo-services/on-page-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "On-Page SEO",
      description:
        "On-page SEO for local businesses: page titles, headings, service page copy, internal links and local signals that help each page rank for the right search.",
      url: "https://ramjan-akash.vercel.app/seo-services/on-page-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "On-Page SEO",
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(FAQ),
  ],
};

export default function OnPageSeoPage() {
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
              <li aria-current="page">On-Page SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services · On-Page</span>
              <h1>
                On-page SEO that makes every page <span className="hl">count</span>.
              </h1>
              <p className="lead">
                Each service page should target one clear search and answer it better than anyone else in your area. I
                optimize titles, headings, copy and local signals so your pages rank and convert.
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
                  <span>Service, location and home pages</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Relevance, clarity and conversion</span>
                </li>
                <li>
                  <b>Typical timing</b>
                  <span>Core pages in the first 60 days</span>
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
            <h2>One page trying to rank for everything ranks for nothing.</h2>
            <p>
              A common problem on contractor sites: one "Services" page lists twenty things in bullet points. Google has
              no single strong page to show for "water heater replacement" or "roof inspection".
            </p>
            <p>
              On-page SEO fixes that. Each important service gets its own page, with a title and heading that match how
              people search, copy that answers their real questions, and clear proof you work in their area.
            </p>
            <p>
              Good on-page work also lifts conversions. A page that answers cost, timing and trust questions gets more
              calls from the same traffic.
            </p>
          </div>
          <div className="panel rv">
            <h3>What I optimize on each page</h3>
            <ul className="ticks">
              <li>Title tag and meta description</li>
              <li>H1 and heading structure</li>
              <li>Service copy and FAQs</li>
              <li>Local signals: towns, landmarks, NAP</li>
              <li>Internal links to and from the page</li>
              <li>Images, alt text and file names</li>
              <li>Calls to action and click-to-call</li>
              <li>Schema for the page type</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>What on-page SEO includes.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Keyword mapping</h3>
              <p>Every target search assigned to one page, so pages stop competing with each other.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Titles and headings</h3>
              <p>Rewritten to match search intent and earn clicks in the results.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Service page copy</h3>
              <p>Clear, useful copy on what you do, where, how long it takes and what to expect.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Local signals</h3>
              <p>Consistent business details, service area mentions and local proof on the right pages.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Internal linking</h3>
              <p>Links that guide visitors and Google from your strongest pages to your money pages.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Conversion details</h3>
              <p>Click-to-call, short forms, trust badges and reviews placed where they help.</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Faq items={FAQ} />
      <ServiceChips exclude="/seo-services/on-page-seo" />
      <RelatedLinks page="/seo-services/on-page-seo" topics={["content"]} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
