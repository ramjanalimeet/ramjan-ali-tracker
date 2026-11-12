"use client";

import { useCallback, useEffect, useState } from "react";
import { CalendarView } from "./CalendarView";
import { ContactsView } from "./ContactsView";
import { EmailView } from "./EmailView";
import { InboxView } from "./InboxView";
import { OverviewView } from "./OverviewView";
import { SettingsModal, type SettingsTab } from "./SettingsModal";
import { SocialView } from "./SocialView";
import type { Account, View } from "./types";
import { api, Icon } from "./ui";

const NAV: { id: View; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "inbox", label: "Inbox", icon: "inbox" },
  { id: "calendar", label: "Calendar", icon: "calendar" },
  { id: "social", label: "Social posts", icon: "share" },
  { id: "email", label: "Email", icon: "mail" },
  { id: "contacts", label: "Contacts", icon: "users" },
];

export interface AppCtx {
  accounts: Account[];
  reloadAccounts: () => Promise<void>;
  openSettings: (tab?: SettingsTab) => void;
  go: (v: View) => void;
  toast: (msg: string, kind?: "ok" | "error") => void;
  refreshBadge: () => void;
}

export function AdminApp() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    api("me")
      .then(() => setAuthed(true))
      .catch(() => setAuthed(false));
    const out = () => setAuthed(false);
    window.addEventListener("admin:logout", out);
    return () => window.removeEventListener("admin:logout", out);
  }, []);

  if (authed === null) return <div className="adm-boot" />;
  if (!authed) return <Login onDone={() => setAuthed(true)} />;
  return <Shell />;
}

function Login({ onDone }: { onDone: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <div className="adm-login">
      <form
        className="adm-login-card"
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          setError("");
          try {
            await api("login", { body: { password } });
            onDone();
          } catch (err) {
            setError((err as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <div className="adm-ws-logo big">R</div>
        <h1>Ramjan Ali</h1>
        <p>Sign in to your workspace</p>
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="adm-error">{error}</div>}
        <button className="adm-btn primary block" disabled={busy || !password}>
          {busy ? "Signing in…" : "Continue"}
        </button>
      </form>
    </div>
  );
}

function Shell() {
  const [view, setView] = useState<View>("overview");
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [unread, setUnread] = useState(0);
  const [settings, setSettings] = useState<SettingsTab | null>(null);
  const [toasts, setToasts] = useState<{ id: number; msg: string; kind: string }[]>([]);
  const [navOpen, setNavOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const toast = useCallback((msg: string, kind: "ok" | "error" = "ok") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, kind }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), kind === "error" ? 6000 : 3000);
  }, []);

  const reloadAccounts = useCallback(async () => {
    setAccounts(await api<Account[]>("accounts"));
  }, []);

  const refreshBadge = useCallback(() => {
    api<{ unread: number }>("overview")
      .then((o) => setUnread(o.unread))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const h = location.hash.slice(1) as View;
      if (NAV.some((n) => n.id === h)) setView(h);
      if (location.hash === "#settings") setSettings("social");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    reloadAccounts().catch(() => {});
    refreshBadge();
    const t = setInterval(refreshBadge, 60_000);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      clearInterval(t);
    };
  }, [reloadAccounts, refreshBadge]);

  const go = (v: View) => {
    setView(v);
    setNavOpen(false);
    history.replaceState(null, "", `#${v}`);
  };

  const ctx: AppCtx = { accounts, reloadAccounts, openSettings: (t) => setSettings(t ?? "social"), go, toast, refreshBadge };
  const current = NAV.find((n) => n.id === view)!;

  return (
    <div className={`adm${navOpen ? " nav-open" : ""}`}>
      <aside className="adm-side">
        <div className="adm-ws-wrap">
          <button className="adm-ws" onClick={() => setMenu((m) => !m)} aria-expanded={menu}>
            <span className="adm-ws-logo">R</span>
            <span className="adm-ws-name">Ramjan Ali</span>
            <Icon name="chevron" size={15} />
          </button>
          {menu && (
            <div className="adm-menu" onMouseLeave={() => setMenu(false)}>
              <a href="/" target="_blank" rel="noopener">
                <Icon name="globe" size={16} /> Open website
              </a>
              <button
                onClick={async () => {
                  await api("logout", { body: {} }).catch(() => {});
                  location.reload();
                }}
              >
                <Icon name="logout" size={16} /> Sign out
              </button>
            </div>
          )}
        </div>
        <nav className="adm-nav">
          {NAV.map((n) => (
            <button key={n.id} className={`adm-nav-item${view === n.id ? " active" : ""}`} onClick={() => go(n.id)}>
              <Icon name={n.icon} />
              <span>{n.label}</span>
              {n.id === "inbox" && unread > 0 && <span className="adm-badge">{unread > 99 ? "99+" : unread}</span>}
            </button>
          ))}
        </nav>
        <div className="adm-side-foot">
          <button className="adm-nav-item" onClick={() => setSettings("social")}>
            <Icon name="settings" />
            <span>Settings</span>
          </button>
        </div>
      </aside>
      <div className="adm-scrim" onClick={() => setNavOpen(false)} />

      <div className="adm-main">
        <div className="adm-topbar">
          <button className="adm-icon-btn adm-burger" onClick={() => setNavOpen(true)} aria-label="Menu">
            <Icon name="menu" />
          </button>
          <span className="adm-crumb">
            <Icon name={current.icon} size={16} /> {current.label}
          </span>
        </div>
        <div className="adm-page">
          {view === "overview" && <OverviewView ctx={ctx} />}
          {view === "inbox" && <InboxView ctx={ctx} />}
          {view === "calendar" && <CalendarView ctx={ctx} />}
          {view === "social" && <SocialView ctx={ctx} />}
          {view === "email" && <EmailView ctx={ctx} />}
          {view === "contacts" && <ContactsView ctx={ctx} />}
        </div>
      </div>

      {settings && (
        <SettingsModal
          ctx={ctx}
          initial={settings}
          onClose={() => {
            setSettings(null);
            if (location.hash === "#settings") history.replaceState(null, "", `#${view}`);
          }}
        />
      )}

      <div className="adm-toasts" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`adm-toast ${t.kind}`}>
            {t.kind === "ok" ? <Icon name="check" size={16} /> : <Icon name="x" size={16} />} {t.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
