#!/usr/bin/env python3
"""Generate city location pages, all directly under /locations/<city>.

Data lives in scripts/city_data/: usa.py (US cities, each with its state)
and one file per region (UK, Europe, Canada, Australia, Middle East) with a
REGION summary and its CITIES. Every city page is served at
/locations/<city-slug>, and locations.html lists them all, grouped by region.

The site header/footer are copied from an existing state page so generated
pages always match the live design.

Run from the repo root:  python3 scripts/build_locations.py

Existing pages are left as they are. The only changes outside the city pages
are one block on locations.html and the sitemap entries, both between marker
comments, so re-running is safe.
"""
import html
import importlib
import json
import re
import sys
import zlib
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://ramjan-akash.vercel.app"
TODAY = date.today().isoformat()
WA = "https://wa.me/8801839295114"

US_STATES = {
    "texas": ("Texas", "TX"),
    "florida": ("Florida", "FL"),
    "georgia": ("Georgia", "GA"),
    "arizona": ("Arizona", "AZ"),
    "north-carolina": ("North Carolina", "NC"),
}
REGIONS = ["united_kingdom", "europe", "canada", "australia", "middle_east"]

TRADE_LINKS = {
    "roofing": "/local-seo/roofing-seo",
    "plumbing": "/local-seo/plumbing-seo",
    "septic": "/local-seo/septic-seo",
    "hvac": "/local-seo/hvac-seo",
    "home": "/local-seo/home-services-seo",
}

