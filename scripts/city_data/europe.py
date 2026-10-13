"""Europe hub: English-language search markets only (Ireland and Cyprus), where
an English-language service and site fit how customers actually search.
"""

REGION = {
    "slug": "europe", "name": "Europe", "h1": "European", "locale": "ie",
    "countries": ["Ireland", "Cyprus"],
    "title": "Local SEO in Ireland & Cyprus for Trades | Ramjan Ali Akash",
    "desc": "Local SEO for trade and home-service businesses in Cork, Galway, Limerick, Waterford, Kilkenny, Limassol and Paphos. Rank in Google Maps. Free audit.",
    "lead": "I focus on European markets where customers search in English: Ireland, and Cyprus with its large "
            "English-speaking community. Both have strong demand for trades and surprisingly little local SEO competition.",
    "headline": "English-language markets with room to win.",
    "intro": [
        "In Ireland, Dublin is crowded, but Cork, Galway, Limerick, Waterford and Kilkenny have growing populations, "
        "rural homes on septic tanks, and heat pump retrofits funded by grants, with few trade businesses doing local SEO well.",
        "In Cyprus, Limassol and Paphos have large English-speaking and expat communities who search in English for "
        "air conditioning, pool, plumbing and property maintenance, often while living abroad part of the year.",
    ],
    "points": [
        "English-language pages written for how locals actually search",
        "Google Business Profile tuned for each town you serve",
        "Septic, heat pump and retrofit content for Irish homes",
        "AC, pool and property maintenance content for Cyprus",
        "Reviews that build trust with homeowners and expats",
        "Map tracking across your full service area",
    ],
    "facts": [("Countries", "Ireland, Cyprus"), ("Trades", "Roofing, plumbing, heating, septic, AC, maintenance"),
              ("Approach", "Town-by-town pages and map tracking")],
    "faqs": [
        ("Why only Ireland and Cyprus in Europe?",
         "Customers there search in English, so English-language pages match how they look for trades. For other European markets, local-language content would be needed."),
        ("Do you work with businesses in Dublin?",
         "Yes, but Dublin is competitive. Regional cities usually give faster results for the same budget."),
    ],
    "card": "Ireland and Cyprus: Cork, Galway, Limerick, Waterford, Kilkenny, Limassol and Paphos.",
}

IE = {"admin_type": "AdministrativeArea", "country": "Ireland", "locale": "ie"}
CY = {"admin_type": "AdministrativeArea", "country": "Cyprus", "locale": "cy"}

