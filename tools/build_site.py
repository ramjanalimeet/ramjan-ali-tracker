#!/usr/bin/env python3
"""Rebuild shared parts of the static site.

  python3 tools/build_site.py

- Rewrites the main menu, mobile menu and footer links on every page (from site_data.NAV / FOOTER)
- Generates the pages defined in pages.py
- Inserts or refreshes the pricing table on every service page (from site_data.PRICING)
- Regenerates sitemap.xml

Safe to run repeatedly.
"""
import datetime
import glob
import html
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from site_data import SITE, EMAIL, WHATSAPP, NAV, FOOTER, PRICING, PRICING_PAGES  # noqa: E402
from pages import PAGES, STEPS  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CARET = '<svg class="car" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
OG_ALT = "Ramjan Ali Akash - SEO specialist for local businesses and online stores"
P_START, P_END = "<!--pricing:start-->", "<!--pricing:end-->"


def read(p):
    with open(os.path.join(ROOT, p), encoding="utf-8") as f:
        return f.read()


def write(p, s):
    full = os.path.join(ROOT, p)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(s)


def url_of(path):
    path = path.replace(os.sep, "/")
    if path == "index.html":
        return "/"
    return "/" + path[:-5]


def esc(s):
    return html.escape(s, quote=True)


# ------------------------------------------------------------------ menus
def active_label(url):
    if url == "/":
        return "Home"
    if url == "/industries" or url.startswith("/local-seo/"):
        return "Industries"
    if url == "/local-seo" or url.startswith("/seo-services"):
        return "Services"
    for item in NAV:
        if item["href"] != "/" and (url == item["href"] or url.startswith(item["href"] + "/")):
            return item["label"]
    return None


def nav_html(url):
    act = active_label(url)
    out = []
    for item in NAV:
        cur = ' aria-current="page"' if item["label"] == act else ""
        if "groups" in item:
            cols = "".join(f'<div class="dd-col"><p class="dd-h">{esc(t)}</p><ul>' + "".join(
                f'<li><a href="{h}">{esc(n)}<small>{esc(d)}</small></a></li>' for n, h, d in kids) + "</ul></div>" for t, kids in item["groups"])
            out.append(f'<li><a href="{item["href"]}"{cur} aria-haspopup="true">{esc(item["label"])}{CARET}</a><div class="dd dd-mega"><div class="dd-box">'
                       f'<div class="dd-cols">{cols}</div><a class="dd-all" href="{item["all"][1]}">{esc(item["all"][0])} →</a></div></div></li>')
        elif "children" in item:
            dd = "".join(f'<li><a href="{h}">{esc(n)}<small>{esc(d)}</small></a></li>' for n, h, d in item["children"])
            dd += f'<li class="all"><a href="{item["all"][1]}">{esc(item["all"][0])} →</a></li>'
            out.append(f'<li><a href="{item["href"]}"{cur} aria-haspopup="true">{esc(item["label"])}{CARET}</a><div class="dd"><ul>{dd}</ul></div></li>')
        else:
            out.append(f'<li><a href="{item["href"]}"{cur}>{esc(item["label"])}</a></li>')
    return '<nav aria-label="Main"><ul class="links">' + "".join(out) + "</ul></nav>"


def mnav_html():
    out = []
    for item in NAV:
        if "groups" in item:
            lis = f'<li><a href="{item["all"][1]}">{esc(item["all"][0])}</a></li>'
            for t, kids in item["groups"]:
                lis += f'<li class="mh">{esc(t)}</li>' + "".join(f'<li><a href="{h}">{esc(n)}</a></li>' for n, h, _ in kids)
            out.append(f"<details><summary>{esc(item['label'])}</summary><ul>{lis}</ul></details>")
        elif "children" in item:
            lis = f'<li><a href="{item["all"][1]}">{esc(item["all"][0])}</a></li>'
            lis += "".join(f'<li><a href="{h}">{esc(n)}</a></li>' for n, h, _ in item["children"])
            out.append(f"<details><summary>{esc(item['label'])}</summary><ul>{lis}</ul></details>")
        else:
            out.append(f'<a href="{item["href"]}">{esc(item["label"])}</a>')
    out.append('<a class="btn btn-dark" href="/book-a-call">Book a call →</a>')
    return '<nav class="mnav" id="mnav" aria-label="Mobile">' + "".join(out) + "</nav>"


def footer_cols():
    return "".join(
        f"<div><h4>{esc(t)}</h4><ul>" + "".join(f'<li><a href="{h}">{esc(n)}</a></li>' for n, h in links) + "</ul></div>"
        for t, links in FOOTER)


