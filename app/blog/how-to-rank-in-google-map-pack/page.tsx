import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PostCards } from "@/components/PostCards";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "How to Rank in the Google Map Pack: What Works",
  description:
    "What decides which three businesses show in the Google map pack, and the practical steps contractors can take to get into it.",
  path: "/blog/how-to-rank-in-google-map-pack",
  type: "article",
});

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
      "@id": "https://ramjan-akash.vercel.app/blog/how-to-rank-in-google-map-pack#webpage",
      url: "https://ramjan-akash.vercel.app/blog/how-to-rank-in-google-map-pack",
      name: "How to Rank in the Google Map Pack: What Actually Works | Ramjan Ali Akash",
      description:
        "What decides which three businesses show in the Google map pack, and the practical steps contractors can take to get into it.",
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
          name: "Blog",
          item: "https://ramjan-akash.vercel.app/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to rank in the Google map pack",
          item: "https://ramjan-akash.vercel.app/blog/how-to-rank-in-google-map-pack",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "How to rank in the Google map pack",
      description:
        "What decides which three businesses show in the Google map pack, and the practical steps contractors can take to get into it.",
      url: "https://ramjan-akash.vercel.app/blog/how-to-rank-in-google-map-pack",
      mainEntityOfPage: "https://ramjan-akash.vercel.app/blog/how-to-rank-in-google-map-pack",
      datePublished: "2026-10-01",
      dateModified: "2026-10-01",
      author: {
        "@id": "https://ramjan-akash.vercel.app/#person",
      },
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      image: "https://ramjan-akash.vercel.app/assets/akash.webp",
      articleSection: "Google Maps",
      inLanguage: "en",
    },
  ],
};

export default function HowToRankInGoogleMapPackPage() {
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
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-current="page">How to rank in the Google map pack</li>
            </ol>
          </nav>
          <span className="eyebrow">Google Maps</span>
          <h1 style={{ maxWidth: "22ch", fontSize: "clamp(36px,4.6vw,62px)" }}>How to rank in the Google map pack</h1>
          <p className="lead">
            What decides which three businesses show in the Google map pack, and the practical steps contractors can
            take to get into it.
          </p>
          <div className="ameta">
            <span>By Ramjan Ali Akash</span>
            <span>7 min read</span>
            <span>Updated October 1, 2026</span>
          </div>
        </div>
      </section>
      <section className="sec tight" style={{ paddingTop: 20 }}>
        <div className="wrap art-grid">
          <article className="prose">
            <p>
              The map pack is the box of three businesses Google shows with a map for searches like "AC repair near me".
              For home-service businesses, it is often where most search calls come from.
            </p>
            <p>
              Google is fairly open about how it ranks local results. It says they are based mainly on three things:{" "}
              <strong>relevance, distance and prominence</strong>. Everything you can do to rank in the map pack works
              through one of those three.
            </p>
            <h2>Relevance: does your business match the search?</h2>
            <p>
              Relevance is how well your business matches what someone searched for. Google reads it from several
              places.
            </p>
            <h3>Your categories</h3>
            <p>
              Your primary category is one of the strongest signals you control. If you are a plumber who also does
              water heaters, your primary category should be "Plumber", with secondary categories covering the rest.
              Check what the top three competitors use. It is often revealing.
            </p>
            <h3>Your services and description</h3>
            <p>
              List every service you want calls for in your profile. Write a plain description of what you do and where.
              No keyword stuffing, just clarity.
            </p>
            <h3>Your website</h3>
            <p>
              The page your profile links to matters. If it is your homepage, it should clearly say what you do and
              where. Strong service pages on the site add more relevance for each specific service.
            </p>
            <h3>Your reviews</h3>
            <p>
              When customers mention the service and the town in their own words ("They replaced our water heater in
              Katy the same day"), that adds relevance too. You cannot write reviews for them, but you can ask them to
              mention what you did.
            </p>
            <h2>Distance: how close are you to the searcher?</h2>
            <p>
              You cannot move your business address, and you should never create fake addresses or virtual offices to
              get around this. Google suspends those listings and the business can lose everything.
            </p>
            <p>What you can do:</p>
            <ul>
              <li>Set your service area accurately so Google knows where you work.</li>
              <li>
                Win the map pack hard near your real location first. That is where you have the biggest natural
                advantage.
              </li>
              <li>Reach towns further away through organic results, with useful service area pages on your website.</li>
            </ul>
            <p>
              This is also why rankings look different from different spots. A business can be number one in the map a
              mile from its shop and missing five miles away. Good tracking checks rankings across a grid of points over
              your service area, not just from your own office.
            </p>
            <h2>Prominence: how well known and trusted are you?</h2>
            <p>Prominence is where most of the ongoing work happens. Google judges it from:</p>
            <ul>
              <li>
                <strong>Reviews.</strong> How many, how good, and how recent. A steady flow beats a burst from three
                years ago.
              </li>
              <li>
                <strong>Links.</strong> Links to your website from other trusted, relevant sites, especially local ones.
              </li>
              <li>
                <strong>Citations and mentions.</strong> Consistent listings across directories, and mentions in local
                news and community sites.
              </li>
              <li>
                <strong>Organic rankings.</strong> Google says a business's position in regular web results also factors
                into local ranking. A strong website helps your map rankings.
              </li>
            </ul>
            <h2>A practical order of work</h2>
            <ol>
              <li>Fix your categories, services, service area and hours.</li>
              <li>Add real photos and start posting updates regularly.</li>
              <li>Set up a review request after every job, and reply to every review.</li>
              <li>Make sure the page your profile links to is fast and clearly relevant.</li>
              <li>Clean up citations so your details are consistent.</li>
              <li>Build service pages and service area pages on your site.</li>
              <li>Earn local links over time.</li>
            </ol>
            <div className="note">
              <p>
                <strong>A note on shortcuts:</strong> Keyword-stuffed business names, fake addresses and bought reviews
                can work for a few weeks. Then the listing gets suspended or reported by a competitor. It is not worth
                it.
              </p>
            </div>
            <h2>How long does it take?</h2>
            <p>
              Profile fixes are often picked up within weeks. Moving into the top three for competitive searches in a
              large metro usually takes several months of steady work on reviews, content and links. In smaller towns
              and less crowded trades it can be much faster.
            </p>
            <p>
              Want to know where you stand? My <Link href="/free-seo-audit">free audit</Link> compares your profile with
              the three businesses beating you in the map.
            </p>
          </article>
          <aside className="aside">
            <div className="panel">
              <h3>Free Local SEO &amp; AI audit</h3>
              <p>
                I'll review your Google Business Profile, website and top 3 map competitors, and send the fixes in
                priority order.
              </p>
              <WhatsAppButton className="btn-sm" />
            </div>
            <div className="panel">
              <h3>Related service</h3>
              <p>I manage Google Business Profiles and map rankings as part of every Local SEO plan.</p>
              <Link className="btn btn-ghost btn-sm" href="/local-seo">
                Local SEO services →
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <PostCards exclude="how-to-rank-in-google-map-pack" limit={3} style={{ marginTop: 6 }} />
        </div>
      </section>
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
