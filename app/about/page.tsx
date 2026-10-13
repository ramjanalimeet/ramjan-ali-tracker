import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SocialIcon } from "@/components/SocialIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL, SOCIAL, pageMeta } from "@/lib/site";

const TITLE = "About Ramjan Ali Akash | Local SEO & AI Search Specialist";
const DESCRIPTION =
  "Meet Ramjan Ali Akash, a Local SEO and GEO & AI visibility specialist who helps home service businesses get found on Google, Google Maps and in AI search.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/about" });

const PRINCIPLES = [
  {
    t: "One specialist, no handoffs",
    d: "The person on your call is the person doing the work. No account managers, no junior team you never meet.",
  },
  {
    t: "You own everything",
    d: "Your Google Business Profile, website, Search Console and Analytics stay in your name. Walk away anytime with everything intact.",
  },
  {
    t: "Plain-English reporting",
    d: "Every month you see what I changed, why, and what it did to rankings, AI mentions, calls and leads.",
  },
  {
    t: "No shortcuts",
    d: "No fake reviews, fake listings or virtual offices. They break Google's rules and put your business at risk.",
  },
  {
    t: "Month to month",
    d: "No long contracts. Pause or cancel with a week of notice. I keep clients by getting results.",
  },
  {
    t: "Replies within 24 hours",
    d: "Questions get answered quickly, and calls are booked in your own time zone, wherever you are.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ramjan Ali Akash",
      jobTitle: "Local SEO & AI Search Visibility Specialist",
      image: `${SITE_URL}/assets/ramjan-ali-akash.webp`,
      url: `${SITE_URL}/about`,
      homeLocation: { "@type": "Place", name: "Dhaka, Bangladesh" },
      knowsAbout: ["Local SEO", "Google Business Profile", "Generative engine optimization", "AI search visibility"],
      sameAs: SOCIAL.map((s) => s.href),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      ],
    },
  ],
};

export default function AboutPage() {
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
              <li aria-current="page">About</li>
            </ol>
          </nav>
          <div className="phero-grid about-grid">
            <div>
              <span className="eyebrow">About</span>
              <h1>
                Hi, I&apos;m <span className="hl">Ramjan Ali Akash</span>.
              </h1>
              <p className="lead">
                I&apos;m a Local SEO and GEO &amp; AI visibility specialist. I help home service businesses get found on
                Google, Google Maps and in AI search, and turn that visibility into calls and booked jobs.
              </p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-dark" href="/book-a-call">
                  Book a Call
                </Link>
              </div>
            </div>
            <div className="about-photo">
              <Image
                src="/assets/ramjan-ali-akash.webp"
                alt="Portrait of Ramjan Ali Akash"
                width={400}
                height={432}
                sizes="(max-width: 960px) 300px, 380px"
                priority
              />
              <div className="about-social">
                <span>Follow me</span>
                <ul className="social">
                  {SOCIAL.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} aria-label={`Ramjan Ali Akash on ${s.label}`} rel="me noopener" target="_blank">
                        <SocialIcon name={s.label} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Why home services</span>
            <h2>One kind of business, done properly.</h2>
            <p>
              I only work with home service businesses: roofers, plumbers, HVAC, cleaning, landscaping and the other
              trades homeowners call when something needs doing.
            </p>
            <p>
              Focusing on one kind of business means I already know how your customers search, what they ask AI tools,
              which directories matter and what Google rewards in the map pack. You do not pay for me to learn your
              industry.
            </p>
            <p>
              And because the work is local, every plan is built around the towns and suburbs you actually serve, not
              rankings that look good in a report but never ring the phone.
            </p>
          </div>
          <div className="panel rv">
            <h3>What I do</h3>
            <ul className="ticks">
              <li>Local SEO and Google Business Profile management</li>
              <li>GEO &amp; AI visibility for ChatGPT, Gemini and AI Overviews</li>
              <li>Technical and on-page SEO for service websites</li>
              <li>Local link building and citations</li>
              <li>SEO audits with a prioritized fix list</li>
            </ul>
            <div className="cta-row">
              <Link className="btn btn-ghost btn-sm" href="/seo-services">
                All services <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">How I work</span>
              <h2>Simple rules, visible results.</h2>
            </div>
            <p>The same promises for every client, whatever the size of the plan.</p>
          </div>
          <div className="grid g3">
            {PRINCIPLES.map((p, i) => (
              <div className="card rv" key={p.t}>
                <span className="ic" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Where I work</span>
            <h2>Based in Dhaka, working worldwide.</h2>
            <p>
              I work from Dhaka, Bangladesh (GMT+6) with home service businesses in the US, Canada, the UK, Australia
              and beyond. Most of the work happens in the background, and calls are booked in your time zone.
            </p>
            <div className="cta-row">
              <Link className="btn btn-ghost" href="/locations">
                Where I work <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div className="panel rv">
            <h3>Follow along</h3>
            <p className="muted">Tips on local SEO and AI search for home service businesses.</p>
            <div className="chips" style={{ marginTop: 14 }}>
              {SOCIAL.map((s) => (
                <a className="chip" href={s.href} target="_blank" rel="me noopener" key={s.label}>
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Let's get your business found." />
    </>
  );
}
