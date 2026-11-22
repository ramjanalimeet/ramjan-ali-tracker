import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ServedGlobe } from "@/components/ServedGlobe";
import { CITIES } from "@/lib/cities";
import { GLOBAL_CITY_COUNT, GLOBAL_COUNTRIES, countriesInRegion } from "@/lib/global-locations";
import { REGIONS as VISIBILITY_CHANNELS } from "@/lib/locations";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";
import { MainCta } from "@/components/MainCta";

const REGIONS = ["North America", "Europe", "Asia", "Oceania", "Africa", "South America"] as const;

const TITLE = "Locations | Local SEO & AI Search for Local Businesses";
const DESCRIPTION =
  "Local SEO and AI visibility for local businesses, with market-specific strategies tailored to each business, city and customer base.";

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/locations" });

const FAQ: FaqItem[] = [
  {
    q: "Which markets do you work in?",
    a: "I work with local businesses in different markets. The strategy is adapted to the search behavior, language, directories and competition around the customers you want to reach.",
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
      "@id": `${SITE_URL}/locations#service`,
      name: "Local SEO & AI Search Visibility",
      description: DESCRIPTION,
      url: `${SITE_URL}/locations`,
      provider: { "@id": `${SITE_URL}/#business` },
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
          <div className="phero-grid globe-grid">
            <div>
              <span className="eyebrow">Locations</span>
              <h1>
                Local SEO, <span className="hl">wherever you work</span>.
              </h1>
              <p className="lead">
                A homeowner with a burst pipe searches the same way in Dallas, Toronto, Manchester or Sydney: they check
                Google, look at the map, maybe ask an AI tool, and call one of the first names they see. I help local
                businesses become that name in the markets they serve.
              </p>
              <div className="cta-row">
                <MainCta />
              </div>
            </div>
            <ServedGlobe />
          </div>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap">
          <aside className="facts facts-row rv">
            <h2>At a glance</h2>
            <ul>
              <li>
                <b>Where</b>
                <span>Any city or country where customers search Google and ask AI tools</span>
              </li>
              <li>
                <b>Who</b>
                <span>Local service companies and location-based businesses</span>
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
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Where I work</span>
              <h2>Everywhere local customers look.</h2>
            </div>
            <p>
              Google comes first, but homeowners also check Apple Maps, Bing, AI assistants and the directories they
              trust. Your business needs to look the same, and look good, on all of them.
            </p>
          </div>
          <div className="grid g3">
            {VISIBILITY_CHANNELS.map((r, i) => (
              <div className="card rv" key={r.id}>
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
      <section className="sec tight alt" id="cities">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">{GLOBAL_CITY_COUNT + CITIES.length} city guides</span>
              <h2>Choose a country and city.</h2>
            </div>
            <p>
              Each country hub connects to city-specific guides with a distinct URL, primary intent, metadata and
              related-market links. That keeps location targeting organised without making pages compete with each other.
            </p>
          </div>
          <nav className="chips ind-jump" aria-label="World regions" style={{ marginTop: 0 }}>
            {REGIONS.map((region) => (
              <a className="chip" href={`#${region.toLowerCase().replaceAll(" ", "-")}`} key={region}>
                {region} ({countriesInRegion(region).length})
              </a>
            ))}
          </nav>
        </div>
      </section>
      {REGIONS.map((region, gi) => {
        const list = countriesInRegion(region);
        return (
          <section className={gi % 2 ? "sec tight alt" : "sec tight"} id={region.toLowerCase().replaceAll(" ", "-")} key={region}>
            <div className="wrap">
              <div className="ind-head rv">
                <h2>{region}</h2>
                <span className="muted">{list.length} countries</span>
              </div>
              <p className="muted rv" style={{ margin: "-10px 0 22px", maxWidth: "70ch" }}>
                Explore market guidance and priority city pages for every country below.
              </p>
              <div className="ind-grid">
                {list.map((country) => (
                  <Link className="ind-card rv" href={`/locations/countries/${country.slug}`} key={country.slug}>
                    <b>{country.name}</b>
                    <small>{country.cities.length} city guides · {country.sectors.slice(0, 2).join(", ")}</small>
                    <span className="arr" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
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
