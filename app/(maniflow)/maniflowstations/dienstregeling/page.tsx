import { Annot, Eyebrow } from 'components/maniflow/bits';
import { Vertrekbord } from 'components/maniflow/sfeer';
import {
  dailySession,
  integration,
  progressMethod,
  tracks
} from 'lib/maniflow';

export const metadata = {
  title: 'Dienstregeling',
  description:
    '21, 30 of 42 dagen — plus de meetmethode zonder obsessieve tracking.'
};

export default function Dienstregeling() {
  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 1.5rem' }}
      >
        <Eyebrow>Dienstregeling</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Drie tempo&apos;s, één dagelijkse sessie, drie meters.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          De inhoud is identiek. Wat verschilt is hoeveel tijd de werkelijkheid
          krijgt om te antwoorden — en hoeveel energie het van je vraagt.
        </p>
      </header>

      <div className="shell">
        <Vertrekbord />
      </div>

      {/* ------------------------------------------------------------ sporen */}
      <div className="shell">
        {tracks.map((t) => (
          <Annot
            key={t.slug}
            n={String(t.days)}
            label={`${t.name} — ${t.days} dagen`}
          >
            <p className="measure" style={{ fontSize: '1.06rem' }}>
              {t.forWho}
            </p>
            <div className="cluster" style={{ margin: '1.2rem 0 1.6rem' }}>
              <span className="pill">{t.perDay} per dag</span>
              <span className="pill">{t.rhythm}</span>
            </div>
            <table className="tbl">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '10rem' }}>
                    Wanneer
                  </th>
                  <th scope="col">Wat</th>
                </tr>
              </thead>
              <tbody>
                {t.schedule.map((row) => (
                  <tr key={row.label}>
                    <td className="mono" style={{ color: 'var(--ink-3)' }}>
                      {row.label}
                    </td>
                    <td>{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="disruption" style={{ marginTop: '1.5rem' }}>
              <p className="disruption-k">Wat dit spoor niet doet</p>
              <p>{t.warning}</p>
            </div>
          </Annot>
        ))}

        {/* ------------------------------------------------------ perronsessie */}
        <Annot n="—" label="Dagelijkse eenheid">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>
            {dailySession.name}
          </h2>
          <p className="mono sig" style={{ marginBottom: '1.2rem' }}>
            {dailySession.duration}
          </p>
          <p className="measure">{dailySession.intro}</p>
          <div className="g2 grid" style={{ marginTop: '1.6rem' }}>
            {dailySession.steps.map((s) => (
              <div className="card" key={s.n}>
                <span className="card-k">
                  {s.n} · {s.time}
                </span>
                <h3>{s.label}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="disruption" style={{ marginTop: '1.6rem' }}>
            <p className="disruption-k">Op een slechte dag</p>
            <p>{dailySession.lowEnergy}</p>
          </div>
        </Annot>

        {/* ------------------------------------------------------------ meten */}
        <Annot n="—" label="Voortgang meten">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.9rem' }}>
            {progressMethod.title}
          </h2>
          <p className="measure">{progressMethod.principle}</p>

          <table className="tbl" style={{ marginTop: '1.8rem' }}>
            <thead>
              <tr>
                <th scope="col" style={{ width: '8rem' }}>
                  Meter
                </th>
                <th scope="col">Vraag</th>
                <th scope="col">Wat telt mee</th>
                <th scope="col">Gezonde band</th>
              </tr>
            </thead>
            <tbody>
              {progressMethod.gauges.map((g) => (
                <tr key={g.name}>
                  <td style={{ fontWeight: 600 }}>{g.name}</td>
                  <td>{g.question}</td>
                  <td className="dim">{g.counts}</td>
                  <td className="dim">{g.band}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mono faint" style={{ margin: '2rem 0 0.6rem' }}>
            Cadans
          </p>
          <dl className="deflist">
            {progressMethod.cadence.map((c) => (
              <div key={c.when}>
                <dt>{c.when}</dt>
                <dd>{c.what}</dd>
              </div>
            ))}
          </dl>

          <p className="mono sig" style={{ margin: '2rem 0 0.6rem' }}>
            Anti-obsessieregels
          </p>
          <ol className="qs">
            {progressMethod.antiRules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        </Annot>

        {/* -------------------------------------------------------- integratie */}
        <Annot n="—" label="Afsluiting">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>
            {integration.name}
          </h2>
          <p className="mono sig" style={{ marginBottom: '1.2rem' }}>
            {integration.duration}
          </p>
          <p className="measure">{integration.intro}</p>
          <div className="g2 grid" style={{ marginTop: '1.6rem' }}>
            {integration.steps.map((s) => (
              <div className="card" key={s.n}>
                <span className="card-k">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Annot>
      </div>

      <section className="shell">
        <div className="departure">
          <p>{integration.closing}</p>
        </div>
      </section>
    </>
  );
}
