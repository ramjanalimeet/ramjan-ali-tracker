import Link from "next/link";
import { ELITE_SEPTIC_PATH, ELITE_SEPTIC_METRICS, ELITE_SEPTIC_WEBSITE } from "@/lib/elite-septic";
import { CASE_STUDIES } from "@/lib/case-studies";

import { CASE_OVERVIEWS, caseOverviewCover, caseOverviewPath } from "@/lib/case-overviews";

const OVERVIEW_THUMBNAILS: Readonly<Record<string, string>> = {
  "legacy-of-the-heart": "Legacy of the Heart homepage featuring its jewelry collections",
  aidfast: "AidFast homepage with healthcare directory categories and a Bangla app banner",
  shopilier: "Shopilier homepage introducing its online store builder",
  "a2-auto-care": "A2 Auto Care homepage advertising Edinburgh mobile detailing and ceramic coating",
  "detailing-knights": "Detailing Knights homepage advertising waterless mobile detailing in the Toronto area",
};

const PROJECT_CARDS = [
  ...CASE_STUDIES.map((c) => {
    const isEcoverde = c.slug === "ecoverde-valeting-local-seo-ai-visibility";
    return {
      name: c.client,
      category: isEcoverde ? "Car Detailing (UK)" : c.trade,
      cover: isEcoverde ? "/assets/case-studies/ecoverde-site-thumbnail.webp" : c.image,
      alt: isEcoverde ? "Ecoverde homepage with mobile valeting services and booking options" : c.imageAlt,
      summary: isEcoverde
        ? "Local SEO and AI visibility work for an eco-friendly mobile valeting service in West London."
        : c.summary,
      highlights: c.highlights.slice(0, 3).map(({ after, label }) => ({ value: after, label })),
      website: c.website,
      href: `/case-studies/${c.slug}`,
      detailLabel: "Read case study",
    };
  }),
  {
    name: "Elite Septic Service",
    category: "Septic Service (USA)",
    cover: "/assets/case-studies/elite-site-thumbnail.webp",
    alt: "Elite Septic Service homepage with a free estimate form",
    summary: "An industry example of how a service website and Google Business Profile help East Texas homeowners find and call a septic company.",
    highlights: ELITE_SEPTIC_METRICS,
    website: ELITE_SEPTIC_WEBSITE,
    href: ELITE_SEPTIC_PATH,
    detailLabel: "Read case study",
  },
  {
    name: "Wolfpixel",
    category: "Design Agency",
    cover: "/assets/case-studies/wolfpixel-site-thumbnail.webp",
    alt: "Wolfpixel homepage introducing its product and brand design services",
    summary: "A design agency for SaaS companies and startups, with a portfolio spanning product design, branding and websites.",
    highlights: [
      { value: "Product", label: "Digital design" },
      { value: "Brand", label: "Visual identity" },
      { value: "Web", label: "Site design" },
    ],
    website: "https://www.wolfpixel.agency/",
    href: "/case-studies/wolfpixel",
    detailLabel: "Read overview",
  },
  ...CASE_OVERVIEWS.map((overview) => ({
    ...overview,
    cover: OVERVIEW_THUMBNAILS[overview.slug]
      ? `/assets/case-studies/${overview.slug}-site-thumbnail.webp`
      : caseOverviewCover(overview.slug),
    alt: OVERVIEW_THUMBNAILS[overview.slug] ?? overview.alt,
    href: caseOverviewPath(overview.slug),
    highlights: [],
    detailLabel: "Read overview",
  })),
];

export function CaseStudyCards() {
  return (
    <div className="case-results-grid">
      {PROJECT_CARDS.map((project) => (
        <article className="case-result-card rv" key={project.href}>
          <Link className="case-result-image" href={project.href} aria-label={`${project.detailLabel}: ${project.name}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={project.alt} width={960} height={540} />
            <span className="case-result-category">{project.category}</span>
            <span className="case-result-arrow" aria-hidden="true">↗</span>
          </Link>
          <div className="case-result-body">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            {project.highlights.length > 0 && (
              <ul className="case-result-metrics">
                {project.highlights.map(({ label, value }) => (
                  <li key={label}><b>{value}</b><span>{label}</span></li>
                ))}
              </ul>
            )}
            <div className="case-result-actions">
              <Link className="btn btn-ghost btn-sm" href={project.website} target="_blank" rel="noopener">View website</Link>
              <Link className="btn btn-dark btn-sm" href={project.href}>{project.detailLabel} <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
