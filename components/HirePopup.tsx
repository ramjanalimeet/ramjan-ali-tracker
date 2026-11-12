"use client";

import { useEffect, useRef, useState } from "react";
import { PLANS, usd } from "@/lib/pricing";
import { SERVICE_GROUPS } from "@/lib/services";
import { AVATAR } from "@/lib/site";

/** What each plan covers, worded as on the pricing page's "At a glance". */
const INCLUDES: Record<string, string> = {
  Starter: "Local SEO",
  Growth: "Local SEO + GEO & AI Visibility (medium)",
  Pro: "Local SEO + GEO & AI Visibility (full)",
};

const PLAN_OPTIONS = [
  ...PLANS.map((p) => ({
    id: p.name,
    label: p.name,
    price: usd(p.price),
    per: "/month",
    includes: INCLUDES[p.name] ?? p.tagline,
    ticks: p.features.filter((f) => !/^Everything in/.test(f)).slice(0, 3),
    popular: !!p.popular,
  })),
  {
    id: "Custom",
    label: "Custom project",
    price: "Let’s talk",
    per: "",
    includes: "One-off work, more locations, or you’d like my advice first",
    ticks: [] as string[],
    popular: false,
  },
];

/** Specialist work that can be added to any plan (the "SEO by specialization" group). */
const ADD_ONS = SERVICE_GROUPS.find((g) => g.title === "SEO by specialization")?.items ?? [];

type Status = "idle" | "sending" | "done" | "error";

/** "Hire Ramjan Ali" project form. Submissions go to /api/lead and show up in the /admin Inbox. */
export function HirePopup({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [plan, setPlan] = useState("Growth");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [f, setF] = useState({ name: "", email: "", phone: "", website: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const chosen = PLAN_OPTIONS.find((p) => p.id === plan);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.body.classList.add("booking-open");
    return () => document.body.classList.remove("booking-open");
  }, []);

  const close = () => ref.current?.close();
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const toggle = (name: string) => setAddOns((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));
  const planText = chosen ? `${chosen.label}${chosen.per ? ` · ${chosen.price}${chosen.per}` : ""}` : "";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          _form: "Hire request",
          name: f.name,
          email: f.email,
          phone: f.phone,
          website: f.website,
          plan: planText,
          services: [chosen?.id === "Custom" ? "" : chosen?.includes, ...addOns].filter(Boolean).join(", "),
          message: f.message,
          page: location.pathname,
          _gotcha: f._gotcha,
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Something went wrong");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(`${(err as Error).message}. Please try again, or message me on WhatsApp.`);
    }
  };

  return (
    <dialog ref={ref} className="hire" aria-label="Hire Ramjan Ali" onClose={onClose} onClick={(e) => e.target === ref.current && close()}>
      <div className="hire-box">
        <header className="hire-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={AVATAR} alt="" width={44} height={44} />
          <div>
            <b>Hire Ramjan Ali</b>
            <span>
              <i aria-hidden="true" /> Usually replies within 24 hours
            </span>
          </div>
          <button type="button" className="hire-x" onClick={close} aria-label="Close">
            ×
          </button>
        </header>

        {status === "done" ? (
          <div className="hire-done">
            <div className="hire-check" aria-hidden="true">
              ✓
            </div>
            <h2>Thanks, {f.name.split(" ")[0] || "there"}!</h2>
            <p>Your project details are with me. I’ll reply to {f.email} within 24 hours. Want to talk sooner? Pick a time for a free call.</p>
            <div className="hire-row">
              <a className="btn btn-dark" href="/book-a-call" onClick={close}>
                Book a free call <span className="arr">→</span>
              </a>
              <button type="button" className="btn btn-ghost" onClick={close}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className="hire-body" onSubmit={step === 1 ? (e) => (e.preventDefault(), setStep(2)) : submit}>
            <div className="hire-steps" aria-hidden="true">
              <span className="on" />
              <span className={step === 2 ? "on" : ""} />
            </div>

            {step === 1 ? (
              <>
                <fieldset>
                  <legend>Choose a plan</legend>
                  <div className="hire-plans">
                    {PLAN_OPTIONS.map((p) => (
                      <label key={p.id} className={`hire-plan${plan === p.id ? " on" : ""}`}>
                        <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} />
                        <span className="hire-radio" aria-hidden="true" />
                        <span className="hire-plan-main">
                          <span className="hire-plan-top">
                            <b>{p.label}</b>
                            {p.popular && <em>Most popular</em>}
                          </span>
                          <span className="hire-includes">{p.includes}</span>
                          {plan === p.id && p.ticks.length > 0 && (
                            <ul className="hire-ticks">
                              {p.ticks.map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          )}
                        </span>
                        <span className="hire-price">
                          {p.price}
                          {p.per && <small>{p.per}</small>}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend>
                    Add specialist work <span className="hire-opt">optional</span>
                  </legend>
                  <div className="hire-chips">
                    {ADD_ONS.map((s) => (
                      <button type="button" key={s.href} className={`hire-chip${addOns.includes(s.name) ? " on" : ""}`} aria-pressed={addOns.includes(s.name)} onClick={() => toggle(s.name)}>
                        <span aria-hidden="true">{addOns.includes(s.name) ? "✓" : "+"}</span> {s.name}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="hire-foot">
                  <span className="hire-hint">{planText}</span>
                  <button className="btn btn-dark" disabled={!plan}>
                    Continue <span className="arr">→</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="hire-summary">
                  <span>
                    <b>{planText}</b>
                    {addOns.length > 0 && ` + ${addOns.join(", ")}`}
                  </span>
                  <button type="button" onClick={() => setStep(1)}>
                    Change
                  </button>
                </div>
                <div className="hire-grid">
                  <label>
                    Your name
                    <input required autoComplete="name" value={f.name} onChange={set("name")} />
                  </label>
                  <label>
                    Email
                    <input required type="email" autoComplete="email" value={f.email} onChange={set("email")} />
                  </label>
                  <label>
                    Phone / WhatsApp
                    <input type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} placeholder="Optional" />
                  </label>
                  <label>
                    Website
                    <input autoComplete="url" value={f.website} onChange={set("website")} placeholder="yourbusiness.com" />
                  </label>
                </div>
                <label>
                  About your business and goals
                  <textarea rows={4} value={f.message} onChange={set("message")} placeholder="Trade, service area, what you want more of…" />
                </label>
                <input className="hire-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f._gotcha} onChange={set("_gotcha")} />
                {status === "error" && <p className="hire-err">{error}</p>}
                <div className="hire-foot">
                  <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button className="btn btn-accent" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send project details"} <span className="arr">→</span>
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </dialog>
  );
}
