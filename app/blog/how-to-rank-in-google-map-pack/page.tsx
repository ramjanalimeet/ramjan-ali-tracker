import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("how-to-rank-in-google-map-pack")!;

export const metadata = pageMeta({
  title: "How to Rank in the Google Map Pack (Local 3-Pack Guide)",
  description:
    "What decides the three businesses in the Google map pack, why yours may not show, and the practical steps contractors take to reach the top three.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How do I get my business on Google Maps?",
    a: "Create and verify a Google Business Profile with your real business name, category, address or service area, phone and hours. Once verified, your business can appear on Google Maps and in local results.",
  },
  {
    q: "How do I get to the top of Google Maps?",
    a: "Choose the most accurate primary category, complete every profile field, earn a steady flow of genuine reviews, build strong service pages on your website and earn local links and mentions. Rankings also depend on how close you are to the searcher.",
  },
  {
    q: "Why is my business not showing on Google Maps?",
    a: "The most common reasons are an unverified or suspended profile, the wrong primary category, searching from too far away, very few reviews, duplicate listings, or spam competitors taking the top spots.",
  },
  {
    q: "What are the ranking factors for Google Maps?",
    a: "Google says local results are based primarily on relevance, distance and prominence. In practice that means categories, services and website content, your location relative to the searcher, and reviews, links and overall reputation.",
  },
  {
    q: "What is the Google map pack?",
    a: "It is the box of three local businesses with a map that Google shows for searches with local intent, such as 'plumber near me' or 'roof repair in Tampa'. It is also called the local pack or 3-pack.",
  },
  {
    q: "Can I pay to be in the map pack?",
    a: "No. Google states there is no way to request or pay for a better local ranking. Local Services Ads and search ads can appear above the map, but the three map results themselves are earned.",
  },
  {
    q: "Why do my rankings look different from different places?",
    a: "Distance is part of the ranking. A business can rank first a mile from its address and not at all ten miles away. That is why rankings should be checked on a grid across your service area, not from your office.",
  },
  {
    q: "Do keywords in my business name help?",
    a: "They can seem to, but adding keywords that are not part of your real name breaks Google's guidelines. Competitors report it, and the profile can be suspended or edited back.",
  },
  {
    q: "How many reviews do I need to rank?",
    a: "There is no fixed number. Compare yourself with the businesses currently in the top three for your searches, and aim to match or beat their count and recency over time.",
  },
  {
    q: "Does posting on Google Business Profile help rankings?",
    a: "Posts rarely move rankings much on their own, but they keep your profile active and give searchers more reasons to call. Weekly posts with real job photos are a small, worthwhile habit.",
  },
  {
    q: "Should I use a virtual office to rank in another town?",
    a: "No. Virtual offices and mailboxes break Google's guidelines for Business Profiles, and listings at fake addresses are suspended, often taking their reviews with them. Use area pages to reach towns further away instead.",
  },
];

