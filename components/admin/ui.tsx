"use client";

import { useEffect, useRef, type ReactNode } from "react";

// ---------- API ----------

export class ApiError extends Error {}

export async function api<T = unknown>(path: string, opts: { method?: string; body?: unknown } = {}): Promise<T> {
  const res = await fetch(`/api/admin/${path}`, {
    method: opts.method ?? (opts.body !== undefined ? "POST" : "GET"),
    headers: opts.body !== undefined ? { "content-type": "application/json" } : undefined,
    body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
    credentials: "same-origin",
  });
  const data = await res.json().catch(() => ({ error: `Server error (${res.status})` }));
  if (res.status === 401 && path !== "login") window.dispatchEvent(new Event("admin:logout"));
  if (!res.ok) throw new ApiError(data.error || `Request failed (${res.status})`);
  return data as T;
}

// ---------- formatting ----------

export function timeAgo(t: number): string {
  const s = Math.round((Date.now() - t) / 1000);
  const f = (n: number, u: string) => `${n}${u}`;
  if (s < 0) return inFuture(-s);
  if (s < 60) return "now";
  if (s < 3600) return f(Math.floor(s / 60), "m");
  if (s < 86400) return f(Math.floor(s / 3600), "h");
  if (s < 86400 * 7) return f(Math.floor(s / 86400), "d");
  return new Date(t).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function inFuture(s: number): string {
  if (s < 3600) return `in ${Math.max(1, Math.floor(s / 60))}m`;
  if (s < 86400) return `in ${Math.floor(s / 3600)}h`;
  return `in ${Math.floor(s / 86400)}d`;
}

export function fmtDateTime(t: number): string {
  return new Date(t).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

/** Value for <input type="datetime-local"> in the browser's time zone. */
export function toLocalInput(t: number): string {
  const d = new Date(t - new Date(t).getTimezoneOffset() * 60000);
  return d.toISOString().slice(0, 16);
}

export function initials(s: string): string {
  const parts = s.replace(/[@<].*$/, "").split(/[\s._-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "?") + (parts[1]?.[0] ?? "")).toUpperCase();
}

// ---------- icons ----------

const P: Record<string, ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  inbox: (
    <>
      <path d="M3 13h5l1.5 3h5L16 13h5" />
      <path d="M5.5 5h13L21 13v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5.5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.6.8 2.7 2.6 3 5.2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  left: <path d="m15 6-6 6 6 6" />,
  right: <path d="m9 6 6 6-6 6" />,
  send: <path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" />,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />,
  trash: <path d="M4 7h16M10 11v6M14 11v6M5 7l1 13h12l1-13M9 7V4h6v3" />,
  refresh: <path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="m5 12 5 5 9-10" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  form: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 3.5 5.8 3.5 9s-1 6.2-3.5 9c-2.5-2.8-3.5-5.8-3.5-9s1-6.2 3.5-9z" />
    </>
  ),
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
  logout: <path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 8l-4 4 4 4M6 12h10" />,
  play: <path d="M7 5v14l11-7z" />,
  pause: <path d="M8 5v14M16 5v14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
    </>
  ),
};

export function Icon({ name, size = 18, className }: { name: keyof typeof P | string; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name] ?? P.globe}
    </svg>
  );
}

