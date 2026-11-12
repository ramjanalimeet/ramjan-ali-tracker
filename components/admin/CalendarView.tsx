"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import { PostComposer } from "./SocialView";
import type { Booking, Post } from "./types";
import { api, Brand, Icon, Modal, fmtDateTime } from "./ui";

const DAY = 86_400_000;
const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface CalData {
  posts: Post[];
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
  const [composer, setComposer] = useState<Partial<Post> | null>(null);
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

  const byDay = new Map<string, { posts: Post[]; bookings: Booking[]; sends: number }>();
  const slot = (t: number) => {
    const k = key(new Date(t));
    if (!byDay.has(k)) byDay.set(k, { posts: [], bookings: [], sends: 0 });
    return byDay.get(k)!;
  };
  data?.posts.forEach((p) => slot(p.scheduled_at).posts.push(p));
  data?.bookings.forEach((b) => slot(b.start_at).bookings.push(b));
  data?.sends.forEach((s) => (slot(s.day + 12 * 3600_000).sends += Number(s.n)));
  const today = key(new Date());

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>{month.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</h1>
          <p>Scheduled posts, booked calls and planned outreach.</p>
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
          <button className="adm-btn primary" onClick={() => setComposer({})}>
            <Icon name="plus" size={16} /> New post
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
              onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                const t = new Date(d);
                t.setHours(10, 0, 0, 0);
                setComposer({ scheduled_at: Math.max(t.getTime(), Date.now() + 10 * 60_000) });
              }}
            >
              <span className="adm-cal-num">{d.getDate()}</span>
              {s?.bookings.map((b) => (
                <button key={b.id} className={`adm-ev booking${b.status === "cancelled" ? " cancelled" : ""}`} onClick={() => setBooking(b)}>
                  {new Date(b.start_at).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })} {b.name || "Call"}
                </button>
              ))}
              {s?.posts.map((p) => {
                const first = ctx.accounts.find((a) => a.id === p.account_ids[0]);
                return (
                  <button key={p.id} className={`adm-ev post s-${p.status}`} onClick={() => p.status !== "published" && setComposer(p)}>
                    {first && <Brand platform={first.platform} size={13} />}
                    <span>{p.title || p.content}</span>
                  </button>
                );
              })}
              {!!s?.sends && <span className="adm-ev sends">{s.sends} emails due</span>}
            </div>
          );
        })}
      </div>

      {composer && (
        <PostComposer
          ctx={ctx}
          post={composer}
          onClose={() => setComposer(null)}
          onSaved={() => {
            setComposer(null);
            load();
          }}
        />
      )}
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
