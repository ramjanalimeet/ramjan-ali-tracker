import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("google-business-profile-suspended")!;

export const metadata = pageMeta({
  title: "Google Business Profile Suspended? How Contractors Get Reinstated",
  description:
    "Why Google suspends contractor and service-area business profiles, what to fix before you appeal, and the evidence that gets a suspended profile reinstated.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How long does Google take to review a suspension appeal?",
    a: "Many appeals get an answer within a few business days, but some take several weeks, especially when Google asks for more evidence. Submitting complete evidence the first time is the best way to avoid delays.",
  },
  {
    q: "Should I create a new Google Business Profile if mine is suspended?",
    a: "No. A new profile for the same business is treated as a duplicate and usually makes things worse. It can also cut you off from the reviews and history attached to the original profile. Appeal the original instead.",
  },
  {
    q: "Will I lose my reviews if my profile is suspended?",
    a: "Reviews are normally kept on the profile while it is suspended and come back when it is reinstated. They are at risk if you delete the profile or start a new one.",
  },
  {
    q: "Can a competitor get my profile suspended?",
    a: "A competitor can report your profile or suggest edits, and if the report points to a real guideline problem, such as keywords in your name or an address you do not really use, Google may act on it. A profile that follows the guidelines has very little to fear from reports.",
  },
  {
    q: "Can you guarantee reinstatement?",
    a: "No one can. Only Google decides. What I can do is find the likely trigger, fix it, and help you put together the evidence Google asks for, which gives a genuine business the best chance.",
  },
];

export default function GoogleBusinessProfileSuspendedPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="Why Google suspends roofing, plumbing, HVAC and septic profiles, what to fix before you appeal, and the evidence that actually gets a profile reinstated."
    >
      <p>You search for your own business and it is gone from Google Maps. Or you log in and see a red banner saying your profile is suspended. For a roofer, plumber or HVAC company that gets most of its calls from the map pack, the phone goes quiet almost immediately.</p>
      <p>The good news: most suspensions of real, legitimate contractors can be reversed. The bad news: the first reaction most owners have (editing everything, deleting the profile or making a new one) usually makes it worse. This guide walks through what to do, in order.</p>
      <div className="note takeaways">
      <p><strong>The short version:</strong> Do not delete the profile or create a new one. Find the guideline problem that most likely triggered the suspension, fix it, collect proof that your business is real and operates where you say it does, then submit one complete appeal.</p>
      </div>
      <nav className="toc" aria-label="In this article"><b>In this article</b><ol>
        <li><a href="#types">What a suspension actually means</a></li>
        <li><a href="#triggers">Why contractor profiles get suspended</a></li>
        <li><a href="#first-24-hours">What to do in the first 24 hours</a></li>
        <li><a href="#evidence">The evidence that gets profiles reinstated</a></li>
        <li><a href="#appeal">How to submit the appeal</a></li>
        <li><a href="#after">After reinstatement: rankings and recovery</a></li>
        <li><a href="#prevent">How to avoid another suspension</a></li>
        <li><a href="#faq">People also ask</a></li>
      </ol></nav>
      <h2 id="types">What a suspension actually means</h2>
      <p>Google uses &quot;suspended&quot; for a few different situations, and they affect you differently. Check which one you are in before you do anything else.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>What you see</th><th>What it usually means</th><th>Impact on calls</th></tr>
      </thead>
      <tbody>
      <tr><td>Profile missing from Maps and search, suspension notice in your dashboard</td><td>Google believes the business, address or listing may not meet its guidelines</td><td>Severe. You get no calls from the profile until it is reinstated</td></tr>
      <tr><td>Profile still visible, but you cannot edit it or reply to reviews</td><td>Your access or your account has been restricted, not necessarily the business itself</td><td>Moderate. Calls continue, but you cannot manage the profile</td></tr>
      <tr><td>Profile visible, with pending or rejected edits and a request to verify</td><td>A recent change (name, address, category) triggered a review</td><td>Low to moderate, but can turn into a full suspension if ignored</td></tr>
      </tbody>
      </table>
      </div>
      <p>If you manage several profiles from one Google account, also check whether the restriction is on the account (every profile affected) or just one listing.</p>
      <h2 id="triggers">Why contractor profiles get suspended</h2>
      <p>Service-area businesses, the trades that drive to the customer, are suspended far more often than shops and restaurants. They have no storefront for Google to check, and the industry has a long history of fake listings. These are the triggers I see most often, roughly in order.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Trigger</th><th>Why Google flags it</th><th>Fix before appealing</th></tr>
      </thead>
      <tbody>
      <tr><td><strong>Keywords or city in the business name</strong> (&quot;Best Roofing Dallas TX&quot;)</td><td>Names must match the real-world brand</td><td>Change it to your legal or signage name, exactly as on your license and trucks</td></tr>
      <tr><td><strong>Virtual office, P.O. box or coworking address</strong></td><td>The address cannot be verified as a real place of business</td><td>Use a real address you operate from, or hide the address and set a service area</td></tr>
      <tr><td><strong>Address shown when you do not serve customers there</strong></td><td>Service-area businesses that do not receive customers should hide the address</td><td>Remove the address from public view and list your service areas</td></tr>
      <tr><td><strong>Big edits in one go</strong> (name, address, category, phone)</td><td>Several core changes at once look like a takeover or a rebrand to game rankings</td><td>Make one core change at a time, with evidence ready</td></tr>
      <tr><td><strong>Duplicate profiles</strong> for the same business</td><td>Each business should have one profile per real location</td><td>Identify the duplicates and request removal of the extras</td></tr>
      <tr><td><strong>Service area that is far too big</strong></td><td>Areas reaching well beyond a realistic drive look like an attempt to rank everywhere</td><td>Trim the service area to where you really work</td></tr>
      <tr><td><strong>Review problems</strong>: incentives, gating or fake reviews</td><td>Breaks Google&apos;s review policies</td><td>Stop the practice and change your review request process</td></tr>
      <tr><td><strong>Website or phone mismatch</strong></td><td>Tracking numbers or a site for a different brand create inconsistencies</td><td>Make the site and phone clearly match the business on the profile</td></tr>
      </tbody>
      </table>
      </div>
      <blockquote>
      <p>&quot;Your name should reflect your business&apos;s real-world name, as used consistently on your storefront, website, stationery, and as known to customers.&quot;</p>
      <cite>Google Business Profile guidelines, <Ext href="https://support.google.com/business/answer/3038177">Guidelines for representing your business on Google</Ext></cite>
      </blockquote>
      <p>The name rule is the one contractors break most. It is tempting because keywords in a name can help rankings for a while. It is also the easiest thing for a competitor to report.</p>
      <h2 id="first-24-hours">What to do in the first 24 hours</h2>
      <ol>
      <li><strong>Do not delete the profile.</strong> Deleting it can lose your reviews and history permanently.</li>
      <li><strong>Do not create a new profile.</strong> A second listing for the same business looks like a duplicate and makes reinstatement harder.</li>
      <li><strong>Stop making edits.</strong> Every edit while suspended adds noise to the review.</li>
      <li><strong>Screenshot everything:</strong> the suspension notice, your current profile details, and any emails from Google.</li>
      <li><strong>Read the notice carefully.</strong> It sometimes names the policy area. Then check your profile against <Ext href="https://support.google.com/business/answer/3038177">Google&apos;s guidelines</Ext> and the trigger table above.</li>
      <li><strong>Keep the phone covered.</strong> While the profile is down, make sure your website, any <Link href="/blog/local-services-ads-vs-seo-for-contractors">Local Services Ads</Link> and other listings carry the right number so you lose as few calls as possible. AI assistants also pull from those sources, which is one more reason to keep them accurate (see <Link href="/ai-search">AI search visibility</Link>).</li>
      </ol>
      <h2 id="evidence">The evidence that gets profiles reinstated</h2>
      <p>An appeal is a request for Google to check that you are a real business operating as described. The more clearly you show that, the better. Prepare these before you submit:</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Evidence</th><th>What it proves</th><th>Tips</th></tr>
      </thead>
      <tbody>
      <tr><td>Business or contractor license</td><td>The business legally exists and operates in the area</td><td>The name and address should match the profile exactly</td></tr>
      <tr><td>Utility bill or lease for the address</td><td>You really operate from that address</td><td>Recent, showing the business name</td></tr>
      <tr><td>Photos of branded vehicles and equipment</td><td>A real trade business, not a lead-generation listing</td><td>Show the business name and phone on the truck</td></tr>
      <tr><td>Photos of the location, including signage</td><td>The address is a real place of business</td><td>Wide shot showing the street plus a close-up of the sign</td></tr>
      <tr><td>Website with matching name, phone and services</td><td>Consistency across your online presence</td><td>Fix mismatches before you appeal, not after</td></tr>
      <tr><td>Liability insurance certificate</td><td>An active, insured trade business</td><td>Helpful supporting evidence for service-area businesses</td></tr>
      </tbody>
      </table>
      </div>
      <p>Google may also ask for a short video verification that shows your location, equipment and proof of management. If it does, record it in one continuous take: street signs or the outside of the building, then the branded vehicle and tools, then you opening the office or unlocking the equipment.</p>
      <h2 id="appeal">How to submit the appeal</h2>
      <ol>
      <li>Fix the guideline problems you found first. Appealing with the same issues still in place usually gets a quick rejection.</li>
      <li>Open your profile while signed in and follow the link in the suspension notice to request a review. Google handles this through its Business Profile appeals process.</li>
      <li>Upload your evidence. Use clear, legible files, with the business name visible on every document.</li>
      <li>Keep the explanation short and factual: what the business is, where it operates, and what you corrected.</li>
      <li>Submit once and wait. Multiple appeals for the same issue do not speed anything up.</li>
      </ol>
      <div className="note">
      <p><strong>If the appeal is rejected:</strong> do not submit the same thing again. Work out what Google could not confirm (usually the address or the name), fix it or gather stronger proof, and then appeal again. The <Ext href="https://support.google.com/business/community">Business Profile Help Community</Ext> can also escalate genuine cases.</p>
      </div>
      <h2 id="after">After reinstatement: rankings and recovery</h2>
      <p>Once reinstated, most profiles get their reviews back and start showing again within days. Rankings can take a little longer to settle, and sometimes they do not fully return if the old rankings depended on the thing that was removed, such as keywords in the name.</p>
      <p>That is normal. Rebuild with the signals that last: the right categories, a steady flow of reviews, a strong page on your website for each service, and the steps in <Link href="/blog/how-to-rank-in-google-map-pack">how to rank in the Google map pack</Link>.</p>
      <h2 id="prevent">How to avoid another suspension</h2>
      <ul>
      <li>Use your real business name, with no added keywords or cities.</li>
      <li>Hide your address if customers do not visit you, and keep the service area realistic.</li>
      <li>Change one core detail at a time, and only when something genuinely changed.</li>
      <li>Keep ownership in your own Google account and give agencies manager access only.</li>
      <li>Ask every customer for a review, never only the happy ones, and never offer anything for it.</li>
      <li>Keep your name, address and phone the same on your website and directories. The <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist for contractors</Link> covers this step by step.</li>
      </ul>
      <p>Not sure what triggered yours, or worried your profile could be next? A <Link href="/book-a-call">free strategy call</Link> includes a check of your profile against Google&apos;s guidelines, with anything that puts it at risk and what is holding your rankings back.</p>
    </ArticleLayout>
  );
}
