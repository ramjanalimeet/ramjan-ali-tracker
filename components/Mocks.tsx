const PINS = (
  <>
    <i className="me" style={{ left: "46%", top: "38%" }}></i>
    <i style={{ left: "22%", top: "55%" }}></i>
    <i style={{ left: "72%", top: "24%" }}></i>
  </>
);

const ROWS = (name: string) => [
  { name, detail: "4.9 · Open 24 hours", stars: "★★★★★", me: true },
  { name: "Competitor A", detail: "Closes 6 PM", stars: "★★★★", me: false },
  { name: "Competitor B", detail: "Closes 6 PM", stars: "★★★★", me: false },
];

/** A Google map pack illustration with the client ranked first. */
export function MapMock({ query, name }: { query: string; name: string }) {
  return (
    <div className="mock rv" aria-hidden="true">
      <div className="mcard">
        <div className="mq">🔍 {query}</div>
        <div className="mmap">{PINS}</div>
        <ul>
          {ROWS(name).map((r, i) => (
            <li className={r.me ? "mrow me" : "mrow"} key={r.name}>
              <span className="pos">{i + 1}</span>
              <div>
                <b>{r.name}</b>
                <small>
                  <span className="st">{r.stars}</span>
                  {r.me ? " " : "☆ · "}
                  {r.detail}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** An AI assistant answer illustration with the client named first. */
export function AiMock({ prompt, name }: { prompt: string; name: string }) {
  return (
    <div className="mock rv" aria-hidden="true">
      <div className="mcard">
        <div className="mq">✦ {prompt}</div>
        <p style={{ fontSize: 13, color: "#555", margin: "0 0 6px" }}>Here are some well-reviewed options near you:</p>
        <ul>
          {ROWS(name).map((r, i) => (
            <li className={r.me ? "mrow me" : "mrow"} key={r.name}>
              <span className="pos">{i + 1}</span>
              <div>
                <b>{r.name}</b>
                <small>
                  <span className="st">{r.stars}</span>
                  {r.me ? " 4.9 · Highly recommended" : "☆ · Fewer reviews"}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
