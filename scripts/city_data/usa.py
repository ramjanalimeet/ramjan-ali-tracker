"""US cities. Each sits under an existing state page: /locations/<state>/<slug>.

Picked for strong home-service demand (growth, weather, housing stock) in
mid-size markets where trade-specific SEO results are thin or templated,
rather than the big metros already crowded with specialist agencies.
"""

CITIES = [
    # ---------------------------------------------------------------- Texas
    {
        "state": "texas", "slug": "mckinney", "name": "McKinney",
        "admin": ("County", "Collin County"), "metro": "Dallas-Fort Worth",
        "areas": ["Craig Ranch", "Stonebridge Ranch", "Allen", "Prosper", "Melissa", "Princeton", "Celina", "Fairview"],
        "query": "roof repair mckinney",
        "lead": "McKinney sits in the fastest-growing corner of North Texas, with Celina, Princeton, Melissa and Anna "
                "topping national growth lists. I help McKinney roofing, plumbing, HVAC and home-service companies "
                "rank in the map pack as those suburbs fill up.",
        "headline": "New rooftops every month, and hail that tests them.",
        "market": [
            "North of Dallas, Collin County keeps adding master-planned neighborhoods. Every new street is a set of "
            "homeowners who have never hired a local roofer, plumber or AC company, so they start with Google.",
            "The area sits in the North Texas hail corridor. One spring storm can send searches for roof repair and "
            "storm damage inspection up overnight, and the contractors already ranking take most of those calls.",
            "Expansive clay soil adds another layer: slab leaks, foundation movement and cracked pipes are routine "
            "searches here, which makes plumbing a strong second focus after roofing.",
        ],
        "trades": {
            "roofing": "Hail and wind claims drive spikes every spring. Rank before storm season, not after it.",
            "plumbing": "Slab leaks, water heaters and new-build warranty gaps across Craig Ranch and Stonebridge.",
            "hvac": "Long summers and big two-storey homes make AC repair and replacement high-value searches.",
            "septic": "Rural lots toward Melissa, Princeton and east Collin County still run on septic systems.",
            "home": "Garage doors, irrigation, pest control and electricians serving fast-growing subdivisions.",
        },
        "focus": ["roofing", "plumbing", "hvac"],
        "search_note": "In McKinney I usually start with storm and roofing terms, then build pages for the newer towns to the north before competitors notice them.",
        "plan": "McKinney campaigns are built around where the growth is: separate pages and map tracking for McKinney, "
                "Prosper, Melissa, Princeton and Celina, plus storm-season content ready before the first hail warning.",
        "card": "Hail-driven roofing demand and the fastest-growing suburbs in North Texas.",
        "faqs": [
            ("Can a McKinney business rank in Celina and Prosper too?",
             "Organically, yes, with pages that are genuinely about those towns. In the map pack, distance from your address matters, so we track each town separately and push where you are closest."),
            ("When should McKinney roofers start SEO?",
             "Ideally in the off-season, before spring hail. Rankings take time to build, and the storm weeks are when they pay off."),
        ],
        "queries": ["hail damage roof repair mckinney", "slab leak repair mckinney"],
        "demand": "High", "competition": "Low-Medium",
        "why": "Collin County growth (Celina, Princeton, Melissa, Anna on 2025 Census fastest-growing lists) plus hail. SERPs show templated agency pages, not McKinney specialists.",
    },
    {
        "state": "texas", "slug": "lubbock", "name": "Lubbock",
        "admin": ("County", "Lubbock County"), "metro": "South Plains",
        "areas": ["Wolfforth", "Shallowater", "Slaton", "Idalou", "Ransom Canyon", "Lubbock-Cooper", "Abernathy"],
        "query": "hail damage roof lubbock",
        "lead": "Lubbock is one of the most hail-prone cities in the country, and it is the hub for the whole South "
                "Plains. I help Lubbock roofers, plumbers, HVAC and home-service companies own the searches that "
                "follow every storm.",
        "headline": "Hail country, with a whole region searching from one city.",
        "market": [
            "Severe spring storms roll across the South Plains every year, and hail damage brings a flood of roof "
            "repair and replacement searches. Out-of-town storm chasers arrive fast, so a strong local profile with "
            "real reviews is the advantage a Lubbock roofer has.",
            "Lubbock also gets real winters. Furnace repair, frozen pipes and heat pump searches matter here in a "
            "way they do not further south.",
            "With Texas Tech in town there is a large rental market, which means property managers searching for "
            "reliable plumbers, HVAC techs and handymen year round.",
        ],
        "trades": {
            "roofing": "Storm restoration and insurance work. Beat the storm chasers with a trusted local presence.",
            "hvac": "Hot summers and cold snaps mean demand for both AC and furnace work.",
            "plumbing": "Frozen and burst pipes in winter, plus steady rental and student-housing work.",
            "septic": "Homes outside city limits in Wolfforth, Shallowater and rural Lubbock County use septic.",
            "home": "Windows, siding, gutters and fencing after storms, plus electricians and pest control.",
        },
        "focus": ["roofing", "hvac", "plumbing"],
        "search_note": "For Lubbock I prioritise storm and insurance roofing terms, then year-round HVAC and plumbing so the phone does not go quiet between storms.",
        "plan": "Lubbock plans focus on owning roofing and storm searches before hail season, with area pages for "
                "Wolfforth, Shallowater and the growing south side, and HVAC content that covers both seasons.",
        "card": "One of the most hail-prone cities in the US, serving the whole South Plains.",
        "faqs": [
            ("How do Lubbock roofers compete with storm chasers?",
             "With what storm chasers cannot fake: years of local reviews, a verified Lubbock address, real job photos and pages about Lubbock neighborhoods. That is what Google and homeowners trust."),
            ("Is SEO worth it between hail seasons?",
             "Yes. That is when rankings are built. Repairs, gutters, siding and HVAC keep the off-season busy too."),
        ],
        "queries": ["storm damage roofer lubbock", "roof insurance claim lubbock"],
        "demand": "High", "competition": "Low",
        "why": "Extreme hail exposure and regional hub status. SERP check showed only templated programmatic agency pages for Lubbock roofing SEO.",
    },
    {
        "state": "texas", "slug": "tyler", "name": "Tyler",
        "admin": ("County", "Smith County"), "metro": "East Texas",
        "areas": ["Whitehouse", "Lindale", "Bullard", "Flint", "Lake Tyler", "Chapel Hill", "Longview"],
        "query": "septic pumping tyler tx",
        "lead": "Tyler is the hub of East Texas, surrounded by lakes, pine forest and homes on big rural lots. I help "
                "Tyler septic, roofing, plumbing and HVAC companies rank across Smith County and the towns around it.",
        "headline": "Pine trees, lake homes and a lot of septic tanks.",
        "market": [
            "Outside city limits, much of Smith County runs on septic. Lake homes around Lake Tyler and Lake Palestine "
            "and acreage in Bullard and Flint create steady demand for pumping, inspections and repairs.",
            "Tall pines are part of the charm and part of the problem. Storms drop limbs and whole trees on roofs, "
            "so roof repair and tree damage searches climb after every big blow.",
            "East Texas humidity keeps AC running most of the year, and many older homes in Tyler are due for system "
            "replacements and repipes.",
        ],
        "trades": {
            "septic": "Pumping, inspections and aerobic system service across lake and acreage homes.",
            "roofing": "Storm and tree damage repairs, plus replacements on older Tyler homes.",
            "hvac": "Humid summers and older systems make AC repair and replacement steady work.",
            "plumbing": "Repipes on older homes, water heaters and well-to-house plumbing on rural lots.",
            "home": "Tree service, pest control, foundation and electrical work across Smith County.",
        },
        "focus": ["septic", "roofing", "hvac"],
        "search_note": "Septic and rural searches in Tyler are often split across many small towns, so area pages do a lot of the work here.",
        "plan": "Tyler plans cover the city and the rural towns around it: Whitehouse, Lindale, Bullard and the lake "
                "areas each get their own page, with septic and storm content front and centre.",
        "card": "East Texas hub with lake homes, rural lots and heavy septic demand.",
        "faqs": [
            ("Can I rank for septic searches in towns around Tyler?",
             "Yes. Rural searches are spread across small towns, and few competitors bother to build pages for them. That is usually the fastest win in Smith County."),
            ("Do aerobic septic systems need separate pages?",
             "Often, yes. Aerobic maintenance contracts are their own search and their own kind of customer, so they deserve a dedicated page."),
        ],
        "queries": ["aerobic septic service tyler", "tree on roof repair tyler"],
        "demand": "Medium-High", "competition": "Low",
        "why": "High septic share across Smith County lake and acreage homes; regional hub with few trade-specialist SEO providers.",
    },
    {
        "state": "texas", "slug": "new-braunfels", "name": "New Braunfels",
        "admin": ("County", "Comal County"), "metro": "San Antonio-Austin corridor",
        "areas": ["Gruene", "Canyon Lake", "Seguin", "Schertz", "Bulverde", "Spring Branch", "Garden Ridge"],
        "query": "septic repair new braunfels",
        "lead": "New Braunfels sits on the I-35 corridor between San Antonio and Austin and has been one of the "
                "fastest-growing cities in the country. I help New Braunfels contractors rank as new subdivisions and "
                "Hill Country homes keep coming.",
        "headline": "Hill Country growth, river homes and limestone.",
        "market": [
            "Comal County has been adding homes faster than almost anywhere in Texas. New subdivisions along I-35 "
            "and FM 306 bring thousands of new homeowners who need trusted local trades.",
            "West of town, Canyon Lake, Bulverde and Spring Branch are Hill Country homes on septic. Rocky limestone "
            "ground makes septic installs specialised work, and owners search carefully.",
            "Hard Central Texas water wears out water heaters and fixtures, and the Comal and Guadalupe rivers bring "
            "flood risk and plenty of vacation rentals needing quick repairs.",
        ],
        "trades": {
            "septic": "Hill Country installs, aerobic maintenance and inspections around Canyon Lake and Bulverde.",
            "plumbing": "Hard water, water heaters and softeners, plus rental turnover work.",
            "hvac": "Hot summers and a lot of new homes coming out of builder warranty.",
            "roofing": "Hail and wind events along the corridor, and first replacements in early-2000s homes.",
            "home": "Pools, landscaping, pest control and electricians for new and vacation homes.",
        },
        "focus": ["septic", "plumbing", "hvac"],
        "search_note": "New Braunfels searches overlap with San Antonio and Austin results, so local pages and a New Braunfels-verified profile are how you stand out.",
        "plan": "New Braunfels plans split the city and Hill Country: pages for Canyon Lake, Bulverde, Spring Branch "
                "and Seguin, and septic and water-quality content that shows you know the ground here.",
        "card": "One of the fastest-growing US cities, with Hill Country septic demand to the west.",
        "faqs": [
            ("Why does septic matter so much around New Braunfels?",
             "Much of western Comal County is outside sewer service. Canyon Lake and Bulverde homes rely on septic, often aerobic systems that need regular service."),
            ("Can I rank in both New Braunfels and San Marcos or Seguin?",
             "Organically, yes, with pages for each. Map rankings depend on distance, so we track each town and push hardest where you are closest."),
        ],
        "queries": ["aerobic septic maintenance canyon lake", "water softener installation new braunfels"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Repeatedly among fastest-growing US cities; Hill Country septic plus new-build demand; local SERPs thin.",
    },
    {
        "state": "texas", "slug": "conroe", "name": "Conroe",
        "admin": ("County", "Montgomery County"), "metro": "Greater Houston",
        "areas": ["Lake Conroe", "The Woodlands", "Montgomery", "Willis", "Magnolia", "Grand Central Park", "Spring"],
        "query": "ac repair conroe",
        "lead": "Conroe and Lake Conroe sit at the fast-growing northern edge of Greater Houston. I help Conroe HVAC, "
                "roofing, plumbing and septic companies win local searches without fighting the whole Houston market.",
        "headline": "Houston-level demand without Houston-level competition.",
        "market": [
            "Montgomery County keeps growing as families move north from Houston. Conroe gets the demand of a big "
            "metro, but searches here show Conroe businesses, not every agency in Houston.",
            "Gulf storms and hurricanes hit this area hard. Hurricane Beryl in 2024 left much of the region without "
            "power, and every storm brings roof, tree and generator searches.",
            "Around Lake Conroe, Willis and Magnolia many homes are on septic and wells, and humid summers make AC "
            "one of the most valuable services in town.",
        ],
        "trades": {
            "hvac": "Humid Gulf Coast summers make AC repair the most urgent search in Conroe.",
            "roofing": "Storm and hurricane damage, plus replacements across older lake properties.",
            "septic": "Lake Conroe, Willis and Magnolia homes on aerobic and conventional systems.",
            "plumbing": "New-build and older lake homes, water heaters and well systems.",
            "home": "Generators, tree service, pest control and electricians after storm season.",
        },
        "focus": ["hvac", "roofing", "septic"],
        "search_note": "For Conroe I target Conroe and Lake Conroe terms first, where competition is lighter, before reaching toward The Woodlands.",
        "plan": "Conroe plans focus on the northern Houston suburbs Houston agencies ignore: pages for Lake Conroe, "
                "Willis, Montgomery and Magnolia, and storm-season content ready before hurricane season.",
        "card": "Fast-growing north Houston suburb with lake homes, septic and storm demand.",
        "faqs": [
            ("Do I need to compete with Houston companies to rank in Conroe?",
             "Mostly no. Google shows businesses close to the searcher, so a Conroe address with strong local signals beats a downtown Houston company for Conroe searches."),
            ("Should I target The Woodlands from Conroe?",
             "Yes, as a second step. Start where you are strongest, then build pages and links that reach south."),
        ],
        "queries": ["generator installation conroe", "septic service lake conroe"],
        "demand": "High", "competition": "Low-Medium",
        "why": "Montgomery County growth with Houston-scale demand; Houston HVAC agencies concentrate on Houston itself.",
    },
    # ---------------------------------------------------------------- Florida
    {
        "state": "florida", "slug": "cape-coral", "name": "Cape Coral",
        "admin": ("County", "Lee County"), "metro": "Cape Coral-Fort Myers",
        "areas": ["Fort Myers", "North Fort Myers", "Pine Island", "Matlacha", "Lehigh Acres", "Southwest Cape", "Northwest Cape"],
        "query": "roof replacement cape coral",
        "lead": "Cape Coral has hundreds of miles of canals, tens of thousands of pool homes and a rebuild that has "
                "run since Hurricane Ian. I help Cape Coral roofing, plumbing, HVAC and septic companies rank where "
                "that work is searched.",
        "headline": "A canal city still rebuilding, and still growing.",
        "market": [
            "Hurricane Ian hit Lee County in 2022, and roof replacements, insurance work and repairs have run ever "
            "since. Insurers pushing older roofs to be replaced keeps that demand going.",
            "Cape Coral is mostly block homes with pools and lanais, and AC runs almost all year. HVAC, pool and "
            "screen enclosure searches are steady every month.",
            "Large parts of the Cape still use septic and wells while the city's utility extension program brings "
            "sewer to new areas, creating both septic and sewer-hookup demand.",
        ],
        "trades": {
            "roofing": "Post-Ian replacements, insurance roof inspections and tile and metal roofs.",
            "hvac": "AC runs most of the year. Repair, replacement and maintenance plans are steady.",
            "septic": "Pumping, inspections and the switch to sewer as utility extensions arrive.",
            "plumbing": "Water heaters, repipes, well systems and sewer hookups.",
            "home": "Pool service, screen enclosures, pest control, docks and seawalls.",
        },
        "focus": ["roofing", "hvac", "septic"],
        "search_note": "Cape Coral searches split clearly between quadrants, so pages for the Southwest and Northwest Cape and Pine Island pick up demand that city-wide pages miss.",
        "plan": "Cape Coral plans target the Cape by quadrant plus North Fort Myers and Pine Island, with storm and "
                "insurance roofing content and septic-to-sewer pages for areas getting new utilities.",
        "card": "Canal city with a long hurricane rebuild, heavy AC demand and septic-to-sewer conversions.",
        "faqs": [
            ("Is the Cape Coral roofing market too crowded after Ian?",
             "Many out-of-area roofers came and went. Local companies with real reviews and Cape Coral pages are still winning, and insurance-driven replacements keep demand steady."),
            ("Should I build pages for Cape Coral neighborhoods?",
             "Yes. The Southwest Cape, Northwest Cape and Pine Island each get searched on their own, and few competitors have pages for them."),
        ],
        "queries": ["roof inspection for insurance cape coral", "sewer hookup cape coral"],
        "demand": "High", "competition": "Low-Medium",
        "why": "Post-Ian rebuild, insurance-driven roof replacements, septic/sewer conversions. SERP is directories and templated pages.",
    },
    {
        "state": "florida", "slug": "port-st-lucie", "name": "Port St. Lucie",
        "admin": ("County", "St. Lucie County"), "metro": "Treasure Coast",
        "areas": ["Tradition", "St. Lucie West", "Fort Pierce", "Jensen Beach", "Stuart", "Torino", "Palm City"],
        "query": "septic pumping port st lucie",
        "lead": "Port St. Lucie is one of Florida's fastest-growing cities, and much of it was built on septic. I help "
                "Treasure Coast septic, roofing, HVAC and plumbing companies rank as Tradition and the west side boom.",
        "headline": "A fast-growing city built on septic.",
        "market": [
            "Port St. Lucie was laid out as a huge lot-by-lot subdivision, and many older neighborhoods still run on "
            "septic tanks. Pumping, drainfield repair and sewer conversions are all strong searches.",
            "Tradition and the western edge keep adding master-planned neighborhoods, bringing thousands of new "
            "homeowners who need trusted trades.",
            "Hurricanes are part of life on the Treasure Coast. Storms, including tornadoes from Hurricane Milton in "
            "2024, keep roof and storm repair searches high.",
        ],
        "trades": {
            "septic": "Pumping, drainfield repair and septic-to-sewer conversions in older neighborhoods.",
            "roofing": "Storm repairs, insurance replacements and shingle-to-metal upgrades.",
            "hvac": "Year-round AC across new builds in Tradition and older homes alike.",
            "plumbing": "Water heaters, repipes and sewer hookups as neighborhoods convert.",
            "home": "Pool, pest control, irrigation and hurricane shutters.",
        },
        "focus": ["septic", "roofing", "hvac"],
        "search_note": "Port St. Lucie septic searches are high intent and often urgent, which makes them one of the best-converting local searches on the Treasure Coast.",
        "plan": "Port St. Lucie plans pair septic and sewer-conversion content with pages for Tradition, St. Lucie "
                "West, Fort Pierce and Jensen Beach, and hurricane-ready roofing pages.",
        "card": "Fast-growing Treasure Coast city with heavy septic demand and new west-side neighborhoods.",
        "faqs": [
            ("Is septic SEO worth it in Port St. Lucie?",
             "Yes. A large share of older homes are on septic, searches are urgent and the competition online is thin compared with Miami or Palm Beach."),
            ("Can I rank in Stuart and Fort Pierce too?",
             "Yes, with pages for each and a profile that lists them as service areas. Map rankings depend on distance, so we track each one."),
        ],
        "queries": ["drainfield repair port st lucie", "septic to sewer conversion port st lucie"],
        "demand": "High", "competition": "Low",
        "why": "Fast growth plus large septic base; local SEO competition far lighter than Palm Beach/Miami.",
    },
    {
        "state": "florida", "slug": "ocala", "name": "Ocala",
        "admin": ("County", "Marion County"), "metro": "North Central Florida",
        "areas": ["Silver Springs Shores", "Marion Oaks", "Belleview", "Dunnellon", "On Top of the World", "Summerfield", "The Villages"],
        "query": "septic company ocala",
        "lead": "Ocala is horse country: acreage, farms and fast-growing retirement communities, much of it on wells "
                "and septic. I help Ocala septic, plumbing, HVAC and roofing companies rank across Marion County.",
        "headline": "Horse farms, acreage and retirement communities.",
        "market": [
            "Most of Marion County outside Ocala runs on private wells and septic, from horse farms to the large "
            "Marion Oaks and Silver Springs Shores subdivisions. Septic and well searches are constant.",
            "Retirement communities like On Top of the World and the nearby Villages bring steady demand for HVAC "
            "maintenance, plumbing and handyman work from owners who research carefully.",
            "Central Florida is lightning country, and summer storms bring roof, electrical and surge damage calls.",
        ],
        "trades": {
            "septic": "Pumping, inspections and installs on farms, acreage and large rural subdivisions.",
            "plumbing": "Well pumps, water treatment and repipes for rural and retirement homes.",
            "hvac": "AC maintenance plans and replacements for retirement communities.",
            "roofing": "Storm repairs and replacements on single-storey homes and barns.",
            "home": "Electricians, pest control, fencing and barn and farm services.",
        },
        "focus": ["septic", "plumbing", "hvac"],
        "search_note": "Ocala's rural searches are spread across big unincorporated areas, so pages for Marion Oaks, Silver Springs Shores and Dunnellon capture demand most competitors leave alone.",
        "plan": "Ocala plans cover the rural county as much as the city: well and septic content, pages for the big "
                "subdivisions and retirement communities, and reviews that speak to older homeowners.",
        "card": "Horse country and retirement growth, mostly on wells and septic.",
        "faqs": [
            ("Are rural Marion County searches worth targeting?",
             "Yes. Septic and well searches are high intent, and few competitors build pages for places like Marion Oaks or Dunnellon."),
            ("How do I reach retirees in On Top of the World or The Villages?",
             "Reviews, clear pricing and pages that answer practical questions. Older homeowners read more before they call, so content matters."),
        ],
        "queries": ["well pump repair ocala", "septic inspection marion county"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Majority well/septic outside city; retiree growth; thin trade-SEO competition.",
    },
    {
        "state": "florida", "slug": "lakeland", "name": "Lakeland",
        "admin": ("County", "Polk County"), "metro": "Tampa-Orlando I-4 corridor",
        "areas": ["Winter Haven", "Haines City", "Davenport", "Auburndale", "Bartow", "Plant City", "Mulberry"],
        "query": "ac repair lakeland",
        "lead": "Lakeland and Polk County sit between Tampa and Orlando on the I-4 corridor, and Haines City was "
                "the fastest-growing city outside Texas in the latest Census estimates. I help Polk County contractors "
                "rank as that growth fills in.",
        "headline": "Between Tampa and Orlando, and growing fast.",
        "market": [
            "Polk County has been adding residents faster than almost anywhere in Florida. Davenport, Haines City "
            "and Winter Haven are filling with new subdivisions and first-time Florida homeowners.",
            "Inland Central Florida is hot, humid and stormy, so AC and storm repair searches stay strong year round.",
            "Older Lakeland neighborhoods mix with brand-new builds, which means demand for repipes and replacements "
            "alongside new-build warranty work and maintenance plans.",
        ],
        "trades": {
            "hvac": "Inland heat and humidity make AC repair the most urgent search in Polk County.",
            "roofing": "Storm repairs and replacements across older Lakeland homes and new builds.",
            "plumbing": "Repipes in older neighborhoods and new-build water heater work.",
            "septic": "Rural Polk County homes and lakeside lots on septic systems.",
            "home": "Pest control, pool service, electricians and screen enclosures.",
        },
        "focus": ["hvac", "roofing", "plumbing"],
        "search_note": "Polk County's growth is in the smaller cities, so I build pages for Davenport, Haines City and Winter Haven early, while competition there is still light.",
        "plan": "Lakeland plans cover the whole county: Lakeland, Winter Haven, Haines City and Davenport each get "
                "tracking and pages, so you grow with the new neighborhoods.",
        "card": "I-4 corridor growth between Tampa and Orlando, including Haines City and Davenport.",
        "faqs": [
            ("Should I focus on Lakeland or the growing towns nearby?",
             "Both, in order. Win where your address is strongest first, then build into Haines City, Davenport and Winter Haven where new homeowners are arriving."),
            ("Do Tampa or Orlando companies outrank Polk County businesses?",
             "Rarely for local searches. Google favours businesses close to the searcher, which gives Polk County companies the edge at home."),
        ],
        "queries": ["ac replacement winter haven", "plumber haines city"],
        "demand": "High", "competition": "Low",
        "why": "Polk County among fastest-growing counties; Haines City No. 6 nationally (2025 Census estimates).",
    },
    # ---------------------------------------------------------------- Georgia
    {
        "state": "georgia", "slug": "savannah", "name": "Savannah",
        "admin": ("County", "Chatham County"), "metro": "Coastal Georgia",
        "areas": ["Pooler", "Richmond Hill", "Rincon", "Wilmington Island", "Tybee Island", "Isle of Hope", "Bloomingdale"],
        "query": "roofing company savannah",
        "lead": "Savannah's historic homes, coastal storms and a manufacturing boom along I-16 add up to strong "
                "demand for local trades. I help Savannah roofing, HVAC, plumbing and home-service companies rank "
                "across Chatham County and beyond.",
        "headline": "Historic homes, coastal storms and a growth wave inland.",
        "market": [
            "Large new plants west of the city, including Hyundai's EV plant in Bryan County, are pulling new "
            "residents into Pooler, Richmond Hill and Rincon. That means new homes and new homeowners searching.",
            "Coastal humidity and hurricanes keep roofing and AC work constant. Storm seasons bring spikes in roof "
            "repair and tree damage searches.",
            "In the historic district and older neighborhoods, repairs need specialists, and homeowners search "
            "specifically for contractors who understand older houses.",
        ],
        "trades": {
            "roofing": "Storm repairs, coastal replacements and specialist work on historic homes.",
            "hvac": "Humid coastal summers and older ductwork make AC work constant.",
            "plumbing": "Older pipes in historic homes, plus new-build work in Pooler and Richmond Hill.",
            "septic": "Island and rural homes on septic in parts of Chatham, Effingham and Bryan counties.",
            "home": "Pest and termite control, mold remediation, electricians and painters.",
        },
        "focus": ["roofing", "hvac", "plumbing"],
        "search_note": "Savannah searches split between the city, the islands and the fast-growing towns west on I-16, and each needs its own page.",
        "plan": "Savannah plans cover the city, the islands and the growth corridor: Pooler, Richmond Hill and Rincon "
                "pages, storm content and historic-home pages that show real expertise.",
        "card": "Historic homes, coastal storms and a manufacturing-driven growth wave inland.",
        "faqs": [
            ("Should I target Pooler and Richmond Hill separately?",
             "Yes. They are growing fast and get searched on their own, and many Savannah competitors still treat them as an afterthought."),
            ("Do historic homes need their own content?",
             "If you do that work, yes. Homeowners in the historic district search specifically and are willing to pay for experience."),
        ],
        "queries": ["roof repair pooler", "ac repair richmond hill ga"],
        "demand": "Medium-High", "competition": "Low-Medium",
        "why": "Hyundai Metaplant-driven growth in Pooler/Richmond Hill/Bryan County plus coastal storms.",
    },
    {
        "state": "georgia", "slug": "augusta", "name": "Augusta",
        "admin": ("County", "Richmond County"), "metro": "Augusta-Aiken (CSRA)",
        "areas": ["Evans", "Martinez", "Grovetown", "North Augusta", "Hephzibah", "Appling", "Aiken"],
        "query": "tree on roof repair augusta",
        "lead": "Hurricane Helene tore through Augusta in 2024, and the repair work is still going. I help Augusta and "
                "Columbia County roofing, HVAC, plumbing and home-service companies rank across both sides of the river.",
        "headline": "A storm-hit city on two sides of a river.",
        "market": [
            "Helene brought down huge numbers of trees across Augusta in 2024, damaging roofs and knocking out power "
            "for days. Roof, tree and generator searches followed, and the rebuild still drives demand.",
            "Columbia County, especially Evans, Grovetown and Martinez, is one of Georgia's fastest-growing areas, "
            "with a large military and medical workforce moving in.",
            "The metro spans Georgia and South Carolina, so North Augusta and Aiken searchers see Augusta businesses too.",
        ],
        "trades": {
            "roofing": "Storm and tree damage repairs and the long tail of Helene replacements.",
            "hvac": "Hot, humid summers and new homes across Columbia County.",
            "plumbing": "Older Augusta homes and growing Columbia County subdivisions.",
            "septic": "Rural Columbia and Richmond county homes on septic systems.",
            "home": "Generators, tree removal, electricians and pest control.",
        },
        "focus": ["roofing", "hvac", "home"],
        "search_note": "Augusta campaigns usually need pages for Evans, Grovetown and Martinez, where Columbia County growth concentrates.",
        "plan": "Augusta plans cover both states: pages for Evans, Martinez, Grovetown, North Augusta and Aiken, plus "
                "storm-recovery content and generator pages.",
        "card": "Helene recovery demand and fast-growing Columbia County on both sides of the river.",
        "faqs": [
            ("Can I rank in South Carolina from an Augusta address?",
             "Yes, for North Augusta and nearby areas. Google treats it as one market, and pages for those towns help."),
            ("Is storm work still worth targeting after Helene?",
             "Yes. Repairs, replacements and generator installs are still going, and the next storm season always comes."),
        ],
        "queries": ["generator installation augusta ga", "roof replacement evans ga"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Helene (2024) damage and fast-growing Columbia County; lightly contested local SEO.",
    },
    # ---------------------------------------------------------------- Arizona
    {
        "state": "arizona", "slug": "gilbert", "name": "Gilbert",
        "admin": ("County", "Maricopa County"), "metro": "Phoenix East Valley",
        "areas": ["Power Ranch", "Seville", "Val Vista Lakes", "Agritopia", "Morrison Ranch", "Queen Creek", "San Tan Valley"],
        "query": "ac repair gilbert az",
        "lead": "Gilbert went from farm town to one of the largest towns in the country in a generation. I help Gilbert "
                "HVAC, plumbing, roofing and home-service companies rank in the East Valley without fighting all of Phoenix.",
        "headline": "Desert heat and a whole generation of homes ageing at once.",
        "market": [
            "Phoenix set heat records in 2023 and 2024, and an AC failure in an East Valley summer is an emergency. "
            "That makes AC repair one of the most valuable local searches in the country.",
            "Most of Gilbert was built in the 1990s and 2000s. Those homes are now due for AC replacements, tile "
            "roof underlayment and water heater replacements at the same time.",
            "Hard water, pools and master-planned communities like Power Ranch and Seville create year-round work "
            "for plumbers, pool companies and handymen.",
        ],
        "trades": {
            "hvac": "Extreme heat makes AC repair urgent. Maintenance plans keep summer from being chaos.",
            "roofing": "Tile roof underlayment replacement and monsoon storm repairs.",
            "plumbing": "Hard water, softeners, water heaters and slab leaks.",
            "home": "Pools, solar, pest control and electricians across master-planned communities.",
            "septic": "Outer San Tan Valley and Queen Creek properties still use septic.",
        },
        "focus": ["hvac", "plumbing", "roofing"],
        "search_note": "In Gilbert I target the community names people actually search with, like Power Ranch, Seville and Agritopia, alongside town-wide terms.",
        "plan": "Gilbert plans cover Gilbert's master-planned communities plus Queen Creek and San Tan Valley, with "
                "summer AC content live before the first 110-degree week.",
        "card": "East Valley town with extreme heat and a generation of homes due for replacements.",
        "faqs": [
            ("Is it realistic to rank for AC repair in Gilbert?",
             "Yes, by focusing on Gilbert and its communities rather than all of Phoenix. Map results are local, and most Phoenix-wide agencies do not build community-level pages."),
            ("When should Gilbert HVAC companies start?",
             "Winter or early spring, so rankings are in place when demand peaks."),
        ],
        "queries": ["tile roof underlayment gilbert", "water softener installation gilbert"],
        "demand": "High", "competition": "Medium",
        "why": "Extreme-heat AC demand and ageing 1990s-2000s housing; a few HVAC SEO pages exist but mostly templated.",
    },
    {
        "state": "arizona", "slug": "prescott", "name": "Prescott",
        "admin": ("County", "Yavapai County"), "metro": "Prescott Quad-City area",
        "areas": ["Prescott Valley", "Chino Valley", "Dewey-Humboldt", "Prescott Lakes", "Williamson Valley", "Skull Valley"],
        "query": "septic pumping prescott",
        "lead": "Prescott has four seasons, pine forest and a lot of homes on septic. I help Prescott and Prescott Valley "
                "septic, HVAC, plumbing and roofing companies rank across the Quad-City area.",
        "headline": "Mountain town, four seasons, and plenty of septic.",
        "market": [
            "A large share of homes across Yavapai County use septic systems, from Chino Valley acreage to Williamson "
            "Valley ranches. Pumping, inspections at sale and repairs are steady searches.",
            "Prescott gets real winters, so furnace and heat pump work matters alongside summer cooling.",
            "Retirees and second-home owners make up a large share of residents, and they research before they hire.",
        ],
        "trades": {
            "septic": "Pumping, real estate inspections and repairs across rural Yavapai County.",
            "hvac": "Furnaces, heat pumps and AC: a true four-season market.",
            "plumbing": "Frozen pipes, well systems and older homes in town.",
            "roofing": "Snow, wind and monsoon wear, plus wildfire-resistant roofing interest.",
            "home": "Defensible space, tree service, pest control and electricians.",
        },
        "focus": ["septic", "hvac", "plumbing"],
        "search_note": "Prescott septic results are mostly directories and franchise pages, which is exactly where a well-built local site can win.",
        "plan": "Prescott plans cover Prescott, Prescott Valley and Chino Valley, with septic inspection content for "
                "home sales and seasonal HVAC pages for both heating and cooling.",
        "card": "Four-season mountain town with heavy septic demand across Yavapai County.",
        "faqs": [
            ("Who ranks for septic in Prescott today?",
             "Mostly directories and a few local companies with thin websites. That leaves room for a business with real service pages and reviews."),
            ("Are home-sale septic inspections worth a page?",
             "Yes. They are a regular, high-intent search for buyers, sellers and agents, and a great source of referral work."),
        ],
        "queries": ["septic inspection for home sale prescott", "furnace repair prescott valley"],
        "demand": "Medium", "competition": "Low",
        "why": "High septic share, four-season HVAC; SERP for septic is directories and franchise pages only.",
    },
    # ---------------------------------------------------------------- North Carolina
    {
        "state": "north-carolina", "slug": "wilmington", "name": "Wilmington",
        "admin": ("County", "New Hanover County"), "metro": "Cape Fear region",
        "areas": ["Leland", "Hampstead", "Carolina Beach", "Wrightsville Beach", "Porters Neck", "Southport", "Ogden"],
        "query": "roof repair wilmington nc",
        "lead": "Wilmington and the Cape Fear coast are growing fast, with Leland among the fastest-growing towns in the "
                "state. I help Wilmington roofing, HVAC, plumbing and septic companies rank from the beaches to Brunswick County.",
        "headline": "Coastal growth, hurricanes and humid summers.",
        "market": [
            "Leland, Hampstead and Brunswick County are filling with new neighborhoods, many of them full of people "
            "moving from out of state who rely on Google to find every trade.",
            "Hurricane Florence in 2018 showed how much damage a storm can do here. Roofing, water damage and storm "
            "repair searches rise with every season.",
            "Outside the city, many homes in Pender and Brunswick counties use septic, and beach towns bring rental "
            "properties that need fast repairs.",
        ],
        "trades": {
            "roofing": "Hurricane prep, storm repair and replacements on coastal homes.",
            "hvac": "Humid coastal summers and salt air that wears out outdoor units.",
            "septic": "Pender and Brunswick county homes on septic, plus inspections at sale.",
            "plumbing": "New-build work in Leland and repairs in older Wilmington homes.",
            "home": "Pest control, mold, generators and rental property maintenance.",
        },
        "focus": ["roofing", "hvac", "septic"],
        "search_note": "Wilmington searches split across the city, the beach towns and Brunswick County, so area pages are where most of the gains come from.",
        "plan": "Wilmington plans cover the coast end to end: pages for Leland, Hampstead, Carolina Beach and "
                "Southport, plus storm prep content before hurricane season.",
        "card": "Fast-growing coast with Leland and Brunswick County booming.",
        "faqs": [
            ("Can I rank in Leland and Brunswick County from Wilmington?",
             "Yes, with pages for each and a service area that lists them. We track each town separately."),
            ("Do beach rental owners search differently?",
             "Yes. They want fast response and remote coordination, so pages and reviews that show that convert well."),
        ],
        "queries": ["hurricane roof repair wilmington", "septic pumping hampstead nc"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Leland among fastest-growing NC towns; SERP check shows only templated agency pages for Wilmington plumbing SEO.",
    },
    {
        "state": "north-carolina", "slug": "asheville", "name": "Asheville",
        "admin": ("County", "Buncombe County"), "metro": "Western North Carolina",
        "areas": ["Weaverville", "Black Mountain", "Arden", "Fletcher", "Candler", "Swannanoa", "Hendersonville"],
        "query": "septic repair asheville",
        "lead": "Hurricane Helene devastated Asheville and western North Carolina in 2024, and the rebuild will take "
                "years. I help Asheville roofing, septic, plumbing and HVAC companies rank across the mountains.",
        "headline": "A mountain region rebuilding after Helene.",
        "market": [
            "Helene's flooding and landslides in 2024 damaged homes, roads and water systems across the region. "
            "Rebuilding, water damage, septic and well repairs are still in heavy demand.",
            "Mountain homes on slopes and rural roads often run on septic and wells, and installs here are "
            "specialised work that homeowners research carefully.",
            "Cold winters make heat pumps and heating searches important, and many older homes need upgrades.",
        ],
        "trades": {
            "septic": "Repairs, replacements and inspections on mountain properties after flooding.",
            "roofing": "Storm and tree damage, and replacements across older mountain homes.",
            "plumbing": "Well systems, water damage repair and winter pipe issues.",
            "hvac": "Heat pumps, mini-splits and heating for cold mountain winters.",
            "home": "Tree removal, water damage restoration, electricians and generators.",
        },
        "focus": ["septic", "roofing", "plumbing"],
        "search_note": "Searches across western North Carolina are spread over small towns and valleys, so pages for each community capture most of the demand.",
        "plan": "Asheville plans cover the city and the mountain towns around it, with Helene recovery, septic and "
                "well content, and pages for Black Mountain, Weaverville and Hendersonville.",
        "card": "Helene rebuild demand plus mountain homes on septic and wells.",
        "faqs": [
            ("Is it appropriate to market storm-recovery services after Helene?",
             "Yes, done honestly. People need trustworthy contractors, and clear, helpful pages make you easier to find. Avoid scare tactics and show real work."),
            ("Can I rank across Buncombe and Henderson counties?",
             "Yes, with a page for each town you serve and map tracking across both counties."),
        ],
        "queries": ["well pump repair asheville", "heat pump installation asheville"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Helene recovery demand; mountain septic/well; few trade-specialist SEO providers.",
    },
]
