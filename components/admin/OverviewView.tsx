"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Overview } from "./types";
import { api, Brand, Empty, fmtDateTime, Icon, timeAgo } from "./ui";

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

export function OverviewView({ ctx }: { ctx: AppCtx }) {
  const [o, setO] = useState<Overview | null>(null);
  useEffect(() => {
    api<Overview>("overview").then(setO).catch((e) => ctx.toast(e.message, "error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!o) return <div className="adm-skel tall" />;

  const setupDone = o.accounts.some((a) => a.kind === "email");

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>{greeting()}, Ramjan</h1>
          <p>{new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</p>
        </div>
      </header>

      {!setupDone && (
        <div className="adm-callout">
          <Icon name="sparkle" />
          <div>
            <b>Finish setting up your workspace</b>
            <p>Connect your sending inboxes and link Cal.com to see bookings here.</p>
          </div>
          <button className="adm-btn primary" onClick={() => ctx.openSettings("email")}>
            Open settings
          </button>
        </div>
      )}

      <div className="adm-stats">
        <Stat label="Unread in inbox" value={o.unread} onClick={() => ctx.go("inbox")} />
        <Stat label="Replies this week" value={o.repliesWeek} />
        <Stat label="Leads & bookings" value={o.leadsWeek} sub="last 7 days" />
      </div>

      <div className="adm-cols">
        <section className="adm-card">
          <div className="adm-card-head">
            <h2>Upcoming calls</h2>
          </div>
          {o.upcomingBookings.length ? (
            <ul className="adm-list">
              {o.upcomingBookings.map((b) => (
                <li key={b.id}>
                  <Brand platform="booking" size={26} />
                  <div>
                    <b>{b.name || b.email}</b>
                    <span>
                      {b.title} · {fmtDateTime(b.start_at)}
                    </span>
                  </div>
                  {b.meeting_url && (
                    <a className="adm-btn sm" href={b.meeting_url} target="_blank" rel="noopener">
                      Join
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <Empty icon="calendar" title="No upcoming calls">
              Bookings from Cal.com appear here.
            </Empty>
          )}
        </section>
        <section className="adm-card">
          <div className="adm-card-head">
            <h2>Latest in inbox</h2>
            <button className="adm-link" onClick={() => ctx.go("inbox")}>
              Open inbox
            </button>
          </div>
          {o.recentInbox.length ? (
            <ul className="adm-list">
              {o.recentInbox.map((m) => (
                <li key={m.id} className={m.read ? "" : "unread"} onClick={() => ctx.go("inbox")}>
                  <Brand platform={m.channel} size={26} />
                  <div>
                    <b>{m.from_name || m.from_addr}</b>
                    <span>{m.subject || m.body.slice(0, 80)}</span>
                  </div>
                  <time>{timeAgo(m.created_at)}</time>
                </li>
              ))}
            </ul>
          ) : (
            <Empty icon="inbox" title="Inbox zero">
              Replies, form submissions and bookings land here.
            </Empty>
          )}
        </section>

      </div>

      {o.activity.length > 0 && (
        <section className="adm-card">
          <div className="adm-card-head">
            <h2>Activity</h2>
          </div>
          <div className="adm-log">
            {o.activity.map((a) => (
              <div key={a.id} className={`adm-log-row ${a.level}`}>
                <span>{timeAgo(a.created_at)}</span>
                {a.text}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value, sub, onClick }: { label: string; value: number; sub?: string; onClick?: () => void }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag className={`adm-stat${onClick ? " clickable" : ""}`} onClick={onClick}>
      <span>{label}</span>
      <b>{value.toLocaleString()}</b>
      {sub && <small>{sub}</small>}
    </Tag>
  );
}
