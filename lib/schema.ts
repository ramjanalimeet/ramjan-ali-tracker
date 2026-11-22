import { SITE_URL } from "./site";

const SOCIAL_PROFILES = [
  "https://www.youtube.com/@Ramjanali-Akash",
  "https://www.linkedin.com/in/ramjanalimeet/",
  "https://www.facebook.com/RamjanaliMeet",
  "https://www.instagram.com/ramjanali_akash/",
  "https://www.tiktok.com/@ramjanali_akash",
  "https://x.com/RamjanaliMeet",
];

const EXPERTISE = [
  "Local SEO",
  "Google Business Profile",
  "Google Maps SEO",
  "AI search visibility",
  "Generative engine optimization",
  "Google AI Overviews",
  "Local business marketing",
];

/** Site-wide structured data: the business, the person behind it and the website. Rendered on every page by the layout. */
export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#business`,
      name: "Ramjan Ali Akash, Local SEO & AI Visibility for Local Businesses",
      alternateName: "Ramjan Ali",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/ramjan-ali-akash-portrait.webp`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/favicon.svg`,
        contentUrl: `${SITE_URL}/favicon.svg`,
        caption: "Ramjan Ali Akash",
      },
      email: "mailto:raakash.meet@gmail.com",
      description: "Local SEO and AI visibility for local businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      priceRange: "$349 - $1,250 per month",
      founder: {
        "@id": `${SITE_URL}/#person`,
      },
      potentialAction: {
        "@type": "ReserveAction",
        name: "Book a call",
        target: "https://cal.com/ramjanalimeet/book-a-call",
      },
      knowsAbout: EXPERTISE,
      sameAs: SOCIAL_PROFILES,
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ramjan Ali Akash",
      jobTitle: "Local SEO & AI Visibility Specialist",
      image: `${SITE_URL}/assets/ramjan-ali-akash-portrait.webp`,
      url: `${SITE_URL}/about`,
      worksFor: { "@id": `${SITE_URL}/#business` },
      knowsAbout: EXPERTISE,
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Ramjan Ali Akash",
      alternateName: "Ramjan Ali",
      inLanguage: "en",
      about: { "@id": `${SITE_URL}/#business` },
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
    },
  ],
};
