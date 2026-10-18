import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AI_PLAN, usd } from "@/lib/pricing";
import { PricingSection } from "@/components/PricingPlans";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "AI Search Visibility for Home Service Businesses | Ramjan Ali Akash",
  description:
    "Get your home service business recommended by ChatGPT, Gemini, Perplexity and Google AI Overviews. AI search visibility built on solid local SEO.",
  path: "/ai-search",
});

const FAQ: FaqItem[] = [
  {
    q: "Is AI search replacing Google?",
    a: "Not for local services. Google Maps and search still send most calls to home service businesses. But a growing share of homeowners check an AI answer first, and those answers draw on the same signals, so I work on both together.",
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
      "@id": "https://ramjan-akash.vercel.app/ai-search#webpage",
      url: "https://ramjan-akash.vercel.app/ai-search",
      name: "AI Search Visibility for Home Service Businesses | Ramjan Ali Akash",
      description:
        "Get your home service business recommended by ChatGPT, Gemini, Perplexity and Google AI Overviews. AI search visibility built on solid local SEO.",
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
          name: "AI Search Visibility",
          item: "https://ramjan-akash.vercel.app/ai-search",
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Search Visibility",
      description:
        "Get your home service business recommended by ChatGPT, Gemini, Perplexity and Google AI Overviews. AI search visibility built on solid local SEO.",
      url: "https://ramjan-akash.vercel.app/ai-search",
      provider: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      serviceType: "AI search visibility",
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(FAQ),
  ],
};

export default function AiSearchPage() {
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
              <li aria-current="page">AI Search Visibility</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">AI Search Visibility</span>
              <h1>
                Get recommended by <span className="hl">AI search</span>.
              </h1>
              <p className="lead">
                When homeowners ask ChatGPT, Gemini, Perplexity or Google's AI Overviews who to call, your business
                should be one of the names they hear, with the right services, towns and reviews attached.
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
                  <span>Roofing, plumbing, septic, HVAC and other home service businesses across the US</span>
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
      <HowItWorks alt />
      <PricingSection id="pricing" showAllLink />
      <Faq items={FAQ} />
      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">Related</span>
          <div className="chips" style={{ marginTop: 6 }}>
            <Link className="chip" href="/local-seo">
              Local SEO →
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
            <Link className="chip" href="/local-seo/home-services-seo">
              Home Services SEO →
            </Link>
            <Link className="chip" href="/blog/check-if-ai-recommends-your-business">
              Guide: check if AI recommends you →
            </Link>
          </div>
        </div>
      </section>
      <RelatedLinks page="/ai-search" topics={["ai-search"]} />
      <CtaBand title="Find out what AI says about your business." />
    </>
  );
}
