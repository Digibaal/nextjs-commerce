import { Annot, Eyebrow } from 'components/maniflow/bits';
import { InvloedSpectrum } from 'components/maniflow/diagrams';
import { Perronkap } from 'components/maniflow/sfeer';
import {
  agencyModel,
  audience,
  brand,
  houseRules,
  positioning,
  slogans
} from 'lib/maniflow';

export const metadata = {
  title: 'Uitgangspunten',
  description:
    'Handelingsvermogen zonder schuld: controle, invloed, kans en toeval.'
};

export default function Uitgangspunten() {
  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 1rem' }}
      >
        <Eyebrow>Uitgangspunten</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Zoveel mogelijk handelingsvermogen. Nul schuld.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          Elke methode die belooft dat jij je werkelijkheid creëert, levert er
          gratis een aanklacht bij: als jij het maakt, heb jij ook de rotdelen
          gemaakt. Hier niet.
        </p>
      </header>

      <div className="shell">
        <Perronkap />
      </div>

      <div className="shell">
        <Annot n="01" label="Het vier-vak">
          <div className="body-copy">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.9rem' }}>
              {agencyModel.title}
            </h2>
            <p>{agencyModel.intro}</p>
          </div>
          <InvloedSpectrum />
          <div className="g2 grid" style={{ marginTop: '1.8rem' }}>
            {agencyModel.quadrants.map((q) => (
              <div className="card" key={q.key}>
                <span className="card-k">{q.key}</span>
                <p style={{ color: 'var(--ink)', marginBottom: '0.8rem' }}>
                  {q.body}
                </p>
                <p className="mono sig">{q.todo}</p>
              </div>
            ))}
          </div>
          <div className="disruption" style={{ marginTop: '1.8rem' }}>
            <p className="disruption-k">Vaste regel</p>
            <p>{agencyModel.rule}</p>
          </div>
        </Annot>

        <Annot n="02" label="Wat meespeelt">
          <p className="dim measure" style={{ marginBottom: '1.3rem' }}>
            Resultaten hangen mede af van factoren die niets met jouw inzet te
            maken hebben. Dat benoemen is geen pessimisme — het is de voorwaarde
            om je eigen aandeel eerlijk te kunnen zien.
          </p>
          <ul className="qs">
            {[
              'Andere mensen: wie ja zegt, wie afhaakt, wie je toevallig kent.',
              'Gezondheid: van jou en van de mensen voor wie je zorgt.',
              'Economische omstandigheden en de markt waarin je opereert.',
              'Afkomst, startpositie en de kansen die je wel of niet kreeg.',
              'Timing: hetzelfde idee, twee jaar eerder of later.',
              'Beschikbare middelen: geld, tijd, ruimte, apparatuur, hulp.',
              'Maatschappelijke omstandigheden, regels en wie er aan de knoppen zit.',
              'Toeval, dat vaker beslissend is dan iemand met een methode wil toegeven.'
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
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

        <Annot n="04" label="Reconstructie">
          <div className="body-copy">
            <p>{positioning.categoryBody}</p>
            <p>
              Daarom staat bij elk station de vraag: zit onder deze overdreven
              claim misschien een gewone psychologische techniek die wél werkt?
              Meestal is dat zo. &ldquo;Act as if&rdquo; is gedragsoefening.
              &ldquo;Future self&rdquo; is prospectief denken.
              &ldquo;Alignment&rdquo; is overeenstemming tussen waarden, agenda
              en gedrag. &ldquo;Detach from the outcome&rdquo; is je greep
              verminderen op een resultaat dat je toch niet volledig bepaalt.
              &ldquo;Visualisatie&rdquo; is mentale simulatie, waarbij
              procesvisualisatie meestal nuttiger is dan alleen het eindplaatje.
              En &ldquo;signs&rdquo; is patroonherkenning, mits je ook bijhoudt
              wat je níet zag.
            </p>
            <p>
              Wat eruit gaat: quantumjargon, frequenties, kosmische
              bezorgdiensten, tijdlijnen, magnetisme, en elke variant van de
              gedachte dat tegenslag ontstaat doordat iemand niet positief
              genoeg dacht.
            </p>
          </div>
        </Annot>

        <Annot n="05" label="Voor wie niet">
          <ul className="qs">
            {audience.notFor.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Annot>

        <Annot n="06" label="Over het bewijs">
          <div className="body-copy">
            <p>
              Dit programma is gedragswetenschappelijk geïnformeerd, niet
              gedragswetenschappelijk bewezen. Waar het leunt op bekend werk —
              mentaal contrasteren, implementatie-intenties, zelfperceptie,
              zelfvertrouwen uit meegemaakt succes, gedragsactivatie, denkfouten
              — staan de namen erbij zodat je het zelf kunt nazoeken. Er staan
              bewust geen percentages, geen studienummers en geen effectgroottes
              in de teksten: dat zou een precisie suggereren die dit programma
              niet heeft.
            </p>
            <p>
              Wat het wel doet: elk onderdeel is toetsbaar geformuleerd. Elk
              experiment heeft een afbreekcriterium. Als een techniek bij jou
              meetbaar niets doet, laat je hem vallen. Een methode die niet kan
              falen, kan ook niet kloppen.
            </p>
          </div>
        </Annot>

        <Annot n="07" label="In één zin">
          <p className="thesis">{brand.promise}</p>
        </Annot>
      </div>

      <section className="shell section">
        <Eyebrow>Taal die we gebruiken</Eyebrow>
        <div className="g3 grid">
          {slogans.map((s) => (
            <div className="card" key={s}>
              <p
                style={{ color: 'var(--ink)', fontSize: '1.02rem', margin: 0 }}
              >
                {s}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
