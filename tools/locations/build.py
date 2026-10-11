"""Build the international location pages, the Locations hub and shared navigation.

Run from the repository root:  python3 tools/locations/build.py

The script is idempotent: it regenerates locations/<city>.html and locations.html,
and rewrites the Locations menu, footer and sitemap entries in every page.
"""
import html
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from data_us import US  # noqa: E402
from data_uk_ie import UK, IE  # noqa: E402
from data_ca_au import CA, AU  # noqa: E402
from data_eu import EU  # noqa: E402
from data_me_asia import ME, ASIA  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
SITE = "https://ramjan-akash.vercel.app"
LASTMOD = "2026-10-11"
CITIES = US + UK + IE + CA + AU + EU + ME + ASIA

# Countries in display order, grouped into regions on the hub page.
COUNTRIES = {
    "us": dict(name="United States", anchor="united-states", locale="en_US"),
    "ca": dict(name="Canada", anchor="canada", locale="en_CA"),
    "uk": dict(name="United Kingdom", anchor="united-kingdom", locale="en_GB"),
    "ie": dict(name="Ireland", anchor="ireland", locale="en_IE"),
    "nl": dict(name="Netherlands", anchor="netherlands", locale="en_GB"),
    "dk": dict(name="Denmark", anchor="denmark", locale="en_GB"),
    "se": dict(name="Sweden", anchor="sweden", locale="en_GB"),
    "ee": dict(name="Estonia", anchor="estonia", locale="en_GB"),
    "cy": dict(name="Cyprus", anchor="cyprus", locale="en_GB"),
    "mt": dict(name="Malta", anchor="malta", locale="en_GB"),
    "ae": dict(name="United Arab Emirates", anchor="united-arab-emirates", locale="en_GB"),
    "qa": dict(name="Qatar", anchor="qatar", locale="en_GB"),
    "au": dict(name="Australia", anchor="australia", locale="en_AU"),
    "my": dict(name="Malaysia", anchor="malaysia", locale="en_GB"),
    "bd": dict(name="Bangladesh", anchor="bangladesh", locale="en_GB"),
}
COUNTRY_NOTES = {
    "us": "Town-by-town local SEO for service businesses, plus organic growth for regional and B2B brands.",
    "ca": "Canadian directories, neighbourhood pages and winter-ready content across four provinces.",
    "uk": "Local SEO built around UK towns, postcodes and directories, plus national SEO for UK firms.",
    "ie": "Irish-market signals, Eircode-accurate listings and content for local and international firms.",
    "nl": "Dutch and English SEO for local businesses, expats and international tech companies.",
    "dk": "Danish-first local SEO and English content for exporters.",
    "se": "Swedish SEO with cross-border targeting toward Copenhagen.",
    "ee": "Multilingual SEO in Estonian, Russian, English and Finnish.",
    "cy": "Greek, English and Russian SEO for international and local businesses.",
    "mt": "Local and international SEO for one of Europe's most competitive small markets.",
    "ae": "Arabic and English SEO with precise map targeting across each emirate.",
    "qa": "Arabic and English SEO for Doha's districts and fast-growing industries.",
    "au": "Local SEO for tradies and service businesses, with Australian directories and suburb pages.",
    "my": "English, Malay and Chinese SEO for local, visitor and cross-border searches.",
    "bd": "Where I am based. In-person meetings, Bangla and English SEO, and international SEO for exporters.",
}
REGIONS = [
    ("north-america", "North America", "SEO for businesses across the United States and Canada.", ["us", "ca"]),
    ("uk-ireland", "United Kingdom and Ireland", "SEO for UK and Irish cities, towns and regions.", ["uk", "ie"]),
    ("europe", "Europe", "Multilingual SEO for European cities, in English and the local language.", ["nl", "dk", "se", "ee", "cy", "mt"]),
    ("middle-east", "Middle East", "Arabic and English SEO for the Gulf.", ["ae", "qa"]),
    ("asia-pacific", "Asia-Pacific", "SEO for Australia, Malaysia and Bangladesh.", ["au", "my", "bd"]),
]
STATES = [
    ("texas", "Texas", "Houston, Dallas-Fort Worth, San Antonio, Austin and the fast-growing suburbs around them."),
    ("florida", "Florida", "Miami, Tampa Bay, Orlando, Jacksonville and the coastal and inland towns between them."),
    ("georgia", "Georgia", "Metro Atlanta and its suburbs, Savannah, Augusta, Columbus, Macon and growing towns statewide."),
    ("arizona", "Arizona", "Phoenix, Mesa, Scottsdale, Chandler, Gilbert, Tucson and the growing Valley suburbs."),
    ("north-carolina", "North Carolina", "Charlotte, Raleigh, Durham, Greensboro, Wilmington and the fast-growing towns around them."),
]
# Short, unique card copy for the Locations hub.
CARDS = {
    "boise-id": "Treasure Valley growth, new competitors and town-level pages for Meridian, Nampa and Eagle.",
    "greenville-sc": "Upstate service businesses and the I-85 manufacturing corridor.",
    "chattanooga-tn": "A three-state market across Tennessee, North Georgia and Alabama.",
    "knoxville-tn": "Students, suburbs, Smokies visitors and Oak Ridge research firms.",
    "huntsville-al": "Rocket City engineers, fast-growing suburbs and aerospace suppliers.",
    "tulsa-ok": "Storm-season readiness and suburb pages for Broken Arrow, Owasso and Jenks.",
    "spokane-wa": "The Inland Northwest hub, across Washington and North Idaho.",
    "reno-nv": "Reno, Sparks and Tahoe, for locals, visitors and Spanish-speaking customers.",
    "lexington-ky": "Bluegrass towns, race meets, bourbon tourism and local trust.",
    "fort-collins-co": "Northern Colorado's growing towns, from Old Town to Windsor and Loveland.",
    "leicester": "A diverse city with a busy independent scene and national manufacturers.",
    "derby": "Engineering suppliers, Peak District tourism and busy suburbs.",
    "stoke-on-trent": "Six towns, one city: pages for Hanley, Burslem, Longton and more.",
    "hull": "East and West Hull, the East Riding and the Humber energy sector.",
    "plymouth": "A maritime city with customers across Devon and Cornwall.",
    "swansea": "Swansea Bay, Gower and Mumbles, with Welsh-language options.",
    "wolverhampton": "Black Country manufacturers and tightly targeted local services.",
    "cork": "Ireland's second city, from Douglas and Ballincollig to the pharma cluster.",
    "galway": "Tourism, students, Irish-language audiences and a world-class medtech cluster.",
    "limerick": "Limerick, Shannon and Ennis, with international employers and a student hub.",
    "london-ontario": "The Forest City, with clear signals that separate it from London, England.",
    "saskatoon-sk": "The service centre for Saskatchewan's agriculture, mining and research.",
    "regina-sk": "The provincial capital, its bedroom communities and government-facing firms.",
    "halifax-ns": "Halifax, Dartmouth and Bedford, plus ocean tech and tourism.",
    "newcastle-nsw": "Newcastle, Lake Macquarie, Maitland and the Hunter Valley.",
    "geelong-vic": "Geelong, the Bellarine, the Surf Coast and fast-growing estates.",
    "wollongong-nsw": "The Illawarra's long coastal strip, from Thirroul to Kiama.",
    "townsville-qld": "North Queensland's hub: defence families, tropical seasons and regional reach.",
    "eindhoven": "The Brainport tech region, expat services and Dutch local search.",
    "utrecht": "The centre of the Netherlands, from Leidsche Rijn to national reach.",
    "aarhus": "Danish-first local SEO and English content for exporters.",
    "malmo": "Swedish, English and Danish SEO across the Öresund region.",
    "tallinn": "Estonian, Russian, English and Finnish SEO for startups and local businesses.",
    "limassol": "Shipping, fintech, real estate and tourism, in Greek, English and Russian.",
    "sliema-valletta-malta": "iGaming, finance, tourism and local businesses across Malta.",
    "abu-dhabi": "Arabic and English SEO across the island, Al Reem, Yas and Khalifa City.",
    "sharjah": "SMEs, manufacturers and family services competing with Dubai.",
    "doha": "Arabic and English SEO for West Bay, Lusail, The Pearl and beyond.",
    "penang": "George Town, Bayan Lepas and the mainland, in English, Malay and Chinese.",
    "johor-bahru": "Local and Singaporean customers on both sides of the causeway.",
    "dhaka": "My home city. Bangla and English SEO, and international SEO for exporters.",
}
SERVICES = [
    ("/local-seo", "Local SEO"), ("/seo-services/technical-seo", "Technical SEO"),
    ("/seo-services/on-page-seo", "On-Page SEO"), ("/seo-services/content-seo", "Content SEO"),
    ("/seo-services/link-building", "Link Building"), ("/seo-services/seo-audits", "SEO Audits"),
]
WA = '<a class="btn btn-wa" href="https://wa.me/8801839295114" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp"><svg class="wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A10 10 0 0 0 3.3 17l-1.4 5.1 5.3-1.4a10 10 0 0 0 4.8 1.2h0a10 10 0 0 0 7.1-17zM12 20.2a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.3 8.3 0 1 1 7.2 4.1zm4.6-6.2c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.6.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.5 3.5 0 0 0 1.6.1c.5-.1 1.5-.6 1.7-1.2s.2-1.1.1-1.2-.2-.2-.5-.3z"/></svg>WhatsApp</a>'
CONTRACT = ("Contract", "Month to month. Pause or cancel with a week of notice.")
STEPS = ('<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">How it works</span><h2>How an engagement runs.</h2></div><p>You always know what is being worked on this month, what lands next, and what I need from you.</p></div><ol class="steps"><li class="step rv"><h3>Audit</h3><p>I review your Google Business Profile, website, citations, reviews and the three competitors beating you in search. You keep the findings either way.</p></li><li class="step rv"><h3>Plan</h3><p>Target services, areas, languages and keywords, written down as one 90-day roadmap you approve before any work starts.</p></li><li class="step rv"><h3>Fix and build</h3><p>Profile cleanup, technical fixes, service and area pages, citations, and a review system. The foundations go in first.</p></li><li class="step rv"><h3>Grow and report</h3><p>Content, links and profile activity every month, with a plain-English report on rankings, calls and form leads.</p></li></ol></div></section>')
BAND = ('<section class="sec tight"><div class="wrap"><div class="band rv"><span class="eyebrow" style="color:#8d9088">Next step</span><h2>{h}</h2><p>{p}</p><div class="cta-row">' + WA + '<a class="btn btn-ghost-d" href="/book-a-call">Book a call</a></div><p class="fine">Free · no pitch · you keep the action plan</p></div></div></section>')

