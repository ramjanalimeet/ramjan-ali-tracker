import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("geo-vs-seo-home-services")!;

export const metadata = pageMeta({
  title: "GEO vs SEO for Home Service Businesses: What Matters",
  description:
    "What generative engine optimization (GEO) really means for roofers, plumbers and HVAC companies, how it differs from local SEO, and where to spend first.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "What is GEO?",
    a: "GEO stands for generative engine optimization: making your business easy for AI tools such as ChatGPT, Gemini, Perplexity, Copilot and Google's AI Overviews to find, understand, trust and mention in their answers.",
  },
  {
    q: "Is GEO replacing SEO?",
    a: "No. For local businesses, Google Search and Maps still drive most calls, and AI tools rely heavily on the same signals SEO builds. GEO is an extra layer on top of SEO, not a replacement.",
  },
  {
    q: "Is GEO the same as AEO or AI SEO?",
    a: "They are overlapping labels. AEO (answer engine optimization) and AI SEO describe the same goal of appearing in AI-generated answers. The names differ more than the work.",
  },
  {
    q: "Should a small contractor pay for GEO separately?",
    a: "Usually not as a standalone service. If your profile, reviews and website are weak, spend there first. Once the foundations are in place, GEO work such as listings beyond Google, answer-first pages and prompt tracking adds real value.",
  },
  {
    q: "How do you measure GEO?",
    a: "By asking a fixed set of real customer questions in each AI tool every month and recording how often, and how accurately, your business is mentioned, alongside normal SEO metrics.",
  },
  {
    q: "Do I need a separate website for AI search?",
    a: "No. AI tools read the same website as Google. Making your existing pages clearer, faster and more specific is what helps.",
  },
  {
    q: "Does GEO work for service-area businesses without a storefront?",
    a: "Yes. AI tools recommend service-area businesses from their profiles, reviews and pages, just like the map pack does. Clear service area information on your site and profile helps them match you to the right towns.",
  },
  {
    q: "How much should a small business spend on GEO?",
    a: "For most small home service businesses, GEO should be part of an SEO plan rather than a separate budget line. Spend on the profile, reviews, listings and pages first, then add answer-first rewrites and AI tracking.",
  },
  {
    q: "Which AI tool matters most for local businesses?",
    a: "Today, Google's AI Overviews reach the most people because they appear in normal Google searches. But customers use different tools, so consistent facts across all sources is the safest approach.",
  },
  {
    q: "Will AI search reduce my phone calls from Google?",
    a: "It changes where the decision happens. If you are named in the AI answer, the call still comes to you. If you are not, you lose it, which is why being part of those answers matters.",
  },
];

