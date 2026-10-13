import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("technical-seo-for-service-business-websites")!;

export const metadata = pageMeta({
  title: "Technical SEO for Service Business Websites: Fixes That Matter",
  description:
    "The technical SEO problems most common on contractor websites: indexing, speed, Core Web Vitals, mobile, schema and structure, and how to fix each one.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "What is technical SEO?",
    a: "Technical SEO is the work that makes sure search engines can find, crawl, understand and index your website, and that it loads quickly and works well on phones. It is the foundation that content and links build on.",
  },
  {
    q: "Do I need a developer to fix technical SEO?",
    a: "Not always. Many fixes, such as compressing images, fixing titles, submitting a sitemap and removing unused plugins, can be done in a website builder or CMS. Server, redirect and code-level issues usually need a developer.",
  },
  {
    q: "How often should I run a technical SEO audit?",
    a: "A full audit once or twice a year, plus a monthly glance at Google Search Console for new indexing errors, Core Web Vitals warnings and manual actions.",
  },
  {
    q: "Does site speed really affect rankings?",
    a: "Speed and Core Web Vitals are part of Google's page experience signals. They rarely beat relevance on their own, but on mobile a slow site also loses customers who give up before it loads.",
  },
  {
    q: "Is technical SEO important for AI search?",
    a: "Yes. Google says pages must be indexed and eligible to appear with a snippet to show as supporting links in AI Overviews, and AI crawlers can only describe pages they are allowed to read.",
  },
  {
    q: "What is the most common technical SEO problem on contractor websites?",
    a: "Pages that are not indexed, usually because of a leftover noindex setting, duplicate town pages or thin content. Check the Pages report in Google Search Console first.",
  },
  {
    q: "Will switching website platforms hurt my rankings?",
    a: "It can if old URLs are not redirected to their new equivalents. Map every old URL to a new page and set up permanent redirects before launch, and rankings usually carry over.",
  },
];