e = lambda s: html.escape(s, quote=False)  # noqa: E731
a = lambda s: html.escape(s, quote=True)  # noqa: E731


def label(c):
    """Display name used in crumbs, cards and links."""
    if c.get("display"):
        return c["display"]
    return f'{c["city"]}, {c["abbr"]}' if c.get("abbr") else c["city"]


# ---------------------------------------------------------------- shared chrome
NAV_DD = [
    ("north-america", "North America", "US states and cities, plus Canada"),
    ("uk-ireland", "UK and Ireland", "Leicester, Derby, Hull, Cork, Galway and more"),
    ("europe", "Europe", "Eindhoven, Utrecht, Aarhus, Malmö, Tallinn, Malta"),
    ("middle-east", "Middle East", "Abu Dhabi, Sharjah and Doha"),
    ("asia-pacific", "Asia-Pacific", "Australia, Malaysia and Dhaka"),
]
FOOT_LINKS = [("united-states", "United States"), ("united-kingdom", "United Kingdom"), ("canada", "Canada"),
              ("australia", "Australia"), ("europe", "Europe"), ("middle-east", "Middle East"), ("asia-pacific", "Asia")]
FOOT_BLURB = "Local SEO and SEO services for home-service companies and local businesses worldwide, from the US and UK to Australia, Europe, the Gulf and Asia. Based in Dhaka, Bangladesh."


