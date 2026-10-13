import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPost } from "@/lib/posts";
import { pageMeta } from "@/lib/site";

const post = getPost("geo-vs-seo-home-services")!;

export const metadata = pageMeta({
  title: "GEO vs SEO for Home Service Businesses: What Matters",
  description:
    "What generative engine optimization (GEO) really means for roofers, plumbers and HVAC companies, how it differs from local SEO, and where to spend first.",
  path: `/blog/${post.slug}`,
  type: "article",
});

export default function GeoVsSeoPage() {
  return (
    <ArticleLayout
      post={post}
      lead="Generative engine optimization is the new buzzword in marketing. Here is what it actually means for a home service business, and how it fits with the local SEO you already need."
    >
      <p>
        If you run a roofing, plumbing or HVAC company, you have probably started hearing about GEO, AEO or &quot;AI
        SEO&quot;, often from someone selling a new package. Before you spend anything, it helps to know what it is,
        what is genuinely new, and what is just SEO with a new name.
      </p>

      <h2>What GEO means</h2>
      <p>
        GEO stands for <strong>generative engine optimization</strong>. It is the work of making your business easy for
        AI tools like ChatGPT, Gemini, Perplexity, Copilot and Google&apos;s AI Overviews to find, understand, trust and
        mention when someone asks them a question.
      </p>
      <p>
        Traditional SEO aims for a position in a list of links. GEO aims for a mention inside an answer. For a local
        business, that answer is usually a short list of recommended companies.
      </p>

      <h2>What is the same</h2>
      <p>
        For home service businesses, most of GEO is the same work as good local SEO. AI tools rely on many of the
        signals Google already uses:
      </p>
      <ul>
        <li>A complete, accurate Google Business Profile</li>
        <li>Plenty of recent, detailed reviews</li>
        <li>Consistent business details across directories</li>
        <li>Clear service and area pages on a fast website</li>
        <li>Mentions and links from other local websites</li>
      </ul>
      <p>
        If those foundations are weak, no amount of &quot;AI optimization&quot; will fix it. That is why I treat local
        SEO as the base and GEO as the layer on top.
      </p>

      <h2>What is different</h2>
      <p>A few things matter more for AI answers than they did for classic rankings:</p>
      <h3>Answer-first writing</h3>
      <p>
        AI tools quote clear, direct statements. A page that says &quot;We repair and replace water heaters in Katy,
        Cypress and Richmond, usually the same day&quot; is easier to use than three paragraphs about your passion for
        quality.
      </p>
      <h3>Listings beyond Google</h3>
      <p>
        Different AI tools lean on different sources. Bing Places, Apple Business Connect, Yelp and industry directories
        matter more than many businesses assume, because not every AI tool reads Google&apos;s data.
      </p>
      <h3>Third-party mentions</h3>
      <p>
        Being described on other websites, such as local news, associations or supplier directories, gives AI tools
        independent confirmation. It works like a link in classic SEO, even when there is no link.
      </p>
      <h3>Crawler access</h3>
      <p>
        If your site blocks AI crawlers through robots.txt or a firewall, those tools cannot read your pages. It is a
        quick check that is often missed.
      </p>
      <h3>Measurement</h3>
      <p>
        There is no &quot;position 1&quot; in an AI answer, and answers vary between users. Instead of rank tracking
        alone, you track a fixed set of real questions over time and record how often, and how accurately, you are
        mentioned.
      </p>

      <h2>Where to spend first</h2>
      <p>For most home service businesses, the order is simple:</p>
      <ol>
        <li>Fix your Google Business Profile and start a steady review habit.</li>
        <li>Make your business details consistent everywhere, including Bing and Apple.</li>
        <li>Build clear pages for each main service and the towns you serve.</li>
        <li>Rewrite key pages so they answer common questions directly, and add schema.</li>
        <li>Earn local mentions, then track AI answers monthly.</li>
      </ol>
      <p>Steps 1 to 3 help both the map pack and AI answers. Steps 4 and 5 are where GEO adds something extra.</p>

      <div className="note">
        <p>
          <strong>Be careful with GEO-only packages.</strong> If someone offers to &quot;optimize you for ChatGPT&quot;
          without looking at your Google profile, reviews and listings, they are skipping the part that matters most.
          And nobody can guarantee an AI recommendation.
        </p>
      </div>

      <h2>How I handle it</h2>
      <p>
        I do not sell GEO on its own. Every plan starts with <Link href="/local-seo">local SEO</Link>, and{" "}
        <Link href="/ai-search">GEO &amp; AI Visibility</Link> is included from the Growth plan up, with the full
        version in Pro. You can see what each includes on the <Link href="/pricing">pricing page</Link>.
      </p>
    </ArticleLayout>
  );
}
