import type { CategoryId, Industry } from "./types";

export type ExpansionSeed = {
  slug: string;
  name: string;
  short: string;
  category: CategoryId;
  services: [string, string, string, string];
  decision: string;
  proof: string;
};

/**
 * Closely adjacent local-service verticals with distinct customer intent.
 * Each seed owns a separate job set, buying decision and proof requirement;
 * we do not create keyword variants or city combinations from these records.
 */
const SEEDS: ExpansionSeed[] = [
  { slug: "sheet-metal-contractor-seo", name: "Sheet Metal Contractors", short: "Sheet Metal Contractor", category: "exterior", services: ["custom metal fabrication", "metal flashing", "coping installation", "architectural metal panels"], decision: "fabrication capability and project fit", proof: "shop photos, finished projects and material expertise" },
  { slug: "awning-company-seo", name: "Awning Companies", short: "Awning Company", category: "exterior", services: ["retractable awnings", "commercial awnings", "canopy installation", "awning repair"], decision: "fabric choice, measurements and installation quality", proof: "installed-project galleries, fabric options and warranties" },
  { slug: "commercial-glass-seo", name: "Commercial Glass Companies", short: "Commercial Glass Company", category: "exterior", services: ["storefront glass", "glass door repair", "emergency board-up", "custom glass installation"], decision: "response time and ability to match the opening", proof: "storefront projects, safety credentials and response coverage" },
  { slug: "skylight-installer-seo", name: "Skylight Installers", short: "Skylight Installer", category: "exterior", services: ["skylight installation", "leaking skylight repair", "skylight replacement", "sun tunnel installation"], decision: "leak prevention and roofing compatibility", proof: "roof-specific installs, flashing details and warranty terms" },
  { slug: "stucco-contractor-seo", name: "Stucco Contractors", short: "Stucco Contractor", category: "exterior", services: ["stucco repair", "stucco installation", "EIFS repair", "stucco inspection"], decision: "diagnosis of cracks and moisture before quoting", proof: "repair close-ups, moisture findings and finish matching" },
  { slug: "exterior-waterproofing-seo", name: "Exterior Waterproofing", short: "Exterior Waterproofing Contractor", category: "exterior", services: ["wall waterproofing", "foundation coating", "balcony waterproofing", "building envelope repair"], decision: "finding the water path instead of covering symptoms", proof: "diagnostic reports, membrane systems and completed assemblies" },
  { slug: "demolition-contractor-seo", name: "Demolition Contractors", short: "Demolition Contractor", category: "exterior", services: ["interior demolition", "structure demolition", "concrete removal", "site clearing"], decision: "permit, safety and debris-handling capability", proof: "insured crews, equipment, permits and clean job sites" },
  { slug: "storm-shelter-installer-seo", name: "Storm Shelter Installers", short: "Storm Shelter Installer", category: "exterior", services: ["in-ground shelters", "garage shelters", "safe room installation", "shelter inspection"], decision: "certification, anchoring and household capacity", proof: "tested products, installation details and local compliance" },

  { slug: "boiler-service-seo", name: "Boiler Service Companies", short: "Boiler Service Company", category: "mechanical", services: ["boiler repair", "boiler replacement", "annual boiler service", "steam heat repair"], decision: "system knowledge and same-day heat restoration", proof: "manufacturer experience, licenses and service records" },
  { slug: "geothermal-contractor-seo", name: "Geothermal Contractors", short: "Geothermal Contractor", category: "mechanical", services: ["geothermal installation", "ground-loop repair", "geothermal maintenance", "system replacement"], decision: "loop design, incentives and lifetime operating cost", proof: "system designs, certifications and measured project results" },
  { slug: "commercial-refrigeration-seo", name: "Commercial Refrigeration", short: "Commercial Refrigeration Company", category: "mechanical", services: ["walk-in cooler repair", "ice machine service", "refrigeration installation", "preventive maintenance"], decision: "response speed and equipment coverage", proof: "after-hours availability, stocked parts and commercial references" },
  { slug: "gas-line-contractor-seo", name: "Gas Line Contractors", short: "Gas Line Contractor", category: "mechanical", services: ["gas line installation", "gas leak repair", "appliance gas lines", "gas pressure testing"], decision: "licensing, safe testing and permit handling", proof: "licenses, pressure-test process and inspection readiness" },
  { slug: "backflow-testing-seo", name: "Backflow Testing Services", short: "Backflow Testing Service", category: "mechanical", services: ["annual backflow testing", "backflow repair", "device replacement", "compliance certification"], decision: "certification and on-time paperwork", proof: "tester credentials, filing process and service reminders" },
  { slug: "water-leak-detection-seo", name: "Water Leak Detection", short: "Leak Detection Company", category: "mechanical", services: ["slab leak detection", "pool leak detection", "underground leak locating", "thermal leak inspection"], decision: "non-destructive accuracy before repair begins", proof: "diagnostic equipment, marked findings and written reports" },
  { slug: "sump-pump-seo", name: "Sump Pump Specialists", short: "Sump Pump Specialist", category: "mechanical", services: ["sump pump installation", "sump pump repair", "battery backup systems", "ejector pump service"], decision: "capacity, backup protection and emergency availability", proof: "sizing guidance, installed systems and flood-prevention reviews" },
  { slug: "radiant-heating-seo", name: "Radiant Heating Contractors", short: "Radiant Heating Contractor", category: "mechanical", services: ["radiant floor installation", "hydronic heat repair", "snowmelt systems", "radiant system design"], decision: "system design and compatibility with the floor assembly", proof: "loop layouts, controls expertise and completed installations" },

  { slug: "low-voltage-contractor-seo", name: "Low Voltage Contractors", short: "Low Voltage Contractor", category: "electrical", services: ["low voltage wiring", "structured cabling", "system retrofits", "equipment rack installation"], decision: "clean design, labeling and future serviceability", proof: "rack photos, test reports and commercial references" },
  { slug: "data-cabling-seo", name: "Data Cabling Companies", short: "Data Cabling Company", category: "electrical", services: ["network cabling", "fiber optic installation", "cable testing", "office cabling"], decision: "certified testing and minimal business disruption", proof: "test results, labeled runs and network project experience" },
  { slug: "fire-alarm-contractor-seo", name: "Fire Alarm Contractors", short: "Fire Alarm Contractor", category: "electrical", services: ["fire alarm installation", "annual inspection", "panel repair", "system monitoring setup"], decision: "code knowledge and inspection coordination", proof: "licenses, approved systems and documented testing" },
  { slug: "lighting-contractor-seo", name: "Lighting Contractors", short: "Lighting Contractor", category: "electrical", services: ["commercial lighting", "LED retrofits", "landscape lighting", "lighting controls"], decision: "design quality, energy savings and installation scope", proof: "photometric plans, before-and-after projects and rebates knowledge" },
  { slug: "sign-company-seo", name: "Sign Companies", short: "Sign Company", category: "electrical", services: ["channel letter signs", "monument signs", "sign repair", "digital signage"], decision: "design, permitting, fabrication and installation under one roof", proof: "local sign projects, permit experience and nighttime photos" },
  { slug: "intercom-installer-seo", name: "Intercom Installers", short: "Intercom Installer", category: "electrical", services: ["video intercoms", "apartment intercom repair", "door entry systems", "wireless intercom installation"], decision: "building compatibility and reliable remote access", proof: "supported brands, wiring expertise and completed properties" },
  { slug: "gate-automation-seo", name: "Gate Automation Companies", short: "Gate Automation Company", category: "electrical", services: ["automatic gate installation", "gate opener repair", "access control integration", "safety loop service"], decision: "safe operation, access integration and parts support", proof: "operator brands, safety testing and installed gates" },
  { slug: "home-battery-installer-seo", name: "Home Battery Installers", short: "Home Battery Installer", category: "electrical", services: ["home battery installation", "solar battery retrofit", "backup power design", "battery maintenance"], decision: "load calculation, compatibility and backup duration", proof: "certifications, one-line diagrams and commissioned systems" },

  { slug: "tile-contractor-seo", name: "Tile Contractors", short: "Tile Contractor", category: "interior", services: ["tile installation", "shower tile", "backsplash installation", "tile repair"], decision: "layout, waterproofing and finish quality", proof: "close-up workmanship, shower systems and material experience" },
  { slug: "closet-designer-seo", name: "Custom Closet Companies", short: "Custom Closet Company", category: "interior", services: ["walk-in closets", "reach-in closets", "garage storage", "pantry systems"], decision: "design usefulness, material options and installation finish", proof: "real designs, installed storage and clear process photos" },
  { slug: "window-treatment-seo", name: "Window Treatment Companies", short: "Window Treatment Company", category: "interior", services: ["custom blinds", "motorized shades", "plantation shutters", "drapery installation"], decision: "measurement accuracy, fabric choice and motor compatibility", proof: "room photos, samples, brands and installation warranties" },
  { slug: "interior-designer-seo", name: "Interior Designers", short: "Interior Designer", category: "interior", services: ["full-service interior design", "room design", "finish selection", "furnishing plans"], decision: "aesthetic fit, budget process and project communication", proof: "complete portfolios, client stories and documented design process" },
  { slug: "epoxy-flooring-seo", name: "Epoxy Flooring Companies", short: "Epoxy Flooring Company", category: "interior", services: ["garage floor coatings", "commercial epoxy floors", "polyaspartic coatings", "concrete preparation"], decision: "surface preparation and coating durability", proof: "prep equipment, coating systems and finished-floor photos" },
  { slug: "wallpaper-installer-seo", name: "Wallpaper Installers", short: "Wallpaper Installer", category: "interior", services: ["wallpaper installation", "wallpaper removal", "commercial wallcovering", "mural installation"], decision: "pattern matching and wall preparation skill", proof: "seam close-ups, specialty materials and finished rooms" },
  { slug: "furniture-assembly-seo", name: "Furniture Assembly Services", short: "Furniture Assembly Service", category: "interior", services: ["flat-pack assembly", "office furniture assembly", "fitness equipment assembly", "furniture installation"], decision: "availability, care and accurate assembly", proof: "service coverage, insured technicians and customer reviews" },
  { slug: "home-organizer-seo", name: "Professional Home Organizers", short: "Professional Home Organizer", category: "interior", services: ["home organization", "decluttering", "move-in organization", "pantry organization"], decision: "trust, discretion and a practical system that lasts", proof: "before-and-after spaces, process clarity and client testimonials" },

  { slug: "commercial-cleaning-seo", name: "Commercial Cleaning Companies", short: "Commercial Cleaning Company", category: "cleaning", services: ["office cleaning", "medical office cleaning", "post-construction cleaning", "day porter service"], decision: "scope consistency, supervision and secure access", proof: "checklists, trained teams and commercial references" },
  { slug: "janitorial-service-seo", name: "Janitorial Services", short: "Janitorial Service", category: "cleaning", services: ["nightly janitorial service", "restroom sanitation", "floor care", "facility cleaning"], decision: "reliable staffing and quality control across every visit", proof: "inspection process, staffing coverage and account reporting" },
  { slug: "dryer-vent-cleaning-seo", name: "Dryer Vent Cleaning", short: "Dryer Vent Cleaning Company", category: "cleaning", services: ["dryer vent cleaning", "vent rerouting", "bird nest removal", "commercial dryer vent service"], decision: "airflow testing and complete lint removal", proof: "before-and-after airflow, equipment and safety-focused reviews" },
  { slug: "upholstery-cleaning-seo", name: "Upholstery Cleaners", short: "Upholstery Cleaning Company", category: "cleaning", services: ["sofa cleaning", "chair cleaning", "mattress cleaning", "fabric protection"], decision: "fabric-safe methods and realistic stain expectations", proof: "fabric knowledge, extraction equipment and result photos" },
  { slug: "tile-grout-cleaning-seo", name: "Tile & Grout Cleaners", short: "Tile and Grout Cleaning Company", category: "cleaning", services: ["tile cleaning", "grout cleaning", "grout sealing", "natural stone cleaning"], decision: "surface-safe chemistry and visible restoration", proof: "test areas, floor results and sealing options" },
  { slug: "biohazard-cleanup-seo", name: "Biohazard Cleanup", short: "Biohazard Cleanup Company", category: "cleaning", services: ["biohazard cleanup", "unattended death cleanup", "blood cleanup", "vehicle decontamination"], decision: "discretion, certification and immediate response", proof: "trained technicians, privacy practices and disposal compliance" },
  { slug: "hoarding-cleanup-seo", name: "Hoarding Cleanup Services", short: "Hoarding Cleanup Service", category: "cleaning", services: ["hoarding cleanup", "estate cleanout", "clutter removal", "property sanitation"], decision: "compassion, privacy and a staged cleanup plan", proof: "nonjudgmental process, insured crews and clear disposal options" },
  { slug: "vacation-rental-cleaning-seo", name: "Vacation Rental Cleaning", short: "Vacation Rental Cleaning Company", category: "cleaning", services: ["turnover cleaning", "linen service", "restocking", "inspection reporting"], decision: "turnaround reliability and proof the property is guest-ready", proof: "photo reports, scheduling systems and host references" },

  { slug: "artificial-turf-seo", name: "Artificial Turf Installers", short: "Artificial Turf Installer", category: "outdoor", services: ["residential turf", "pet turf", "putting greens", "commercial turf"], decision: "base preparation, drainage and turf selection", proof: "seam details, drainage layers and completed yards" },
  { slug: "outdoor-lighting-seo", name: "Outdoor Lighting Companies", short: "Outdoor Lighting Company", category: "outdoor", services: ["landscape lighting", "path lighting", "architectural lighting", "lighting maintenance"], decision: "nighttime design, fixture quality and service access", proof: "night photography, lighting plans and fixture warranties" },
  { slug: "pond-contractor-seo", name: "Pond Contractors", short: "Pond Contractor", category: "outdoor", services: ["pond installation", "pond repair", "waterfall construction", "pond maintenance"], decision: "water quality, liner construction and ongoing care", proof: "finished ponds, filtration designs and maintenance knowledge" },
  { slug: "garden-designer-seo", name: "Garden Designers", short: "Garden Designer", category: "outdoor", services: ["garden design", "planting plans", "native gardens", "pollinator gardens"], decision: "plant knowledge, site fit and a realistic maintenance plan", proof: "seasonal garden photos, planting plans and local plant expertise" },
  { slug: "sod-installation-seo", name: "Sod Installation Companies", short: "Sod Installation Company", category: "outdoor", services: ["new sod installation", "lawn replacement", "soil preparation", "commercial sod"], decision: "soil preparation, grass variety and watering guidance", proof: "prepared sites, established lawns and local turf knowledge" },
  { slug: "erosion-control-seo", name: "Erosion Control Contractors", short: "Erosion Control Contractor", category: "outdoor", services: ["slope stabilization", "erosion matting", "shoreline stabilization", "construction erosion control"], decision: "site diagnosis, engineering fit and permit compliance", proof: "stabilized sites, specified systems and inspection experience" },
  { slug: "yard-drainage-seo", name: "Yard Drainage Contractors", short: "Yard Drainage Contractor", category: "outdoor", services: ["French drains", "yard grading", "downspout drainage", "standing water correction"], decision: "correct diagnosis of grade, soil and discharge route", proof: "drainage plans, before-and-after storms and clean installations" },
  { slug: "playground-installer-seo", name: "Playground Installers", short: "Playground Installer", category: "outdoor", services: ["commercial playgrounds", "backyard playsets", "safety surfacing", "playground repair"], decision: "safety standards, site preparation and age-appropriate design", proof: "completed sites, safety surfacing and inspection documentation" },

  { slug: "mobile-home-repair-seo", name: "Mobile Home Repair", short: "Mobile Home Repair Company", category: "specialty", services: ["mobile home leveling", "skirting repair", "roof repair", "floor repair"], decision: "experience with manufactured-home systems", proof: "similar repairs, leveling equipment and community references" },
  { slug: "residential-elevator-seo", name: "Residential Elevator Companies", short: "Residential Elevator Company", category: "specialty", services: ["home elevator installation", "elevator repair", "lift modernization", "annual maintenance"], decision: "safety, code compliance and long-term service", proof: "licenses, supported equipment and inspection history" },
  { slug: "accessibility-remodeling-seo", name: "Accessibility Remodelers", short: "Accessibility Remodeling Contractor", category: "specialty", services: ["accessible bathrooms", "wheelchair ramps", "doorway widening", "aging-in-place remodeling"], decision: "safe design that preserves dignity and independence", proof: "accessible projects, product knowledge and thoughtful client reviews" },
  { slug: "radon-mitigation-seo", name: "Radon Mitigation Companies", short: "Radon Mitigation Company", category: "specialty", services: ["radon testing", "radon mitigation", "system repair", "real estate radon service"], decision: "certification and verified post-installation levels", proof: "credentials, system diagrams and post-test results" },
  { slug: "asbestos-abatement-seo", name: "Asbestos Abatement", short: "Asbestos Abatement Company", category: "specialty", services: ["asbestos testing", "asbestos removal", "floor tile abatement", "popcorn ceiling abatement"], decision: "licensed containment and documented clearance", proof: "licenses, containment process and disposal compliance" },
  { slug: "lead-paint-abatement-seo", name: "Lead Paint Abatement", short: "Lead Abatement Company", category: "specialty", services: ["lead paint testing", "lead abatement", "lead-safe renovation", "clearance preparation"], decision: "certified work practices and occupant protection", proof: "certifications, containment details and clearance documentation" },
  { slug: "portable-toilet-rental-seo", name: "Portable Toilet Rentals", short: "Portable Toilet Rental Company", category: "specialty", services: ["construction toilets", "event restrooms", "restroom trailers", "hand-wash stations"], decision: "availability, delivery timing and dependable servicing", proof: "clean units, service schedules and event references" },
  { slug: "dumpster-rental-seo", name: "Dumpster Rental Companies", short: "Dumpster Rental Company", category: "specialty", services: ["roll-off dumpsters", "construction dumpsters", "residential cleanout dumpsters", "same-day dumpster delivery"], decision: "right sizing, transparent weight limits and delivery access", proof: "clear pricing rules, container photos and reliable pickup reviews" },
];

