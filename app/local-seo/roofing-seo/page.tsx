import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Roofing SEO for Roofing Contractors | Ramjan Ali Akash",
  description:
    "Local SEO for roofing companies: rank in the Google map pack for roof repair, roof replacement and storm damage searches in your service area. Free audit.",
  path: "/local-seo/roofing-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "How long does roofing SEO take?",
    a: 'Profile and technical fixes often show movement in 4 to 8 weeks. Ranking in the map pack for competitive terms like "roof replacement" in a big metro usually takes 4 to 9 months of steady work.',
  },
  {
    q: "Can you help me rank in towns where I do not have an office?",
    a: "Yes, through service area pages and organic rankings. The map pack leans heavily on distance from the searcher, so towns far from your business address are won mainly through organic results rather than the map.",
  },
  {
    q: "Do you work with storm restoration companies?",
    a: "Yes, as long as you are a real local contractor with a verifiable address. I do not create fake listings or virtual offices, because Google suspends them and the business loses everything.",
  },
  {
    q: "What do I need to provide?",
    a: "Access to your Google Business Profile and website, photos from real jobs, and a few minutes a week to ask happy customers for reviews. I handle the rest.",
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
      "@id": "https://ramjan-akash.vercel.app/local-seo/roofing-seo#webpage",
      url: "https://ramjan-akash.vercel.app/local-seo/roofing-seo",
      name: "Roofing SEO | Local SEO for Roofing Contractors | Ramjan Ali Akash",
      description:
        "Local SEO for roofing companies: rank in the Google map pack for roof repair, roof replacement and storm damage searches in your service area. Free audit.",
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
          name: "Roofing SEO",
          item: "https://ramjan-akash.vercel.app/local-seo/roofing-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Roofing SEO",
      description:
        "Local SEO for roofing companies: rank in the Google map pack for roof repair, roof replacement and storm damage searches in your service area. Free audit.",
      url: "https://ramjan-akash.vercel.app/local-seo/roofing-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Roofing SEO",
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(FAQ),
  ],
};

export default function RoofingSeoPage() {
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
              <li aria-current="page">Roofing SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO · Roofing</span>
              <h1>
                Roofing SEO that fills the <span className="hl">schedule</span>.
              </h1>
              <p className="lead">
                Homeowners with a leak or storm damage search Google and call one of the first three roofers they see. I
                get your roofing company into that short list for the jobs and towns you actually want.
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
                  <span>Residential and commercial roofing contractors</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Map pack + organic for repair, replacement and storm work</span>
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
            <span className="eyebrow">The problem</span>
            <h2>Storm chasers and lead sellers are taking your calls.</h2>
            <p>
              Roofing is one of the most competitive local searches there is. Out-of-town storm crews, lead-generation
              sites and national brands all fight for the same homeowners, and many of them out-spend you on ads.
            </p>
            <p>
              The way to beat them is local trust: a Google Business Profile that is complete and active, real reviews
              that mention the work, and pages for each service and town you cover. That is what Google rewards in the
              map pack, and it is very hard for a storm chaser to fake.
            </p>
            <p>
              I build that foundation, then keep it growing every month so you are already ranking when the next hail or
              hurricane season arrives.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">🔍 roof repair near me</div>
              <div className="mmap">
                <i className="me" style={{ left: "46%", top: "38%" }}></i>
                <i style={{ left: "22%", top: "55%" }}></i>
                <i style={{ left: "72%", top: "24%" }}></i>
              </div>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your Roofing Co.</b>
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
              <li>roofer near me</li>
              <li>roof repair [city]</li>
              <li>roof replacement [city]</li>
              <li>storm damage roof repair</li>
              <li>hail damage roof inspection</li>
              <li>roof leak repair near me</li>
              <li>metal roofing contractor</li>
              <li>commercial roofing [city]</li>
              <li>roof insurance claim help</li>
              <li>emergency roof tarp service</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything a roofing company needs to rank locally.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>
                Primary and secondary categories, services, service areas, photos of real jobs, Q&amp;A and weekly
                posts.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Service pages</h3>
              <p>Dedicated pages for repair, replacement, storm damage, inspections, gutters and commercial roofing.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Service area pages</h3>
              <p>
                Genuinely useful pages for the towns you serve, with local job photos and details, not copy-paste spam.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Reviews system</h3>
              <p>A simple ask-every-customer process that brings in reviews mentioning roofs, towns and crews.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Citations and links</h3>
              <p>
                Consistent listings on the directories that matter, plus links from suppliers, local news and
                associations.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Tracking</h3>
              <p>Call tracking and form tracking so you see which searches turn into inspections and signed jobs.</p>
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
            <Link className="chip" href="/blog/roofing-storm-damage-leads">
              Guide: storm damage leads →
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
            <Link className="chip" href="/local-seo/home-services-seo">
              Home Services SEO →
            </Link>
          </div>
        </div>
      </section>
      <RelatedLinks
        page="/local-seo/roofing-seo"
        topics={["local-seo", "google-maps"]}
        industriesTitle="More industries"
      />
      <CtaBand title="Be the roofer they call after the next storm." />
    </>
  );
}
