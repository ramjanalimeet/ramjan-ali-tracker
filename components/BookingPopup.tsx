"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/site";

const BOOKING_PATH = "/book-a-call";

/**
 * The site's booking calendar. Every link to /book-a-call (Book a call, Book Now,
 * Get started) opens it as a popup; there is no separate booking page. Visiting
 * /book-a-call directly redirects to /?book, which opens the popup on arrival.
 *
 * Cal.com is loaded only after someone points at, touches, tabs to or clicks a
 * booking link. This keeps its third-party JavaScript out of the initial page load.
 */
export function BookingPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const open = () => {
      setOpened(true);
      if (!dialog.current?.open) dialog.current?.showModal();
      document.body.classList.add("booking-open");
    };
    const bookingLink = (target: EventTarget | null) => {
      const link = (target as Element | null)?.closest?.("a");
      if (!link) return null;
      const url = new URL(link.href, location.href);
      return url.origin === location.origin && url.pathname === BOOKING_PATH ? link : null;
    };
    const warm = (e: Event) => {
      if (bookingLink(e.target)) setOpened(true);
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (!bookingLink(e.target)) return;
      e.preventDefault();
      open();
    };
    // Capture phase, so this runs before Next.js Link navigates.
    document.addEventListener("click", onClick, true);
    const warmEvents = ["pointerover", "touchstart", "focusin"] as const;
    for (const type of warmEvents) document.addEventListener(type, warm, { passive: true });

    // Arrived from /book-a-call (redirected to /?book): open straight away and tidy the URL.
    const params = new URLSearchParams(location.search);
    if (params.has("book")) {
      open();
      params.delete("book");
      const query = params.toString();
      history.replaceState(history.state, "", `${location.pathname}${query ? `?${query}` : ""}${location.hash}`);
    }

    return () => {
      document.removeEventListener("click", onClick, true);
      for (const type of warmEvents) document.removeEventListener(type, warm);
    };
  }, []);

  const close = () => dialog.current?.close();

  return (
    <dialog
      ref={dialog}
      className="booking"
      aria-label="Book a call"
      onClose={() => document.body.classList.remove("booking-open")}
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="booking-box">
        <div className="booking-bar">
          <b>Book a free strategy call</b>
          <div className="booking-actions">
            <a href={BOOKING_URL} target="_blank" rel="noopener">
              Open in new tab ↗
            </a>
            <button type="button" className="booking-close" onClick={close} aria-label="Close booking">
              ×
            </button>
          </div>
        </div>
        <div className="booking-body">
          {!loaded && <div className="booking-loading">Loading calendar…</div>}
          {opened && (
            <iframe
              src={`${BOOKING_URL}?embed=true`}
              title="Book a call with Ramjan Ali Akash"
              onLoad={() => setLoaded(true)}
              allow="payment"
            />
          )}
        </div>
      </div>
    </dialog>
  );
}
