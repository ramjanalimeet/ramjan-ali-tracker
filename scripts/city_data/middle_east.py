"""Middle East hub and cities. Dubai is left out on purpose: "AC repair dubai"
type searches are dominated by marketplaces and heavily funded companies.
These cities have the same AC and maintenance demand, mostly English-language
search from large expat populations, and thinner local competition.
"""

REGION = {
    "slug": "middle-east", "name": "Middle East", "h1": "Gulf", "locale": "me",
    "countries": ["United Arab Emirates", "Qatar", "Oman", "Bahrain"],
    "title": "Local SEO for Gulf Maintenance Companies | Ramjan Ali Akash",
    "desc": "Local SEO for AC, plumbing, waterproofing and maintenance companies in Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Al Ain, Doha, Muscat and Manama.",
    "lead": "In the Gulf, a broken AC in summer is an emergency, and most people find help on Google. I help AC, "
            "plumbing, waterproofing and home maintenance companies rank in the cities around Dubai and across the Gulf.",
    "headline": "Year-round demand, and marketplaces you can outrank in the map.",
    "intro": [
        "Dubai is dominated by service marketplaces and heavily funded companies. Sharjah, Ajman, Ras Al Khaimah, "
        "Al Ain, Doha, Muscat and Manama have the same heat and the same AC, plumbing and maintenance needs, with "
        "far fewer businesses doing local SEO properly.",
        "In many of these cities, results are dominated by marketplaces and directories, which cannot appear in the "
        "Google Maps pack for your business. A strong Google Business Profile and real local pages are how you win calls directly.",
    ],
    "points": [
        "Google Business Profile tuned for each community you serve",
        "Community pages for the areas people actually search by",
        "Summer AC content ready before the heat peaks",
        "English pages built for expat searches, with Arabic pages on request",
        "Reviews that mention the job and the community",
        "Less reliance on marketplaces that take a cut of every job",
    ],
    "facts": [("Countries", "UAE, Qatar, Oman, Bahrain"), ("Trades", "AC, plumbing, waterproofing, pest control, maintenance"),
              ("Time zone", "Dhaka is 2 to 3 hours ahead of the Gulf")],
    "faqs": [
        ("Why not Dubai?",
         "I can work there, but marketplaces and big-budget competitors make it slow and expensive. Nearby cities give faster results for the same budget."),
        ("Do I need Arabic pages?",
         "For expat customers, English pages work well. If you also serve Arabic-speaking customers, Arabic pages are worth adding, and I can plan for both."),
    ],
    "card": "Sharjah, Ajman, Ras Al Khaimah, Al Ain, Abu Dhabi, Doha, Muscat and Manama.",
}

UAE = {"admin_type": "AdministrativeArea", "country": "United Arab Emirates"}

