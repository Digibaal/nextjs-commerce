import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Annot, MiniRail, lineColor } from 'components/maniflow/bits';
import {
  getStation,
  neighbours,
  phases,
  stations,
  stationNumber,
  tools
} from 'lib/maniflow';

export async function generateStaticParams() {
  return stations.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getStation((await params).slug);
  if (!s) return {};
  return {
    title: `${stationNumber(s)} · ${s.name} — ${s.dutch}`,
    description: s.arrivalBoard
  };
}

export default async function StationPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getStation((await params).slug);
  if (!s) return notFound();

  const phase = phases.find((p) => p.id === s.phase)!;
  const { previous, next } = neighbours(s.slug);
  const stationTools = tools.filter((t) => s.tools.includes(t.slug));
  const colour = lineColor(s.phase);

  return (
    <article>
      {/* --------------------------------------------------- 1. arrival board */}
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2rem, 5vw, 3.5rem) 0' }}
      >
        <MiniRail current={s.id} />
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.9rem',
            flexWrap: 'wrap',
            marginBottom: '1.1rem'
          }}
        >
          <span
            className="line-chip"
            style={{ background: colour, width: '2.4rem' }}
          />
          <span className="mono faint">
            {phase.line} · {phase.name}
          </span>
          <span className="mono faint">{s.duration}</span>
        </div>
        <p
          className="mono"
          style={{
            color: 'var(--ink-3)',
            fontSize: '0.78rem',
            marginBottom: '0.6rem'
          }}
        >
          {s.kind === 'platform' ? 'Perron 0' : `Halte ${stationNumber(s)}`}
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.3rem, 6.5vw, 4.2rem)',
            letterSpacing: '-0.035em',
            lineHeight: 0.98
          }}
        >
          {s.name}
        </h1>
        <p
          className="mono"
          style={{ color: 'var(--ink-3)', marginTop: '0.9rem' }}
        >
          {s.dutch}
        </p>
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            lineHeight: 1.45,
            color: 'var(--ink-2)',
            maxWidth: '42rem',
            marginTop: '1.6rem'
          }}
        >
          {s.arrivalBoard}
        </p>
      </header>

      <div className="shell" style={{ paddingBottom: '3rem' }}>
        <Annot n="—" label="Doel van dit station">
          <div className="body-copy stack-s">
            <p>{s.goal}</p>
            <p className="mono faint">Kernconcept: {s.coreConcept}</p>
          </div>
        </Annot>

        {/* ----------------------------------------------------- 2. big idea */}
        <Annot n="02" label="The Big Idea">
          <div className="body-copy">
            {s.bigIdea.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <blockquote
            style={{
              margin: '2rem 0 0',
              paddingLeft: '1.2rem',
              borderLeft: `3px solid ${colour}`,
              maxWidth: '38rem'
            }}
          >
            <p className="mono sig" style={{ marginBottom: '0.6rem' }}>
              Belangrijkste inzicht
            </p>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.3rem',
                lineHeight: 1.35,
                margin: 0
              }}
            >
              {s.keyInsight}
            </p>
          </blockquote>
        </Annot>

        {/* -------------------------------------------- 3. vertaalde claims */}
        <Annot n="03" label="Manifestation Translation">
          <p className="dim measure" style={{ marginBottom: '1.8rem' }}>
            Niet alles uit de manifestatiewereld is onzin. Onder de meeste
            overdreven claims zit een gewone psychologische techniek. Hieronder
            de vertaling.
          </p>
          {s.translations.map((t) => (
            <div className="translate" key={t.claim}>
              <p className="tr-claim">&ldquo;{t.claim}&rdquo;</p>
              <span className="tr-arrow">Vertaling</span>
              <p className="tr-out">{t.translation}</p>
              {t.keep ? (
                <p className="tr-keep">Wat je behoudt: {t.keep}</p>
              ) : null}
            </div>
          ))}
        </Annot>

        {/* ------------------------------------------------- 4. reality check */}
        <Annot n="04" label="Reality Check">
          <div className="stack-s">
            {s.realityCheck.map((r) => (
              <div className="disruption" key={r.claim}>
                <p className="disruption-k">Storingsmelding</p>
                <p className="claim">&ldquo;{r.claim}&rdquo;</p>
                <p>{r.check}</p>
              </div>
            ))}
          </div>
        </Annot>

        {/* ------------------------------------------------ 5. perronvragen */}
        <Annot n="05" label="Platform Questions">
          <ol className="qs">
            {s.platformQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </Annot>

        {/* ----------------------------------------------------- 6. ticket */}
        <Annot n="06" label="Ticket to Action">
          <div className="ticket">
            <div className="ticket-head">
              <span>Halte {stationNumber(s)}</span>
              <span>{s.ticket.time}</span>
            </div>
            <h3>{s.ticket.title}</h3>
            <ol>
              {s.ticket.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </Annot>

        {/* -------------------------------------------------- 7. experiment */}
        <Annot n="07" label="Experiment">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>
            {s.experiment.title}
          </h3>
          <p className="mono faint" style={{ marginBottom: '1.3rem' }}>
            Looptijd: {s.experiment.duration}
          </p>
          <ol className="qs">
            {s.experiment.setup.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="g2 grid" style={{ marginTop: '1.8rem' }}>
            <div className="card">
              <span className="card-k">Wat je meet</span>
              <p>{s.experiment.measure}</p>
            </div>
            <div className="card">
              <span className="card-k">Afbreekcriterium</span>
              <p>
                {s.experiment.abort ??
                  'Stop als het experiment na de looptijd geen enkele nieuwe informatie heeft opgeleverd. Een test die niets kan uitwijzen, is geen test.'}
              </p>
            </div>
          </div>
        </Annot>

        {/* ------------------------------------------------ 8. evidence log */}
        <Annot n="08" label="Evidence Log">
          <p className="dim measure" style={{ marginBottom: '1.4rem' }}>
            Wat gebeurde er werkelijk? Noteer dit ná het experiment, met datum —
            je geheugen herschrijft de afloop sneller dan je denkt.
          </p>
          <ul className="qs">
            {s.evidencePrompts.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.4rem' }}>
            <Link className="mono sig" href="/maniflowstations/journaal">
              Vul in het journaal →
            </Link>
          </p>
        </Annot>

        {/* ----------------------------------------------------- 9. reroute */}
        <Annot n="09" label="Reroute">
          <ul className="qs">
            {s.reroute.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div
            className="card"
            style={{ marginTop: '1.8rem', border: '1px solid var(--rule)' }}
          >
            <span className="card-k">Verwacht resultaat van dit station</span>
            <p>{s.expectedResult}</p>
          </div>
        </Annot>

        {stationTools.length ? (
          <Annot n="—" label="Gereedschap">
            <div className="g2 grid">
              {stationTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/maniflowstations/gereedschap#${t.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="card-k">{t.subtitle}</span>
                  <h3>{t.name}</h3>
                  <p>{t.what}</p>
                </Link>
              ))}
            </div>
          </Annot>
        ) : null}
      </div>

      {/* ------------------------------------------------ 10. vertreknotitie */}
      <div className="shell">
        <div className="departure">
          <p
            className="mono sig"
            style={{ fontFamily: 'var(--mono)', marginBottom: '1.2rem' }}
          >
            Departure Note
          </p>
          <p>{s.departureNote}</p>
        </div>
      </div>

      <nav
        className="shell noprint"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingBlock: '2.5rem',
          flexWrap: 'wrap'
        }}
      >
        {previous ? (
          <Link
            href={`/maniflowstations/station/${previous.slug}`}
            className="mono"
          >
            ← {stationNumber(previous)} {previous.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/maniflowstations/station/${next.slug}`}
            className="mono"
          >
            {stationNumber(next)} {next.name} →
          </Link>
        ) : (
          <Link href="/maniflowstations/dienstregeling" className="mono">
            Depot — integratie →
          </Link>
        )}
      </nav>
    </article>
  );
}
