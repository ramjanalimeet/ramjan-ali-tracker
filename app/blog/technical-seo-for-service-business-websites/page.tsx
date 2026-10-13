import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PostCards } from "@/components/PostCards";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Technical SEO for Service Business Websites: Key Fixes",
  description:
    "The technical SEO problems most common on contractor websites, and how to find and fix them without a developer degree.",
  path: "/blog/technical-seo-for-service-business-websites",
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
      "@id": "https://ramjan-akash.vercel.app/blog/technical-seo-for-service-business-websites#webpage",
      url: "https://ramjan-akash.vercel.app/blog/technical-seo-for-service-business-websites",
      name: "Technical SEO for Service Business Websites: Fixes That Matter | Ramjan Ali Akash",
      description:
        "The technical SEO problems most common on contractor websites, and how to find and fix them without a developer degree.",
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
          name: "Technical SEO for service business websites: the fixes that matter",
          item: "https://ramjan-akash.vercel.app/blog/technical-seo-for-service-business-websites",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Technical SEO for service business websites: the fixes that matter",
      description:
        "The technical SEO problems most common on contractor websites, and how to find and fix them without a developer degree.",
      url: "https://ramjan-akash.vercel.app/blog/technical-seo-for-service-business-websites",
      mainEntityOfPage: "https://ramjan-akash.vercel.app/blog/technical-seo-for-service-business-websites",
      datePublished: "2026-10-01",
      dateModified: "2026-10-01",
      author: {
        "@id": "https://ramjan-akash.vercel.app/#person",
      },
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
      image: "https://ramjan-akash.vercel.app/assets/akash.webp",
      articleSection: "Technical SEO",
      inLanguage: "en",
    },
  ],
};

export default function TechnicalSeoForServiceBusinessWebsitesPage() {
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
              <li aria-current="page">Technical SEO for service business websites: the fixes that matter</li>
            </ol>
          </nav>
          <span className="eyebrow">Technical SEO</span>
          <h1 style={{ maxWidth: "22ch", fontSize: "clamp(36px,4.6vw,62px)" }}>
            Technical SEO for service business websites: the fixes that matter
          </h1>
          <p className="lead">
            The technical SEO problems most common on contractor websites, and how to find and fix them without a
            developer degree.
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
              Technical SEO sounds intimidating, but on a typical contractor website the problems are usually the same
              handful of things. Fix them and your content finally gets a fair chance to rank.
            </p>
            <h2>1. Make sure Google can index your important pages</h2>
            <p>
              Open Google Search Console and look at the pages report. It shows which pages are indexed and which are
              not, with a reason for each.
            </p>
            <p>Common problems on small sites:</p>
            <ul>
              <li>A "noindex" setting left on from when the site was being built.</li>
              <li>Service pages that are not linked from anywhere, so Google never finds them.</li>
              <li>Many near-duplicate town pages, which Google may decide not to index.</li>
            </ul>
            <p>
              If Search Console is not set up yet, do that first. It is free and it is the most direct view you have of
              how Google sees your site.
            </p>
            <h2>2. Speed up your site on phones</h2>
            <p>Google measures real-world page experience with three Core Web Vitals:</p>
            <ul>
              <li>
                <strong>Largest Contentful Paint (LCP):</strong> how fast the main content appears. Aim for 2.5 seconds
                or less.
              </li>
              <li>
                <strong>Interaction to Next Paint (INP):</strong> how quickly the page responds when someone taps. Aim
                for 200 milliseconds or less.
              </li>
              <li>
                <strong>Cumulative Layout Shift (CLS):</strong> how much the page jumps around while loading. Aim for
                0.1 or less.
              </li>
            </ul>
            <p>The usual fixes on contractor sites:</p>
            <ul>
              <li>Compress and resize images. Job photos straight off a phone are often several megabytes each.</li>
              <li>Use modern image formats such as WebP.</li>
              <li>Remove plugins, sliders and chat widgets you do not need.</li>
              <li>Use good hosting and caching.</li>
              <li>Set width and height on images so the page does not jump.</li>
            </ul>
            <h2>3. Fix your site structure</h2>
            <p>
              A clean structure helps Google understand what each page is about and which pages matter most. For a
              home-service business, a simple structure works well:
            </p>
            <ul>
              <li>Homepage</li>
              <li>One page per core service</li>
              <li>Service area pages for your main towns</li>
              <li>About, reviews and contact</li>
              <li>Blog or resources</li>
            </ul>
            <p>
              Link service pages from the homepage and main menu. Link area pages to the relevant service pages and back
              again. Pages with no internal links pointing to them are hard for Google to value.
            </p>
            <h2>4. Deal with duplicate and thin pages</h2>
            <p>
              The biggest technical issue I see on local sites is mass-produced town pages: the same 300 words with the
              town name swapped. Google's spam policies call this doorway abuse, and these pages rarely rank well.
            </p>
            <p>Better options:</p>
            <ul>
              <li>Merge thin pages into fewer, stronger ones.</li>
              <li>
                Rewrite the important ones with genuinely local content: jobs done there, photos, local issues, reviews
                from that town.
              </li>
              <li>Remove or noindex the ones that add nothing.</li>
            </ul>
            <h2>5. Add LocalBusiness schema</h2>
            <p>
              Schema markup is code that tells Google key facts in a structured way: your business name, address, phone,
              hours, service area and type of business. Schema.org has specific types for many trades, such as Plumber,
              RoofingContractor and HVACBusiness.
            </p>
            <p>
              Schema does not guarantee better rankings on its own, but it removes guesswork and can help with how your
              pages appear in results. Test it with Google's Rich Results Test after adding it.
            </p>
            <h2>6. Clean up redirects and broken links</h2>
            <ul>
              <li>When you change a page address, redirect the old one with a permanent (301) redirect.</li>
              <li>Fix links that point to pages that no longer exist.</li>
              <li>
                Make sure every version of your domain (with and without www, http and https) redirects to one main
                version.
              </li>
            </ul>
            <h2>7. Check the basics regularly</h2>
            <ul>
              <li>XML sitemap submitted in Search Console</li>
              <li>robots.txt not blocking important pages</li>
              <li>HTTPS working on every page</li>
              <li>Forms and click-to-call buttons actually working</li>
            </ul>
            <div className="note">
              <p>
                <strong>Do not skip the last one.</strong> A broken contact form is not technically an SEO problem, but
                it can silently cost you every lead your rankings bring in.
              </p>
            </div>
            <p>
              If you would rather have someone check all of this for you, my{" "}
              <Link href="/local-seo">Local SEO service</Link> covers it, and the{" "}
              <Link href="/book-a-call">free audit</Link> flags the biggest problems.
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
              <p>Technical fixes are part of every Local SEO plan.</p>
              <Link className="btn btn-ghost btn-sm" href="/local-seo">
                Local SEO →
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <PostCards exclude="technical-seo-for-service-business-websites" limit={3} style={{ marginTop: 6 }} />
        </div>
      </section>
      <RelatedLinks
        page="/blog/technical-seo-for-service-business-websites"
        topics={["local-seo"]}
        posts={0}
        industriesTitle="Guides for your trade"
      />
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
