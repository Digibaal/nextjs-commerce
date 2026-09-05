import { Annot, Eyebrow } from 'components/maniflow/bits';
import { productForms, slogans, subtitles, workbook } from 'lib/maniflow';

export const metadata = {
  title: 'Programmavormen',
  description:
    'Van webapp tot workbook: hoe ManiFlowStations verder gebouwd kan worden.'
};

export default function Vormen() {
  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 1.5rem' }}
      >
        <Eyebrow>Productie</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Eén programma, zes vormen.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          De inhoud is bewust modulair: tien vaste onderdelen per station,
          achttien vaste gereedschappen, één dagelijkse sessie. Daardoor is
          dezelfde route te leveren als cursus, app, boek of kaartendeck zonder
          opnieuw te schrijven.
        </p>
      </header>

      <div className="shell">
        <Annot n="01" label="Uitleveringsvormen">
          <div className="g2 grid">
            {productForms.map((f) => (
              <div className="card" key={f.name}>
                <span className="card-k">Vorm</span>
                <h3>{f.name}</h3>
                <p>{f.body}</p>
                <p className="mono faint" style={{ marginTop: '1rem' }}>
                  Nodig: {f.needs}
                </p>
              </div>
            ))}
          </div>
        </Annot>

        <Annot n="02" label="Workbook">
          <p className="measure" style={{ fontSize: '1.06rem' }}>
            {workbook.intro}
          </p>
          <p className="mono faint" style={{ margin: '1.8rem 0 0.6rem' }}>
            Fysieke uitvoering
          </p>
          <ul className="qs">
            {workbook.format.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <p className="mono faint" style={{ margin: '2rem 0 0.8rem' }}>
            Paginatypes
          </p>
          <table className="tbl">
            <thead>
              <tr>
                <th scope="col" style={{ width: '12rem' }}>
                  Type
                </th>
                <th scope="col">Wat erop staat</th>
              </tr>
            </thead>
            <tbody>
              {workbook.pageTypes.map((p) => (
                <tr key={p.name}>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td className="dim">{p.body}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mono faint" style={{ margin: '2rem 0 0.6rem' }}>
            Extra&apos;s
          </p>
          <ul className="qs">
            {workbook.extras.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Annot>

        <Annot n="03" label="Taal">
          <p className="mono faint" style={{ marginBottom: '0.8rem' }}>
            Ondertitels
          </p>
          <ul className="qs">
            {subtitles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mono faint" style={{ margin: '2rem 0 0.8rem' }}>
            Slogans
          </p>
          <div className="g3 grid">
            {slogans.map((s) => (
              <div className="card" key={s}>
                <p style={{ color: 'var(--ink)', margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </Annot>
      </div>
    </>
  );
}
