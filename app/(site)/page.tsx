import { SITE_URL } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { PostCards } from "@/components/PostCards";
import { AI_PLAN, fromPrice, usd } from "@/lib/pricing";
import { CITIES, CITY_GROUPS } from "@/lib/cities";
import { TRADE_COUNT } from "@/lib/industries";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";
import { MainCta } from "@/components/MainCta";

export const metadata = pageMeta({
  title: "Local SEO & AI Visibility for Local Businesses",
  description:
    "Local SEO and AI visibility for local businesses. Rank in Google Maps and get recommended by ChatGPT, Gemini and AI Overviews.",
  path: "/",
});

const FAQ: FaqItem[] = [
  {
    q: "What is local SEO?",
    a: 'Local SEO is the work of getting a business to show up in Google Maps and local search results for searches near it, like "plumber near me" or "roof repair in Tampa". It covers your Google Business Profile, website, reviews, citations and local links.',
  },
  {
    q: "What is AI search visibility?",
    a: "It is how often, and how accurately, AI tools like ChatGPT, Gemini, Perplexity and Google's AI Overviews mention your business when someone asks them for a local service. Those answers are built from your Google Business Profile, reviews, directory listings and what your website and the wider web say about you.",
  },
  {
    q: "Do I need both?",
    a: "They are one job. The signals that put you in the map pack, a complete profile, consistent listings, real reviews and clear service pages, are the same ones AI tools rely on. I work on both together in one plan.",
  },
  {
    q: "How long does it take?",
    a: "Profile and technical fixes often show movement in 4 to 8 weeks. Competitive terms in large metros usually take 4 to 9 months of consistent work. AI answers tend to follow as your profile, reviews and listings get stronger.",
  },
  {
    q: "What does it cost?",
    a: `Plans start at ${usd(fromPrice())}/month for Local SEO, and ${usd(AI_PLAN.price)}/month for Local SEO with GEO & AI Visibility included. No setup fees. I confirm the right plan in writing after the free audit, before anything starts.`,
  },
  {
    q: "Can you guarantee #1 on Google or in ChatGPT?",
    a: "No honest SEO can. Google and the AI companies control their results. What I can promise is clear work, clear reporting, and a focus on calls and jobs.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Plans are month to month and can be paused or cancelled with a week of notice.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Local SEO & AI Visibility for Local Businesses | Ramjan Ali Akash",
      description:
        "Local SEO and AI visibility for local businesses. Rank in Google Maps and get recommended by ChatGPT, Gemini and AI Overviews.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    faqSchema(FAQ),
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="pill">
              <span className="dot"></span>Local SEO &amp; AI Visibility for Local Businesses
            </span>
            <h1>
              Get found first on <span className="hl">Google + Maps</span> and in AI search.
            </h1>
            <p className="lead">
              I&apos;m <strong>Ramjan Ali Akash</strong>, a Local SEO and AI visibility specialist for local businesses. I
              help service companies, clinics, law firms, restaurants and other location-based brands
              rank in the <strong>Google map pack</strong> and get recommended by <strong>ChatGPT, Gemini and AI
              Overviews</strong>, so more local searches become qualified enquiries.
            </p>
            <div className="cta-row">
              <MainCta />
            </div>
            <p className="fine">Free, no pitch, and you keep the action plan either way.</p>
            <div className="chips">
              <Link className="chip" href="/local-seo">
                Local SEO
              </Link>
              <Link className="chip" href="/ai-search">
                AI Search Visibility
              </Link>
              <Link className="chip" href="/industries">
                {TRADE_COUNT} local business niches
              </Link>
            </div>
          </div>
          <div className="portrait">
            <div className="frame">
              <Image
                src="/assets/ramjan-ali-akash-portrait-600.webp"
                alt="Portrait of Ramjan Ali Akash"
                width={400}
                height={432}
                sizes="(max-width: 960px) 300px, 400px"
                priority
                unoptimized
              />
            </div>
            <div className="badge b1">
              <span className="spark">↗</span>
              <span>
                Maps, organic + AI<small>Ranking for jobs, not vanity terms</small>
              </span>
            </div>
            <div className="badge b2">
              <span>
                Local businesses only<small>One market, one measurable goal</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee" aria-label="Searches and AI questions I help local businesses win">
        <p>Searches and AI questions I help you win</p>
        <div className="track">
          <ul>
            <li>roofer near me</li>
            <li>emergency plumber</li>
            <li>best dentist near me?</li>
            <li>personal injury lawyer near me</li>
            <li>best local restaurant for dinner?</li>
            <li>auto repair near me</li>
            <li>family lawyer consultation</li>
            <li>top-rated salon in my area</li>
            <li>veterinarian near me</li>
            <li>wedding venue near me</li>
          </ul>
          <ul aria-hidden="true">
            <li>roofer near me</li>
            <li>emergency plumber</li>
            <li>best dentist near me?</li>
            <li>personal injury lawyer near me</li>
            <li>best local restaurant for dinner?</li>
            <li>auto repair near me</li>
            <li>family lawyer consultation</li>
            <li>top-rated salon in my area</li>
            <li>veterinarian near me</li>
            <li>wedding venue near me</li>
          </ul>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Why local + AI search</span>
            <h2>The map pack gets the calls. AI answers decide who makes the list.</h2>
            <p>
              When someone needs a nearby service, clinic, professional or place to visit, they search Google, compare
              the businesses in the map pack, check the reviews and choose one.
            </p>
            <p>
              More and more of them now ask ChatGPT, Gemini or Perplexity first, or read Google's AI Overview before
              they scroll. "Who is the best-reviewed option near me?" gets a short list of names, and everyone else is
              invisible.
            </p>
            <p>
              Both lists are built from the same signals: a complete Google Business Profile, consistent listings,
              steady reviews, clear service and area pages, and real local mentions. I build those signals so you are
              the business Google ranks and AI recommends.
            </p>
            <div className="cta-row">
              <Link className="btn btn-ghost" href="/local-seo">
                Local SEO <span className="arr">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/ai-search">
                AI search visibility <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="mock rv" aria-hidden="true">
            <div className="mcard">
              <div className="mq">✦ Who is the best emergency plumber near me?</div>
              <p style={{ fontSize: 13, color: "#555", margin: "0 0 6px" }}>
                Here are some well-reviewed options near you:
              </p>
              <ul>
                <li className="mrow me">
                  <span className="pos">1</span>
                  <div>
                    <b>Your Business</b>
                    <small>
                      <span className="st">★★★★★</span> 4.9 · 24/7 · 300+ reviews
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
              <span className="eyebrow">What I do</span>
              <h2>Two services. One goal: more booked jobs.</h2>
            </div>
            <p>
              Nothing else. No ads, no web design packages, no social media. Just the work that gets a local business
              found, trusted and contacted.
            </p>
          </div>
          <div className="grid g2">
            <Link className="card rv" href="/local-seo">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>Local SEO</h3>
              <p>
                Google Business Profile, map pack rankings, service and area pages, reviews, citations and local links,
                so you show up for the jobs you want in the towns you serve.
              </p>
              <p className="price-from">From {usd(fromPrice())}/month</p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/ai-search">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>AI Search Visibility</h3>
              <p>
                Get named in ChatGPT, Gemini, Perplexity and Google's AI Overviews when local customers ask who to
                choose, with the right services, locations and reviews attached.
              </p>
              <p className="price-from">Included from {usd(AI_PLAN.price)}/month</p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/pricing">
              See pricing <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Who I work with</span>
              <h2>Built for businesses that depend on local customers.</h2>
            </div>
            <p>
              Every niche is chosen differently. Roofers chase storms, dentists build patient trust, attorneys prove
              relevant experience and restaurants win on menus, reviews and convenience.
            </p>
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
            <Link className="card rv" href="/local-seo/dentist-seo">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>Dentist SEO</h3>
              <p>
                Win searches for general, emergency, cosmetic and implant dentistry with strong local trust signals.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/local-seo/personal-injury-lawyer-seo">
              <span className="ic" aria-hidden="true">
                04
              </span>
              <h3>Law Firm SEO</h3>
              <p>
                Build visibility for high-intent legal searches with clear practice-area pages and compliant proof.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/local-seo/restaurant-seo">
              <span className="ic" aria-hidden="true">
                05
              </span>
              <h3>Restaurant SEO</h3>
              <p>
                Keep menus, hours, photos, reviews and local discovery signals accurate across Maps, search and AI.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
            <Link className="card rv" href="/book-a-call">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Not sure where to start?</h3>
              <p>
                Book a free strategy call. I will review your Google Business Profile, website, AI search presence and
                top three map competitors, and show you the fixes in priority order.
              </p>
              <span className="go">
                Book a Call <span>→</span>
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
      <section className="sec alt">
        <div className="wrap split">
          <div className="rv">
            <span className="eyebrow">Locations</span>
            <h2>Helping local businesses win their markets.</h2>
          </div>
          <div className="body rv">
            <p>
              From Texas and Florida to Georgia, Arizona and the Carolinas. Every plan is built around the towns and
              suburbs you actually serve, with area pages, local listings and map rankings tracked town by town.
            </p>
            <div className="chips">
              {CITY_GROUPS.map((g) => (
                <Link className="chip" href={`/locations#${g.slug}`} key={g.slug}>
                  {g.name}
                </Link>
              ))}
              <Link className="chip" href="/locations">
                All {CITIES.length} cities →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Fit check</span>
              <h2>Are we the right fit?</h2>
            </div>
            <p>
              Saying this up front saves us both a call. I would rather turn down work than take on a project I can't
              win.
            </p>
          </div>
          <div className="grid g2">
            <div className="panel rv">
              <h3>Good fit</h3>
              <ul className="ticks">
                <li>You run a real local service business and want more calls and booked jobs from Google</li>
                <li>You can follow up on new leads quickly</li>
                <li>You will ask happy customers for reviews</li>
                <li>You care about calls and jobs, not vanity rankings</li>
              </ul>
            </div>
            <div className="panel rv">
              <h3>Not a fit</h3>
              <ul className="crosses">
                <li>You want guaranteed #1 rankings by next week</li>
                <li>You want fake listings, virtual offices or fake reviews</li>
                <li>You are not able to answer or return the calls that come in</li>
                <li>You want the cheapest option rather than one that pays for itself</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Working together</span>
              <h2>What I promise every client.</h2>
            </div>
            <p>Simple rules that keep the work honest and the results visible.</p>
          </div>
          <div className="grid g3">
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                01
              </span>
              <h3>You own everything</h3>
              <p>
                Your Google Business Profile, website, Search Console and Analytics stay in your name. Walk away anytime
                with everything intact.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                02
              </span>
              <h3>No black boxes</h3>
              <p>
                Every month you see what I changed, why, and what it did to rankings, calls and leads, in plain English.
              </p>
            </div>
            <div className="card rv">
              <span className="ic" aria-hidden="true">
                03
              </span>
              <h3>No lock-in</h3>
              <p>
                Month-to-month plans with a week of notice to pause or cancel. I keep clients by getting results, not by
                contracts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">From the blog</span>
              <h2>Local SEO, explained plainly.</h2>
            </div>
            <p>Practical guides for local business owners who want to understand what they are paying for.</p>
          </div>
          <PostCards limit={3} />
          <div className="cta-row">
            <Link className="btn btn-ghost" href="/blog">
              All articles <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <Faq items={FAQ} />
      <CtaBand title="Find out what is keeping you off the map and out of AI answers." />
    </>
  );
}
