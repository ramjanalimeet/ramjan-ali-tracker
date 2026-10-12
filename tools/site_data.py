"""Site-wide data: navigation and pricing.

Edit this file, then run `python3 tools/build_site.py` to update every page.
"""

SITE = "https://ramjan-akash.vercel.app"
EMAIL = "raakash.meet@gmail.com"
WHATSAPP = "https://wa.me/8801839295114"

# Primary navigation. Items with "children" get a dropdown.
NAV = [
    {"label": "Home", "href": "/"},
    {"label": "Services", "href": "/seo-services", "groups": [
        ("Core SEO Services", [
            ("Local SEO", "/local-seo", "Rank in Google Maps and local results"),
            ("GEO & AI Visibility", "/seo-services/geo-ai-visibility", "Get cited by ChatGPT, Gemini and AI Overviews"),
            ("Ecommerce SEO", "/seo-services/ecommerce-seo", "Category and product pages that sell"),
            ("Shopify SEO", "/seo-services/shopify-seo", "Fix Shopify's SEO limits and grow sales"),
            ("SaaS SEO", "/seo-services/saas-seo", "Turn search into trials and demos"),
        ]),
        ("SEO by Specialization", [
            ("Technical SEO", "/seo-services/technical-seo", "Speed, crawling, indexing and schema"),
            ("On-Page SEO", "/seo-services/on-page-seo", "Titles, copy and page structure that rank"),
            ("SEO Audit", "/seo-services/seo-audits", "A full review with a prioritized fix list"),
            ("Link Building", "/seo-services/link-building", "Relevant links that build real authority"),
        ]),
    ], "all": ("All services", "/seo-services")},
    {"label": "Industries", "href": "/industries"},
    {"label": "Locations", "href": "/locations", "children": [
        ("USA", "/locations/usa", "Texas, Florida, Georgia, Arizona and more"),
        ("UK", "/locations/uk", "London, Manchester, Birmingham and beyond"),
        ("Canada", "/locations/canada", "Toronto, Vancouver, Calgary, Montreal"),
        ("Australia", "/locations/australia", "Sydney, Melbourne, Brisbane, Perth"),
        ("Middle East", "/locations/middle-east", "UAE, Saudi Arabia, Qatar and the Gulf"),
    ], "all": ("All locations", "/locations")},
    {"label": "Case Studies", "href": "/case-studies"},
    {"label": "Blog", "href": "/blog"},
    {"label": "About", "href": "/about"},
    {"label": "Contact", "href": "/contact"},
]

# Footer columns (the brand column is kept from the existing footer).
FOOTER = [
    ("Services", [
        ("Local SEO", "/local-seo"), ("Technical SEO", "/seo-services/technical-seo"),
        ("On-Page SEO", "/seo-services/on-page-seo"), ("GEO & AI Visibility", "/seo-services/geo-ai-visibility"),
        ("Ecommerce SEO", "/seo-services/ecommerce-seo"), ("Shopify SEO", "/seo-services/shopify-seo"), ("SaaS SEO", "/seo-services/saas-seo"),
        ("SEO Audit", "/seo-services/seo-audits"), ("Link Building", "/seo-services/link-building"),
    ]),
    ("Industries", [
        ("All industries", "/industries"), ("Roofing SEO", "/local-seo/roofing-seo"),
        ("Plumbing SEO", "/local-seo/plumbing-seo"), ("HVAC SEO", "/local-seo/hvac-seo"),
        ("Septic SEO", "/local-seo/septic-seo"), ("Home Services SEO", "/local-seo/home-services-seo"),
    ]),
    ("Locations", [
        ("USA", "/locations/usa"), ("UK", "/locations/uk"), ("Canada", "/locations/canada"),
        ("Australia", "/locations/australia"), ("Middle East", "/locations/middle-east"),
        ("All locations", "/locations"),
    ]),
    ("Company", [
        ("About", "/about"), ("Contact", "/contact"), ("Case Studies", "/case-studies"),
        ("Pricing", "/pricing"), ("Blog", "/blog"), ("Free SEO Audit", "/free-seo-audit"), ("Book a Call", "/book-a-call"),
    ]),
]