def apply_chrome(s, url):
    s, n1 = re.subn(r'<nav aria-label="Main">.*?</nav>', lambda m: nav_html(url), s, count=1, flags=re.S)
    s, n2 = re.subn(r'<nav class="mnav" id="mnav" aria-label="Mobile">.*?</nav>', lambda m: mnav_html(), s, count=1, flags=re.S)
    g = s.find('<div class="fgrid">')
    a = s.find("<div><h4>", g)
    b = s.find('</div><div class="fbot">', a)
    if g < 0 or a < 0 or b < 0 or not (n1 and n2):
        raise SystemExit(f"Unexpected page structure: {url}")
    return s[:a] + footer_cols() + s[b:]


# ------------------------------------------------------------------ pricing
def money(n):
    return f"${n:,}"


def pricing_html(key):
    p = PRICING[key]
    cards = []
    for t in p["tiers"]:
        feat = t.get("featured")
        unit = t["unit"]
        badge = '<span class="pop">Most popular</span>' if feat else ""
        ticks = "".join(f"<li>{esc(i)}</li>" for i in t["items"])
        btn = "btn-dark" if feat else "btn-ghost"
        cards.append(
            f'<div class="price rv{" feat" if feat else ""}"><div class="price-top"><h3>{esc(t["name"])}</h3>{badge}</div>'
            f'<p class="price-for">{esc(t["for"])}</p><p class="amt"><b>{money(t["price"])}</b><span>{esc(unit)}</span></p>'
            f'<ul class="ticks">{ticks}</ul><a class="btn {btn}" href="/book-a-call">Get started <span class="arr">→</span></a></div>')
    monthly = any(t["unit"] == "/month" for t in p["tiers"])
    note = "Prices in USD. " + ("Monthly plans are month to month: pause or cancel with a week of notice. " if monthly else "") + \
        'Need a different scope? <a href="/book-a-call">Book a call</a> for a custom quote.'
    return (f'{P_START}<section class="sec alt" id="pricing"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Pricing</span>'
            f'<h2>{esc(p["name"])} pricing.</h2></div><p>Fixed prices, published up front. The exact scope is confirmed in writing after a free strategy call, before any work starts.</p></div>'
            f'<div class="prices">{"".join(cards)}</div><p class="fine price-note">{note}</p></div></section>{P_END}')


def offers_ld(key):
    return [{"@type": "Offer", "name": f'{PRICING[key]["name"]} – {t["name"]}', "price": str(t["price"]), "priceCurrency": "USD",
             "description": t["for"], "url": f"{SITE}/book-a-call"} for t in PRICING[key]["tiers"]]


def inject_pricing(s, key):
    block = pricing_html(key)
    if P_START in s:
        return re.sub(re.escape(P_START) + ".*?" + re.escape(P_END), lambda m: block, s, count=1, flags=re.S)
    i = s.find('<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Questions</span>')
    if i < 0:
        i = s.find('<section class="sec tight"><div class="wrap rv"><span class="eyebrow">Related</span>')
    if i < 0:
        raise SystemExit("No place for pricing")
    return s[:i] + block + s[i:]


def add_see_pricing(s):
    """Add a 'See pricing' link to the hero buttons of a page with a pricing table."""
    if 'href="#pricing"' in s:
        return s
    m = re.search(r'(<section class="phero">.*?<div class="cta-row">.*?)(</div>)', s, re.S)
    if not m:
        return s
    return s[:m.end(1)] + '<a class="btn btn-ghost" href="#pricing">See pricing</a>' + s[m.end(1):]


# ------------------------------------------------------------------ page generation
def chrome_parts():
    idx = read("index.html")
    body = idx[idx.find("<body"):idx.find('<main id="main">')]
    tail = idx[idx.find("</main>") + len("</main>"):]
    wa = re.search(r'<a class="btn btn-wa".*?</a>', idx, re.S).group()
    return body, tail, wa


def head_html(pg, ld):
    url = SITE + url_of(pg["path"]).rstrip("/") if url_of(pg["path"]) != "/" else SITE + "/"
    t, d = esc(pg["title"]), esc(pg["desc"])
    return ('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
            f'<title>{t}</title><meta name="description" content="{d}"><link rel="canonical" href="{url}">'
            '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"><meta name="author" content="Ramjan Ali Akash">'
            '<meta name="theme-color" content="#F2F3F0"><meta name="color-scheme" content="light"><meta property="og:type" content="website">'
            f'<meta property="og:site_name" content="Ramjan Ali Akash"><meta property="og:title" content="{t}"><meta property="og:description" content="{d}">'
            f'<meta property="og:url" content="{url}"><meta property="og:image" content="{SITE}/assets/og-default.png"><meta property="og:image:alt" content="{OG_ALT}">'
            '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/png"><meta property="og:locale" content="en_US">'
            f'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{t}"><meta name="twitter:description" content="{d}">'
            f'<meta name="twitter:image" content="{SITE}/assets/og-default.png"><meta name="twitter:image:alt" content="{OG_ALT}">'
            '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
            '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet">'
            '<link rel="stylesheet" href="/style.css">'
            f'<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False, separators=(",", ":"))}</script></head>')