def update_chrome(page):
    dd = '<div class="dd"><ul>' + "".join(
        f'<li><a href="/locations#{k}">{e(n)}<small>{e(s)}</small></a></li>' for k, n, s in NAV_DD
    ) + '<li class="all"><a href="/locations">All locations →</a></li></ul></div>'
    page = re.sub(r'(<a href="/locations"[^>]*>Locations<svg.*?</svg></a>)<div class="dd"><ul>.*?</ul></div>',
                  lambda m: m.group(1) + dd, page, count=1, flags=re.S)
    mob = '<details><summary>Locations</summary><ul><li><a href="/locations">All locations</a></li>' + "".join(
        f'<li><a href="/locations#{k}">{e(n)}</a></li>' for k, n, _ in NAV_DD) + '</ul></details>'
    page = re.sub(r'<details><summary>Locations</summary><ul>.*?</ul></details>', lambda m: mob, page, count=1, flags=re.S)
    foot = '<div><h4>Locations</h4><ul>' + "".join(
        f'<li><a href="/locations#{k}">{e(n)}</a></li>' for k, n in FOOT_LINKS) + '</ul></div>'
    page = re.sub(r'<div><h4>Locations</h4><ul>.*?</ul></div>', lambda m: foot, page, count=1, flags=re.S)
    page = re.sub(r'(<footer class="ftr"><div class="wrap"><div class="fgrid"><div><a class="logo" href="/">Akash<b>.</b></a><p>)[^<]*(</p>)',
                  lambda m: m.group(1) + FOOT_BLURB + m.group(2), page, count=1)
    return page


