import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { REGIONS } from "@/lib/locations";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

const TITLE = "Locations | Local SEO & AI Search for Home Services Anywhere | Ramjan Ali Akash";
const DESCRIPTION =
  "Local SEO and AI search visibility for home service businesses in any city or country: the US, Canada, the UK, Ireland, Australia, New Zealand, Europe and beyond.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/locations" });

const FAQ: FaqItem[] = [
  {
    q: "Do you work with businesses outside the US?",
    a: "Yes. I work with home service businesses in any country. Google Maps, local search and AI answers work the same way everywhere, so the playbook only changes in the details: the directories, review sites and search habits of your market.",
  },
  {
    q: "Can you help me rank in towns where I do not have an office?",
    a: "Yes, through service area settings and useful pages for each town you serve. The map pack leans heavily on distance, so towns far from your address are won mainly through organic results and AI answers.",
  },
  {
    q: "Does the time difference matter?",
    a: "No. Most of the work happens in the background, I reply within 24 hours, and calls are booked in your own time zone.",
  },
  {
    q: "What currency are your prices in?",
    a: "Plans are priced in US dollars. If you need another currency, ask on the call.",
  },
  {
    q: "Will you create listings at addresses I do not have?",
    a: "Never. Fake addresses and virtual offices break Google's rules and get listings suspended. I only work with your real business locations.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/locations#webpage`,
      url: `${SITE_URL}/locations`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
      ],
    },
    {
      "@type": "Service",
      name: "Local SEO & AI Search Visibility",
      url: `${SITE_URL}/locations`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: "Worldwide",
    },
    faqSchema(FAQ),
  ],
};

export default function LocationsPage() {
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
              <li aria-current="page">Locations</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Locations</span>
              <h1>
                Local SEO, <span className="hl">wherever you work</span>.
              </h1>
              <p className="lead">
                A homeowner with a burst pipe searches the same way in Dallas, Toronto, Manchester or Sydney: they check
                Google, look at the map, maybe ask an AI tool, and call one of the first names they see. I help home
                service businesses in any city or country become that name.
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
                  <b>Where</b>
                  <span>Any city or country where customers search Google and ask AI tools</span>
                </li>
                <li>
                  <b>Who</b>
                  <span>Roofing, plumbing, septic, HVAC and other home service businesses</span>
                </li>
                <li>
                  <b>Targeting</b>
                  <span>Built around the towns and suburbs you actually serve</span>
                </li>
                <li>
                  <b>Time zone</b>
                  <span>Replies within 24 hours, calls booked in your time zone</span>
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
              <span className="eyebrow">Where I work</span>
              <h2>One playbook, tuned to your market.</h2>
            </div>
            <p>
              The fundamentals never change. What changes is which directories, review sites and search habits matter
              where you are.
            </p>
          </div>
          <div className="grid g3">
            {REGIONS.map((r, i) => (
              <div className="card rv" id={r.id} key={r.id}>
                <span className="ic" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{r.name}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">How location targeting works</span>
            <h2>Ranked town by town, not just near your office.</h2>
            <p>
              <strong>Service area.</strong> Your Google Business Profile is set to the areas you really cover, so
              Google knows where to show you.
            </p>
            <p>
              <strong>Area pages.</strong> A genuinely useful page for each main town or suburb, with local jobs, photos
              and reviews, not copy-paste pages with the town name swapped.
            </p>
            <p>
              <strong>Local listings.</strong> Consistent details on the directories that matter in your country, which
              both Google and AI tools use to check who you are.
            </p>
            <p>
              <strong>Tracking.</strong> Map rankings checked on a grid across your whole service area, so you see
              exactly which towns you win and which need work.
            </p>
          </div>
          <div className="panel rv">
            <h3>Serving more than one location?</h3>
            <p className="muted" style={{ marginBottom: 16 }}>
              The Pro plan covers up to 3 Google Business Profiles, each with its own pages, listings and tracking.
            </p>
            <Link className="btn btn-dark btn-sm" href="/pricing">
              See pricing <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Faq items={FAQ} />
      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">Related</span>
          <div className="chips" style={{ marginTop: 6 }}>
            <Link className="chip" href="/local-seo">
              Local SEO →
            </Link>
            <Link className="chip" href="/ai-search">
              AI Search Visibility →
            </Link>
            <Link className="chip" href="/industries">
              All industries →
            </Link>
          </div>
        </div>
      </section>
      <CtaBand title="Find out where you rank in your towns." />
    </>
  );
}
