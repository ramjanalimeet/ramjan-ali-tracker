#!/usr/bin/env python3
"""Generate blog posts from scripts/blog_data/*.py using blog/how-long-does-local-seo-take.html as the template.

Each data module defines POSTS (list of dicts). Running the script (re)writes every post in
scripts/blog_data, then adds missing cards to blog.html and the category page, and missing
URLs to sitemap.xml. Existing hand-written pages are never overwritten.

    python3 scripts/build_blog.py
"""
import glob, html, importlib.util, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://ramjan-akash.vercel.app"
TEMPLATE = os.path.join(ROOT, "blog", "how-long-does-local-seo-take.html")
CATS = {"Local SEO": "local-seo", "Google Maps": "google-maps", "Technical SEO": "technical-seo",
        "Content SEO": "content-seo", "SEO Strategy": "seo-strategy"}
T_SLUG = "how-long-does-local-seo-take"
KEEP = [("local-seo-checklist-for-contractors", "Local SEO", "8 min read", "Local SEO checklist for contractors"),
        ("how-to-rank-in-google-map-pack", "Google Maps", "7 min read", "How to rank in the Google map pack"),
        ("technical-seo-for-service-business-websites", "Technical SEO", "7 min read",
         "Technical SEO for service business websites: the fixes that matter")]


def load():
    posts = []
    for f in sorted(glob.glob(os.path.join(ROOT, "scripts", "blog_data", "[!_]*.py"))):
        spec = importlib.util.spec_from_file_location("m", f)
        m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
        posts += m.POSTS
    return sorted(posts, key=lambda p: (p["date"], p["slug"]))


def card(p):
    return ('<a class="card rv" href="/blog/%s"><span class="tag">%s · %s</span><h3>%s</h3><p>%s</p>'
            '<span class="go">Read article <span>→</span></span></a>'
            % (p["slug"], p["cat"], p["read"], p["h1"], html.escape(p["desc"], quote=False)))


def related(p, posts):
    pool = [q for q in posts if q["slug"] != p["slug"]]
    same = [q for q in pool if q["cat"] == p["cat"]]
    pick = (same + [q for q in pool if q["cat"] != p["cat"]])[:3]
    out = [dict(slug=q["slug"], cat=q["cat"], read=q["read"], h1=q["h1"], desc=q["desc"]) for q in pick]
    for slug, cat, read, h1 in KEEP:
        if len(out) >= 3: break
        if slug not in [o["slug"] for o in out]:
            out.append(dict(slug=slug, cat=cat, read=read, h1=h1, desc=""))
    return out


def existing_desc(slug):
    s = open(os.path.join(ROOT, "blog", slug + ".html")).read()
    return re.search(r'<meta name="description" content="([^"]*)"', s).group(1)


def render(p, tpl, posts):
    s = tpl
    url = "%s/blog/%s" % (BASE, p["slug"])
    cs = CATS[p["cat"]]
    d = html.escape(p["desc"])
    # head
    s = s.replace("<title>How Long Does Local SEO Take? A 12-Month Timeline</title>", "<title>%s</title>" % html.escape(p["title"]))
    s = s.replace("How Long Does Local SEO Take? A 12-Month Timeline", html.escape(p["title"]))
    s = s.replace("How Long Does Local SEO Take? A Realistic 12-Month Timeline | Ramjan Ali Akash", html.escape(p["title"]) + " | Ramjan Ali Akash")
    s = s.replace("A realistic month-by-month timeline for local SEO results for home-service businesses, and what changes how fast you see them.", d)
    s = s.replace(BASE + "/blog/" + T_SLUG, url)
    s = s.replace('"name":"SEO Strategy","item":"%s/blog/seo-strategy"' % BASE, '"name":"%s","item":"%s/blog/%s"' % (p["cat"], BASE, cs))
    s = s.replace('"articleSection":"SEO Strategy"', '"articleSection":"%s"' % p["cat"])
    s = s.replace('"datePublished":"2026-10-01","dateModified":"2026-10-01"', '"datePublished":"%s","dateModified":"%s"' % (p["date"], p["date"]))
    s = s.replace("How long does local SEO take? A realistic timeline", html.escape(p["h1"]))
    # breadcrumb + hero
    s = s.replace('<li><a href="/blog/seo-strategy">SEO Strategy</a></li>', '<li><a href="/blog/%s">%s</a></li>' % (cs, p["cat"]))
    s = s.replace('<span class="eyebrow">SEO Strategy</span>', '<span class="eyebrow">%s</span>' % p["cat"])
    s = s.replace("<span>6 min read</span><span>Updated October 1, 2026</span>", "<span>%s</span><span>Updated %s</span>" % (p["read"], p["date_h"]))
    # article body
    a, b = s.index('<article class="prose">'), s.index("</article>")
    s = s[:a] + '<article class="prose">' + p["body"] + s[b:]
    # related service panel
    s = s.replace("<p>An audit tells you exactly what to do first in your market.</p>", "<p>%s</p>" % p["svc_text"])
    s = s.replace('<a class="btn btn-ghost btn-sm" href="/seo-services/seo-audits">SEO audits →</a>',
                  '<a class="btn btn-ghost btn-sm" href="%s">%s →</a>' % (p["svc_url"], p["svc_label"]))
    # keep reading
    a = s.index('<div class="grid g3" style="margin-top:6px">') + len('<div class="grid g3" style="margin-top:6px">')
    b = s.index("</div></div></section>", a)
    rel = ""
    for r in related(p, posts):
        if not r["desc"]: r["desc"] = existing_desc(r["slug"])
        rel += card(r)
    return s[:a] + rel + s[b:]


def add_to_grid(path, p, marker_prefix):
    s = open(path).read()
    if '/blog/%s"' % p["slug"] in s: return
    i = s.index(marker_prefix)
    j = s.index("</div></div></section>", i)
    open(path, "w").write(s[:j] + card(p) + s[j:])


def main():
    posts = load()
    tpl = open(TEMPLATE).read()
    sm = open(os.path.join(ROOT, "sitemap.xml")).read()
    for p in posts:
        open(os.path.join(ROOT, "blog", p["slug"] + ".html"), "w").write(render(p, tpl, posts))
        add_to_grid(os.path.join(ROOT, "blog.html"), p, '<div class="grid g3')
        add_to_grid(os.path.join(ROOT, "blog", CATS[p["cat"]] + ".html"), p, '<div class="grid g3')
        loc = "%s/blog/%s" % (BASE, p["slug"])
        if loc not in sm:
            sm = sm.replace("</urlset>", "  <url><loc>%s</loc><lastmod>%s</lastmod></url>\n</urlset>" % (loc, p["date"]))
        print("built", p["slug"])
    sm = re.sub(r"(<loc>%s/blog</loc><lastmod>)[^<]*" % re.escape(BASE), r"\g<1>" + posts[-1]["date"], sm)
    for c in sorted({p["cat"] for p in posts}):
        sm = re.sub(r"(<loc>%s/blog/%s</loc><lastmod>)[^<]*" % (re.escape(BASE), CATS[c]), r"\g<1>" + max(p["date"] for p in posts if p["cat"] == c), sm)
    open(os.path.join(ROOT, "sitemap.xml"), "w").write(sm)


if __name__ == "__main__":
    main()
