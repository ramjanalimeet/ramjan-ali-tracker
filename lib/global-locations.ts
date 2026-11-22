export type GlobalCountry = {
  slug: string;
  name: string;
  region: "North America" | "Europe" | "Asia" | "Oceania" | "Africa" | "South America";
  market: string;
  platforms: string[];
  sectors: string[];
  cities: string[];
};

/**
 * Priority markets requested for international location targeting.
 * Each market has ten distinct city/locality targets. City URLs are nested under
 * the country so similarly named places never compete for the same search intent.
 */
export const GLOBAL_COUNTRIES: GlobalCountry[] = [
  {
    slug: "united-states",
    name: "United States",
    region: "North America",
    market: "State, metro and neighbourhood intent all influence how customers compare nearby businesses.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Yelp"],
    sectors: ["home services", "dental and healthcare", "legal services", "restaurants"],
    cities: ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin"],
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    market: "Province, city and neighbourhood searches need locally relevant pages, consistent listings and Canadian spelling.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "YellowPages.ca"],
    sectors: ["home services", "clinics", "law firms", "automotive businesses"],
    cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Halifax"],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    region: "Europe",
    market: "Postcode coverage, town-level relevance and trusted UK citations shape local organic and map visibility.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Yell"],
    sectors: ["trade businesses", "dentists", "solicitors", "hospitality"],
    cities: ["London", "Birmingham", "Manchester", "Leeds", "Glasgow", "Liverpool", "Bristol", "Edinburgh", "Sheffield", "Nottingham"],
  },
  {
    slug: "ireland",
    name: "Ireland",
    region: "Europe",
    market: "County, city and nearby-town relevance matters in a market where local trust and reviews strongly shape enquiries.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Golden Pages"],
    sectors: ["trades", "healthcare", "professional services", "hospitality"],
    cities: ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Kilkenny", "Wexford"],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Europe",
    market: "Compact service areas and strong city-level competition make precise landing pages and review signals important.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Openingstijden.nl"],
    sectors: ["professional services", "clinics", "home improvement", "restaurants"],
    cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Groningen", "Tilburg", "Almere", "Breda", "Nijmegen"],
  },
  {
    slug: "germany",
    name: "Germany",
    region: "Europe",
    market: "City and district searches reward accurate business data, German-language relevance and credible local mentions.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Das Örtliche"],
    sectors: ["healthcare", "professional services", "automotive", "hospitality"],
    cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Bremen"],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    region: "Europe",
    market: "Multilingual search behaviour and canton-level competition require carefully matched language and location signals.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "local.ch"],
    sectors: ["private healthcare", "financial services", "legal services", "hospitality"],
    cities: ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel/Bienne"],
  },
  {
    slug: "france",
    name: "France",
    region: "Europe",
    market: "French-language service pages, arrondissement or neighbourhood relevance and consistent citations support local discovery.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "PagesJaunes"],
    sectors: ["healthcare", "legal services", "beauty", "restaurants"],
    cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Lille"],
  },
  {
    slug: "belgium",
    name: "Belgium",
    region: "Europe",
    market: "Dutch, French and bilingual searches vary by region, so language and city intent must be separated clearly.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Golden Pages Belgium"],
    sectors: ["professional services", "clinics", "home services", "hospitality"],
    cities: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Leuven", "Namur", "Mons", "Mechelen"],
  },
  {
    slug: "austria",
    name: "Austria",
    region: "Europe",
    market: "German-language local intent, city districts and tourism-driven discovery create distinct search opportunities.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Herold"],
    sectors: ["healthcare", "professional services", "home improvement", "hospitality"],
    cities: ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "St. Pölten", "Dornbirn"],
  },
  {
    slug: "denmark",
    name: "Denmark",
    region: "Europe",
    market: "High mobile usage and compact urban service areas make complete profiles and strong review quality especially visible.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Krak"],
    sectors: ["clinics", "professional services", "home services", "restaurants"],
    cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde"],
  },
  {
    slug: "sweden",
    name: "Sweden",
    region: "Europe",
    market: "City, neighbourhood and Swedish-language service intent should be supported by trusted local business information.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Eniro"],
    sectors: ["healthcare", "home services", "professional services", "hospitality"],
    cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping"],
  },
  {
    slug: "norway",
    name: "Norway",
    region: "Europe",
    market: "Local trust, Norwegian-language relevance and accurate service areas help businesses compete beyond broad national results.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Gule Sider"],
    sectors: ["home services", "healthcare", "professional services", "hospitality"],
    cities: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Ålesund"],
  },
  {
    slug: "finland",
    name: "Finland",
    region: "Europe",
    market: "Finnish and Swedish language signals, accurate opening information and city relevance support local conversion.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Fonecta"],
    sectors: ["healthcare", "home services", "automotive", "restaurants"],
    cities: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Kuopio", "Lahti", "Pori"],
  },
  {
    slug: "spain",
    name: "Spain",
    region: "Europe",
    market: "City, neighbourhood and multilingual tourism searches need distinct pages rather than one national campaign.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Páginas Amarillas"],
    sectors: ["healthcare", "legal services", "property services", "hospitality"],
    cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Bilbao", "Alicante"],
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Europe",
    market: "Italian-language service intent, neighbourhood searches and reputation signals differ significantly by city.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "PagineGialle"],
    sectors: ["healthcare", "legal services", "home improvement", "hospitality"],
    cities: ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
  },
  {
    slug: "portugal",
    name: "Portugal",
    region: "Europe",
    market: "Portuguese and international search demand overlap in major cities, requiring clear local and language relevance.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Páginas Amarelas"],
    sectors: ["property services", "healthcare", "professional services", "hospitality"],
    cities: ["Lisbon", "Porto", "Braga", "Coimbra", "Funchal", "Faro", "Aveiro", "Setúbal", "Leiria", "Évora"],
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    region: "Europe",
    market: "A multilingual and cross-border audience makes precise service, language and locality signals essential.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Editus"],
    sectors: ["financial services", "legal services", "healthcare", "hospitality"],
    cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Grevenmacher"],
  },
  {
    slug: "malta",
    name: "Malta",
    region: "Europe",
    market: "Dense local competition and English-Maltese search behaviour make locality and review relevance important.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Yellow Malta"],
    sectors: ["professional services", "healthcare", "property services", "hospitality"],
    cities: ["Valletta", "Birkirkara", "Sliema", "St. Julian's", "Mosta", "Qormi", "Rabat", "Mellieħa", "Victoria", "Żabbar"],
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    region: "Asia",
    market: "English and Arabic local intent, community names and high mobile competition require precise location signals.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Connect.ae"],
    sectors: ["clinics", "home maintenance", "real estate", "hospitality"],
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Kalba"],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    region: "Asia",
    market: "Arabic and English discovery, city districts and rapidly changing commercial areas shape local search demand.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Daleeli"],
    sectors: ["healthcare", "professional services", "automotive", "hospitality"],
    cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Dhahran", "Taif", "Tabuk", "Abha"],
  },
  {
    slug: "qatar",
    name: "Qatar",
    region: "Asia",
    market: "Doha-centred competition still varies by municipality, district and the communities customers name in searches.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Qatar Online Directory"],
    sectors: ["healthcare", "home maintenance", "professional services", "hospitality"],
    cities: ["Doha", "Al Rayyan", "Al Wakrah", "Lusail", "Al Khor", "Umm Salal", "Dukhan", "Mesaieed", "Al Shamal", "Al Daayen"],
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    region: "Asia",
    market: "District and governorate intent, bilingual search behaviour and reliable profile information influence local choice.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Kuwait Local"],
    sectors: ["healthcare", "home maintenance", "automotive", "restaurants"],
    cities: ["Kuwait City", "Hawally", "Salmiya", "Farwaniya", "Jahra", "Ahmadi", "Fahaheel", "Mangaf", "Sabah Al Salem", "Mubarak Al-Kabeer"],
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    region: "Asia",
    market: "A compact bilingual market makes neighbourhood relevance, reviews and accurate category selection highly visible.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Bahrain Yellow Pages"],
    sectors: ["healthcare", "professional services", "automotive", "hospitality"],
    cities: ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Zallaq"],
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "Asia",
    market: "Neighbourhood, MRT-area and service-intent searches compete in a dense, mobile-first local market.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Streetdirectory"],
    sectors: ["healthcare", "education", "professional services", "restaurants"],
    cities: ["Central Area", "Tampines", "Jurong East", "Woodlands", "Punggol", "Bedok", "Ang Mo Kio", "Clementi", "Toa Payoh", "Bukit Timah"],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia",
    market: "English and Malay search intent, city districts and mobile discovery require consistent multilingual signals.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Yellow Pages Malaysia"],
    sectors: ["healthcare", "education", "home services", "restaurants"],
    cities: ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh", "Shah Alam", "Petaling Jaya", "Kota Kinabalu", "Kuching", "Melaka City", "Seremban"],
  },
  {
    slug: "hong-kong",
    name: "Hong Kong (SAR)",
    region: "Asia",
    market: "English and Chinese searches often use district names, making district-level relevance more useful than broad territory copy.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "OpenRice"],
    sectors: ["healthcare", "professional services", "education", "restaurants"],
    cities: ["Central", "Wan Chai", "Causeway Bay", "Tsim Sha Tsui", "Mong Kok", "Kowloon City", "Sha Tin", "Tsuen Wan", "Tuen Mun", "Yuen Long"],
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    market: "Suburb-level search intent and large service areas make location architecture and map-grid tracking especially important.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Yellow Pages Australia"],
    sectors: ["tradies", "healthcare", "legal services", "hospitality"],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Geelong"],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    market: "City, suburb and regional service searches reward genuine local detail and consistent business information.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Yellow NZ"],
    sectors: ["trades", "healthcare", "professional services", "hospitality"],
    cities: ["Auckland", "Christchurch", "Wellington", "Hamilton", "Tauranga", "Dunedin", "Palmerston North", "Napier", "Rotorua", "Nelson"],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    region: "Africa",
    market: "Metro, suburb and multilingual search intent need locally credible content, categories and review signals.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Brabys"],
    sectors: ["home services", "healthcare", "legal services", "hospitality"],
    cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Gqeberha", "Bloemfontein", "East London", "Polokwane", "Nelspruit", "Kimberley"],
  },
  {
    slug: "chile",
    name: "Chile",
    region: "South America",
    market: "Spanish-language local intent varies by city and commune, with reviews and accurate profiles shaping trust.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Amarillas"],
    sectors: ["healthcare", "legal services", "home services", "restaurants"],
    cities: ["Santiago", "Valparaíso", "Concepción", "Antofagasta", "Viña del Mar", "Temuco", "Rancagua", "Talca", "Puerto Montt", "La Serena"],
  },
  {
    slug: "brazil",
    name: "Brazil",
    region: "South America",
    market: "Portuguese city and neighbourhood intent is highly mobile, review-led and different across major metropolitan areas.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "GuiaMais"],
    sectors: ["healthcare", "legal services", "beauty", "restaurants"],
    cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre"],
  },
  {
    slug: "colombia",
    name: "Colombia",
    region: "South America",
    market: "Spanish-language city, locality and neighbourhood searches depend on strong reviews and consistent business details.",
    platforms: ["Google Business Profile", "Apple Business Connect", "Bing Places", "Páginas Amarillas Colombia"],
    sectors: ["healthcare", "legal services", "beauty", "hospitality"],
    cities: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga", "Pereira", "Santa Marta", "Manizales", "Cúcuta"],
  },
];

export const slugifyPlace = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const GLOBAL_CITY_COUNT = GLOBAL_COUNTRIES.reduce((sum, country) => sum + country.cities.length, 0);
export const getGlobalCountry = (slug: string) => GLOBAL_COUNTRIES.find((country) => country.slug === slug);
export const getGlobalCity = (countrySlug: string, citySlug: string) => {
  const country = getGlobalCountry(countrySlug);
  if (!country) return undefined;
  const city = country.cities.find((name) => slugifyPlace(name) === citySlug);
  return city ? { country, city, index: country.cities.indexOf(city) } : undefined;
};

export const countriesInRegion = (region: GlobalCountry["region"]) =>
  GLOBAL_COUNTRIES.filter((country) => country.region === region);

