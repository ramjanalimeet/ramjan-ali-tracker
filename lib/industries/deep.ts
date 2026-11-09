/**
 * Trade-specific depth for the core industry pages: how each trade's customers
 * search, the Business Profile categories to start from, the pages to build,
 * when demand peaks and the mistakes that cost that trade calls. Rendered by
 * app/local-seo/[slug] so every core industry page carries its own substance,
 * not just the shared template.
 */
export type IndustryDeep = {
  /** How customers in this trade search and choose, two short paragraphs. */
  market: [string, string];
  /** Google Business Profile categories to start from (confirm exact names in the dashboard). */
  categories: { primary: string; secondary: string[] };
  /** The pages this trade's website needs, and why each one matters. */
  pages: { page: string; why: string }[];
  /** When demand rises and what to have ready. */
  seasons: { when: string; what: string }[];
  /** Mistakes that cost this trade calls. */
  mistakes: string[];
  /** The most relevant in-depth guide on the blog. */
  guide: { href: string; label: string };
};

const CATEGORIES_GUIDE = { href: "/blog/google-business-profile-categories-for-contractors", label: "Choosing Google Business Profile categories" };
const REVIEWS = { href: "/blog/how-to-get-more-google-reviews", label: "How to get more Google reviews" };
const PLUMBING_KW = { href: "/blog/high-value-plumbing-keywords", label: "Plumbing keywords that bring high-value jobs" };
const HVAC_CAL = { href: "/blog/hvac-seo-calendar", label: "The month-by-month HVAC SEO calendar" };
const STORM = { href: "/blog/roofing-storm-damage-leads", label: "Winning storm damage searches" };
const AREA_PAGES = { href: "/blog/service-area-pages-that-rank", label: "Service area pages that rank" };
const LINKS = { href: "/blog/local-link-building-for-contractors", label: "Local link building for contractors" };

