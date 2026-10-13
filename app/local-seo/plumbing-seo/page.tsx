import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Plumbing SEO | Local SEO for Plumbers | Ramjan Ali Akash",
  description:
    "Local SEO for plumbing companies: rank in Google Maps for emergency plumber, water heater, drain and sewer searches in your service area. Free audit.",
  path: "/local-seo/plumbing-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "Should my Google profile say open 24 hours?",
    a: "Only if someone really answers the phone 24 hours. Google uses open hours when ranking, and listing hours you do not keep leads to bad reviews and can hurt you.",
  },
  {
    q: "How long does plumbing SEO take?",
    a: "Profile and technical fixes often show movement in 4 to 8 weeks. Competitive terms in a large metro usually take 4 to 9 months.",
  },
  {
    q: "Can you help me get more water heater and repipe jobs instead of small calls?",
    a: "Yes. We build pages and profile services around the work you want, and target keywords that signal bigger jobs.",
  },
  {
    q: "Do I need a new website?",
    a: "Usually not. Most plumbing sites need better structure, faster pages and stronger service pages, not a rebuild. The audit tells you which you need.",
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
      "@id": "https://ramjan-akash.vercel.app/local-seo/plumbing-seo#webpage",
      url: "https://ramjan-akash.vercel.app/local-seo/plumbing-seo",
      name: "Plumbing SEO | Local SEO for Plumbers | Ramjan Ali Akash",
      description:
        "Local SEO for plumbing companies: rank in Google Maps for emergency plumber, water heater, drain and sewer searches in your service area. Free audit.",
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
          name: "Plumbing SEO",
          item: "https://ramjan-akash.vercel.app/local-seo/plumbing-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Plumbing SEO",
      description:
        "Local SEO for plumbing companies: rank in Google Maps for emergency plumber, water heater, drain and sewer searches in your service area. Free audit.",
      url: "https://ramjan-akash.vercel.app/local-seo/plumbing-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Plumbing SEO",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function PlumbingSeoPage() {
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
              <li aria-current="page">Plumbing SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO · Plumbing</span>
              <h1>
                Plumbing SEO for the calls that <span className="hl">can't wait</span>.
              </h1>
              <p className="lead">
                When a pipe bursts at 11pm, nobody scrolls to page two. I help plumbing companies rank in the map pack
                for emergency and high-value searches, so the phone rings with jobs worth taking.
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
                  <span>Residential and light commercial plumbers</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Emergency, water heater, drain, sewer and repipe searches</span>
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
            <h2>Emergency searches go to whoever Google trusts nearby.</h2>
            <p>
              Plumbing searches are urgent and local. The homeowner searches, sees three businesses on the map, checks
              the stars and calls. If you are not in those three, you do not exist for that job.
            </p>
            <p>
              Google decides those three spots by relevance, distance and prominence. You cannot move your address, but
              you can make your profile, website and reviews the most relevant and trusted in your area.
            </p>
            <p>
              I also separate the work you want more of. A drain clog and a whole-house repipe are very different
              tickets, and your pages and profile should reflect which ones you are chasing.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">🔍 emergency plumber near me</div>
              <div className="mmap">
                <i className="me" style={{ left: "46%", top: "38%" }}></i>
                <i style={{ left: "22%", top: "55%" }}></i>
                <i style={{ left: "72%", top: "24%" }}></i>
              </div>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your Plumbing Co.</b>
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
              <li>emergency plumber near me</li>
              <li>24 hour plumber [city]</li>
              <li>water heater replacement</li>
              <li>tankless water heater install</li>
              <li>drain cleaning near me</li>
              <li>sewer line repair [city]</li>
              <li>slab leak detection</li>
              <li>repipe specialist</li>
              <li>burst pipe repair</li>
              <li>gas line plumber</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything a plumbing company needs to rank locally.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>Correct categories, hours that match when you really answer, services, photos and regular posts.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Service pages</h3>
              <p>Separate pages for emergency service, water heaters, drains, sewer, leak detection and repipes.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Service area pages</h3>
              <p>Pages for the towns and neighborhoods you cover, with real job details and local proof.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Reviews system</h3>
              <p>A process that gets steady reviews mentioning the service, the town and the technician.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Citations and links</h3>
              <p>Clean, consistent listings plus local links from suppliers, sponsorships and community sites.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Call tracking</h3>
              <p>Know which calls came from Google Maps, which came from organic search, and what they were for.</p>
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
        page="/local-seo/plumbing-seo"
        topics={["local-seo", "google-maps"]}
        industriesTitle="More industries"
      />
      <CtaBand title="Be the plumber they call first." />
    </>
  );
}