def head(title, desc, url, locale, graph):
    ld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, separators=(",", ":"))
    ld = ld.replace("</", "<\\/")
    t, d = a(title), a(desc)
    alt = "Ramjan Ali Akash - Local SEO and SEO services for businesses worldwide"
    return (
        '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
        f'<title>{t}</title><meta name="description" content="{d}"><link rel="canonical" href="{url}">'
        '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"><meta name="author" content="Ramjan Ali Akash">'
        '<meta name="theme-color" content="#F2F3F0"><meta name="color-scheme" content="light"><meta property="og:type" content="website">'
        f'<meta property="og:site_name" content="Ramjan Ali Akash"><meta property="og:title" content="{t}"><meta property="og:description" content="{d}">'
        f'<meta property="og:url" content="{url}"><meta property="og:image" content="{SITE}/assets/og-default.png"><meta property="og:image:alt" content="{alt}">'
        f'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{t}"><meta name="twitter:description" content="{d}">'
        f'<meta name="twitter:image" content="{SITE}/assets/og-default.png">'
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
        '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style.css">'
        f'<script type="application/ld+json">{ld}</script>'
        '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:type" content="image/png">\n'
        f'<meta name="twitter:image:alt" content="{alt}">\n<meta property="og:locale" content="{locale}">\n</head>'
    )


def chrome():
    src = (ROOT / "locations/texas.html").read_text(encoding="utf-8")
    body = src[src.index("<body>"):src.index('<main id="main">')]
    foot = src[src.index("</main>") + len("</main>"):]
    return body, foot


def base_graph(url, name, desc, crumbs):
    return [
        {"@type": "WebSite", "@id": f"{SITE}/#website", "url": f"{SITE}/", "name": "Ramjan Ali Akash", "inLanguage": "en",
         "publisher": {"@id": f"{SITE}/#business"}},
        {"@type": "WebPage", "@id": f"{url}#webpage", "url": url, "name": name, "description": desc, "inLanguage": "en",
         "isPartOf": {"@id": f"{SITE}/#website"}, "about": {"@id": f"{SITE}/#business"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": n, "item": u} for i, (n, u) in enumerate(crumbs)]},
    ]


def faq_graph(faqs):
    return {"@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": ans}} for q, ans in faqs]}


def faq_html(faqs, intro):
    return ('<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Questions</span>'
            f'<h2>Things people ask first.</h2></div><p>{intro}</p></div><div class="faq rv">'
            + "".join(f"<details><summary>{e(q)}</summary><p>{e(ans)}</p></details>" for q, ans in faqs)
            + "</div></div></section>")


FAQ_INTRO = 'Anything else, ask on the call or <a href="mailto:raakash.meet@gmail.com">email me</a>. I reply to every message personally.'


