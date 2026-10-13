import Link from "next/link";
import { EMAIL, SOCIAL, TRADES } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Link className="logo" href="/">
              Ramjan Ali<b>.</b>
            </Link>
            <p>
              Local SEO &amp; AI search visibility for home service businesses, wherever they work. Based in Dhaka,
              working with clients worldwide.
            </p>
            <ul className="social">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} rel="me noopener" target="_blank">
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/local-seo">Local SEO</Link>
              </li>
              <li>
                <Link href="/ai-search">AI Search Visibility</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/free-seo-audit">Free Audit</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              {TRADES.map((t) => (
                <li key={t.slug}>
                  <Link href={`/local-seo/${t.slug}`}>{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/book-a-call">Book a Call</Link>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© {new Date().getFullYear()} Ramjan Ali Akash · Local SEO &amp; AI Search Visibility</span>
          <span>Dhaka, Bangladesh · GMT+6 · replies within 24h</span>
        </div>
      </div>
    </footer>
  );
}
