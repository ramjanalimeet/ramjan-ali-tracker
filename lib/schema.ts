/** Site-wide structured data: the business, the person behind it and the website. Rendered on every page by the layout. */
export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://ramjan-akash.vercel.app/#business",
      name: "Ramjan Ali Akash, Local SEO & AI Search Visibility",
      url: "https://ramjan-akash.vercel.app/",
      image: "https://ramjan-akash.vercel.app/assets/ramjan-ali-akash-portrait.webp",
      email: "mailto:raakash.meet@gmail.com",
      description: "Local SEO and AI search visibility for home service businesses worldwide.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      areaServed: "Worldwide",
      priceRange: "$349 - $1,250 per month",
      founder: {
        "@id": "https://ramjan-akash.vercel.app/#person",
      },
      potentialAction: {
        "@type": "ReserveAction",
        name: "Book a call",
        target: "https://cal.com/ramjanalimeet/book-a-call",
      },
      knowsAbout: [
        "Local SEO",
        "Google Business Profile",
        "Google Maps SEO",
        "AI search visibility",
        "Generative engine optimization",
        "Google AI Overviews",
        "Home service marketing",
      ],
      sameAs: [
        "https://www.youtube.com/@Ramjanali-Akash",
        "https://www.linkedin.com/in/ramjanalimeet/",
        "https://www.facebook.com/RamjanaliMeet",
        "https://www.instagram.com/ramjanali_akash/",
        "https://www.tiktok.com/@ramjanali_akash",
        "https://x.com/RamjanaliMeet",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://ramjan-akash.vercel.app/#person",
      name: "Ramjan Ali Akash",
      jobTitle: "Local SEO & AI Search Visibility Specialist",
      image: "https://ramjan-akash.vercel.app/assets/ramjan-ali-akash-portrait.webp",
      url: "https://ramjan-akash.vercel.app/",
      sameAs: [
        "https://www.youtube.com/@Ramjanali-Akash",
        "https://www.linkedin.com/in/ramjanalimeet/",
        "https://www.facebook.com/RamjanaliMeet",
        "https://www.instagram.com/ramjanali_akash/",
        "https://www.tiktok.com/@ramjanali_akash",
        "https://x.com/RamjanaliMeet",
      ],
    },
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
  ],
};
