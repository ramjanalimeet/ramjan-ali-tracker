"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { BOOKING_URL, EMAIL, SITE_URL } from "@/lib/site";

const NOTIFY_URL = `https://formsubmit.co/ajax/${EMAIL}`;
const LIVE_HOST = new URL(SITE_URL).hostname;

export function LeadForm() {
  const opened = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const showToast = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!d.name?.trim() || !/^\S+@\S+\.\S+$/.test(d.email ?? "")) {
      showToast("Please add your name and a valid email");
      return;
    }
    setStatus("sending");
    const save = fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, t: opened.current, page: location.pathname }),
    }).then(async (r) => {
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Could not send");
      return j;
    });
    const notify =
      location.hostname === LIVE_HOST && !d.company_url
        ? fetch(NOTIFY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              _subject: `New lead: ${d.business || d.name} (${d.trade})`,
              _template: "table",
              _captcha: "false",
              _autoresponse: `Thanks for requesting a free Local SEO & AI visibility audit. I have your details and will reply within 24 hours with your findings. If you want to talk sooner, book a time here: ${BOOKING_URL} - Ramjan Ali Akash`,
              name: d.name,
              email: d.email,
              business: d.business || "-",
              website: d.site || "-",
              trade: d.trade,
              service_area: d.area || "-",
              message: d.message || "-",
            }),
          }).catch(() => null)
        : Promise.resolve(null);
    const [saved] = await Promise.allSettled([save, notify]);
    if (saved.status === "fulfilled") {
      setStatus("done");
    } else {
      setStatus("idle");
      showToast(saved.reason?.message || "Something went wrong. Please email me instead.");
    }
  }

  async function copyEmail(e: React.MouseEvent) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast("Email copied");
    } catch {
      showToast(EMAIL);
    }
  }

  return (
    <>
      {status === "done" ? (
        <div className="form panel">
          <div className="form-done" role="status">
            <h3 style={{ fontSize: 24 }}>Thanks, your request is in.</h3>
            <p className="muted" style={{ margin: "10px 0 18px" }}>
              I will review your business and reply within 24 hours.
            </p>
            <Link className="btn btn-dark" href="/book-a-call">
              Book a call now →
            </Link>
          </div>
        </div>
      ) : (
        <form className="form panel" id="lead" noValidate onSubmit={onSubmit}>
          <h3 style={{ fontSize: 24 }}>Request your free audit</h3>
          <p className="muted" style={{ fontSize: 15, marginTop: -4 }}>
            Takes a minute. I reply within 24 hours.
          </p>
          <div className="row">
            <div>
              <label htmlFor="f-name">Your name</label>
              <input id="f-name" name="name" autoComplete="name" required />
            </div>
            <div>
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="f-biz">Business name</label>
              <input id="f-biz" name="business" autoComplete="organization" />
            </div>
            <div>
              <label htmlFor="f-site">Website</label>
              <input id="f-site" name="site" inputMode="url" placeholder="yourbusiness.com" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="f-trade">Trade</label>
              <select id="f-trade" name="trade">
                <option>Roofing</option>
                <option>Plumbing</option>
                <option>Septic</option>
                <option>HVAC</option>
                <option>Electrical</option>
                <option>Other home service</option>
              </select>
            </div>
            <div>
              <label htmlFor="f-area">Main service area</label>
              <input id="f-area" name="area" placeholder="e.g. Houston, TX or Manchester, UK" />
            </div>
          </div>
          <div>
            <label htmlFor="f-msg">Anything I should know?</label>
            <textarea
              id="f-msg"
              name="message"
              placeholder="Services you want more of, competitors you see ranking, what you have tried before"
            />
          </div>
          {/* Honeypot: real visitors never see or fill this. */}
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}
          >
            <label>
              Leave this empty
              <input name="company_url" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button className="btn btn-dark" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send my audit request →"}
          </button>
          <p className="fine" style={{ margin: 0 }}>
            Prefer to talk? <Link href="/book-a-call">Book a call</Link> or email{" "}
            <a href={`mailto:${EMAIL}`} onClick={copyEmail}>
              {EMAIL}
            </a>
            .
          </p>
        </form>
      )}
      <div className={toast ? "toast on" : "toast"} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
