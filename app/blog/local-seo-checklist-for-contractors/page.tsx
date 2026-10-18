import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("local-seo-checklist-for-contractors")!;

export const metadata = pageMeta({
  title: "Local SEO Checklist for Contractors (2026): Step by Step",
  description:
    "A complete local SEO checklist for roofers, plumbers, HVAC and other contractors: Google Business Profile, website, citations, reviews, links and AI search.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "What is local SEO?",
    a: "Local SEO is the work of making a business show up when nearby customers search for its services, in the Google map pack, the organic results below it and the answers AI tools give. It covers your Google Business Profile, website, reviews, citations and local links.",
  },
  {
    q: "How much does local SEO cost?",
    a: "Agency retainers commonly range from a few hundred to a few thousand dollars a month depending on market, competition and scope. My plans are fixed monthly prices with no setup fees, shown on the pricing page.",
  },
  {
    q: "Is local SEO worth it for small businesses?",
    a: "For most home service businesses, yes, because local searches come from people ready to book. Unlike ads, rankings keep bringing in calls after the work slows down, and the same work also helps you appear in AI recommendations.",
  },
  {
    q: "What is the difference between local SEO and regular SEO?",
    a: "Regular SEO aims to rank pages nationally or globally. Local SEO focuses on searches with local intent, such as 'plumber near me', and adds the Google Business Profile, map pack rankings, reviews and local citations, where distance from the searcher matters.",
  },
  {
    q: "Can I do local SEO myself?",
    a: "Yes. Most of this checklist needs time and consistency more than technical skill. Owners who do it themselves usually manage the Google Business Profile and reviews well, and struggle most with website fixes, content and links. Many start themselves and hand over once the business grows.",
  },
  {
    q: "What is the most important local SEO task for contractors?",
    a: "A complete, accurate Google Business Profile with the right primary category, followed by a steady flow of genuine reviews. Those two affect map pack rankings more directly than anything else you control.",
  },
  {
    q: "How often should I work on local SEO?",
    a: "Weekly for profile posts, photos and review replies, monthly for new pages, links and reporting, and quarterly for a full review of categories, competitors and citations.",
  },
  {
    q: "Does local SEO still matter with AI search?",
    a: "More than ever. AI tools like ChatGPT and Google's AI Overviews build local recommendations from the same profiles, reviews, listings and pages that local SEO improves.",
  },
  {
    q: "How long does it take to see results?",
    a: "Profile and technical fixes often show movement within weeks. Competitive searches in larger cities usually take several months of consistent work.",
  },
  {
    q: "Should I show my home address on my Google Business Profile?",
    a: "If customers do not visit you, set the profile up as a service-area business and hide the address. You still need a real address to verify the profile, but it does not have to be shown publicly.",
  },
  {
    q: "What are citations in local SEO?",
    a: "Citations are listings of your business name, address and phone number on other websites, such as directories, Bing Places, Apple Business Connect and industry sites. Consistent citations help confirm your business is real and where it says it is.",
  },
  {
    q: "How many Google reviews do I need?",
    a: "There is no magic number. Look at the businesses currently in the top three for your main searches and aim to match or beat their review count, rating and how recently they received reviews.",
  },
];