# ---------------------------------------------------------------- city pages
def city_page(c, body, foot):
    ctry = COUNTRIES[c["country"]]
    us = c["country"] == "us"
    hood = "neighborhoods" if us else "neighbourhoods"
    url = f'{SITE}/locations/{c["slug"]}'
    name = label(c)
    crumbs = [("Home", f"{SITE}/"), ("Locations", f"{SITE}/locations"),
              (ctry["name"], f'{SITE}/locations#{ctry["anchor"]}'), (name, url)]

    if c.get("local"):
        remote = ("Do you work with businesses outside Dhaka too?",
                  "Yes. Most of my clients are abroad, in North America, the UK, Europe, the Gulf and Australia. The same process works for Dhaka businesses, with the bonus that we can meet face to face.")
    else:
        remote = (f"You are in Dhaka. How does SEO for a {c['city']} business work remotely?",
                  "Everything that moves rankings, your Google Business Profile, website, citations, reviews and links, is managed online. "
                  f"{c['tz']} Local knowledge comes from keyword and competitor data for {c['city']}, the rankings I track across your area, and from you and your team.")
    faqs = [remote] + c["faqs"]

    graph = base_graph(url, c["title"], c["desc"], crumbs)
    place = {"@type": "City", "name": c["city"] if c["slug"] != "sliema-valletta-malta" else "Sliema",
             "containedInPlace": {"@type": "AdministrativeArea", "name": c["admin"],
                                  "containedInPlace": {"@type": "Country", "name": ctry["name"]}}}
    if c["admin"] == ctry["name"] or c["slug"] == "sliema-valletta-malta":
        place["containedInPlace"] = {"@type": "Country", "name": ctry["name"]}
    if c["slug"] == "sliema-valletta-malta":
        place = [place, {"@type": "City", "name": "Valletta", "containedInPlace": {"@type": "Country", "name": "Malta"}}]
    graph.append({"@type": "Service", "name": f"SEO services in {name}", "description": c["desc"], "url": url,
                  "provider": {"@id": f"{SITE}/#business"}, "serviceType": "Search engine optimization",
                  "areaServed": place})
    graph.append(faq_graph(faqs))

    facts = c["facts"] + [CONTRACT]
    hero = (
        '<section class="phero"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="crumbs">'
        f'<li><a href="/">Home</a></li><li><a href="/locations">Locations</a></li>'
        f'<li><a href="/locations#{ctry["anchor"]}">{e(ctry["name"])}</a></li><li aria-current="page">{e(name)}</li></ol></nav>'
        f'<div class="phero-grid"><div><span class="eyebrow">SEO · {e(name)}</span><h1>{c["h1"]}</h1><p class="lead">{e(c["lead"])}</p>'
        '<div class="cta-row">' + WA + '<a class="btn btn-ghost" href="/book-a-call">Book a call</a></div></div>'
        '<aside class="facts"><h2>At a glance</h2><ul>'
        + "".join(f"<li><b>{e(k)}</b><span>{e(v)}</span></li>" for k, v in facts)
        + "</ul></aside></div></div></section>"
    )
    market = (
        '<section class="sec"><div class="wrap split"><div class="body rv">'
        f'<span class="eyebrow">The {e(c["city"])} market</span><h2>{e(c["market_h2"])}</h2>'
        + "".join(f"<p>{e(p)}</p>" for p in c["market"])
        + '</div><div class="mock rv" aria-hidden="true"><div class="mcard">'
        f'<div class="mq">🔍 {e(c["query"])}</div><div class="mmap"><i class="me" style="left:46%;top:38%"></i><i style="left:22%;top:55%"></i><i style="left:72%;top:24%"></i></div>'
        '<ul><li class="mrow me"><span class="pos">1</span><div><b>Your Business</b><small><span class="st">★★★★★</span> 4.9 · Open now</small></div></li>'
        '<li class="mrow"><span class="pos">2</span><div><b>Competitor A</b><small><span class="st">★★★★</span>☆ · Closes 6 PM</small></div></li>'
        '<li class="mrow"><span class="pos">3</span><div><b>Competitor B</b><small><span class="st">★★★★</span>☆ · Closes 6 PM</small></div></li></ul></div></div></div></section>'
    )
    prio = (
        '<section class="sec alt"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Local priorities</span>'
        f'<h2>{e(c["prio_h2"])}</h2></div><p>Every market has its own search habits. These are the things I focus on first for {e(c["city"])} businesses.</p></div>'
        '<div class="grid g2">'
        + "".join(f'<div class="card rv"><span class="ic" aria-hidden="true">{i:02d}</span><h3>{e(t)}</h3><p>{e(d)}</p></div>'
                  for i, (t, d) in enumerate(c["prio"], 1))
        + "</div></div></section>"
    )
    areas = (
        '<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Areas served</span>'
        f'<h2>{e(hood.capitalize())} and towns I target.</h2></div><p>Pages and Google Business Profile settings are built around the parts of {e(c["city"])} you actually serve, not one generic page.</p></div>'
        '<div class="chips rv">' + "".join(f'<span class="chip">{e(x)}</span>' for x in c["areas"]) + "</div>"
        '<div class="grid g2" style="margin-top:40px">'
        f'<div class="panel rv"><h3>Who I work with in {e(c["city"])}</h3><ul class="ticks">'
        + "".join(f"<li>{e(x)}</li>" for x in c["industries"])
        + f'</ul></div><div class="panel rv"><h3>Where I would start</h3><ul class="ticks">'
        + "".join(f"<li>{e(x)}</li>" for x in c["plan"])
        + "</ul></div></div>"
        f'<div class="chips rv"><span class="chip" style="border-color:transparent;background:none;padding-left:0">Services in {e(c["city"])}:</span>'
        + "".join(f'<a class="chip" href="{u}">{n}</a>' for u, n in SERVICES)
        + "</div></div></section>"
    )
    siblings = [x for x in CITIES if x["country"] == c["country"] and x["slug"] != c["slug"]]
    links = [(f'/locations/{x["slug"]}', label(x)) for x in siblings]
    if us:
        links += [(f"/locations/{s}", n) for s, n, _ in STATES]
    if len(links) < 3:
        region = next(r for r in REGIONS if c["country"] in r[3])
        links += [(f'/locations/{x["slug"]}', label(x)) for x in CITIES
                  if x["country"] in region[3] and x["country"] != c["country"]][:6]
    other_h = f"Other locations in {e(ctry['name'])}" if siblings else "Nearby locations"
    other = (
        f'<section class="sec tight"><div class="wrap rv"><span class="eyebrow">{other_h}</span><div class="chips" style="margin-top:6px">'
        + "".join(f'<a class="chip" href="{u}">{e(n)} →</a>' for u, n in links)
        + '<a class="chip" href="/locations">All locations →</a></div></div></section>'
    )
    band = BAND.format(h=e(c["cta"]), p=f"A free SEO audit of your website, Google Business Profile and top {e(c['city'])} competitors. You get the findings and the order I would fix them in, whether you hire me or not.")
    main = '<main id="main">' + hero + market + prio + areas + STEPS + faq_html(faqs, FAQ_INTRO) + other + band + "</main>"
    return head(c["title"], c["desc"], url, ctry["locale"], graph) + body + main + foot