# Everything that changes with the market: trade names, search patterns,
# spelling and how the remote working hours line up.
LOCALES = {
    "us": {
        "noun": "contractors",
        "trades_desc": "roofing, plumbing, septic, HVAC and home-service companies",
        "areas_word": "Neighborhoods",
        "labels": {"roofing": "Roofing SEO", "plumbing": "Plumbing SEO", "septic": "Septic SEO",
                   "hvac": "HVAC SEO", "home": "Home Services SEO"},
        "queries": {
            "roofing": ["roof repair {c}", "roof replacement {c}", "roofing company {c}"],
            "plumbing": ["emergency plumber {c}", "water heater repair {c}", "plumber {c}"],
            "septic": ["septic pumping {c}", "septic inspection {c}"],
            "hvac": ["ac repair {c}", "hvac company {c}", "furnace repair {c}"],
            "home": ["electrician {c}", "garage door repair {c}", "pest control {c}"],
        },
        "hours": "Calls are booked through my calendar in your morning or evening, and I reply to every message within 24 hours.",
    },
    "uk": {
        "noun": "trade businesses",
        "trades_desc": "roofers, plumbers, heating engineers, drainage firms and other trade businesses",
        "areas_word": "Areas",
        "labels": {"roofing": "Roofing SEO", "plumbing": "Plumbing & Heating SEO", "septic": "Drainage & Septic SEO",
                   "hvac": "Boiler & Heating SEO", "home": "Trades SEO"},
        "queries": {
            "roofing": ["roofer {c}", "roof repairs {c}", "flat roofing {c}"],
            "plumbing": ["emergency plumber {c}", "plumber {c}"],
            "septic": ["blocked drains {c}", "septic tank emptying {c}"],
            "hvac": ["boiler repair {c}", "boiler installation {c}", "heating engineer {c}"],
            "home": ["electrician {c}", "pest control {c}"],
        },
        "hours": "Dhaka is five to six hours ahead of the UK, so your morning overlaps my afternoon. Calls are booked through my calendar and I reply to every message within 24 hours.",
    },
    "ie": {
        "noun": "trade businesses",
        "trades_desc": "roofers, plumbers, heating and heat pump installers, septic firms and other trades",
        "areas_word": "Areas",
        "labels": {"roofing": "Roofing SEO", "plumbing": "Plumbing SEO", "septic": "Septic Tank SEO",
                   "hvac": "Heating & Heat Pump SEO", "home": "Trades SEO"},
        "queries": {
            "roofing": ["roofers {c}", "roof repairs {c}"],
            "plumbing": ["plumber {c}", "emergency plumber {c}"],
            "septic": ["septic tank installation {c}", "septic tank emptying {c}"],
            "hvac": ["heat pump installation {c}", "boiler service {c}"],
            "home": ["electrician {c}", "builders {c}"],
        },
        "hours": "Dhaka is five to six hours ahead of Ireland, so your morning overlaps my afternoon. Calls are booked through my calendar and I reply to every message within 24 hours.",
    },
    "cy": {
        "noun": "contractors",
        "trades_desc": "air conditioning, plumbing, roofing and waterproofing, pool and property maintenance companies",
        "areas_word": "Areas",
        "labels": {"roofing": "Roofing & Waterproofing SEO", "plumbing": "Plumbing SEO", "septic": "Drainage & Septic SEO",
                   "hvac": "Air Conditioning SEO", "home": "Property Maintenance SEO"},
        "queries": {
            "roofing": ["roof waterproofing {c}", "roof repairs {c}"],
            "plumbing": ["plumber {c}", "emergency plumber {c}"],
            "septic": ["septic tank emptying {c}", "blocked drains {c}"],
            "hvac": ["air conditioning installation {c}", "ac service {c}", "ac repair {c}"],
            "home": ["property maintenance {c}", "pool maintenance {c}", "electrician {c}"],
        },
        "hours": "Dhaka is three to four hours ahead of Cyprus, so most of your working day overlaps mine. Calls are booked through my calendar and I reply to every message within 24 hours.",
    },
    "ca": {
        "noun": "contractors",
        "trades_desc": "roofing, plumbing, HVAC, septic and home-service companies",
        "areas_word": "Neighbourhoods",
        "labels": {"roofing": "Roofing SEO", "plumbing": "Plumbing SEO", "septic": "Septic SEO",
                   "hvac": "HVAC & Furnace SEO", "home": "Home Services SEO"},
        "queries": {
            "roofing": ["roofing company {c}", "roof repair {c}"],
            "plumbing": ["plumber {c}", "emergency plumber {c}"],
            "septic": ["septic pumping {c}", "septic system installation {c}"],
            "hvac": ["furnace repair {c}", "hvac company {c}", "heat pump installation {c}"],
            "home": ["electrician {c}", "snow removal {c}"],
        },
        "hours": "Calls are booked through my calendar in your morning or evening, and I reply to every message within 24 hours.",
    },
    "au": {
        "noun": "tradies",
        "trades_desc": "roofers, plumbers, air conditioning, septic and other tradie businesses",
        "areas_word": "Suburbs",
        "labels": {"roofing": "Roofing SEO", "plumbing": "Plumbing SEO", "septic": "Septic & Drainage SEO",
                   "hvac": "Air Conditioning SEO", "home": "Tradie SEO"},
        "queries": {
            "roofing": ["roof restoration {c}", "roof repairs {c}", "roofing {c}"],
            "plumbing": ["plumber {c}", "blocked drains {c}", "hot water repairs {c}"],
            "septic": ["septic tank pumping {c}"],
            "hvac": ["air conditioning installation {c}", "split system installation {c}"],
            "home": ["electrician {c}", "pest control {c}"],
        },
        "hours": "Dhaka is four to five hours behind eastern Australia, so my morning is your early afternoon. Calls are booked through my calendar and I reply to every message within 24 hours.",
    },
    "me": {
        "noun": "maintenance companies",
        "trades_desc": "AC maintenance, plumbing, waterproofing, pest control and home maintenance companies",
        "areas_word": "Communities",
        "labels": {"roofing": "Waterproofing SEO", "plumbing": "Plumbing SEO", "septic": "Drainage SEO",
                   "hvac": "AC Maintenance SEO", "home": "Home Maintenance SEO"},
        "queries": {
            "roofing": ["roof waterproofing {c}", "waterproofing company {c}"],
            "plumbing": ["plumber {c}", "plumbing services {c}"],
            "septic": ["drainage cleaning {c}"],
            "hvac": ["ac maintenance {c}", "ac repair {c}", "ac duct cleaning {c}"],
            "home": ["villa maintenance {c}", "pest control {c}", "deep cleaning {c}", "handyman {c}"],
        },
        "hours": "Dhaka is two to three hours ahead of the Gulf, so we share almost the whole working day. Calls are booked through my calendar and I reply to every message within 24 hours.",
    },
}

