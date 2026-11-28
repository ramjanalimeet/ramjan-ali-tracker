import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { AI_PLAN, usd } from "@/lib/pricing";
import { PricingSection } from "@/components/PricingPlans";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";
import { MainCta } from "@/components/MainCta";
import type { Step } from "@/components/HowItWorks";

export const metadata = pageMeta({
  title: "GEO & AI Visibility Services for Local Businesses | Ramjan Ali Akash",
  description:
    "GEO and AI visibility for local businesses: get recommended by ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews, with monthly prompt tracking.",
  path: "/seo-services/ai-visibility",
});

const FAQ: FaqItem[] = [
  {
    q: "Is AI search replacing Google?",
    a: "Not for local businesses. Google Maps and search still drive most direct enquiries. But more customers check an AI answer first, and those answers draw on the same signals, so I work on both together.",
  },
  {
    q: "Can you guarantee ChatGPT will recommend me?",
    a: "No. AI answers change by user, location and wording, and no one controls them. I track a fixed set of real questions every month and report how often, and how accurately, you are mentioned.",
  },
  {
    q: "How is this different from local SEO?",
    a: "It is built on local SEO. On top of that I make sure the facts about your business are consistent everywhere AI tools look, your pages answer questions clearly, and the AI crawlers can actually read your site.",
  },
  {
    q: "Which AI tools do you track?",
    a: 'Google\'s AI Overviews and AI Mode, ChatGPT, Gemini, Perplexity and Microsoft Copilot, using questions your customers really ask, like "best roofer in [city]" or "who can pump my septic tank this week".',
  },
  {
    q: "What is GEO?",
    a: "GEO stands for Generative Engine Optimization: making your business easy for AI tools to find, understand, trust and quote. For a local business it mostly means consistent facts across the web, strong reviews, clear answer-style pages and a site AI crawlers can read.",
  },
  {
    q: "How long does it take to show up in AI answers?",
    a: "Fixes to listings, pages and crawl access can show up within weeks for tools that search the web live, like Perplexity, ChatGPT search and AI Overviews. Answers that lean on older training data move slower. You see the trend in the monthly prompt report.",
  },
  {
    q: "What if an AI tool says something wrong about my business?",
    a: "That is usually a sign of a wrong or outdated source: an old listing, a closed location, a stale directory page. I trace where the wrong fact comes from, fix it at the source, and recheck the same question the next month.",
  },
  {
    q: "Can I buy GEO & AI Visibility without local SEO?",
    a: `No. AI tools lean on the same profile, reviews, listings and pages that local SEO builds, so selling one without the other would waste your money. It is included from the ${AI_PLAN.name} plan up, alongside local SEO.`,
  },
];

