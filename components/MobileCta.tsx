"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LEGAL_PAGES } from "@/lib/legal";
import { AVATAR } from "@/lib/site";
import { HirePopup } from "./HirePopup";


const HIDE_KEY = "mcta-hidden";
/** Pages where the bar stays out of the way: contact and every legal page. */
const NO_BAR = new Set(["/contact", ...LEGAL_PAGES.map((p) => p.href)]);

/**
 * Sticky contact bar on every page (a wide pill on desktop, a slim one-row
 * pill on phones): who I am, availability, Book Call (opens the
 * booking popup) and Hire (opens the project form, which lands in /admin).
 * Closing it shrinks it to a small avatar button for the rest of the visit.
 */
export function MobileCta() {
  const [hidden, setHidden] = useState(false);
  const [hire, setHire] = useState(false);
  const [on, setOn] = useState(false);
  const pathname = usePathname();
  const noBar = NO_BAR.has(pathname.replace(/\/$/, "") || "/");

  useEffect(() => {
    try {
      setHidden(sessionStorage.getItem(HIDE_KEY) === "1");
    } catch {
      /* storage blocked */
    }
    const open = () => setHire(true);
    // Show once the visitor scrolls past the hero, and step aside near the footer.
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setOn(scrollY > 500 && scrollY < h - 700);
    };
    window.addEventListener("open-hire", open);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("open-hire", open);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggle = (v: boolean) => {
    setHidden(v);
    try {
      sessionStorage.setItem(HIDE_KEY, v ? "1" : "0");
    } catch {
      /* storage blocked */
    }
  };

  return (
    <>
      {!noBar && (
      <div className={`mcta${hidden ? " min" : ""}${on ? " on" : ""}`}>
        {hidden ? (
          <button type="button" className="mcta-mini" onClick={() => toggle(false)} aria-label="Contact Ramjan Ali">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={AVATAR} alt="" width={52} height={52} />
            <i className="mcta-dot" aria-hidden="true" />
          </button>
        ) : (
          <div className="mcta-card">
            <div className="mcta-top">
              <span className="mcta-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AVATAR} alt="Ramjan Ali" width={46} height={46} />
                <i className="mcta-dot" aria-hidden="true" />
              </span>
              <span className="mcta-who">
                <b>Ramjan Ali</b>
                <small>SEO &amp; GEO Specialist</small>
              </span>
              <span className="mcta-avail">
                <i aria-hidden="true" />
                <span>
                  Available<span className="mcta-more"> for new projects</span>
                </span>
              </span>
              <button type="button" className="mcta-x" onClick={() => toggle(true)} aria-label="Minimize">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="mcta-actions">
              <a className="mcta-call" href="/book-a-call" aria-label="Book a call">
                <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
                  />
                </svg>
                <span>Book Call</span>
              </a>
              <button type="button" className="mcta-hire" onClick={() => setHire(true)}>
                Hire me
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      )}
      {hire && <HirePopup onClose={() => setHire(false)} />}
    </>
  );
}