e = html.escape


def load():
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    cities, hubs = [], []
    for c in importlib.import_module("city_data.usa").CITIES:
        c = dict(c)
        sname, abbr = US_STATES[c["state"]]
        c.update(locale="us", parent="united-states", parent_name="United States", place=f"{c['name']}, {abbr}",
                 country="United States", admin_type="State", admin_name=sname, geo_region=f"US-{abbr}",
                 path=f"/locations/{c['slug']}")
        cities.append(c)
    for mod_name in REGIONS:
        mod = importlib.import_module(f"city_data.{mod_name}")
        r = dict(mod.REGION)
        r["cities"] = []
        for c in mod.CITIES:
            c = dict(c)
            c.setdefault("locale", r["locale"])
            c.update(parent=r["slug"], parent_name=r["name"], path=f"/locations/{c['slug']}")
            cities.append(c)
            r["cities"].append(c)
        hubs.append(r)
    slugs = [c["slug"] for c in cities]
    dupes = {s for s in slugs if slugs.count(s) > 1}
    assert not dupes, f"duplicate city slugs: {dupes}"
    for c in cities:
        c["url"] = SITE + c["path"]
    return cities, hubs


def chrome():
    src = (ROOT / "locations" / "texas.html").read_text()
    return src[src.index("<body>"):src.index('<main id="main">')], src[src.index("</main>") + len("</main>"):]


WA_ICON = re.search(r'<svg class="wa".*?</svg>', (ROOT / "locations" / "texas.html").read_text()).group(0)


def wa_btn():
    return (f'<a class="btn btn-wa" href="{WA}" target="_blank" rel="noopener" '
            f'aria-label="Chat with us on WhatsApp">{WA_ICON}WhatsApp</a>')


def cta_band(heading, text):
    return (f'<section class="sec tight"><div class="wrap"><div class="band rv"><span class="eyebrow" style="color:#8d9088">Next step</span>'
            f'<h2>{e(heading)}</h2><p>{e(text)}</p><div class="cta-row">{wa_btn()}<a class="btn btn-ghost-d" href="/book-a-call">Book a call</a></div>'
            f'<p class="fine">Free · no pitch · you keep the action plan</p></div></div></section>')


STEPS = ('<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">How it works</span><h2>How an engagement runs.</h2></div>'
         '<p>You always know what is being worked on this month, what lands next, and what I need from you.</p></div><ol class="steps">'
         '<li class="step rv"><h3>Audit</h3><p>I review your Google Business Profile, website, citations, reviews and the competitors beating you in {place}. You keep the findings either way.</p></li>'
         '<li class="step rv"><h3>Plan</h3><p>Target services, areas and keywords, written down as one 90-day roadmap you approve before any work starts.</p></li>'
         '<li class="step rv"><h3>Fix and build</h3><p>Profile cleanup, technical fixes, service and area pages, citations, and a review system. The foundations go in first.</p></li>'
         '<li class="step rv"><h3>Grow and report</h3><p>Content, links and profile activity every month, with a plain-English report on rankings, calls and form leads.</p></li></ol></div></section>')


# Shared section copy comes in several versions, chosen per city, so pages
# don't repeat the same paragraphs word for word.
def pick(c, options, salt=0):
    return options[(zlib.crc32(c["slug"].encode()) + salt) % len(options)]