const BRAND: Record<string, { label: string; color: string; glyph: ReactNode }> = {
  twitter: {
    label: "X (Twitter)",
    color: "#0f0f0f",
    glyph: <path fill="#fff" d="M13.6 10.6 19.4 4h-1.4l-5 5.7L9 4H4.4l6.1 8.8L4.4 20h1.4l5.3-6.1 4.3 6.1h4.6zm-1.9 2.2-.6-.9L6.3 5h2.1l4 5.6.6.9 5.2 7.4h-2.1z" />,
  },
  linkedin: {
    label: "LinkedIn",
    color: "#0a66c2",
    glyph: <path fill="#fff" d="M7.2 9.5H4.6V19h2.6zM5.9 5.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19.4 13.6c0-2.6-1.4-4.3-3.6-4.3-1.3 0-2.2.7-2.6 1.4V9.5h-2.5V19h2.6v-5c0-1.3.6-2.2 1.8-2.2 1.1 0 1.7.8 1.7 2.2v5h2.6z" />,
  },
  facebook: {
    label: "Facebook",
    color: "#1877f2",
    glyph: <path fill="#fff" d="M13.4 20v-6.6h2.2l.4-2.6h-2.6V9.2c0-.7.3-1.3 1.4-1.3H16V5.6c-.2 0-1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v1.9H8.5v2.6h2.2V20z" />,
  },
  medium: {
    label: "Medium",
    color: "#111",
    glyph: (
      <g fill="#fff">
        <ellipse cx="8" cy="12" rx="4.2" ry="4.3" />
        <ellipse cx="15.4" cy="12" rx="2.1" ry="4" />
        <ellipse cx="19.2" cy="12" rx=".8" ry="3.6" />
      </g>
    ),
  },
  email: { label: "Email", color: "#5b5bd6", glyph: <path fill="none" stroke="#fff" strokeWidth="1.6" d="M5 7h14v10H5zM5.5 7.5 12 12.5l6.5-5" /> },
  form: { label: "Website form", color: "#0d9488", glyph: <path fill="none" stroke="#fff" strokeWidth="1.6" d="M7 5h10v14H7zM9.5 9h5M9.5 12h5M9.5 15h3" /> },
  booking: { label: "Booking", color: "#d97706", glyph: <path fill="none" stroke="#fff" strokeWidth="1.6" d="M5.5 7h13v11.5h-13zM5.5 10.5h13M9 5v3.5M15 5v3.5" /> },
};

export const PLATFORM_LABEL = (p: string) => BRAND[p]?.label ?? p;

export function Brand({ platform, size = 22 }: { platform: string; size?: number }) {
  const b = BRAND[platform] ?? BRAND.email;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label={b.label} role="img" style={{ flex: "none" }}>
      <rect width="24" height="24" rx="6" fill={b.color} />
      {b.glyph}
    </svg>
  );
}

// ---------- building blocks ----------

export function Modal({
  title,
  onClose,
  children,
  wide,
  footer,
}: {
  title: ReactNode;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
  footer?: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);
  return (
    <dialog
      ref={ref}
      className={`adm-modal${wide ? " wide" : ""}`}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className="adm-modal-box">
        <header className="adm-modal-head">
          <h2>{title}</h2>
          <button className="adm-icon-btn" onClick={onClose} aria-label="Close">
            <Icon name="x" />
          </button>
        </header>
        <div className="adm-modal-body">{children}</div>
        {footer && <footer className="adm-modal-foot">{footer}</footer>}
      </div>
    </dialog>
  );
}

export function Empty({ icon, title, children }: { icon: string; title: string; children?: ReactNode }) {
  return (
    <div className="adm-empty">
      <div className="adm-empty-icon">
        <Icon name={icon} size={22} />
      </div>
      <b>{title}</b>
      {children && <p>{children}</p>}
    </div>
  );
}

export function Field({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <label className="adm-field">
      <span className="adm-label">{label}</span>
      {children}
      {hint && <span className="adm-hint">{hint}</span>}
    </label>
  );
}

export function Status({ value }: { value: string }) {
  return <span className={`adm-status s-${value}`}>{value.replace(/_/g, " ")}</span>;
}

export function CopyField({ value }: { value: string }) {
  return (
    <div className="adm-copy">
      <input readOnly value={value} onFocus={(e) => e.currentTarget.select()} />
      <button type="button" className="adm-btn" onClick={() => navigator.clipboard?.writeText(value)}>
        <Icon name="copy" size={15} /> Copy
      </button>
    </div>
  );
}

export type Toast = (msg: string, kind?: "ok" | "error") => void;
