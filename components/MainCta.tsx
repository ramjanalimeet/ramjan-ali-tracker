"use client";

/**
 * The site's main call to action: Book Call (opens the booking popup) and
 * Hire Ramjan Ali (opens the Hire form, rendered by MobileCta). Used in every
 * hero and CTA band. `onDark` styles Book Call for dark sections.
 */
export function MainCta({ onDark = false, short = false }: { onDark?: boolean; short?: boolean }) {
  return (
    <>
      <a className={`btn btn-call${onDark ? " on-dark" : ""}`} href="/book-a-call">
        <svg className="ph" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
          />
        </svg>
        Book Call
      </a>
      <button type="button" className="btn btn-hire" onClick={() => window.dispatchEvent(new Event("open-hire"))}>
        {short ? "Hire Ali" : "Hire Ramjan Ali"} <span className="arr">→</span>
      </button>
    </>
  );
}
