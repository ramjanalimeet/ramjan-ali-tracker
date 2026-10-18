import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("google-business-profile-categories-for-contractors")!;

export const metadata = pageMeta({
  title: "Best Google Business Profile Categories for Contractors",
  description:
    "How to choose primary and secondary Google Business Profile categories for roofers, plumbers, HVAC, septic and other trades, with a category table by trade.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "What is the best Google Business Profile category for a contractor?",
    a: "The best primary category is the one that describes the service that earns you the most money and that most customers search for, such as Roofing contractor, Plumber or HVAC contractor. Then add secondary categories only for other services you genuinely offer.",
  },
  {
    q: "How many categories can I add to my Google Business Profile?",
    a: "You choose one primary category and can add up to nine secondary categories. More is not better. Add only categories that describe what the business actually is, not every service it can do.",
  },
  {
    q: "Does changing my primary category affect rankings?",
    a: "Yes, often noticeably and quickly, for better or worse. Change it only after checking what the top three competitors use, and expect rankings to move for a couple of weeks. A category change can also trigger a profile review, so change one thing at a time.",
  },
  {
    q: "Should my primary category match my website?",
    a: "It should. The page your profile links to should clearly be about the same service as your primary category. A roofer whose homepage talks mostly about siding sends mixed signals.",
  },
  {
    q: "Why can't I find the exact category I want?",
    a: "Google only allows categories from its own list, and the names change over time. Type a few variations of your service into the category field and pick the closest real match. Cover anything missing with the Services section and your website pages.",
  },
  {
    q: "Do categories help with AI search?",
    a: "Indirectly. AI assistants and Google's AI Overviews pull from your Business Profile and other listings, so a clear, accurate category makes it easier for them to describe what you do correctly.",
  },
];

