import type { CountryDeep } from "./cities/deep-types";

/**
 * Country-specific depth for North American and European markets.
 * Rendered on /locations/countries/<slug> and that country's city guides.
 */
export const COUNTRY_DEEP_A: Record<string, CountryDeep> = {
  "united-states": {
    overview: [
      "Google is the main way Americans find a local business, and the map pack usually sits above the organic results for service searches. Apple Maps matters more here than in most markets because so many people use iPhones, and Siri pulls from Apple's business data. Bing feeds Microsoft products and some AI assistants, so a verified Bing Places listing is worth the small effort.",
      "Search intent is layered: people search by state, by metro, by suburb and by neighborhood, and \"near me\" searches are common. Reviews on Google and Yelp carry real weight, and for trades many homeowners also check Angi, Nextdoor or the BBB before they call. A business that serves several cities in a metro usually needs a page for each one, not a single statewide page.",
    ],
    directories: [
      { name: "Yelp", why: "Strong for restaurants, salons and home services, and its data feeds other apps and maps." },
      { name: "Better Business Bureau (BBB)", why: "Still checked by many homeowners before hiring a contractor, and complaint handling is visible." },
      { name: "Angi", why: "A major marketplace and review site for home services and trades." },
      { name: "Nextdoor", why: "Neighborhood recommendations drive real word-of-mouth leads for local service businesses." },
      { name: "Healthgrades", why: "A widely used profile and review site for doctors and dentists." },
      { name: "Avvo", why: "A known lawyer directory with ratings, profiles and client reviews." },
    ],
    language:
      "Use American English spelling (color, center, neighborhood). Write addresses as street, city, two-letter state code and ZIP code (for example, 123 Main St, Austin, TX 78701), and use the same suite format everywhere. Phone numbers should follow one style, such as (512) 555-0100, with +1 only on international pages. In Texas, California, Florida and parts of the Southwest, a Spanish-language service page can reach a large local audience.",
    rules:
      "The FTC's rule on fake reviews and testimonials bans buying, selling or fabricating reviews, and it covers undisclosed insider reviews and suppressing negative ones. The Consumer Review Fairness Act limits contract clauses that stop customers posting honest reviews. Text and call campaigns fall under the TCPA, and email under CAN-SPAM. Several states, including California, have their own privacy laws. Healthcare providers must keep patient details out of public review replies under HIPAA, and lawyers must follow their state bar's advertising rules.",
    tips: [
      "Build one page per city or suburb you actually serve, with local proof such as jobs completed, photos and reviews from that area.",
      "Claim and verify Apple Business Connect, not just Google, because iPhone users often search through Apple Maps and Siri.",
      "For trades, keep your license number and insurance details visible on the site and listings, since many states require licensing and customers look for it.",
      "Match categories to each platform: Yelp, Angi and Healthgrades all use their own category lists, so map them carefully instead of guessing.",
    ],
    faqs: [
      {
        q: "Does Yelp still matter for local SEO in the United States?",
        a: "Yes, especially for restaurants, beauty and home services. Yelp ranks well in organic results for many local searches, and its business data is used by other services, so an accurate, well-reviewed Yelp page helps beyond Yelp itself.",
      },
      {
        q: "Can I rank in a city where my business has no address?",
        a: "In the map pack, distance from the searcher matters a lot, so ranking far from your address is hard. A service-area business can still win organic results in nearby cities with strong, genuinely local city pages and reviews that mention those areas.",
      },
      {
        q: "Should I create a page for every state I work in?",
        a: "Only if you have real operations or customers there. Most local businesses do better with metro and city pages. Thin pages for states or cities you do not serve tend to underperform and can weaken trust in the rest of the site.",
      },
    ],
  },

  canada: {
    overview: [
      "Google dominates local search across Canada, with Apple Maps and Bing as secondary but useful platforms. Search behaviour follows provinces and cities, and in big metros like Toronto, Vancouver and Montreal people also search by neighbourhood or borough. Many customers check Google reviews first, then look at directories such as YellowPages.ca or HomeStars for trades.",
      "Language is the biggest structural difference. Quebec searches are mostly in French, and Ottawa, parts of New Brunswick and Eastern Ontario have strong bilingual demand. A single English page will not compete in Montreal or Quebec City. Canadian searchers also notice US spelling and US-style pricing, so local signals need to read as Canadian.",
    ],
    directories: [
      { name: "YellowPages.ca", why: "Canada's best-known business directory, with a French version (PagesJaunes.ca) for Quebec." },
      { name: "HomeStars", why: "A major Canadian review platform for contractors and home services." },
      { name: "Yelp", why: "Used for restaurants and services in the larger cities and feeds data to other apps." },
      { name: "Better Business Bureau", why: "BBB operates in Canada and is still checked by many homeowners before hiring." },
      { name: "RateMDs", why: "A widely used site where patients rate doctors, dentists and clinics." },
      { name: "411.ca", why: "A long-running Canadian directory and phone lookup that helps keep NAP data consistent." },
    ],
    language:
      "Use Canadian spelling (colour, centre, neighbourhood, cheque). For Quebec, publish proper French pages written for Quebec readers, not machine translation, and use local terms (for example, plombier for plumber and déneigement for snow removal). Write postal codes as A1A 1A1 with a space, use two-letter province codes (ON, QC, BC), and keep phone numbers in one style such as (416) 555-0100. Quebec addresses often use French street types (rue, boulevard), so keep them identical across listings.",
    rules:
      "CASL (Canada's Anti-Spam Legislation) requires consent before sending commercial emails or texts, including review requests, and every message needs identification and an unsubscribe option. PIPEDA covers personal information in most provinces, and Quebec's Law 25 adds stricter privacy duties. The Competition Bureau treats fake or misleading reviews as deceptive marketing. In Quebec, the Charter of the French Language sets rules on French in commercial content and signage. Regulated professions such as dentists and lawyers also follow their provincial college or law society advertising rules.",
    tips: [
      "Create separate English and French versions of key pages for Quebec and bilingual markets, with hreflang and matching listing details.",
      "Never reuse US content with US spelling, pricing or regulations; Canadian customers notice and trust drops.",
      "Plan seasonal content for winter services such as snow removal, furnace repair and winter tires, which vary by province.",
      "Ask happy clients for reviews in the language they speak; French reviews help Quebec visibility as much as English ones help in Ontario.",
    ],
    faqs: [
      {
        q: "Do I need French pages if my business is outside Quebec?",
        a: "Not always. If you serve Ottawa, Gatineau, Eastern Ontario, New Brunswick or francophone communities elsewhere, French pages can bring real enquiries. If your customers are almost all English speaking, focus on English first.",
      },
      {
        q: "Is HomeStars worth it for a Canadian contractor?",
        a: "For many home service businesses, yes. HomeStars profiles often rank for trade searches in Canadian cities, and customers use them to compare contractors. Keep your details consistent with Google and respond to reviews there too.",
      },
      {
        q: "Can I send review request texts to customers in Canada?",
        a: "Yes, but CASL applies. You generally need consent or an existing business relationship, the message must identify your business, and it must include a simple way to opt out.",
      },
    ],
  },

  "united-kingdom": {
    overview: [
      "Google dominates local search in the UK, and the map pack is the main battleground for trades, dentists and solicitors. Apple Maps is widely used on iPhones and Bing powers some voice and AI results, so both are worth claiming. People search by town, city, borough and often by postcode district, especially in London.",
      "Trust is driven heavily by reviews. Beyond Google, many homeowners check trade platforms such as Checkatrade or TrustATrader before calling, and Trustpilot is widely recognised. The UK is made up of England, Scotland, Wales and Northern Ireland, with counties and local authorities inside them, so local pages should use the place names people actually search, not just the official ones.",
    ],
    directories: [
      { name: "Yell", why: "The UK's best-known business directory and a long-standing citation source." },
      { name: "Checkatrade", why: "A leading vetted trades platform where homeowners compare reviews before hiring." },
      { name: "TrustATrader", why: "Another vetted trades directory with verified customer reviews." },
      { name: "Trustpilot", why: "Widely recognised by UK consumers, and its ratings often appear in search results." },
      { name: "MyBuilder", why: "A job marketplace used by homeowners to find local tradespeople." },
      { name: "Tripadvisor", why: "Important for pubs, restaurants, hotels and attractions." },
    ],
    language:
      "Use British English (colour, organise, centre) and local trade terms such as plumber, joiner (common in the North and Scotland), electrician, solicitor and estate agent. Write postcodes in full with the space (for example, SW1A 1AA) and keep the same format on every listing. Show phone numbers in UK format, such as 020 7946 0000 for London or 0161 for Manchester, and use +44 only on international pages. In Wales, a Welsh-language version of key pages can help with trust, especially for public-facing services.",
    rules:
      "UK GDPR and the Data Protection Act 2018 cover customer data, and PECR governs marketing emails, texts and cookies. The Digital Markets, Competition and Consumers Act 2024 makes fake reviews and concealed incentivised reviews banned practices, enforced by the CMA. The ASA's CAP Code covers advertising claims on websites and social media. Regulated sectors have extra rules, for example the SRA for solicitors and the GDC for dentists, including how fees and reviews are presented.",
    tips: [
      "Target postcode districts and boroughs, not just city names, because Londoners and suburban customers often search that way.",
      "Join one or two vetted trades platforms and link them from your site so customers can verify your reviews.",
      "Keep Companies House details, trading name and listing names consistent, since mismatched names confuse both customers and search engines.",
      "For Scotland and Wales, write pages that reflect local differences in services, place names and, where relevant, regulations.",
    ],
    faqs: [
      {
        q: "Is Checkatrade or Trustpilot better for a UK trades business?",
        a: "They do different jobs. Checkatrade and TrustATrader are where homeowners compare tradespeople, while Trustpilot builds broader brand trust. Most trades businesses get more direct leads from trade platforms plus Google reviews.",
      },
      {
        q: "Can I offer a discount in exchange for reviews in the UK?",
        a: "Incentivised reviews must not be hidden, and under the DMCC Act concealed incentivised reviews and fake reviews are banned. Google's policies also prohibit offering incentives for reviews, so it is safer to simply ask every customer for honest feedback.",
      },
      {
        q: "Should I target London as one area?",
        a: "Usually not. London is huge, and the map pack depends on distance. Pages for the boroughs and districts you actually serve, such as Croydon or Islington, work much better than a single London page.",
      },
    ],
  },

  ireland: {
    overview: [
      "Google is the default search engine in Ireland, and local results are heavily shaped by reviews and proximity. Apple Maps and Bing are smaller but still worth claiming. Outside Dublin, people often search by county and by town, and many businesses serve a wide rural area around a main town.",
      "Word of mouth is powerful in Ireland, and online reviews act as its digital version. Customers often ask for recommendations in local Facebook groups and then check Google reviews before calling. Ireland has 26 counties, and Eircodes are now widely used for addresses, which helps map accuracy in rural areas where addresses can be vague.",
    ],
    directories: [
      { name: "Golden Pages", why: "Ireland's best-known business directory and a core citation." },
      { name: "Trustpilot", why: "Widely recognised for service and ecommerce businesses." },
      { name: "Tripadvisor", why: "Essential for pubs, restaurants, accommodation and tourism businesses." },
      { name: "WhatClinic", why: "Used by patients comparing dental, cosmetic and health clinics." },
      { name: "Facebook", why: "Local community groups and page recommendations drive real word-of-mouth enquiries." },
    ],
    language:
      "Use British and Irish spelling (colour, centre) and Irish place names as locals use them. Some towns have both English and Irish names, so check which version people search and include both where it helps. Include the Eircode on your site and listings (for example, D02 format for Dublin), and keep the same address lines everywhere. Write phone numbers as 01 for Dublin, 021 for Cork and so on, with +353 on international pages. Irish-language content is rarely needed for trades but can matter for Gaeltacht areas.",
    rules:
      "GDPR applies, overseen by the Data Protection Commission, and the ePrivacy Regulations cover marketing emails, texts and cookies. EU consumer law, including the Omnibus Directive, requires honesty about how reviews are collected and checked. The Competition and Consumer Protection Commission (CCPC) handles misleading commercial practices. Advertising claims are covered by the ASAI code. Regulated sectors such as solicitors and dentists also follow their professional body rules.",
    tips: [
      "Add your Eircode to Google Business Profile and your website, especially in rural areas where addresses are hard to match.",
      "Build pages for county towns and the surrounding area you cover, since many Irish searches combine a service with a county or town name.",
      "Be active in local community groups and sponsor local clubs; those links and mentions carry real local trust.",
      "For tourism-heavy areas like Galway, Kerry or Kilkenny, keep opening hours updated through the seasons.",
    ],
    faqs: [
      {
        q: "Do Eircodes help with local SEO in Ireland?",
        a: "They help with accuracy. Many rural addresses look similar, and an Eircode pins your exact location. Using it consistently helps customers, delivery services and maps find you.",
      },
      {
        q: "Can a Dublin business rank in surrounding towns?",
        a: "In the map pack, distance limits this. But a Dublin business that serves Swords, Bray or Naas can rank organically with genuine pages for those towns, backed by local reviews and projects.",
      },
      {
        q: "Is Golden Pages still worth listing on?",
        a: "Yes, as a citation. It is a trusted Irish directory, and an accurate listing helps confirm your business details. It is one part of a wider listings and reviews plan.",
      },
    ],
  },

  netherlands: {
    overview: [
      "Google is the main search engine in the Netherlands, and Dutch people tend to search in Dutch even though many speak English well. Apple Maps is common on iPhones and Bing has a smaller share. Distances are short and cities are dense, so competition in the map pack is intense and very local, often down to the neighbourhood (wijk).",
      "People compare businesses through Google reviews, sector platforms such as Werkspot for home improvement and ZorgkaartNederland for care, and practical sites like Openingstijden.nl. The country is divided into 12 provinces, but searches are mostly city or neighbourhood based. In Amsterdam, Rotterdam and The Hague there is also real English-language demand from international residents.",
    ],
    directories: [
      { name: "Openingstijden.nl", why: "Widely used to check opening hours and contact details for local shops and services." },
      { name: "Werkspot", why: "A major platform for finding and reviewing contractors and home improvement professionals." },
      { name: "De Telefoongids", why: "A long-standing Dutch business directory and citation source." },
      { name: "ZorgkaartNederland", why: "The main review site for healthcare providers, clinics and practitioners." },
      { name: "Kiyoh", why: "A Dutch review platform many businesses use to collect and show verified reviews." },
    ],
    language:
      "Write in Dutch for local intent, with English pages only where you serve international residents. Use common Dutch terms such as loodgieter (plumber), schilder (painter) and tandarts (dentist). Addresses follow street name then number (for example, Damrak 1), then postcode in the format 1234 AB and city. Phone numbers use area codes such as 020 for Amsterdam and 010 for Rotterdam, with +31 internationally. Show your KvK (Chamber of Commerce) number on the site, as Dutch customers expect it.",
    rules:
      "GDPR (AVG in Dutch) applies, overseen by the Autoriteit Persoonsgegevens, and Dutch rules on cookies require consent for tracking. EU consumer law, including the Omnibus Directive, requires transparency about whether and how reviews are verified. The ACM (Authority for Consumers and Markets) enforces against misleading practices, including fake reviews. Advertising claims fall under the Dutch Advertising Code (Reclamecode). Healthcare providers have extra rules on how they advertise.",
    tips: [
      "Build neighbourhood-level pages in big cities, as Dutch map results can change a lot within a few kilometres.",
      "Keep Openingstijden.nl and Google hours aligned, including holiday hours such as King's Day.",
      "Show your KvK number and full business details on the site, which matches Dutch expectations of transparency.",
      "Offer English pages in Amsterdam, The Hague and Eindhoven, where many international residents search in English.",
    ],
    faqs: [
      {
        q: "Should my Dutch website also be in English?",
        a: "It depends on your customers. In Amsterdam, The Hague, Eindhoven and Rotterdam, English pages can bring enquiries from international residents. For most local services, Dutch pages should come first.",
      },
      {
        q: "Is Werkspot worth it for Dutch contractors?",
        a: "Many homeowners use it to find and compare contractors, so a good profile with reviews can bring leads. Keep your details consistent with Google and your website.",
      },
      {
        q: "Why does my ranking change so much across Amsterdam?",
        a: "The map pack depends on distance from the searcher, and Dutch cities are dense with competitors. A few kilometres can mean a very different set of results, which is why neighbourhood pages and local reviews matter.",
      },
    ],
  },

  germany: {
    overview: [
      "Google dominates search in Germany, and almost all local searches are in German. Apple Maps is used on iPhones, and Bing has a smaller share. Germans tend to be careful buyers, so detailed, accurate information, clear prices where possible and a proper Impressum all help conversion.",
      "Reviews matter a lot, and many Germans also trust traditional directories such as Gelbe Seiten and Das Örtliche, which have strong apps and websites. Germany has 16 federal states (Länder), and big cities like Berlin, Hamburg and Munich are split into districts (Bezirke or Stadtteile) that people search by name.",
    ],
    directories: [
      { name: "Gelbe Seiten", why: "Germany's best-known business directory, still trusted and widely used." },
      { name: "Das Örtliche", why: "A major local directory that feeds business data to other services." },
      { name: "11880.com", why: "A business directory with reviews that adds another solid citation." },
      { name: "ProvenExpert", why: "A popular review platform for service businesses, often shown in search results." },
      { name: "Jameda", why: "The main review and booking site for doctors and dentists in Germany." },
      { name: "MyHammer", why: "A well-known platform for finding and reviewing tradespeople." },
    ],
    language:
      "Write in German, using formal Sie for most professional services. Use local terms such as Handwerker (tradesperson), Sanitär (plumbing), Zahnarzt (dentist) and Rechtsanwalt (lawyer). Addresses follow street then number (for example, Hauptstraße 12), then a five-digit postcode before the city. Phone numbers use area codes such as 030 for Berlin and 089 for Munich, with +49 internationally. Keep umlauts and ß consistent, and do not switch between Straße and Strasse across listings.",
    rules:
      "Most commercial websites in Germany need an Impressum with the business name, address and contact details, under the Digitale-Dienste-Gesetz (DDG). GDPR (DSGVO) applies, and cookie consent is strictly enforced. Fake or bought reviews can breach the Unfair Competition Act (UWG), and EU rules require you to say whether reviews are verified. Health providers face extra advertising rules under the Heilmittelwerbegesetz, and lawyers follow their professional code.",
    tips: [
      "Make sure your Impressum and privacy policy are complete and linked from every page; German users and competitors notice if they are missing.",
      "Target districts (Stadtteile) in big cities, such as Prenzlauer Berg in Berlin or Schwabing in Munich.",
      "Keep Gelbe Seiten, Das Örtliche and Google details identical, as these directories share data with other platforms.",
      "Write detailed service pages; German buyers expect specifics like process, timescales and qualifications such as Meister status.",
    ],
    faqs: [
      {
        q: "Do I need an Impressum on my German website?",
        a: "Most businesses offering services online in Germany do. It should list your business name, address, contact details and, where relevant, registration and VAT numbers. Missing information can lead to legal warnings from competitors.",
      },
      {
        q: "Are Gelbe Seiten and Das Örtliche still relevant?",
        a: "Yes. Both are trusted brands in Germany and their listings appear in search results and apps. They are also important citation sources for consistent business data.",
      },
      {
        q: "Can I ask customers for Google reviews in Germany?",
        a: "Yes, you can ask for honest reviews. Do not buy reviews or offer rewards for positive ones, and avoid sending marketing emails without proper consent under GDPR.",
      },
    ],
  },

  switzerland: {
    overview: [
      "Google is dominant in Switzerland, but the search landscape is split by language. German-speaking Switzerland, French-speaking Romandy and Italian-speaking Ticino search in their own languages, and Romansh is spoken in parts of Graubünden. Apple Maps is widely used, and Swiss directories like local.ch and search.ch are part of everyday life.",
      "Switzerland is divided into 26 cantons, and many rules and customer expectations vary by canton. Swiss customers value precision, quality and trust, so complete listings, accurate hours and good reviews matter. Bilingual cities like Biel/Bienne and Fribourg need both German and French content.",
    ],
    directories: [
      { name: "local.ch", why: "One of the most used Swiss directories, with a strong app and reviews." },
      { name: "search.ch", why: "A popular Swiss directory and map service that shares data with local.ch." },
      { name: "ProvenExpert", why: "A review platform used by many service businesses in German-speaking regions." },
      { name: "OneDoc", why: "A Swiss platform for finding and booking doctors and therapists." },
      { name: "Tripadvisor", why: "Key for hotels, restaurants and tourism businesses in a strong tourism market." },
    ],
    language:
      "Match the language to the canton: German for Zurich, Bern and Basel, French for Geneva and Lausanne, Italian for Lugano. Swiss Standard German does not use ß, so write Strasse, not Straße. Addresses use street then number, then a four-digit postcode before the town. Phone numbers use area codes such as 044 for Zurich and 022 for Geneva, with +41 internationally. Use local terms such as Sanitär (plumbing) in German or plombier in French, and keep business names identical across all language versions.",
    rules:
      "Switzerland is not in the EU and has its own revised Federal Act on Data Protection (FADP), in force since 2023. Swiss businesses serving EU customers may also need to follow GDPR. The Swiss Unfair Competition Act (UWG) covers misleading advertising, and online sellers must give clear business identification. Fake reviews can count as unfair competition. Health and legal professionals follow their own cantonal and professional advertising rules.",
    tips: [
      "Build separate language versions for each region you serve, with hreflang tags and matching listings on local.ch and search.ch.",
      "Target cantons and towns, not just the country, since many customers search by town or canton name.",
      "Keep listings accurate in all languages, because Swiss customers notice small errors and expect precision.",
      "For bilingual towns, make sure both language versions are available and link to each other.",
    ],
    faqs: [
      {
        q: "Do I need German, French and Italian pages in Switzerland?",
        a: "Only for the regions you serve. A Zurich-only business can focus on German, while a business serving Geneva and Zurich needs French and German. Translate properly, not with raw machine output.",
      },
      {
        q: "Does GDPR apply to Swiss businesses?",
        a: "Switzerland has its own data protection law, the FADP. If you offer services to people in the EU, GDPR may also apply. Many Swiss businesses design their privacy practices to meet both.",
      },
      {
        q: "Is local.ch still important?",
        a: "Yes. local.ch and search.ch are widely used in Switzerland and are key sources for accurate business data. An up-to-date listing there supports your Google visibility.",
      },
    ],
  },

  france: {
    overview: [
      "Google is the leading search engine in France, and nearly all local searches are in French. Apple Maps is common on iPhones, and Bing has a smaller share. French customers often check PagesJaunes alongside Google, and sector platforms such as Doctolib for health and TheFork for restaurants strongly shape choices.",
      "France is divided into regions, départements and communes, and many people search by city, département number or, in Paris, Lyon and Marseille, by arrondissement. A business in Paris often needs pages for the arrondissements it serves, not one page for the whole city.",
    ],
    directories: [
      { name: "PagesJaunes", why: "France's best-known directory, trusted by consumers and a core citation." },
      { name: "Doctolib", why: "The main booking platform for doctors, dentists and health professionals in France." },
      { name: "TheFork (LaFourchette)", why: "A major restaurant booking and review platform." },
      { name: "Tripadvisor", why: "Important for restaurants, hotels and tourism businesses." },
      { name: "Avis Vérifiés (Skeepers)", why: "A widely used French review collection service that displays verified reviews." },
    ],
    language:
      "Write in French, using formal vous. Use local terms such as artisan (tradesperson), plombier (plumber), avocat (lawyer) and dentiste. Addresses put the number before the street (for example, 12 rue de Rivoli), then a five-digit postcode and city, with Paris arrondissements as 75001 to 75020. Phone numbers are ten digits written in pairs, such as 01 23 45 67 89, with +33 internationally. Keep accents consistent across listings.",
    rules:
      "GDPR applies, and the CNIL is strict about cookie consent, so trackers must not load before consent. French websites must show legal notices (mentions légales) with business details. Fake reviews are a misleading practice under French consumer law, and EU rules require you to say how reviews are checked. The Loi Toubon requires French in advertising aimed at French consumers. Health professionals face strict limits on advertising under their professional codes.",
    tips: [
      "Build pages for the arrondissements or communes you actually serve, rather than one page for a whole city.",
      "Include mentions légales and a clear privacy page, since French users and regulators expect them.",
      "Use sector platforms like Doctolib or TheFork if relevant, and keep details matched with Google.",
      "Write natural French for each market; regional terms and place names help pages feel genuinely local.",
    ],
    faqs: [
      {
        q: "Is PagesJaunes still worth it in France?",
        a: "Yes. It remains a trusted French brand, and its listings often appear in search results. It is also a key citation for consistent business data.",
      },
      {
        q: "Do I need separate pages for Paris arrondissements?",
        a: "If you serve several, yes. Paris customers often search by arrondissement, and map results change across the city. Pages for each area you cover help both organic and map visibility.",
      },
      {
        q: "Can a doctor or dentist use reviews in marketing in France?",
        a: "Health professionals face strict advertising rules under their professional codes. They can manage their online profiles, but should avoid promotional use of reviews and check their professional body's guidance.",
      },
    ],
  },

  belgium: {
    overview: [
      "Google is the main search engine in Belgium, but search behaviour is split by language. Flanders searches mostly in Dutch, Wallonia in French, and Brussels is officially bilingual with many international residents searching in English too. There is also a small German-speaking community in the east.",
      "Belgium has three regions (Flanders, Wallonia and Brussels-Capital) and ten provinces. Customers compare businesses on Google, Golden Pages and sector platforms, and word of mouth is strong in smaller cities. A business serving both Flanders and Wallonia usually needs separate Dutch and French pages.",
    ],
    directories: [
      { name: "Golden Pages (Gouden Gids / Pages d'Or)", why: "Belgium's main business directory, available in Dutch and French." },
      { name: "Infobel", why: "A Belgian directory and business data source that supports consistent citations." },
      { name: "Trustpilot", why: "Widely used for service and ecommerce reviews across Belgium." },
      { name: "TheFork", why: "A key booking and review platform for restaurants in Belgian cities." },
      { name: "Tripadvisor", why: "Important for restaurants, hotels and tourism in cities like Bruges and Ghent." },
    ],
    language:
      "Use Dutch for Flanders, French for Wallonia, and both for Brussels. Belgian Dutch and French have their own terms, so avoid copying content written for the Netherlands or France. Many cities have two names (for example, Antwerpen and Anvers, Liège and Luik), so use the right one for each language version. Addresses use street then number, then a four-digit postcode and city. Phone numbers use area codes such as 02 for Brussels, with +32 internationally. Show your enterprise number (KBO/BCE) on the site.",
    rules:
      "GDPR applies, overseen by the Belgian Data Protection Authority, with strict cookie consent expectations. Belgian economic law bans unfair commercial practices, including fake reviews, and EU rules require transparency on review checks. Businesses must show their enterprise number on websites and invoices. Language laws can affect communication with public bodies and employees. Health and legal professionals follow their own advertising rules.",
    tips: [
      "Create Dutch and French versions of key pages with hreflang tags, and use the right city name in each.",
      "For Brussels, consider English pages as well, given the large international community.",
      "Keep your KBO/BCE enterprise number and business name consistent everywhere.",
      "Ask customers for reviews in their own language to build trust in both regions.",
    ],
    faqs: [
      {
        q: "Do I need both Dutch and French pages in Belgium?",
        a: "If you serve both Flanders and Wallonia, or Brussels, yes. Customers search in their own language, and one-language sites often miss half the market.",
      },
      {
        q: "Can I use content from my Dutch or French website?",
        a: "Use it as a starting point only. Belgian Dutch and French differ in terms and tone, and local place names and details should be specific to Belgium.",
      },
      {
        q: "Which city names should I use, Dutch or French?",
        a: "Use the name that matches the language of the page. A Dutch page should say Antwerpen and Luik, while a French page should say Anvers and Liège.",
      },
    ],
  },

  austria: {
    overview: [
      "Google is dominant in Austria, and local searches are in German, often with Austrian terms. Apple Maps is used on iPhones and Bing has a smaller role. Herold is a trusted local directory, and many Austrians check it alongside Google.",
      "Austria has nine federal states (Bundesländer), and Vienna is divided into 23 numbered districts (Bezirke) that people often search by name or number. Tourism plays a big role in Salzburg, Tyrol and other regions, so hospitality businesses also need to serve international visitors searching in English.",
    ],
    directories: [
      { name: "Herold", why: "Austria's main business directory and a key citation source." },
      { name: "WKO Firmen A-Z", why: "The Austrian Economic Chamber's business directory, which adds trust and accuracy." },
      { name: "DocFinder", why: "A popular site for finding and reviewing doctors in Austria." },
      { name: "ProvenExpert", why: "A review platform used by many service businesses in German-speaking markets." },
      { name: "Tripadvisor", why: "Essential for hotels, restaurants and tourism businesses." },
    ],
    language:
      "Write in German with Austrian terms where they differ, such as Installateur (plumber), Rauchfangkehrer (chimney sweep) and Jänner (January). Addresses use street then number, then a four-digit postcode and city. Vienna postcodes reflect the district (for example, 1010 for the first district). Phone numbers use area codes such as 01 for Vienna and 0662 for Salzburg, with +43 internationally. Keep umlauts and ß consistent across listings.",
    rules:
      "Austrian websites must show business information (Impressum and disclosure under media and e-commerce law), including name, address and registration details. GDPR (DSGVO) applies, with cookie consent required. Unfair competition law covers misleading advertising and fake reviews, and EU rules require transparency on review checks. Health professionals follow strict advertising rules from their professional chambers.",
    tips: [
      "Target Vienna districts by name and number, as many people search that way.",
      "Use Austrian terms, not German ones, so pages feel local to Austrian customers.",
      "Keep your Herold and WKO listings accurate and matched with Google.",
      "For tourism areas, add English pages and update seasonal hours for ski and summer seasons.",
    ],
    faqs: [
      {
        q: "Can I use my German website content in Austria?",
        a: "Only as a base. Austrian German has different terms, and customers notice. Local pages should use Austrian terms, place names and business details.",
      },
      {
        q: "Is Herold still important?",
        a: "Yes. Herold is a trusted Austrian directory and its listings appear in search results. It is a key source of consistent business data.",
      },
      {
        q: "Do I need an Impressum in Austria?",
        a: "Yes, most commercial websites need business disclosure details, including name, address and registration information. Check that yours is complete and easy to find.",
      },
    ],
  },

  denmark: {
    overview: [
      "Google is the dominant search engine in Denmark, and mobile use is very high. Apple Maps is widely used on iPhones and Bing has a smaller share. Danish customers expect complete, accurate listings with good photos and clear opening hours.",
      "Reviews are central to trust, and Trustpilot was founded in Denmark and is well known there. Denmark is divided into five regions and 98 municipalities, but most searches are by city or town. Copenhagen, Aarhus and Odense are the main markets, and smaller towns often serve wide surrounding areas.",
    ],
    directories: [
      { name: "Krak", why: "A long-standing Danish directory and map service with high trust." },
      { name: "De Gule Sider", why: "A major Danish business directory and citation source." },
      { name: "Trustpilot", why: "Danish-founded and widely used, so ratings carry real weight with local customers." },
      { name: "Anmeld Håndværker", why: "A Danish review site for tradespeople and home services." },
      { name: "3byggetilbud.dk", why: "A platform homeowners use to get quotes from builders and tradespeople." },
    ],
    language:
      "Write in Danish for local intent, with English pages only if you serve international residents in Copenhagen or Aarhus. Use local terms such as VVS (plumbing and heating), tømrer (carpenter) and elektriker. Addresses use street then number, then a four-digit postcode and town. Danish phone numbers are eight digits with no area codes, often written in pairs (for example, 12 34 56 78), with +45 internationally. Show your CVR number on the site.",
    rules:
      "GDPR applies, overseen by Datatilsynet, with cookie consent required. The Danish Marketing Practices Act covers misleading advertising, including fake reviews, and the Consumer Ombudsman enforces it. EU rules require transparency on how reviews are verified. Marketing emails and texts generally need prior consent. Health professionals follow their own advertising rules.",
    tips: [
      "Make your Google profile complete with photos and accurate hours, since mobile users decide quickly.",
      "Collect Trustpilot reviews as well as Google, as many Danes recognise and trust Trustpilot ratings.",
      "Show your CVR number and full business details, which Danish customers expect.",
      "Build pages for the towns around your base, as many Danish businesses serve wide areas.",
    ],
    faqs: [
      {
        q: "Is Trustpilot important for Danish local businesses?",
        a: "Yes for many sectors. Trustpilot is Danish-founded and widely recognised. Google reviews still matter most for the map pack, so collect both.",
      },
      {
        q: "Should I use Krak or De Gule Sider?",
        a: "Both. They are key Danish directories, and accurate listings on both help keep your business data consistent across the web.",
      },
      {
        q: "Do I need English pages in Denmark?",
        a: "Only if you serve international customers. Most Danes search in Danish for local services, so Danish pages should come first.",
      },
    ],
  },

  sweden: {
    overview: [
      "Google dominates search in Sweden, and most local searches are in Swedish. Apple Maps is common on iPhones and Bing has a smaller share. Swedes often use Hitta.se and Eniro to look up businesses and phone numbers, and both are well known.",
      "Sweden has 21 counties (län) and 290 municipalities, but most searches are by city, town or district. Stockholm, Gothenburg and Malmö are split into districts that people search by name. Reviews and clear information matter, and many homeowners use quote platforms for trades.",
    ],
    directories: [
      { name: "Hitta.se", why: "One of Sweden's most used directories for finding businesses and people." },
      { name: "Eniro", why: "A long-standing Swedish directory and search service." },
      { name: "Reco.se", why: "A Swedish review site for local businesses and tradespeople." },
      { name: "Offerta", why: "A platform homeowners use to get quotes from local contractors." },
      { name: "Allabolag.se", why: "A company information site customers use to check business details." },
    ],
    language:
      "Write in Swedish, using local terms such as rörmokare (plumber), VVS, elektriker and tandläkare (dentist). Mention ROT and RUT deductions where relevant, as customers look for them. Addresses use street then number, then a five-digit postcode written with a space (for example, 111 22) and city. Phone numbers use area codes such as 08 for Stockholm and 031 for Gothenburg, with +46 internationally. Keep å, ä and ö correct across all listings.",
    rules:
      "GDPR applies, overseen by IMY, with cookie consent required. The Swedish Marketing Practices Act covers misleading advertising and fake reviews, enforced by the Consumer Agency (Konsumentverket). EU rules require transparency on review checks. Marketing emails and texts generally need consent. Health professionals follow their own advertising rules.",
    tips: [
      "Mention ROT or RUT deductions on relevant service pages, as Swedish customers often search for them.",
      "Keep Hitta.se, Eniro and Google listings identical, including correct Swedish characters.",
      "Build district pages in big cities, such as Södermalm in Stockholm.",
      "Collect reviews on Reco.se as well as Google, especially for trades.",
    ],
    faqs: [
      {
        q: "Should I mention ROT and RUT on my website?",
        a: "If your services qualify, yes. Many customers search for ROT or RUT services, and clear information helps them choose you.",
      },
      {
        q: "Are Hitta.se and Eniro still used?",
        a: "Yes. Both are well known in Sweden and used to look up businesses. Accurate listings help customers and support consistent business data.",
      },
      {
        q: "Do Swedish characters matter for local SEO?",
        a: "Yes. Misspelt names like Malmo instead of Malmö can cause mismatched listings. Keep å, ä and ö correct everywhere.",
      },
    ],
  },

  norway: {
    overview: [
      "Google is dominant in Norway, and most local searches are in Norwegian. Apple Maps is common on iPhones and Bing has a smaller share. Norwegians also use Gule Sider and 1881 to find businesses and phone numbers.",
      "Norway has counties (fylker) and municipalities, with large distances between towns outside the main cities. Many businesses serve wide rural areas, so service area and town pages matter. Reviews and trust are central, and quote platforms like Mittanbud are popular for trades.",
    ],
    directories: [
      { name: "Gule Sider", why: "Norway's best-known business directory and a core citation." },
      { name: "1881", why: "A widely used Norwegian directory and phone lookup service." },
      { name: "Mittanbud", why: "A popular platform for getting quotes from tradespeople." },
      { name: "Legelisten.no", why: "A review site for doctors and health providers in Norway." },
      { name: "Proff.no", why: "A company information site customers use to check businesses." },
    ],
    language:
      "Write in Norwegian, usually Bokmål, though Nynorsk is common in parts of western Norway. Use local terms such as rørlegger (plumber), elektriker, tømrer (carpenter) and tannlege (dentist). In Oslo and Bergen, also cover the bydeler (city districts) people search by name, such as Grünerløkka or Frogner. Addresses use street then number, then a four-digit postcode and town. Norwegian phone numbers are eight digits with no area codes, with +47 internationally. Keep æ, ø and å correct across listings.",
    rules:
      "Norway is not in the EU but is in the EEA, so GDPR applies, overseen by Datatilsynet. The Marketing Control Act covers misleading advertising and fake reviews, enforced by the Consumer Authority. Marketing emails and texts generally need consent. Health professionals follow strict advertising rules.",
    tips: [
      "Create town pages for the wide areas many Norwegian businesses serve.",
      "Keep Gule Sider, 1881 and Google listings identical, with correct Norwegian characters.",
      "Use Mittanbud for trades leads and collect reviews there and on Google.",
      "Consider Nynorsk content if you serve areas where it is common.",
    ],
    faqs: [
      {
        q: "Does GDPR apply in Norway?",
        a: "Yes. Norway is in the EEA, so GDPR applies, overseen by the Norwegian Data Protection Authority.",
      },
      {
        q: "Should I write in Bokmål or Nynorsk?",
        a: "Bokmål is most common, but Nynorsk is used in parts of western Norway. Match the language your customers use.",
      },
      {
        q: "Is Mittanbud worth it for Norwegian tradespeople?",
        a: "Many homeowners use it to get quotes, so it can bring leads. Keep your details consistent with Google and your website.",
      },
    ],
  },

  finland: {
    overview: [
      "Google is the main search engine in Finland, and most local searches are in Finnish. Finland is officially bilingual, with Swedish spoken along the coast and in some cities. Apple Maps is common on iPhones and Bing has a smaller share.",
      "Finland is divided into regions (maakunnat) and municipalities. Customers value accurate information, especially opening hours, and use Fonecta's directories alongside Google. Reviews matter, but Finns also tend to prefer clear, factual information over heavy marketing language. Seasonal patterns are strong, with demand for services shifting between the long winter and the short summer.",
    ],
    directories: [
      { name: "Fonecta", why: "Finland's main business directory provider and a core citation source." },
      { name: "Finder.fi", why: "A Fonecta service customers use to find businesses and check details." },
      { name: "YTJ (Business Information System)", why: "The official register that confirms your business ID (Y-tunnus) and details." },
      { name: "Tripadvisor", why: "Important for restaurants, hotels and tourism businesses." },
      { name: "Trustpilot", why: "Used by many Finnish service and ecommerce businesses for reviews." },
    ],
    language:
      "Write in Finnish, with Swedish pages for bilingual areas such as parts of Helsinki, Espoo, Vaasa and Turku. Use local terms such as putkimies (plumber), sähköasentaja (electrician) and hammaslääkäri (dentist). Addresses use street then number, then a five-digit postcode and city. Phone numbers use area codes such as 09 for Helsinki, with +358 internationally. Show your Y-tunnus (business ID) on the site.",
    rules:
      "GDPR applies, overseen by the Data Protection Ombudsman, with cookie consent required. The Consumer Protection Act covers misleading marketing and fake reviews, enforced by the Finnish Competition and Consumer Authority. EU rules require transparency on review checks. Marketing emails and texts generally need consent. Health professionals follow their own advertising rules.",
    tips: [
      "Add Swedish pages if you serve bilingual coastal areas or Swedish-speaking customers.",
      "Keep opening hours accurate across Google and Fonecta, as Finnish customers rely on them.",
      "Show your Y-tunnus and full business details, which Finnish customers expect.",
      "Write factual, clear content rather than heavy marketing language.",
    ],
    faqs: [
      {
        q: "Do I need Swedish pages in Finland?",
        a: "Only if you serve Swedish-speaking areas or customers. In bilingual cities and coastal regions, Swedish pages can help reach more customers.",
      },
      {
        q: "Is Fonecta important for local SEO?",
        a: "Yes. Fonecta is a key source of business data in Finland, and accurate listings help keep your information consistent.",
      },
      {
        q: "Should I show my Y-tunnus on my website?",
        a: "Yes. It builds trust and helps customers and platforms confirm your business details.",
      },
    ],
  },

  spain: {
    overview: [
      "Google dominates search in Spain, and most local searches are in Spanish. Catalan, Basque, Galician and Valencian are co-official in their regions, and many people search in those languages. Apple Maps is common on iPhones and Bing has a smaller share.",
      "Spain has 17 autonomous communities and 50 provinces. Major cities like Madrid and Barcelona are split into districts (distritos) and neighbourhoods (barrios) that people search by name. Tourism is huge, so many businesses also serve visitors searching in English, German or French.",
    ],
    directories: [
      { name: "Páginas Amarillas", why: "Spain's best-known business directory and a core citation." },
      { name: "Habitissimo", why: "A major platform for finding and reviewing home improvement professionals." },
      { name: "Doctoralia", why: "The main site for finding and booking doctors and specialists." },
      { name: "TheFork (ElTenedor)", why: "A key restaurant booking and review platform." },
      { name: "Tripadvisor", why: "Essential for restaurants, hotels and tourism businesses." },
    ],
    language:
      "Write in Spanish, with Catalan pages for Catalonia, Basque for the Basque Country and Galician for Galicia where you serve local customers. Use Spain's terms, such as fontanero (plumber), abogado (lawyer) and dentista, not Latin American ones. Addresses put the street type first (for example, Calle Mayor 10), then a five-digit postcode and city. Phone numbers are nine digits, with +34 internationally.",
    rules:
      "GDPR applies, overseen by the AEPD, with strict cookie consent. The LSSI requires websites to show business information. Spanish consumer law covers misleading advertising and fake reviews, and EU rules require transparency on review checks. Health professionals follow their own advertising rules.",
    tips: [
      "Add regional language pages in Catalonia, the Basque Country and Galicia.",
      "Build pages for barrios and districts in Madrid and Barcelona.",
      "Add English pages in tourist areas like Málaga, Alicante and Palma.",
      "Use sector platforms like Doctoralia or Habitissimo and keep details matched with Google.",
    ],
    faqs: [
      {
        q: "Do I need Catalan pages in Barcelona?",
        a: "It helps. Many people in Catalonia search in Catalan, and Catalan pages show local commitment.",
      },
      {
        q: "Should I use Latin American Spanish terms?",
        a: "No. Use Spain's terms, such as fontanero instead of plomero. Spanish customers notice the difference.",
      },
      {
        q: "Is Habitissimo worth it?",
        a: "Many homeowners use it to find professionals, so it can bring leads. Keep your details consistent with Google.",
      },
    ],
  },

  italy: {
    overview: [
      "Google is dominant in Italy, and most local searches are in Italian. Apple Maps is common on iPhones and Bing has a smaller share. Italians rely heavily on personal recommendations, so reviews and reputation matter.",
      "Italy has 20 regions, each split into provinces, and the north and south differ a lot in how people choose businesses. Big cities like Rome and Milan are split into districts (municipi or quartieri) that people search by name. Tourism is important, so many businesses also serve visitors searching in English.",
    ],
    directories: [
      { name: "PagineGialle", why: "Italy's best-known business directory and a core citation." },
      { name: "PagineBianche", why: "A widely used Italian directory for finding businesses and phone numbers." },
      { name: "MioDottore", why: "The main site for finding and booking doctors and specialists." },
      { name: "ProntoPro", why: "A platform for finding and reviewing local professionals." },
      { name: "TheFork", why: "A key restaurant booking and review platform." },
      { name: "Tripadvisor", why: "Essential for restaurants, hotels and tourism businesses." },
    ],
    language:
      "Write in Italian, using local terms such as idraulico (plumber), elettricista and commercialista (accountant). Addresses put the street type first (for example, Via Roma 10), then a five-digit postcode (CAP) and city with province code. Phone numbers keep the leading zero (such as 06 for Rome and 02 for Milan), with +39 internationally. Show your Partita IVA (VAT number) on the site.",
    rules:
      "GDPR applies, overseen by the Garante, with strict cookie consent. Italian businesses must show their Partita IVA on websites. Consumer law covers misleading advertising and fake reviews, enforced by AGCM. EU rules require transparency on review checks. Health professionals follow strict advertising rules.",
    tips: [
      "Show your Partita IVA on every page, usually in the footer.",
      "Build pages for districts in Rome and Milan.",
      "Add English pages in tourist cities like Florence and Rome.",
      "Use sector platforms like MioDottore or ProntoPro and keep details matched with Google.",
    ],
    faqs: [
      {
        q: "Do I need to show my Partita IVA online?",
        a: "Yes. Italian businesses must show their VAT number on their websites.",
      },
      {
        q: "Are PagineGialle and PagineBianche still used?",
        a: "Yes. Both are well known in Italy and help keep your business data consistent.",
      },
      {
        q: "Should I write for each city differently?",
        a: "Yes. Local terms, landmarks and districts differ, and pages that reflect the city feel more trustworthy.",
      },
    ],
  },

  portugal: {
    overview: [
      "Google is dominant in Portugal, and most local searches are in Portuguese. Apple Maps is common on iPhones and Bing has a smaller share. Lisbon, Porto and the Algarve have strong international demand from tourists and foreign residents.",
      "Portugal has districts, municipalities (concelhos) and parishes (freguesias). People search by city and often by parish in Lisbon and Porto. Reviews and reputation matter, and Portal da Queixa is a well-known place where customers post complaints. Funchal (Madeira) and the Azores are island markets with their own seasonal and tourism patterns.",
    ],
    directories: [
      { name: "Páginas Amarelas", why: "Portugal's best-known business directory and a core citation." },
      { name: "Zaask", why: "A popular platform for finding and reviewing local professionals." },
      { name: "Fixando", why: "A platform homeowners use to request quotes from service providers." },
      { name: "Portal da Queixa", why: "A well-known complaints platform; how you respond affects reputation." },
      { name: "Tripadvisor", why: "Essential for restaurants, hotels and tourism businesses." },
    ],
    language:
      "Write in European Portuguese, not Brazilian. Use terms such as canalizador (plumber, not encanador), advogado and dentista. Addresses put the street type first (for example, Rua Augusta 10), then a postcode in the format 1234-567 and city. Phone numbers are nine digits, with area codes such as 21 for Lisbon and 22 for Porto, and +351 internationally. Show your NIF on the site.",
    rules:
      "GDPR applies, overseen by the CNPD, with cookie consent required. Businesses must offer the Livro de Reclamações (complaints book), including the electronic version. Consumer law covers misleading advertising and fake reviews, and EU rules require transparency on review checks. Health professionals follow their own advertising rules.",
    tips: [
      "Use European Portuguese terms, not Brazilian ones.",
      "Link to the electronic Livro de Reclamações on your website.",
      "Add English pages in Lisbon, Porto and the Algarve for international customers.",
      "Respond to Portal da Queixa complaints quickly and politely.",
    ],
    faqs: [
      {
        q: "Should I use European or Brazilian Portuguese?",
        a: "European Portuguese. Portuguese customers notice Brazilian terms and spelling.",
      },
      {
        q: "Do I need to show the Livro de Reclamações online?",
        a: "Many businesses must provide access to the electronic complaints book, usually via a link on their website.",
      },
      {
        q: "Are English pages worth it in Portugal?",
        a: "In Lisbon, Porto and the Algarve, yes. Many foreign residents and tourists search in English.",
      },
    ],
  },
};