export default function MapPackPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="What decides which three businesses appear in the Google map pack, why yours might be missing, and the practical, rule-abiding steps contractors take to get into the top three and stay there."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>The map pack shows three businesses chosen mainly on relevance, distance and prominence.</li>
          <li>
            Your primary category, services and review content drive relevance; reviews and links drive prominence.
          </li>
          <li>You cannot change distance, so win near your address first and use area pages for towns further away.</li>
          <li>Never use fake addresses or keyword-stuffed names; suspensions remove your reviews from search.</li>
          <li>Track rankings on a grid across your service area, not from your office.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#what">What the map pack is and why it matters</a>
          </li>
          <li>
            <a href="#factors">How Google chooses the three businesses</a>
          </li>
          <li>
            <a href="#relevance">Relevance: match the search</a>
          </li>
          <li>
            <a href="#distance">Distance: work with it, not against it</a>
          </li>
          <li>
            <a href="#prominence">Prominence: become the trusted name</a>
          </li>
          <li>
            <a href="#missing">Why your business is not showing</a>
          </li>
          <li>
            <a href="#plan">A 90-day plan</a>
          </li>
          <li>
            <a href="#faq">People also ask</a>
          </li>
        </ol>
      </nav>

      <h2 id="what">What the map pack is and why it matters</h2>
      <p>
        Search for &quot;AC repair near me&quot; and Google usually shows a map with three businesses underneath it,
        above the regular results. That box is the map pack, sometimes called the local pack or 3-pack. For home service
        businesses it is often where most search calls come from, because each listing shows a phone button, star
        rating, opening hours and directions right in the results.
      </p>
      <p>
        The person searching is usually ready to book. They are not comparing ten websites. They glance at three
        listings, check the stars and the most recent reviews, and tap call. Being fourth means being invisible to most
        of them.
      </p>

      <h2 id="factors">How Google chooses the three businesses</h2>
      <p>Google explains its local ranking openly in its Business Profile help pages:</p>
      <blockquote>
        <p>&ldquo;Local results are based primarily on relevance, distance, and prominence.&rdquo;</p>
        <cite>
          Google Business Profile Help,{" "}
          <Ext href="https://support.google.com/business/answer/7091">How to improve your local ranking on Google</Ext>
        </cite>
      </blockquote>
      <p>
        Those three factors work together. A business that is very close but not relevant will not rank, and a famous
        business far away can lose to a nearer one. The table below maps each factor to the things you can actually
        change.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>Main signals</th>
              <th>How much you control it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Relevance</td>
              <td>Primary and secondary categories, services, business description, website content, review text</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Distance</td>
              <td>Your verified address or service area vs the searcher&apos;s location</td>
              <td>Low (you cannot move), but area pages help organically</td>
            </tr>
            <tr>
              <td>Prominence</td>
              <td>
                Review count, rating and recency, links to your site, citations, mentions, organic rankings, offline
                reputation
              </td>
              <td>Medium to high, over time</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="relevance">Relevance: match the search</h2>
      <p>Relevance is how well your business matches what someone typed. Google reads it from several places.</p>
      <h3>Your primary category</h3>
      <p>
        Your primary category is one of the strongest signals you control. If you are a plumber who also does water
        heaters, your primary category should be &quot;Plumber&quot;, with secondary categories covering the rest. Check
        what the top three competitors use; a missing secondary category is a common reason one business ranks for a
        service and another does not.
      </p>
      <h3>Services and description</h3>
      <p>
        List every service you want calls for in your profile, with a short description of each. Write a plain business
        description saying what you do and where. Clarity beats keyword stuffing.
      </p>
      <h3>Your website</h3>
      <p>
        The page your profile links to matters. If it is your homepage, it should say clearly what you do and which
        towns you serve. Strong service pages add relevance for each specific job, which is why a roofer with separate
        pages for repair, replacement and storm damage often outranks one with a single &quot;Roofing&quot; page.
      </p>
      <h3>Review content</h3>
      <p>
        When customers mention the service and town in their own words, for example &quot;they replaced our water heater
        in Katy the same day&quot;, that adds relevance too. You cannot write reviews for them, but you can ask them to
        mention what you did.
      </p>

      <h2 id="distance">Distance: work with it, not against it</h2>
      <p>
        You cannot move your business address, and you should never create fake addresses or virtual offices to get
        around distance. Google suspends those listings, and when a profile is suspended its reviews disappear from
        search too.
      </p>
      <p>What you can do:</p>
      <ul>
        <li>Set your service area accurately so Google knows where you work.</li>
        <li>Win the map pack hard near your real location first. That is where you have a natural advantage.</li>
        <li>
          Reach towns further away through organic results, with useful{" "}
          <Link href="/blog/service-area-pages-that-rank">service area pages</Link> on your website.
        </li>
        <li>If you genuinely open a second staffed location, it can have its own profile.</li>
      </ul>
      <p>
        This is also why rankings look different from different spots. A business can be number one a mile from its shop
        and missing five miles away. Good tracking checks rankings on a grid of points across your service area, not
        just from your own office.
      </p>

      <h2 id="prominence">Prominence: become the trusted name</h2>
      <p>Prominence is where most of the ongoing work happens. Google judges it from:</p>
      <ul>
        <li>
          <strong>Reviews.</strong> How many, how good, and how recent. A steady flow beats a burst from three years
          ago, and replying to reviews shows an active, real business.
        </li>
        <li>
          <strong>Links.</strong> Links to your website from other trusted, relevant sites, especially local ones such
          as suppliers, associations and local news.
        </li>
        <li>
          <strong>Citations and mentions.</strong> Consistent listings across directories, and mentions in local news
          and community sites.
        </li>
        <li>
          <strong>Organic rankings.</strong> Google says a business&apos;s position in web results also factors into
          local ranking, so a strong website helps your map rankings.
        </li>
      </ul>
      <p>
        Prominence is also what AI tools lean on when they recommend local businesses, which is why the same work helps
        your <Link href="/ai-search">AI search visibility</Link>.
      </p>

      <h2 id="profile">Getting the most from your Google Business Profile</h2>
      <p>
        Categories and services set relevance, but the rest of your profile shows Google and customers that you are an
        active, real business. These features are often ignored by competitors, which makes them an easy edge.
      </p>
      <ul>
        <li>
          <strong>Photos:</strong> add new job photos every week. Real photos of your team, vans and finished work build
          trust far better than stock images, and an active photo stream signals an active business.
        </li>
        <li>
          <strong>Posts:</strong> share a finished project, a seasonal tip or an offer weekly. Posts rarely move
          rankings on their own, but they keep the profile fresh and give searchers a reason to call you rather than the
          next listing.
        </li>
        <li>
          <strong>Questions and answers:</strong> add the questions customers ask you on the phone, and answer them
          yourself, so a stranger&apos;s guess is not the first thing people read.
        </li>
        <li>
          <strong>Review replies:</strong> reply to every review within a few days. Thank happy customers by name and
          the job, and respond calmly and specifically to complaints. Future customers read the replies.
        </li>
        <li>
          <strong>Attributes and hours:</strong> set emergency hours, online estimates and other attributes that apply.
          Accurate hours stop you showing as &quot;closed&quot; when someone searches at night.
        </li>
      </ul>

      <h2 id="vs">Map pack vs Local Services Ads vs organic results</h2>
      <p>
        A local search results page usually has three different places your business can appear. They work differently,
        and the strongest businesses show up in more than one.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Map pack</th>
              <th>Local Services Ads</th>
              <th>Organic results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cost</td>
              <td>Free, earned</td>
              <td>Pay per lead</td>
              <td>Free, earned</td>
            </tr>
            <tr>
              <td>Main driver</td>
              <td>Profile, reviews, distance</td>
              <td>Budget, verification, reviews</td>
              <td>Website pages, links</td>
            </tr>
            <tr>
              <td>Reach beyond your address</td>
              <td>Limited by distance</td>
              <td>Your chosen service area</td>
              <td>Good with area pages</td>
            </tr>
            <tr>
              <td>Speed to results</td>
              <td>Weeks to months</td>
              <td>Days</td>
              <td>Months</td>
            </tr>
            <tr>
              <td>When you stop</td>
              <td>Rankings mostly hold</td>
              <td>Leads stop immediately</td>
              <td>Rankings mostly hold</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Many contractors run ads while their organic presence grows, then reduce ad spend as the map pack and organic
        results take over. The two are not in conflict, and reviews help both.
      </p>

      <h2 id="grid">How to track map rankings properly</h2>
      <p>
        Checking your ranking by searching from your own office is misleading, because Google shows you results for your
        location, where you are strongest. A grid rank tracker checks the same search from many points across your
        service area, often a 5 by 5 or 7 by 7 grid, and shows your position at each point. The result looks like a heat
        map: strong near your address and weaker further out. As your relevance and prominence grow, the area where you
        rank in the top three spreads outward. It is the clearest way to see progress, and it is how I report map
        rankings to clients every month.
      </p>

      <h2 id="missing">Why your business is not showing on Google Maps</h2>
      <p>
        If you search for your own service and cannot find yourself at all, work through these common causes before
        anything else.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>How to check</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Profile not verified</td>
              <td>Business Profile dashboard</td>
              <td>Complete verification</td>
            </tr>
            <tr>
              <td>Suspended profile</td>
              <td>Warning in your dashboard</td>
              <td>Fix the guideline issue, then request reinstatement</td>
            </tr>
            <tr>
              <td>Wrong primary category</td>
              <td>Compare with top three competitors</td>
              <td>Change to the most specific relevant category</td>
            </tr>
            <tr>
              <td>Searching too far away</td>
              <td>Search from different locations</td>
              <td>Focus on nearby areas first; build area pages</td>
            </tr>
            <tr>
              <td>Very few reviews</td>
              <td>Compare counts with the top three</td>
              <td>Start a consistent review request process</td>
            </tr>
            <tr>
              <td>Spam competitors</td>
              <td>Fake names, addresses or duplicate listings</td>
              <td>Report them through Google&apos;s official channels</td>
            </tr>
            <tr>
              <td>Duplicate profiles</td>
              <td>Search your name and phone on Maps</td>
              <td>Remove or merge duplicates</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Spam is worth a special mention. Trades like garage door repair and locksmiths are full of fake listings. Google
        provides a{" "}
        <Ext href="https://support.google.com/business/contact/business_redressal_form">
          Business Redressal Complaint Form
        </Ext>{" "}
        for reporting them, and removing a few fake competitors can lift real businesses noticeably.
      </p>

      <h2 id="plan">A practical 90-day plan</h2>
      <p>Here is the order of work I use with new clients, broken into three months.</p>
      <h3>Month 1: fix the foundations</h3>
      <ol>
        <li>Fix your categories, services, service area and hours.</li>
        <li>Add real photos and start posting updates weekly.</li>
        <li>Set up a review request after every job, and reply to every review.</li>
        <li>Make sure the page your profile links to is fast and clearly relevant.</li>
      </ol>
      <h3>Month 2: build relevance</h3>
      <ol>
        <li>Build a page for each core service you want more calls for.</li>
        <li>Clean up citations so your details are consistent everywhere.</li>
        <li>Add area pages for your two or three most important nearby towns.</li>
      </ol>
      <h3>Month 3: build prominence</h3>
      <ol>
        <li>Earn your first local links from suppliers, associations and sponsorships.</li>
        <li>Keep reviews coming in every week.</li>
        <li>Track rankings on a grid and adjust where you are weakest.</li>
      </ol>
      <p>
        The full list of tasks is in my{" "}
        <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist</Link>, and the realistic timeline
        for results is in <Link href="/blog/how-long-does-local-seo-take">how long local SEO takes</Link>.
      </p>

      <div className="note">
        <p>
          <strong>A note on shortcuts:</strong> keyword-stuffed business names, fake addresses and bought reviews can
          work for a few weeks. Then the listing gets suspended or reported by a competitor, and the reviews you worked
          for disappear with it. It is never worth the risk.
        </p>
      </div>

      <h2>How long does it take to reach the top three?</h2>
      <p>
        Profile fixes are often picked up within weeks. Moving into the top three for competitive searches in a large
        city usually takes several months of steady work on reviews, content and links. In smaller towns and less
        crowded trades it can be much faster. The trades also behave differently: roofing and HVAC are seasonal, while{" "}
        <Link href="/local-seo/plumbing-seo">plumbing</Link> and{" "}
        <Link href="/local-seo/pest-control-seo">pest control</Link> have steadier demand all year.
      </p>
      <p>
        Want to know where you stand? <Link href="/book-a-call">Book a free strategy call</Link> and I will compare your
        profile with the three businesses beating you in the map, or see how I handle it in my{" "}
        <Link href="/local-seo">Local SEO service</Link>.
      </p>
    </ArticleLayout>
  );
}