SEARCH_INTRO = [
    "These are the searches that turn into booked jobs in {n}. Most show a map pack of three businesses above the "
    "regular results, and that is where the calls come from.",
    "Not every search is worth chasing. The ones below are what people in {n} type when they are ready to book, and "
    "they are where I put the effort first.",
    "A lot of {n} customers just search \"near me\" and pick from the map. Google ranks those by distance, relevance "
    "and prominence, so your profile, reviews and pages have to back each other up.",
    "The list on the right comes from how {n} customers actually phrase their searches: the service, the place, and "
    "often the word emergency.",
]
AREA_INTRO = [
    "Map rankings fade with distance, so each part of your {n} service area gets its own page and its own tracking.",
    "Customers rarely search the whole region. They search their own area, so these are the places that each get a page written for them.",
    "A single {n} page cannot rank everywhere you work. Separate pages for nearby areas, with real local detail, can.",
    "Where you rank changes block by block. I track a grid across these areas so we can see where you win in {n} and where you need more work.",
]
TRADE_INTRO = [
    "The same local playbook, tuned to what {n} customers need and when they need it.",
    "Every trade has its own busy season and its own searches in {n}. Here is how each one plays out.",
    "What wins in {n} depends on your trade. These are the angles I lead with for each.",
]
PLAN_OUTRO = [
    "It starts with a free audit of your Google Business Profile, website and the three competitors beating you in the {n} map pack. You keep the findings either way.",
    "Before any work starts you get a 90-day roadmap for {n}, so you know what is being done, in what order, and why.",
    "No long contract. You see what was done in {n} each month, and what it did for calls and form leads.",
]
PLAN_TICKS = [
    ["Google Business Profile tuned for {n}: categories, services, service area and photos",
     "Area pages for {a[0]}, {a[1]} and {a[2]}, each written for that place",
     "Citations cleaned up and built in {m} and national directories",
     "A simple review system so happy {n} customers actually leave reviews",
     "Local links from {n}-area suppliers, sponsors and associations",
     "Map-pack rank tracking on a grid across {n}"],
    ["A {n} profile with the right primary category and every service listed",
     "Dedicated pages for {a[0]}, {a[1]} and {a[2]}",
     "Business details made consistent across {m} listings",
     "Review requests sent after every {n} job",
     "Links from local suppliers, clubs and partners",
     "Monthly report on {n} rankings, calls and leads"],
    ["Technical fixes so your site loads fast on phones in {n}",
     "Service pages for each job you want more of, written for {n}",
     "Area pages for {a[0]}, {a[1]} and {a[2]}",
     "Weekly profile posts and job photos from {n}",
     "Reviews that mention the job and the area",
     "Grid tracking that shows where you rank across {m}"],
]


def fit(text, limit=160):
    if len(text) <= limit:
        return text
    return text[: limit - 1].rsplit(" ", 1)[0].rstrip(",") + "."


def title_for(place, noun):
    t = f"{place} Local SEO for {noun.title()} | Ramjan Ali Akash"
    return t if len(t) <= 70 else f"{place} Local SEO for {noun.title()}"


