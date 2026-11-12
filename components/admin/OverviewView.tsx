"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Overview } from "./types";
import { api, Brand, Empty, fmtDateTime, Icon, timeAgo } from "./ui";

const DAY = 86_400_000;

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

  const setupDone = o.accounts.some((a) => a.kind === "email") && o.accounts.some((a) => a.kind === "social");

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>{greeting()}, Ramjan</h1>
          <p>{new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</p>
        </div>
        <div className="adm-head-actions">
          <button className="adm-btn" onClick={() => ctx.go("social")}>
            <Icon name="plus" size={16} /> New post
          </button>
          <button className="adm-btn primary" onClick={() => ctx.go("email")}>
            <Icon name="send" size={15} /> Outreach
          </button>
        </div>
      </header>

      {!setupDone && (
        <div className="adm-callout">
          <Icon name="sparkle" />
          <div>
            <b>Finish setting up your workspace</b>
            <p>Connect your social accounts and 4–5 sending inboxes, then link Cal.com so bookings show up here.</p>
          </div>
          <button className="adm-btn primary" onClick={() => ctx.openSettings(o.accounts.some((a) => a.kind === "social") ? "email" : "social")}>
            Open settings
          </button>
        </div>
      )}

      <div className="adm-stats">
        <Stat label="Unread in inbox" value={o.unread} onClick={() => ctx.go("inbox")} />
        <Stat label="Emails sent today" value={o.sentToday} sub={`${o.sentWeek} this week`} />
        <Stat label="Replies this week" value={o.repliesWeek} sub={o.sentWeek ? `${Math.round((o.repliesWeek / o.sentWeek) * 100)}% reply rate` : undefined} />
        <Stat label="Leads & bookings" value={o.leadsWeek} sub="last 7 days" />
        <Stat label="Scheduled posts" value={o.scheduledPosts} sub={`${o.publishedWeek} published this week`} onClick={() => ctx.go("social")} />
        <Stat label="In sequences" value={o.activeSequences} sub={`${o.contacts} contacts`} onClick={() => ctx.go("contacts")} />
      </div>

      <div className="adm-cols">
        <section className="adm-card">
          <div className="adm-card-head">
            <h2>Outreach, last 14 days</h2>
            <span className="adm-legend">
              <i className="out" /> Sent <i className="in" /> Replies
            </span>
          </div>
          <Bars daily={o.daily} />
        </section>

        <section className="adm-card">
          <div className="adm-card-head">
            <h2>Upcoming calls</h2>
            <button className="adm-link" onClick={() => ctx.go("calendar")}>
              Calendar
            </button>
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
      </div>

      <div className="adm-cols">
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

        <section className="adm-card">
          <div className="adm-card-head">
            <h2>Next posts</h2>
            <button className="adm-link" onClick={() => ctx.go("social")}>
              All posts
            </button>
          </div>
          {o.upcomingPosts.length ? (
            <ul className="adm-list">
              {o.upcomingPosts.map((p) => (
                <li key={p.id}>
                  <div className="adm-brands">
                    {p.account_ids.map((id) => {
                      const a = ctx.accounts.find((x) => x.id === id);
                      return a ? <Brand key={id} platform={a.platform} size={20} /> : null;
                    })}
                  </div>
                  <div>
                    <b>{p.title || p.content.slice(0, 60)}</b>
                    <span>{fmtDateTime(p.scheduled_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <Empty icon="share" title="Nothing scheduled">
              Plan your LinkedIn, X, Facebook and Medium posts in Social posts.
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

function Bars({ daily }: { daily: Overview["daily"] }) {
  const today = Math.floor(Date.now() / DAY) * DAY;
  const days = Array.from({ length: 14 }, (_, i) => today - (13 - i) * DAY);
  const get = (d: number, dir: "in" | "out") => daily.find((x) => x.day === d && x.direction === dir)?.n ?? 0;
  const max = Math.max(4, ...days.map((d) => get(d, "out")), ...days.map((d) => get(d, "in")));
  return (
    <div className="adm-bars" role="img" aria-label="Emails sent and replies per day">
      {days.map((d) => (
        <div key={d} className="adm-bar-col" title={`${new Date(d).toLocaleDateString()}: ${get(d, "out")} sent, ${get(d, "in")} replies`}>
          <div className="adm-bar-pair">
            <i className="out" style={{ height: `${(get(d, "out") / max) * 100}%` }} />
            <i className="in" style={{ height: `${(get(d, "in") / max) * 100}%` }} />
          </div>
          <span>{new Date(d).getUTCDate()}</span>
        </div>
      ))}
    </div>
  );
}
