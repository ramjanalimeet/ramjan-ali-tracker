#!/usr/bin/env python3
"""Generate blog posts from scripts/blog_data/<slug>.py.

Each data module defines POST (slug, title, seo_title, description, category,
category_slug, minutes, date, related, service, service_blurb, body). Header,
footer and layout are copied from an existing post so new posts match the live
design. The script writes blog/<slug>.html, adds the card to blog.html and the
category page, and adds the URL to sitemap.xml. Re-running is safe.

Run from the repo root:  python3 scripts/build_blog.py
The editorial queue lives in docs/blog-calendar.md.
"""
import html
import importlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://ramjan-akash.vercel.app"
TEMPLATE = ROOT / "blog" / "how-long-does-local-seo-take.html"
sys.path.insert(0, str(Path(__file__).resolve().parent))

T = {  # strings in the template that are swapped per post
    "seo_title": "How Long Does Local SEO Take? A 12-Month Timeline",
    "ld_name": "How Long Does Local SEO Take? A Realistic 12-Month Timeline | Ramjan Ali Akash",
    "title": "How long does local SEO take? A realistic timeline",
    "desc": "A realistic month-by-month timeline for local SEO results for home-service businesses, and what changes how fast you see them.",
    "url": SITE + "/blog/how-long-does-local-seo-take",
    "cat": "SEO Strategy",
    "cat_url": SITE + "/blog/seo-strategy",
    "date": "2026-10-01",
    "date_long": "October 1, 2026",
    "mins": "6 min read",
}


def esc(s):
    return html.escape(s, quote=True)


def cards_index():
    """href -> card html, parsed from blog.html."""
    s = (ROOT / "blog.html").read_text()
    return {m.group(1): m.group(0) for m in
            re.finditer(r'<a class="card rv" href="(/blog/[^"]+)">.*?</a>', s)}


def card(p):
    return ('<a class="card rv" href="/blog/%s"><span class="tag">%s · %d min read</span>'
            '<h3>%s</h3><p>%s</p><span class="go">Read article <span>→</span></span></a>'
            % (p["slug"], esc(p["category"]), p["minutes"], esc(p["title"]), esc(p["description"])))


def render(p, tpl, idx):
    out = tpl
    url = "%s/blog/%s" % (SITE, p["slug"])
    cat_url = "%s/blog/%s" % (SITE, p["category_slug"])
    d = p["date"]
    long = __import__("datetime").date.fromisoformat(d).strftime("%B %-d, %Y")
    # main body first, so token swaps below never touch it
    a = out.index('<article class="prose">') + len('<article class="prose">')
    b = out.index("</article>")
    out = out[:a] + p["body"] + out[b:]
    # aside "related service" panel
    out = out.replace("An audit tells you exactly what to do first in your market.", esc(p["service_blurb"]))
    out = out.replace('<a class="btn btn-ghost btn-sm" href="/seo-services/seo-audits">SEO audits →</a>',
                      '<a class="btn btn-ghost btn-sm" href="%s">%s →</a>' % (p["service"][0], esc(p["service"][1])))
    # keep-reading cards
    ka = out.index('<div class="grid g3" style="margin-top:6px">') + len('<div class="grid g3" style="margin-top:6px">')
    kb = out.index("</div></div></section><section", ka)
    out = out[:ka] + "".join(idx["/blog/" + r] for r in p["related"]) + out[kb:]
    # head, breadcrumbs, hero
    for old, new in [
        (T["ld_name"], esc(p["seo_title"]) + " | Ramjan Ali Akash"),
        (T["seo_title"], esc(p["seo_title"])),
        (T["desc"], esc(p["description"])),
        (T["url"], url),
        (T["cat_url"], cat_url),
        ('"datePublished":"%s","dateModified":"%s"' % (T["date"], T["date"]),
         '"datePublished":"%s","dateModified":"%s"' % (d, d)),
        ('"articleSection":"%s"' % T["cat"], '"articleSection":"%s"' % esc(p["category"])),
        ('"name":"%s","item"' % T["cat"], '"name":"%s","item"' % esc(p["category"])),
        ('<li><a href="/blog/seo-strategy">%s</a></li>' % T["cat"],
         '<li><a href="/blog/%s">%s</a></li>' % (p["category_slug"], esc(p["category"]))),
        ('<span class="eyebrow">%s</span>' % T["cat"], '<span class="eyebrow">%s</span>' % esc(p["category"])),
        (T["title"], esc(p["title"])),
        ("<span>6 min read</span>", "<span>%d min read</span>" % p["minutes"]),
        ("Updated October 1, 2026", "Updated " + long),
    ]:
        assert old in out, old
        out = out.replace(old, new)
    return out


def add_card(path, p, c):
    s = path.read_text()
    if '<a class="card rv" href="/blog/%s"' % p["slug"] in s:
        return
    marker = '<div class="grid g3">'
    i = s.index(marker) + len(marker)
    path.write_text(s[:i] + c + s[i:])


def main():
    tpl = TEMPLATE.read_text()
    slugs = sorted(f.stem for f in (ROOT / "scripts" / "blog_data").glob("*.py") if f.stem != "__init__")
    posts = [importlib.import_module("blog_data." + s).POST for s in slugs]
    posts.sort(key=lambda p: (p["date"], p["order"]))
    idx = cards_index()
    sm = (ROOT / "sitemap.xml").read_text()
    for p in posts:
        idx["/blog/" + p["slug"]] = card(p)
    for p in posts:
        (ROOT / "blog" / (p["slug"] + ".html")).write_text(render(p, tpl, idx))
        add_card(ROOT / "blog.html", p, card(p))
        add_card(ROOT / "blog" / (p["category_slug"] + ".html"), p, card(p))
        loc = "%s/blog/%s" % (SITE, p["slug"])
        if loc not in sm:
            line = '  <url><loc>%s</loc><lastmod>%s</lastmod></url>\n' % (loc, p["date"])
            sm = sm.replace("</urlset>", line + "</urlset>")
        for page in ("/blog", "/blog/" + p["category_slug"]):
            sm = re.sub(r'(<loc>%s%s</loc><lastmod>)[^<]*' % (re.escape(SITE), re.escape(page)),
                        lambda m: m.group(1) + p["date"], sm)
    (ROOT / "sitemap.xml").write_text(sm)
    print("built", len(posts), "posts")


if __name__ == "__main__":
    main()
