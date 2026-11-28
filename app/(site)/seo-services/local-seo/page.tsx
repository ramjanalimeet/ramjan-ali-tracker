import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { fromPrice, usd } from "@/lib/pricing";
import { PricingSection } from "@/components/PricingPlans";
import { TRADE_COUNT } from "@/lib/industries";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";
import { MainCta } from "@/components/MainCta";
import { ServiceChips } from "@/components/ServiceChips";
import { ELITE_SEPTIC_METRICS, ELITE_SEPTIC_PATH } from "@/lib/elite-septic";

export const metadata = pageMeta({
  title: "Local SEO Services for Local Businesses | Ramjan Ali Akash",
  description:
    "Local SEO services that win Google map pack rankings: Google Business Profile, service and area pages, reviews, citations, local links and monthly map rank tracking.",
  path: "/seo-services/local-seo",
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
  {
    q: "How long until I see results?",
    a: "Profile and technical fixes are often picked up in 4 to 8 weeks. Competitive towns and new service pages usually take 3 to 6 months to settle. You see map rankings across your area in every monthly report, so progress is never a guess.",
  },
  {
    q: "Can you rank me in towns where I don't have an office?",
    a: "Map pack rankings fade with distance from your address, so the honest answer is: partly. A well-built service area, a strong page for each town and local proof from jobs there win organic results and widen how far your map ranking reaches.",
  },
  {
    q: "Do I own everything you build?",
    a: "Yes. Your Google Business Profile, website, pages, listings and reports stay in your name. If we stop working together, you keep all of it.",
  },
  {
    q: "Is local SEO better than Google Ads or Local Services Ads?",
    a: "They do different jobs. Ads buy calls today and stop when the budget stops. Local SEO takes longer but keeps bringing calls without paying per click. Many of my clients run both, then lower ad spend as organic calls grow.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Ramjan Ali Akash",
      inLanguage: "en",
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/seo-services/local-seo#webpage`,
      url: `${SITE_URL}/seo-services/local-seo`,
      name: "Local SEO Services for Local Businesses | Ramjan Ali Akash",
      description:
        "Local SEO services that win Google map pack rankings: Google Business Profile, service and area pages, reviews, citations, local links and monthly map rank tracking.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO Services",
          item: `${SITE_URL}/seo-services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Local SEO",
          item: `${SITE_URL}/seo-services/local-seo`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/seo-services/local-seo#service`,
      name: "Local SEO",
      description:
        "Local SEO services that win Google map pack rankings: Google Business Profile, service and area pages, reviews, citations, local links and monthly map rank tracking.",
      url: `${SITE_URL}/seo-services/local-seo`,
      provider: {
        "@id": `${SITE_URL}/#business`,
      },
      serviceType: "Local SEO",
      areaServed: "United States",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Local SEO services",
        itemListElement: [
          "Google Business Profile optimization",
          "Service and area pages",
          "Review generation system",
          "Citation building and cleanup",
          "Local link building",
          "Map rank tracking and reporting",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
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
              <li>
                <Link href="/seo-services">SEO Services</Link>
              </li>
              <li aria-current="page">Local SEO</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services · Local SEO</span>
              <h1>
                Local SEO for <span className="hl">local businesses</span>.
              </h1>
              <p className="lead">
                Rank in the Google map pack and local results for the services you sell, in the towns you serve, and
                build the signals AI search tools use to recommend you. One specialist handling your profile, website,
                reviews, citations and links.
              </p>
              <div className="cta-row">
                <MainCta />
              </div>
            </div>
            <aside className="facts">
              <h2>At a glance</h2>
              <ul>
                <li>
                  <b>Who it is for</b>
                  <span>Service companies, clinics, law firms, restaurants and local brands</span>
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
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Sound familiar?</span>
              <h2>Signs your local SEO is costing you jobs.</h2>
            </div>
            <p>
              Most local businesses do not have a traffic problem. They have a visibility problem in the few searches
              that turn into calls.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Competitors own the map pack</h3>
              <p>
                You do the better work, but the same three businesses show up every time someone searches for your
                service in your town.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>You only rank next to your office</h3>
              <p>
                You show up a few streets from your address and disappear in the towns where the bigger, better-paying
                jobs are.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Calls depend on ads</h3>
              <p>
                When the ad budget pauses, the phone goes quiet. Nothing on Google is bringing in calls you do not pay
                for.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Your profile is half finished</h3>
              <p>
                Wrong categories, missing services, old photos, unanswered reviews, or a suspension you never fully
                recovered from.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>One page for every service</h3>
              <p>
                Your website lists everything on a single services page, so Google has nothing strong to rank for each
                job or each town.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>No idea what is working</h3>
              <p>
                You have paid for SEO before and got a report full of charts, but nobody could tell you how many calls
                it brought in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec alt" id="trades">
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
              See all {TRADE_COUNT} niches <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec">
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
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Proof</span>
              <h2>Real calls from a real profile.</h2>
            </div>
            <p>
              Elite Septic Service, a local septic company. Publicly reported Google Business Profile data, June to
              early November 2026.
            </p>
          </div>
          <div className="grid g3">
            {ELITE_SEPTIC_METRICS.map((m) => (
              <div className="stat rv" key={m.label}>
                <span className="stat-label">{m.label}</span>
                <span className="stat-val">{m.value}</span>
              </div>
            ))}
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href={ELITE_SEPTIC_PATH}>
              Read the case study <span className="arr">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/case-studies">
              All case studies <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Monthly reporting</span>
            <h2>A report you can read in five minutes.</h2>
            <p>
              No vanity charts. Every month you get a short, plain-English report that answers three questions: are we
              more visible, is the phone ringing more, and what happens next.
            </p>
            <p>
              Rankings are checked on a grid across your whole service area, not just from your office, so you see
              exactly which towns you win and which ones still need work.
            </p>
          </div>
          <div className="panel rv">
            <h3>What every report covers</h3>
            <ul className="ticks">
              <li>Map pack rankings on a grid across your service area</li>
              <li>Calls, direction requests and website clicks from your profile</li>
              <li>Form leads and tracked calls from the website</li>
              <li>New reviews, rating and review replies</li>
              <li>Pages, citations and links added this month</li>
              <li>The priorities for next month, in order</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Compare</span>
              <h2>Local SEO vs paying for every call.</h2>
            </div>
            <p>Ads and SEO are not rivals. But only one keeps working after you stop paying.</p>
          </div>
          <div className="prose rv" style={{ maxWidth: "none" }}>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Local SEO</th>
                    <th scope="col">Google Ads</th>
                    <th scope="col">Local Services Ads</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">How you pay</th>
                    <td>Flat monthly fee</td>
                    <td>Per click</td>
                    <td>Per lead</td>
                  </tr>
                  <tr>
                    <th scope="row">Speed</th>
                    <td>Builds over 3 to 6 months</td>
                    <td>Same day</td>
                    <td>Days, after screening</td>
                  </tr>
                  <tr>
                    <th scope="row">When you stop</th>
                    <td>Rankings and pages keep working</td>
                    <td>Calls stop</td>
                    <td>Calls stop</td>
                  </tr>
                  <tr>
                    <th scope="row">Map pack and AI answers</th>
                    <td>Yes, organic</td>
                    <td>Sponsored slots only</td>
                    <td>Sponsored slots only</td>
                  </tr>
                  <tr>
                    <th scope="row">Best for</th>
                    <td>Steady, lower-cost calls long term</td>
                    <td>Filling the calendar quickly</td>
                    <td>Trades eligible for Google Guaranteed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/blog/local-services-ads-vs-seo-for-contractors">
              Read the full comparison <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <HowItWorks alt />
      <PricingSection id="pricing" showAllLink />
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Fit check</span>
              <h2>Who local SEO works best for.</h2>
            </div>
            <p>I would rather say no up front than take on a market I cannot win for you.</p>
          </div>
          <div className="grid g2">
            <div className="panel rv">
              <h3>Good fit</h3>
              <ul className="ticks">
                <li>You serve customers in a defined area and want more calls from it</li>
                <li>You have a real address that can be verified on Google</li>
                <li>You can answer or return calls quickly</li>
                <li>You will ask happy customers for reviews</li>
              </ul>
            </div>
            <div className="panel rv">
              <h3>Not a fit</h3>
              <ul className="crosses">
                <li>You want guaranteed #1 rankings in a few weeks</li>
                <li>You want virtual offices, fake listings or bought reviews</li>
                <li>You need every lead this week and cannot wait for organic growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
            <h3>GEO &amp; AI Visibility</h3>
            <p className="muted" style={{ marginBottom: 16 }}>
              How I get local businesses named when customers ask AI who to choose.
            </p>
            <Link className="btn btn-dark btn-sm" href="/seo-services/ai-visibility">
              GEO &amp; AI Visibility <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Faq items={FAQ} />
      <ServiceChips exclude="/seo-services/local-seo" />
      <RelatedLinks page="/seo-services/local-seo" topics={["local-seo", "google-maps", "content"]} />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
