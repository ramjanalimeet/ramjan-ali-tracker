import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("local-business-schema-for-contractors")!;

export const metadata = pageMeta({
  title: "Local Business Schema for Contractors (With JSON-LD Example)",
  description:
    "How roofers, plumbers, HVAC and home service businesses should use LocalBusiness schema: which type to pick, a copy-ready JSON-LD example and mistakes to avoid.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "Does schema markup improve local rankings?",
    a: "Schema is not a direct ranking boost on its own. It helps Google understand your business details clearly and can make pages eligible for certain search features. It also gives AI assistants clean facts about your business. Think of it as clarity, not a shortcut.",
  },
  {
    q: "Which schema type should a contractor use?",
    a: "Use the most specific LocalBusiness subtype that fits, such as RoofingContractor, Plumber, HVACBusiness, Electrician or GeneralContractor. If none fits, use HomeAndConstructionBusiness or LocalBusiness.",
  },
  {
    q: "Can I add review stars to my website with schema?",
    a: "Not for your own business. Google does not show review rich results for reviews a LocalBusiness or Organization publishes about itself. You can still show testimonials on the page for visitors.",
  },
  {
    q: "Does FAQ schema still show in Google?",
    a: "Since 2023, Google shows FAQ rich results only for a limited set of well-known authoritative government and health sites. FAQ content itself is still useful for visitors and AI answers, so keep good FAQs on the page.",
  },
  {
    q: "Should schema go on every page?",
    a: "Your main LocalBusiness markup usually goes on the homepage or contact page. Service pages can use Service markup that references the business. Each real location with its own page can have its own LocalBusiness markup.",
  },
  {
    q: "How do I check if my schema works?",
    a: "Use Google's Rich Results Test for Google features and the Schema Markup Validator at validator.schema.org for general correctness. Then check Google Search Console for structured data errors.",
  },
];

export default function LocalBusinessSchemaForContractorsPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="Schema markup tells Google and AI assistants exactly who you are, what you do and where. Here is what home service businesses actually need, with a copy-ready example and the mistakes to avoid."
    >
      <p>Schema markup sounds technical, and the code can look intimidating. But the idea is simple: a small block of structured information on your website that states your business facts in a format machines read without guessing. Name, trade, phone, address or service area, hours, website, social profiles.</p>
      <p>For a contractor, schema will not replace reviews or good service pages. What it does is remove ambiguity, for Google and for the AI assistants that increasingly answer &quot;who should I call?&quot;. This guide covers what you need, what you can skip, and a copy-ready example.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Use JSON-LD, Google&apos;s recommended format.</li>
      <li>Pick the most specific LocalBusiness subtype for your trade.</li>
      <li>Match every detail exactly to your Google Business Profile.</li>
      <li>Do not mark up your own reviews as star ratings.</li>
      <li>Test with the Rich Results Test and fix errors in Search Console.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#what">What schema markup is</a></li>
      <li><a href="#types">Which schema type to use</a></li>
      <li><a href="#properties">The properties that matter</a></li>
      <li><a href="#example">A copy-ready example</a></li>
      <li><a href="#services">Service pages and Service schema</a></li>
      <li><a href="#sab">Service-area businesses: what to do about the address</a></li>
      <li><a href="#multi">Multiple locations</a></li>
      <li><a href="#add">How to add schema without a developer</a></li>
      <li><a href="#ai">Schema and AI search</a></li>
      <li><a href="#mistakes">Common schema mistakes</a></li>
      <li><a href="#test">How to test your schema</a></li>
      <li><a href="#next">Get your technical foundations right</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="what">What schema markup is</h2>
      <blockquote>
      <p>&quot;Google uses structured data that it finds on the web to understand the content of the page, as well as to gather information about the web and the world in general.&quot;</p>
      <cite>Google Search Central, <Ext href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data">Introduction to structured data markup in Google Search</Ext></cite>
      </blockquote>
      <p>The vocabulary comes from schema.org, a shared standard used by Google, Bing and others. For local businesses, the key type is <code>LocalBusiness</code> and its more specific subtypes.</p>
      <h2 id="types">Which schema type to use</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Business</th><th>Schema.org type</th></tr>
      </thead>
      <tbody>
      <tr><td>Roofer</td><td>RoofingContractor</td></tr>
      <tr><td>Plumber</td><td>Plumber</td></tr>
      <tr><td>HVAC company</td><td>HVACBusiness</td></tr>
      <tr><td>Electrician</td><td>Electrician</td></tr>
      <tr><td>Painter</td><td>HousePainter</td></tr>
      <tr><td>Remodeler or builder</td><td>GeneralContractor</td></tr>
      <tr><td>Locksmith</td><td>Locksmith</td></tr>
      <tr><td>Moving company</td><td>MovingCompany</td></tr>
      <tr><td>Other home trades (septic, pest control, landscaping, cleaning)</td><td>HomeAndConstructionBusiness or LocalBusiness</td></tr>
      </tbody>
      </table>
      </div>
      <p>The more specific type helps machines categorize you. Do not pick a type that does not describe you just because it exists.</p>
      <h2 id="properties">The properties that matter</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Property</th><th>What to put</th><th>Notes</th></tr>
      </thead>
      <tbody>
      <tr><td>name</td><td>Your real business name</td><td>Exactly as on your Business Profile, no added keywords</td></tr>
      <tr><td>url</td><td>Your homepage</td><td></td></tr>
      <tr><td>telephone</td><td>Main phone with country code</td><td>Same number as your profile</td></tr>
      <tr><td>address</td><td>Street address</td><td>Service-area businesses that hide their address on Google can include locality and region only</td></tr>
      <tr><td>areaServed</td><td>Cities, counties or regions you serve</td><td>Keep it realistic</td></tr>
      <tr><td>openingHoursSpecification</td><td>Your hours</td><td>Match your profile</td></tr>
      <tr><td>image and logo</td><td>A real photo and your logo</td><td></td></tr>
      <tr><td>sameAs</td><td>Links to your Business Profile, Facebook, Yelp, BBB and other official profiles</td><td>Helps connect your listings as one business</td></tr>
      <tr><td>priceRange</td><td>For example &quot;$$&quot;</td><td>Optional</td></tr>
      <tr><td>geo</td><td>Latitude and longitude</td><td>Optional, for storefront locations</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="example">A copy-ready example</h2>
      <p>Here is an example for a fictional plumbing company that serves customers at their homes. Replace every detail with your own, exactly as it appears on your Google Business Profile, and place it in the <code>head</code> of your homepage or contact page.</p>
      <pre>
      <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.example-plumbing.com/#business",
  "name": "Lone Star Plumbing",
  "url": "https://www.example-plumbing.com/",
  "telephone": "+1-214-555-0142",
  "image": "https://www.example-plumbing.com/images/truck.jpg",
  "logo": "https://www.example-plumbing.com/images/logo.png",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "McKinney",
    "addressRegion": "TX",
    "postalCode": "75070",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "McKinney" },
    { "@type": "City", "name": "Allen" },
    { "@type": "City", "name": "Frisco" }
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "18:00"
  }],
  "sameAs": [
    "https://www.facebook.com/example-plumbing",
    "https://www.yelp.com/biz/example-plumbing"
  ]
}
</script>`}</code>
      </pre>
      <p>Most website builders (WordPress with an SEO plugin, Wix, Squarespace) let you add this in a site-wide header setting or through a plugin&apos;s local business options.</p>
      <h2 id="services">Service pages and Service schema</h2>
      <p>On individual service pages, you can add <code>Service</code> markup that names the service and points back to the business with its <code>@id</code>. This is optional, and it is not a substitute for the page itself having real, useful content. A strong page with no schema beats a thin page with perfect schema every time. See <Link href="/blog/high-value-plumbing-keywords">which service pages to build first</Link>.</p>
      <h2 id="sab">Service-area businesses: what to do about the address</h2>
      <p>Most contractors are service-area businesses: they go to the customer, and many hide their street address on Google. Your schema should follow the same choice.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Your situation</th><th>What to put in the address</th></tr>
      </thead>
      <tbody>
      <tr><td>Customers visit your office or showroom</td><td>Full street address, exactly as on your profile</td></tr>
      <tr><td>You hide your address on Google</td><td>City, region, postal code and country only, plus <code>areaServed</code> for the towns you cover</td></tr>
      <tr><td>Several real, staffed locations</td><td>One LocalBusiness block per location, each on its own location page</td></tr>
      </tbody>
      </table>
      </div>
      <p>Never add addresses for towns where you have no real location. If you serve a town, say so in <code>areaServed</code> and on a genuinely useful <Link href="/blog/service-area-pages-that-rank">service area page</Link>.</p>
      <h2 id="multi">Multiple locations</h2>
      <p>If you have more than one real, staffed location, give each location its own page with its own LocalBusiness markup: its own address, phone, hours and a unique <code>@id</code>. Link each location to the parent company with the <code>parentOrganization</code> property. Each location page should match that location&apos;s Business Profile exactly.</p>
      <h2 id="add">How to add schema without a developer</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Platform</th><th>Usual approach</th></tr>
      </thead>
      <tbody>
      <tr><td>WordPress</td><td>An SEO plugin&apos;s local business settings, or a header-code plugin for custom JSON-LD</td></tr>
      <tr><td>Wix</td><td>Built-in business info, plus custom structured data in page SEO settings</td></tr>
      <tr><td>Squarespace</td><td>Business information settings, plus a code block or code injection for JSON-LD</td></tr>
      <tr><td>Custom or Next.js sites</td><td>A JSON-LD script in the page template, generated from one source of business data</td></tr>
      </tbody>
      </table>
      </div>
      <p>Whatever the platform, keep one source of truth for your business details, so a phone or hours change does not leave old values in the markup.</p>
      <h2 id="ai">Schema and AI search</h2>
      <p>AI assistants and Google&apos;s AI Overviews pull facts from many sources: your Business Profile, directories, reviews and your website. Clear, consistent structured data is one of the easiest ways to make sure the facts they find on your site match everything else. This is part of the work covered in <Link href="/ai-search">GEO and AI visibility</Link>, and in <Link href="/blog/geo-vs-seo-home-services">GEO vs SEO for home services</Link>.</p>
      <h2 id="mistakes">Common schema mistakes</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Mistake</th><th>Why it is a problem</th></tr>
      </thead>
      <tbody>
      <tr><td>Marking up your own reviews as aggregate ratings</td><td>Google does not show self-serving review stars for local businesses and may ignore or flag them</td></tr>
      <tr><td>Name, phone or address that differ from your profile</td><td>Creates the inconsistency schema is supposed to remove</td></tr>
      <tr><td>Fake addresses in every city you serve</td><td>Misleading, and against Google&apos;s guidelines</td></tr>
      <tr><td>Copying a template without changing the details</td><td>Wrong phone numbers and hours confuse search engines and customers</td></tr>
      <tr><td>Adding FAQ schema to win rich results</td><td>FAQ rich results are now limited to a small set of authoritative sites</td></tr>
      <tr><td>Several conflicting plugins adding schema</td><td>Duplicate or contradictory business data</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="test">How to test your schema</h2>
      <ol>
      <li>Paste your URL into Google&apos;s <Ext href="https://search.google.com/test/rich-results">Rich Results Test</Ext> to check what Google can read.</li>
      <li>Use the <Ext href="https://validator.schema.org/">Schema Markup Validator</Ext> for general schema.org correctness.</li>
      <li>Check Google Search Console&apos;s enhancements reports over the following weeks for errors.</li>
      <li>Re-test whenever you change hours, phone, address or website platform.</li>
      </ol>
      <h2 id="next">Get your technical foundations right</h2>
      <p>Schema is one part of the technical work that lets Google trust your site, along with speed, indexing and site structure. <Link href="/seo-services/technical-seo">Technical SEO</Link> covers all of it, and schema set up for AI answers is included from the Growth plan on the <Link href="/pricing">pricing page</Link>. Want me to check your current setup? Book a <Link href="/book-a-call">free strategy call</Link>.</p>
    </ArticleLayout>
  );
}