const lower = (s: string) => s.toLowerCase();

export function makeExpandedIndustry(seed: ExpansionSeed): Industry {
  const [primary, second, third, fourth] = seed.services;
  const trade = lower(seed.short);
  return {
    slug: seed.slug,
    name: seed.name,
    short: seed.short,
    category: seed.category,
    blurb: `${primary}, ${second} and related local work`,
    title: `${seed.short} SEO | Google Maps & AI`,
    description: `SEO for ${lower(seed.name)}. Rank for ${primary}, ${second} and high-intent local searches across Google Maps and AI answers.`,
    h1: ["", `${seed.short} SEO`, " that turns local searches into qualified enquiries."],
    lead: `Customers search by the exact service they need. I help your business get found for ${primary}, ${second}, ${third} and ${fourth} across Google Maps, organic search and AI answers.`,
    problemTitle: `The best ${trade} does not automatically get found.`,
    problem: [
      `People comparing ${lower(seed.name)} want confidence in ${seed.decision}. A thin homepage or an incomplete Business Profile cannot answer those questions, so better-presented competitors get the call.`,
      `I separate the intent behind ${primary}, ${second}, ${third} and ${fourth}, then connect those pages to your profile, reviews and local proof. That gives Google and prospective customers a clear reason to choose you.`,
    ],
    searches: [`${primary} near me`, `${primary} company`, `${second} near me`, `${third} service`, `${fourth} company`, `${trade} near me`],
    ai: [
      `Who is the best ${trade} near me for ${primary}?`,
      `Which local company offers ${second} and has strong reviews?`,
      `How do I compare ${lower(seed.name)} for ${seed.decision}?`,
    ],
    focus: [
      { t: "Service-intent pages", d: `Separate, useful pages for ${primary}, ${second}, ${third} and ${fourth}, without overlapping keyword variants.` },
      { t: "Proof customers can verify", d: `Show ${seed.proof} on the pages where customers make their decision.` },
      { t: "Local conversion path", d: "Make service area, availability, qualifications and the next step obvious on mobile and in the Business Profile." },
    ],
    faq: [
      { q: `What should a ${trade} website rank for first?`, a: `Start with the services that produce the best customers and that you can prove well. For most businesses in this niche, that means ${primary}, ${second}, ${third} and ${fourth}, supported by one clear page for each intent.` },
      { q: `What helps ${lower(seed.name)} rank in Google Maps?`, a: `A correct primary category, complete services, consistent business details, recent job photos, reviews that naturally mention the work completed, and a website that clearly supports the same services and service area.` },
    ],
    cta: `Want more qualified ${trade} enquiries?`,
  };
}

export const EXPANDED_INDUSTRIES: Industry[] = SEEDS.map(makeExpandedIndustry);
