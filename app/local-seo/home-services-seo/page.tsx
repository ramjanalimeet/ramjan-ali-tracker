import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { fromPrice, usd } from "@/lib/pricing";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Home Services SEO for Contractors | Ramjan Ali Akash",
  description:
    "Local SEO for home service businesses: electricians, garage door, pest control, landscaping, pool, cleaning and more. Rank in Google Maps. Free audit.",
  path: "/local-seo/home-services-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "My trade is not listed. Can you still help?",
    a: "Very likely. If your customers search Google for a service and you go to them, or they come to you locally, the same local SEO approach applies. The audit will confirm it.",
  },
  {
    q: "Do you work with franchises?",
    a: "Yes, for individual franchise locations, as long as the brand guidelines let us manage the local profile and location pages.",
  },
  {
    q: "How long does it take?",
    a: "Profile and technical fixes often show movement in 4 to 8 weeks. Competitive terms in a large metro usually take 4 to 9 months.",
  },
  {
    q: "Do I need a big budget?",
    a: `No. Plans are a fixed monthly price, starting at ${usd(fromPrice())}/month. You do not need to spend on ads for local SEO to work.`,
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
      "@id": "https://ramjan-akash.vercel.app/local-seo/home-services-seo#webpage",
      url: "https://ramjan-akash.vercel.app/local-seo/home-services-seo",
      name: "Home Services SEO | Local SEO for Service Businesses | Ramjan Ali Akash",
      description:
        "Local SEO for home service businesses: electricians, garage door, pest control, landscaping, pool, cleaning and more. Rank in Google Maps. Free audit.",
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
          name: "Local SEO",
          item: "https://ramjan-akash.vercel.app/local-seo",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Home Services SEO",
          item: "https://ramjan-akash.vercel.app/local-seo/home-services-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Home Services SEO",
      description:
        "Local SEO for home service businesses: electricians, garage door, pest control, landscaping, pool, cleaning and more. Rank in Google Maps. Free audit.",
      url: "https://ramjan-akash.vercel.app/local-seo/home-services-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Home Services SEO",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function HomeServicesSeoPage() {
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
                <Link href="/local-seo">Local SEO</Link>
              </li>
              <li aria-current="page">Home Services SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO · Home Services</span>
              <h1>
                Local SEO for <span className="hl">home service</span> businesses.
              </h1>
              <p className="lead">
                If customers search Google and then call you to come to their home, local SEO is how you get found. I
                work with home-service companies across trades, with the same proven local foundations.
              </p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-ghost" href="/book-a-call">
                  Book a call
                </Link>
              </div>
            </div>
            <aside className="facts">
              <h2>At a glance</h2>
              <ul>
                <li>
                  <b>For</b>
                  <span>
                    Electrical, garage door, pest control, landscaping, pools, cleaning, painting, restoration and more
                  </span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Map pack + organic for your core services</span>
                </li>
                <li>
                  <b>First moves</b>
                  <span>Usually visible in 4 to 8 weeks</span>
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
            <span className="eyebrow">How it works</span>
            <h2>Different trade, same three ranking factors.</h2>
            <p>
              Google ranks local businesses on three things: relevance to the search, distance from the searcher, and
              prominence, meaning how well known and trusted the business is. That is true whether you fix garage doors
              or treat termites.
            </p>
            <p>
              What changes by trade is the detail: which categories to use, which services deserve their own page, when
              demand peaks, and what customers worry about before they call.
            </p>
            <p>
              I learn your trade, look at who is winning in your area and why, then build the profile, pages, reviews
              and links to beat them.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">🔍 electrician near me</div>
              <div className="mmap">
                <i className="me" style={{ left: "46%", top: "38%" }}></i>
                <i style={{ left: "22%", top: "55%" }}></i>
                <i style={{ left: "72%", top: "24%" }}></i>
              </div>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your Business</b>
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
              <li>electrician near me</li>
              <li>garage door repair [city]</li>
              <li>pest control near me</li>
              <li>lawn care service [city]</li>
              <li>pool cleaning near me</li>
              <li>house cleaning service</li>
              <li>water damage restoration</li>
              <li>interior painters [city]</li>
              <li>tree removal near me</li>
              <li>pressure washing [city]</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>The local foundations, tuned to your trade.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>The right categories for your trade, full services list, service areas, real photos and posts.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Service pages</h3>
              <p>One focused page per core service, written around what customers ask before booking.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Service area pages</h3>
              <p>Useful pages for the towns you serve, built from real jobs, not templates.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Reviews system</h3>
              <p>A simple process to ask every happy customer, with replies that build trust.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Citations and links</h3>
              <p>Consistent listings and local links from suppliers, associations and community sites.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Tracking and reports</h3>
              <p>Calls, forms and rankings in one plain-English monthly report.</p>
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
            <Link className="chip" href="/local-seo/septic-seo">
              Septic SEO →
            </Link>
            <Link className="chip" href="/local-seo/hvac-seo">
              HVAC SEO →
            </Link>
          </div>
        </div>
      </section>
      <CtaBand title="Get found by the customers already searching." />
    </>
  );
}