export default function GoogleBusinessProfileCategoriesForContractorsPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="Your primary category is one of the strongest map ranking signals you control. Here is how roofers, plumbers, HVAC, septic and other home service companies should choose theirs, trade by trade."
    >
      <p>Ask ten contractors which Google Business Profile setting matters most and most will say reviews. Reviews matter, but the setting that often decides whether you show up at all is quieter: your <strong>primary category</strong>.</p>
      <p>Get it right and Google understands exactly which searches you are relevant for. Get it wrong and you can have 200 five-star reviews and still be missing from the map pack for the jobs you want. This guide shows how to choose your primary and secondary categories, with a table for each major trade.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Your primary category should match your most profitable, most searched core service.</li>
      <li>Secondary categories should describe what the business <em>is</em>, not every job it can do.</li>
      <li>Check the top three map competitors&apos; categories before changing anything.</li>
      <li>Back every category with a matching service page on your website.</li>
      <li>Use the Services section, not extra categories, for individual jobs.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#why">Why categories matter so much</a></li>
      <li><a href="#primary">How to choose your primary category</a></li>
      <li><a href="#by-trade">Recommended categories by trade</a></li>
      <li><a href="#secondary">How to use secondary categories</a></li>
      <li><a href="#services">Categories vs services vs your website</a></li>
      <li><a href="#change">How to change categories safely</a></li>
      <li><a href="#seasonal">Seasonal category swaps: do they work?</a></li>
      <li><a href="#mistakes">Common category mistakes</a></li>
      <li><a href="#next">Where categories fit in the bigger picture</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="why">Why categories matter so much</h2>
      <p>Google ranks local results on three things: relevance, distance and prominence. Categories are the clearest relevance signal you control. When someone searches &quot;plumber near me&quot;, Google starts with businesses whose categories say they are plumbers, then sorts them by everything else.</p>
      <p>Google&apos;s own guidelines are short and specific about how to choose:</p>
      <blockquote>
      <p>&quot;Use as few categories as possible to describe your overall core business.&quot;</p>
      <cite>Google Business Profile Help, <Ext href="https://support.google.com/business/answer/3038177">Guidelines for representing your business on Google</Ext></cite>
      </blockquote>
      <p>In practice, that means a few well-chosen categories beat a long list. A plumber who adds &quot;Bathroom remodeler&quot;, &quot;Kitchen remodeler&quot;, &quot;Water heater store&quot; and &quot;Hardware store&quot; is telling Google the business is several different things, and none of them very strongly.</p>
      <h2 id="primary">How to choose your primary category</h2>
      <p>Your primary category carries the most weight. Use these four questions, in order:</p>
      <ol>
      <li><strong>What do most of your best jobs come from?</strong> Not your most frequent job, your most valuable one. A company that does roofing and gutters but makes 80% of its money on roof replacements is a &quot;Roofing contractor&quot;.</li>
      <li><strong>What do customers type?</strong> People search &quot;roofer&quot; and &quot;roof repair&quot;, not &quot;exterior renovation specialist&quot;. Pick the category that matches the words customers use.</li>
      <li><strong>What do the top three use?</strong> Search your main service from a few points in your area and check the businesses in the map pack. A free extension such as GMB Everywhere or PlePer shows their categories. If all three use the same primary, that is strong evidence it is the one Google rewards in your market.</li>
      <li><strong>Does your website match it?</strong> The page your profile links to should clearly be about that service.</li>
      </ol>
      <div className="note">
      <p><strong>A common mistake:</strong> choosing a broad category such as &quot;Contractor&quot; or &quot;General contractor&quot; when you mostly do one trade. Broad categories compete for everything and win almost nothing. Be as specific as your main service allows.</p>
      </div>
      <h2 id="by-trade">Recommended categories by trade</h2>
      <p>These are typical starting points for home service businesses. Category names on Google&apos;s list change from time to time, so confirm the exact wording in your dashboard, and always check what is winning in your own area.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Trade</th><th>Usual primary category</th><th>Secondary categories to consider (only if you do the work)</th></tr>
      </thead>
      <tbody>
      <tr><td><Link href="/local-seo/roofing-seo">Roofing</Link></td><td>Roofing contractor</td><td>Gutter cleaning service, Siding contractor, Skylight contractor, Commercial roofing contractor (if listed in your dashboard)</td></tr>
      <tr><td><Link href="/local-seo/plumbing-seo">Plumbing</Link></td><td>Plumber</td><td>Water heater installation service, Drainage service, Septic system service, Water softening equipment supplier</td></tr>
      <tr><td><Link href="/local-seo/hvac-seo">HVAC</Link></td><td>HVAC contractor</td><td>Air conditioning contractor, Air conditioning repair service, Furnace repair service, Heating contractor, Air duct cleaning service</td></tr>
      <tr><td><Link href="/local-seo/septic-seo">Septic</Link></td><td>Septic system service</td><td>Drainage service, Excavating contractor, Portable toilet supplier</td></tr>
      <tr><td><Link href="/local-seo/electrician-seo">Electrical</Link></td><td>Electrician</td><td>Electrical installation service, Lighting contractor, Generator shop, Electric vehicle charging station contractor</td></tr>
      <tr><td><Link href="/local-seo/garage-door-seo">Garage doors</Link></td><td>Garage door supplier</td><td>Garage door repair service (if listed), Gate repair service</td></tr>
      <tr><td><Link href="/local-seo/pest-control-seo">Pest control</Link></td><td>Pest control service</td><td>Termite control service, Wildlife control service</td></tr>
      <tr><td><Link href="/local-seo/landscaping-seo">Landscaping</Link></td><td>Landscaper</td><td>Lawn care service, Landscape designer, Irrigation contractor, Tree service</td></tr>
      <tr><td><Link href="/local-seo/water-damage-restoration-seo">Water damage</Link></td><td>Water damage restoration service</td><td>Fire damage restoration service, Mold remediation service (if listed), Carpet cleaning service</td></tr>
      <tr><td><Link href="/local-seo/painting-seo">Painting</Link></td><td>Painter</td><td>House painter (if listed), Drywall contractor, Deck staining service</td></tr>
      <tr><td><Link href="/local-seo/kitchen-remodeling-seo">Remodeling</Link></td><td>Kitchen remodeler or Bathroom remodeler</td><td>General contractor, Cabinet maker, Countertop store</td></tr>
      </tbody>
      </table>
      </div>
      <p>Do not add a secondary category to &quot;unlock&quot; a search you do not really serve. If someone calls about septic and you only do drain cleaning, the bad lead costs you time, and the mismatch can earn you a poor review.</p>
      <h2 id="secondary">How to use secondary categories</h2>
      <p>Secondary categories widen the set of searches you are relevant for. Use them for distinct <em>kinds</em> of business you also are, not for individual jobs.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Good use of a secondary category</th><th>Better handled elsewhere</th></tr>
      </thead>
      <tbody>
      <tr><td>An HVAC company adding &quot;Air duct cleaning service&quot; because it runs a duct cleaning crew</td><td>&quot;AC tune-up&quot; as a service in the Services section</td></tr>
      <tr><td>A plumber adding &quot;Water heater installation service&quot; because water heaters are a major revenue line</td><td>&quot;Garbage disposal repair&quot; as a service and a short website page</td></tr>
      <tr><td>A roofer adding &quot;Gutter cleaning service&quot; because gutters are a regular add-on</td><td>&quot;Roof inspection&quot; as a service and a page targeting insurance inspections</td></tr>
      </tbody>
      </table>
      </div>
      <p>A good rule: if you could not credibly put the secondary category on your truck, it probably does not belong on your profile.</p>
      <h2 id="services">Categories vs services vs your website</h2>
      <p>Categories, the Services section and your website each do a different job. Contractors who mix them up usually have a profile stuffed with categories and a website with one thin services page.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Where</th><th>What it tells Google</th><th>What to put there</th></tr>
      </thead>
      <tbody>
      <tr><td>Primary category</td><td>What the business fundamentally is</td><td>One category: your core trade</td></tr>
      <tr><td>Secondary categories</td><td>Other kinds of business you also are</td><td>A few genuine additional trades</td></tr>
      <tr><td>Services section</td><td>The specific jobs you do</td><td>Every job you want calls for, with a short description</td></tr>
      <tr><td>Website service pages</td><td>Proof, detail and relevance for each job</td><td>One page per important service. See <Link href="/blog/service-area-pages-that-rank">how to write service area pages that rank</Link></td></tr>
      </tbody>
      </table>
      </div>
      <p>The website is where most contractors lose. Google&apos;s local results also look at your website, so a strong page for each service backs up the category and services on your profile. That is a big part of <Link href="/seo-services/on-page-seo">on-page SEO</Link> for local businesses.</p>
      <h2 id="change">How to change categories safely</h2>
      <ol>
      <li><strong>Screenshot your current setup</strong> and note your rankings for your main searches, ideally on a rank grid across your service area.</li>
      <li><strong>Change one thing at a time.</strong> Swap the primary category, wait two to three weeks, then adjust secondaries.</li>
      <li><strong>Do not combine a category change with a name or address change.</strong> Several core edits at once can trigger a review, and in the worst case a suspension. See <Link href="/blog/google-business-profile-suspended">what to do if your profile gets suspended</Link>.</li>
      <li><strong>Update your website at the same time</strong> so the linked page matches the new primary category.</li>
      <li><strong>Measure</strong> calls and rankings for four weeks before deciding whether it worked.</li>
      </ol>
      <div className="note">
      <p><strong>Expect some movement.</strong> Rankings often shift within days of a primary category change, sometimes down before they settle. Do not panic and switch back after three days.</p>
      </div>
      <h2 id="seasonal">Seasonal category swaps: do they work?</h2>
      <p>Some HVAC companies switch their primary category from &quot;Air conditioning contractor&quot; in summer to &quot;Heating contractor&quot; in winter. It can help in markets where seasonal searches are very different, but it has risks: every primary change resets some relevance and can trigger a review.</p>
      <p>For most HVAC businesses, &quot;HVAC contractor&quot; as primary, with heating and cooling secondaries, plus strong seasonal pages and profile posts, is the steadier option. The <Link href="/blog/hvac-seo-calendar">month-by-month HVAC SEO calendar</Link> shows how to plan seasonal content instead.</p>
      <h2 id="mistakes">Common category mistakes</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Mistake</th><th>Why it hurts</th><th>Fix</th></tr>
      </thead>
      <tbody>
      <tr><td>Broad primary (&quot;Contractor&quot;)</td><td>Weak relevance for every specific search</td><td>Use your core trade category</td></tr>
      <tr><td>Nine secondary categories &quot;just in case&quot;</td><td>Dilutes what the business is</td><td>Keep only genuine trades</td></tr>
      <tr><td>Category does not match the linked page</td><td>Mixed relevance signals</td><td>Link to a page about your primary service</td></tr>
      <tr><td>Copying a spammy competitor</td><td>Their listing may be breaking the rules</td><td>Copy the legitimate top performers only</td></tr>
      <tr><td>Never revisiting categories</td><td>Google adds new, more specific categories over time</td><td>Review them twice a year</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="next">Where categories fit in the bigger picture</h2>
      <p>Categories get you into the right race. Reviews, your website, local links and your distance from the searcher decide where you finish. Once your categories are right, the next steps are a steady <Link href="/blog/how-to-get-more-google-reviews">review system</Link> and the full plan in <Link href="/blog/how-to-rank-in-google-map-pack">how to rank in the Google map pack</Link>.</p>
      <p>Not sure whether your categories are holding you back? On a <Link href="/book-a-call">free strategy call</Link> I compare your profile with the three businesses beating you in the map and tell you exactly what I would change first. Profile setup and category strategy are part of every <Link href="/local-seo">Local SEO</Link> plan.</p>
    </ArticleLayout>
  );
}