# Pricing per service. Prices are in USD.
# unit: "/month" for ongoing plans, "one-time" for fixed projects.
# The tier with "featured": True is highlighted as the most popular.
PRICING = {
    "local-seo": {"name": "Local SEO", "tiers": [
        {"name": "Starter", "price": 499, "unit": "/month", "for": "One location in a smaller market.",
         "items": ["Google Business Profile optimization and weekly posts", "Up to 5 core services and 5 towns",
                   "Citation cleanup on the top directories", "2 new service or area pages a month",
                   "Review request system", "Monthly report on rankings, calls and leads"]},
        {"name": "Growth", "price": 899, "unit": "/month", "featured": True, "for": "One location in a competitive market.",
         "items": ["Everything in Starter", "Up to 10 services and 10 towns", "4 new pages a month",
                   "2 to 4 relevant local links a month", "Map-pack rank grid across your service area",
                   "Monthly strategy call"]},
        {"name": "Pro", "price": 1499, "unit": "/month", "for": "Up to 3 locations or a large metro.",
         "items": ["Everything in Growth", "Up to 3 Google Business Profiles", "8 new pages a month",
                   "5 to 8 local links and PR mentions a month", "Review reply management",
                   "Calls every two weeks"]},
    ]},
    "technical-seo": {"name": "Technical SEO", "tiers": [
        {"name": "Fix Sprint", "price": 699, "unit": "one-time", "for": "Small sites up to 50 pages.",
         "items": ["Full crawl and Search Console review", "Core Web Vitals and mobile speed fixes",
                   "Indexing and duplicate page cleanup", "Sitemap, robots.txt and redirects",
                   "LocalBusiness and service schema", "Before and after report"]},
        {"name": "Full Overhaul", "price": 1299, "unit": "one-time", "featured": True, "for": "Sites up to 500 pages.",
         "items": ["Everything in Fix Sprint", "Site structure and internal linking plan",
                   "Redirect mapping and 404 recovery", "Full schema across every page type",
                   "Template and theme performance work", "30 days of post-launch monitoring"]},
        {"name": "Ongoing Care", "price": 349, "unit": "/month", "for": "Keep a healthy site healthy.",
         "items": ["Monthly crawl and health check", "Search Console monitoring and alerts",
                   "Fixes for new issues as they appear", "Speed checks after site changes",
                   "Monthly technical report"]},
    ]},
    "on-page-seo": {"name": "On-Page SEO", "tiers": [
        {"name": "Starter", "price": 399, "unit": "/month", "for": "Up to 10 pages optimized a month.",
         "items": ["Keyword mapping for every page", "Titles, meta descriptions and headings",
                   "Copy improvements and local signals", "Internal links to money pages",
                   "Monthly report"]},
        {"name": "Growth", "price": 699, "unit": "/month", "featured": True, "for": "Up to 25 pages optimized a month.",
         "items": ["Everything in Starter", "Content gap fixes against top competitors",
                   "FAQ blocks and schema", "Image alt text and file naming",
                   "Conversion tweaks: calls, forms, trust signals"]},
        {"name": "Pro", "price": 1099, "unit": "/month", "for": "Up to 50 pages a month, or large rewrites.",
         "items": ["Everything in Growth", "Full rewrites of weak service pages",
                   "Page templates for new services and areas", "Cannibalization cleanup",
                   "Monthly strategy call"]},
    ]},
    "geo-ai-visibility": {"name": "GEO & AI Visibility", "tiers": [
        {"name": "Starter", "price": 599, "unit": "/month", "for": "Get on the AI radar.",
         "items": ["AI visibility audit across ChatGPT, Gemini, Perplexity and Google AI Overviews",
                   "25 buyer prompts tracked monthly", "Entity and schema fixes",
                   "4 pages rewritten to be answer-ready", "Monthly AI visibility report"]},
        {"name": "Growth", "price": 999, "unit": "/month", "featured": True, "for": "Become a cited source.",
         "items": ["Everything in Starter", "50 prompts tracked monthly", "8 answer-ready pages a month",
                   "Mentions on the sites AI tools cite most in your niche",
                   "Comparison, FAQ and how-to content"]},
        {"name": "Pro", "price": 1699, "unit": "/month", "for": "Multiple brands, products or markets.",
         "items": ["Everything in Growth", "100+ prompts across markets and languages",
                   "Digital PR for brand mentions", "Review and reputation signals",
                   "Monthly strategy call"]},
    ]},
    "ecommerce-seo": {"name": "Ecommerce SEO", "tiers": [
        {"name": "Starter", "price": 799, "unit": "/month", "for": "Stores up to 500 products.",
         "items": ["Technical audit and fixes", "5 category pages optimized a month",
                   "Product title and meta templates", "Product and review schema",
                   "Monthly revenue-focused report"]},
        {"name": "Growth", "price": 1399, "unit": "/month", "featured": True, "for": "Stores up to 5,000 products.",
         "items": ["Everything in Starter", "10 category pages a month",
                   "Faceted navigation and duplicate URL control", "2 buying guides a month",
                   "Relevant links to category pages"]},
        {"name": "Pro", "price": 2299, "unit": "/month", "for": "Large catalogs and multi-region stores.",
         "items": ["Everything in Growth", "20 pages a month", "International SEO and hreflang",
                   "Digital PR campaigns", "Monthly strategy call"]},
    ]},
    "shopify-seo": {"name": "Shopify SEO", "tiers": [
        {"name": "Starter", "price": 699, "unit": "/month", "for": "New and growing Shopify stores.",
         "items": ["Shopify SEO audit", "Theme speed and app bloat fixes",
                   "5 collection pages optimized a month", "Product schema and meta templates",
                   "Monthly report"]},
        {"name": "Growth", "price": 1199, "unit": "/month", "featured": True, "for": "Established stores ready to scale.",
         "items": ["Everything in Starter", "10 collection pages a month",
                   "Duplicate product URL and tag page cleanup", "2 blog guides a month",
                   "Relevant links to collections"]},
        {"name": "Pro", "price": 1999, "unit": "/month", "for": "Shopify Plus and multi-market stores.",
         "items": ["Everything in Growth", "Shopify Markets, hreflang and multi-language",
                   "Custom theme template work", "Digital PR campaigns", "Monthly strategy call"]},
    ]},
    "seo-audits": {"name": "SEO Audit", "tiers": [
        {"name": "Essentials", "price": 299, "unit": "one-time", "for": "Small sites up to 50 pages.",
         "items": ["Technical and on-page review", "Google Business Profile review",
                   "Top 3 competitor comparison", "Top 20 fixes in priority order"]},
        {"name": "Complete", "price": 599, "unit": "one-time", "featured": True, "for": "Sites up to 500 pages.",
         "items": ["Everything in Essentials", "Content, links and citations review",
                   "Keyword and content gap analysis", "90-day roadmap",
                   "45-minute walkthrough call"]},
        {"name": "Ecommerce & Large", "price": 999, "unit": "one-time", "for": "Stores and sites over 500 pages.",
         "items": ["Everything in Complete", "Crawl budget and faceted navigation review",
                   "Product and category template review", "AI search visibility check",
                   "Two walkthrough calls"]},
    ]},
    "link-building": {"name": "Link Building", "tiers": [
        {"name": "Starter", "price": 499, "unit": "/month", "for": "Steady, relevant links.",
         "items": ["3 to 4 relevant links a month", "Local and niche directories that matter",
                   "Competitor link gap research", "Every link listed in your report"]},
        {"name": "Growth", "price": 999, "unit": "/month", "featured": True, "for": "Competitive markets.",
         "items": ["Everything in Starter", "6 to 8 links a month", "Supplier, partner and association outreach",
                   "Linkable content for your site"]},
        {"name": "Pro", "price": 1799, "unit": "/month", "for": "Authority at scale.",
         "items": ["Everything in Growth", "12 to 15 links a month", "Digital PR campaigns",
                   "Unlinked mention recovery", "Monthly strategy call"]},
    ]},
    "saas-seo": {"name": "SaaS SEO", "tiers": [
        {"name": "Starter", "price": 899, "unit": "/month", "for": "Early-stage SaaS finding product-market search fit.",
         "items": ["Technical audit and fixes", "Keyword map by funnel stage", "4 pages or articles a month",
                   "Feature and use-case page optimization", "Monthly report on signups from search"]},
        {"name": "Growth", "price": 1499, "unit": "/month", "featured": True, "for": "SaaS with traction, ready to scale.",
         "items": ["Everything in Starter", "8 pages or articles a month", "Comparison and alternatives pages",
                   "Integration and template pages", "Relevant links and PR mentions"]},
        {"name": "Pro", "price": 2499, "unit": "/month", "for": "Established SaaS in competitive categories.",
         "items": ["Everything in Growth", "14 pages or articles a month", "Programmatic SEO for scalable pages",
                   "AI search visibility tracking", "Monthly strategy call"]},
    ]},
    "content-seo": {"name": "Content SEO", "tiers": [
        {"name": "Starter", "price": 449, "unit": "/month", "for": "4 pages or articles a month.",
         "items": ["Keyword research and topic plan", "Service, area or blog content",
                   "On-page optimization and internal links", "Your approval before publishing"]},
        {"name": "Growth", "price": 799, "unit": "/month", "featured": True, "for": "8 pages or articles a month.",
         "items": ["Everything in Starter", "Content refreshes for old pages", "FAQ and schema on every page",
                   "Quarterly content strategy"]},
        {"name": "Pro", "price": 1299, "unit": "/month", "for": "14 pages or articles a month.",
         "items": ["Everything in Growth", "Topic clusters and pillar pages", "AI-search-ready formatting",
                   "Monthly strategy call"]},
    ]},
}

