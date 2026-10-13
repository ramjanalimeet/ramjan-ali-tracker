import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Septic SEO | Local SEO for Septic Companies | Ramjan Ali Akash",
  description:
    "Local SEO for septic companies: rank for septic pumping, inspection, repair and installation searches across your rural service area. Free audit.",
  path: "/local-seo/septic-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "Is septic SEO worth it in a rural market?",
    a: "Usually yes. Competition is lighter, so good foundations often move rankings faster than in crowded metro trades, and each job is valuable.",
  },
  {
    q: "Can I rank in a county far from my address?",
    a: "You can rank organically there with good county and town pages. The map pack is harder far from your address, but rural searches often show fewer competitors in the map.",
  },
  {
    q: "Do you write about local septic rules?",
    a: "I write useful, general content and link to the official county or state source for the specific rules, which you or your team confirm before anything goes live.",
  },
  {
    q: "What do you need from me?",
    a: "Access to your profile and website, job photos, the list of towns and counties you serve, and a few minutes a week for reviews.",
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
      "@id": "https://ramjan-akash.vercel.app/local-seo/septic-seo#webpage",
      url: "https://ramjan-akash.vercel.app/local-seo/septic-seo",
      name: "Septic SEO | Local SEO for Septic Companies | Ramjan Ali Akash",
      description:
        "Local SEO for septic companies: rank for septic pumping, inspection, repair and installation searches across your rural service area. Free audit.",
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
          name: "Industries",
          item: "https://ramjan-akash.vercel.app/industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Septic SEO",
          item: "https://ramjan-akash.vercel.app/local-seo/septic-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Septic SEO",
      description:
        "Local SEO for septic companies: rank for septic pumping, inspection, repair and installation searches across your rural service area. Free audit.",
      url: "https://ramjan-akash.vercel.app/local-seo/septic-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Septic SEO",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function SepticSeoPage() {
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
                <Link href="/industries">Industries</Link>
              </li>
              <li aria-current="page">Septic SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO · Septic</span>
              <h1>
                Septic SEO for <span className="hl">wide service areas</span>.
              </h1>
              <p className="lead">
                Septic customers live spread out, across counties and small towns. I help septic pumping, inspection and
                installation companies show up everywhere they actually drive to, not just near the shop.
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
                  <span>Septic pumping, inspection, repair and install companies</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Rural and county-wide visibility</span>
                </li>
                <li>
                  <b>First moves</b>
                  <span>Often faster than metro trades</span>
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
            <span className="eyebrow">The opportunity</span>
            <h2>Less competition, but a huge area to cover.</h2>
            <p>
              Septic is less crowded online than plumbing or roofing, but the service area is the challenge. Your
              customers might be 40 minutes from your yard, in towns Google does not connect to your business yet.
            </p>
            <p>
              The fix is a clear structure: service pages for pumping, inspections, real estate inspections, repairs and
              new installs, plus useful pages for the counties and towns you serve. Combined with a strong profile and
              reviews from across that area, Google learns where you work.
            </p>
            <p>
              Septic also has strong seasonal and real estate demand. I plan content around home sales, maintenance
              reminders and problem searches like "septic backing up" that bring urgent calls.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">🔍 septic pumping near me</div>
              <div className="mmap">
                <i className="me" style={{ left: "46%", top: "38%" }}></i>
                <i style={{ left: "22%", top: "55%" }}></i>
                <i style={{ left: "72%", top: "24%" }}></i>
              </div>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your Septic Service</b>
                    <small>
                      <span className="st">★★★★★</span> 4.9 · Open 24 hours
                    </small>
                  </div>
                </li>
                <li className="mrow">
                  <span className="pos">2</span>
                  <div>
                    <b>Competitor A</b>
                    <small>
                      <span className="st">★★★★</span>☆ · Closes 6 PM
                    </small>
                  </div>
                </li>
                <li className="mrow">
                  <span className="pos">3</span>
                  <div>
                    <b>Competitor B</b>
                    <small>
                      <span className="st">★★★★</span>☆ · Closes 6 PM
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec tight alt">
        <div className="wrap split">
          <div className="rv">
            <span className="eyebrow">Target searches</span>
            <h2>The searches worth ranking for.</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              Examples. Your real list comes from keyword data for your service area.
            </p>
          </div>
          <div className="rv">
            <ul className="ticks two">
              <li>septic pumping near me</li>
              <li>septic tank cleaning [county]</li>
              <li>septic inspection for home sale</li>
              <li>septic system installation</li>
              <li>drain field repair</li>
              <li>septic backing up</li>
              <li>grease trap pumping</li>
              <li>aerobic septic maintenance</li>
              <li>septic tank locating</li>
              <li>perc test [county]</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything a septic company needs to rank locally.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>
                Service area set up correctly, the right categories and services, photos from real jobs and regular
                posts.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Service pages</h3>
              <p>Pumping, inspections, real estate inspections, repairs, drain fields, installs and commercial work.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>County and town pages</h3>
              <p>
                Pages for the counties and towns you cover, with useful local detail such as soil, permits and typical
                systems.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Reviews system</h3>
              <p>Steady reviews from customers across your whole area, mentioning the town and the service.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Real estate partners</h3>
              <p>Content and links that make you the go-to for inspection searches by agents and buyers.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Tracking</h3>
              <p>See which towns and services the calls come from so we can push the profitable ones.</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <Faq items={FAQ} />
      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">Related</span>
          <div className="chips" style={{ marginTop: 6 }}>
            <Link className="chip" href="/ai-search">
              AI Search Visibility →
            </Link>
            <Link className="chip" href="/local-seo/roofing-seo">
              Roofing SEO →
            </Link>
            <Link className="chip" href="/local-seo/plumbing-seo">
              Plumbing SEO →
            </Link>
            <Link className="chip" href="/local-seo/hvac-seo">
              HVAC SEO →
            </Link>
            <Link className="chip" href="/local-seo/home-services-seo">
              Home Services SEO →
            </Link>
          </div>
        </div>
      </section>
      <RelatedLinks
        page="/local-seo/septic-seo"
        topics={["local-seo", "google-maps"]}
        industriesTitle="More industries"
      />
      <CtaBand title="Be the septic company every town in your area finds." />
    </>
  );
}
