import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("local-seo-audit")!;

export const metadata = pageMeta({
  title: "Local SEO Audit: A 60-Minute DIY Guide With Scorecard",
  description:
    "A 60-minute DIY local SEO audit for home service businesses: compare your profile, reviews, website and links with the top 3 map competitors.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "What is a local SEO audit?",
    a: "A local SEO audit is a review of everything that affects how a business ranks in Google Maps and local results: the Google Business Profile, reviews, website, citations, links and tracking. A useful audit also compares you with the competitors who are currently winning, and ends with a prioritized fix list.",
  },
  {
    q: "How often should I audit my local SEO?",
    a: "A quick check like this one every three months is enough for most businesses, plus a deeper audit once a year or after a big drop in calls or rankings.",
  },
  {
    q: "What tools do I need for a local SEO audit?",
    a: "You can do a solid audit with free tools: Google Search, your Business Profile dashboard, Google Search Console, PageSpeed Insights and a browser extension that shows competitors' profile categories. Paid tools add rank grids and link data but are not required to start.",
  },
  {
    q: "Why do competitors with fewer reviews outrank me?",
    a: "Usually because of distance, categories or website strength. They may be closer to where you searched from, use a more relevant primary category, or have a stronger page for that service. The scorecard in this guide helps you find which.",
  },
  {
    q: "Can I get a professional audit for free?",
    a: "Yes. A free strategy call with me includes a review of your profile, website and top three map competitors, and you keep the findings whether or not you hire me.",
  },
];