# Which pages show which pricing table.
PRICING_PAGES = {
    "local-seo.html": "local-seo",
    "local-seo/roofing-seo.html": "local-seo",
    "local-seo/plumbing-seo.html": "local-seo",
    "local-seo/septic-seo.html": "local-seo",
    "local-seo/hvac-seo.html": "local-seo",
    "local-seo/home-services-seo.html": "local-seo",
    "seo-services/technical-seo.html": "technical-seo",
    "seo-services/on-page-seo.html": "on-page-seo",
    "seo-services/content-seo.html": "content-seo",
    "seo-services/link-building.html": "link-building",
    "seo-services/seo-audits.html": "seo-audits",
    "seo-services/geo-ai-visibility.html": "geo-ai-visibility",
    "seo-services/ecommerce-seo.html": "ecommerce-seo",
    "seo-services/shopify-seo.html": "shopify-seo",
    "seo-services/saas-seo.html": "saas-seo",
}


# Trust points shown in a strip under the top section of every page.
# Keep these strictly true.
TRUST = [
    "Published, fixed pricing",
    "Month to month, no lock-in",
    "You own every account",
    "Replies within 24 hours",
    "Free strategy call",
]

# Client reviews. Add only real reviews, with the client's permission.
# The reviews section appears on the home page, service pages and the
# pricing page as soon as this list has at least one entry.
# Example:
#   {"quote": "Calls from Google doubled in four months.", "name": "Jane Smith",
#    "role": "Owner", "company": "Smith Roofing", "place": "Tampa, FL",
#    "rating": 5, "source": "Google review"},
REVIEWS = []
