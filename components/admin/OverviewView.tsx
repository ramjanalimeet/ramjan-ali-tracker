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
    <div className="adm-overview">
      <header className="adm-overview-hero">
        <div className="adm-overview-profile">
          <img src="/assets/ramjan-ali-avatar.webp" alt="" width="52" height="52" />
          <div>
            <span className="adm-overview-kicker"><i /> Workspace overview</span>
            <h1>{greeting()}, Ramjan</h1>
            <p>{new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</p>
          </div>
        </div>
        <div className="adm-overview-actions">
          <button className="adm-btn" onClick={() => ctx.go("contacts")}><Icon name="users" size={16} /> Contacts</button>
          <button className="adm-btn primary" onClick={() => ctx.go("inbox")}><Icon name="mail" size={16} /> Open inbox</button>
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

      <div className="adm-overview-stats">
        <Stat icon="inbox" label="Unread messages" value={o.unread} sub={o.unread ? "Needs your attention" : "You're all caught up"} tone="lime" onClick={() => ctx.go("inbox")} />
        <Stat icon="mail" label="Replies this week" value={o.repliesWeek} sub="Client conversations" tone="violet" />
        <Stat icon="sparkle" label="New leads" value={o.leadsWeek} sub="Forms & bookings · 7 days" tone="blue" />
        <Stat icon="users" label="Contacts" value={o.contacts} sub={`${o.sentToday} email${o.sentToday === 1 ? "" : "s"} sent today`} tone="dark" onClick={() => ctx.go("contacts")} />
      </div>

      <div className="adm-overview-grid">
        <section className="adm-card adm-overview-inbox">
          <div className="adm-card-head">
            <div><span className="adm-section-kicker">Conversations</span><h2>Latest in inbox</h2></div>
            <button className="adm-link" onClick={() => ctx.go("inbox")}>View all</button>
          </div>
          {o.recentInbox.length ? (
            <ul className="adm-overview-message-list">
              {o.recentInbox.map((m) => (
                <li key={m.id} className={m.read ? "" : "unread"} onClick={() => ctx.go("inbox")}>
                  <Brand platform={m.channel} size={34} />
                  <div>
                    <div><b>{m.from_name || m.from_addr}</b><time>{timeAgo(m.created_at)}</time></div>
                    <span>{m.subject || m.body.slice(0, 90)}</span>
                  </div>
                  <Icon name="chevron" size={15} />
                </li>
              ))}
            </ul>
          ) : (
            <Empty icon="inbox" title="Inbox zero">
              Replies, form submissions and bookings land here.
            </Empty>
          )}
        </section>

        <div className="adm-overview-side">
          <section className="adm-card adm-overview-calls">
            <div className="adm-card-head"><div><span className="adm-section-kicker">Schedule</span><h2>Upcoming calls</h2></div></div>
            {o.upcomingBookings.length ? (
            <ul className="adm-list">
              {o.upcomingBookings.map((b) => (
                <li key={b.id}>
                  <Brand platform="booking" size={28} />
                  <div>
                    <b>{b.name || b.email}</b>
                    <span>{b.title} · {fmtDateTime(b.start_at)}</span>
                  </div>
                  {b.meeting_url && <a className="adm-btn sm" href={b.meeting_url} target="_blank" rel="noopener">Join</a>}
                </li>
              ))}
            </ul>
          ) : (
            <Empty icon="calendar" title="No upcoming calls">
              New bookings will appear here automatically.
            </Empty>
          )}
          </section>

          {o.activity.length > 0 && <section className="adm-card adm-overview-activity">
            <div className="adm-card-head"><div><span className="adm-section-kicker">Live updates</span><h2>Recent activity</h2></div></div>
            <div className="adm-overview-log">{o.activity.slice(0, 6).map((a) => <div key={a.id} className={a.level}><i /><div><span>{a.text}</span><time>{timeAgo(a.created_at)}</time></div></div>)}</div>
          </section>}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value, sub, tone, onClick }: { icon: string; label: string; value: number; sub?: string; tone: string; onClick?: () => void }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag className={`adm-overview-stat ${tone}${onClick ? " clickable" : ""}`} onClick={onClick}>
      <span className="adm-overview-stat-icon"><Icon name={icon} size={18} /></span>
      <div><span>{label}</span><b>{value.toLocaleString()}</b><small>{sub}</small></div>
    </Tag>
  );
}
