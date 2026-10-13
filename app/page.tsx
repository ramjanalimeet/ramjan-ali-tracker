import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PostCards } from "@/components/PostCards";
import { AI_SEARCH, BUNDLE, LOCAL_SEO, fromPrice, usd } from "@/lib/pricing";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Local SEO & AI Search Visibility for Home Service Businesses | Ramjan Ali Akash",
  description:
    "Local SEO and AI search visibility for US home service businesses. Rank in the Google map pack and get recommended by ChatGPT, Gemini and AI Overviews. Free audit.",
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
    a: `Local SEO starts at ${usd(fromPrice(LOCAL_SEO))}/month and AI Search Visibility at ${usd(fromPrice(AI_SEARCH))}/month, or ${usd(BUNDLE.price)}/month for both. No setup fees. I confirm the right plan in writing after the free audit, before anything starts.`,
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
      "@type": "ProfessionalService",
      "@id": "https://ramjan-akash.vercel.app/#business",
      name: "Ramjan Ali Akash, Local SEO & AI Search Visibility",
      url: "https://ramjan-akash.vercel.app/",
      image: "https://ramjan-akash.vercel.app/assets/akash.webp",
      email: "mailto:raakash.meet@gmail.com",
      description: "Local SEO and AI search visibility for home service businesses in the United States.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      founder: {
        "@id": "https://ramjan-akash.vercel.app/#person",
      },
      potentialAction: {
        "@type": "ReserveAction",
        name: "Book a call",
        target: "https://cal.com/ramjanalimeet/book-a-call",
      },
      knowsAbout: [
        "Local SEO",
        "Google Business Profile",
        "Google Maps SEO",
        "AI search visibility",
        "Generative engine optimization",
        "Google AI Overviews",
        "Home service marketing",
      ],
      sameAs: [
        "https://www.youtube.com/@Ramjanali-Akash",
        "https://www.linkedin.com/in/ramjanalimeet/",
        "https://www.facebook.com/RamjanaliMeet",
        "https://www.instagram.com/ramjanali_akash/",
        "https://www.tiktok.com/@ramjanali_akash",
        "https://x.com/RamjanaliMeet",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://ramjan-akash.vercel.app/#person",
      name: "Ramjan Ali Akash",
      jobTitle: "Local SEO & AI Search Visibility Specialist",
      image: "https://ramjan-akash.vercel.app/assets/akash.webp",
      url: "https://ramjan-akash.vercel.app/",
      sameAs: [
        "https://www.youtube.com/@Ramjanali-Akash",
        "https://www.linkedin.com/in/ramjanalimeet/",
        "https://www.facebook.com/RamjanaliMeet",
        "https://www.instagram.com/ramjanali_akash/",
        "https://www.tiktok.com/@ramjanali_akash",
        "https://x.com/RamjanaliMeet",
      ],
    },
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
      "@id": "https://ramjan-akash.vercel.app/#webpage",
      url: "https://ramjan-akash.vercel.app/",
      name: "Local SEO & AI Search Visibility for Home Service Businesses | Ramjan Ali Akash",
      description:
        "Local SEO and AI search visibility for US home service businesses. Rank in the Google map pack and get recommended by ChatGPT, Gemini and AI Overviews. Free audit.",
      isPartOf: {
        "@id": "https://ramjan-akash.vercel.app/#website",
      },
      about: {
        "@id": "https://ramjan-akash.vercel.app/#business",
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
              <span className="dot"></span>Local SEO &amp; AI Search Visibility for Home Service Businesses
            </span>
            <h1>
              Get found on <span className="hl">Google Maps</span> and in AI search.
            </h1>
            <p className="lead">
              I'm <strong>Ramjan Ali Akash</strong>. I help home service businesses, roofers, plumbers, HVAC, septic and
              other trades, show up in the <strong>Google map pack</strong>, local search results, and the answers{" "}
              <strong>AI tools</strong> like ChatGPT, Gemini and Google's AI Overviews give when homeowners ask who to
              call.
            </p>
            <div className="cta-row">
              <WhatsAppButton />
              <Link className="btn btn-ghost" href="/book-a-call">
                Book a call
              </Link>
            </div>
            <p className="fine">Free, no pitch, and you keep the action plan either way.</p>
            <div className="chips">
              <Link className="chip" href="/local-seo">
                Local SEO
              </Link>
              <Link className="chip" href="/ai-search">
                AI Search Visibility
              </Link>
              <Link className="chip" href="/local-seo#trades">
                Roofing, plumbing, HVAC, septic &amp; more
              </Link>
            </div>
          </div>
          <div className="portrait">
            <div className="frame">
              <img
                src="/assets/akash.webp"
                alt="Portrait of Ramjan Ali Akash"
                width="400"
                height="432"
                fetchPriority="high"
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
                Home services only<small>One niche, one focus</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee" aria-label="Searches and AI questions I help home service businesses win">
        <p>Searches and AI questions I help you win</p>
        <div className="track">
          <ul>
            <li>roofer near me</li>
            <li>emergency plumber</li>
            <li>best hvac company near me?</li>
            <li>septic pumping near me</li>
            <li>who should I call for a roof leak?</li>
            <li>ac repair near me</li>
            <li>water heater installation</li>
            <li>top-rated plumber in my area</li>
            <li>furnace repair</li>
            <li>storm damage roof repair</li>
          </ul>
          <ul aria-hidden="true">
            <li>roofer near me</li>
            <li>emergency plumber</li>
            <li>best hvac company near me?</li>
            <li>septic pumping near me</li>
            <li>who should I call for a roof leak?</li>
            <li>ac repair near me</li>
            <li>water heater installation</li>
            <li>top-rated plumber in my area</li>
            <li>furnace repair</li>
            <li>storm damage roof repair</li>
          </ul>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Why local + AI search</span>
            <h2>The map pack gets the calls. AI answers decide who makes the list.</h2>
            <p>
              When a homeowner's AC dies or a pipe bursts, they search Google, look at the three businesses on the map,
              check the stars, and call one of them.
            </p>
            <p>
              More and more of them now ask ChatGPT, Gemini or Perplexity first, or read Google's AI Overview before
              they scroll. "Who is the best-reviewed plumber near me?" gets a short list of names, and everyone else is
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
              Nothing else. No ads, no web design packages, no social media. Just the work that gets a home service
              business found and called.
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
              <p className="price-from">From {usd(fromPrice(LOCAL_SEO))}/month</p>
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
                Get named in ChatGPT, Gemini, Perplexity and Google's AI Overviews when homeowners ask who to call, with
                the right services, towns and reviews attached.
              </p>
              <p className="price-from">From {usd(fromPrice(AI_SEARCH))}/month</p>
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
              <h2>Built for the trades that live on the phone.</h2>
            </div>
            <p>
              Every trade searches differently. Roofers chase storms, septic companies cover rural counties, HVAC swings
              with the seasons. The strategy follows how your customers actually search and ask.
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
            <Link className="card rv" href="/free-seo-audit">
              <span className="ic" aria-hidden="true">
                06
              </span>
              <h3>Not sure where to start?</h3>
              <p>
                Get a free audit of your Google Business Profile, website, AI search presence and top three map
                competitors, with the fixes in priority order.
              </p>
              <span className="go">
                Learn more <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <HowItWorks alt />
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
            <p>Practical guides for contractors who want to understand what they are paying for.</p>
          </div>
          <PostCards limit={3} />
          <div className="cta-row">
            <Link className="btn btn-ghost" href="/blog">
              All articles <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Faq items={FAQ} />
      <CtaBand title="Find out what is keeping you off the map and out of AI answers." />
    </>
  );
}
