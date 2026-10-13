import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PostCards } from "@/components/PostCards";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Local SEO Blog for Contractors | Ramjan Ali Akash",
  description:
    "Plain-English guides to local SEO, Google Maps rankings, technical SEO, content and SEO strategy for contractors and home-service businesses.",
  path: "/blog",
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
      "@id": "https://ramjan-akash.vercel.app/blog#webpage",
      url: "https://ramjan-akash.vercel.app/blog",
      name: "Local SEO Blog | Google Maps, Technical & Content SEO Guides",
      description:
        "Plain-English guides to local SEO, Google Maps rankings, technical SEO, content and SEO strategy for contractors and home-service businesses.",
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
      ],
    },
    {
      "@type": "Blog",
      name: "Ramjan Ali Akash Local SEO Blog",
      url: "https://ramjan-akash.vercel.app/blog",
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
    },
  ],
};

export default function BlogPage() {
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
              <li aria-current="page">Blog</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Blog</span>
              <h1>
                Local SEO, <span className="s">explained plainly.</span>
              </h1>
              <p className="lead">
                Practical guides on Google Maps, local rankings, technical fixes and content, written for home service
                business owners who want to understand what actually moves the phone, on Google and in AI search.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap">
          <PostCards />
        </div>
      </section>
      <CtaBand title="Find out what is holding your rankings back." />
    </>
  );
}
