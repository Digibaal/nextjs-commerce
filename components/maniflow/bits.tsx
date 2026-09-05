import Link from 'next/link';
import type { ReactNode } from 'react';
import { phases, route, stations, stationNumber } from 'lib/maniflow';

export const lineColor = (phase: string) => `var(--line-${phase})`;

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Het kantlijn-raster: mono-label links, inhoud rechts. */
export function Annot({
  n,
  label,
  children
}: {
  n?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="annot">
      <div className="annot-label">
        {n ? <span className="annot-num">{n}</span> : null}
        {label}
      </div>
      <div>{children}</div>
    </section>
  );
}

export function DepartureBoard({ caption }: { caption?: string }) {
  return (
    <table className="board">
      {caption ? <caption>{caption}</caption> : null}
      <thead>
        <tr>
          <th scope="col" className="c-line" />
          <th scope="col">Halte</th>
          <th scope="col">Station</th>
          <th scope="col" className="h-idea">
            Waar het over gaat
          </th>
          <th scope="col" style={{ textAlign: 'right', paddingRight: 0 }}>
            Duur
          </th>
        </tr>
      </thead>
      <tbody>
        {stations.map((s) => (
          <tr key={s.slug}>
            <td className="c-line">
              <span
                className="line-chip"
                style={{ background: lineColor(s.phase) }}
              />
            </td>
            <td className="c-num">{stationNumber(s)}</td>
            <td className="c-name">
              <Link href={`/maniflowstations/station/${s.slug}`}>{s.name}</Link>
              <span className="c-nl">{s.dutch}</span>
            </td>
            <td className="c-idea">{s.arrivalBoard}</td>
            <td className="c-time">{s.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function MiniRail({ current }: { current: number }) {
  return (
    <nav className="minirail noprint" aria-label="Stations">
      {stations.map((s) => (
        <Link
          key={s.slug}
          href={`/maniflowstations/station/${s.slug}`}
          className={s.id === current ? 'here' : undefined}
          aria-current={s.id === current ? 'page' : undefined}
          title={`${stationNumber(s)} — ${s.name}`}
        >
          <span className="dot">{s.id}</span>
        </Link>
      ))}
    </nav>
  );
}

const junctions: Record<number, string> = {
  4: 'Reroute Moment 1 — klopt de bestemming nog, nu je hem hebt uitgeschreven?',
  7: 'Reroute Moment 2 — hier sneuvelt meestal een project. Dat is goed nieuws.',
  10: 'Reroute Moment 3 — wat stop je, wat versterk je, wat verdient een test?'
};

export function RouteMap() {
  const rows: ReactNode[] = [];

  for (const phase of phases) {
    rows.push(
      <div className="rm-phase" key={`p-${phase.id}`}>
        <div
          className="rm-rail"
          style={{ ['--rm-line' as string]: lineColor(phase.id) }}
        />
        <div className="rm-phase-body">
          <span className="lbl" style={{ color: lineColor(phase.id) }}>
            <span
              className="line-chip"
              style={{ background: lineColor(phase.id) }}
            />
            {phase.line} — {phase.name}
          </span>
          <h2>{phase.claim}</h2>
        </div>
      </div>
    );

    const inPhase = stations.filter((s) => s.phase === phase.id);
    for (const s of inPhase) {
      rows.push(
        <div
          className="rm-row"
          key={s.slug}
          style={{ ['--rm-line' as string]: lineColor(s.phase) }}
        >
          <div className="rm-rail">
            <span
              className={`rm-node${s.kind === 'platform' ? '' : 'major'}`}
              aria-hidden="true"
            />
          </div>
          <div className="rm-body">
            <div className="rm-meta">
              <span>
                {s.kind === 'platform'
                  ? 'Perron 0'
                  : `Halte ${stationNumber(s)}`}
              </span>
              <span>{s.dutch}</span>
              <span>{s.duration}</span>
            </div>
            <h3>
              <Link href={`/maniflowstations/station/${s.slug}`}>{s.name}</Link>
            </h3>
            <p>{s.arrivalBoard}</p>
          </div>
        </div>
      );

      if (junctions[s.id]) {
        rows.push(
          <div
            className="rm-row rm-junction"
            key={`j-${s.id}`}
            style={{ ['--rm-line' as string]: 'var(--rule)' }}
          >
            <div className="rm-rail">
              <span className="rm-node junction" aria-hidden="true" />
            </div>
            <div className="rm-body">
              <p>{junctions[s.id]}</p>
            </div>
          </div>
        );
      }
    }
  }

  return <div className="routemap">{rows}</div>;
}

export function StationTeaser({ id }: { id: number }) {
  const s = route.find((x) => x.id === id);
  if (!s) return null;
  return (
    <Link
      href={`/maniflowstations/station/${s.slug}`}
      className="card"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <span className="card-k">Halte {stationNumber(s)}</span>
      <h3>{s.name}</h3>
      <p>{s.keyInsight}</p>
    </Link>
  );
}