export const DEEP: Record<string, IndustryDeep> = {
  "electrician-seo": {
    market: [
      "Electrical searches split into two very different groups. Urgent searches (\"power out in half the house\", \"emergency electrician\") are decided in minutes by whoever answers first in the map pack. Project searches (panel upgrades, rewiring, EV chargers, generators) are researched for days, and the electrician with the clearest page and the most relevant reviews usually wins.",
      "Most electrician websites only serve the first group, with one general page. That leaves the highest-value searches to whoever bothered to build a proper page for each project, which in many towns is nobody yet.",
    ],
    categories: { primary: "Electrician", secondary: ["Electrical installation service", "Lighting contractor", "Generator shop"] },
    pages: [
      { page: "Electrical panel upgrades", why: "One of the highest-value residential jobs, and often researched in advance" },
      { page: "Whole-house rewiring", why: "Older homes, insurance requirements and home sales drive these searches" },
      { page: "EV charger installation", why: "A growing search where few local competitors have strong pages" },
      { page: "Emergency electrical service", why: "Only if you truly answer after hours. Converts very well" },
      { page: "Lighting and fixture installation", why: "Smaller jobs that build reviews and repeat customers" },
    ],
    seasons: [
      { when: "Summer", what: "Storm outages, AC circuits and surge damage. Keep emergency hours accurate" },
      { when: "Fall", what: "Generator and holiday lighting enquiries" },
      { when: "Winter", what: "Space-heater overloads, outages, panel capacity questions" },
      { when: "Spring", what: "Renovations and EV charger installs pick up" },
    ],
    mistakes: [
      "One \"Services\" page for everything from outlets to panel upgrades",
      "Claiming 24/7 service when calls go to voicemail after 6 pm",
      "License number missing from the website and profile",
      "Reviews that never mention the type of job",
    ],
    guide: CATEGORIES_GUIDE,
  },
  "garage-door-seo": {
    market: [
      "Garage door is one of the most spam-heavy trades in Google Maps. Lead-generation listings with fake addresses and keyword-stuffed names crowd out real companies in many cities, so a genuine business with a verified location and real reviews has a real advantage once the profile is set up properly.",
      "Searches are mostly urgent (\"garage door won't open\", \"broken garage door spring\") and decided on the spot. Replacement and new-door searches are slower and more valuable, and they reward pages with photos of real installs and clear brand information.",
    ],
    categories: { primary: "Garage door supplier", secondary: ["Garage door repair service (if listed)", "Gate repair service"] },
    pages: [
      { page: "Broken spring repair", why: "The most common urgent search in the trade" },
      { page: "Garage door opener repair and installation", why: "Brand-specific searches (LiftMaster, Chamberlain, Genie) convert well" },
      { page: "New garage door installation", why: "The highest-value job. Needs photos, styles and materials" },
      { page: "Off-track and cable repair", why: "Problem searches with high urgency" },
      { page: "Commercial doors", why: "Different buyers and recurring maintenance contracts" },
    ],
    seasons: [
      { when: "Winter", what: "Cold snaps break springs. Keep same-day messaging ready" },
      { when: "Spring", what: "Replacement and curb-appeal projects before home sales" },
      { when: "Summer", what: "Opener failures in heat, insulated door upgrades" },
      { when: "Fall", what: "Weather-seal and tune-up offers" },
    ],
    mistakes: [
      "Copying spam competitors' keyword names or virtual addresses, which gets real businesses suspended too",
      "Not reporting obviously fake competitor listings",
      "No photos of real installs, so the site looks like a lead-gen page",
      "Opener brands you service not mentioned anywhere",
    ],
    guide: { href: "/blog/google-business-profile-suspended", label: "Avoiding Google Business Profile suspensions" },
  },
  "pest-control-seo": {
    market: [
      "Pest control searches are specific: people search for the pest, not the company (\"termite inspection\", \"bed bug treatment\", \"wasp nest removal\"). A website with one general page misses most of them. Each common pest in your area deserves its own page, written around what the homeowner is seeing.",
      "Recurring service plans are where pest control companies make their money, so the goal is not just the first call. Content that explains prevention and quarterly plans turns one-off treatments into long-term customers.",
    ],
    categories: { primary: "Pest control service", secondary: ["Termite control service", "Wildlife control service (if you do it)"] },
    pages: [
      { page: "Termite inspection and treatment", why: "High value, and needed for many home sales" },
      { page: "Bed bug treatment", why: "Urgent, discreet, high intent" },
      { page: "Rodent control", why: "Year-round demand, peaks in colder months" },
      { page: "Mosquito and tick control", why: "Seasonal recurring service" },
      { page: "Quarterly pest plans", why: "Where recurring revenue comes from" },
    ],
    seasons: [
      { when: "Spring", what: "Termite swarms and ant searches rise" },
      { when: "Summer", what: "Mosquitoes, wasps and stinging insects" },
      { when: "Fall", what: "Rodents moving indoors, overwintering pests" },
      { when: "Year-round", what: "Bed bugs and real estate termite inspections" },
    ],
    mistakes: [
      "One page listing every pest instead of a page per pest",
      "No pest identification photos from your own area",
      "Recurring plans hidden behind a phone call",
      "No content for real estate agents needing termite letters",
    ],
    guide: AREA_PAGES,
  },
  "landscaping-seo": {
    market: [
      "Landscaping covers two businesses that search differently. Maintenance searches (\"lawn care service\", \"weekly mowing\") are price-sensitive and local, and they reward recurring-plan pages and lots of nearby reviews. Design-and-build searches (\"patio installation\", \"landscape design\") are high value and visual, and they reward project galleries and detailed pages.",
      "Because demand is so seasonal, timing matters more than in most trades. Pages for spring projects need to rank by late winter, when homeowners start planning.",
    ],
    categories: { primary: "Landscaper", secondary: ["Lawn care service", "Landscape designer", "Irrigation contractor"] },
    pages: [
      { page: "Landscape design and installation", why: "High-value projects. Needs a strong photo gallery" },
      { page: "Patios and hardscaping", why: "Large ticket, often researched over weeks" },
      { page: "Lawn care and maintenance plans", why: "Recurring revenue" },
      { page: "Irrigation installation and repair", why: "Problem searches in dry months" },
      { page: "Seasonal cleanups", why: "Spring and fall volume, good for new customers" },
    ],
    seasons: [
      { when: "Late winter", what: "Design projects get planned. Publish and update project pages" },
      { when: "Spring", what: "Peak for cleanups, mowing contracts and installs" },
      { when: "Summer", what: "Irrigation problems and maintenance" },
      { when: "Fall", what: "Cleanups, aeration and next year's design leads" },
    ],
    mistakes: [
      "Stock photos instead of your own projects",
      "Mixing maintenance and design on one page",
      "Starting SEO in May, after the planning season",
      "No service area detail, so you get calls from too far away",
    ],
    guide: HVAC_CAL,
  },
  "water-damage-restoration-seo": {
    market: [
      "Water damage is among the most competitive and expensive local searches, full of national franchises, call centers and lead-generation sites. Searches are urgent (\"water damage restoration near me\", \"flooded basement cleanup\") and the homeowner often calls the first credible listing.",
      "Independent restoration companies win by being genuinely local and fast: a verified Business Profile, real response times, IICRC certification shown clearly, and content that explains the insurance process honestly. Many franchise pages are generic, so specific, local pages stand out.",
    ],
    categories: { primary: "Water damage restoration service", secondary: ["Fire damage restoration service", "Mold remediation service (if listed)"] },
    pages: [
      { page: "Emergency water extraction", why: "The urgent, money search. Phone number first" },
      { page: "Burst pipe and flood cleanup", why: "Common causes, searched by cause" },
      { page: "Mold remediation", why: "Often follows water damage. High value" },
      { page: "Insurance claims help", why: "Builds trust in a confusing process" },
      { page: "Sewage cleanup", why: "Urgent, specialist work with less competition" },
    ],
    seasons: [
      { when: "Winter", what: "Frozen and burst pipes. Peak emergency demand in cold regions" },
      { when: "Spring", what: "Snowmelt and heavy rain, basement flooding" },
      { when: "Summer to fall", what: "Storms and hurricanes in coastal regions" },
      { when: "Year-round", what: "Appliance leaks and sewage backups" },
    ],
    mistakes: [
      "Claiming response times you cannot meet",
      "Certifications not shown on the site and profile",
      "Generic pages that read like every franchise",
      "Relying only on expensive ads in the most competitive trade",
    ],
    guide: { href: "/blog/local-services-ads-vs-seo-for-contractors", label: "Local Services Ads vs SEO" },
  },
  "painting-seo": {
    market: [
      "Painting searches are visual and trust-driven. Homeowners compare portfolios and reviews more than prices, and they often search by project type (\"exterior house painting\", \"cabinet painting\") rather than \"painter near me\".",
      "Painters who rank well usually have a page per project type with their own before-and-after photos, and reviews that mention neatness, prep work and timelines, the things customers actually worry about.",
    ],
    categories: { primary: "Painter", secondary: ["House painter (if listed)", "Drywall contractor", "Deck staining service"] },
    pages: [
      { page: "Exterior house painting", why: "Highest-value residential work, very seasonal" },
      { page: "Interior painting", why: "Year-round demand" },
      { page: "Cabinet painting and refinishing", why: "Growing search with good margins" },
      { page: "Commercial painting", why: "Different buyers, larger contracts" },
      { page: "Deck and fence staining", why: "Seasonal add-on work" },
    ],
    seasons: [
      { when: "Early spring", what: "Exterior projects get booked. Have pages ranking before this" },
      { when: "Summer", what: "Exterior painting peak" },
      { when: "Fall and winter", what: "Interior and cabinet projects" },
      { when: "Before holidays", what: "Interior refresh searches" },
    ],
    mistakes: [
      "Stock photos instead of real before-and-after shots",
      "One page for interior, exterior and cabinets",
      "No information on prep, materials or warranty",
      "Reviews requested only by email, weeks later",
    ],
    guide: REVIEWS,
  },
  "kitchen-remodeling-seo": {
    market: [
      "Kitchen remodels are researched for months. Homeowners read cost guides, browse galleries, compare materials and check reviews long before they request a quote. The remodeler who answers those questions well earns trust early, and gets the consultation request later.",
      "That makes content more important than in urgent trades: cost and process pages, project galleries with real budgets and timelines, and reviews that describe the whole experience.",
    ],
    categories: { primary: "Kitchen remodeler", secondary: ["Bathroom remodeler", "General contractor", "Cabinet maker (if you build them)"] },
    pages: [
      { page: "Kitchen remodeling", why: "The main service page, with process and timeline" },
      { page: "Kitchen remodel cost", why: "One of the most searched questions. Explain what drives the price" },
      { page: "Project gallery", why: "Real projects with scope, budget range and duration" },
      { page: "Cabinets and countertops", why: "Smaller projects and material-specific searches" },
      { page: "Design consultation", why: "The conversion page, with what to expect" },
    ],
    seasons: [
      { when: "January to March", what: "Planning season. Cost and design content gets read" },
      { when: "Spring", what: "Consultations and contracts" },
      { when: "Summer", what: "Projects underway. Collect photos and reviews" },
      { when: "Early fall", what: "Before-the-holidays remodel enquiries" },
    ],
    mistakes: [
      "No cost information at all, so researchers go elsewhere",
      "Galleries with no description of scope or timeline",
      "Asking for reviews before the project is finished",
      "No mention of permits, warranties or project management",
    ],
    guide: { href: "/blog/high-value-plumbing-keywords", label: "Building pages for high-value jobs" },
  },
  "gutter-seo": {
    market: [
      "Gutter searches come in waves: cleaning in fall and spring, repairs after storms, guards and replacements when homeowners are tired of cleaning. Each wave needs a different page, and ranking for all of them keeps a gutter business busy year-round.",
      "Gutter work is also a natural partner to roofing, so roofers, gutter companies and siding contractors often compete for the same searches. A focused gutter site with real photos and clear pricing information can outrank roofers' generic pages.",
    ],
    categories: { primary: "Gutter cleaning service", secondary: ["Gutter installation (if listed)", "Roofing contractor (only if you roof)"] },
    pages: [
      { page: "Gutter cleaning", why: "High volume, recurring, good for new customers" },
      { page: "Seamless gutter installation", why: "The highest-value job" },
      { page: "Gutter guards", why: "Research-heavy with good margins" },
      { page: "Gutter repair", why: "Storm and ice damage searches" },
      { page: "Downspouts and drainage", why: "Problem searches about water near the foundation" },
    ],
    seasons: [
      { when: "Fall", what: "Leaf season cleaning peak" },
      { when: "Winter", what: "Ice dams and damaged gutters in cold regions" },
      { when: "Spring", what: "Cleaning and storm repairs" },
      { when: "Summer", what: "Replacements and guard installs" },
    ],
    mistakes: [
      "No page for gutter guards, often the best-margin job",
      "Before-and-after photos missing",
      "Seasonal profile posts not planned ahead",
      "Competing on cleaning price alone",
    ],
    guide: STORM,
  },
  "siding-seo": {
    market: [
      "Siding is a high-ticket, low-frequency purchase. Homeowners search by material (\"vinyl siding installation\", \"fiber cement siding\") and by problem (\"hail damage siding\", \"siding repair\"), and they compare contractors carefully.",
      "Manufacturer certifications, material comparisons and detailed project galleries do much of the selling. Storm damage also drives sudden spikes in siding searches, which reward contractors who already have storm pages ranking.",
    ],
    categories: { primary: "Siding contractor", secondary: ["Roofing contractor (only if you roof)", "Window installation service"] },
    pages: [
      { page: "Siding replacement", why: "The main high-value page" },
      { page: "Vinyl, fiber cement and other materials", why: "Material comparisons are heavily searched" },
      { page: "Siding repair", why: "Smaller jobs, storm repairs, faster to rank" },
      { page: "Storm and hail damage", why: "Insurance-driven spikes after storms" },
      { page: "Project gallery", why: "Homeowners want to see real homes like theirs" },
    ],
    seasons: [
      { when: "Spring", what: "Storm season and exterior project planning" },
      { when: "Summer", what: "Peak installation season" },
      { when: "Fall", what: "Last projects before winter" },
      { when: "After any storm", what: "Damage inspections and repairs" },
    ],
    mistakes: [
      "No material comparison content",
      "Manufacturer certifications not shown",
      "No storm damage page until after the storm",
      "Area pages that only swap the town name",
    ],
    guide: STORM,
  },
  "window-door-seo": {
    market: [
      "Window and door replacement is researched over weeks, and homeowners compare brands, energy ratings and installers. Searches mix brand terms (\"Andersen windows installer\"), product terms (\"replacement windows\", \"patio doors\") and problems (\"drafty windows\", \"foggy window repair\").",
      "National brands and big-box stores dominate broad searches, so independent installers do best with dealer certifications, local galleries, energy-saving content and strong reviews about installation quality.",
    ],
    categories: { primary: "Window installation service", secondary: ["Door supplier", "Glass repair service (if you repair)"] },
    pages: [
      { page: "Replacement windows", why: "The core high-value page" },
      { page: "Entry and patio doors", why: "Separate searches and buyers" },
      { page: "Brands you install", why: "Brand searches convert well, especially as a certified dealer" },
      { page: "Window repair and foggy glass", why: "Smaller jobs, easier to rank" },
      { page: "Energy efficiency and rebates", why: "Common research topic before buying" },
    ],
    seasons: [
      { when: "Spring", what: "Replacement projects planned and booked" },
      { when: "Summer", what: "Patio doors and installs" },
      { when: "Fall", what: "Drafty-window searches before winter" },
      { when: "Winter", what: "Energy bill research. Publish efficiency content" },
    ],
    mistakes: [
      "Not listed on the dealer locators of brands you install",
      "No mention of energy ratings or rebates",
      "Competing head-on with big-box stores for broad terms",
      "No photos of local installs",
    ],
    guide: LINKS,
  },
  "water-heater-seo": {
    market: [
      "Water heater searches are mostly urgent: no hot water, a leaking tank, a strange noise. The homeowner wants it fixed today and often replaced, which makes these some of the most valuable calls in residential plumbing.",
      "Tankless and heat pump water heaters add a research-driven layer, with homeowners comparing costs and efficiency before buying. A company that ranks for both the emergency and the research searches captures the whole market.",
    ],
    categories: { primary: "Plumber", secondary: ["Water heater installation service (if listed)", "Water heater store (only if you sell retail)"] },
    pages: [
      { page: "Water heater repair", why: "Urgent searches: no hot water, leaks, pilot problems" },
      { page: "Water heater replacement", why: "The high-value job, often same day" },
      { page: "Tankless water heaters", why: "Research-heavy, higher ticket" },
      { page: "Heat pump water heaters", why: "Growing interest driven by efficiency and rebates" },
      { page: "Water heater cost", why: "Explains what drives price and builds trust" },
    ],
    seasons: [
      { when: "Winter", what: "Peak failures as incoming water is coldest" },
      { when: "Holidays", what: "Extra demand with guests. Emergency availability matters" },
      { when: "Spring", what: "Planned upgrades and tankless conversions" },
      { when: "Year-round", what: "Leaks and failures from aging tanks" },
    ],
    mistakes: [
      "Water heaters buried on a general plumbing page",
      "No same-day replacement messaging",
      "No brands or warranty details",
      "Ignoring tankless research searches",
    ],
    guide: PLUMBING_KW,
  },
  "drain-cleaning-seo": {
    market: [
      "Drain searches range from small (\"kitchen sink clogged\") to large (\"main sewer line backup\"). The small jobs bring volume and reviews, and the large ones bring revenue, often turning into camera inspections, hydro jetting and sewer line work.",
      "The best-performing drain sites rank for the problems first, then guide the homeowner to the right service, with a clear phone number for anything urgent.",
    ],
    categories: { primary: "Plumber", secondary: ["Drainage service", "Septic system service (only if you do septic)"] },
    pages: [
      { page: "Drain cleaning", why: "The core volume page" },
      { page: "Main sewer line clogs and backups", why: "Urgent and high value" },
      { page: "Hydro jetting", why: "A higher-value service many competitors do not explain" },
      { page: "Sewer camera inspection", why: "Bought before repairs and before buying a home" },
      { page: "Recurring drain problems", why: "Problem content that leads to bigger jobs" },
    ],
    seasons: [
      { when: "Holidays", what: "Kitchen drains and disposals. Thanksgiving week is notorious" },
      { when: "Spring", what: "Heavy rain backups and root intrusion" },
      { when: "Home-buying season", what: "Sewer scope inspections for buyers" },
      { when: "Year-round", what: "Emergency backups" },
    ],
    mistakes: [
      "No page explaining hydro jetting or camera inspections",
      "Not targeting real estate sewer scope searches",
      "Emergency availability unclear",
      "Reviews that do not mention the problem solved",
    ],
    guide: PLUMBING_KW,
  },
  "water-treatment-seo": {
    market: [
      "Water treatment is a research-heavy, trust-driven purchase. Homeowners search their problem first (\"hard water spots\", \"well water smells like eggs\", \"PFAS in water\") and only later the solution. Companies that explain problems clearly, with local water facts, earn the trust to sell the system.",
      "Local data is a major advantage here: hardness levels, well-water issues and municipal water reports for your area make content far more useful than generic national pages.",
    ],
    categories: { primary: "Water softening equipment supplier", secondary: ["Water purification company (if listed)", "Water testing service (if listed)"] },
    pages: [
      { page: "Water softeners", why: "The core product page" },
      { page: "Whole-house filtration", why: "Growing searches around contaminants" },
      { page: "Reverse osmosis systems", why: "Drinking water quality searches" },
      { page: "Well water treatment", why: "Rural markets with specific problems" },
      { page: "Free water testing", why: "The conversion step for most buyers" },
    ],
    seasons: [
      { when: "Year-round", what: "Steady research demand" },
      { when: "After water quality news", what: "Spikes in filtration searches. Respond with local facts" },
      { when: "Spring", what: "Well testing and new homeowners" },
      { when: "Move-in season", what: "New buyers testing their water" },
    ],
    mistakes: [
      "Fear-based content without real local data",
      "No information on maintenance and salt or filter costs",
      "Free testing offer not prominent",
      "No content for well owners in rural areas",
    ],
    guide: AREA_PAGES,
  },
  "well-pump-seo": {
    market: [
      "Well pump searches are almost always urgent: no water in the house, low pressure, a pump running constantly. Customers are rural and spread out, so the service area is large and the competitors are few, but Google often does not connect a company to towns 30 or 40 minutes away.",
      "Clear service area pages, a correctly set up Business Profile service area and reviews from across the whole area make a big difference in rural well markets.",
    ],
    categories: { primary: "Well drilling contractor or Water pump supplier (match your main work)", secondary: ["Plumber (if you also plumb)", "Water testing service (if listed)"] },
    pages: [
      { page: "Well pump repair and replacement", why: "The urgent money search" },
      { page: "No water from well troubleshooting", why: "Problem search with immediate need" },
      { page: "Pressure tanks", why: "Common failure, smaller job" },
      { page: "Well inspections for home sales", why: "Deadline-driven and agent referrals" },
      { page: "County and town pages", why: "Reach customers across a wide rural area" },
    ],
    seasons: [
      { when: "Summer", what: "Drought and heavy use stress pumps" },
      { when: "Winter", what: "Frozen lines and pressure switches" },
      { when: "Spring", what: "Home sales and well inspections" },
      { when: "After storms", what: "Lightning and power-surge pump failures" },
    ],
    mistakes: [
      "Service area set too small, or not set at all",
      "No emergency messaging for no-water calls",
      "Reviews only from customers near the shop",
      "No inspection page for real estate deadlines",
    ],
    guide: { href: "/blog/how-to-get-more-septic-pumping-customers", label: "Winning rural service areas (septic example)" },
  },
  "air-duct-cleaning-seo": {
    market: [
      "Air duct cleaning has a trust problem: homeowners have seen cheap \"whole house for $99\" offers and know many are bait-and-switch. Searches often include \"cost\", \"worth it\" and \"how often\", and the company that answers honestly earns the call.",
      "Linking duct cleaning to real problems (allergies, renovation dust, pet hair, dryer vent fires) and showing NADCA certification where you hold it builds the trust this trade needs.",
    ],
    categories: { primary: "Air duct cleaning service", secondary: ["Dryer vent cleaning service (if listed)", "HVAC contractor (only if you do HVAC)"] },
    pages: [
      { page: "Air duct cleaning", why: "The core page, with honest pricing information" },
      { page: "Dryer vent cleaning", why: "Safety-driven searches, easier to rank" },
      { page: "Duct cleaning cost", why: "The most common question. Address the $99 offers honestly" },
      { page: "After renovation cleaning", why: "A clear, specific reason to buy" },
      { page: "Commercial duct cleaning", why: "Recurring contracts" },
    ],
    seasons: [
      { when: "Spring", what: "Allergy season searches" },
      { when: "Fall", what: "Before heating season" },
      { when: "After renovations", what: "Dust and debris cleanups" },
      { when: "Year-round", what: "Dryer vent safety" },
    ],
    mistakes: [
      "Advertising prices you will not honor",
      "No explanation of the process or equipment",
      "Certifications not shown",
      "No before-and-after photos",
    ],
    guide: REVIEWS,
  },
  "generator-installer-seo": {
    market: [
      "Generator demand is driven by outages. After a major storm or a long power cut, searches for standby generators can jump overnight, and the companies already ranking get the leads. Most of the year, buyers are researching sizes, fuel types and costs.",
      "Dealer status with a major brand (Generac, Kohler, Briggs & Stratton), clear sizing and cost content, and a maintenance plan page make generator sites convert well.",
    ],
    categories: { primary: "Generator shop", secondary: ["Electrician (if you are licensed)", "Electrical installation service"] },
    pages: [
      { page: "Whole-home standby generators", why: "The main high-value page" },
      { page: "Generator cost and sizing", why: "Heavily researched before buying" },
      { page: "Brands you install", why: "Dealer and brand searches convert well" },
      { page: "Generator maintenance plans", why: "Recurring revenue and repeat visits" },
      { page: "Generator repair", why: "Urgent searches during outages" },
    ],
    seasons: [
      { when: "Before hurricane or storm season", what: "Research and installs. Publish sizing content early" },
      { when: "After major outages", what: "Demand spikes. Be ready with response messaging" },
      { when: "Fall", what: "Winter preparedness and maintenance" },
      { when: "Spring", what: "Maintenance plan renewals" },
    ],
    mistakes: [
      "Not listed on manufacturer dealer locators",
      "No sizing or cost guidance",
      "Waiting for an outage to start marketing",
      "No maintenance plan offer",
    ],
    guide: LINKS,
  },
  "insulation-seo": {
    market: [
      "Insulation searches are driven by energy bills, comfort and rebates. Homeowners search by area (\"attic insulation\", \"crawl space insulation\") and by material (\"spray foam\", \"blown-in insulation\"), and they want to know cost and savings.",
      "Rebates and tax incentives change often, and an up-to-date page about what applies locally can rank well and convert, because few competitors keep theirs current.",
    ],
    categories: { primary: "Insulation contractor", secondary: ["Energy equipment and solutions (if listed)", "Air duct cleaning service (if you do it)"] },
    pages: [
      { page: "Attic insulation", why: "The most common and most searched job" },
      { page: "Spray foam insulation", why: "Higher value, research-heavy" },
      { page: "Crawl space and basement", why: "Moisture and comfort problems" },
      { page: "Energy audits", why: "The entry point for many customers" },
      { page: "Rebates and incentives", why: "Kept up to date, this page converts well" },
    ],
    seasons: [
      { when: "Fall", what: "Before heating season. Peak research" },
      { when: "Winter", what: "High bills and cold rooms" },
      { when: "Spring", what: "Attic projects before summer heat" },
      { when: "Summer", what: "Hot upstairs rooms and cooling costs" },
    ],
    mistakes: [
      "Outdated rebate information",
      "No explanation of materials and R-values",
      "No energy audit offer",
      "No before-and-after thermal images",
    ],
    guide: HVAC_CAL,
  },
  "home-inspection-seo": {
    market: [
      "Home inspection is a referral-driven trade, but Google matters more every year as buyers check reviews before agreeing to the inspector their agent suggests, and many search directly. Searches are deadline-driven (\"home inspector near me\", \"pre-listing inspection\").",
      "Specialty inspections (radon, sewer scope, mold, termite) add revenue and rank well with dedicated pages. Content for real estate agents builds the referral side at the same time.",
    ],
    categories: { primary: "Home inspector", secondary: ["Radon testing service (if listed)", "Mold inspection (if listed)"] },
    pages: [
      { page: "Home inspections", why: "The core page, with what is included and a sample report" },
      { page: "Pre-listing inspections", why: "Sellers and agents searching ahead of a sale" },
      { page: "Specialty inspections", why: "Radon, sewer scope, mold and termite as add-ons" },
      { page: "New construction inspections", why: "Growing markets with new builds" },
      { page: "For real estate agents", why: "Turnaround, scheduling and reports, for referrals" },
    ],
    seasons: [
      { when: "Spring", what: "Peak home-buying season" },
      { when: "Summer", what: "Continued sales volume" },
      { when: "Fall", what: "Last sales before winter" },
      { when: "Winter", what: "Slower. A good time for content and agent outreach" },
    ],
    mistakes: [
      "No sample report online",
      "Turnaround time not stated",
      "No page aimed at real estate agents",
      "Certifications and insurance not visible",
    ],
    guide: REVIEWS,
  },
};

export const getDeep = (slug: string): IndustryDeep | undefined => DEEP[slug];