def head(url, title, desc, graph_extra, geo=None):
    graph = [
        {"@type": "WebSite", "@id": f"{SITE}/#website", "url": f"{SITE}/", "name": "Ramjan Ali Akash",
         "inLanguage": "en", "publisher": {"@id": f"{SITE}/#business"}},
        {"@type": "WebPage", "@id": f"{url}#webpage", "url": url, "name": title, "description": desc,
         "isPartOf": {"@id": f"{SITE}/#website"}, "about": {"@id": f"{SITE}/#business"}, "dateModified": TODAY},
    ] + graph_extra
    ld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, separators=(",", ":"))
    t, d = e(title), e(desc)
    og_alt = "Ramjan Ali Akash - Local SEO for roofing, plumbing, septic and HVAC companies"
    geo_meta = ""
    if geo:
        geo_meta = (f'<meta name="geo.region" content="{e(geo[0])}">' if geo[0] else "") + \
                   f'<meta name="geo.placename" content="{e(geo[1])}">'
    return (
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
        f'<title>{t}</title><meta name="description" content="{d}"><link rel="canonical" href="{url}">'
        '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'
        '<meta name="author" content="Ramjan Ali Akash"><meta name="theme-color" content="#F2F3F0">'
        '<meta name="color-scheme" content="light"><meta property="og:type" content="website">'
        '<meta property="og:site_name" content="Ramjan Ali Akash">'
        f'<meta property="og:title" content="{t}"><meta property="og:description" content="{d}">'
        f'<meta property="og:url" content="{url}"><meta property="og:image" content="{SITE}/assets/og-default.png">'
        f'<meta property="og:image:alt" content="{og_alt}"><meta name="twitter:card" content="summary_large_image">'
        f'<meta name="twitter:title" content="{t}"><meta name="twitter:description" content="{d}">'
        f'<meta name="twitter:image" content="{SITE}/assets/og-default.png">{geo_meta}'
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml">'
        '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
        '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet">'
        f'<link rel="stylesheet" href="/style.css"><script type="application/ld+json">{ld}</script>'
        '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'
        f'<meta property="og:image:type" content="image/png">\n<meta name="twitter:image:alt" content="{og_alt}">\n'
        '<meta property="og:locale" content="en_US">\n</head>'
    )


def faq_schema(faqs):
    return {"@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}


def crumbs_schema(items):
    return {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i, "name": n, "item": SITE + p} for i, (n, p) in enumerate(items, 1)]}


def crumbs_html(items):
    lis = "".join(f'<li><a href="{p}">{e(n)}</a></li>' for n, p in items[:-1])
    return f'<nav aria-label="Breadcrumb"><ol class="crumbs">{lis}<li aria-current="page">{e(items[-1][0])}</li></ol></nav>'


def faq_html(faqs):
    return "".join(f"<details><summary>{e(q)}</summary><p>{e(a)}</p></details>" for q, a in faqs)


def city_faqs(c, L):
    n = c["name"]
    timing = {
        "Low": f"In a market like {n}, most businesses see map and organic movement within 60 to 90 days once the "
               "profile and site are fixed, with steady gains over six to twelve months.",
        "Low-Medium": f"Expect early movement in {n} within about three months, and stronger, steadier rankings over "
                      "six to twelve months. Timing depends on how far behind your profile and site are today.",
        "Medium": f"{n} has real competition in some trades, so plan on three to six months for clear gains and six "
                  "to twelve months to settle into the top spots for your main services.",
    }[c["competition"]]
    return list(c["faqs"]) + [
        (f"How long does local SEO take in {n}?", timing),
        (f"You are based in Bangladesh. Can you really do local SEO for {n}?",
         "Yes. Local SEO is done through your Google Business Profile, website, citations, reviews and links, all "
         "of which I manage remotely. Local knowledge comes from keyword data, map-rank tracking across your service "
         "area, competitor research, and from you and your team. " + L["hours"]),
    ]