export default function TechnicalSeoPostPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="The technical SEO problems I see most often on contractor and home service websites, how to find each one in free tools, and how to fix them without a developer degree."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>Technical SEO makes sure Google can find, crawl, index and quickly load your pages.</li>
          <li>Start with the Pages report in Search Console: unindexed pages are the most common problem.</li>
          <li>Good Core Web Vitals are LCP of 2.5 seconds or less, INP of 200 ms or less and CLS of 0.1 or less.</li>
          <li>Use LocalBusiness schema, a clean site structure and unique titles for every page.</li>
          <li>Being indexed is also the basic requirement for appearing in Google's AI features.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#why">Why technical SEO matters for local businesses</a>
          </li>
          <li>
            <a href="#tools">The free tools you need</a>
          </li>
          <li>
            <a href="#indexing">Indexing: can Google see your pages?</a>
          </li>
          <li>
            <a href="#speed">Speed and Core Web Vitals</a>
          </li>
          <li>
            <a href="#mobile">Mobile experience</a>
          </li>
          <li>
            <a href="#structure">Site structure and internal links</a>
          </li>
          <li>
            <a href="#onpage">Titles, headings and duplicates</a>
          </li>
          <li>
            <a href="#schema">Structured data</a>
          </li>
          <li>
            <a href="#ai">AI crawlers</a>
          </li>
          <li>
            <a href="#checklist">Audit checklist</a>
          </li>
        </ol>
      </nav>

      <h2 id="why">Why technical SEO matters for local businesses</h2>
      <p>
        Contractor websites are usually built quickly, often on a template, by someone who is not thinking about search.
        That is fine until Google cannot find half your service pages, the site takes eight seconds to load on a phone,
        or every town page is a near-copy of the last. None of these problems are visible to you, but all of them hold
        rankings back.
      </p>
      <p>
        Technical SEO is the foundation under everything else. Great content and strong reviews help far less if Google
        cannot crawl and index the pages that hold them. It matters for AI search too. Google&apos;s own documentation
        on AI features is clear that there is no secret technical trick:
      </p>
      <blockquote>
        <p>&ldquo;There are no additional technical requirements.&rdquo;</p>
        <cite>
          Google Search Central,{" "}
          <Ext href="https://developers.google.com/search/docs/appearance/ai-features">
            AI features and your website
          </Ext>
          , on what pages need to appear in AI Overviews and AI Mode beyond being indexed and eligible for a snippet
        </cite>
      </blockquote>
      <p>
        In other words, the same technical basics that get you indexed in Google Search are what make you eligible for
        Google&apos;s AI features.
      </p>

      <h2 id="tools">The free tools you need</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>What it tells you</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Ext href="https://search.google.com/search-console">Google Search Console</Ext>
              </td>
              <td>Which pages are indexed, why others are not, Core Web Vitals, mobile issues, manual actions</td>
            </tr>
            <tr>
              <td>
                <Ext href="https://pagespeed.web.dev/">PageSpeed Insights</Ext>
              </td>
              <td>Real-user speed data and specific fixes for any page</td>
            </tr>
            <tr>
              <td>
                <Ext href="https://search.google.com/test/rich-results">Rich Results Test</Ext>
              </td>
              <td>Whether your structured data is valid</td>
            </tr>
            <tr>
              <td>
                <Ext href="https://www.bing.com/webmasters">Bing Webmaster Tools</Ext>
              </td>
              <td>Indexing in Bing, which also powers Microsoft Copilot</td>
            </tr>
            <tr>
              <td>A site crawler (e.g. Screaming Frog, free up to 500 URLs)</td>
              <td>Broken links, redirects, duplicate titles, missing headings</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="indexing">Indexing: can Google see your pages?</h2>
      <p>
        Open the Pages report in Search Console. It lists every URL Google knows about and whether it is indexed. For a
        small contractor site, every important page should be in the index. Common reasons pages are left out:
      </p>
      <ul>
        <li>
          <strong>Noindex tags left on</strong> from when the site was built. Many website builders have a
          &quot;discourage search engines&quot; setting that stays on after launch.
        </li>
        <li>
          <strong>Blocked in robots.txt</strong>, often by accident when a whole folder is disallowed.
        </li>
        <li>
          <strong>Duplicate or near-duplicate content.</strong> Google picks one version and ignores the rest. This
          happens a lot with copy-paste town pages.
        </li>
        <li>
          <strong>Thin pages</strong> with a heading and two sentences, which Google crawls but chooses not to index.
        </li>
        <li>
          <strong>Orphan pages</strong> that no other page links to, so Google rarely finds them.
        </li>
      </ul>
      <p>
        Submit an XML sitemap in Search Console so Google has a complete list of your pages, and make sure it only lists
        pages you want indexed. If you are unsure what a good sitemap looks like,{" "}
        <Ext href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview">
          Google&apos;s sitemap overview
        </Ext>{" "}
        explains the format.
      </p>

      <h2 id="speed">Speed and Core Web Vitals</h2>
      <p>
        Core Web Vitals are Google&apos;s measures of how fast and stable a page feels to real users. You can see your
        site&apos;s scores in Search Console and PageSpeed Insights. These are the thresholds for a &quot;good&quot;
        score, as published on <Ext href="https://web.dev/articles/vitals">web.dev</Ext>:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Measures</th>
              <th>Good</th>
              <th>Usual culprit on contractor sites</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Largest Contentful Paint (LCP)</td>
              <td>How fast the main content appears</td>
              <td>2.5 seconds or less</td>
              <td>Huge uncompressed hero photos, slow hosting</td>
            </tr>
            <tr>
              <td>Interaction to Next Paint (INP)</td>
              <td>How quickly the page responds to taps</td>
              <td>200 milliseconds or less</td>
              <td>Heavy page builders, chat widgets, too many scripts</td>
            </tr>
            <tr>
              <td>Cumulative Layout Shift (CLS)</td>
              <td>How much the layout jumps while loading</td>
              <td>0.1 or less</td>
              <td>Images without sizes, late-loading banners and pop-ups</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>The fixes that make the biggest difference on most service sites:</p>
      <ol>
        <li>Compress and resize images. A phone does not need a 5,000-pixel job photo.</li>
        <li>Use modern formats like WebP and set width and height on every image.</li>
        <li>Remove plugins, sliders and widgets you do not use.</li>
        <li>Load chat widgets and review carousels after the main content.</li>
        <li>Use decent hosting with caching, or a platform that handles it for you.</li>
      </ol>

      <h2 id="mobile">Mobile experience</h2>
      <p>
        Most local searches happen on phones, often while something is going wrong at home. Google indexes the mobile
        version of your site first, so the mobile version is the one that counts. Check each core page on your own
        phone:
      </p>
      <ul>
        <li>Is the phone number a tap-to-call link, visible without scrolling?</li>
        <li>Is the text readable without zooming, and are buttons big enough to tap?</li>
        <li>Do pop-ups cover the content? Intrusive ones frustrate users and can hurt rankings.</li>
        <li>Does any content scroll sideways off the screen?</li>
      </ul>

      <h2 id="structure">Site structure and internal links</h2>
      <p>
        A clear structure helps Google understand what your site is about and which pages matter most. For a home
        service business, a simple structure works best:
      </p>
      <ul>
        <li>Homepage linking to each core service page</li>
        <li>Each service page linking to related services and the main towns you serve</li>
        <li>Area pages linking back to the relevant services</li>
        <li>Blog articles linking to the service they relate to</li>
      </ul>
      <p>
        Every important page should be reachable within two or three clicks of the homepage, and none should be
        orphaned. Use descriptive link text, such as &quot;water heater replacement&quot;, rather than &quot;click
        here&quot;. Fix broken links and avoid chains of redirects, especially after a redesign.
      </p>

      <h2 id="onpage">Titles, headings and duplicates</h2>
      <p>
        These sit on the line between technical and on-page SEO, but they are among the most common problems a crawl
        finds:
      </p>
      <ul>
        <li>
          <strong>Duplicate titles,</strong> such as every page titled &quot;Home | ABC Plumbing&quot;. Each page needs
          a unique title naming its service and town, ideally under about 60 characters so it is not cut off.
        </li>
        <li>
          <strong>Missing or duplicate meta descriptions.</strong> They do not directly rank you, but a clear
          description improves clicks.
        </li>
        <li>
          <strong>No H1, or several.</strong> Each page should have one main heading that says what it is about.
        </li>
        <li>
          <strong>Mixed URL versions,</strong> such as http and https, or with and without www, all live at once. Pick
          one and redirect the rest.
        </li>
      </ul>
      <p>
        For the page-by-page side of this, see my <Link href="/seo-services/on-page-seo">On-Page SEO service</Link>.
      </p>

      <h2 id="schema">Structured data</h2>
      <p>
        Structured data, often called schema markup, labels information on your pages in a format search engines read
        easily. For a home service business, the most useful types are:
      </p>
      <ul>
        <li>
          <strong>LocalBusiness</strong> (or a more specific type such as Plumber or RoofingContractor) with your name,
          address, phone, hours and service area
        </li>
        <li>
          <strong>Service</strong> on each service page
        </li>
        <li>
          <strong>FAQPage</strong> where a page genuinely has questions and answers
        </li>
        <li>
          <strong>BreadcrumbList</strong> to describe where a page sits in your site
        </li>
      </ul>
      <p>
        Test it with the Rich Results Test, and keep it honest: marking up reviews you do not show, or details that are
        not on the page, breaks Google&apos;s guidelines. See{" "}
        <Ext href="https://developers.google.com/search/docs/appearance/structured-data/local-business">
          Google&apos;s LocalBusiness documentation
        </Ext>{" "}
        for the details.
      </p>

      <h2 id="ai">AI crawlers</h2>
      <p>
        Search engines are no longer the only bots that matter. If you want AI tools to recommend your business, they
        need to be able to read your site. Security plugins, firewalls and copy-pasted robots.txt rules sometimes block
        them without the owner knowing.
      </p>
      <p>
        Check your robots.txt file (yoursite.com/robots.txt) and any bot-blocking settings. For example,{" "}
        <Ext href="https://platform.openai.com/docs/bots">OpenAI documents</Ext> separate crawlers for ChatGPT search
        and for model training, so you can allow one and block the other. The full picture is in{" "}
        <Link href="/blog/get-recommended-by-chatgpt">how to get recommended by ChatGPT and AI search</Link>.
      </p>

      <h2 id="builders">Common problems by website builder</h2>
      <p>
        Most contractor websites run on one of a handful of platforms. Each has its own typical problems, so knowing
        yours tells you where to look first.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Typical technical problems</th>
              <th>Where to start</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>WordPress</td>
              <td>
                Too many plugins, heavy page builders, &quot;discourage search engines&quot; left on, cheap hosting
              </td>
              <td>Remove unused plugins, add caching, check Settings &gt; Reading</td>
            </tr>
            <tr>
              <td>Wix</td>
              <td>Heavy pages, slow mobile loading, duplicate titles from templates</td>
              <td>Compress images, write unique titles in each page&apos;s SEO settings</td>
            </tr>
            <tr>
              <td>Squarespace</td>
              <td>Large images, limited control over some markup</td>
              <td>Resize images before upload, fill in page SEO fields</td>
            </tr>
            <tr>
              <td>Webflow</td>
              <td>Usually fast, but CMS pages can end up thin or duplicated</td>
              <td>Check collection templates for unique content</td>
            </tr>
            <tr>
              <td>Agency or franchise templates</td>
              <td>Shared content across many sites, limited editing</td>
              <td>Ask for access to edit titles, pages and schema</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Whatever the platform, the fixes are the same in principle: fewer and lighter page elements, unique titles and
        content, every important page indexed, and nothing blocking the crawlers you want.
      </p>

      <h2 id="redesign">Redesigning your site without losing rankings</h2>
      <p>
        A new website is one of the riskiest moments for a local business&apos;s rankings. I regularly see contractors
        lose half their search traffic after a redesign, almost always for the same avoidable reasons. Before launch:
      </p>
      <ol>
        <li>Export a list of every current URL, and note which ones get traffic in Search Console.</li>
        <li>Map each old URL to its closest new page, and set up permanent (301) redirects.</li>
        <li>Keep the content that ranks. Rewriting a page that ranks well is a gamble.</li>
        <li>Copy over titles, meta descriptions and structured data, or improve them.</li>
        <li>Make sure the new site is not set to noindex when it goes live.</li>
        <li>Submit the new sitemap and watch the Pages report closely for the following weeks.</li>
      </ol>
      <p>
        If rankings drop after launch, check redirects first. Missing redirects are the cause far more often than
        anything else.
      </p>

      <h2 id="checklist">Technical SEO audit checklist</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Check</th>
              <th>Pass when</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indexing</td>
              <td>All important pages indexed in Search Console</td>
            </tr>
            <tr>
              <td>Sitemap</td>
              <td>Submitted, error-free, lists only indexable pages</td>
            </tr>
            <tr>
              <td>robots.txt</td>
              <td>Not blocking important pages or wanted crawlers</td>
            </tr>
            <tr>
              <td>HTTPS</td>
              <td>One secure version; others redirect to it</td>
            </tr>
            <tr>
              <td>Core Web Vitals</td>
              <td>&quot;Good&quot; for mobile in Search Console</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Readable, tappable, no sideways scrolling, tap-to-call visible</td>
            </tr>
            <tr>
              <td>Titles and H1s</td>
              <td>Unique per page, one H1 each</td>
            </tr>
            <tr>
              <td>Broken links</td>
              <td>None internally; no redirect chains</td>
            </tr>
            <tr>
              <td>Structured data</td>
              <td>Valid LocalBusiness markup; no errors</td>
            </tr>
            <tr>
              <td>Duplicate content</td>
              <td>No near-copy town or service pages</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Most contractor sites fail three or four of these on the first audit, and fixing them is often the fastest win
        in a local SEO campaign because it unlocks pages Google was ignoring.
      </p>
      <div className="note">
        <p>
          <strong>Before you redesign:</strong> if you are planning a new website, map every old URL to its new one and
          set up redirects before launch. Redesigns without redirects are one of the most common reasons local
          businesses suddenly lose rankings.
        </p>
      </div>
      <p>
        If you would rather someone check all of this for you, my{" "}
        <Link href="/seo-services/technical-seo">Technical SEO service</Link> covers it, and an{" "}
        <Link href="/seo-services/seo-audits">SEO audit</Link> gives you a prioritized fix list. Technical work is also
        included in every <Link href="/pricing">monthly plan</Link>, alongside the rest of the{" "}
        <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist</Link>.
      </p>
    </ArticleLayout>
  );
}
