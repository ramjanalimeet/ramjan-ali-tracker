type CaseOverview = {
  slug: string;
  name: string;
  website: string;
  category: string;
  alt: string;
  summary: string;
  sections: readonly { title: string; text: string }[];
};

export const CASE_OVERVIEWS: readonly CaseOverview[] = [
  {
    slug: "legacy-of-the-heart",
    name: "Legacy of the Heart",
    website: "https://legacyoftheheart.com/",
    category: "Jewelry eCommerce",
    alt: "Legacy of the Heart’s Generations of Love jewelry collection",
    summary: "A jewelry storefront that helps shoppers browse meaningful gifts by occasion and sentiment.",
    sections: [
      { title: "Shop by the meaning behind the gift", text: "The homepage directs shoppers to collections such as memorial jewelry, as well as new additions. Those entry points help a shopper start with the person or occasion they have in mind." },
      { title: "Give collections distinct search purposes", text: "A collection page can describe the occasion or recipient it serves, then link to the relevant products. That gives shoppers a route from a broad gift search to pieces they can compare." },
    ],
  },
  {
    slug: "deborah-j-birdoes-designs",
    name: "Deborah J Birdoes Designs",
    website: "https://deborahjbirdoesdesigns.com/",
    category: "Designer Jewelry",
    alt: "Signature jewelry collections shown on the Deborah J Birdoes Designs website",
    summary: "An online catalog pairing inspirational jewelry designs with the stories and messages behind them.",
    sections: [
      { title: "Use the story to explain the piece", text: "The site showcases designs such as The Power of A Mother’s Love and Anniversary Heart. The messages help explain why a piece suits a particular person or occasion." },
      { title: "Make product details easy to compare", text: "Give each design a clear title and put metal, gemstone and size information alongside the story. Shoppers can then decide whether the piece fits their budget and the occasion." },
    ],
  },
  {
    slug: "aidfast",
    name: "AidFast",
    website: "https://aidfastbd.com/",
    category: "Healthcare Directory",
    alt: "AidFast’s website icon",
    summary: "A Bangladeshi healthcare directory for finding doctors, diagnostic centers, hospitals, blood banks and ambulances.",
    sections: [
      { title: "Organize information by what people need", text: "AidFast describes its directory in Bangla and names the resources it helps people find. Doctors, diagnostic centers and ambulance services represent different needs, so clear categories can shorten each search." },
      { title: "Make practical details easy to check", text: "For healthcare directory listings, display the location, contact information and when the entry was last checked. Clear labels in the reader’s language help people decide which provider to contact." },
    ],
  },
  {
    slug: "shopilier",
    name: "Shopilier",
    website: "https://shopilier.com/",
    category: "eCommerce Platform",
    alt: "Shopilier logo from its website",
    summary: "A no-code online store builder for businesses in Bangladesh.",
    sections: [
      { title: "Explain what merchants can launch", text: "Shopilier’s homepage describes how merchants can create an online store without writing code. Its product preview shows where store owners can manage orders and see store activity." },
      { title: "Answer setup questions along the way", text: "A store builder can give pricing, setup and product features their own pages. This helps a merchant compare plans, see what is included and understand how to get started." },
    ],
  },
  {
    slug: "a2-auto-care",
    name: "A2 Auto Care",
    website: "https://www.a2autocare.co.uk/",
    category: "Car Detailing · Edinburgh",
    alt: "A detailed vehicle shown on the A2 Auto Care website",
    summary: "An Edinburgh mobile detailing business offering ceramic coating and paint correction.",
    sections: [
      { title: "Pair the service with the area it covers", text: "A2 Auto Care puts Edinburgh and its mobile detailing and ceramic coating services in the homepage heading. The site also explains machine polishing and ceramic coating maintenance." },
      { title: "Help drivers choose a service", text: "Explain which paint conditions call for polishing, what ceramic coating protects against and how to maintain it. Drivers can use those answers to choose a service before booking." },
    ],
  },
  {
    slug: "detailing-knights",
    name: "Detailing Knights",
    website: "https://www.detailingknights.ca/",
    category: "Car Detailing · Toronto",
    alt: "Interior car detailing image from the Detailing Knights website",
    summary: "A Toronto and GTA mobile detailing business with waterless services, retail packages and fleet detailing.",
    sections: [
      { title: "Give individuals and fleet buyers separate paths", text: "The site presents mobile detailing packages alongside fleet services. Individual drivers can compare packages, while businesses with multiple vehicles have a separate service to explore." },
      { title: "Explain what each package includes", text: "Package pages can show which surfaces and treatments are covered, where mobile appointments are available and how to book. Fleet pages can address scheduling and recurring needs separately." },
    ],
  },
];

export const caseOverviewPath = (slug: string) => `/case-studies/${slug}`;
export const caseOverviewCover = (slug: string) => `/assets/case-studies/${slug}-card.webp`;
export const getCaseOverview = (slug: string) => CASE_OVERVIEWS.find((overview) => overview.slug === slug);