def strip_tags(s):
    return re.sub(r"<[^>]+>", "", s)


def ld_graph(pg):
    url = SITE + url_of(pg["path"])
    page_type = "AboutPage" if pg.get("person") else "ContactPage" if pg.get("contact") else "WebPage"
    g = [{"@type": "WebSite", "@id": f"{SITE}/#website", "url": f"{SITE}/", "name": "Ramjan Ali Akash", "inLanguage": "en", "publisher": {"@id": f"{SITE}/#business"}},
         {"@type": page_type, "@id": f"{url}#webpage", "url": url, "name": pg["title"], "description": pg["desc"],
          "isPartOf": {"@id": f"{SITE}/#website"}, "about": {"@id": f"{SITE}/#business"}},
         {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE}/"}] +
          [{"@type": "ListItem", "position": i + 2, "name": n, "item": SITE + h} for i, (n, h) in enumerate(pg["crumbs"])]}]
    key = PRICING_PAGES.get(pg["path"])
    if pg.get("service"):
        svc = {"@type": "Service", "name": pg["service"], "serviceType": pg["service"], "description": pg["desc"], "url": url,
               "provider": {"@id": f"{SITE}/#business"},
               "areaServed": [{"@type": "Country", "name": c} for c in ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Saudi Arabia", "Qatar"]]}
        if key:
            svc["offers"] = offers_ld(key)
        g.append(svc)
    if pg.get("area"):
        g.append({"@type": "Service", "name": f"SEO services in {pg['area']}", "serviceType": "Search engine optimization", "url": url,
                  "provider": {"@id": f"{SITE}/#business"}, "areaServed": {"@type": "Place", "name": pg["area"]}})
    if pg.get("person"):
        g.append({"@type": "Person", "@id": f"{SITE}/#person", "name": "Ramjan Ali Akash", "jobTitle": "SEO Specialist",
                  "image": f"{SITE}/assets/akash.webp", "url": url, "email": f"mailto:{EMAIL}",
                  "address": {"@type": "PostalAddress", "addressLocality": "Dhaka", "addressCountry": "BD"}})
    if pg.get("faq"):
        g.append({"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": strip_tags(a)}} for q, a in pg["faq"]]})
    return {"@context": "https://schema.org", "@graph": g}


def link_attrs(h):
    return ' target="_blank" rel="noopener"' if h.startswith("http") else ""


def sec_cards(c):
    head = f'<div><span class="eyebrow">{c["eyebrow"]}</span><h2>{c["h2"]}</h2></div>' + (f'<p>{c["intro"]}</p>' if c.get("intro") else "")
    cards = []
    for i, (title, text, href, extra) in enumerate(c["cards"], 1):
        tag = f'<span class="tag">{esc(extra)}</span>' if extra and extra.startswith("From ") else ""
        go = extra if extra and not tag else "Learn more"
        inner = f'<span class="ic" aria-hidden="true">{i:02d}</span>{tag}<h3>{esc(title)}</h3><p>{text}</p>'
        if href:
            cards.append(f'<a class="card rv" href="{href}"{link_attrs(href)}>{inner}<span class="go">{esc(go)} <span>→</span></span></a>')
        else:
            cards.append(f'<div class="card rv">{inner}</div>')
    cls = "sec alt" if c.get("alt") else "sec"
    return f'<section class="{cls}"><div class="wrap"><div class="sec-head rv">{head}</div><div class="grid g{c.get("cols", 3)}">{"".join(cards)}</div></div></section>'


def sec_split(c):
    paras = "".join(f"<p>{p}</p>" for p in c["paras"])
    ticks = "".join(f"<li>{t}</li>" for t in c["ticks"])
    cls = "sec alt" if c.get("alt") else "sec"
    return (f'<section class="{cls}"><div class="wrap split"><div class="body rv"><span class="eyebrow">{c["eyebrow"]}</span><h2>{c["h2"]}</h2>{paras}</div>'
            f'<div class="panel rv"><h3>{c["panel_title"]}</h3><ul class="ticks">{ticks}</ul></div></div></section>')


def sec_steps():
    steps = "".join(f'<li class="step rv"><h3>{t}</h3><p>{d}</p></li>' for t, d in STEPS)
    return ('<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">How it works</span><h2>How an engagement runs.</h2></div>'
            f'<p>You always know what is being worked on this month, what lands next, and what I need from you.</p></div><ol class="steps">{steps}</ol></div></section>')