# ---------------------------------------------------------------- hub page
HUB_TITLE = "SEO Services Worldwide: Locations | Ramjan Ali Akash"
HUB_DESC = "SEO and Local SEO for businesses in the US, UK, Ireland, Canada, Australia, Europe, the Gulf and Asia. Find your city and see how ranking works there."
HUB_FAQS = [
    ("You are in Bangladesh. Can you really do SEO for my city?",
     "Yes. Rankings are driven by your Google Business Profile, website, citations, reviews and links, all of which I manage remotely. Local knowledge comes from keyword and competitor data for your area, the rankings I track there, and from you and your team. Calls are booked at times that suit your time zone."),
    ("My city is not listed. Can you still help?",
     "Yes. These are the markets I have researched in depth, but the same process works anywhere Google is the main search engine. Book a call and we will look at your market together."),
    ("Can you do SEO in languages other than English?",
     "Yes. I plan the structure, keywords and hreflang setup for each language, and the content is written or reviewed by native speakers so it reads naturally and ranks well."),
    ("Can I rank in a city where I have no office?",
     "In organic results, yes, with genuinely useful location pages. Map pack rankings depend heavily on distance from your verified address, so they are strongest near where you are based."),
]


def hub_page(body, foot):
    url = f"{SITE}/locations"
    graph = base_graph(url, HUB_TITLE, HUB_DESC, [("Home", f"{SITE}/"), ("Locations", url)])
    graph[1]["@type"] = "CollectionPage"
    graph.append({"@type": "ItemList", "name": "SEO service locations", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": label(c), "url": f'{SITE}/locations/{c["slug"]}'}
        for i, c in enumerate(CITIES)]})
    graph.append(faq_graph(HUB_FAQS))

    n_countries = len({c["country"] for c in CITIES})
    hero = (
        '<section class="phero"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="/">Home</a></li><li aria-current="page">Locations</li></ol></nav>'
        '<div class="phero-grid"><div><span class="eyebrow">Locations</span><h1>SEO services for businesses <span class="hl">worldwide</span>.</h1>'
        '<p class="lead">Search works differently in Leicester, Limassol and Lexington. Every plan is built around the exact cities, languages and directories that matter in your market. Find your country below, or book a call if yours is not listed yet.</p>'
        '<div class="cta-row">' + WA + '<a class="btn btn-ghost" href="/book-a-call">Book a call</a></div></div>'
        '<aside class="facts"><h2>At a glance</h2><ul>'
        f'<li><b>Countries</b><span>{n_countries} countries across five regions</span></li>'
        f'<li><b>Cities</b><span>{len(CITIES)} city pages, plus five US states</span></li>'
        '<li><b>Languages</b><span>English, plus local-language SEO with native writers</span></li>'
        f'<li><b>{CONTRACT[0]}</b><span>{CONTRACT[1]}</span></li></ul></aside></div></div></section>'
    )
    jump = ('<section class="sec tight"><div class="wrap rv"><span class="eyebrow">Jump to a country</span><div class="chips" style="margin-top:6px">'
            + "".join(f'<a class="chip" href="#{COUNTRIES[k]["anchor"]}">{e(COUNTRIES[k]["name"])}</a>' for _, _, _, ks in REGIONS for k in ks)
            + "</div></div></section>")

    def card(href, title, text, tag=None):
        t = f'<span class="tag">{e(tag)}</span>' if tag else ""
        return (f'<a class="card rv" href="{href}">{t}<h4>{e(title)}</h4><p>{e(text)}</p>'
                '<span class="go">Learn more <span>→</span></span></a>')

    regions = ""
    for i, (rid, rname, rtext, keys) in enumerate(REGIONS):
        alt = " alt" if i % 2 else ""
        regions += (f'<section class="sec{alt}" id="{rid}"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Region</span>'
                    f'<h2>{e(rname)}.</h2></div><p>{e(rtext)}</p></div>')
        for k in keys:
            ctry = COUNTRIES[k]
            cities = [c for c in CITIES if c["country"] == k]
            count = f'{len(cities)} {"city" if len(cities) == 1 else "cities"}'
            regions += (f'<div class="country" id="{ctry["anchor"]}"><div class="country-h rv"><h3>{e(ctry["name"])}</h3>'
                        f'<span>{count}{" · 5 states" if k == "us" else ""}</span></div><p class="country-note rv">{e(COUNTRY_NOTES[k])}</p>')
            if k == "us":
                regions += '<p class="sub">States</p><div class="grid g3">' + "".join(
                    card(f"/locations/{s}", n, t) for s, n, t in STATES) + '</div><p class="sub">Cities</p>'
            regions += '<div class="grid g3">' + "".join(
                card(f'/locations/{c["slug"]}', label(c), CARDS[c["slug"]]) for c in cities) + "</div></div>"
        regions += "</div></section>"

    remote = (
        '<section class="sec alt"><div class="wrap split"><div class="body rv"><span class="eyebrow">How I work remotely</span><h2>Local results, managed from anywhere.</h2>'
        '<p>Everything that moves rankings, your Google Business Profile, website, citations, reviews and links, is managed online. I am based in Dhaka, Bangladesh (GMT+6), and work with businesses across North America, Europe, the Gulf and Asia-Pacific.</p>'
        '<p>Local knowledge comes from three places: keyword and competitor data for your exact market, the rankings I track across your service area, and you and your team, who know your customers better than anyone. For non-English markets, native speakers write or review every page.</p></div>'
        '<div class="panel rv"><h3>How we stay in sync</h3><ul class="ticks"><li>Calls booked at times that suit your time zone</li><li>Replies to every message within 24 hours</li>'
        '<li>Shared monthly report and roadmap</li><li>Updates and approvals by email, WhatsApp or text</li><li>You approve anything published in your name</li></ul></div></div></section>'
    )
    band = BAND.format(h="Find out what is holding your rankings back.",
                       p="A free SEO audit of your Google Business Profile, website and top competitors, wherever you are. You get the findings and the order I would fix them in, whether you hire me or not.")
    main = '<main id="main">' + hero + jump + regions + remote + STEPS + faq_html(HUB_FAQS, FAQ_INTRO) + band + "</main>"
    return head(HUB_TITLE, HUB_DESC, url, "en_US", graph) + body + main + foot