export default function LocalSeoAuditPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="You don't need an expensive tool to find out why competitors outrank you. This 60-minute audit compares your business with the top three in the map pack and shows what to fix first."
    >
      <p>Most local SEO problems are not mysterious. A business ranks below its competitors for a handful of reasons, and they are usually visible if you know where to look. The trick is to compare yourself with the businesses that are actually winning, not with a generic checklist.</p>
      <p>This audit takes about an hour. You will finish with a scorecard comparing you with the top three map competitors and a short list of what to fix first. If you want the full list of what a complete setup includes, the <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist for contractors</Link> covers that. This guide is about diagnosis.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Audit against the top three map competitors, not against a perfect ideal.</li>
      <li>Search from your customers&apos; locations, not your office.</li>
      <li>The biggest gaps are usually categories, reviews and service pages.</li>
      <li>Score each area, then fix the biggest gap that is cheapest to close first.</li>
      <li>Repeat every three months to track progress.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#setup">Before you start (5 minutes)</a></li>
      <li><a href="#profile">Step 1: Google Business Profile (15 minutes)</a></li>
      <li><a href="#reviews">Step 2: Reviews (10 minutes)</a></li>
      <li><a href="#website">Step 3: Website (15 minutes)</a></li>
      <li><a href="#citations">Step 4: Citations and links (10 minutes)</a></li>
      <li><a href="#ai">Step 5: AI answers (5 minutes)</a></li>
      <li><a href="#scorecard">The competitor scorecard</a></li>
      <li><a href="#prioritize">Turning the scorecard into a fix list</a></li>
      <li><a href="#example">Example: reading a scorecard</a></li>
      <li><a href="#drops">If you are auditing because rankings suddenly dropped</a></li>
      <li><a href="#tools">Free tools for this audit</a></li>
      <li><a href="#pitfalls">Audit mistakes to avoid</a></li>
      <li><a href="#next">Want a professional audit?</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="setup">Before you start (5 minutes)</h2>
      <ol>
      <li><strong>Pick three searches</strong> that bring your best jobs, for example &quot;roof repair [town]&quot;, &quot;water heater replacement [town]&quot;, &quot;AC repair near me&quot;.</li>
      <li><strong>Pick three locations</strong> in your service area: near your office, in your biggest town, and toward the edge of your area.</li>
      <li><strong>Open a private browser window</strong> so your own history does not affect results. Use a phone for at least one search, since most of your customers will.</li>
      <li><strong>Note the top three map results</strong> for each search and location. The businesses that appear most often are your real competitors.</li>
      </ol>
      <div className="note">
      <p><strong>Why location matters:</strong> map rankings change with the searcher&apos;s location. You might be first next to your office and invisible ten miles away. That is normal, and it is often the most important thing this audit reveals.</p>
      </div>
      <h2 id="profile">Step 1: Google Business Profile (15 minutes)</h2>
      <p>Compare your profile with each competitor&apos;s:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Check</th><th>What to look for</th></tr>
      </thead>
      <tbody>
      <tr><td>Primary category</td><td>Do all three competitors use a different primary category from yours? That is a strong signal. See <Link href="/blog/google-business-profile-categories-for-contractors">choosing GBP categories</Link></td></tr>
      <tr><td>Secondary categories</td><td>Which genuine categories do they have that you lack?</td></tr>
      <tr><td>Business name</td><td>Are competitors stuffing keywords into their names? (Note it; you may be able to report it)</td></tr>
      <tr><td>Services</td><td>Are your services listed in full with descriptions?</td></tr>
      <tr><td>Photos</td><td>Real job photos, recently added?</td></tr>
      <tr><td>Posts</td><td>When was the last post?</td></tr>
      <tr><td>Hours and service area</td><td>Accurate? Realistic?</td></tr>
      <tr><td>Website link</td><td>Does it point to a relevant page, and does that page load fast?</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="reviews">Step 2: Reviews (10 minutes)</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Check</th><th>What to look for</th></tr>
      </thead>
      <tbody>
      <tr><td>Count</td><td>How far behind or ahead are you?</td></tr>
      <tr><td>Rating</td><td>Any big gap in average rating?</td></tr>
      <tr><td>Recency</td><td>How many reviews did each get in the last 90 days?</td></tr>
      <tr><td>Detail</td><td>Do their reviews mention services and towns? Do yours?</td></tr>
      <tr><td>Replies</td><td>Do they reply? Do you?</td></tr>
      </tbody>
      </table>
      </div>
      <p>Recency is the gap owners most often miss. A competitor with fewer total reviews but ten new ones a month is building faster than you. The <Link href="/blog/how-to-get-more-google-reviews">review system and scripts</Link> fix this.</p>
      <h2 id="website">Step 3: Website (15 minutes)</h2>
      <ul>
      <li><strong>Service pages:</strong> does each competitor have a dedicated page for the search you checked? Do you?</li>
      <li><strong>Area pages:</strong> do they have useful pages for the towns where they outrank you?</li>
      <li><strong>Titles:</strong> search <code>site:yourdomain.com</code> in Google and read your page titles. Do they say the service and the area?</li>
      <li><strong>Speed:</strong> test your main pages in <Ext href="https://pagespeed.web.dev/">PageSpeed Insights</Ext> on mobile.</li>
      <li><strong>Indexing:</strong> in Google Search Console, are your important pages indexed?</li>
      <li><strong>Mobile:</strong> is your phone number visible without scrolling?</li>
      </ul>
      <p>Technical problems are covered in depth in <Link href="/blog/technical-seo-for-service-business-websites">technical SEO for service business websites</Link>.</p>
      <h2 id="citations">Step 4: Citations and links (10 minutes)</h2>
      <blockquote>
      <p>&quot;Prominence refers to how well-known a business is.&quot;</p>
      <cite>Google Business Profile Help, <Ext href="https://support.google.com/business/answer/7091">Tips to improve your local ranking on Google</Ext></cite>
      </blockquote>
      <p>Mentions and links across the web are a big part of how Google judges that:</p>
      <ul>
      <li><strong>Consistency:</strong> search your business name and phone number. Do major directories show the same name, address and phone?</li>
      <li><strong>Duplicates:</strong> any old listings with a previous address or number?</li>
      <li><strong>Links:</strong> search each competitor&apos;s business name in quotes. Are they mentioned on local news, chamber, association or sponsor sites? Are you?</li>
      </ul>
      <p>If competitors have local links you do not, the <Link href="/blog/local-link-building-for-contractors">local link building ideas</Link> show where to start.</p>
      <h2 id="ai">Step 5: AI answers (5 minutes)</h2>
      <p>Ask ChatGPT, Gemini or Google&apos;s AI Mode: &quot;Who are the best [service] companies in [town]?&quot; Are you named? Are your competitors? AI answers increasingly influence who homeowners call. The <Link href="/blog/check-if-ai-recommends-your-business">AI visibility check</Link> explains how to test this properly.</p>
      <h2 id="scorecard">The competitor scorecard</h2>
      <p>Score yourself and each competitor from 1 (weak) to 5 (strong) on each area. Copy this table into a spreadsheet.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Area</th><th>You</th><th>Competitor 1</th><th>Competitor 2</th><th>Competitor 3</th></tr>
      </thead>
      <tbody>
      <tr><td>Primary category fit</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Profile completeness and activity</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Review count</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Review recency</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Service page for this search</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Area pages</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Site speed and mobile</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Citations consistency</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Local links and mentions</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Named in AI answers</td><td></td><td></td><td></td><td></td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="prioritize">Turning the scorecard into a fix list</h2>
      <p>Look for rows where you are 2 or more points behind all three competitors. Then sort those gaps by how fast and cheap they are to close:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Priority</th><th>Typical gaps</th><th>Time to fix</th></tr>
      </thead>
      <tbody>
      <tr><td>Fix this week</td><td>Wrong category, incomplete services, wrong hours, profile linking to a weak page</td><td>Hours</td></tr>
      <tr><td>Fix this month</td><td>Review system, citation cleanup, page titles, mobile phone button</td><td>Days</td></tr>
      <tr><td>Fix this quarter</td><td>Missing service pages, area pages, speed problems</td><td>Weeks</td></tr>
      <tr><td>Ongoing</td><td>Local links, review recency, content, AI visibility</td><td>Every month</td></tr>
      </tbody>
      </table>
      </div>
      <div className="note">
      <p><strong>Do not fix everything at once.</strong> The most wasted SEO effort comes from good work done in the wrong order: blog posts when the category is wrong, a new website when the old one only needed three pages.</p>
      </div>
      <h2 id="example">Example: reading a scorecard</h2>
      <p>Here is how a scorecard might look for a fictional HVAC company that ranks well near its office but disappears in the biggest nearby town:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Area</th><th>You</th><th>Comp. 1</th><th>Comp. 2</th><th>Comp. 3</th><th>Reading</th></tr>
      </thead>
      <tbody>
      <tr><td>Primary category fit</td><td>3</td><td>5</td><td>5</td><td>5</td><td>All three use &quot;HVAC contractor&quot;, you use &quot;Heating contractor&quot;. Fix this week</td></tr>
      <tr><td>Review count</td><td>4</td><td>4</td><td>3</td><td>5</td><td>Not the problem</td></tr>
      <tr><td>Review recency</td><td>2</td><td>4</td><td>4</td><td>5</td><td>Few new reviews in 90 days. Start a review system this month</td></tr>
      <tr><td>Service page for this search</td><td>1</td><td>4</td><td>3</td><td>4</td><td>No AC repair page at all. Build it this quarter</td></tr>
      <tr><td>Area pages</td><td>1</td><td>3</td><td>1</td><td>4</td><td>Two competitors have a page for the big town. Build one</td></tr>
      <tr><td>Local links</td><td>2</td><td>3</td><td>2</td><td>4</td><td>Ongoing, after the fixes above</td></tr>
      </tbody>
      </table>
      </div>
      <p>The fix list writes itself: change the primary category now, start asking every customer for reviews, then build an AC repair page and a genuinely useful page for the big town. That is a few weeks of work, and it targets exactly what separates you from the businesses that are winning.</p>
      <h2 id="drops">If you are auditing because rankings suddenly dropped</h2>
      <p>A sudden drop needs a slightly different first check. Work through these before anything else:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Check</th><th>What it can reveal</th></tr>
      </thead>
      <tbody>
      <tr><td>Is your profile still visible on Maps?</td><td>A suspension or restriction. See <Link href="/blog/google-business-profile-suspended">the suspension guide</Link></td></tr>
      <tr><td>Did anyone edit the profile recently?</td><td>Google or a user may have changed your category, hours or website link</td></tr>
      <tr><td>Did the website change?</td><td>A redesign, new platform or deleted pages often remove rankings</td></tr>
      <tr><td>Search Console: indexing and manual actions</td><td>Pages dropped from the index, or a penalty notice</td></tr>
      <tr><td>Did a new competitor appear?</td><td>A new, nearby business can push you down without you changing anything</td></tr>
      <tr><td>Is it the whole area or one spot?</td><td>Searching from several locations shows whether you fell everywhere or just in one town</td></tr>
      </tbody>
      </table>
      </div>
      <p>Note the date the drop started and compare it with anything that changed around then. Most drops have a cause you can find within an hour.</p>
      <h2 id="tools">Free tools for this audit</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Tool</th><th>Use it for</th></tr>
      </thead>
      <tbody>
      <tr><td>Google Search and Maps (private window)</td><td>Who ranks, from where</td></tr>
      <tr><td>Your Business Profile dashboard</td><td>Categories, services, performance data</td></tr>
      <tr><td>Google Search Console</td><td>Indexing, searches you appear for, problems</td></tr>
      <tr><td>PageSpeed Insights</td><td>Mobile speed and Core Web Vitals</td></tr>
      <tr><td>A GBP category extension (such as GMB Everywhere or PlePer)</td><td>Competitors&apos; categories</td></tr>
      <tr><td>ChatGPT, Gemini, Perplexity</td><td>Whether AI assistants name you</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="pitfalls">Audit mistakes to avoid</h2>
      <ul>
      <li>Searching only from your office or home.</li>
      <li>Comparing yourself with national brands instead of the local businesses in the map pack.</li>
      <li>Copying competitors who break the rules (fake addresses, keyword names). They may be suspended tomorrow.</li>
      <li>Judging success by one ranking check. Rankings vary by day and location.</li>
      </ul>
      <h2 id="next">Want a professional audit?</h2>
      <p>This self-audit catches the biggest issues. A professional <Link href="/seo-services/seo-audits">SEO audit</Link> goes deeper: rank grids across your whole service area, a full technical crawl, link comparisons and a prioritized 90-day plan. The quickest way to start is a <Link href="/book-a-call">free strategy call</Link>, where I review your profile, website and top three competitors, and you keep the findings either way.</p>
    </ArticleLayout>
  );
}
