import type { CaseStudy } from "@/lib/case-studies";
import { monthLabel } from "@/lib/case-studies";
import { TrendChart } from "./TrendChart";

const pct = (n: number, d: number) => `${Math.round((n / d) * 100)}%`;

/** A "view the data" table under each chart, so nothing depends on seeing the chart. */
function DataTable({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <details className="ctable">
      <summary>View the data</summary>
      <div className="ctable-scroll">
        <table>
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={String(r[0])}>
                {r.map((c, i) => (
                  <td key={i}>{typeof c === "number" ? c.toLocaleString("en-US") : c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export function SearchConsoleCharts({ data }: { data: NonNullable<CaseStudy["searchConsole"]> }) {
  const clicks = data.clicks.map((p) => ({ label: monthLabel(p.month), value: p.value }));
  const impressions = data.impressions.map((p) => ({ label: monthLabel(p.month), value: p.value }));
  return (
    <div className="chart-pair">
      <figure className="chart-card">
        <figcaption>
          <b>Total clicks</b>
          <span>Google Search Console, per month</span>
        </figcaption>
        <TrendChart points={clicks} unit="clicks" label="Monthly clicks from Google Search" />
      </figure>
      <figure className="chart-card">
        <figcaption>
          <b>Total impressions</b>
          <span>Google Search Console, per month</span>
        </figcaption>
        <TrendChart points={impressions} unit="impressions" label="Monthly impressions in Google Search" />
      </figure>
      <DataTable
        head={["Month", "Clicks", "Impressions"]}
        rows={data.clicks.map((c, i) => [monthLabel(c.month, true), c.value, data.impressions[i]?.value ?? "-"])}
      />
    </div>
  );
}

function Grid({ grid, caption }: { grid: number[][]; caption: string }) {
  const cells = grid.flat();
  const top3 = cells.filter((n) => n > 0 && n <= 3).length;
  return (
    <figure className="chart-card grid-card">
      <figcaption>
        <b>{caption}</b>
        <span>
          {top3} of {cells.length} points in the top 3
        </span>
      </figcaption>
      <div className="rgrid" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 1fr)` }}>
        {cells.map((n, i) => (
          <span
            key={i}
            className={n === 0 ? "none" : n <= 3 ? "top" : n <= 10 ? "mid" : "low"}
            title={n === 0 ? "Not in the top 20" : `Rank ${n}`}
          >
            {n === 0 ? "20+" : n}
          </span>
        ))}
      </div>
    </figure>
  );
}

export function MapGridCompare({ data }: { data: NonNullable<CaseStudy["mapGrid"]> }) {
  return (
    <div>
      <div className="chart-pair">
        <Grid grid={data.before.grid} caption={`Before · ${monthLabel(data.before.date, true)}`} />
        <Grid grid={data.after.grid} caption={`After · ${monthLabel(data.after.date, true)}`} />
      </div>
      <div className="report-key">
        <span>
          <i className="top" /> 1 to 3
        </span>
        <span>
          <i className="mid" /> 4 to 10
        </span>
        <span>
          <i className="low" /> 11 to 20
        </span>
        <span>
          <i className="none" /> Not in top 20
        </span>
      </div>
    </div>
  );
}

export function AiVisibilityCharts({ data }: { data: NonNullable<CaseStudy["ai"]> }) {
  const months = data.months.map((m) => ({ label: monthLabel(m.month), value: m.mentioned }));
  return (
    <div className="chart-pair">
      <figure className="chart-card">
        <figcaption>
          <b>Questions where the business was named</b>
          <span>Out of {data.questions} tracked questions, per month</span>
        </figcaption>
        <TrendChart
          points={months}
          kind="bar"
          unit={`of ${data.questions} questions`}
          max={data.questions}
          label="AI answers naming the business, per month"
        />
      </figure>
      <figure className="chart-card">
        <figcaption>
          <b>By AI tool, latest month</b>
          <span>Named / questions asked</span>
        </figcaption>
        <ul className="hbars">
          {data.byTool.map((t) => (
            <li key={t.tool} title={`${t.tool}: named in ${t.mentioned} of ${t.asked}`}>
              <span className="hb-label">{t.tool}</span>
              <span className="hb-track">
                <span className="hb-fill" style={{ width: pct(t.mentioned, t.asked) }} />
              </span>
              <span className="hb-val">
                {t.mentioned}/{t.asked}
              </span>
            </li>
          ))}
        </ul>
      </figure>
      <DataTable
        head={["Month", "Named in", "Questions"]}
        rows={data.months.map((m) => [monthLabel(m.month, true), m.mentioned, data.questions])}
      />
    </div>
  );
}

/** Tiny click trend for case study cards. Decorative; the card text carries the numbers. */
export function Sparkline({ values }: { values: number[] }) {
  const w = 120;
  const h = 36;
  const max = Math.max(...values);
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - 3 - (v / max) * (h - 6)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="spark" aria-hidden="true">
      <polyline
        points={pts}
        fill="none"
        stroke="#3f6b0a"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
