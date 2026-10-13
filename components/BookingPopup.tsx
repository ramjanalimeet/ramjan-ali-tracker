"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/site";

/**
 * Opens the Cal.com booking calendar in a popup whenever someone clicks a link
 * to /book-a-call (Book a call, Book Now, Get started). The links still work as
 * normal pages without JavaScript, and with Ctrl/Cmd-click for a new tab.
 */
export function BookingPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || link.target === "_blank") return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== "/book-a-call") return;
      e.preventDefault();
      setOpened(true);
      dialog.current?.showModal();
      document.body.classList.add("booking-open");
    };
    // Capture phase, so this runs before Next.js Link navigates.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
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
