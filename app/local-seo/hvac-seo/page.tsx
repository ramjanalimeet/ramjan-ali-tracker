import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "HVAC SEO | Local SEO for HVAC Companies | Ramjan Ali Akash",
  description:
    "Local SEO for HVAC contractors: rank in Google Maps for AC repair, furnace repair, heat pump and system replacement searches in your area. Free audit.",
  path: "/local-seo/hvac-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "When should an HVAC company start SEO?",
    a: "Ideally two to four months before your busy season. Rankings take time to build, and starting early means you are in place when the calls spike.",
  },
  {
    q: "Can SEO bring replacement jobs, not just repairs?",
    a: "Yes. Replacement buyers research before they call. Pages and content on costs, options and financing bring in those higher-value leads.",
  },
  {
    q: "Do you help with maintenance plan sign-ups?",
    a: "I build a dedicated page and supporting content for your plan, and track sign-ups that come from search.",
  },
  {
    q: "How long until I see results?",
    a: "Profile and technical fixes often show movement in 4 to 8 weeks. Competitive terms in a big metro usually take 4 to 9 months.",
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
      "@id": "https://ramjan-akash.vercel.app/local-seo/hvac-seo#webpage",
      url: "https://ramjan-akash.vercel.app/local-seo/hvac-seo",
      name: "HVAC SEO | Local SEO for HVAC Companies | Ramjan Ali Akash",
      description:
        "Local SEO for HVAC contractors: rank in Google Maps for AC repair, furnace repair, heat pump and system replacement searches in your area. Free audit.",
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
          name: "HVAC SEO",
          item: "https://ramjan-akash.vercel.app/local-seo/hvac-seo",
        },
      ],
    },
    {
      "@type": "Service",
      name: "HVAC SEO",
      description:
        "Local SEO for HVAC contractors: rank in Google Maps for AC repair, furnace repair, heat pump and system replacement searches in your area. Free audit.",
      url: "https://ramjan-akash.vercel.app/local-seo/hvac-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "HVAC SEO",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function HvacSeoPage() {
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
              <li aria-current="page">HVAC SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO · HVAC</span>
              <h1>
                HVAC SEO that works in <span className="hl">every season</span>.
              </h1>
              <p className="lead">
                AC repair in July, furnace calls in January, replacements and maintenance plans in between. I help HVAC
                companies rank for each, in the towns they serve, before the rush starts.
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
                  <span>Residential and light commercial HVAC</span>
                </li>
                <li>
                  <b>Focus</b>
                  <span>Repair, replacement, heat pumps and maintenance plans</span>
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
            <h2>If you start in June, you are already late.</h2>
            <p>
              HVAC demand is seasonal, but rankings are not built in a week. Companies that win the summer AC rush did
              their SEO work in spring.
            </p>
            <p>
              I plan the year around your seasons: cooling pages and content ahead of summer, heating ahead of winter,
              and replacement, heat pump and maintenance plan content in the shoulder months when people research bigger
              decisions.
            </p>
            <p>
              Underneath it all is the same local foundation: a strong Google Business Profile, a fast site with clear
              service pages, consistent citations and a steady flow of reviews.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">🔍 ac repair near me</div>
              <div className="mmap">
                <i className="me" style={{ left: "46%", top: "38%" }}></i>
                <i style={{ left: "22%", top: "55%" }}></i>
                <i style={{ left: "72%", top: "24%" }}></i>
              </div>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your HVAC Co.</b>
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
              <li>ac repair near me</li>
              <li>hvac company [city]</li>
              <li>furnace repair near me</li>
              <li>heat pump installation</li>
              <li>ac replacement cost [city]</li>
              <li>emergency ac repair</li>
              <li>ductless mini split install</li>
              <li>hvac maintenance plan</li>
              <li>commercial hvac [city]</li>
              <li>indoor air quality service</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything an HVAC company needs to rank locally.</h2>
            </div>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>Categories, services, seasonal posts and offers, photos of real installs and up-to-date hours.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Service pages</h3>
              <p>AC repair, heating, heat pumps, replacements, ductless, maintenance plans and indoor air quality.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Service area pages</h3>
              <p>Pages for each town you cover, with local job examples and climate-relevant advice.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Seasonal content plan</h3>
              <p>Articles and updates timed before each season so you rank before demand peaks.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Reviews system</h3>
              <p>Reviews that mention the system, the town and the tech, coming in every month.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Tracking</h3>
              <p>Calls and forms tracked by service so you can see where replacement leads come from.</p>
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
            <Link className="chip" href="/local-seo/home-services-seo">
              Home Services SEO →
            </Link>
          </div>
        </div>
      </section>
      <CtaBand title="Be ready before the next heat wave." />
    </>
  );
}
