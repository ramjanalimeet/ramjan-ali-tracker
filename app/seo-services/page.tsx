import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SERVICE_GROUPS } from "@/lib/services";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "SEO Services for Home Service Businesses | Ramjan Ali Akash",
  description:
    "Technical SEO, on-page SEO, content SEO, link building and SEO audits for local service businesses. The foundations behind strong local rankings.",
  path: "/seo-services",
});

const FAQ: FaqItem[] = [
  {
    q: "Can I buy one service on its own?",
    a: "Yes. Audits and technical fixes are often bought on their own. Content and link building work best as part of an ongoing plan.",
  },
  {
    q: "Do you build new websites?",
    a: "I focus on SEO. Most sites can be fixed rather than rebuilt. If a rebuild is truly needed, I will tell you and can guide the SEO side of it.",
  },
  {
    q: "Will you need access to my website?",
    a: "Yes, plus Search Console and Analytics. Everything stays in your name, and you can remove my access anytime.",
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
      "@id": "https://ramjan-akash.vercel.app/seo-services#webpage",
      url: "https://ramjan-akash.vercel.app/seo-services",
      name: "SEO Services: Technical, On-Page, Content, Links & Audits | Ramjan Ali Akash",
      description:
        "Technical SEO, on-page SEO, content SEO, link building and SEO audits for local service businesses. The foundations behind strong local rankings.",
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
      ],
    },
    faqSchema(FAQ),
  ],
};

export default function SeoServicesPage() {
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
              <li aria-current="page">SEO Services</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services</span>
              <h1>
                SEO services for <span className="hl">home service</span> businesses.
              </h1>
              <p className="lead">
                Local SEO and GEO &amp; AI visibility get you found and recommended. Technical SEO, on-page SEO, audits
                and link building make sure your website can back that up.
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
                  <b>Available</b>
                  <span>As part of a monthly plan, or on their own</span>
                </li>
                <li>
                  <b>Platforms</b>
                  <span>WordPress, Webflow, Wix, Squarespace and custom sites</span>
                </li>
                <li>
                  <b>Approach</b>
                  <span>Fix first, then build</span>
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
      {SERVICE_GROUPS.map((g, gi) => (
        <section className={gi % 2 ? "sec alt" : "sec"} key={g.title}>
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">{g.title}</span>
                <h2>{gi === 0 ? "Get found and get recommended." : "The SEO underneath it all."}</h2>
              </div>
              <p>
                {gi === 0
                  ? "The two services every plan is built on: ranking in Google Maps and local results, and being named when people ask AI tools who to call."
                  : "Focused work on the website itself. Included inside a monthly plan, or booked on its own."}
              </p>
            </div>
            <div className="grid g2">
              {g.items.map((item, i) => (
                <Link className="card rv" href={item.href} key={item.href}>
                  <span className="ic" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.blurb}.</p>
                  <span className="go">
                    Learn more <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Why it matters</span>
            <h2>Your website is a ranking factor for the map.</h2>
            <p>
              Google looks at your website when deciding how relevant and trusted your business is. The page linked from
              your Google Business Profile matters a lot.
            </p>
            <p>
              A fast, well-structured site with a strong page for each service gives Google clear signals, and gives
              visitors a reason to call.
            </p>
            <p>These services fix the website side of local SEO, so your profile and your site work together.</p>
          </div>
          <div className="panel rv">
            <h3>Signs your site is holding you back</h3>
            <ul className="ticks">
              <li>One "Services" page listing everything</li>
              <li>Town pages with the same text and a different city name</li>
              <li>Slow loading on phones</li>
              <li>Pages missing from Google's index</li>
              <li>No reviews or proof on service pages</li>
              <li>Hard to find the phone number</li>
            </ul>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Faq items={FAQ} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