# ---------------------------------------------------------------- homepage
def update_home(page):
    chips = "".join(f'<a class="chip" href="/locations#{COUNTRIES[k]["anchor"]}">{e(COUNTRIES[k]["name"])}</a>'
                    for k in ["us", "uk", "ca", "au", "ie", "nl", "ae", "my"])
    sec = ('<section class="sec alt"><div class="wrap split"><div class="rv"><span class="eyebrow">Locations</span><h2>Helping businesses worldwide.</h2></div>'
           '<div class="body rv"><p>I work with businesses across North America, the UK and Ireland, Europe, the Middle East and Asia-Pacific. Every plan is built around the cities, languages and search habits of your market, with location pages and rankings tracked area by area.</p>'
           f'<div class="chips">{chips}<a class="chip" href="/locations">All {len(CITIES)} cities →</a></div></div></div></section>')
    page = re.sub(r'<section class="sec alt"><div class="wrap split"><div class="rv"><span class="eyebrow">Locations</span>.*?</section>',
                  lambda m: sec, page, count=1, flags=re.S)
    served = [{"@type": "Country", "name": v["name"]} for v in COUNTRIES.values()]
    page = re.sub(r'("@type":"ProfessionalService".*?"areaServed":)\[.*?\]',
                  lambda m: m.group(1) + json.dumps(served, separators=(",", ":")), page, count=1, flags=re.S)
    page = page.replace('"description":"Local SEO for roofing, plumbing, septic, HVAC and home-service businesses in the United States."',
                        '"description":"Local SEO and SEO services for home-service companies and local businesses worldwide, including the United States, United Kingdom, Canada, Australia, Europe, the Middle East and Asia."')
    return page


