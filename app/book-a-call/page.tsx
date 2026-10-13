import Link from "next/link";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { type FaqItem, faqSchema, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Book a Free Local SEO & AI Search Strategy Call",
  description:
    "Book a free 30-minute Local SEO call. We will look at your Google Business Profile, rankings and competitors, and what would move your calls most.",
  path: "/book-a-call",
});

const FAQ: FaqItem[] = [
  {
    q: "Is the call a sales pitch?",
    a: "No. It is a working session on your business. If a plan makes sense, I will say so. If not, you still leave with useful next steps.",
  },
  { q: "What time zone are the slots in?", a: "The calendar shows times in your own time zone automatically." },
  { q: "Can I email instead?", a: "Yes. Email raakash.meet@gmail.com and I will reply within 24 hours." },
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
      "@id": "https://ramjan-akash.vercel.app/book-a-call#webpage",
      url: "https://ramjan-akash.vercel.app/book-a-call",
      name: "Book a Free Local SEO & AI Search Strategy Call",
      description:
        "Book a free 30-minute Local SEO call. We will look at your Google Business Profile, rankings and competitors, and what would move your calls most.",
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
          name: "Book a Call",
          item: "https://ramjan-akash.vercel.app/book-a-call",
        },
      ],
    },
    faqSchema(FAQ),
  ],
};

export default function BookACallPage() {
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
              <li aria-current="page">Book a Call</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Book a Call</span>
              <h1>
                Book a free <span className="hl">strategy call</span>.
              </h1>
              <p className="lead">
                Thirty minutes on your rankings, AI search visibility, competitors and what I would fix first. Pick any
                open slot below. You will get an instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec tight" style={{ paddingTop: 10 }}>
        <div className="wrap art-grid book-grid">
          <div>
            <iframe
              className="cal"
              src="https://cal.com/ramjanalimeet/book-a-call?embed=true"
              title="Book a call with Ramjan Ali Akash"
              loading="lazy"
            ></iframe>
            <p className="fine">
              Calendar not loading?{" "}
              <a href="https://cal.com/ramjanalimeet/book-a-call" target="_blank" rel="noopener">
                Open the booking page in a new tab →
              </a>
            </p>
          </div>
          <aside className="aside">
            <div className="panel">
              <h2 className="h3">On the call</h2>
              <ul className="ticks">
                <li>Your services, towns and goals</li>
                <li>Where you rank now in the map pack</li>
                <li>What AI tools say when asked for your services</li>
                <li>What the top competitors are doing</li>
                <li>The first fixes I would make</li>
                <li>A straight answer on whether we are a fit</li>
              </ul>
            </div>
            <div className="panel">
              <h2 className="h3">Have these ready</h2>
              <ul className="ticks">
                <li>Your website address</li>
                <li>The services you want more of</li>
                <li>The towns or counties you serve</li>
              </ul>
            </div>
            <div className="panel">
              <h2 className="h3">Prefer email?</h2>
              <p>Send a few lines about your business and I'll reply within 24 hours.</p>
              <a className="btn btn-ghost btn-sm" href="mailto:raakash.meet@gmail.com">
                raakash.meet@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </section>
      <Faq items={FAQ} />
    </>
  );
}