CITIES = [
    {
        **IE, "slug": "cork", "name": "Cork", "place": "Cork, Ireland", "admin": ("County", "County Cork"), "admin_name": "County Cork",
        "metro": "Cork city and county",
        "areas": ["Ballincollig", "Douglas", "Carrigaline", "Midleton", "Cobh", "Mallow", "Glanmire"],
        "query": "plumber cork",
        "lead": "Cork is Ireland's second city and is planned to be its fastest-growing. I help Cork plumbers, roofers, "
                "heating and heat pump installers, and septic firms rank across the city and county.",
        "headline": "Ireland's second city, with a big rural county around it.",
        "market": [
            "Cork is set to grow faster than any other Irish city over the coming decades, with new homes in "
            "Ballincollig, Carrigaline, Midleton and the docklands bringing new customers for every trade.",
            "County Cork is huge and rural, with many homes on septic tanks and private wells. Septic systems must be "
            "registered and can be inspected, which keeps installs, desludging and upgrades in demand.",
            "Grant-funded retrofits are driving searches for heat pumps, insulation and new heating systems.",
        ],
        "trades": {
            "plumbing": "Emergency plumbing and bathrooms across the city and suburbs.",
            "hvac": "Heat pump installs, grant-funded retrofits and boiler servicing.",
            "septic": "Septic tank installs, desludging and upgrades across rural County Cork.",
            "roofing": "Repairs and replacements in a wet, windy climate.",
            "home": "Electricians, builders and insulation contractors.",
        },
        "focus": ["plumbing", "hvac", "septic"],
        "search_note": "Searches across County Cork are spread over many towns, so pages for Midleton, Carrigaline and Mallow pick up demand Dublin-focused agencies never target.",
        "plan": "Cork plans cover the city suburbs and county towns, with septic, heat pump and retrofit content and "
                "pages for Ballincollig, Carrigaline and Midleton.",
        "card": "Ireland's second city with a large rural county on septic and grant-funded retrofits.",
        "faqs": [
            ("Is heat pump work a good SEO target in Cork?",
             "Yes. Grant-funded retrofits keep demand steady, and homeowners research installers carefully before choosing."),
            ("Can I rank across County Cork?",
             "Yes, with pages for each town you serve. Map rankings depend on distance, so we track each area."),
        ],
        "queries": ["heat pump installer cork", "septic tank desludging cork"],
        "demand": "High", "competition": "Low-Medium",
        "why": "Fastest-planned growth among Irish cities (NPF); rural septic; retrofit grants. Far less competition than Dublin.",
    },
    {
        **IE, "slug": "galway", "name": "Galway", "place": "Galway, Ireland", "admin": ("County", "County Galway"), "admin_name": "County Galway",
        "metro": "Galway city and Connemara",
        "areas": ["Salthill", "Knocknacarra", "Oranmore", "Athenry", "Oughterard", "Tuam", "Moycullen"],
        "query": "roofers galway",
        "lead": "Galway gets some of the wettest weather in Ireland, and the county around it is mostly rural. I help "
                "Galway roofers, plumbers, heating installers and septic firms rank from the city to Connemara.",
        "headline": "Atlantic weather and a rural county.",
        "market": [
            "Atlantic storms bring a steady stream of roof, gutter and leak repairs across Galway.",
            "Much of County Galway is rural, with homes on septic tanks and private wells, plus one-off houses "
            "needing septic installs.",
            "Retrofit grants are pushing heat pump and insulation work in older rural homes.",
        ],
        "trades": {
            "roofing": "Storm repairs, leaks and replacements in Atlantic weather.",
            "septic": "Septic installs for new builds, desludging and upgrades.",
            "hvac": "Heat pumps and oil boiler servicing for rural homes.",
            "plumbing": "Emergency plumbing across the city and county.",
            "home": "Electricians, builders and insulation.",
        },
        "focus": ["roofing", "septic", "hvac"],
        "search_note": "Galway county searches are scattered over small towns and villages, which few competitors target with real pages.",
        "plan": "Galway plans cover the city and rural county, with storm repair and septic content and pages for "
                "Oranmore, Athenry and Moycullen.",
        "card": "Wet Atlantic city and rural county with steady roofing and septic demand.",
        "faqs": [
            ("Do one-off rural houses search for septic installers?",
             "Yes. New builds on rural sites need septic systems, and owners search carefully for installers."),
            ("Is Galway competitive for roofers?",
             "Less than Dublin. Real reviews and good local pages go a long way."),
        ],
        "queries": ["septic tank installation galway", "roof repairs galway"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Atlantic weather drives roofing; rural septic; light competition.",
    },
    {
        **IE, "slug": "limerick", "name": "Limerick", "place": "Limerick, Ireland", "admin": ("County", "County Limerick"), "admin_name": "County Limerick",
        "metro": "Mid-West Ireland",
        "areas": ["Castletroy", "Raheen", "Dooradoyle", "Annacotty", "Adare", "Newcastle West", "Shannon"],
        "query": "plumber limerick",
        "lead": "Limerick is the hub of the Mid-West, with a growing city and a rural county around it. I help Limerick "
                "plumbers, roofers, heating installers and septic firms rank across the region.",
        "headline": "The Mid-West's hub city.",
        "market": [
            "Limerick has strong employment growth and new housing in Castletroy, Raheen and the suburbs.",
            "Rural County Limerick and nearby Clare have many homes on septic tanks and oil heating.",
            "Retrofits are driving heat pump and insulation searches, especially in older homes.",
        ],
        "trades": {
            "plumbing": "Emergency plumbing and bathrooms across the city and suburbs.",
            "hvac": "Heat pumps, oil boilers and retrofits.",
            "septic": "Septic tanks and treatment systems across the rural county.",
            "roofing": "Repairs and replacements across older housing.",
            "home": "Electricians and builders.",
        },
        "focus": ["plumbing", "hvac", "septic"],
        "search_note": "Limerick searches stretch into Clare and Tipperary, so pages for Shannon and nearby towns widen reach.",
        "plan": "Limerick plans cover the city suburbs and rural towns, with retrofit and septic content and pages "
                "for Castletroy, Adare and Shannon.",
        "card": "Mid-West hub with growing suburbs and rural septic demand.",
        "faqs": [
            ("Can I rank in Clare from Limerick?",
             "For nearby towns like Shannon, yes, with dedicated pages and those areas listed in your profile."),
            ("What do Limerick homeowners search most?",
             "Emergency plumbing, heating and retrofit work in the city, and septic and oil heating in the county."),
        ],
        "queries": ["heat pump grant installer limerick", "septic tank emptying limerick"],
        "demand": "Medium", "competition": "Low",
        "why": "Regional hub; rural septic; little trade-SEO competition.",
    },
    {
        **IE, "slug": "waterford", "name": "Waterford", "place": "Waterford, Ireland", "admin": ("County", "County Waterford"), "admin_name": "County Waterford",
        "metro": "South-East Ireland",
        "areas": ["Tramore", "Dungarvan", "Dunmore East", "Ferrybank", "Kilmeaden", "Portlaw", "New Ross"],
        "query": "roofers waterford",
        "lead": "Waterford is Ireland's oldest city and the hub of the South-East. I help Waterford roofers, plumbers, "
                "heating installers and septic firms rank across the city and coast.",
        "headline": "Ireland's oldest city and a coastal county.",
        "market": [
            "Older housing in the city needs regular roofing and plumbing work.",
            "Coastal towns like Tramore and Dunmore East take the brunt of storms, with holiday homes needing quick repairs.",
            "Rural County Waterford has many homes on septic tanks and oil heating moving to heat pumps.",
        ],
        "trades": {
            "roofing": "Storm repairs and replacements on older and coastal homes.",
            "plumbing": "Emergency plumbing across city and coast.",
            "hvac": "Heat pumps, retrofits and oil boiler servicing.",
            "septic": "Septic tanks across the rural county.",
            "home": "Electricians and builders.",
        },
        "focus": ["roofing", "plumbing", "hvac"],
        "search_note": "Waterford searches stretch along the coast, and pages for Tramore and Dungarvan capture separate demand.",
        "plan": "Waterford plans cover the city and coast, with storm repair and retrofit content and pages for "
                "Tramore, Dungarvan and Dunmore East.",
        "card": "South-East hub with older homes and storm-exposed coastal towns.",
        "faqs": [
            ("Is Waterford big enough for local SEO?",
             "Yes. Competition is light, so a small investment can bring a steady flow of calls."),
            ("Should I target holiday homes on the coast?",
             "If you do that work, yes. Owners search when they are away and need someone they can trust."),
        ],
        "queries": ["roof repairs tramore", "heat pump installer waterford"],
        "demand": "Medium", "competition": "Low",
        "why": "Regional hub with coastal exposure; very light competition.",
    },
    {
        **IE, "slug": "kilkenny", "name": "Kilkenny", "place": "Kilkenny, Ireland", "admin": ("County", "County Kilkenny"), "admin_name": "County Kilkenny",
        "metro": "South-East Ireland",
        "areas": ["Thomastown", "Callan", "Castlecomer", "Bennettsbridge", "Graiguenamanagh", "Freshford", "Carlow"],
        "query": "septic tank kilkenny",
        "lead": "Kilkenny is a medieval city at the centre of a mostly rural county. I help Kilkenny septic firms, "
                "plumbers, heating installers and roofers rank across the county.",
        "headline": "A medieval city in a rural county.",
        "market": [
            "Most of County Kilkenny is rural, with homes on septic tanks, private wells and oil heating.",
            "Older homes in the city and villages need regular roofing and plumbing work.",
            "Retrofits and heat pumps are a growing search as homes move off oil.",
        ],
        "trades": {
            "septic": "Septic installs, desludging and upgrades across the county.",
            "hvac": "Heat pumps, retrofits and oil boiler servicing.",
            "plumbing": "Plumbing across city and villages, including well systems.",
            "roofing": "Older roofs and storm repairs.",
            "home": "Electricians and builders.",
        },
        "focus": ["septic", "hvac", "plumbing"],
        "search_note": "Kilkenny searches are spread across small towns, which few competitors target with pages.",
        "plan": "Kilkenny plans cover the city and county towns, with septic and retrofit content front and centre.",
        "card": "Rural county with high septic and oil-to-heat-pump demand.",
        "faqs": [
            ("Is a small county like Kilkenny worth targeting?",
             "Yes. Competition is very light, so rankings come faster, and septic and heating work is steady."),
            ("Can I cover Carlow too?",
             "Yes, with a dedicated page and Carlow added to your service area."),
        ],
        "queries": ["septic tank installation kilkenny", "oil boiler service kilkenny"],
        "demand": "Medium", "competition": "Low",
        "why": "Rural county with high septic share; minimal competition.",
    },
    {
        **CY, "slug": "limassol", "name": "Limassol", "place": "Limassol, Cyprus", "admin": ("District", "Limassol District"), "admin_name": "Limassol District",
        "metro": "Limassol district",
        "areas": ["Germasogeia", "Agios Tychonas", "Mesa Geitonia", "Ypsonas", "Parekklisia", "Pyrgos", "Erimi"],
        "query": "ac service limassol",
        "lead": "Limassol has boomed with international residents, new towers and villas. I help Limassol air "
                "conditioning, plumbing, waterproofing and property maintenance companies rank in English searches.",
        "headline": "An international city searching in English.",
        "market": [
            "Limassol's international community has grown fast, and many residents search in English for every service they need.",
            "Long, hot summers make air conditioning essential, from installs to annual servicing.",
            "Flat roofs need waterproofing before winter rains, and villas with pools need regular maintenance.",
        ],
        "trades": {
            "hvac": "AC installs, servicing and repairs through long, hot summers.",
            "roofing": "Roof waterproofing before winter rains.",
            "plumbing": "Emergency plumbing, water heaters and solar water systems.",
            "home": "Pool maintenance, property management and electricians.",
            "septic": "Drainage and septic in villages outside the main sewer network.",
        },
        "focus": ["hvac", "roofing", "home"],
        "search_note": "English-language searches in Limassol often have only a few strong local results, which makes them winnable.",
        "plan": "Limassol plans cover the city and nearby communities, with English pages for AC, waterproofing and "
                "pool maintenance, aimed at residents and owners living abroad.",
        "card": "International city with strong English-language demand for AC and property maintenance.",
        "faqs": [
            ("Should my Limassol site be in English or Greek?",
             "If you serve international residents, English pages are essential. Greek pages can be added for local Cypriot customers."),
            ("Do overseas owners search for property maintenance?",
             "Yes. Owners abroad search for reliable companies to look after their homes, and reviews matter a lot."),
        ],
        "queries": ["roof waterproofing limassol", "pool maintenance limassol"],
        "demand": "Medium-High", "competition": "Low",
        "why": "Large international/English-searching population; few English-language trade results.",
    },
    {
        **CY, "slug": "paphos", "name": "Paphos", "place": "Paphos, Cyprus", "admin": ("District", "Paphos District"), "admin_name": "Paphos District",
        "metro": "Paphos district",
        "areas": ["Kato Paphos", "Peyia", "Chloraka", "Tala", "Kissonerga", "Polis", "Geroskipou"],
        "query": "air conditioning paphos",
        "lead": "Paphos has a large British and international community, many living in villas with pools. I help "
                "Paphos air conditioning, plumbing, pool and property maintenance companies rank in English searches.",
        "headline": "Villas, pools and a large British community.",
        "market": [
            "Paphos is home to many British and other European residents, and a lot of holiday homes. They search in "
            "English, often from abroad.",
            "Villas need AC servicing, pool maintenance, waterproofing and plumbing, often on a regular contract.",
            "Many hillside villages rely on septic and soakaway systems rather than mains sewers.",
        ],
        "trades": {
            "hvac": "AC servicing, installs and repairs for villas.",
            "home": "Pool maintenance, property management and key-holding services.",
            "roofing": "Roof waterproofing before winter rains.",
            "plumbing": "Plumbing, water heaters and solar systems.",
            "septic": "Septic tanks and soakaways in villages outside the sewer network.",
        },
        "focus": ["hvac", "home", "roofing"],
        "search_note": "Paphos villages like Peyia, Tala and Chloraka are searched on their own, especially by owners managing homes from abroad.",
        "plan": "Paphos plans cover the town and villages, with English pages for AC, pools and maintenance "
                "contracts, and content that speaks to owners abroad.",
        "card": "Villa and pool market with a large British community searching in English.",
        "faqs": [
            ("Can I win customers who live abroad part of the year?",
             "Yes. They search online, read reviews and look for maintenance contracts. Clear pages and reviews win them."),
            ("Do villages need their own pages?",
             "Yes. Peyia, Tala and Chloraka are searched on their own and few companies have pages for them."),
        ],
        "queries": ["pool maintenance paphos", "villa maintenance paphos", "septic tank emptying paphos"],
        "demand": "Medium", "competition": "Low",
        "why": "Large British/expat population searching in English; minimal competition.",
    },
]