const AI_STEPS: Step[] = [
  {
    title: "Baseline",
    text: "I ask ChatGPT, Gemini, Perplexity, Copilot and Google's AI features the questions your customers ask in your towns, and record who gets named, what they say about you and which sources they cite.",
  },
  {
    title: "Fix the sources",
    text: "Wrong or missing facts are corrected where they live: your Google Business Profile, Bing Places, Apple Business Connect, key directories and your own website.",
  },
  {
    title: "Build answer-ready proof",
    text: "Service and area pages rewritten to answer questions directly, schema markup, crawler access, steady reviews and mentions from local and trade sites.",
  },
  {
    title: "Track and report",
    text: "The same fixed set of questions rechecked every month, with a plain-English report on mentions, accuracy, competitors and what changed.",
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
      "@id": `${SITE_URL}/seo-services/ai-visibility#webpage`,
      url: `${SITE_URL}/seo-services/ai-visibility`,
      name: "GEO & AI Visibility Services for Local Businesses | Ramjan Ali Akash",
      description:
        "GEO and AI visibility for local businesses: get recommended by ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews, with monthly prompt tracking.",
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
          name: "GEO & AI Visibility",
          item: `${SITE_URL}/seo-services/ai-visibility`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/seo-services/ai-visibility#service`,
      name: "GEO & AI Visibility",
      alternateName: ["Generative Engine Optimization", "AI search visibility"],
      description:
        "GEO and AI visibility for local businesses: get recommended by ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews, with monthly prompt tracking.",
      url: `${SITE_URL}/seo-services/ai-visibility`,
      provider: {
        "@id": `${SITE_URL}/#business`,
      },
      serviceType: "Generative Engine Optimization",
      areaServed: "United States",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GEO & AI Visibility services",
        itemListElement: [
          "AI visibility audit",
          "Profile and listing consistency",
          "Answer-ready service and area pages",
          "Schema markup and AI crawler access",
          "Reviews and third-party mentions",
          "Monthly AI prompt tracking",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    faqSchema(FAQ),
  ],
};

export default function AiVisibilityPage() {
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
              <li aria-current="page">GEO &amp; AI Visibility</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">SEO Services · GEO &amp; AI Visibility</span>
              <h1>
                Get recommended by <span className="hl">AI search</span>.
              </h1>
              <p className="lead">
                When homeowners ask ChatGPT, Gemini, Perplexity or Google's AI Overviews who to call, your business
                should be one of the names they hear, with the right services, towns and reviews attached.
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
                  <span>Local service companies, clinics, law firms, restaurants and other businesses</span>
                </li>
                <li>
                  <b>Where</b>
                  <span>Google AI Overviews and AI Mode, ChatGPT, Gemini, Perplexity, Copilot</span>
                </li>
                <li>
                  <b>Built on</b>
                  <span>Strong local SEO: profile, reviews, listings and pages</span>
                </li>
                <li>
                  <b>Price</b>
                  <span>
                    Included from {usd(AI_PLAN.price)}/month. <Link href="#pricing">See plans</Link>
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
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">The shift</span>
            <h2>The AI answer is the new map pack.</h2>
            <p>
              Homeowners are asking AI tools the same thing they used to type into Google: "Who is the best roofer in
              Tampa?" or "Which HVAC company near me has good reviews?"
            </p>
            <p>
              The answer is a short list of names. If you are not on it, the homeowner never sees you, no matter how
              good your website is.
            </p>
            <p>
              AI tools build that list from what they can find and trust about local businesses: your Google Business
              Profile and other listings, your reviews, your website, and what other sites say about you. My job is to
              make sure every one of those sources tells the same clear, strong story.
            </p>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">✦ Which HVAC company near me has the best reviews?</div>
              <p style={{ fontSize: 13, color: "#555", margin: "0 0 6px" }}>
                Here are some well-reviewed options near you:
              </p>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your HVAC Co.</b>
                    <small>
                      <span className="st">★★★★★</span> 4.9 · Same-day AC repair
                    </small>
                  </div>
                </li>
                <li className="mrow">
                  <span className="pos">2</span>
                  <div>
                    <b>Competitor A</b>
                    <small>
                      <span className="st">★★★★</span>☆ · Installs only
                    </small>
                  </div>
                </li>
                <li className="mrow">
                  <span className="pos">3</span>
                  <div>
                    <b>Competitor B</b>
                    <small>
                      <span className="st">★★★★</span>☆ · Closes 5 PM
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
              <span className="eyebrow">Where the answers come from</span>
              <h2>Each AI tool reads different sources.</h2>
            </div>
            <p>
              There is no single AI index to submit to. Each assistant pulls from its own mix of search results,
              listings and websites, so your facts have to be right in all of them.
            </p>
          </div>
          <div className="prose rv" style={{ maxWidth: "none" }}>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">AI tool</th>
                    <th scope="col">Leans on</th>
                    <th scope="col">What matters most</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Google AI Overviews &amp; AI Mode</th>
                    <td>Google Search and Google Business Profile</td>
                    <td>Profile, reviews, rankings and clear pages</td>
                  </tr>
                  <tr>
                    <th scope="row">Gemini</th>
                    <td>Google Search and Google Maps data</td>
                    <td>Profile accuracy, reviews and service details</td>
                  </tr>
                  <tr>
                    <th scope="row">ChatGPT</th>
                    <td>Live web search plus training data</td>
                    <td>Consistent listings, crawlable pages and mentions</td>
                  </tr>
                  <tr>
                    <th scope="row">Microsoft Copilot</th>
                    <td>Bing search and Bing Places</td>
                    <td>A claimed, complete Bing Places listing</td>
                  </tr>
                  <tr>
                    <th scope="row">Perplexity</th>
                    <td>Its own live web search, with cited sources</td>
                    <td>Answer-style pages, directories and reviews</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Why AI skips you</span>
              <h2>The usual reasons a good business goes unmentioned.</h2>
            </div>
            <p>In most AI visibility audits, the problem is one of these. All of them can be fixed.</p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Facts that disagree</h3>
              <p>
                A different phone number on Yelp, an old address on a directory, services missing on Bing. AI tools
                avoid naming businesses they are unsure about.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Pages that never answer</h3>
              <p>
                Slogans instead of specifics. No towns, no prices or ranges, no response times, so there is nothing
                worth quoting.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Crawlers locked out</h3>
              <p>
                A robots.txt rule, firewall setting or script-heavy site that stops AI and search crawlers from reading
                your pages at all.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Thin or generic reviews</h3>
              <p>
                A handful of &quot;great job&quot; reviews gives AI nothing to repeat. Detailed reviews that mention
                services and towns do.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Nobody else mentions you</h3>
              <p>
                No local news, trade association, supplier or &quot;best of&quot; list pages naming you, so the only
                source vouching for you is you.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Missing from Bing and Apple</h3>
              <p>
                Copilot leans on Bing, and Siri and Apple Maps on Apple Business Connect. Many businesses never claim
                either.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">How AI picks a business</span>
              <h2>Clear facts, real proof, easy answers.</h2>
            </div>
            <p>
              There is no secret trick. AI tools recommend the businesses they can understand and trust. These are the
              three things I build.
            </p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Clear facts</h3>
              <p>
                The same name, address, phone, services, hours and service areas on your Google Business Profile, Bing
                Places, Apple Business Connect, Yelp, BBB and the directories AI tools read.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Real proof</h3>
              <p>
                Steady, genuine reviews that mention the services and towns you want, plus mentions from local news,
                suppliers and trade associations.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Easy answers</h3>
              <p>
                Service and area pages that say plainly what you do, where, how fast and roughly what it costs, with
                FAQs and schema markup AI tools can read and quote.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What is included</span>
              <h2>Everything that gets you named in AI answers.</h2>
            </div>
            <p>Delivered alongside local SEO in one monthly plan, scoped to your market after the free audit.</p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>AI visibility audit</h3>
              <p>
                I ask the main AI tools the questions your customers ask, in your towns, and record who gets named, what
                they say about you, and what is wrong or missing.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>Profiles and listings</h3>
              <p>
                Google Business Profile, Bing Places, Apple Business Connect and key directories cleaned up so every
                source agrees.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Answer-ready pages</h3>
              <p>
                Service and area pages rewritten to answer real questions directly, with FAQs, prices or ranges, and
                proof from local jobs.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Schema and crawl access</h3>
              <p>
                LocalBusiness and service schema, fast pages, and a robots.txt that lets search and AI crawlers read
                your site.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Reviews and mentions</h3>
              <p>
                A simple review system and local mentions that give AI tools something specific and positive to repeat.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Prompt tracking</h3>
              <p>
                A fixed set of real questions checked every month, with a plain-English report on where you show up and
                what changed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Prompt tracking</span>
            <h2>See exactly what AI says about you.</h2>
            <p>
              Every month the same set of real customer questions is asked across the main AI tools, in the towns you
              serve. You see whether you are named, how you are described, and who is named instead.
            </p>
            <p>
              The report tracks accuracy too. Being mentioned with the wrong hours or a service you do not offer is a
              problem worth fixing, not a win.
            </p>
          </div>
          <div className="panel rv">
            <h3>Sample report rows</h3>
            <p className="muted" style={{ marginBottom: 12 }}>
              Example layout only, not client data.
            </p>
            <div className="prose" style={{ maxWidth: "none" }}>
              <div className="table-wrap" style={{ margin: 0 }}>
                <table style={{ minWidth: 420 }}>
                  <thead>
                    <tr>
                      <th scope="col">Question</th>
                      <th scope="col">Tool</th>
                      <th scope="col">Named?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Best septic company in [county]</td>
                      <td>ChatGPT</td>
                      <td>Yes, #2</td>
                    </tr>
                    <tr>
                      <td>Emergency plumber open now near [town]</td>
                      <td>AI Overviews</td>
                      <td>Yes, #1</td>
                    </tr>
                    <tr>
                      <td>Who installs heat pumps in [city]?</td>
                      <td>Perplexity</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Roofer with good reviews in [town]</td>
                      <td>Gemini</td>
                      <td>Yes, wrong hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">GEO vs SEO</span>
              <h2>Same foundations, different finish line.</h2>
            </div>
            <p>Local SEO gets you ranked. GEO gets you named. You need the first to win the second.</p>
          </div>
          <div className="prose rv" style={{ maxWidth: "none" }}>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Local SEO</th>
                    <th scope="col">GEO &amp; AI Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Goal</th>
                    <td>Rank in the map pack and local results</td>
                    <td>Get named and described correctly in AI answers</td>
                  </tr>
                  <tr>
                    <th scope="row">Where it shows</th>
                    <td>Google Search and Google Maps</td>
                    <td>ChatGPT, Gemini, Perplexity, Copilot, AI Overviews</td>
                  </tr>
                  <tr>
                    <th scope="row">Key signals</th>
                    <td>Relevance, distance and prominence</td>
                    <td>Consistent facts, quotable answers, third-party proof</td>
                  </tr>
                  <tr>
                    <th scope="row">Measured by</th>
                    <td>Map rankings, calls and form leads</td>
                    <td>Mentions, accuracy and share of AI answers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/blog/geo-vs-seo-home-services">
              Read: GEO vs SEO for home services <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <HowItWorks alt steps={AI_STEPS} />
      <PricingSection id="pricing" showAllLink />
      <Faq items={FAQ} />
      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">Related</span>
          <div className="chips" style={{ marginTop: 6 }}>
            <Link className="chip" href="/seo-services/local-seo">
              Local SEO →
            </Link>
            <Link className="chip" href="/seo-services/technical-seo">
              Technical SEO →
            </Link>
            <Link className="chip" href="/seo-services/on-page-seo">
              On-Page SEO →
            </Link>
            <Link className="chip" href="/industries/roofing-seo">
              Roofing SEO →
            </Link>
            <Link className="chip" href="/industries/plumbing-seo">
              Plumbing SEO →
            </Link>
            <Link className="chip" href="/industries/septic-seo">
              Septic SEO →
            </Link>
            <Link className="chip" href="/industries/hvac-seo">
              HVAC SEO →
            </Link>
            <Link className="chip" href="/industries/home-services-seo">
              Home Services SEO →
            </Link>
            <Link className="chip" href="/blog/check-if-ai-recommends-your-business">
              Guide: check if AI recommends you →
            </Link>
            <Link className="chip" href="/blog/get-recommended-by-chatgpt">
              Guide: get recommended by ChatGPT →
            </Link>
          </div>
        </div>
      </section>
      <RelatedLinks page="/seo-services/ai-visibility" topics={["ai-search"]} />
      <CtaBand title="Find out what AI says about your business." />
    </>
  );
}
