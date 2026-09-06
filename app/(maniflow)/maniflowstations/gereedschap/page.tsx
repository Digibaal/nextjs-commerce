import { Eyebrow } from 'components/maniflow/bits';
import { Wisselstraat } from 'components/maniflow/sfeer';
import { tools } from 'lib/maniflow';

export const metadata = {
  title: 'Gereedschap',
  description: 'De vaste tools en templates die door de hele route terugkomen.'
};

export default function Gereedschap() {
  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 1.5rem' }}
      >
        <Eyebrow>Gereedschap</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Achttien vaste instrumenten. Meer heb je niet nodig.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          Elk gereedschap hoort bij een station en blijft daarna bruikbaar. Bij
          elk staat de valkuil, want een instrument dat je verkeerd gebruikt is
          erger dan geen instrument.
        </p>
      </header>

      <div className="shell">
        <Wisselstraat />
      </div>

      <div className="shell" style={{ paddingBottom: '3rem' }}>
        {tools.map((t, i) => (
          <section
            className="annot"
            id={t.slug}
            key={t.slug}
            style={{ scrollMarginTop: '5rem' }}
          >
            <div className="annot-label">
              <span className="annot-num">
                {String(i + 1).padStart(2, '0')}
              </span>
              {t.usedAt}
            </div>
            <div>
              <h2 style={{ fontSize: '1.45rem', marginBottom: '0.35rem' }}>
                {t.name}
              </h2>
              <p className="mono sig" style={{ marginBottom: '1.1rem' }}>
                {t.subtitle}
              </p>
              <p className="measure" style={{ fontSize: '1.03rem' }}>
                {t.what}
              </p>

              {t.columns ? (
                <div className="cluster" style={{ margin: '1.2rem 0 1.4rem' }}>
                  {t.columns.map((c) => (
                    <span className="pill" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="mono faint" style={{ marginBottom: '0.5rem' }}>
                Hoe je hem gebruikt
              </p>
              <ol className="qs">
                {t.how.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ol>

              <div className="disruption" style={{ marginTop: '1.5rem' }}>
                <p className="disruption-k">Valkuil</p>
                <p>{t.trap}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