def city_page(c, cities, header, footer):
    L = LOCALES[c["locale"]]
    labels = {**L["labels"], **c.get("labels", {})}
    n, cl, place, noun = c["name"], c.get("query_name", c["name"].lower()), c["place"], L["noun"]
    areas = c["areas"]
    title = title_for(place, noun)
    desc = fit(f"Local SEO for {place} {L['trades_desc']}. Rank in the map pack across {areas[0]}, "
               f"{areas[1]} and {areas[2]}. Free audit.")
    faqs = city_faqs(c, L)
    trades = [t for t in c["focus"] if t in c["trades"]] + [t for t in TRADE_LINKS if t in c["trades"] and t not in c["focus"]]
    crumbs = [("Home", "/"), ("Locations", "/locations"), (n, c["path"])]

    graph = [
        crumbs_schema(crumbs),
        {"@type": "Service", "name": f"Local SEO in {place}", "description": desc, "url": c["url"],
         "provider": {"@id": f"{SITE}/#business"}, "serviceType": f"Local SEO for {noun}",
         "areaServed": {"@type": "City", "name": n,
                        "containedInPlace": {"@type": c["admin_type"], "name": c["admin_name"],
                                             "containedInPlace": {"@type": "Country", "name": c["country"]}}}},
        faq_schema(faqs),
    ]

    facts = "".join(f"<li><b>{k}</b><span>{e(v)}</span></li>" for k, v in [
        (c["admin"][0], c["admin"][1]),
        ("Wider area", c["metro"]),
        ("Nearby", ", ".join(areas[:4])),
        ("Top demand", ", ".join(labels[t].replace(" SEO", "") for t in trades[:3])),
        ("Contract", "Month to month. Pause or cancel with a week of notice."),
    ])
    market = "".join(f"<p>{e(p)}</p>" for p in c["market"])
    cards = "".join(
        f'<a class="card rv" href="{TRADE_LINKS[t]}"><span class="ic" aria-hidden="true">{i:02d}</span>'
        f'<h3>{e(labels[t])} in {e(n)}</h3><p>{e(c["trades"][t])}</p><span class="go">Learn more <span>→</span></span></a>'
        for i, t in enumerate(trades, 1))

    queries = []
    for q in [q.format(c=cl) for t in trades for q in L["queries"][t]] + c.get("queries", []):
        if q not in queries:
            queries.append(q)
    query_li = "".join(f"<li>{e(q)}</li>" for q in queries[:14])

    siblings = [x for x in cities if x["parent"] == c["parent"] and x is not c]
    by_name = {x["name"]: x for x in siblings}
    chip = lambda a: (f'<a class="chip" href="{by_name[a]["path"]}">{e(a)} →</a>' if a in by_name
                      else f'<span class="chip">{e(a)}</span>')
    area_chips = "".join(chip(a) for a in [n] + areas)
    near_chips = "".join(f'<a class="chip" href="{x["path"]}">{e(x["name"])} →</a>' for x in siblings[:9])

    plan = "".join(f"<li>{e(x.format(n=n, a=areas, m=c['metro']))}</li>" for x in pick(c, PLAN_TICKS, 4))
    pins = "".join(f'<i{" class=\"me\"" if i == 0 else ""} style="left:{x}%;top:{y}%"></i>'
                   for i, (x, y) in enumerate([(46, 38), (22, 55), (72, 24)]))

    body = (
        f'<main id="main"><section class="phero"><div class="wrap">{crumbs_html(crumbs)}<div class="phero-grid"><div>'
        f'<span class="eyebrow">Local SEO · {e(place)}</span><h1>Local SEO for <span class="hl">{e(n)}</span> {e(noun)}.</h1>'
        f'<p class="lead">{e(c["lead"])}</p><div class="cta-row">{wa_btn()}<a class="btn btn-ghost" href="/book-a-call">Book a call</a></div></div>'
        f'<aside class="facts"><h2>{e(n)} at a glance</h2><ul>{facts}</ul></aside></div></div></section>'

        f'<section class="sec"><div class="wrap split"><div class="body rv"><span class="eyebrow">The {e(n)} market</span>'
        f'<h2>{e(c["headline"])}</h2>{market}</div><div class="mock rv" aria-hidden="true"><div class="mcard">'
        f'<div class="mq">🔍 {e(c["query"])}</div><div class="mmap">{pins}</div><ul>'
        '<li class="mrow me"><span class="pos">1</span><div><b>Your Business</b><small><span class="st">★★★★★</span> 4.9 · Open 24 hours</small></div></li>'
        '<li class="mrow"><span class="pos">2</span><div><b>Competitor A</b><small><span class="st">★★★★</span>☆ · Closes 6 PM</small></div></li>'
        '<li class="mrow"><span class="pos">3</span><div><b>Competitor B</b><small><span class="st">★★★★</span>☆ · Closes 5 PM</small></div></li>'
        '</ul></div></div></div></section>'

        f'<section class="sec alt"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">By trade</span>'
        f'<h2>Local SEO for {e(n)} {e(noun)}, by trade.</h2></div><p>{e(pick(c, TRADE_INTRO, 2).format(n=n))}</p></div><div class="grid g3">{cards}</div></div></section>'

        f'<section class="sec"><div class="wrap split"><div class="body rv"><span class="eyebrow">Search demand</span>'
        f'<h2>What {e(n)} customers type into Google.</h2><p>{e(pick(c, SEARCH_INTRO).format(n=n))}</p>'
        f'<p>{e(c["search_note"])}</p></div><div class="panel rv"><h3>Searches I target in {e(n)}</h3>'
        f'<ul class="ticks">{query_li}</ul></div></div></section>'

        f'<section class="sec alt"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Service area</span>'
        f'<h2>{e(L["areas_word"])} and towns around {e(n)}.</h2></div><p>{e(pick(c, AREA_INTRO, 1).format(n=n))}</p></div><div class="chips rv">{area_chips}</div></div></section>'

        f'<section class="sec"><div class="wrap split"><div class="body rv"><span class="eyebrow">Your {e(n)} plan</span>'
        f'<h2>What I do for {e(n)} businesses.</h2><p>{e(c["plan"])}</p><p>{e(pick(c, PLAN_OUTRO, 3).format(n=n))}</p></div><div class="panel rv"><h3>Included in a {e(n)} plan</h3>'
        f'<ul class="ticks">{plan}</ul></div></div></section>'

        f'<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Questions</span>'
        f'<h2>{e(n)} local SEO questions.</h2></div><p>Anything else, ask on the call or '
        f'<a href="mailto:raakash.meet@gmail.com">email me</a>. I reply to every message personally.</p></div>'
        f'<div class="faq rv">{faq_html(faqs)}</div></div></section>'

        f'<section class="sec tight"><div class="wrap rv"><span class="eyebrow">More {e(c["parent_name"])} cities</span>'
        f'<div class="chips" style="margin-top:6px">{near_chips}<a class="chip" href="/locations#{c["parent"]}">'
        f'All locations →</a></div></div></section>'
        + cta_band(f"Want more calls from {n} searches?",
                   f"A free Local SEO audit of your Google Business Profile, website and top {n} competitors. You get "
                   "the findings and the order I would fix them in, whether you hire me or not.")
        + '</main>'
    )
    geo = (c.get("geo_region"), n)
    return head(c["url"], title, desc, graph, geo) + header + body + footer


