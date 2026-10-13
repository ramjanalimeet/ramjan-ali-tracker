import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PostCards } from "@/components/PostCards";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Local SEO Checklist for Contractors (2026) | Ramjan Ali Akash",
  description:
    "A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each item yourself, in order.",
  path: "/blog/local-seo-checklist-for-contractors",
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
      "@id": "https://ramjan-akash.vercel.app/blog/local-seo-checklist-for-contractors#webpage",
      url: "https://ramjan-akash.vercel.app/blog/local-seo-checklist-for-contractors",
      name: "Local SEO Checklist for Contractors (2026) | Ramjan Ali Akash",
      description:
        "A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each item yourself, in order.",
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
          name: "Local SEO checklist for contractors",
          item: "https://ramjan-akash.vercel.app/blog/local-seo-checklist-for-contractors",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Local SEO checklist for contractors",
      description:
        "A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each item yourself, in order.",
      url: "https://ramjan-akash.vercel.app/blog/local-seo-checklist-for-contractors",
      mainEntityOfPage: "https://ramjan-akash.vercel.app/blog/local-seo-checklist-for-contractors",
      datePublished: "2026-10-01",
      dateModified: "2026-10-01",
      author: {
        "@id": "https://ramjan-akash.vercel.app/#person",
      },
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      image: "https://ramjan-akash.vercel.app/assets/akash.webp",
      articleSection: "Local SEO",
      inLanguage: "en",
    },
  ],
};

export default function LocalSeoChecklistForContractorsPage() {
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
              <li aria-current="page">Local SEO checklist for contractors</li>
            </ol>
          </nav>
          <span className="eyebrow">Local SEO</span>
          <h1 style={{ maxWidth: "22ch", fontSize: "clamp(36px,4.6vw,62px)" }}>Local SEO checklist for contractors</h1>
          <p className="lead">
            A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC and septic companies. Check each
            item yourself, in order.
          </p>
          <div className="ameta">
            <span>By Ramjan Ali Akash</span>
            <span>8 min read</span>
            <span>Updated October 1, 2026</span>
          </div>
        </div>
      </section>
      <section className="sec tight" style={{ paddingTop: 20 }}>
        <div className="wrap art-grid">
          <article className="prose">
            <p>
              Most contractors do not need a complicated SEO strategy. They need the basics done properly, in the right
              order, and kept up every month. This checklist is the order I work through for every new home-service
              client.
            </p>
            <p>
              Go through it honestly. Every unchecked item is a reason a competitor is getting the call instead of you.
            </p>
            <h2>1. Google Business Profile basics</h2>
            <p>
              Your Google Business Profile is the single most important local SEO asset you have. It is what shows up in
              the map pack.
            </p>
            <ul>
              <li>
                <strong>Verified and owned by you.</strong> The profile should be under your own Google account, not a
                former marketing agency's.
              </li>
              <li>
                <strong>The right primary category.</strong> This is one of the strongest relevance signals. "Roofing
                contractor", "Plumber", "HVAC contractor" and "Septic system service" are common choices. Pick the one
                that matches your main money-maker.
              </li>
              <li>
                <strong>Relevant secondary categories.</strong> Add the other services you genuinely offer, without
                stretching.
              </li>
              <li>
                <strong>Business name as it really is.</strong> Do not add keywords or city names to your name. It
                breaks Google's guidelines and can get the profile suspended.
              </li>
              <li>
                <strong>Service area set correctly.</strong> If customers do not come to you, hide your address and list
                the areas you serve.
              </li>
              <li>
                <strong>Accurate hours.</strong> Only say 24 hours if someone really answers the phone.
              </li>
              <li>
                <strong>Services listed in full.</strong> Every service you want calls for, with a short description.
              </li>
              <li>
                <strong>Real photos.</strong> Your trucks, your crew, your finished jobs. Add new ones regularly.
              </li>
            </ul>
            <h2>2. Reviews</h2>
            <p>Reviews affect both rankings and whether people call. The aim is a steady flow, not a one-time push.</p>
            <ul>
              <li>
                Ask every happy customer, ideally the same day the job is finished, with a direct review link sent by
                text.
              </li>
              <li>Reply to every review, good and bad, calmly and specifically.</li>
              <li>
                Never offer discounts or gifts for reviews, and never ask only the customers you expect to be happy.
                Both break Google's rules.
              </li>
              <li>
                Never buy or write fake reviews. Beyond Google removing them, the FTC's rule on fake reviews allows
                penalties against businesses that use them.
              </li>
            </ul>
            <h2>3. Your website</h2>
            <ul>
              <li>
                <strong>One page per core service.</strong> Not one "Services" page with a bullet list. Each important
                service needs its own page.
              </li>
              <li>
                <strong>Pages for your main service areas,</strong> with real local content, not the same text with a
                different town name.
              </li>
              <li>
                <strong>Name, address and phone</strong> on the site, matching your Google profile exactly.
              </li>
              <li>
                <strong>Fast on phones.</strong> Most of your visitors are on mobile, often in a hurry.
              </li>
              <li>
                <strong>Click-to-call</strong> visible at the top of every page.
              </li>
              <li>
                <strong>LocalBusiness schema</strong> with your business details, so Google can read them reliably.
              </li>
              <li>
                <strong>Search Console set up,</strong> so you can see which searches bring visitors and spot errors.
              </li>
            </ul>
            <h2>4. Citations</h2>
            <p>
              Citations are listings of your business name, address and phone number on other websites: directories,
              data aggregators and industry sites.
            </p>
            <ul>
              <li>
                Make sure your details are identical everywhere. Old phone numbers and old addresses confuse Google.
              </li>
              <li>
                Cover the major ones first, then trade-specific directories and local ones like your chamber of
                commerce.
              </li>
            </ul>
            <h2>5. Local links</h2>
            <p>
              Links from other local and relevant websites build prominence. The best ones usually come from
              relationships you already have:
            </p>
            <ul>
              <li>Suppliers and manufacturers with dealer or installer listings</li>
              <li>Trade associations you belong to</li>
              <li>Local teams, events or charities you sponsor</li>
              <li>Builders, realtors and other businesses you work with</li>
            </ul>
            <h2>6. Tracking</h2>
            <p>If you cannot measure it, you cannot tell whether SEO is paying off.</p>
            <ul>
              <li>Track calls and form submissions from your website and your Google profile.</li>
              <li>Track map rankings across your service area, not just from your office address.</li>
              <li>Ask every new customer how they found you, and write it down.</li>
            </ul>
            <div className="note">
              <p>
                <strong>Where to start:</strong> If you only have time for one thing this week, fix your primary
                category and set up a simple review request after every job. Those two alone move a lot of businesses.
              </p>
            </div>
            <h2>Keep it going</h2>
            <p>
              Local SEO is not a one-time project. Competitors keep adding reviews, photos and pages. The businesses
              that hold the top spots are the ones that keep doing the basics every month.
            </p>
            <p>
              If you want a second pair of eyes, my <Link href="/book-a-call">free Local SEO audit</Link> goes through
              this checklist for your business and your top three competitors.
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
              <p>Want it done for you? See how I handle local SEO for home-service businesses.</p>
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
          <PostCards exclude="local-seo-checklist-for-contractors" limit={3} style={{ marginTop: 6 }} />
        </div>
      </section>
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
