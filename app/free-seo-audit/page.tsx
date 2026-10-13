import Link from "next/link";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Free Local SEO & AI Visibility Audit | Ramjan Ali Akash",
  description:
    "Get a free Local SEO audit: your Google Business Profile, website, reviews, citations and top 3 map competitors reviewed by hand, with a prioritized fix list.",
  path: "/free-seo-audit",
});

const FAQ: FaqItem[] = [
  {
    q: "Is it really free?",
    a: "Yes. No credit card, no obligation. If we are a fit, I will suggest a plan. If not, you still keep the findings.",
  },
  {
    q: "How long does it take?",
    a: "I reply within 24 hours and usually deliver the audit within a few business days.",
  },
  {
    q: "What do you need from me?",
    a: "Your business name, website and main service area. No logins are needed for the free audit.",
  },
  {
    q: "Do you only work with certain trades?",
    a: "Yes. I only work with home service businesses: roofing, plumbing, septic, HVAC and other trades, in any country.",
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
      "@id": "https://ramjan-akash.vercel.app/free-seo-audit#webpage",
      url: "https://ramjan-akash.vercel.app/free-seo-audit",
      name: "Free Local SEO &amp; AI Visibility Audit | Ramjan Ali Akash",
      description:
        "Get a free Local SEO audit: your Google Business Profile, website, reviews, citations and top 3 map competitors reviewed by hand, with a prioritized fix list.",
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
          name: "Free SEO Audit",
          item: "https://ramjan-akash.vercel.app/free-seo-audit",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Free Local SEO Audit",
      description:
        "Get a free Local SEO audit: your Google Business Profile, website, reviews, citations and top 3 map competitors reviewed by hand, with a prioritized fix list.",
      url: "https://ramjan-akash.vercel.app/free-seo-audit",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Free Local SEO Audit",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function FreeSeoAuditPage() {
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
              <li aria-current="page">Free Audit</li>
            </ol>
          </nav>
          <div className="phero-grid" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow">Free Audit</span>
              <h1>
                Get a free <span className="hl">Local SEO &amp; AI</span> visibility audit.
              </h1>
              <p className="lead">
                I will review your Google Business Profile, website, what AI tools say about you, and the three
                competitors beating you in the map pack, then show you what to fix first. Free, no pitch, and you keep
                the plan.
              </p>
              <ul className="ticks mt-s">
                <li>Reviewed by hand, not an automated report</li>
                <li>Your top 3 map competitors compared</li>
                <li>What ChatGPT, Gemini and AI Overviews say about you</li>
                <li>A short fix list in priority order</li>
                <li>Reply within 24 hours</li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What I check</span>
              <h2>A real audit, not an automated report.</h2>
            </div>
            <p>
              I go through your business by hand the way Google and a homeowner would, then compare you with the
              companies outranking you.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>Categories, services, service areas, photos, posts, Q&amp;A and how you compare with the top three.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Map rankings</h3>
              <p>Where you show up in the map pack across your service area for your main services.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Reviews</h3>
              <p>Count, rating, how recent they are, what they mention and how you reply.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Website</h3>
              <p>Speed, mobile experience, indexing and whether each core service has a strong page.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Citations and AI answers</h3>
              <p>
                Whether your details are consistent across key directories, and whether AI tools name you when asked for
                your services.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Competitor gaps</h3>
              <p>What the top businesses in your area have that you do not, from pages to links.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What you get</span>
              <h2>Clear findings and a fix order.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Findings</h3>
              <p>A clear summary of what is holding your rankings back.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Priority fix list</h3>
              <p>The fixes in order of impact, with quick wins marked.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Walkthrough</h3>
              <p>A short call or recorded video explaining it in plain English.</p>
            </div>
          </div>
        </div>
      </section>
      <Faq items={FAQ} />
    </>
  );
}
