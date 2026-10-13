import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { fromPrice, usd } from "@/lib/pricing";
import { PricingSection } from "@/components/PricingPlans";
import { ALL_INDUSTRIES } from "@/lib/industries";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Local SEO for Home Service Businesses | Ramjan Ali Akash",
  description:
    "Local SEO for home service businesses: Google Business Profile, map pack rankings, reviews, citations and local pages that also feed AI search answers.",
  path: "/local-seo",
});

const FAQ: FaqItem[] = [
  {
    q: "What is the map pack?",
    a: 'The map pack is the box of three local businesses with a map that Google shows for searches like "plumber near me". It gets a large share of clicks and calls for local searches.',
  },
  {
    q: "Do I need a physical address?",
    a: "You need a real business address to verify a Google Business Profile, but service-area businesses can hide it and show the areas they serve instead.",
  },
  {
    q: "How much does local SEO cost?",
    a: `Plans start at ${usd(fromPrice())}/month, with no setup fees and no long-term contract. See the plans above. Growth and Pro also include GEO & AI Visibility.`,
  },
  {
    q: "Will you post fake reviews or create extra listings?",
    a: "Never. Both break Google's rules and the FTC's rules on fake reviews, and they put your business at risk.",
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
      "@id": "https://ramjan-akash.vercel.app/local-seo#webpage",
      url: "https://ramjan-akash.vercel.app/local-seo",
      name: "Local SEO Services for Home Service Businesses | Ramjan Ali Akash",
      description:
        "Local SEO for home service businesses: Google Business Profile, map pack rankings, reviews, citations and local pages that also feed AI search answers.",
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
      ],
    },
    {
      "@type": "Service",
      name: "Local SEO",
      description:
        "Local SEO for home service businesses: Google Business Profile, map pack rankings, reviews, citations and local pages that also feed AI search answers.",
      url: "https://ramjan-akash.vercel.app/local-seo",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "Local SEO",
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function LocalSeoPage() {
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
              <li aria-current="page">Local SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO</span>
              <h1>
                Local SEO for <span className="hl">home service</span> companies.
              </h1>
              <p className="lead">
                Rank in the Google map pack and local results for the services you sell, in the towns you serve, and
                build the signals AI search tools use to recommend you. One specialist handling your profile, website,
                reviews, citations and links.
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
                  <b>Who it is for</b>
                  <span>Roofing, plumbing, septic, HVAC and home-service businesses, in any country</span>
                </li>
                <li>
                  <b>Goal</b>
                  <span>More calls and booked jobs from Google and AI search</span>
                </li>
                <li>
                  <b>First moves</b>
                  <span>Usually visible in 4 to 8 weeks</span>
                </li>
                <li>
                  <b>Price</b>
                  <span>
                    From {usd(fromPrice())}/month. <Link href="#pricing">See plans</Link>
                  </span>
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
      <section className="sec" id="trades">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">By trade</span>
              <h2>Local SEO built around your trade.</h2>
            </div>
            <p>Every trade has its own searches, seasons and competitors. Pick yours to see how I approach it.</p>
          </div>
          <div className="grid g3">
            <Link className="card rv" href="/local-seo/roofing-seo">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Roofing SEO</h3>
              <p>
                Rank for roof repair, replacement and storm damage searches in the towns you want jobs from, before the
                next storm season.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/local-seo/plumbing-seo">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Plumbing SEO</h3>
              <p>
                Win the emergency calls and the high-value jobs, water heaters, repipes and sewer lines, from people
                searching right now.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/local-seo/septic-seo">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Septic SEO</h3>
              <p>
                Own the pumping, inspection and installation searches across the rural counties and small towns you
                cover.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/local-seo/hvac-seo">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>HVAC SEO</h3>
              <p>
                Rank for AC repair, heating and system replacement searches, and stay visible through the slow seasons
                too.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/local-seo/home-services-seo">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Home Services SEO</h3>
              <p>
                Electricians, garage doors, pest control, landscaping, pools, cleaning and more. Same local playbook,
                tuned to your trade.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/industries">
              See all {ALL_INDUSTRIES.length} industries <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">How Google ranks local businesses</span>
            <h2>Relevance, distance and prominence.</h2>
            <p>
              <strong>Relevance</strong> is how well your business matches the search. Your categories, services,
              website pages and reviews all signal what you do.
            </p>
            <p>
              <strong>Distance</strong> is how far you are from the searcher or the location in the search. You cannot
              change it, but you can make the most of it with a properly set service area and local pages.
            </p>
            <p>
              <strong>Prominence</strong> is how well known and trusted you are. Reviews, links, citations and mentions
              across the web all build it.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">🔍 hvac company near me</div>
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
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything that moves local rankings.</h2>
            </div>
            <p>One monthly plan covering every part of local SEO, scoped to your market after the free audit.</p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Google Business Profile</h3>
              <p>Categories, services, service areas, photos, posts, Q&amp;A and review replies, managed every week.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Website and pages</h3>
              <p>Technical fixes plus a strong page for each core service and the main towns you serve.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Reviews</h3>
              <p>
                A simple system for getting steady, genuine reviews, with no gating or incentives that break Google's
                rules.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Citations</h3>
              <p>Accurate, consistent business details across the directories and data sources Google trusts.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Local links</h3>
              <p>Links from suppliers, associations, sponsorships and local press that build prominence.</p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Tracking and reports</h3>
              <p>Map rankings across your area, calls, forms and a plain-English monthly report.</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <PricingSection id="pricing" alt showAllLink />
      <section className="sec tight">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Local SEO + AI search</span>
            <h2>The same work gets you into AI answers.</h2>
            <p>
              ChatGPT, Gemini, Perplexity and Google's AI Overviews build their local recommendations from your profile,
              listings, reviews and pages. Every Local SEO plan is set up to win there too.
            </p>
          </div>
          <div className="panel rv">
            <h3>AI Search Visibility</h3>
            <p className="muted" style={{ marginBottom: 16 }}>
              How I get home service businesses named when homeowners ask AI who to call.
            </p>
            <Link className="btn btn-dark btn-sm" href="/ai-search">
              AI search visibility <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Faq items={FAQ} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
