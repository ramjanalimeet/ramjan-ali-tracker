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
  title: "Local SEO Audits for Service Businesses | Ramjan Ali Akash",
  description:
    "SEO and AI visibility audits for home service businesses: Google Business Profile, website, citations, reviews and competitor gaps, with a prioritized fix list.",
  path: "/seo-services/seo-audits",
});

const FAQ: FaqItem[] = [
  {
    q: "Is the free audit really free?",
    a: "Yes. It is a 30-minute review and call with no obligation. You keep the findings either way.",
  },
  {
    q: "What is the difference between the free audit and a deep audit?",
    a: "The free audit covers the biggest issues and quick wins. A deep audit is a full review of every page, link and citation, usually done at the start of a monthly plan.",
  },
  {
    q: "Can I use the audit with another SEO or my own team?",
    a: "Yes. The fix list is yours to use however you like.",
  },
  {
    q: "What do you need from me?",
    a: "Your business name, website and the main service area. Profile and Search Console access helps for a deep audit.",
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
      "@id": "https://ramjan-akash.vercel.app/seo-services/seo-audits#webpage",
      url: "https://ramjan-akash.vercel.app/seo-services/seo-audits",
      name: "Local SEO Audits for Service Businesses | Ramjan Ali Akash",
      description:
        "SEO and AI visibility audits for home service businesses: Google Business Profile, website, citations, reviews and competitor gaps, with a prioritized fix list.",
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
          name: "SEO Audits",
          item: "https://ramjan-akash.vercel.app/seo-services/seo-audits",
        },
      ],
    },
    {
      "@type": "Service",
      name: "SEO Audits",
      description:
        "SEO and AI visibility audits for home service businesses: Google Business Profile, website, citations, reviews and competitor gaps, with a prioritized fix list.",
      url: "https://ramjan-akash.vercel.app/seo-services/seo-audits",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "SEO Audits",
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(FAQ),
  ],
};

export default function SeoAuditsPage() {
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
              <li aria-current="page">SEO Audits</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services · Audits</span>
              <h1>
                An SEO audit that tells you <span className="hl">what to fix first</span>.
              </h1>
              <p className="lead">
                Not a 90-page automated PDF. A clear, human review of why competitors outrank you, and a short list of
                fixes in the order that will move rankings and calls fastest.
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
                  <b>Free audit</b>
                  <span>A 30-minute review of your profile, site and top competitors</span>
                </li>
                <li>
                  <b>Deep audit</b>
                  <span>Full technical, content, citation and link review</span>
                </li>
                <li>
                  <b>You keep</b>
                  <span>The findings, whether you hire me or not</span>
                </li>
                <li>
                  <b>Delivered as</b>
                  <span>A video walkthrough or call, plus a written fix list</span>
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
            <h2>Most businesses fix the wrong things first.</h2>
            <p>
              Owners often spend months on blog posts when the real problem is a wrong primary category, or on a new
              website when the old one just needed a few pages and faster images.
            </p>
            <p>
              An audit finds the real gaps by comparing you with the businesses that are actually winning the map pack
              and organic results in your area.
            </p>
            <p>
              Then it puts the fixes in order: what will move rankings fastest, what is a quick win, and what can wait.
            </p>
          </div>
          <div className="panel rv">
            <h3>What the audit covers</h3>
            <ul className="ticks">
              <li>Google Business Profile setup and activity</li>
              <li>Map pack rankings across your area</li>
              <li>Reviews: count, rating, recency and replies</li>
              <li>Citations and business detail consistency</li>
              <li>Technical health and speed</li>
              <li>Service and area page coverage</li>
              <li>Backlinks compared with competitors</li>
              <li>Tracking: calls, forms and analytics</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>What you get from an audit.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Competitor comparison</h3>
              <p>Side-by-side look at you versus the top three businesses in your map pack.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Profile review</h3>
              <p>Categories, services, areas, photos, posts, Q&amp;A and reviews checked against best practice.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Website review</h3>
              <p>Technical health, speed, structure and how well each service page targets its search.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Citation check</h3>
              <p>Where your business details are wrong, missing or inconsistent.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Priority fix list</h3>
              <p>A short list in order of impact, with what each fix involves.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Walkthrough</h3>
              <p>A call or recorded video explaining the findings in plain English.</p>
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
            <Link className="chip" href="/blog/local-seo-audit">
              60-minute DIY local SEO audit →
            </Link>
          </div>
        </div>
      </section>
      <ServiceChips exclude="/seo-services/seo-audits" />
      <RelatedLinks page="/seo-services/seo-audits" topics={["strategy", "technical"]} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
