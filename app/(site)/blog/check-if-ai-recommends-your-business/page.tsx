import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { AI_PLAN } from "@/lib/pricing";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("check-if-ai-recommends-your-business")!;

export const metadata = pageMeta({
  title: "Does ChatGPT Recommend Your Business? How to Check & Fix It",
  description:
    "A step-by-step way to check whether ChatGPT, Gemini, Perplexity and Google AI Overviews recommend your home service business, with test prompts and a fix map.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How do I know if ChatGPT recommends my business?",
    a: "Ask it the questions your customers would ask, such as who are the best plumbers in your town, from a fresh chat with search enabled. Repeat each question a few times and on different tools, and record whether you are named, how you are described and which sources are cited.",
  },
  {
    q: "Why does ChatGPT recommend my competitor and not me?",
    a: "AI assistants lean on sources they can find and trust: review sites, directories, local news, Business Profiles and clear website content. Competitors who are mentioned more often, in more places, with consistent details and strong reviews, are easier for AI tools to recommend.",
  },
  {
    q: "Can I pay to be recommended by ChatGPT?",
    a: "No. There is no way to buy a place in ChatGPT's or Gemini's organic answers. Visibility comes from your reputation and information across the web, which you can improve over time.",
  },
  {
    q: "How often should I check AI answers?",
    a: "Monthly is enough for most businesses. AI answers vary from one run to the next, so track a fixed set of questions over time rather than reacting to a single answer.",
  },
  {
    q: "Is AI search replacing Google for local businesses?",
    a: "Not replacing, but adding to it. Most local searches still happen on Google and Maps, and much of what AI tools say about local businesses comes from the same signals that drive local SEO. Strong local SEO is the foundation for AI visibility.",
  },
];

