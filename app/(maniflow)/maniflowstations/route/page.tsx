import Link from 'next/link';
import { DepartureBoard, Eyebrow, RouteMap } from 'components/maniflow/bits';
import { brand, integration } from 'lib/maniflow';

export const metadata = {
  title: 'De route',
  description:
    'Vier lijnen, twaalf stations, drie reroute-momenten en een depot.'
};

export default function RoutePage() {
  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 2rem' }}
      >
        <Eyebrow>Routekaart</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Vier lijnen. Twaalf haltes. Drie plekken waar je mag omkeren.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          {brand.thesis}
        </p>
      </header>

      <section className="shell">
        <RouteMap />
      </section>

      {/* ------------------------------------------------------------ depot */}
      <section className="shell section">
        <Eyebrow>Eindpunt</Eyebrow>
        <h2 className="big" style={{ marginBottom: '0.9rem' }}>
          {integration.name}
        </h2>
        <p className="mono faint" style={{ marginBottom: '1.4rem' }}>
          {integration.duration}
        </p>
        <p className="measure dim" style={{ marginBottom: '2.2rem' }}>
          {integration.intro}
        </p>
        <div className="g3 grid">
          {integration.steps.map((step) => (
            <div className="card" key={step.n}>
              <span className="card-k">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <p
          className="thesis"
          style={{
            marginTop: '2.8rem',
            maxWidth: '44rem',
            fontSize: '1.35rem'
          }}
        >
          {integration.closing}
        </p>
      </section>

      <section className="shell section-tight">
        <hr className="rule" style={{ marginBottom: '2.5rem' }} />
        <DepartureBoard caption="Volledig vertrekbord" />
        <p style={{ marginTop: '2rem' }}>
          <Link className="btn" href="/maniflowstations/station/vertrekhal">
            Instappen bij Perron 0
          </Link>
        </p>
      </section>
    </>
  );
}