export default function LocalSeoChecklistPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="A practical, step-by-step local SEO checklist for roofers, plumbers, HVAC, septic and other home service contractors. Work through it in order, tick off each item, and you will have the same foundation professional agencies build."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            Google ranks local results mainly on relevance, distance and prominence; every task below improves one of
            them.
          </li>
          <li>Your Google Business Profile and a steady flow of genuine reviews are the two biggest levers.</li>
          <li>Build one page per money service and genuinely local pages for your main towns.</li>
          <li>Consistent listings, local links and crawlable pages also make you easier for AI tools to recommend.</li>
          <li>Keep a weekly, monthly and quarterly routine; local SEO compounds over time.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#what">What local SEO is, and how Google ranks local businesses</a>
          </li>
          <li>
            <a href="#before">Before you start: research</a>
          </li>
          <li>
            <a href="#gbp">Google Business Profile checklist</a>
          </li>
          <li>
            <a href="#website">Website checklist</a>
          </li>
          <li>
            <a href="#citations">Citations and listings</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#links">Local links and mentions</a>
          </li>
          <li>
            <a href="#ai">AI search visibility</a>
          </li>
          <li>
            <a href="#tracking">Tracking and reporting</a>
          </li>
          <li>
            <a href="#mistakes">Common mistakes</a>
          </li>
          <li>
            <a href="#routine">Your ongoing routine</a>
          </li>
          <li>
            <a href="#faq">People also ask</a>
          </li>
        </ol>
      </nav>

      <p>
        Most contractors get their best leads from people who are ready to book right now: someone with a leaking roof,
        a dead furnace or a backed-up drain. Those people do not scroll through ten pages of results. They look at the
        map, check a few reviews and call. Local SEO is the work that puts your business in front of them at that
        moment.
      </p>
      <p>
        This checklist is the same order of work I use for client accounts. It starts with the things that move rankings
        fastest and ends with the habits that keep you there. If you would rather have it done for you, that is what my{" "}
        <Link href="/local-seo">Local SEO service</Link> covers, but everything below is something you can do yourself.
      </p>

      <h2 id="what">What local SEO is, and how Google ranks local businesses</h2>
      <p>
        Local SEO is the process of making your business show up when people nearby search for the services you offer.
        It covers three places: the Google map pack (the box of three businesses with a map), the regular organic
        results below it, and increasingly the answers AI tools give when someone asks for a recommendation.
      </p>
      <p>Google is unusually open about how it ranks local results. Its own help page puts it plainly:</p>
      <blockquote>
        <p>&ldquo;Local results are based primarily on relevance, distance, and prominence.&rdquo;</p>
        <cite>
          Google Business Profile Help,{" "}
          <Ext href="https://support.google.com/business/answer/7091">How to improve your local ranking on Google</Ext>
        </cite>
      </blockquote>
      <p>Every item on this checklist improves one of those three factors:</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>What it means</th>
              <th>What you control</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Relevance</td>
              <td>How well your business matches the search</td>
              <td>Categories, services, website pages, review content</td>
            </tr>
            <tr>
              <td>Distance</td>
              <td>How far you are from the searcher or the place in the search</td>
              <td>Service area settings and area pages (not your address)</td>
            </tr>
            <tr>
              <td>Prominence</td>
              <td>How well known and trusted your business is</td>
              <td>Reviews, links, citations, mentions, organic rankings</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Google also notes that there is no way to request or pay for a better local ranking. Ads appear above the map,
        but the map pack itself is earned.
      </p>

      <h2 id="before">Before you start: research</h2>
      <p>
        Spend an hour on research before changing anything. It stops you optimizing for the wrong searches and gives you
        a baseline to measure against.
      </p>
      <ul>
        <li>
          <strong>List your money services.</strong> Write down the five to ten jobs you most want more of, ranked by
          profit, not volume. A plumber might put water heater replacements and repipes above clogged toilets.
        </li>
        <li>
          <strong>List your target towns.</strong> Start with where you are based, then the nearby towns and suburbs you
          actually want to drive to.
        </li>
        <li>
          <strong>Search like a customer.</strong> Search each service with &quot;near me&quot; and with each town name.
          Note who appears in the map pack every time. Those are your real competitors.
        </li>
        <li>
          <strong>Study the top three.</strong> Note their primary category, review count, rating, how recent their
          reviews are, and whether they have a page for each service on their website.
        </li>
        <li>
          <strong>Record a baseline.</strong> Screenshot where you appear today. Even a simple spreadsheet of
          &quot;service + town = position&quot; is enough to prove progress later.
        </li>
      </ul>

      <h2 id="gbp">Google Business Profile checklist</h2>
      <p>
        Your Google Business Profile (GBP) is the single biggest lever for the map pack. Work through every field. A
        surprising number of contractors leave half of it empty.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>What good looks like</th>
              <th>Common mistake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Business name</td>
              <td>Your real, legal or trading name</td>
              <td>Adding keywords like &quot;Best Roofer Tampa&quot;, which risks suspension</td>
            </tr>
            <tr>
              <td>Primary category</td>
              <td>The most specific category for your main service, e.g. &quot;Roofing contractor&quot;</td>
              <td>A broad category like &quot;Contractor&quot;</td>
            </tr>
            <tr>
              <td>Secondary categories</td>
              <td>Every other category that genuinely applies</td>
              <td>Missing categories competitors use</td>
            </tr>
            <tr>
              <td>Services</td>
              <td>Every service you want calls for, with short descriptions</td>
              <td>Leaving the defaults only</td>
            </tr>
            <tr>
              <td>Service area</td>
              <td>The towns and areas you really cover</td>
              <td>Listing an entire state or huge radius</td>
            </tr>
            <tr>
              <td>Hours</td>
              <td>Accurate hours, including emergency availability</td>
              <td>Saying 24/7 when calls go to voicemail</td>
            </tr>
            <tr>
              <td>Photos</td>
              <td>Real job photos, team, vehicles, before and after</td>
              <td>Stock photos or nothing added for months</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>What you do, where, and why customers choose you</td>
              <td>Keyword stuffing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>Verify the profile, and make sure only people you trust have owner or manager access.</li>
        <li>Link the profile to the most relevant page on your site, usually the homepage or main service page.</li>
        <li>Turn on messaging only if someone will answer quickly.</li>
        <li>Post an update at least weekly: a finished job, a seasonal tip, an offer.</li>
        <li>Answer common questions in the Q&amp;A section yourself, before strangers do.</li>
      </ul>
      <p>
        For a deeper dive on the map specifically, read{" "}
        <Link href="/blog/how-to-rank-in-google-map-pack">how to rank in the Google map pack</Link>.
      </p>

      <h2 id="website">Website checklist</h2>
      <p>
        Google uses your website to judge relevance and trust, and your organic rankings feed into map rankings too.
        Most contractor sites lose out for the same few reasons.
      </p>
      <ul>
        <li>
          <strong>One page per core service.</strong> A single &quot;Services&quot; page listing everything cannot rank
          for all of them. Each money service needs its own page with real detail, photos and FAQs.
        </li>
        <li>
          <strong>Area pages for your main towns.</strong> Genuinely useful pages for the places you serve, not copies
          with the town name swapped. See{" "}
          <Link href="/blog/service-area-pages-that-rank">how to write service area pages that rank</Link>.
        </li>
        <li>
          <strong>Your name, address and phone on every page,</strong> matching your profile exactly.
        </li>
        <li>
          <strong>Clear titles and headings</strong> that include the service and the main town.
        </li>
        <li>
          <strong>Fast on phones.</strong> Most local searches happen on mobile. Compress images and remove heavy
          plugins.
        </li>
        <li>
          <strong>Indexed.</strong> Check Google Search Console to confirm your important pages are actually in
          Google&apos;s index.
        </li>
        <li>
          <strong>LocalBusiness schema</strong> describing your business in structured data.
        </li>
        <li>
          <strong>Easy to contact.</strong> A tap-to-call button and a short form on every page.
        </li>
      </ul>
      <p>
        If any of this sounds daunting, my guide to{" "}
        <Link href="/blog/technical-seo-for-service-business-websites">
          technical SEO for service business websites
        </Link>{" "}
        walks through each fix, and <Link href="/seo-services/on-page-seo">On-Page SEO</Link> covers the page-by-page
        work.
      </p>

      <h2 id="citations">Citations and listings</h2>
      <p>
        A citation is any listing of your business name, address and phone number on another site. Consistent citations
        confirm to Google, and to AI tools, that your business is real and where it says it is.
      </p>
      <ol>
        <li>Pick one exact format for your name, address and phone, and use it everywhere.</li>
        <li>Claim Bing Places and Apple Business Connect. Many competitors never do.</li>
        <li>Claim the main directories in your country, such as Yelp, BBB or industry-specific sites.</li>
        <li>Fix or close old listings with outdated phone numbers or addresses.</li>
        <li>Add manufacturer and association listings where you are certified or a member.</li>
      </ol>
      <p>
        You do not need hundreds of citations. A few dozen accurate, relevant ones beat a mass submission to low-quality
        directories.
      </p>

      <h2 id="reviews">Reviews</h2>
      <p>
        Reviews influence both rankings and whether people call. They are also one of the main things AI tools read when
        deciding who to recommend.
      </p>
      <ul>
        <li>
          Ask every customer, ideally right after the job, with a direct link to your review form. Word-for-word
          scripts are in <Link href="/blog/how-to-get-more-google-reviews">how to get more Google reviews</Link>.
        </li>
        <li>Ask them to mention the service and the town in their own words.</li>
        <li>Reply to every review, positive or negative, within a few days.</li>
        <li>Never buy reviews, review-gate (only asking happy customers through a filter), or write your own.</li>
        <li>Aim for a steady flow every month rather than a burst once a year.</li>
      </ul>
      <p>
        Fake reviews are not just against Google&apos;s rules. In the US, the{" "}
        <Ext href="https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers">
          FTC&apos;s rule on consumer reviews and testimonials
        </Ext>{" "}
        allows penalties for buying or faking them.
      </p>

      <h2 id="links">Local links and mentions</h2>
      <p>
        Links from other trusted websites build prominence. For contractors, the best links are local and relevant, and
        most come from relationships you already have.
      </p>
      <ul>
        <li>Suppliers and manufacturers who list approved installers</li>
        <li>Trade associations and chambers of commerce</li>
        <li>Local sponsorships: youth sports, charity events, community projects</li>
        <li>Local news coverage of a project, storm response or community work</li>
        <li>Partners such as real estate agents, builders and property managers</li>
      </ul>
      <p>
        Avoid buying links in bulk. They rarely help local rankings and can cause problems. My{" "}
        <Link href="/seo-services/link-building">Link Building service</Link> focuses only on real local links.
      </p>

      <h2 id="ai">AI search visibility</h2>
      <p>
        More homeowners now ask ChatGPT, Gemini, Perplexity or Google&apos;s AI Overviews who to call. The good news is
        that the checklist above already does most of the work, because those tools lean on the same sources. A few
        extra steps help:
      </p>
      <ul>
        <li>Make sure your details are identical across Google, Bing, Apple and the main directories.</li>
        <li>Write service pages that answer common questions directly: what, where, how fast and roughly how much.</li>
        <li>Check that your site does not block search and AI crawlers in robots.txt or a security plugin.</li>
        <li>Ask a few real customer questions in AI tools each month and note whether you are named.</li>
      </ul>
      <p>
        The full process is in{" "}
        <Link href="/blog/get-recommended-by-chatgpt">
          how to get your business recommended by ChatGPT and AI search
        </Link>
        , and it is included in my <Link href="/ai-search">GEO &amp; AI Visibility</Link> service.
      </p>

      <h2 id="tracking">Tracking and reporting</h2>
      <p>You cannot improve what you do not measure. Set these up once and check them monthly.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>What to track</th>
              <th>Where</th>
              <th>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Search clicks and impressions</td>
              <td>
                <Ext href="https://search.google.com/search-console">Google Search Console</Ext>
              </td>
              <td>Shows which searches bring people to your site</td>
            </tr>
            <tr>
              <td>Profile calls, directions and website clicks</td>
              <td>Google Business Profile performance</td>
              <td>Shows how many actions the map drives</td>
            </tr>
            <tr>
              <td>Map rankings across your area</td>
              <td>A grid rank tracker</td>
              <td>Rankings change street by street</td>
            </tr>
            <tr>
              <td>Calls and forms by source</td>
              <td>Call tracking and analytics</td>
              <td>Connects SEO to booked jobs</td>
            </tr>
            <tr>
              <td>Reviews</td>
              <td>Your profile and competitors&apos;</td>
              <td>Count, rating and recency vs the top three</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="mistakes">Common local SEO mistakes contractors make</h2>
      <p>
        Most of the problems I see on new accounts are not technical. They are small decisions that quietly hold a
        business back for years.
      </p>
      <ul>
        <li>
          <strong>Keyword-stuffed business names.</strong> They can work briefly, but competitors report them and Google
          can suspend the profile, taking your reviews offline with it (
          <Link href="/blog/google-business-profile-suspended">what to do if yours is suspended</Link>).
        </li>
        <li>
          <strong>Virtual offices and fake addresses.</strong> Trying to rank in a town where you have no real location
          is one of the fastest ways to lose a profile entirely.
        </li>
        <li>
          <strong>Copy-paste town pages.</strong> Dozens of pages with only the town name changed rarely rank and can be
          treated as doorway pages.
        </li>
        <li>
          <strong>Starting before the busy season.</strong> Roofers who start SEO after the first storm, or HVAC
          companies who start in June, rank just as demand drops. Start a season early.
        </li>
        <li>
          <strong>Ignoring calls.</strong> Rankings only matter if someone answers. Missed calls and slow replies waste
          every lead SEO brings in.
        </li>
        <li>
          <strong>Measuring the wrong thing.</strong> Ranking for a broad term you never get jobs from is a vanity
          metric. Track calls and booked jobs by service.
        </li>
      </ul>

      <h2 id="routine">Your ongoing routine</h2>
      <p>Local SEO is not a one-off project. Once the foundation is in, keep a simple rhythm:</p>
      <ul>
        <li>
          <strong>Weekly:</strong> one profile post, new job photos, reply to reviews and questions.
        </li>
        <li>
          <strong>Monthly:</strong> one or two new or improved pages, one or two new local links or mentions, check
          rankings and calls.
        </li>
        <li>
          <strong>Quarterly:</strong> review categories, services and competitors; refresh citations; check AI answers.
        </li>
        <li>
          <strong>Before your busy season:</strong> update seasonal pages and profile content a couple of months early.
        </li>
      </ul>
      <p>
        Wondering how long until it pays off? I broke down a realistic timeline in{" "}
        <Link href="/blog/how-long-does-local-seo-take">how long local SEO takes</Link>. For trade-specific advice, see
        the pages for <Link href="/local-seo/roofing-seo">roofers</Link>,{" "}
        <Link href="/local-seo/plumbing-seo">plumbers</Link>, <Link href="/local-seo/hvac-seo">HVAC companies</Link> and{" "}
        <Link href="/industries">60+ other trades</Link>.
      </p>

      <div className="note">
        <p>
          <strong>Short on time?</strong> If you only do three things this month, make them these: complete every field
          of your Google Business Profile, ask every customer for a review, and build a proper page for your single most
          profitable service.
        </p>
      </div>

      <p>
        If you want a second pair of eyes, <Link href="/book-a-call">book a free strategy call</Link>. I will go through
        your profile, website and top competitors and tell you which items on this list matter most for your business.
        Plans start at the prices on my <Link href="/pricing">pricing page</Link>.
      </p>
    </ArticleLayout>
  );
}
