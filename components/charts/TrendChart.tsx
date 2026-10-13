"use client";

import { useState } from "react";

type Point = { label: string; value: number };

const W = 560;
const H = 220;
const PAD = { top: 18, right: 54, bottom: 30, left: 44 };
const INK = "#3f6b0a";

const compact = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "")}K` : String(Math.round(n));

/** Rounds the axis max up to a clean number and returns 4 evenly spaced ticks. */
function ticks(max: number) {
  const raw = max / 4;
  const mag = 10 ** Math.floor(Math.log10(raw || 1));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? raw;
  return [0, 1, 2, 3, 4].map((i) => i * step);
}

/**
 * A single-series line or column chart with a hover tooltip. One measure per
 * chart; for two measures use two charts, never a second axis.
 */
export function TrendChart({
  points,
  kind = "line",
  unit,
  format = (n: number) => n.toLocaleString("en-US"),
  max,
  label,
}: {
  points: Point[];
  kind?: "line" | "bar";
  /** Shown in the tooltip after the value, e.g. "clicks". */
  unit: string;
  format?: (n: number) => string;
  /** Fixed axis maximum, e.g. the number of questions asked. */
  max?: number;
  /** Accessible name for the chart. */
  label: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const t = ticks(max ?? Math.max(...points.map((p) => p.value)));
  const top = max ?? t[4];
  const iw = W - PAD.left - PAD.right;
  const ih = H - PAD.top - PAD.bottom;
  const band = iw / points.length;
  const x = (i: number) => PAD.left + band * i + band / 2;
  const y = (v: number) => PAD.top + ih - (v / top) * ih;
  const last = points.length - 1;
  const line = points.map((p, i) => `${i ? "L" : "M"}${x(i)},${y(p.value)}`).join("");
  const area = `${line}L${x(last)},${y(0)}L${x(0)},${y(0)}Z`;
  const barW = Math.min(24, band * 0.5);
  const step = max ? ([1, 2, 5, 10, 25, 50, 100].find((s) => max / s <= 5) ?? max) : 0;
  const yTicks = max ? Array.from({ length: Math.floor(max / step) + 1 }, (_, i) => i * step) : t;

  return (
    <div className="tchart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} onMouseLeave={() => setHover(null)}>
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(v)} y2={y(v)} className="grid" />
            <text x={PAD.left - 8} y={y(v) + 4} textAnchor="end" className="axis">
              {compact(v)}
            </text>
          </g>
        ))}
        {points.map((p, i) => (
          <text key={p.label} x={x(i)} y={H - 8} textAnchor="middle" className="axis">
            {p.label}
          </text>
        ))}
        {hover !== null && <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={y(0)} className="cross" />}
        {kind === "line" ? (
          <>
            <path d={area} fill={INK} opacity={0.1} />
            <path d={line} fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            {points.map((p, i) =>
              i === last || i === hover ? (
                <circle key={p.label} cx={x(i)} cy={y(p.value)} r={5} fill={INK} stroke="#fff" strokeWidth={2} />
              ) : null,
            )}
          </>
        ) : (
          points.map((p, i) => {
            const h = y(0) - y(p.value);
            const r = Math.min(4, h);
            const x0 = x(i) - barW / 2;
            const y0 = y(p.value);
            // Rounded data end, square at the baseline.
            const d = h
              ? `M${x0},${y(0)}V${y0 + r}Q${x0},${y0} ${x0 + r},${y0}H${x0 + barW - r}Q${x0 + barW},${y0} ${x0 + barW},${y0 + r}V${y(0)}Z`
              : "";
            return <path key={p.label} d={d} fill={INK} opacity={hover === null || hover === i ? 1 : 0.55} />;
          })
        )}
        <text
          x={kind === "line" ? x(last) + 10 : x(last)}
          y={kind === "line" ? y(points[last].value) + 4 : y(points[last].value) - 8}
          textAnchor={kind === "line" ? "start" : "middle"}
          className="end"
        >
          {format(points[last].value)}
        </text>
        {points.map((p, i) => (
          <rect
            key={p.label}
            x={PAD.left + band * i}
            y={PAD.top}
            width={band}
            height={ih}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
            onTouchStart={() => setHover(i)}
          />
        ))}
      </svg>
      {hover !== null && (
        <div className="ttip" style={{ left: `${(x(hover) / W) * 100}%` }} role="status">
          <b>{format(points[hover].value)}</b> {unit}
          <span>{points[hover].label}</span>
        </div>
      )}
    </div>
  );
}