def replace_block(text, start, end, block, anchor_before):
    if start in text:
        return re.sub(re.escape(start) + r".*?" + re.escape(end), lambda m: start + block + end, text, flags=re.S)
    i = text.index(anchor_before)
    return text[:i] + start + block + end + text[i:]


US_GROUP = {
    "slug": "united-states", "name": "United States",
    "lead": "Mid-size, fast-growing US cities where hail, hurricanes, heat and septic keep trades busy, and where "
            "the map pack is still winnable.",
}


def update_hub(cities, hubs):
    """List every city page on /locations, grouped by country or region."""
    p = ROOT / "locations.html"
    t = p.read_text()
    groups = [(US_GROUP, [c for c in cities if c["locale"] == "us"])] + [(r, r["cities"]) for r in hubs]
    sections = ""
    for i, (g, cs) in enumerate(groups):
        cards = "".join(
            f'<a class="card rv" href="{c["path"]}"><span class="tag">{e(c["place"])}</span>'
            f'<h3>Local SEO in {e(c["name"])}</h3><p>{e(c["card"])}</p><span class="go">See {e(c["name"])} <span>→</span></span></a>'
            for c in cs)
        sections += (
            f'<section class="sec{" alt" if i % 2 else ""}" id="{g["slug"]}"><div class="wrap"><div class="sec-head rv"><div>'
            f'<span class="eyebrow">{e(g["name"])} · {len(cs)} cities</span><h2>Local SEO in {"the " if g["name"] in ("United States", "United Kingdom", "Middle East") else ""}{e(g["name"])}.</h2></div>'
            f'<p>{e(g["lead"])}</p></div><div class="grid g3">{cards}</div></div></section>')
    jump = "".join(f'<a class="chip" href="#{g["slug"]}">{e(g["name"])} ({len(cs)})</a>' for g, cs in groups)
    block = (f'<section class="sec tight"><div class="wrap rv"><span class="eyebrow">{len(cities)} city pages</span>'
             f'<div class="chips" style="margin-top:6px">{jump}</div></div></section>{sections}')
    anchor = '<section class="sec alt"><div class="wrap split"><div class="body rv"><span class="eyebrow">How I work remotely</span>'
    p.write_text(replace_block(t, "<!--city-hub:start-->", "<!--city-hub:end-->", block, anchor))