export default function GeoVsSeoPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="Generative engine optimization is the new buzzword in marketing. Here is what it actually means for a roofer, plumber or HVAC company, how it differs from the local SEO you already need, and where your money should go first."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>GEO means making your business easy for AI tools to find, trust and mention.</li>
          <li>For local businesses, most GEO work is the same as good local SEO.</li>
          <li>
            What is new: answer-first writing, listings beyond Google, third-party mentions, crawler access and prompt
            tracking.
          </li>
          <li>Spend on your profile, reviews, listings and pages first; GEO extras come after.</li>
          <li>Treat guarantees and GEO-only packages with caution.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#what">What GEO means</a>
          </li>
          <li>
            <a href="#compare">GEO vs SEO at a glance</a>
          </li>
          <li>
            <a href="#same">What is the same</a>
          </li>
          <li>
            <a href="#different">What is genuinely different</a>
          </li>
          <li>
            <a href="#budget">Where to spend first</a>
          </li>
          <li>
            <a href="#agency">How to judge a GEO offer</a>
          </li>
          <li>
            <a href="#trades">What GEO looks like by trade</a>
          </li>
        </ol>
      </nav>

      <p>
        If you run a home service business, you have probably started hearing about GEO, AEO or &quot;AI SEO&quot;,
        often from someone selling a new package. Before you spend anything, it helps to know what it is, what is
        genuinely new, and what is simply SEO with a new name.
      </p>

      <h2 id="what">What GEO means</h2>
      <p>
        GEO stands for <strong>generative engine optimization</strong>. It is the work of making your business easy for
        AI tools such as ChatGPT, Gemini, Perplexity, Microsoft Copilot and Google&apos;s AI Overviews to find,
        understand, trust and mention when someone asks them a question.
      </p>
      <p>
        Traditional SEO aims for a position in a list of links. GEO aims for a mention inside an answer. For a local
        business, that answer is usually a short list of recommended companies, often with a sentence explaining each
        choice.
      </p>
      <p>
        You will also see the terms AEO (answer engine optimization) and AI SEO. They describe the same goal; the labels
        vary more than the work.
      </p>

      <h2 id="compare">GEO vs SEO at a glance</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Local SEO</th>
              <th>GEO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Goal</td>
              <td>Rank in the map pack and organic results</td>
              <td>Be named in AI-generated answers</td>
            </tr>
            <tr>
              <td>Where it shows</td>
              <td>Google Search and Maps</td>
              <td>ChatGPT, Gemini, Perplexity, Copilot, AI Overviews</td>
            </tr>
            <tr>
              <td>Main sources</td>
              <td>Google Business Profile, website, reviews, links</td>
              <td>The same, plus Bing, Apple and third-party mentions</td>
            </tr>
            <tr>
              <td>Content style</td>
              <td>Pages targeting searches</td>
              <td>Answer-first pages that are easy to quote</td>
            </tr>
            <tr>
              <td>Measured by</td>
              <td>Rankings, clicks, calls</td>
              <td>Mentions across a fixed question set, accuracy, calls</td>
            </tr>
            <tr>
              <td>Maturity</td>
              <td>Well understood, stable</td>
              <td>New and changing quickly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="same">What is the same</h2>
      <p>
        For home service businesses, most of GEO is the same work as good local SEO. Google says as much about its own
        AI features. Its documentation notes that you can apply the same foundational SEO best practices for AI features
        as you do for Google Search overall, and that pages need to be indexed and eligible to show with a snippet to
        appear as supporting links:
      </p>
      <blockquote>
        <p>&ldquo;There are no additional technical requirements.&rdquo;</p>
        <cite>
          Google Search Central,{" "}
          <Ext href="https://developers.google.com/search/docs/appearance/ai-features">
            AI features and your website
          </Ext>
        </cite>
      </blockquote>
      <p>The signals that matter for both:</p>
      <ul>
        <li>A complete, accurate Google Business Profile</li>
        <li>Plenty of recent, detailed reviews</li>
        <li>Consistent business details across directories</li>
        <li>Clear service and area pages on a fast, indexed website</li>
        <li>Mentions and links from other local websites</li>
      </ul>
      <p>
        If those foundations are weak, no amount of &quot;AI optimization&quot; will fix it. That is why I treat local
        SEO as the base and GEO as the layer on top. The base is covered in my{" "}
        <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist</Link>.
      </p>

      <h2 id="different">What is genuinely different</h2>
      <p>A handful of things matter more for AI answers than they did for classic rankings.</p>
      <h3>Answer-first writing</h3>
      <p>
        AI tools quote clear, direct statements. A page that says &quot;We repair and replace water heaters in Katy,
        Cypress and Richmond, usually the same day&quot; is far easier to use than three paragraphs about your passion
        for quality. Lead each page and section with the answer, then explain.
      </p>
      <h3>Listings beyond Google</h3>
      <p>
        Different AI tools lean on different sources. Microsoft Copilot is built on Bing, for example, and not every AI
        tool reads Google&apos;s business data. Bing Places, Apple Business Connect, Yelp and industry directories
        matter more than many businesses assume.
      </p>
      <h3>Third-party mentions</h3>
      <p>
        Being described on other websites, such as local news, associations or supplier directories, gives AI tools
        independent confirmation. It works like a link in classic SEO, even when there is no link.
      </p>
      <h3>Crawler access</h3>
      <p>
        If your site blocks AI crawlers through robots.txt or a firewall, those tools cannot read your pages. OpenAI,
        for instance, documents a separate search crawler for ChatGPT on its{" "}
        <Ext href="https://platform.openai.com/docs/bots">bots page</Ext>. It is a quick check that is often missed.
      </p>
      <h3>Measurement</h3>
      <p>
        There is no &quot;position 1&quot; in an AI answer, and answers vary between users and over time. Instead of
        rank tracking alone, you ask a fixed set of real questions every month and record how often, and how accurately,
        you are mentioned. The method is explained in{" "}
        <Link href="/blog/get-recommended-by-chatgpt">how to get recommended by ChatGPT and AI search</Link>.
      </p>

      <h2 id="audit">A one-hour GEO self-audit</h2>
      <p>You do not need special tools to see where you stand. Set aside an hour and work through this:</p>
      <ol>
        <li>
          <strong>Ask the tools.</strong> Ask ChatGPT, Gemini, Perplexity and Copilot three questions a customer would
          ask, such as &quot;best [your service] in [your town]&quot;. Note who is named.
        </li>
        <li>
          <strong>Check Google&apos;s AI Overview</strong> for the same searches, and which sites it cites.
        </li>
        <li>
          <strong>Search your business name</strong> in each tool. Is what it says about your services, areas and hours
          correct?
        </li>
        <li>
          <strong>Compare listings.</strong> Check that your name, address, phone and hours match on Google, Bing, Apple
          and your top directories.
        </li>
        <li>
          <strong>Read your top service page</strong> as a stranger. Does the first paragraph say what you do, where and
          how fast?
        </li>
        <li>
          <strong>Check robots.txt</strong> at yoursite.com/robots.txt for rules blocking search or AI crawlers.
        </li>
        <li>
          <strong>Count your mentions.</strong> Search your business name in Google and note how many other sites talk
          about you.
        </li>
      </ol>
      <p>
        Most businesses find at least two or three quick fixes, usually wrong details somewhere or a service page that
        never states the towns it covers.
      </p>

      <h2 id="myths">Common GEO myths</h2>
      <ul>
        <li>
          <strong>&quot;You need a special AI file.&quot;</strong> Google says there are no additional technical
          requirements for its AI features. Files promoted as must-haves for AI visibility are, at best, unproven.
        </li>
        <li>
          <strong>&quot;SEO is dead.&quot;</strong> AI tools lean on search indexes and the same local signals. Weak SEO
          usually means weak AI visibility.
        </li>
        <li>
          <strong>&quot;More content means more mentions.&quot;</strong> Hundreds of thin pages dilute your site. A few
          clear, specific pages do more.
        </li>
        <li>
          <strong>&quot;You can buy your way in.&quot;</strong> There is no paid placement inside AI answers today. Ads
          appear around them, not in them.
        </li>
        <li>
          <strong>&quot;It is only for big brands.&quot;</strong> Local questions are exactly where a small business
          with strong reviews and clear facts can be the obvious answer.
        </li>
      </ul>

      <h2 id="next">What is likely to change</h2>
      <p>
        AI search is moving fast. The tools change which sources they use, how they show businesses and how often they
        trigger, sometimes month to month. What has stayed constant is the need for accurate facts, real reviews and
        clear pages. Building those is the safest bet, because they help in Google Search, in the map pack and in
        whichever AI tool your customers use next. If a new platform becomes important for home services, the same
        foundations carry over.
      </p>

      <h2 id="budget">Where to spend first</h2>
      <p>For most home service businesses, the order is simple:</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Work</th>
              <th>Helps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fix your Google Business Profile and start a steady review habit</td>
              <td>Map pack and AI</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Make business details consistent everywhere, including Bing and Apple</td>
              <td>Map pack and AI</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Build clear pages for each main service and the towns you serve</td>
              <td>Organic and AI</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Rewrite key pages answer-first and add schema</td>
              <td>Mostly AI</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Earn local mentions, then track AI answers monthly</td>
              <td>AI and prominence</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Steps one to three help both the map pack and AI answers. Steps four and five are where GEO adds something
        extra. If you only have budget for the first three, you are still building most of your AI visibility.
      </p>

      <h2 id="agency">How to judge a GEO offer</h2>
      <p>GEO is new, which makes it easy to oversell. Good questions to ask anyone offering it:</p>
      <ul>
        <li>
          <strong>What will you do to my Google profile, reviews and listings?</strong> If the answer is
          &quot;nothing&quot;, they are skipping the part that matters most.
        </li>
        <li>
          <strong>Which questions will you track, in which tools, and how often?</strong> Without a fixed set, progress
          cannot be measured.
        </li>
        <li>
          <strong>Do you guarantee a ChatGPT recommendation?</strong> No one can. A guarantee is a red flag.
        </li>
        <li>
          <strong>Will you create hundreds of AI-written pages?</strong> Mass-produced pages are the kind of thin
          content that tends to hurt rather than help.
        </li>
        <li>
          <strong>What does it cost separately from SEO?</strong> For most local businesses GEO belongs inside an SEO
          plan, not as a separate bill.
        </li>
      </ul>
      <div className="note">
        <p>
          <strong>Be careful with GEO-only packages.</strong> If someone offers to &quot;optimize you for ChatGPT&quot;
          without looking at your Google profile, reviews and listings, they are skipping the foundation. And nobody can
          guarantee an AI recommendation.
        </p>
      </div>

      <h2 id="trades">What GEO looks like by trade</h2>
      <p>The questions people ask AI tools vary by trade, and so does the content worth writing:</p>
      <ul>
        <li>
          <strong>Roofing:</strong> &quot;Who can inspect storm damage near me?&quot; Clear storm-response and insurance
          pages help. See <Link href="/local-seo/roofing-seo">Roofing SEO</Link>.
        </li>
        <li>
          <strong>HVAC:</strong> &quot;Should I repair or replace my AC?&quot; Honest repair vs replace content earns
          mentions. See <Link href="/local-seo/hvac-seo">HVAC SEO</Link>.
        </li>
        <li>
          <strong>Electricians:</strong> &quot;Who installs EV chargers near me?&quot; Specific service pages win. See{" "}
          <Link href="/local-seo/electrician-seo">Electrician SEO</Link> and{" "}
          <Link href="/local-seo/ev-charger-installer-seo">EV Charger SEO</Link>.
        </li>
        <li>
          <strong>Solar:</strong> &quot;Is solar worth it in my city?&quot; Local cost and incentive pages matter most.
          See <Link href="/local-seo/solar-installer-seo">Solar SEO</Link>.
        </li>
      </ul>
      <p>
        Every trade I work with has its own page listing the AI questions customers ask. Browse them on the{" "}
        <Link href="/industries">industries page</Link>.
      </p>

      <h2 id="measure">How to measure GEO alongside SEO</h2>
      <p>
        Report GEO and SEO together, not separately, because they feed each other. A simple monthly view covers Search
        Console clicks and impressions, map rankings on a grid, profile calls, review growth, and the share of your
        fixed AI questions where you were named, with notes on anything AI tools got wrong about your business. If AI
        mentions rise while map rankings and reviews also rise, the work is compounding. If AI mentions stay flat while
        everything else grows, look at listings beyond Google, crawler access and how directly your pages answer
        questions.
      </p>

      <h2>How I handle it</h2>
      <p>
        I do not sell GEO on its own. Every plan starts with <Link href="/local-seo">local SEO</Link>, and{" "}
        <Link href="/ai-search">GEO &amp; AI Visibility</Link> is included from the Growth plan up, with the full
        version in Pro. You can see what each includes on the <Link href="/pricing">pricing page</Link>, or{" "}
        <Link href="/book-a-call">book a free call</Link> and I will show you what AI tools currently say about your
        business.
      </p>
    </ArticleLayout>
  );
}
