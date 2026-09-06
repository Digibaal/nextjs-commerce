import { Eyebrow } from 'components/maniflow/bits';
import { Bovenleiding } from 'components/maniflow/sfeer';
import { examples } from 'lib/maniflow';

export const metadata = {
  title: 'Voorbeelden',
  description: 'Zes levensgebieden, uitgewerkt van bestemming tot reroute.'
};

const frictionLabel = {
  intern: 'Intern',
  extern: 'Extern',
  structureel: 'Structureel'
} as const;

export default function Voorbeelden() {
  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 1.5rem' }}
      >
        <Eyebrow>Zes levensgebieden</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Hoe het eruitziet als iemand het echt doet.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          Zes uitgewerkte routes: van bestemming via frictie naar bewijs en
          bijsturen. Fictieve personen, realistische uitkomsten — inclusief de
          dingen die tegenvielen.
        </p>
        <div className="cluster" style={{ marginTop: '2rem' }}>
          {examples.map((e) => (
            <a className="pill" href={`#${e.slug}`} key={e.slug}>
              {e.domain}
            </a>
          ))}
        </div>
      </header>

      <div className="shell">
        <Bovenleiding />
      </div>

      <div className="shell" style={{ paddingBottom: '3rem' }}>
        {examples.map((e, i) => (
          <section
            className="annot"
            id={e.slug}
            key={e.slug}
            style={{ scrollMarginTop: '5rem' }}
          >
            <div className="annot-label">
              <span className="annot-num">
                {String(i + 1).padStart(2, '0')}
              </span>
              {e.domain}
            </div>
            <div>
              <h2
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.1rem',
                  maxWidth: '30ch'
                }}
              >
                {e.headline}
              </h2>

              <p className="mono faint" style={{ marginBottom: '0.5rem' }}>
                Vertrekpunt
              </p>
              <p className="measure">{e.start}</p>

              <p
                className="mono faint"
                style={{ marginBottom: '0.5rem', marginTop: '1.6rem' }}
              >
                Bestemming
              </p>
              <p className="measure">{e.destination}</p>

              <p
                className="mono faint"
                style={{ marginBottom: '0.5rem', marginTop: '1.6rem' }}
              >
                Vertaling
              </p>
              <p className="measure">{e.translation}</p>

              <p
                className="mono faint"
                style={{ marginBottom: '0.7rem', marginTop: '1.8rem' }}
              >
                Frictie-triage
              </p>
              <div className="g3 grid">
                {e.friction.map((f) => (
                  <div className="card" key={f.type}>
                    <span className="card-k">{frictionLabel[f.type]}</span>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>

              <div
                className="ticket"
                style={{ marginTop: '1.8rem', maxWidth: '36rem' }}
              >
                <div className="ticket-head">
                  <span>Experiment</span>
                  <span>{e.domain}</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.55 }}>
                  {e.experiment}
                </p>
              </div>

              <p
                className="mono faint"
                style={{ marginBottom: '0.5rem', marginTop: '1.8rem' }}
              >
                Evidence Log
              </p>
              <ul className="qs">
                {e.evidence.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <p
                className="mono faint"
                style={{ marginBottom: '0.5rem', marginTop: '1.6rem' }}
              >
                Reroute
              </p>
              <p className="measure">{e.reroute}</p>

              <div className="disruption" style={{ marginTop: '1.5rem' }}>
                <p className="disruption-k">Let op</p>
                <p>{e.note}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
