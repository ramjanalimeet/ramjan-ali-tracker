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
  title: "Local Link Building for Home Service Businesses | Ramjan Ali Akash",
  description:
    "Local link building for home service businesses: links from suppliers, associations, local sponsorships, press and citations. No spam, no private blog networks.",
  path: "/seo-services/link-building",
});

const FAQ: FaqItem[] = [
  {
    q: "How many links will I get per month?",
    a: "I do not sell links by the hundred. A few relevant local links a month are worth more than many spammy ones. Your report lists every link earned.",
  },
  {
    q: "Do you buy links?",
    a: "No. Buying links breaks Google's spam policies and puts your site at risk. Sponsorships and memberships are fine when they are real and properly marked.",
  },
  {
    q: "What are citations?",
    a: "Listings of your business name, address and phone on directories and data sources. Consistent citations help Google trust your business details.",
  },
  {
    q: "How long until links make a difference?",
    a: "Links build up over time. They usually support rankings over months rather than weeks.",
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
      "@id": "https://ramjan-akash.vercel.app/seo-services/link-building#webpage",
      url: "https://ramjan-akash.vercel.app/seo-services/link-building",
      name: "Local Link Building for Home Service Businesses | Ramjan Ali Akash",
      description:
        "Local link building for home service businesses: links from suppliers, associations, local sponsorships, press and citations. No spam, no private blog networks.",
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
          name: "Link Building",
          item: "https://ramjan-akash.vercel.app/seo-services/link-building",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Link Building",
      description:
        "Local link building for home service businesses: links from suppliers, associations, local sponsorships, press and citations. No spam, no private blog networks.",
      url: "https://ramjan-akash.vercel.app/seo-services/link-building",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Link Building",
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(FAQ),
  ],
};

export default function LinkBuildingPage() {
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
              <li aria-current="page">Link Building</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services · Link Building</span>
              <h1>
                Local links that build <span className="hl">real trust</span>.
              </h1>
              <p className="lead">
                Links from other websites still tell Google who is trusted and prominent. For local businesses, the best
                links come from real local relationships, and I help you earn them.
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
                  <span>Local service businesses</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Local, relevant, earned links and citations</span>
                </li>
                <li>
                  <b>Never</b>
                  <span>Private blog networks, link farms or paid spam</span>
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
            <h2>Prominence is one of the three local ranking factors.</h2>
            <p>
              Google says local rankings depend on relevance, distance and prominence. Prominence comes partly from
              links, citations and mentions across the web.
            </p>
            <p>
              The trap is cheap link packages: hundreds of links from irrelevant or spammy sites. At best they do
              nothing. At worst they get your site penalized.
            </p>
            <p>
              Local link building is slower and more real: links from the suppliers you buy from, the associations you
              belong to, the teams you sponsor and the local news that covers your work.
            </p>
          </div>
          <div className="panel rv">
            <h3>Where local links come from</h3>
            <ul className="ticks">
              <li>Supplier and manufacturer dealer pages</li>
              <li>Trade associations and licensing bodies</li>
              <li>Chamber of commerce and local business groups</li>
              <li>Local sponsorships and events</li>
              <li>Local news and community sites</li>
              <li>Industry directories and citations</li>
              <li>Partner businesses (realtors, builders, insurers)</li>
              <li>Helpful content others want to reference</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>What link building includes.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Link audit</h3>
              <p>A review of your current links, competitor links and any risky links that need attention.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Citations</h3>
              <p>Accurate listings on the main data aggregators and directories for your trade and area.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Relationship links</h3>
              <p>Getting the links you already deserve from suppliers, partners and associations.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Local outreach</h3>
              <p>Pitching local news, community sites and partners with stories and helpful resources.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Linkable content</h3>
              <p>Guides and local resources that are worth linking to.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Reporting</h3>
              <p>Every link listed in your monthly report, with where it came from and why it matters.</p>
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
            <Link className="chip" href="/blog/local-link-building-for-contractors">
              15 local link building ideas →
            </Link>
          </div>
        </div>
      </section>
      <ServiceChips exclude="/seo-services/link-building" />
      <RelatedLinks page="/seo-services/link-building" topics={["local-seo", "google-maps"]} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