def update_sitemap():
    p = ROOT / "sitemap.xml"
    s = p.read_text(encoding="utf-8")
    s = re.sub(r"\n  <url><loc>[^<]*/locations/(?:" + "|".join(re.escape(c["slug"]) for c in CITIES) + r")</loc>.*?</url>", "", s)
    s = re.sub(r"(<loc>" + re.escape(SITE) + r"/locations</loc><lastmod>)[^<]*", r"\g<1>" + LASTMOD, s)
    s = re.sub(r"(<loc>" + re.escape(SITE) + r"/</loc><lastmod>)[^<]*", r"\g<1>" + LASTMOD, s)
    new = "".join(f'\n  <url><loc>{SITE}/locations/{c["slug"]}</loc><lastmod>{LASTMOD}</lastmod></url>' for c in CITIES)
    s = s.replace("\n</urlset>", new + "\n</urlset>")
    p.write_text(s, encoding="utf-8")


def main():
    for f in sorted(ROOT.glob("*.html")) + sorted(ROOT.glob("*/*.html")):
        if f.parts[-2] == "locations" and f.stem in {c["slug"] for c in CITIES}:
            continue
        s = f.read_text(encoding="utf-8")
        t = update_chrome(s)
        if f.name == "index.html" and f.parent == ROOT:
            t = update_home(t)
        if t != s:
            f.write_text(t, encoding="utf-8")
    body, foot = chrome()
    for c in CITIES:
        (ROOT / "locations" / f'{c["slug"]}.html').write_text(city_page(c, body, foot), encoding="utf-8")
    (ROOT / "locations.html").write_text(hub_page(body, foot), encoding="utf-8")
    update_sitemap()
    print(f"Built {len(CITIES)} city pages and the Locations hub.")


if __name__ == "__main__":
    main()
