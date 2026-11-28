import type { CityDeep } from "./deep-types";

/** City-specific depth for the US city pages. Adds to, and does not repeat, lib/cities/data.ts. */
export const CITY_DEEP: Record<string, CityDeep> = {
  mckinney: {
    housing: [
      "McKinney has two very different housing stories. Around the historic downtown square there are older homes, some going back more than a century, with the quirks that come with age. Most of the city, though, is newer slab-on-grade construction: Stonebridge Ranch from the 1990s and 2000s, then Craig Ranch and the neighborhoods pushing north and east.",
      "For trades that means two customer types. The first wave of master-planned homes is now old enough for first roof replacements, original water heaters and tired AC systems. The brand-new homes in Prosper, Celina and Princeton need warranty-gap repairs, irrigation and maintenance plans, and their owners have no trades saved in their phone yet.",
    ],
    seasons: [
      {
        when: "March to June",
        what: "Peak hail and severe storm season in North Texas. Roofers need storm damage and insurance inspection pages live, plus a fast way to show fresh reviews after each storm.",
      },
      {
        when: "July to September",
        what: "Long stretches of triple-digit heat. AC repair is the urgent search, and dry clay soil shrinks, which brings slab leak and foundation-related plumbing calls.",
      },
      {
        when: "October to November",
        what: "The best window for AC tune-ups to switch over to furnace and heat pump checks, and for roofers to build rankings before the next spring.",
      },
      {
        when: "December to February",
        what: "Hard freezes are rare but serious. Winter Storm Uri in 2021 showed what burst pipes look like across a whole metro, so plumbers should have freeze and burst pipe pages ready.",
      },
    ],
    areas: [
      { name: "Historic Downtown McKinney", note: "Older homes around the square need repipes, electrical updates and roofers who are careful with original details." },
      { name: "Stonebridge Ranch", note: "A large 1990s and 2000s community now reaching first roof, water heater and AC replacement age." },
      { name: "Craig Ranch", note: "Newer homes and townhomes where owners search for maintenance plans and warranty-gap repairs." },
      { name: "Prosper", note: "Fast growth and larger homes, searched on its own rather than as part of McKinney." },
      { name: "Princeton", note: "One of the fastest-filling towns in east Collin County, with plenty of first-time buyers." },
      { name: "Celina", note: "New subdivisions on former farmland, plus rural lots further out that still rely on septic." },
    ],
    competition:
      "The McKinney map pack is more active than most cities on this list because Dallas-area companies and franchise brands reach into Collin County. After big hail storms, out-of-town roofers set up quickly and some disappear just as fast. A local business with steady reviews and pages for each town can still win, especially in the newer towns where few competitors have built anything yet.",
    faqs: [
      {
        q: "Do brand-new homes in Collin County really need local trades?",
        a: "Yes. Builder warranties cover some things for a limited time, and after that owners need their own plumber, roofer and AC company. That handover moment is when they search, and when a good page wins a customer for years.",
      },
      {
        q: "Should McKinney plumbers write about foundation and slab issues?",
        a: "If you do that work, yes. North Texas clay moves with wet and dry spells, and homeowners search for slab leak detection when they notice warm floors or a rising water bill. Clear pages on what you check and how you repair it build trust.",
      },
      {
        q: "How do I stand out when Dallas franchises cover McKinney too?",
        a: "Be the clearly local option. A McKinney address, photos of local jobs, reviews that mention local neighborhoods and pages for each town you serve. Franchises often run one generic page for the whole metro.",
      },
    ],
  },

  lubbock: {
    housing: [
      "Lubbock is a flat, spread-out city with a lot of brick ranch homes on slabs, many built in the decades after World War II. Neighborhoods near Texas Tech, like Tech Terrace, are older still, and much of that stock is now rented to students. The newest growth is on the south and southwest sides, toward the Lubbock-Cooper area and Wolfforth.",
      "Older homes mean original plumbing, aging ductwork and roofs that have been through many hail seasons. Rentals mean landlords and property managers who care about speed and price. Outside city limits, acreage homes add septic and well work, and the constant West Texas wind and dust wear on outdoor AC units and roofs alike.",
    ],
    seasons: [
      {
        when: "April to June",
        what: "The heart of hail and severe storm season on the South Plains. Roofers need storm pages, insurance claim help and a plan to get reviews in quickly before storm chasers flood the area.",
      },
      {
        when: "July to August",
        what: "Hot, dry summers keep AC repair busy. Dust and wind clog filters and condensers, so tune-up and coil cleaning offers make sense.",
      },
      {
        when: "Mid-August",
        what: "Texas Tech students move in. Landlords need plumbing, HVAC and handyman work done fast before leases start.",
      },
      {
        when: "November to February",
        what: "Real cold snaps and hard freezes. Furnace repair, heat pump service and frozen pipe calls rise, and plumbers should have emergency pages ready.",
      },
    ],
    areas: [
      { name: "Tech Terrace", note: "Older homes near campus, many rented to students, with steady repair and replacement work." },
      { name: "South Lubbock and Lubbock-Cooper", note: "Where most new building is happening, with new homeowners searching for every trade." },
      { name: "Wolfforth", note: "Growing fast on the southwest edge, with a mix of subdivisions and acreage." },
      { name: "Shallowater", note: "Small town north of the city where rural homes rely on septic and wells." },
      { name: "Ransom Canyon", note: "Lake and canyon homes with their own roofing, plumbing and septic needs." },
      { name: "Slaton", note: "Older housing southeast of Lubbock that big-city competitors rarely target." },
    ],
    competition:
      "Lubbock's map pack is lightly contested between storms. The real competition shows up after hail, when out-of-town crews arrive with new listings and door hangers. A roofer who ranks well before storm season, with years of Lubbock reviews, usually keeps the lead because homeowners and Google both favor established local businesses.",
    faqs: [
      {
        q: "Should Lubbock roofers have a page about insurance claims?",
        a: "Yes, as long as it is honest. Explain what you inspect, how you document damage and how you work with the homeowner's adjuster. Do not promise claim outcomes. Homeowners search for this after every storm and want a contractor who explains the process.",
      },
      {
        q: "Is student rental work worth targeting in Lubbock?",
        a: "It can be steady volume. Property managers search for reliable plumbers and HVAC techs, and a page that shows quick turnaround and clear invoicing speaks to them directly.",
      },
      {
        q: "Does the wind and dust in Lubbock change what HVAC companies should promote?",
        a: "It is a good angle. Dirty filters and clogged condensers are common here, so maintenance plans and cleaning services give homeowners a reason to call before something breaks.",
      },
    ],
  },

  tyler: {
    housing: [
      "Tyler has some of the most established neighborhoods in East Texas. The Azalea District and the brick streets around it hold older homes, many on pier-and-beam foundations, set under tall pines and oaks. Newer subdivisions spread south toward Whitehouse and Bullard, and lake homes sit along Lake Tyler and Lake Palestine.",
      "Older pier-and-beam homes bring crawlspace plumbing, sagging ducts and repipes. Heavy tree cover means debris on roofs, clogged gutters and roof damage when limbs fall. Out in the county, lake houses and acreage homes depend on septic and often wells, which is steady work for septic and well companies.",
    ],
    seasons: [
      {
        when: "March to May",
        what: "Spring storms and occasional tornadoes, plus heavy pine pollen that coats roofs and AC units. Roofers and HVAC companies should be ready for storm calls and spring tune-ups.",
      },
      {
        when: "June to September",
        what: "Hot, humid summers keep AC running constantly. Wet spells also saturate soil, which is when failing septic drainfields show up.",
      },
      {
        when: "October to November",
        what: "Leaf and needle drop means gutter cleaning and roof debris work. A good time to push fall septic pumping before the holidays.",
      },
      {
        when: "December to February",
        what: "East Texas can get ice storms that bring down limbs and power lines. Tree-on-roof repairs, frozen pipes and generator searches follow.",
      },
    ],
    areas: [
      { name: "Azalea District", note: "Older, character homes that need careful roofers and plumbers who know pier-and-beam houses." },
      { name: "Lake Palestine", note: "Lake homes on septic, with docks and outdoor living that bring extra trade work." },
      { name: "Whitehouse", note: "Growing family suburb south of Tyler with newer subdivisions." },
      { name: "Bullard", note: "Mix of new homes and acreage, much of it on septic." },
      { name: "Lindale", note: "Growing town north of Tyler along I-20, searched on its own." },
      { name: "Flint", note: "Wooded lots in southwest Smith County with heavy tree cover and septic systems." },
    ],
    competition:
      "Tyler's map pack is winnable. Few home-service companies have strong websites, and many rely on word of mouth and Facebook. The bigger risk is that rural searches show results from Longview or Dallas-based lead sites, so a Tyler business that builds pages for the surrounding towns can take those searches back.",
    faqs: [
      {
        q: "Do older Tyler homes need different plumbing content?",
        a: "If you work on pier-and-beam homes, yes. Owners search for crawlspace leaks, repipes and sagging floors, and a page that shows you work under older houses builds trust quickly.",
      },
      {
        q: "Is tree damage its own search in Tyler?",
        a: "Yes. With so many tall pines, people search for tree on roof repair and storm damage after every big wind or ice event. Roofers who partner with tree services can own that search.",
      },
      {
        q: "When do Tyler septic companies get the most calls?",
        a: "Usually after long wet periods, when saturated ground shows a weak drainfield. Content about warning signs and regular pumping helps you get calls before it becomes an emergency.",
      },
    ],
  },

  "new-braunfels": {
    housing: [
      "New Braunfels mixes a historic core with very new growth. Around downtown and Gruene there are older homes with German heritage character. Along I-35 and the east and north sides, master-planned subdivisions keep adding slab-on-grade homes, while west of town the Hill Country brings custom homes on large, rocky lots.",
      "Much of the area sits on or near the Edwards Aquifer, and thin soil over limestone makes septic design and installation specialized work. New subdivisions mean a wave of homes coming out of builder warranty at the same time. River and lake homes, many used as vacation rentals, need fast repairs when things break.",
    ],
    seasons: [
      {
        when: "March to June",
        what: "Spring storms and hail along the I-35 corridor, plus heavy rain that can flood low areas. Roofers and water damage pros should be ready.",
      },
      {
        when: "May to September",
        what: "River season on the Comal and Guadalupe brings crowds and full vacation rentals. Rental owners need same-day plumbing and AC repairs.",
      },
      {
        when: "July to September",
        what: "Peak heat. AC repair and replacement searches spike, especially in homes where systems are reaching the end of their life.",
      },
      {
        when: "November to February",
        what: "Mild winters with the occasional hard freeze, like Winter Storm Uri in 2021. Plumbers should have freeze and burst pipe pages ready, and septic companies can push routine pumping.",
      },
    ],
    areas: [
      { name: "Gruene", note: "Historic district and river homes with older plumbing and many vacation rentals." },
      { name: "Canyon Lake", note: "Lake homes on septic across rocky ground, a strong area for septic and well work." },
      { name: "Bulverde", note: "Hill Country homes on acreage, often with aerobic systems and wells." },
      { name: "Spring Branch", note: "Rural, spread-out properties along US 281 where few competitors build pages." },
      { name: "Garden Ridge", note: "Established, larger homes reaching replacement age for roofs and HVAC." },
      { name: "Seguin", note: "Growing city east on I-10, searched separately from New Braunfels." },
    ],
    competition:
      "New Braunfels sits between two big metros, so some searches show San Antonio or Austin companies. In the map pack, though, Google still favors businesses close to the searcher, and few New Braunfels trade companies have strong local pages. Septic and Hill Country searches are especially open because they need knowledge most metro companies do not show.",
    faqs: [
      {
        q: "Does the Edwards Aquifer affect septic work near New Braunfels?",
        a: "It can. Properties over the recharge zone face stricter rules, and owners often search for a contractor who understands them. A page that explains your experience with these sites, without quoting rules you are not sure of, builds trust.",
      },
      {
        q: "Should I target vacation rental owners in New Braunfels?",
        a: "Yes, if you can respond fast. River and lake rentals need repairs between guests, and owners often live out of town. Pages that mention quick turnaround and remote coordination convert well.",
      },
      {
        q: "Are new subdivisions in New Braunfels worth their own pages?",
        a: "The larger ones are. People often search by neighborhood name, and a page showing work you have done there tells them you know their homes.",
      },
    ],
  },

  conroe: {
    housing: [
      "Conroe has an older core around downtown, but most homes in the area are newer slab-on-grade houses built as Houston's suburbs moved north. Lake Conroe, filled in the 1970s, is ringed by a mix of older lake cabins, golf communities and large custom homes. Further out, Willis, Montgomery and Magnolia mix subdivisions with wooded acreage.",
      "Heavy tree cover and Gulf storms mean roof and tree damage are part of life here. Older lake properties need repipes, septic upgrades and dock-side electrical work. Newer subdivisions bring a steady stream of new homeowners needing AC maintenance, water heaters and someone they trust for the first big repair.",
    ],
    seasons: [
      {
        when: "March to May",
        what: "Spring thunderstorms and occasional hail. A good time for AC tune-ups before the heat and for roofers to finish storm repairs.",
      },
      {
        when: "June to November",
        what: "Atlantic hurricane season. Harvey in 2017 and Beryl in 2024 both hit this region hard, so roofers, tree services and generator installers need storm pages ready before June.",
      },
      {
        when: "July to September",
        what: "Peak heat and humidity. AC breakdowns are emergencies, and HVAC companies that rank well take most of the calls.",
      },
      {
        when: "December to February",
        what: "Mild winters with the occasional hard freeze. Winter Storm Uri in 2021 caused burst pipes across the region, so plumbers should have freeze content ready.",
      },
    ],
    areas: [
      { name: "Lake Conroe", note: "Waterfront homes with septic, docks and older properties that need specialized work." },
      { name: "Willis", note: "Growing town north of Conroe with a mix of new homes and rural lots." },
      { name: "Montgomery", note: "Historic small town and lake communities on the west side of the lake." },
      { name: "Magnolia", note: "Wooded acreage and new subdivisions, much of it on septic and wells." },
      { name: "Grand Central Park", note: "Large newer master-planned community where owners search by community name." },
      { name: "The Woodlands", note: "Higher-value homes to the south, worth targeting once Conroe rankings are strong." },
    ],
    competition:
      "Conroe gets some spillover from Houston brands and franchises, which is why it sits at low to medium competition. After hurricanes, out-of-area roofers and tree crews move in quickly. Local companies with a Conroe address, steady reviews and pages for the lake communities usually hold the map pack once the storm crews leave.",
    faqs: [
      {
        q: "Should Conroe HVAC companies promote generators too?",
        a: "If you install them, yes. After long power outages in recent storms, many homeowners search for whole-home generators, and it pairs naturally with AC service.",
      },
      {
        q: "Are lake homes on Lake Conroe a separate market?",
        a: "In many ways, yes. Lake owners often have septic, older plumbing and outdoor living spaces, and many are second homes. A dedicated Lake Conroe page speaks to them directly.",
      },
      {
        q: "How early should I prepare for hurricane season in Conroe?",
        a: "Spring at the latest. Storm pages, a reviewed Google profile and storm-prep content should be live before June, so you are ranking when a storm forms.",
      },
    ],
  },

  "cape-coral": {
    housing: [
      "Cape Coral was planned from the late 1950s as a grid of canal lots, and it is mostly single-story concrete block homes on slabs, many with pools and screened lanais. The Southeast Cape is the oldest part and has had city sewer the longest. The Northwest and North Cape are newer, with more vacant lots still being built on and more homes on wells and septic.",
      "Older block homes bring roof replacements, aging plumbing and electrical updates, while new builds keep the AC and pool trades busy. Insurance drives a lot of roofing work, since four-point and wind mitigation inspections affect what owners pay. Canal homes add docks, seawalls and boat lifts, and salt air is hard on outdoor AC units.",
    ],
    seasons: [
      {
        when: "June to November",
        what: "Hurricane season. Ian in 2022 and Helene and Milton in 2024 all affected Lee County, so roofers, shutter companies and water damage pros should have storm pages live before June.",
      },
      {
        when: "June to September",
        what: "The rainy season, with daily thunderstorms and high humidity. AC runs nonstop, and heavy rain stresses septic systems and older roofs.",
      },
      {
        when: "October to April",
        what: "Dry season and snowbird season. Seasonal residents return and want AC service, repairs and pool work done before or soon after they arrive.",
      },
      {
        when: "Spring",
        what: "Many insurance renewals and home sales bring roof certifications, four-point inspections and wind mitigation reports. Roofers should have clear pages for these.",
      },
    ],
    areas: [
      { name: "Southeast Cape", note: "The oldest homes in the city, now due for repipes, roofs and electrical updates." },
      { name: "Northwest Cape", note: "Newer homes on wells and septic, with ongoing construction and new owners." },
      { name: "Pine Island", note: "Rural, island homes hit hard by Ian, still rebuilding roofs and septic systems." },
      { name: "Matlacha", note: "Small fishing village on the way to Pine Island, with older homes and heavy storm damage." },
      { name: "North Fort Myers", note: "Large retiree and mobile home communities that search for reliable local trades." },
      { name: "Lehigh Acres", note: "Huge platted area east of Fort Myers, mostly on wells and septic and still filling in." },
    ],
    competition:
      "After Ian, many out-of-state roofers set up listings in Cape Coral, and some still appear in the map pack even though they have left. That clutter makes the market look crowded, but locals with real reviews and a real office often outrank them. HVAC and septic are less crowded, and neighborhood-level pages are still rare.",
    faqs: [
      {
        q: "Should Cape Coral roofers write about wind mitigation inspections?",
        a: "Yes, if you offer them or work with someone who does. Florida homeowners search for these because they can affect insurance costs, and the page brings in people who may need a roof soon.",
      },
      {
        q: "Do snowbirds search differently in Cape Coral?",
        a: "Often, yes. They search from out of state before they arrive, want work coordinated remotely and care about clear communication. Pages and reviews that show you handle that well win them over.",
      },
      {
        q: "Is it worth targeting Pine Island and Matlacha separately?",
        a: "Yes. They are smaller, but recovery work there is still going and few competitors build pages for them. The homes also have different needs, like septic and elevated structures.",
      },
    ],
  },

  "port-st-lucie": {
    housing: [
      "Most of Port St. Lucie was laid out decades ago as a grid of quarter-acre style lots, and the older neighborhoods are full of single-story concrete block homes from the 1980s and 1990s. St. Lucie West came next, and Tradition and the far west are the newest, with master-planned communities and much younger homes.",
      "That older housing stock is reaching the age of roof replacements, repipes and failing septic drainfields. Concern over Indian River Lagoon water quality has been part of the push to convert septic areas to sewer. New neighborhoods out west bring new homeowners who need AC maintenance, water treatment and pest control.",
    ],
    seasons: [
      {
        when: "June to November",
        what: "Hurricane season. Frances and Jeanne in 2004 and Milton's tornadoes in 2024 are local memories. Roofers, shutter installers and generator companies should have storm content live by June.",
      },
      {
        when: "June to September",
        what: "Rainy season with heavy afternoon storms. Saturated ground exposes weak drainfields, so septic companies get urgent calls.",
      },
      {
        when: "October to April",
        what: "Dry, mild weather and seasonal residents. A good time for roof replacements, AC replacements and septic pumping before the rains return.",
      },
      {
        when: "February to March",
        what: "Spring training brings visitors to St. Lucie West, and the dry season is when many homes go on the market, which means inspection-driven repairs.",
      },
    ],
    areas: [
      { name: "Tradition", note: "Large, fast-growing master-planned community with new homeowners searching for every trade." },
      { name: "St. Lucie West", note: "Established 1990s community now due for roofs, AC and water heaters." },
      { name: "Torino", note: "Older neighborhood with many homes on septic and steady repair work." },
      { name: "Fort Pierce", note: "Older city to the north with historic homes, a waterfront and more rural lots." },
      { name: "Jensen Beach", note: "Coastal Martin County community with older homes and salt air exposure." },
      { name: "Stuart", note: "Higher-value homes and waterfront properties searched separately from Port St. Lucie." },
    ],
    competition:
      "The Treasure Coast map pack is lighter than Palm Beach or Miami, and many local trade companies still have thin websites. National franchises cover HVAC and plumbing, but septic searches are mostly local companies with few reviews. Building pages for each neighborhood and town is usually enough to move into the top results.",
    faqs: [
      {
        q: "Why is septic such a big deal in Port St. Lucie?",
        a: "Many older neighborhoods were built before sewer lines reached them, and systems installed decades ago are now failing. Owners search for pumping, drainfield repair and their options for connecting to sewer.",
      },
      {
        q: "Should I build pages for Tradition and St. Lucie West separately?",
        a: "Yes. People search by community name, and the homes there are very different in age. A page for each shows you know the area and the kind of work it needs.",
      },
      {
        q: "Are hurricane shutters and impact windows a good fit with roofing SEO?",
        a: "Often, yes. Homeowners preparing for storm season search for both, and a page that covers storm protection as a whole brings in people planning bigger projects.",
      },
    ],
  },

  ocala: {
    housing: [
      "Ocala has a historic core with older homes, but most of Marion County is spread out: decades-old platted subdivisions like Marion Oaks and Silver Springs Shores, horse farms with barns and outbuildings, and large retirement communities. The ground is limestone, and the county sits over the aquifer that feeds Silver Springs and Rainbow Springs.",
      "That geology means hard water, sinkhole concerns and close attention to septic systems near the springs. Most rural homes depend on wells, so well pumps and water treatment are steady work. Retirement communities bring single-story homes with maintenance needs and owners who value reliability over the lowest price.",
    ],
    seasons: [
      {
        when: "June to September",
        what: "Rainy season with frequent lightning. Roof repairs, surge damage and AC breakdowns spike, and septic systems struggle in saturated ground.",
      },
      {
        when: "June to November",
        what: "Hurricane season. Ocala is inland but still gets wind, rain and downed trees from storms crossing the state. Roofers and tree services should be ready.",
      },
      {
        when: "December to February",
        what: "North Central Florida gets more freezes than South Florida. Heat pump service, frozen pipes and well pump protection matter.",
      },
      {
        when: "October to April",
        what: "Horse show season and seasonal residents. Farms and retirement communities schedule bigger projects like roof replacements, AC upgrades and well work.",
      },
    ],
    areas: [
      { name: "Marion Oaks", note: "Huge subdivision southwest of Ocala on wells and septic, still adding new homes." },
      { name: "Silver Springs Shores", note: "Large older subdivision with aging homes and septic systems." },
      { name: "Dunnellon", note: "Small town on the Rainbow River with waterfront homes and septic near the springs." },
      { name: "On Top of the World", note: "Large 55-plus community where owners research carefully before hiring." },
      { name: "Northwest Ocala horse country", note: "Farms and estates around the World Equestrian Center with barns, wells and large properties." },
      { name: "Belleview and Summerfield", note: "Growing area south of Ocala near The Villages, with retirees and new builds." },
    ],
    competition:
      "Ocala's map pack is lightly contested. Many septic and well companies are family businesses with few reviews and basic websites. Directories often rank for broader terms, which leaves room for a local company with strong pages for each subdivision and community.",
    faqs: [
      {
        q: "Should Ocala plumbers promote water treatment?",
        a: "Yes. Most rural homes are on wells with hard water, and many owners search for softeners, filters and iron treatment. It pairs well with well pump and plumbing work.",
      },
      {
        q: "Does living near the springs change septic work?",
        a: "It can. Areas near the springs have drawn more attention to septic systems and nitrogen, so some owners search for upgrades or advice. A page that explains your experience with these properties builds trust.",
      },
      {
        q: "Are farms and barns a separate market in Ocala?",
        a: "Yes. Farm owners need roofers, electricians and plumbers for barns, water lines and outbuildings, and a page about farm work stands out because few competitors have one.",
      },
    ],
  },

  lakeland: {
    housing: [
      "Lakeland has older neighborhoods around its many downtown lakes, including historic districts like Dixieland and Lake Morton with early 20th century bungalows. Further out, Polk County is mostly single-story block homes from recent decades, with brand-new subdivisions spreading through Davenport, Haines City and Winter Haven.",
      "Older Lakeland homes need repipes, electrical updates and roofers who handle older roof lines. New builds bring warranty work and maintenance plans. Davenport and the area near the Orlando attractions have many vacation rental homes that need fast repairs, and rural Polk County lots often use septic.",
    ],
    seasons: [
      {
        when: "June to September",
        what: "Rainy season with daily thunderstorms. AC repair is urgent, and storms bring roof leaks and lightning damage.",
      },
      {
        when: "June to November",
        what: "Hurricane season. Ian in 2022 and Milton in 2024 both crossed central Florida, so storm pages need to be live before June.",
      },
      {
        when: "October to April",
        what: "Dry season and visitor season. Vacation rentals near Davenport stay busy, and owners need quick turnaround on repairs between guests.",
      },
      {
        when: "Spring",
        what: "Heat builds before the rains. A good time for AC tune-ups, replacements and roof work while the weather is dry.",
      },
    ],
    areas: [
      { name: "Dixieland and Lake Morton", note: "Historic Lakeland neighborhoods with older homes that need specialist plumbing and roofing." },
      { name: "Winter Haven", note: "Chain of lakes city with lakefront homes and fast-growing subdivisions." },
      { name: "Haines City", note: "One of the fastest-growing cities in the country, full of new homeowners." },
      { name: "Davenport", note: "New communities and vacation rentals near the Orlando attractions." },
      { name: "Auburndale", note: "Smaller city between Lakeland and Winter Haven, growing with new builds." },
      { name: "Bartow", note: "County seat with older homes and rural lots on septic." },
    ],
    competition:
      "Polk County's map pack is still open. Tampa and Orlando companies rarely rank inside the county, and many Polk businesses have not built pages for the fast-growing towns. In Davenport, vacation rental demand attracts some Orlando-based companies, but local businesses with reviews and nearby addresses usually win.",
    faqs: [
      {
        q: "Should I target vacation rental owners near Davenport?",
        a: "Yes, if you can respond quickly. Many owners live out of state and rely on property managers. Pages that show fast response and clear communication help you win that work.",
      },
      {
        q: "Do Lakeland's historic homes need different content?",
        a: "If you work on them, yes. Owners in Dixieland and Lake Morton search for contractors who understand older homes, and a page showing that work sets you apart.",
      },
      {
        q: "Is Polk County growth spread evenly?",
        a: "No. It is concentrated in the eastern and northeastern towns like Haines City and Davenport. Building pages there early is how you grow with it.",
      },
    ],
  },

  savannah: {
    housing: [
      "Savannah's historic district and Victorian District are full of 19th century homes, many on raised foundations, with original windows, slate or metal roofs and very old plumbing. Midtown neighborhoods like Ardsley Park add early 20th century homes. Pooler, Richmond Hill and Rincon are mostly new slab-on-grade subdivisions, and the islands mix older homes with coastal properties.",
      "Historic homes need trades who know older materials and who understand that exterior changes in the historic district go through a review process. Humidity, termites and coastal storms are constant threats. New subdivisions bring a different customer: busy families who need reliable AC, plumbing and maintenance without fuss.",
    ],
    seasons: [
      {
        when: "March to April",
        what: "Heavy spring pollen coats roofs, cars and AC units. A good time for AC tune-ups, gutter cleaning and filter offers.",
      },
      {
        when: "June to November",
        what: "Hurricane season. Matthew in 2016 and Irma in 2017 brought flooding and wind damage to the coast, so roofers and water damage pros need storm pages live early.",
      },
      {
        when: "June to September",
        what: "Hot, humid summers. AC breakdowns are urgent, and older ductwork in historic homes struggles to keep up.",
      },
      {
        when: "December to February",
        what: "Mild winters with occasional freezes. Heat pump service, crawlspace pipe protection and roof repairs before spring.",
      },
    ],
    areas: [
      { name: "Historic District", note: "19th century homes that need specialist roofing, plumbing and careful repairs." },
      { name: "Ardsley Park", note: "Early 20th century Midtown homes due for repipes, HVAC upgrades and roofs." },
      { name: "Pooler", note: "Fast-growing suburb near the airport with new homes and new homeowners." },
      { name: "Richmond Hill", note: "Growing Bryan County city close to the Hyundai plant, searched separately." },
      { name: "Wilmington Island", note: "Island homes with marsh views, storm exposure and some septic." },
      { name: "Tybee Island", note: "Beach homes and vacation rentals that need storm-ready roofs and fast repairs." },
    ],
    competition:
      "Savannah's map pack has a few established roofing and HVAC brands, which keeps it at low to medium competition. The growth towns to the west and south are less contested, and historic-home work is a niche where real expertise beats bigger companies. After storms, out-of-area crews appear, but local reviews still carry the most weight.",
    faqs: [
      {
        q: "Do I need special experience to work on historic Savannah homes?",
        a: "Homeowners there expect it. Showing past historic work, explaining how you handle older materials and mentioning that you understand the review process for exterior changes helps them trust you.",
      },
      {
        q: "Should Savannah HVAC companies talk about humidity?",
        a: "Yes. Humidity control, dehumidifiers and duct issues are real concerns here, especially in older homes. Content that explains how you handle it stands out from generic AC pages.",
      },
      {
        q: "Are Tybee and the islands worth separate pages?",
        a: "Yes. Island homes face more storm exposure and many are rentals. Owners search by island name, and few competitors build pages for them.",
      },
    ],
  },

  augusta: {
    housing: [
      "Augusta has some of the oldest neighborhoods in Georgia. Summerville, on the hill above downtown, is full of older homes, many on crawlspaces, under big hardwood trees. Columbia County to the west is mostly newer slab and crawlspace subdivisions, built fast as the military and medical workforce grew.",
      "Big trees and older homes made Helene especially damaging here, and many roofs, gutters and HVAC units were replaced afterward. Older homes need repipes and crawlspace work. Newer Columbia County homes need AC maintenance and plumbing from companies homeowners can find quickly.",
    ],
    seasons: [
      {
        when: "March to April",
        what: "Heavy pollen and the Masters Tournament. Many homes are rented out for Masters week, so owners schedule repairs, cleaning and HVAC service just before.",
      },
      {
        when: "June to September",
        what: "Hot, humid summers. AC repair is urgent, and afternoon thunderstorms bring down limbs on roofs.",
      },
      {
        when: "June to November",
        what: "Hurricane season. Helene in 2024 showed that inland Augusta is not safe from tropical storms. Roofers, tree services and generator installers should be ready.",
      },
      {
        when: "December to February",
        what: "Cool winters with occasional freezes. Heat pump service, crawlspace pipe protection and generator maintenance.",
      },
    ],
    areas: [
      { name: "Summerville", note: "Historic hill neighborhood with older homes, big trees and specialist repair needs." },
      { name: "Evans", note: "Large, fast-growing Columbia County community with newer homes." },
      { name: "Grovetown", note: "Growing area near Fort Eisenhower with many military families." },
      { name: "Martinez", note: "Established suburb with homes reaching replacement age." },
      { name: "North Augusta", note: "South Carolina side of the river, searched separately." },
      { name: "Hephzibah", note: "Rural south Richmond County with homes on septic and large lots." },
    ],
    competition:
      "Augusta's map pack is lightly contested. Many local trade companies rely on referrals, and after Helene some out-of-town crews still have listings. A local company with steady reviews and pages for Columbia County and North Augusta can rank quickly.",
    faqs: [
      {
        q: "Is the Masters a real opportunity for Augusta trades?",
        a: "It can be. Homeowners renting out for the tournament want everything working that week, so a page about pre-Masters inspections and repairs can bring in timely work.",
      },
      {
        q: "Should I target military families near Fort Eisenhower?",
        a: "Yes. Families move often and need trusted trades fast. Reviews from other military families and clear pricing help them choose you.",
      },
      {
        q: "Do older Augusta homes need crawlspace content?",
        a: "If you do that work, yes. Many older homes have crawlspaces with plumbing, ducts and moisture issues, and owners search for help with them.",
      },
    ],
  },

  gilbert: {
    housing: [
      "Gilbert is mostly stucco homes on slabs with concrete tile roofs, built in a rush through the 1990s and 2000s. Val Vista Lakes is one of the older communities, while Power Ranch, Seville, Agritopia and Morrison Ranch came later. Many homes have pools, and a lot of roofs now carry solar panels.",
      "Tile roofs often look fine while the underlayment beneath them wears out, so roofers spend much of their time on underlayment replacement and monsoon repairs. Solar panels mean roof work often needs panel removal and reinstall. Hard water shortens the life of water heaters and fixtures, and AC systems in those 1990s and 2000s homes are being replaced in waves.",
    ],
    seasons: [
      {
        when: "May to September",
        what: "Extreme heat. AC failures are emergencies, and HVAC companies that rank well take most of the calls. Maintenance plans sold in spring pay off now.",
      },
      {
        when: "June 15 to September 30",
        what: "Monsoon season. Dust storms, high winds and sudden heavy rain bring roof leaks, lifted tiles and damaged solar panels.",
      },
      {
        when: "October to April",
        what: "Mild weather and winter visitors. Best season for roof underlayment replacement, re-roofs and outdoor projects.",
      },
      {
        when: "February to April",
        what: "Spring is when smart HVAC companies push tune-ups and replacements before the heat, and when people sell homes, which triggers inspection repairs.",
      },
    ],
    areas: [
      { name: "Val Vista Lakes", note: "Older lake community where homes are due for roofs, AC and water heaters." },
      { name: "Power Ranch", note: "Large master-planned community where owners search by name." },
      { name: "Seville", note: "Golf community with higher-value homes and pools." },
      { name: "Agritopia", note: "Distinct community with a loyal local identity and steady trade needs." },
      { name: "Heritage District", note: "Downtown Gilbert, with older homes near the original town center." },
      { name: "San Tan Valley", note: "Fast-growing area in Pinal County with newer homes and some septic." },
    ],
    competition:
      "Gilbert is the most competitive city on this list for HVAC because Phoenix-area brands and franchises advertise across the whole East Valley. Roofing and plumbing are more open, especially for tile underlayment and hard water work. Community-level pages are still rare, and they are often the fastest route into the map pack.",
    faqs: [
      {
        q: "Why do Gilbert roofers talk about underlayment so much?",
        a: "Because concrete tiles can last a long time but the underlayment beneath them wears out sooner. Homeowners often do not know this until they have a leak, so content that explains it brings in high-value work.",
      },
      {
        q: "Should I mention solar panels on roofing pages?",
        a: "Yes. Many Gilbert homes have solar, and owners need to know you can handle panel removal and reinstall during roof work, or work with someone who does.",
      },
      {
        q: "How do Gilbert HVAC companies compete with big Phoenix brands?",
        a: "By being local and specific. Pages for each community, reviews from local customers and fast response times in summer beat a metro-wide brand for many searches.",
      },
    ],
  },

  prescott: {
    housing: [
      "Prescott sits over a mile high, with historic Victorian homes near Courthouse Square, older neighborhoods under ponderosa pines and newer communities like Prescott Lakes. Prescott Valley is mostly newer tract homes, while Chino Valley, Williamson Valley and Dewey-Humboldt are acreage properties, many of them a mix of site-built and manufactured homes.",
      "Outside the city, most homes rely on wells and septic, and rocky ground makes installs and repairs specialized work. Winters bring freezing pipes and heating demand, summers bring monsoon storms, and wildfire risk has made defensible space and fire-resistant materials part of the conversation.",
    ],
    seasons: [
      {
        when: "May to June",
        what: "Dry, windy wildfire season before the monsoon. Defensible space, tree service and fire-resistant roofing are top of mind.",
      },
      {
        when: "July to September",
        what: "Monsoon season with lightning, heavy rain and hail. Roof leaks, lightning damage and well pump problems spike.",
      },
      {
        when: "October to November",
        what: "Heating season starts. Furnace and heat pump service, and septic pumping before the ground freezes.",
      },
      {
        when: "December to February",
        what: "Snow and hard freezes. Frozen pipes, furnace breakdowns and roof damage from snow and ice.",
      },
    ],
    areas: [
      { name: "Downtown Prescott", note: "Historic homes near Courthouse Square that need careful roofing and plumbing." },
      { name: "Prescott Valley", note: "Larger, newer town with tract homes and steady HVAC and plumbing demand." },
      { name: "Chino Valley", note: "Acreage properties on wells and septic, a strong area for septic and well work." },
      { name: "Williamson Valley", note: "Rural ranch properties north of Prescott with long driveways, wells and septic." },
      { name: "Prescott Lakes", note: "Newer, higher-value homes where owners expect quality and responsiveness." },
      { name: "Dewey-Humboldt", note: "Small rural town east of Prescott on wells and septic." },
    ],
    competition:
      "Prescott's map pack is lightly contested, and septic results are mostly directories and franchise pages. HVAC and plumbing have a few established local names but little strong online content. A local business with real service pages, reviews and pages for each town can rank quickly.",
    faqs: [
      {
        q: "Should Prescott roofers talk about wildfire?",
        a: "Yes, carefully. Many homeowners want fire-resistant roofing and ember-resistant vents. Explain the options you offer without making promises about fire safety you cannot back up.",
      },
      {
        q: "Do Prescott HVAC companies need both heating and cooling pages?",
        a: "Yes. Prescott has real winters and warm summers, so separate pages for furnaces, heat pumps and AC capture searches in every season.",
      },
      {
        q: "Are well pump searches worth targeting in Prescott?",
        a: "Yes, especially in Chino Valley and Williamson Valley. A failed well pump is an emergency, and owners search fast for someone local.",
      },
    ],
  },

  wilmington: {
    housing: [
      "Wilmington has one of the larger historic downtowns in North Carolina, with older homes, many on crawlspaces. Beyond downtown, neighborhoods from the mid-20th century give way to fast new growth in Leland, Hampstead and Brunswick County. Beach towns have elevated homes built for storm surge.",
      "Sandy soils and a high water table near the coast make septic design and repair more complex. Humidity, salt air and hurricanes wear on roofs, siding and outdoor AC units. Crawlspace moisture is a common issue in older homes, and new subdivisions bring a steady flow of newcomers who need every trade.",
    ],
    seasons: [
      {
        when: "March to April",
        what: "Heavy yellow pine pollen covers everything. A good time for AC tune-ups, gutter cleaning and roof inspections.",
      },
      {
        when: "June to November",
        what: "Hurricane season. Florence in 2018 caused widespread flooding and roof damage, so roofers and water damage pros need storm pages ready before June.",
      },
      {
        when: "June to September",
        what: "Hot, humid summers and full beach rentals. AC breakdowns and rental repairs are urgent.",
      },
      {
        when: "December to February",
        what: "Nor'easters and the occasional freeze. Roof repairs, crawlspace pipe protection and heat pump service.",
      },
    ],
    areas: [
      { name: "Historic Downtown", note: "Older homes on crawlspaces that need careful repairs and specialist plumbing." },
      { name: "Leland", note: "One of the fastest-growing towns in the state, full of new homeowners." },
      { name: "Hampstead", note: "Growing Pender County community with many homes on septic." },
      { name: "Carolina Beach", note: "Beach homes and rentals that need storm-ready roofs and fast repairs." },
      { name: "Wrightsville Beach", note: "Higher-value coastal homes with salt air and storm exposure." },
      { name: "Southport", note: "Historic coastal town in Brunswick County with older homes and retirees." },
    ],
    competition:
      "Wilmington's map pack is lightly contested, and many SEO pages for local trades are templated agency content. After hurricanes, out-of-area crews arrive, but local reviews and real addresses still win. Pages for the beach towns and Brunswick County are often the fastest route into new searches.",
    faqs: [
      {
        q: "Do Wilmington septic companies need content about coastal soils?",
        a: "Yes. Sandy soils and high water tables make septic systems behave differently near the coast. Explaining how you handle these sites builds trust with buyers and owners.",
      },
      {
        q: "Should Wilmington HVAC companies talk about salt air?",
        a: "Yes. Salt air shortens the life of outdoor units near the coast. Pages on coastal-ready equipment and maintenance plans speak to beach-area owners.",
      },
      {
        q: "Is crawlspace work a good page for Wilmington?",
        a: "If you do it, yes. Many older homes have damp crawlspaces, and owners search for moisture control, vapor barriers and crawlspace plumbing repairs.",
      },
    ],
  },

  asheville: {
    housing: [
      "Asheville's housing is old by Southern standards. Montford, Grove Park and parts of West Asheville have Victorian and Arts and Crafts era homes, many on steep lots with crawlspaces or basements. Around the city, mountain homes sit on slopes and rural roads, and many older houses were never built with central ductwork.",
      "Steep sites and rocky ground make septic and well work specialized. Helene's flooding and landslides damaged many of those systems, and some homeowners are still repairing or replacing them. Older homes without ductwork are good candidates for heat pumps and mini-splits, and heavy tree cover means roof and gutter work is constant.",
    ],
    seasons: [
      {
        when: "March to May",
        what: "Spring rain and pollen. Septic systems show problems in saturated ground, and roofers handle winter damage.",
      },
      {
        when: "June to September",
        what: "Warm summers, though milder than the lowlands. Thunderstorms bring tree damage, and late-season tropical storms can still bring flooding, as Helene showed in 2024.",
      },
      {
        when: "October to November",
        what: "Leaf season brings visitors and full rentals, plus heating season starts. Heat pump service and gutter cleaning are busy.",
      },
      {
        when: "December to February",
        what: "Cold winters with snow and ice in the mountains. Frozen pipes, heating breakdowns and roof damage from ice.",
      },
    ],
    areas: [
      { name: "Montford", note: "Historic district with Victorian homes that need careful roofing and plumbing." },
      { name: "West Asheville", note: "Older homes being renovated, with steady demand for repipes and upgrades." },
      { name: "Black Mountain", note: "Mountain town east of Asheville with homes on wells and septic." },
      { name: "Swannanoa", note: "Valley community hit hard by Helene flooding, still rebuilding." },
      { name: "Arden and Fletcher", note: "Growing area south of Asheville near the airport with newer homes." },
      { name: "Hendersonville", note: "Retirees and older homes in Henderson County, searched separately." },
    ],
    competition:
      "Asheville's map pack is lightly contested, and searches spread across many small towns. After Helene, many out-of-state contractors came in, and some still have listings. Local businesses with real reviews, clear storm recovery content and pages for each town can win the searches that matter.",
    faqs: [
      {
        q: "Should Asheville HVAC companies focus on mini-splits?",
        a: "Yes. Many older homes have no ductwork, and mini-splits and heat pumps are a natural fit. Pages that explain options for homes without ducts bring in steady work.",
      },
      {
        q: "Do mountain septic jobs need their own pages?",
        a: "Yes. Steep lots and rocky soil make septic installs and repairs harder, and owners want contractors who show they have done this kind of work before.",
      },
      {
        q: "Is it worth targeting Hendersonville from Asheville?",
        a: "Yes, as a second step. It has many retirees and older homes, and it gets searched on its own. A dedicated page and map tracking there helps you reach it.",
      },
    ],
  },
};