export default function CheckIfAiRecommendsYourBusinessPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="More homeowners now ask AI assistants who to call. Here is a simple, repeatable way to check whether ChatGPT, Gemini, Perplexity and Google's AI answers name your business, and what to fix when they don't."
    >
      <p>A growing number of homeowners skip the search results and ask an AI assistant directly: &quot;Who&apos;s the best roofer in McKinney?&quot; or &quot;Which plumber should I call for a slab leak in Frisco?&quot;. The assistant names two or three businesses. If you are not one of them, that customer may never see your website or your reviews.</p>
      <p>The first step is finding out where you stand. This guide gives you a repeatable check you can run in about 30 minutes a month, plus a map from each problem to its fix. For the full strategy behind AI recommendations, see <Link href="/blog/get-recommended-by-chatgpt">how to get recommended by ChatGPT and AI search</Link>.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Test the questions your customers actually ask, on several AI tools.</li>
      <li>AI answers vary, so repeat each question and track results over time.</li>
      <li>Record not just whether you are named, but how you are described and which sources are cited.</li>
      <li>Most fixes are local SEO fundamentals: reviews, listings, mentions and clear service pages.</li>
      <li>Check monthly against a fixed set of questions.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#why">Why this is worth checking</a></li>
      <li><a href="#prompts">Step 1: Write your test questions</a></li>
      <li><a href="#run">Step 2: Run the check</a></li>
      <li><a href="#record">Step 3: Record the results</a></li>
      <li><a href="#fix">Step 4: Match each problem to a fix</a></li>
      <li><a href="#sources">The sources that feed AI answers</a></li>
      <li><a href="#tools-differ">How the main AI tools differ</a></li>
      <li><a href="#website">Make your website easy to quote</a></li>
      <li><a href="#report">Example: a monthly AI visibility summary</a></li>
      <li><a href="#dont">What not to do</a></li>
      <li><a href="#next">Let me track it for you</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="why">Why this is worth checking</h2>
      <p>AI tools do not rank websites the way Google&apos;s blue links do. They summarize what they find across the web and recommend a handful of businesses. That changes what matters:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Classic search</th><th>AI answers</th></tr>
      </thead>
      <tbody>
      <tr><td>Ten results, the customer chooses</td><td>Two to five names, the assistant chooses</td></tr>
      <tr><td>Your page ranking matters most</td><td>Mentions and reputation across many sources matter more</td></tr>
      <tr><td>Rankings are fairly stable day to day</td><td>Answers can change from one run to the next</td></tr>
      <tr><td>Easy to check your position</td><td>You have to ask, repeatedly, to see a pattern</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="prompts">Step 1: Write your test questions</h2>
      <p>Write 10 to 20 questions a real customer would ask. Mix these types:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Question type</th><th>Example</th></tr>
      </thead>
      <tbody>
      <tr><td>Best in town</td><td>Who are the best roofing companies in Allen, Texas?</td></tr>
      <tr><td>Specific job</td><td>Who should I call for a slab leak repair in Frisco?</td></tr>
      <tr><td>Urgent</td><td>Emergency AC repair near McKinney open on Sunday</td></tr>
      <tr><td>Trust</td><td>Which septic companies near Asheville have the best reviews?</td></tr>
      <tr><td>Comparison</td><td>Is [your business] or [competitor] better for water heater replacement?</td></tr>
      <tr><td>Brand check</td><td>What do you know about [your business name] in [town]?</td></tr>
      </tbody>
      </table>
      </div>
      <p>Use your real towns and services. The brand-check question is important: it shows what AI tools believe about you, which can be outdated or wrong.</p>
      <h2 id="run">Step 2: Run the check</h2>
      <ol>
      <li><strong>Use several tools:</strong> ChatGPT (with search on), Google Gemini, Perplexity, Microsoft Copilot, and Google Search itself for AI Overviews and AI Mode.</li>
      <li><strong>Start a fresh chat</strong> for each question, logged out or in a private window where possible, so past conversations do not influence answers.</li>
      <li><strong>Ask each question two or three times.</strong> Answers vary. A business named in three out of three runs is in a much stronger position than one named once.</li>
      <li><strong>Click the sources</strong> the tool cites. They tell you where its information comes from.</li>
      </ol>
      <h2 id="record">Step 3: Record the results</h2>
      <p>Keep a simple tracking sheet. Each month, fill in one row per question per tool:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Question</th><th>Tool</th><th>Named? (runs out of 3)</th><th>Position</th><th>How you were described</th><th>Competitors named</th><th>Sources cited</th></tr>
      </thead>
      <tbody>
      <tr><td>Best roofers in Allen</td><td>ChatGPT</td><td>1/3</td><td>3rd</td><td>&quot;Local roofer with good reviews&quot;</td><td>Competitor A, B</td><td>Yelp, BBB, a local news article</td></tr>
      <tr><td>Slab leak repair Frisco</td><td>Perplexity</td><td>0/3</td><td>-</td><td>-</td><td>Competitor C</td><td>Competitor C&apos;s service page, Angi</td></tr>
      </tbody>
      </table>
      </div>
      <p>After two or three months, patterns appear: which tools mention you, which questions you are missing from, and which sources keep showing up.</p>
      <h2 id="fix">Step 4: Match each problem to a fix</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>What you see</th><th>Likely cause</th><th>Fix</th></tr>
      </thead>
      <tbody>
      <tr><td>Never named for anything</td><td>Weak presence on the sources AI tools read</td><td>Complete and consistent listings, more reviews, local mentions. See the <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist</Link></td></tr>
      <tr><td>Named for general questions, not specific jobs</td><td>No clear page for that service</td><td>Build an answer-first service page for each job. See <Link href="/blog/high-value-plumbing-keywords">high-value service keywords</Link></td></tr>
      <tr><td>Described wrongly (old services, wrong area)</td><td>Outdated or inconsistent information online</td><td>Update your profile, directories and website so every source agrees</td></tr>
      <tr><td>Competitor cited from a review site you are not on</td><td>Missing from a source AI trusts in your trade</td><td>Claim and complete that listing, and ask some customers to review there too</td></tr>
      <tr><td>Competitor cited from local news or a &quot;best of&quot; list</td><td>Missing third-party mentions</td><td>Earn local coverage and mentions. See <Link href="/blog/local-link-building-for-contractors">local link building ideas</Link></td></tr>
      <tr><td>Named, but low in the list</td><td>Fewer or older reviews than competitors</td><td>A steady review system. See <Link href="/blog/how-to-get-more-google-reviews">review scripts</Link></td></tr>
      <tr><td>Not in Google AI Overviews but ranking organically</td><td>Page does not answer the question clearly near the top</td><td>Rewrite the top of the page to answer the question directly</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="sources">The sources that feed AI answers</h2>
      <p>For local businesses, AI tools usually draw on a familiar set of sources:</p>
      <ul>
      <li>Your Google Business Profile and reviews (especially for Gemini and AI Overviews)</li>
      <li>Bing Places, which feeds Microsoft Copilot and is used by some other assistants</li>
      <li>Apple Business Connect, for Siri and Apple Maps</li>
      <li>Review and directory sites in your trade: Yelp, BBB, Angi, Houzz, Nextdoor</li>
      <li>Local news, community sites and &quot;best of&quot; lists</li>
      <li>Your own website, especially clear service pages, FAQs and <Link href="/blog/local-business-schema-for-contractors">structured data</Link></li>
      </ul>
      <p>Notice how much overlaps with local SEO. That is why the <Link href="/blog/geo-vs-seo-home-services">GEO vs SEO</Link> debate matters less than it sounds: for a local business, most of the work is shared.</p>
      <h2 id="tools-differ">How the main AI tools differ</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Tool</th><th>Where its local answers tend to come from</th><th>What to check first</th></tr>
      </thead>
      <tbody>
      <tr><td>Google AI Overviews and AI Mode</td><td>Google&apos;s index, Business Profiles and reviews</td><td>Your Business Profile, reviews and service pages</td></tr>
      <tr><td>Gemini</td><td>Google&apos;s index and Maps data</td><td>Same as above</td></tr>
      <tr><td>ChatGPT (with search)</td><td>Web search results, directories, review sites and news</td><td>Directory listings, third-party mentions, your website</td></tr>
      <tr><td>Microsoft Copilot</td><td>Bing&apos;s index and Bing Places</td><td>Your Bing Places listing</td></tr>
      <tr><td>Perplexity</td><td>Web sources it cites openly</td><td>The sources it cites for your competitors</td></tr>
      </tbody>
      </table>
      </div>
      <p>Tools and their sources change often, so treat this as a starting point and let the cited sources in your own checks guide you.</p>
      <h2 id="website">Make your website easy to quote</h2>
      <blockquote>
      <p>&quot;To be eligible to be shown as a supporting link in AI Overviews or AI Mode, a page must be indexed and eligible to be shown in Google Search with a snippet.&quot;</p>
      <cite>Google Search Central, <Ext href="https://developers.google.com/search/docs/appearance/ai-features">AI features and your website</Ext></cite>
      </blockquote>
      <p>In other words, the basics of SEO come first. Beyond that, AI tools quote pages that answer a question clearly.
      Check your main service pages against this list:</p>
      <ul>
      <li><strong>Answer first.</strong> The first two sentences say what you do, where, and how quickly. &quot;We repair and replace water heaters in McKinney, Allen and Frisco, usually the same day.&quot;</li>
      <li><strong>Specific facts.</strong> Years in business, licenses, brands you install, warranty terms, service area towns.</li>
      <li><strong>Real FAQs</strong> written from customer questions, with direct answers.</li>
      <li><strong>Consistent details</strong> that match your profile and directories exactly.</li>
      <li><strong>Structured data</strong> that states your business facts clearly. See <Link href="/blog/local-business-schema-for-contractors">local business schema for contractors</Link>.</li>
      <li><strong>Crawlable pages.</strong> Make sure your site does not block the AI crawlers you want to be found by.</li>
      </ul>
      <h2 id="report">Example: a monthly AI visibility summary</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Measure</th><th>Last month</th><th>This month</th></tr>
      </thead>
      <tbody>
      <tr><td>Questions where you were named at least once</td><td>6 of 20</td><td>9 of 20</td></tr>
      <tr><td>Average runs named (out of 3), where named</td><td>1.5</td><td>2.1</td></tr>
      <tr><td>Brand description accurate?</td><td>No (old service area)</td><td>Yes</td></tr>
      <tr><td>New sources citing you</td><td>-</td><td>Chamber directory, local news article</td></tr>
      </tbody>
      </table>
      </div>
      <p>These numbers are illustrative. The point is the trend: more questions where you appear, more consistently, with accurate details.</p>
      <h2 id="dont">What not to do</h2>
      <ul>
      <li>Do not flood the web with fake reviews or AI-generated &quot;best of&quot; lists naming yourself. It is against platform policies and AI tools increasingly filter it.</li>
      <li>Do not panic over one answer. Track the pattern.</li>
      <li>Do not ignore Google. Most local customers still search there, and many AI answers draw on the same signals.</li>
      </ul>
      <h2 id="next">Let me track it for you</h2>
      <p>Running these checks every month takes time, and turning the results into fixes is the real work. <Link href="/ai-search">GEO and AI visibility</Link> is included from the {AI_PLAN.name} plan, which tracks 25 AI questions for your business monthly, alongside your Local SEO. See the <Link href="/pricing">pricing page</Link> for details, or book a <Link href="/book-a-call">free strategy call</Link> and I&apos;ll show you what AI tools say about your business today.</p>
    </ArticleLayout>
  );
}
