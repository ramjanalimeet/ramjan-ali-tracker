"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Booking } from "./types";
import { api, Icon, Modal, fmtDateTime } from "./ui";

const DAY = 86_400_000;
const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface CalData {
  bookings: Booking[];
  sends: { day: number; n: number }[];
}

const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

export function CalendarView({ ctx }: { ctx: AppCtx }) {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [data, setData] = useState<CalData | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);

  const start = new Date(month);
  start.setDate(1 - ((month.getDay() + 6) % 7)); // back to Monday
  const days = Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));

  const load = () =>
    api<CalData>(`calendar?from=${days[0].getTime()}&to=${days[41].getTime() + DAY}`)
      .then(setData)
      .catch((e) => ctx.toast(e.message, "error"));
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month]);

  const byDay = new Map<string, { bookings: Booking[]; sends: number }>();
  const slot = (t: number) => {
    const k = key(new Date(t));
    if (!byDay.has(k)) byDay.set(k, { bookings: [], sends: 0 });
    return byDay.get(k)!;
  };
  data?.bookings.forEach((b) => slot(b.start_at).bookings.push(b));
  data?.sends.forEach((s) => (slot(s.day + 12 * 3600_000).sends += Number(s.n)));
  const today = key(new Date());

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>{month.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</h1>
          <p>Booked calls and planned outreach.</p>
        </div>
        <div className="adm-head-actions">
          <button className="adm-icon-btn bordered" aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>
            <Icon name="left" />
          </button>
          <button className="adm-btn" onClick={() => setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1))}>
            Today
          </button>
          <button className="adm-icon-btn bordered" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>
            <Icon name="right" />
          </button>
        </div>
      </header>

      <div className="adm-cal">
        {WEEK.map((w) => (
          <div key={w} className="adm-cal-wd">
            {w}
          </div>
        ))}
        {days.map((d) => {
          const k = key(d);
          const s = byDay.get(k);
          const other = d.getMonth() !== month.getMonth();
          return (
            <div
              key={k}
              className={`adm-cal-day${other ? " other" : ""}${k === today ? " today" : ""}`}
            >
              <span className="adm-cal-num">{d.getDate()}</span>
              {s?.bookings.map((b) => (
                <button key={b.id} className={`adm-ev booking${b.status === "cancelled" ? " cancelled" : ""}`} onClick={() => setBooking(b)}>
                  {new Date(b.start_at).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })} {b.name || "Call"}
                </button>
              ))}
              {!!s?.sends && <span className="adm-ev sends">{s.sends} emails due</span>}
            </div>
          );
        })}
      </div>

      {booking && (
        <Modal title={booking.title} onClose={() => setBooking(null)}>
          <div className="adm-stack">
            <dl className="adm-fields">
              <div>
                <dt>With</dt>
                <dd>
                  {booking.name} {booking.email && `· ${booking.email}`}
                </dd>
              </div>
              <div>
                <dt>When</dt>
                <dd>{fmtDateTime(booking.start_at)}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{booking.status}</dd>
              </div>
            </dl>
            {booking.meeting_url && (
              <a className="adm-btn primary self-start" href={booking.meeting_url} target="_blank" rel="noopener">
                Join meeting
              </a>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
