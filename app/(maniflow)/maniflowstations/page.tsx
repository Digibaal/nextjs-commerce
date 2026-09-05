import Link from 'next/link';
import {
  Annot,
  DepartureBoard,
  Eyebrow,
  lineColor
} from 'components/maniflow/bits';
import {
  audience,
  brand,
  differentiators,
  houseRules,
  phases,
  positioning,
  progressMethod,
  tracks
} from 'lib/maniflow';

export default function ManiFlowHome() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="hero">
        <div className="shell">
          <p className="mono faint" style={{ marginBottom: '2rem' }}>
            Vertrekhal · 12 stations · 4 lijnen · geen garanties
          </p>
          <h1>
            ManiFlow<span className="flow">Stations</span>
          </h1>
          <p className="hero-lede">{brand.subtitle}</p>
          <div className="cluster" style={{ marginTop: '2.5rem' }}>
            <Link className="btn" href="/maniflowstations/route">
              Bekijk de route
            </Link>
            <Link
              className="btn btn-ghost"
              href="/maniflowstations/station/vertrekhal"
            >
              Begin bij Perron 0
            </Link>
          </div>
        </div>
      </section>

      <div className="shell section">
        <hr className="rule" />
        <div style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          <p className="mono faint" style={{ marginBottom: '1.6rem' }}>
            De centrale gedachte
          </p>
          <p className="thesis">{brand.thesis}</p>
        </div>
        <hr className="rule" />
      </div>

      {/* ------------------------------------------------------ vertrekbord */}
      <section className="shell section" id="bord">
        <Eyebrow>Vertrekbord</Eyebrow>
        <h2 className="big" style={{ marginBottom: '1.2rem' }}>
          Twaalf haltes van vaag verlangen naar toetsbare beweging.
        </h2>
        <p className="measure dim" style={{ marginBottom: '2.6rem' }}>
          Je hoeft de hele reis niet te kennen. Je hoeft alleen te weten waar je
          nu bent, wat de eerstvolgende halte vraagt, en wanneer je mag
          overstappen. Vertraging is geen oordeel.
        </p>
        <DepartureBoard />
        <div className="cluster" style={{ marginTop: '2rem' }}>
          {phases.map((p) => (
            <span key={p.id} className="pill">
              <span
                className="line-chip"
                style={{ background: lineColor(p.id) }}
              />
              {p.line} · {p.name}
            </span>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- belofte */}
      <section className="shell section-tight">
        <Annot n="01" label="Kernbelofte">
          <div className="body-copy">
            <p style={{ fontSize: '1.22rem', lineHeight: 1.5 }}>
              {brand.promise}
            </p>
            <p className="faint mono" style={{ marginTop: '1.4rem' }}>
              Wat we niet beloven: uitkomst, tempo, of dat de wereld meewerkt.
            </p>
          </div>
        </Annot>

        <Annot n="02" label="Positionering">
          <div className="body-copy">
            <p>{positioning.statement}</p>
            <p>
              <strong>{positioning.category}</strong> {positioning.categoryBody}
            </p>
            <div style={{ marginTop: '2rem' }}>
              {positioning.axes.map((a) => (
                <div className="axis" key={a.left}>
                  <div className="axis-labels">
                    <span>{a.left}</span>
                    <span>{a.right}</span>
                  </div>
                  <div className="axis-track">
                    <i style={{ left: `${a.us}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Annot>

        <Annot n="03" label="Huisregels">
          <dl className="deflist">
            {houseRules.map((r) => (
              <div key={r.n}>
                <dt>
                  {r.n} — {r.rule}
                </dt>
                <dd>{r.why}</dd>
              </div>
            ))}
          </dl>
        </Annot>
      </section>

      {/* ------------------------------------------------ wat anders is */}
      <section className="shell section" id="anders">
        <Eyebrow>Het verschil</Eyebrow>
        <h2 className="big" style={{ marginBottom: '2.4rem' }}>
          Behoud de motor. Verwijder de rookmachine.
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl">
            <thead>
              <tr>
                <th scope="col" style={{ width: '13rem' }}>
                  Onderwerp
                </th>
                <th scope="col">Klassiek manifestatieprogramma</th>
                <th scope="col">ManiFlowStations</th>
              </tr>
            </thead>
            <tbody>
              {differentiators.map((d) => (
                <tr key={d.title}>
                  <td style={{ fontWeight: 600 }}>{d.title}</td>
                  <td className="was">{d.classic}</td>
                  <td>{d.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ----------------------------------------------------- doelgroep */}
      <section className="shell section-tight">
        <Annot n="04" label="Voor wie">
          <ul className="qs">
            {audience.primary.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p
            className="mono faint"
            style={{ marginTop: '2rem', marginBottom: '0.8rem' }}
          >
            Ook bruikbaar voor
          </p>
          <ul className="qs">
            {audience.secondary.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Annot>

        <Annot n="05" label="Niet voor">
          <ul className="qs">
            {audience.notFor.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Annot>
      </section>

      {/* --------------------------------------------------- dienstregeling */}
      <section className="shell section">
        <Eyebrow>Drie tempo&apos;s</Eyebrow>
        <h2 className="big" style={{ marginBottom: '2.2rem' }}>
          Dezelfde route, drie snelheden. Trager is hier geen zwakkere versie.
        </h2>
        <div className="g3 grid">
          {tracks.map((t) => (
            <Link
              key={t.slug}
              href="/maniflowstations/dienstregeling"
              className="card"
              style={{ textDecoration: 'none' }}
            >
              <span className="card-k">{t.days} dagen</span>
              <h3>{t.name}</h3>
              <p>{t.forWho}</p>
              <p className="mono faint" style={{ marginTop: '1.1rem' }}>
                {t.perDay}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- meten */}
      <section className="shell section-tight">
        <Annot n="06" label="Meten">
          <div className="body-copy">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.9rem' }}>
              {progressMethod.title}
            </h2>
            <p>{progressMethod.principle}</p>
          </div>
          <div className="g3 grid" style={{ marginTop: '1.8rem' }}>
            {progressMethod.gauges.map((g) => (
              <div className="card" key={g.name}>
                <span className="card-k">Meter</span>
                <h3>{g.name}</h3>
                <p>{g.question}</p>
                <p className="mono faint" style={{ marginTop: '1rem' }}>
                  {g.band}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mono sig"
            style={{ marginTop: '2rem', marginBottom: '0.6rem' }}
          >
            Anti-obsessieregels
          </p>
          <ul className="qs">
            {progressMethod.antiRules.slice(0, 4).map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.6rem' }}>
            <Link href="/maniflowstations/dienstregeling" className="mono sig">
              Volledige meetmethode →
            </Link>
          </p>
        </Annot>
      </section>

      {/* --------------------------------------------------------- slot */}
      <section className="shell">
        <div className="departure">
          <p>
            Je hoeft niet te leren hoe je de werkelijkheid met je gedachten
            bestuurt. Je leert kiezen, kijken, testen, leren en bijsturen — en
            dat is beter nieuws dan magie, want het is herhaalbaar.
          </p>
          <div className="cluster" style={{ marginTop: '2.2rem' }}>
            <Link className="btn" href="/maniflowstations/station/vertrekhal">
              Perron 0 — Vertrekhal
            </Link>
            <Link
              className="btn btn-ghost"
              href="/maniflowstations/uitgangspunten"
            >
              Eerst de uitgangspunten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
