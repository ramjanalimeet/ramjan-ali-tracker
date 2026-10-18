<?xml version="1.0" encoding="UTF-8"?>
<!-- Styles the XML sitemaps for people viewing them in a browser. Search engines ignore it. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <title>XML Sitemap | Ramjan Ali</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        <style>
          :root{--bg:#F2F3F0;--card:#fff;--ink:#111210;--ink-2:#3C3E39;--mute:#6E716A;--line:#D9DCD4;--accent:#C6F432;--accent-ink:#1A2400}
          *{box-sizing:border-box}
          body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased}
          a{color:inherit}
          .wrap{max-width:1040px;margin:0 auto;padding:0 20px}
          header{background:var(--ink);color:var(--bg);padding:28px 0 44px;position:relative;overflow:hidden}
          header::after{content:"";position:absolute;right:-120px;top:-140px;width:360px;height:360px;border-radius:50%;background:var(--accent);opacity:.12;filter:blur(10px)}
          .top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:34px}
          .logo{font-weight:700;font-size:22px;letter-spacing:-.04em;text-decoration:none}
          .logo b{color:var(--accent)}
          .pill{display:inline-flex;align-items:center;gap:8px;border:1px solid #3a3c37;border-radius:999px;padding:6px 12px;font-size:13px;color:#c3c5be}
          .pill i{width:8px;height:8px;border-radius:50%;background:var(--accent)}
          h1{font-size:clamp(30px,5vw,46px);letter-spacing:-.03em;line-height:1.05;margin:0 0 12px}
          header p{color:#c3c5be;max-width:62ch;margin:6px 0}
          header p a{color:var(--bg)}
          main{padding:30px 0 60px}
          .meta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;color:var(--ink-2);margin-bottom:14px}
          .count{display:inline-flex;align-items:center;gap:8px}
          .count b{background:var(--accent);color:var(--accent-ink);border-radius:999px;padding:1px 10px;font-weight:700}
          .back{font-weight:600;text-decoration:none}
          .back:hover{text-decoration:underline}
          .table{background:var(--card);border:1px solid var(--line);border-radius:18px;overflow:hidden}
          .scroll{overflow-x:auto}
          table{width:100%;border-collapse:collapse;min-width:520px}
          th{background:var(--ink);color:var(--bg);text-align:left;font-size:13px;font-weight:600;padding:14px 18px;white-space:nowrap}
          td{padding:13px 18px;border-top:1px solid #ebede7;font-size:14px;vertical-align:middle}
          tr:nth-child(even) td{background:#fafbf8}
          tr:hover td{background:#f4fbe0}
          td a{text-decoration:none;word-break:break-all}
          td a:hover{text-decoration:underline}
          .name{display:block;font-weight:600}
          .sub{display:block;color:var(--mute);font-size:13px}
          .date,.num{color:var(--ink-2);white-space:nowrap}
          th.num{color:var(--bg)}
          .num{text-align:center}
          footer{color:var(--mute);font-size:13px;padding:0 0 40px}
          footer a{font-weight:600;color:var(--ink)}
          @media (max-width:640px){.pill{display:none}.t{display:none}.hide-sm{display:none}th,td{padding:12px 14px}table{min-width:0}}
        </style>
      </head>
      <body>
        <header>
          <div class="wrap">
            <div class="top">
              <a class="logo" href="/">Ramjan Ali<b>.</b></a>
              <span class="pill"><i></i>Local SEO &amp; AI Search Visibility</span>
            </div>
            <h1>XML Sitemap</h1>
            <p>This is what search engines like Google and AI tools use to find and re-crawl the pages, services, industries, locations and articles on this site.</p>
            <p>Learn more about <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener">XML sitemaps</a>.</p>
          </div>
        </header>
        <main>
          <div class="wrap">
            <xsl:apply-templates/>
          </div>
        </main>
        <footer>
          <div class="wrap">
            <a href="/">Ramjan Ali</a> · Local SEO &amp; AI Search Visibility · <a href="/book-a-call">Book a Call</a>
          </div>
        </footer>
      </body>
    </html>
  </xsl:template>

  <!-- Sitemap index -->
  <xsl:template match="sm:sitemapindex">
    <div class="meta">
      <span class="count">This XML Sitemap Index file contains <b><xsl:value-of select="count(sm:sitemap)"/></b> sitemaps.</span>
    </div>
    <div class="table">
      <div class="scroll">
        <table>
          <thead>
            <tr><th>Sitemap</th><th>Last modified</th></tr>
          </thead>
          <tbody>
            <xsl:for-each select="sm:sitemap">
              <tr>
                <td>
                  <a href="{sm:loc}">
                    <span class="name">
                      <xsl:call-template name="label"><xsl:with-param name="loc" select="sm:loc"/></xsl:call-template>
                    </span>
                    <span class="sub"><xsl:value-of select="sm:loc"/></span>
                  </a>
                </td>
                <td class="date"><xsl:call-template name="date"><xsl:with-param name="d" select="sm:lastmod"/></xsl:call-template></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </div>
    </div>
  </xsl:template>

  <!-- A single sitemap -->
  <xsl:template match="sm:urlset">
    <div class="meta">
      <span class="count">This XML Sitemap contains <b><xsl:value-of select="count(sm:url)"/></b> URLs.</span>
      <a class="back" href="/sitemap.xml">← Sitemap index</a>
    </div>
    <div class="table">
      <div class="scroll">
        <table>
          <thead>
            <tr><th>URL</th><th class="num hide-sm">Images</th><th>Last modified</th></tr>
          </thead>
          <tbody>
            <xsl:for-each select="sm:url">
              <tr>
                <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                <td class="num hide-sm"><xsl:value-of select="count(image:image)"/></td>
                <td class="date"><xsl:call-template name="date"><xsl:with-param name="d" select="sm:lastmod"/></xsl:call-template></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </div>
    </div>
  </xsl:template>

  <!-- "2026-10-13T09:00:00+00:00" -> "2026-10-13 09:00 +00:00" -->
  <xsl:template name="date">
    <xsl:param name="d"/>
    <xsl:value-of select="substring($d, 1, 10)"/>
    <span class="t"><xsl:value-of select="concat(' ', substring($d, 12, 5), ' ', substring($d, 20, 6))"/></span>
  </xsl:template>

  <!-- Friendly names for each sitemap file -->
  <xsl:template name="label">
    <xsl:param name="loc"/>
    <xsl:choose>
      <xsl:when test="contains($loc, '/page-sitemap.xml')">Pages</xsl:when>
      <xsl:when test="contains($loc, '/service-sitemap.xml')">Services</xsl:when>
      <xsl:when test="contains($loc, '/industry-sitemap.xml')">Industries</xsl:when>
      <xsl:when test="contains($loc, '/location-sitemap.xml')">Locations</xsl:when>
      <xsl:when test="contains($loc, '/case-study-sitemap.xml')">Case studies</xsl:when>
      <xsl:when test="contains($loc, '/post-sitemap.xml')">Blog posts</xsl:when>
      <xsl:otherwise><xsl:value-of select="$loc"/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
