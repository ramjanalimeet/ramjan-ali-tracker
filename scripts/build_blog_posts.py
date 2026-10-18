#!/usr/bin/env python3
"""Generate the blog posts defined in scripts/blog_data/posts.py.

Each post is written to blog/<slug>.html using the header, footer and article
layout of an existing post, so new posts always match the live design. Each
post gets a table of contents, FAQ section, BlogPosting + FAQPage schema and
"Keep reading" cards.

The script also adds the new posts to blog.html, their topic page
(blog/<topic>.html) and sitemap.xml, between marker comments, so re-running
is safe.

Run from the repo root:  python3 scripts/build_blog_posts.py
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(Path(__file__).resolve().parent))
from blog_data.posts import DATE, DATE_H, POSTS  # noqa: E402

SITE = "https://ramjan-akash.vercel.app"
TEMPLATE = ROOT / "blog" / "how-to-rank-in-google-map-pack.html"
WA = "https://wa.me/8801839295114"
MARK_START = "<!-- new-posts:start -->"
MARK_END = "<!-- new-posts:end -->"

tpl = TEMPLATE.read_text()
PREFIX = tpl[tpl.index("<body>"):tpl.index('<main id="main">')]
SUFFIX = tpl[tpl.index("</main>"):]
WA_SVG = re.search(r'<svg class="wa".*?</svg>', tpl).group(0)
HEAD_TAIL = tpl[tpl.index("</script>", tpl.index("application/ld+json")) + 9:tpl.index("</head>")]
BAND = re.search(r'<section class="sec tight"><div class="wrap"><div class="band rv">.*?</section>', tpl).group(0)

esc = html.escape


def words(s):
    return len(re.sub(r"<[^>]+>", " ", s).split())


def read_min(p):
    n = words(p["body"]) + sum(words(q) + words(a) for q, a in p["faq"])
    return max(1, round(n / 220))


def existing_cards():
    """Card data (tag, title, blurb) for every post already listed on /blog."""
    blog = (ROOT / "blog.html").read_text()
    cards = {}
    for slug, tag, h3, para in re.findall(
        r'<a class="card rv" href="/blog/([^"]+)"><span class="tag">([^<]+)</span><h3>([^<]+)</h3><p>([^<]+)</p>', blog
    ):
        cards[slug] = (tag, h3, para)
    return cards


def card_html(slug, tag, h3, para):
    return (f'<a class="card rv" href="/blog/{slug}"><span class="tag">{tag}</span><h3>{h3}</h3>'
            f'<p>{para}</p><span class="go">Read article <span>→</span></span></a>')


def toc(body):
    items = re.findall(r'<h2 id="([^"]+)">(.*?)</h2>', body)
    lis = "".join(f'<li><a href="#{i}">{t}</a></li>' for i, t in items)
    return f'<nav class="toc" aria-label="In this article"><b>In this article</b><ol>{lis}<li><a href="#faq">FAQ</a></li></ol></nav>'


def page(p, cards):
    url = f"{SITE}/blog/{p['slug']}"
    mins = read_min(p)
    title, desc = esc(p["title"]), esc(p["desc"])
    body = p["body"].replace("{toc}", toc(p["body"]))
    faq_html = "".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in p["faq"])
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebSite", "@id": f"{SITE}/#website", "url": f"{SITE}/", "name": "Ramjan Ali Akash",
         "inLanguage": "en", "publisher": {"@id": f"{SITE}/#business"}},
        {"@type": "WebPage", "@id": f"{url}#webpage", "url": url, "name": p["title"], "description": p["desc"],
         "isPartOf": {"@id": f"{SITE}/#website"}, "about": {"@id": f"{SITE}/#business"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "Blog", "item": f"{SITE}/blog"},
            {"@type": "ListItem", "position": 3, "name": p["cat"], "item": f"{SITE}/blog/{p['cat_slug']}"},
            {"@type": "ListItem", "position": 4, "name": p["h1"], "item": url}]},
        {"@type": "BlogPosting", "headline": p["h1"], "description": p["desc"], "url": url,
         "mainEntityOfPage": url, "datePublished": DATE, "dateModified": DATE,
         "author": {"@id": f"{SITE}/#person"}, "publisher": {"@id": f"{SITE}/#business"},
         "image": f"{SITE}/assets/akash.webp", "articleSection": p["cat"], "inLanguage": "en",
         "wordCount": words(p["body"])},
        {"@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]},
    ]}
    head = (
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
        f'<title>{title}</title><meta name="description" content="{desc}">'
        f'<link rel="canonical" href="{url}">'
        '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'
        '<meta name="author" content="Ramjan Ali Akash"><meta name="theme-color" content="#F2F3F0">'
        '<meta name="color-scheme" content="light"><meta property="og:type" content="article">'
        '<meta property="og:site_name" content="Ramjan Ali Akash">'
        f'<meta property="og:title" content="{title}"><meta property="og:description" content="{desc}">'
        f'<meta property="og:url" content="{url}"><meta property="og:image" content="{SITE}/assets/og-default.png">'
        '<meta property="og:image:alt" content="Ramjan Ali Akash - Local SEO for roofing, plumbing, septic and HVAC companies">'
        f'<meta property="article:published_time" content="{DATE}"><meta property="article:section" content="{esc(p["cat"])}">'
        f'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{title}">'
        f'<meta name="twitter:description" content="{desc}"><meta name="twitter:image" content="{SITE}/assets/og-default.png">'
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com">'
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
        '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet">'
        '<link rel="stylesheet" href="/style.css">'
        f'<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False, separators=(",", ":"))}</script>'
        f'{HEAD_TAIL}</head>'
    )
    a_title, a_text, a_href, a_label = p["aside"]
    related = "".join(card_html(s, *cards[s]) for s in p["related"])
    main = (
        '<main id="main"><section class="phero"><div class="wrap"><nav aria-label="Breadcrumb"><ol class="crumbs">'
        f'<li><a href="/">Home</a></li><li><a href="/blog">Blog</a></li><li><a href="/blog/{p["cat_slug"]}">{p["cat"]}</a></li>'
        f'<li aria-current="page">{esc(p["h1"])}</li></ol></nav><span class="eyebrow">{p["cat"]}</span>'
        f'<h1 style="max-width:22ch;font-size:clamp(36px,4.6vw,62px)">{esc(p["h1"])}</h1><p class="lead">{esc(p["lead"])}</p>'
        f'<div class="ameta"><span>By Ramjan Ali Akash</span><span>{mins} min read</span><span>Published {DATE_H}</span></div>'
        '</div></section><section class="sec tight" style="padding-top:20px"><div class="wrap art-grid"><article class="prose">'
        f'{body.strip()}<h2 id="faq">Frequently asked questions</h2><div class="faq">{faq_html}</div>'
        '<div class="cta-box"><h3>Want this done for your business?</h3>'
        '<p>Get a free Local SEO audit: your Google Business Profile, website and top 3 map competitors reviewed, with the fixes in priority order. You keep the plan either way.</p>'
        f'<div class="cta-row"><a class="btn btn-dark btn-sm" href="/free-seo-audit">Get my free audit <span class="arr">→</span></a>'
        f'<a class="btn btn-wa btn-sm" href="{WA}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">{WA_SVG}WhatsApp</a></div></div>'
        '</article><aside class="aside"><div class="panel"><h3>Free Local SEO audit</h3>'
        "<p>I'll review your Google Business Profile, website and top 3 map competitors, and send the fixes in priority order.</p>"
        f'<a class="btn btn-wa btn-sm" href="{WA}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">{WA_SVG}WhatsApp</a></div>'
        f'<div class="panel"><h3>{esc(a_title)}</h3><p>{esc(a_text)}</p><a class="btn btn-ghost btn-sm" href="{a_href}">{a_label}</a></div>'
        '</aside></div></section><section class="sec tight"><div class="wrap"><span class="eyebrow">Keep reading</span>'
        f'<div class="grid g3" style="margin-top:6px">{related}</div></div></section>{BAND}'
    )
    return head + PREFIX + main + SUFFIX, mins


def set_block(text, anchor, block, before=True):
    """Insert block (wrapped in markers) at anchor, or replace an earlier one."""
    wrapped = f"{MARK_START}{block}{MARK_END}"
    if MARK_START in text:
        return re.sub(re.escape(MARK_START) + ".*?" + re.escape(MARK_END), lambda _: wrapped, text, flags=re.S)
    i = text.index(anchor)
    return text[:i] + wrapped + text[i:] if before else text[:i + len(anchor)] + wrapped + text[i + len(anchor):]


def main():
    cards = existing_cards()
    # Posts link to each other, so all card data must exist before rendering.
    built = {p["slug"]: (f'{p["cat"]} · {read_min(p)} min read', esc(p["h1"]), esc(p["card"])) for p in POSTS}
    cards.update(built)
    for p in POSTS:
        out, _ = page(p, cards)
        (ROOT / "blog" / f"{p['slug']}.html").write_text(out)
        print(f"wrote blog/{p['slug']}.html")

    # /blog index: newest posts first in the main grid.
    blog = ROOT / "blog.html"
    t = blog.read_text()
    block = "".join(card_html(s, *c) for s, c in built.items())
    blog.write_text(set_block(t, '<a class="card rv"', block))

    # Topic pages.
    by_cat = {}
    for p in POSTS:
        by_cat.setdefault(p["cat_slug"], []).append(p["slug"])
    for cat, slugs in by_cat.items():
        f = ROOT / "blog" / f"{cat}.html"
        t = f.read_text()
        block = "".join(card_html(s, *built[s]) for s in slugs)
        anchor = '<section class="sec tight"><div class="wrap"><div class="grid g3">'
        t = set_block(t, anchor, block, before=False)
        f.write_text(t)

    # Sitemap.
    sm = ROOT / "sitemap.xml"
    t = sm.read_text()
    block = "".join(f"\n  <url><loc>{SITE}/blog/{s}</loc><lastmod>{DATE}</lastmod></url>" for s in built) + "\n  "
    t = set_block(t, f"<url><loc>{SITE}/blog/content-seo</loc>", block)
    sm.write_text(t)
    print("updated blog.html, topic pages and sitemap.xml")


if __name__ == "__main__":
    main()