def sec_faq(faq):
    items = "".join(f"<details><summary>{esc(q)}</summary><p>{a}</p></details>" for q, a in faq)
    return ('<section class="sec"><div class="wrap"><div class="sec-head rv"><div><span class="eyebrow">Questions</span><h2>Things people ask first.</h2></div>'
            f'<p>Anything else, ask on the call or <a href="mailto:{EMAIL}">email me</a>. I reply to every message personally.</p></div><div class="faq rv">{items}</div></div></section>')


def sec_related(rel):
    chips = "".join(f'<a class="chip" href="{h}">{esc(n)} →</a>' for n, h in rel)
    return f'<section class="sec tight"><div class="wrap rv"><span class="eyebrow">Related</span><div class="chips" style="margin-top:6px">{chips}</div></div></section>'


def sec_band(wa):
    return ('<section class="sec tight"><div class="wrap"><div class="band rv"><span class="eyebrow" style="color:#8d9088">Next step</span>'
            '<h2>Find out what is holding your rankings back.</h2><p>A free SEO audit of your website, profiles and top competitors. You get the findings and the order I would fix them in, whether you hire me or not.</p>'
            f'<div class="cta-row">{wa}<a class="btn btn-ghost-d" href="/book-a-call">Book a call</a></div><p class="fine">Free · no pitch · you keep the action plan</p></div></div></section>')


def render(pg, body, tail, wa):
    url = url_of(pg["path"])
    crumbs = '<li><a href="/">Home</a></li>' + "".join(
        f'<li aria-current="page">{esc(n)}</li>' if i == len(pg["crumbs"]) - 1 else f'<li><a href="{h}">{esc(n)}</a></li>'
        for i, (n, h) in enumerate(pg["crumbs"]))
    facts = "".join(f"<li><b>{esc(b)}</b><span>{s}</span></li>" for b, s in pg["facts"])
    has_pricing = any(k == "pricing" for k, _ in pg["sections"])
    ctas = wa + '<a class="btn btn-ghost" href="/book-a-call">Book a call</a>' + ('<a class="btn btn-ghost" href="#pricing">See pricing</a>' if has_pricing else "")
    out = [f'<section class="phero"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="crumbs">{crumbs}</ol></nav><div class="phero-grid"><div>'
           f'<span class="eyebrow">{esc(pg["eyebrow"])}</span><h1>{pg["h1"]}</h1><p class="lead">{pg["lead"]}</p><div class="cta-row">{ctas}</div></div>'
           f'<aside class="facts"><h2>At a glance</h2><ul>{facts}</ul></aside></div></div></section>']
    for kind, c in pg["sections"]:
        out.append({"cards": sec_cards, "split": sec_split, "steps": lambda _: sec_steps(),
                    "pricing": pricing_html, "raw": lambda h: h}[kind](c))
    if pg.get("faq"):
        out.append(sec_faq(pg["faq"]))
    if pg.get("related"):
        out.append(sec_related(pg["related"]))
    out.append(sec_band(wa))
    page = head_html(pg, ld_graph(pg)) + body + '<main id="main">' + "".join(out) + "</main>" + tail
    return apply_chrome(page, url)


# ------------------------------------------------------------------ sitemap
def sitemap(paths):
    today = datetime.date.today().isoformat()
    urls = sorted({url_of(p) for p in paths}, key=lambda u: (u != "/", u.count("/"), u))
    rows = "".join(f"  <url><loc>{SITE}{u if u != '/' else '/'}</loc><lastmod>{today}</lastmod></url>\n" for u in urls)
    write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + rows + "</urlset>\n")


def main():
    files = sorted(os.path.relpath(p, ROOT) for p in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True)
                   if "/tools/" not in p and "/node_modules/" not in p)
    # 1. menus and footer on existing pages
    for f in files:
        s = read(f)
        write(f, apply_chrome(s, url_of(f)))
    # 2. generated pages
    body, tail, wa = chrome_parts()
    for pg in PAGES:
        write(pg["path"], render(pg, body, tail, wa))
    # 3. pricing tables
    for f, key in PRICING_PAGES.items():
        s = inject_pricing(read(f), key)
        write(f, add_see_pricing(s))
    # 4. sitemap
    all_files = set(files) | {pg["path"] for pg in PAGES}
    sitemap([f for f in all_files if not f.startswith("404")])
    print(f"Updated {len(files)} pages, generated {len(PAGES)} pages, pricing on {len(PRICING_PAGES)} pages.")


if __name__ == "__main__":
    main()