CITIES = [
    {
        **UAE, "slug": "sharjah", "name": "Sharjah", "place": "Sharjah, UAE", "admin": ("Emirate", "Sharjah"), "admin_name": "Emirate of Sharjah",
        "metro": "Sharjah and the northern Emirates",
        "areas": ["Al Nahda", "Al Majaz", "Al Khan", "Muwaileh", "Al Taawun", "Aljada", "Al Qasimia"],
        "query": "ac maintenance sharjah",
        "lead": "Sharjah has a huge population of families and Dubai commuters, living in buildings and villas that "
                "run AC almost all year. I help Sharjah AC, plumbing, waterproofing and maintenance companies rank in Google Maps.",
        "headline": "Dubai demand at Sharjah competition levels.",
        "market": [
            "Many Sharjah residents work in Dubai but live in Sharjah, and they search for AC, plumbing and maintenance "
            "services in English, mostly on their phones.",
            "Search results here are dominated by marketplaces and listing sites like ServiceMarket and Urban Company. "
            "They cannot appear in the map pack for you, which leaves room for local companies.",
            "The April 2024 floods hit Sharjah hard, exposing poor waterproofing in many buildings and villas. "
            "Waterproofing and leak repair searches stayed high after.",
        ],
        "trades": {
            "hvac": "AC maintenance, repair, duct cleaning and annual contracts.",
            "plumbing": "Leaks, water heaters and bathroom plumbing.",
            "roofing": "Roof and bathroom waterproofing after the 2024 floods.",
            "home": "Pest control, deep cleaning, handyman and villa maintenance.",
        },
        "focus": ["hvac", "roofing", "plumbing"],
        "search_note": "In Sharjah, people often search by area name, like Al Nahda or Muwaileh, so community pages pick up demand marketplaces miss.",
        "plan": "Sharjah plans cover the main residential areas, with AC content ready before summer, waterproofing "
                "pages and a profile built to compete with marketplace listings.",
        "card": "Huge population of Dubai commuters, with marketplaces you can outrank in the map pack.",
        "faqs": [
            ("Can I outrank ServiceMarket and Urban Company?",
             "In the Google Maps pack, yes. Marketplaces cannot appear there for your business, and that is where most calls come from."),
            ("Should I target Dubai from Sharjah?",
             "Start with Sharjah. Map rankings depend on distance, and you will win faster where you are based."),
        ],
        "queries": ["ac duct cleaning sharjah", "waterproofing company sharjah"],
        "demand": "High", "competition": "Low-Medium",
        "why": "Large population; SERP dominated by marketplaces/directories (ServiceMarket, Urban Company, Bayut), no specialist trade-SEO competition.",
    },
    {
        **UAE, "slug": "ajman", "name": "Ajman", "place": "Ajman, UAE", "admin": ("Emirate", "Ajman"), "admin_name": "Emirate of Ajman",
        "metro": "Ajman and the northern Emirates",
        "areas": ["Al Nuaimiya", "Al Rashidiya", "Al Jurf", "Al Rawda", "Al Zahya", "Emirates City", "Al Hamidiya"],
        "query": "ac repair ajman",
        "lead": "Ajman is one of the most affordable places to live near Dubai, and its population keeps growing. I help "
                "Ajman AC, plumbing, waterproofing and maintenance companies rank in Google Maps.",
        "headline": "Affordable, growing and lightly contested.",
        "market": [
            "Ajman's lower rents attract families and workers from across the region, many of them commuting to Dubai and Sharjah.",
            "Older towers and new villa communities both need constant AC maintenance and plumbing.",
            "Very few Ajman maintenance companies have strong websites, so the map pack is open.",
        ],
        "trades": {
            "hvac": "AC repair, maintenance and duct cleaning.",
            "plumbing": "Leaks, water heaters and drainage.",
            "roofing": "Waterproofing for roofs and bathrooms.",
            "home": "Pest control, cleaning and handyman services.",
        },
        "focus": ["hvac", "plumbing", "home"],
        "search_note": "Ajman searches often include the community name, so pages for Al Nuaimiya, Al Rashidiya and Al Jurf help.",
        "plan": "Ajman plans cover the main communities, with AC content and a profile that beats directory listings.",
        "card": "Affordable, fast-growing emirate with very light local competition.",
        "faqs": [
            ("Is Ajman big enough to invest in SEO?",
             "Yes. The population is large and growing, and competition is light, so results come faster."),
            ("Can I serve Sharjah too?",
             "Yes, with a Sharjah page and service areas set up correctly. We track both."),
        ],
        "queries": ["ac maintenance ajman", "pest control ajman"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Growing affordable emirate; very few optimized local maintenance businesses.",
    },
    {
        **UAE, "slug": "ras-al-khaimah", "name": "Ras Al Khaimah", "place": "Ras Al Khaimah, UAE", "admin": ("Emirate", "Ras Al Khaimah"), "admin_name": "Emirate of Ras Al Khaimah",
        "metro": "Ras Al Khaimah",
        "areas": ["Al Hamra Village", "Mina Al Arab", "Al Marjan Island", "Al Nakheel", "Al Dhait", "Khuzam", "Julphar"],
        "query": "ac maintenance ras al khaimah",
        "lead": "Ras Al Khaimah is attracting new residents, villas and big resort projects on Al Marjan Island. I help "
                "RAK AC, plumbing, waterproofing and villa maintenance companies rank as the emirate grows.",
        "headline": "A growing emirate with new villa communities.",
        "market": [
            "Major resort and residential projects around Al Marjan Island are drawing investment and new residents to RAK.",
            "Villa communities like Al Hamra Village and Mina Al Arab need AC, pool and villa maintenance year round.",
            "Few local companies have strong online profiles, which makes RAK one of the easiest Gulf markets to rank in.",
        ],
        "trades": {
            "hvac": "AC maintenance and repair for villas and apartments.",
            "home": "Villa maintenance, pool service and pest control.",
            "plumbing": "Leaks, water heaters and drainage.",
            "roofing": "Roof and terrace waterproofing.",
        },
        "focus": ["hvac", "home", "plumbing"],
        "search_note": "RAK searches by community name, like Al Hamra or Mina Al Arab, have almost no competition from local businesses.",
        "plan": "RAK plans cover the main villa and residential communities, with AC and villa maintenance content.",
        "card": "Growing emirate with new villa and resort communities and minimal competition.",
        "faqs": [
            ("Is RAK worth targeting now?",
             "Yes. Growth is coming, and ranking early is much easier than catching up later."),
            ("Do villa owners search for maintenance contracts?",
             "Yes. Annual maintenance contracts are a common search, and a dedicated page converts well."),
        ],
        "queries": ["villa maintenance ras al khaimah", "ac repair al hamra"],
        "demand": "Medium", "competition": "Low",
        "why": "Growth from Al Marjan Island projects; almost no optimized local competitors.",
    },
    {
        **UAE, "slug": "al-ain", "name": "Al Ain", "place": "Al Ain, UAE", "admin": ("Emirate", "Abu Dhabi"), "admin_name": "Emirate of Abu Dhabi",
        "metro": "Al Ain region",
        "areas": ["Al Jimi", "Al Muwaiji", "Zakher", "Falaj Hazza", "Al Towayya", "Al Hili", "Al Mutawaa"],
        "query": "ac repair al ain",
        "lead": "Al Ain is a garden city of villas inland, with some of the hottest summers in the UAE. I help Al Ain AC, "
                "plumbing, waterproofing and villa maintenance companies rank in Google Maps.",
        "headline": "A villa city with inland heat.",
        "market": [
            "Al Ain is mostly villas, and inland summers are extremely hot, so AC failures are urgent.",
            "Villas need regular AC servicing, plumbing, waterproofing and garden maintenance.",
            "Competition online is far lighter than Abu Dhabi city or Dubai.",
        ],
        "trades": {
            "hvac": "AC repair, servicing and replacement for villas.",
            "plumbing": "Water heaters, leaks and pumps.",
            "roofing": "Roof waterproofing for villas.",
            "home": "Villa maintenance, pest control and landscaping.",
        },
        "focus": ["hvac", "home", "plumbing"],
        "search_note": "Al Ain searches often include the district name, so pages for Al Jimi, Al Muwaiji and Zakher help.",
        "plan": "Al Ain plans cover the main villa districts, with AC content ready before summer.",
        "card": "Inland villa city with extreme summer heat and light competition.",
        "faqs": [
            ("Do Al Ain customers search in Arabic?",
             "Many do. English pages reach expat residents, and Arabic pages are worth adding for Emirati customers."),
            ("When is the busiest season?",
             "Late spring through summer. Rankings should be in place before then."),
        ],
        "queries": ["villa maintenance al ain", "ac service al ain"],
        "demand": "Medium", "competition": "Low",
        "why": "Villa-heavy city with extreme heat; far less contested than Abu Dhabi/Dubai.",
    },
    {
        **UAE, "slug": "abu-dhabi", "name": "Abu Dhabi", "place": "Abu Dhabi, UAE", "admin": ("Emirate", "Abu Dhabi"), "admin_name": "Emirate of Abu Dhabi",
        "metro": "Abu Dhabi",
        "areas": ["Khalifa City", "Al Reem Island", "Yas Island", "Saadiyat Island", "Mohammed Bin Zayed City", "Al Raha", "Al Reef"],
        "query": "ac maintenance abu dhabi",
        "lead": "Abu Dhabi has a big, high-income population in towers and villa communities. I help Abu Dhabi AC, "
                "plumbing, waterproofing and maintenance companies rank community by community.",
        "headline": "High-value customers, community by community.",
        "market": [
            "Abu Dhabi residents live in distinct communities like Khalifa City, Al Reem and Yas, and they search by community.",
            "High incomes mean customers value reliability, reviews and annual maintenance contracts over the cheapest quote.",
            "Competition is real but much lighter than Dubai, especially at community level.",
        ],
        "trades": {
            "hvac": "AC maintenance contracts, repairs and duct cleaning.",
            "home": "Villa maintenance, pest control and deep cleaning.",
            "plumbing": "Leaks, water heaters and bathroom plumbing.",
            "roofing": "Waterproofing for villas and terraces.",
        },
        "focus": ["hvac", "home", "plumbing"],
        "search_note": "City-wide Abu Dhabi terms are competitive, but community terms like Khalifa City or Al Reef are wide open.",
        "plan": "Abu Dhabi plans start with the communities closest to you, with pages for each and AC contract content.",
        "card": "High-income communities where community-level searches are wide open.",
        "faqs": [
            ("Is Abu Dhabi too competitive?",
             "City-wide terms are competitive, but community-level searches are not. That is where we start."),
            ("Are maintenance contracts worth targeting?",
             "Yes. They bring recurring revenue, and customers search for them specifically."),
        ],
        "queries": ["annual maintenance contract abu dhabi", "ac duct cleaning khalifa city"],
        "demand": "High", "competition": "Medium",
        "why": "High demand and incomes; city-wide terms contested but community-level terms open.",
    },
    {
        "admin_type": "AdministrativeArea", "country": "Qatar",
        "slug": "doha", "name": "Doha", "place": "Doha, Qatar", "admin": ("Country", "Qatar"), "admin_name": "Doha Municipality",
        "metro": "Greater Doha",
        "areas": ["The Pearl", "West Bay", "Lusail", "Al Wakrah", "Al Rayyan", "Al Sadd", "Ain Khaled"],
        "query": "ac maintenance doha",
        "lead": "Doha's large expat population lives in towers, compounds and villas that depend on AC. I help Doha AC, "
                "plumbing, waterproofing and maintenance companies rank in Google Maps.",
        "headline": "Compounds, towers and constant AC.",
        "market": [
            "Most Doha residents are expats who search in English for AC, plumbing and maintenance help.",
            "Lusail and The Pearl added large new residential areas, alongside older villas and compounds.",
            "Competition is lighter than Dubai, and few companies have strong local pages.",
        ],
        "trades": {
            "hvac": "AC maintenance, repairs and duct cleaning.",
            "plumbing": "Leaks, water heaters and bathroom plumbing.",
            "home": "Villa and compound maintenance, pest control and cleaning.",
            "roofing": "Roof and terrace waterproofing.",
        },
        "focus": ["hvac", "plumbing", "home"],
        "search_note": "Doha searches by area, like The Pearl or Al Wakrah, are where local companies can win fastest.",
        "plan": "Doha plans cover the main residential areas, with AC content ready before summer and pages for each district.",
        "card": "Large expat population in towers, compounds and villas.",
        "faqs": [
            ("Do Doha customers search in English?",
             "Most expats do, and they are the majority. Arabic pages can be added for Qatari customers."),
            ("Can I rank in Lusail and The Pearl?",
             "Yes, with dedicated pages and map tracking for each."),
        ],
        "queries": ["ac repair the pearl qatar", "plumber doha"],
        "demand": "High", "competition": "Low-Medium",
        "why": "Large English-searching expat base; lighter than Dubai.",
    },
    {
        "admin_type": "AdministrativeArea", "country": "Oman",
        "slug": "muscat", "name": "Muscat", "place": "Muscat, Oman", "admin": ("Governorate", "Muscat"), "admin_name": "Muscat Governorate",
        "metro": "Muscat",
        "areas": ["Al Khuwair", "Al Mouj", "Qurum", "Bausher", "Seeb", "Madinat Sultan Qaboos", "Al Amerat"],
        "query": "ac repair muscat",
        "lead": "Muscat is hot, humid and spread out along the coast. I help Muscat AC, plumbing, waterproofing and "
                "maintenance companies rank across the capital.",
        "headline": "Coastal heat and spread-out communities.",
        "market": [
            "Muscat's humid summers make AC maintenance essential for villas and apartments alike.",
            "Cyclones like Shaheen in 2021 showed how water damage can hit the region, raising waterproofing demand.",
            "Online competition for home services is very light.",
        ],
        "trades": {
            "hvac": "AC maintenance, repair and installation.",
            "plumbing": "Leaks, water heaters and pumps.",
            "roofing": "Waterproofing for roofs and terraces.",
            "home": "Pest control, cleaning and villa maintenance.",
        },
        "focus": ["hvac", "plumbing", "roofing"],
        "search_note": "Muscat is spread out, so area pages for Al Khuwair, Qurum, Bausher and Seeb help you rank where you work.",
        "plan": "Muscat plans cover the main districts along the coast, with AC and waterproofing content.",
        "card": "Humid coastal capital with very light online competition.",
        "faqs": [
            ("Is Muscat competitive?",
             "Not very. A well-built profile and local pages can rank quickly."),
            ("Do I need Arabic pages?",
             "English works well for expats. Arabic pages help reach Omani customers."),
        ],
        "queries": ["ac maintenance muscat", "waterproofing muscat"],
        "demand": "Medium", "competition": "Low",
        "why": "Humid climate; very light online competition.",
    },
    {
        "admin_type": "AdministrativeArea", "country": "Bahrain",
        "slug": "manama", "name": "Manama", "place": "Manama, Bahrain", "admin": ("Governorate", "Capital Governorate"), "admin_name": "Capital Governorate",
        "metro": "Bahrain",
        "areas": ["Juffair", "Seef", "Adliya", "Saar", "Riffa", "Amwaj Islands", "Budaiya"],
        "query": "ac repair bahrain",
        "lead": "Bahrain is small, humid and full of expats who search in English. I help Bahrain AC, plumbing, "
                "waterproofing and maintenance companies rank across Manama and the island.",
        "headline": "A small island with constant AC demand.",
        "market": [
            "Bahrain's humidity means AC runs most of the year, and breakdowns are urgent.",
            "A large expat population, including a big US Navy community around Juffair, searches in English.",
            "Because Bahrain is small, one strong profile can reach much of the island.",
        ],
        "trades": {
            "hvac": "AC repair, maintenance and duct cleaning.",
            "plumbing": "Leaks, water heaters and drainage.",
            "home": "Pest control, cleaning and villa maintenance.",
            "roofing": "Roof and terrace waterproofing.",
        },
        "focus": ["hvac", "plumbing", "home"],
        "search_note": "Many people search 'Bahrain' rather than 'Manama', so pages target both, plus areas like Juffair and Saar.",
        "plan": "Bahrain plans cover Manama and the main residential areas, with AC content and pages for Juffair, Saar and Riffa.",
        "card": "Small, humid island with a large English-searching expat community.",
        "faqs": [
            ("Should I target Manama or Bahrain?",
             "Both. Many people search 'Bahrain', while others use the area name."),
            ("Can one business cover the whole island?",
             "Often, yes, because distances are short. We track rankings across the island."),
        ],
        "queries": ["ac repair manama", "ac maintenance juffair", "plumber bahrain"],
        "demand": "Medium", "competition": "Low",
        "why": "Humid; English-searching expat base; small market with light competition.",
    },
]
