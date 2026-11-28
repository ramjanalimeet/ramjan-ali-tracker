import type { CountryDeep } from "@/lib/cities/deep-types";

/**
 * Country-level depth shared by a country hub and its city guides: how local search
 * works there, the directories that matter, language and listing format, rules to
 * respect and practical tips. Renders two sections (alt, then plain).
 */
export function CountryDepth({ deep, country, place }: { deep: CountryDeep; country: string; place?: string }) {
  const where = place ?? country;
  return (
    <>
      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Local search in {country}</span>
            <h2>How customers find local businesses in {where}.</h2>
            {deep.overview.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="panel rv">
            <h3>Language and listing format</h3>
            <p>{deep.language}</p>
            <h3 style={{ marginTop: 18 }}>Rules to respect</h3>
            <p>{deep.rules}</p>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Directories and platforms</span>
              <h2>Where to list a business in {where}.</h2>
            </div>
            <p>
              Beyond Google, these are the profiles customers and AI tools check in {country}. Every one should show the
              same name, address, phone and services.
            </p>
          </div>
          <div className="grid g3">
            {deep.directories.map((d) => (
              <div className="card rv" key={d.name}>
                <h3>{d.name}</h3>
                <p>{d.why}</p>
              </div>
            ))}
          </div>
          <div className="panel rv" style={{ marginTop: 22 }}>
            <h3>Practical tips for {country}</h3>
            <ul className="ticks">
              {deep.tips.map((t) => (
                <li key={t.slice(0, 24)}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