def update_sitemap(cities, hubs):
    p = ROOT / "sitemap.xml"
    t = p.read_text()
    for slug in US_STATES:
        t = re.sub(rf"(<loc>{re.escape(SITE)}/locations/{slug}</loc><lastmod>)[^<]+", rf"\g<1>{TODAY}", t)
    t = re.sub(rf"(<loc>{re.escape(SITE)}/locations</loc><lastmod>)[^<]+", rf"\g<1>{TODAY}", t)
    urls = [c["url"] for c in cities]
    block = "\n" + "".join(f"  <url><loc>{u}</loc><lastmod>{TODAY}</lastmod></url>\n" for u in urls) + "  "
    p.write_text(replace_block(t, "<!--cities:start-->", "<!--cities:end-->", block,
                               f"<url><loc>{SITE}/seo-services/content-seo"))


def write_research(cities, hubs):
    """docs/location-research.md: why each city was picked and what to target."""
    L = ["# Location research: city targets", "",
         "Generated by `scripts/build_locations.py` from `scripts/city_data/`. Edit the data, not this file.", "",
         "## How cities were chosen", "",
         "- **Search intent:** each city is targeted with service + city searches that people type when ready to book "
         "(e.g. `boiler repair milton keynes`, `ac maintenance sharjah`), matching the trades on this site.",
         "- **Demand:** growth (new housing, census and planning data), weather and climate (hail, hurricanes, cyclones, "
         "extreme heat, cold winters) and housing stock (old homes, off-mains septic, villas) that create steady urgent searches.",
         "- **Competition:** big metros (Houston, Dallas, London, Manchester, Toronto, Sydney, Dubai) were excluded because "
         "specialist agencies already compete there. Spot checks of these mid-size cities in October 2026 mostly turned up "
         "directories, marketplaces or templated agency pages, which genuinely local pages can outrank.",
         "- **Tiers are estimates.** No paid keyword tool was used. Before investing heavily in a city, confirm volumes in "
         "Google Keyword Planner, Ahrefs or Semrush and check the live map pack.", "",
         "## Cities", "",
         "| Region | City | Demand | Competition | Lead trades | Example searches | Why |",
         "|---|---|---|---|---|---|---|"]
    for c in cities:
        region = "USA" if c["locale"] == "us" else c["parent_name"]
        labels = {**LOCALES[c["locale"]]["labels"], **c.get("labels", {})}
        lead = ", ".join(labels[t].replace(" SEO", "") for t in c["focus"])
        qs = "; ".join(f"`{q}`" for q in ([c["query"]] + c.get("queries", []))[:3])
        L.append(f"| {region} | [{c['place']}]({c['path']}) | {c['demand']} | {c['competition']} | {lead} | {qs} | {c['why']} |")
    L += ["", f"Total: {len(cities)} city pages, all under /locations.", ""]
    out = ROOT / "docs" / "location-research.md"
    out.parent.mkdir(exist_ok=True)
    out.write_text("\n".join(L))


def main():
    cities, hubs = load()
    header, footer = chrome()
    for c in cities:
        out = ROOT / (c["path"].lstrip("/") + ".html")
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(city_page(c, cities, header, footer))
    update_hub(cities, hubs)
    update_sitemap(cities, hubs)
    write_research(cities, hubs)
    print(f"Built {len(cities)} city pages under /locations.")


if __name__ == "__main__":
    main()
