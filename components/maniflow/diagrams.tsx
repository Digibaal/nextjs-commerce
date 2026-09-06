import type { ReactNode } from 'react';

/* Handgetekende SVG-schema's van de modellen zelf. Kleuren komen uit de
   themavariabelen, zodat ze in dag- en nachtbord allebei kloppen. */

function Figure({
  label,
  caption,
  viewBox,
  children
}: {
  label: string;
  caption: string;
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <figure className="figure">
      <svg viewBox={viewBox} role="img" aria-label={label}>
        <defs>
          <marker
            id="ar"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L8 4 L0 8 z" fill="var(--ink-3)" />
          </marker>
          <marker
            id="ars"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L8 4 L0 8 z" fill="var(--signal)" />
          </marker>
        </defs>
        {children}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/* ---------------------------------------------------- 1. invloedspectrum */

export function InvloedSpectrum() {
  const zones = [
    { k: 'Controle', d: 'Plannen. Klein,', d2: 'concreet, vandaag.' },
    { k: 'Invloed', d: 'Kansen vergroten.', d2: 'Niet de uitkomst.' },
    { k: 'Kans', d: 'Nuchter rekenen.', d2: 'Tijdlijn eerlijk maken.' },
    { k: 'Toeval', d: 'Accepteren, en vaker', d2: 'blootstellen.' }
  ];
  const W = 220;
  const G = 12;
  return (
    <Figure
      viewBox="0 0 940 200"
      label="Spectrum van controle via invloed en kans naar toeval, met per zone wat je er doet en een pijl die aangeeft dat het werk bestaat uit dingen naar links verplaatsen."
      caption="Fig. 1 — Niet vier hokjes maar een verloop. Het werk bestaat uit dingen naar links verplaatsen."
    >
      <text x="0" y="12" className="d-m d-sig">
        HET WERK: NAAR LINKS VERPLAATSEN
      </text>
      <line
        x1="930"
        y1="30"
        x2="20"
        y2="30"
        className="d-accent"
        markerEnd="url(#ars)"
      />

      {zones.map((z, i) => {
        const x = i * (W + G);
        return (
          <g key={z.k}>
            <rect
              x={x}
              y={48}
              width={W}
              height={58}
              className={i === 0 ? 'd-fill' : 'd-box'}
              stroke={i > 1 ? 'var(--rule-soft)' : undefined}
              strokeDasharray={i === 3 ? '5 4' : undefined}
            />
            <text x={x + 16} y={74} className="d-t">
              {z.k}
            </text>
            <text x={x + 16} y={94} className="d-m">
              {String(i + 1).padStart(2, '0')}
            </text>
            <text x={x + 16} y={128} className="d-s">
              {z.d}
            </text>
            <text x={x + 16} y={144} className="d-s">
              {z.d2}
            </text>
          </g>
        );
      })}

      <line x1="0" y1="170" x2="940" y2="170" className="d-rail" />
      <text x="0" y="190" className="d-m">
        JIJ BEPAALT
      </text>
      <text x="936" y="190" className="d-m" textAnchor="end">
        BEPAALT JOU
      </text>
    </Figure>
  );
}

/* -------------------------------------------------------- 2. routenetwerk */

const netStations = [
  { n: 0, name: 'Vertrekhal', line: 'a' },
  { n: 1, name: 'Destination', line: 'a' },
  { n: 2, name: 'Vision', line: 'a' },
  { n: 3, name: 'Future You', line: 'a' },
  { n: 4, name: 'Identity', line: 'a' },
  { n: 5, name: 'Reality Check', line: 'b' },
  { n: 6, name: 'Friction', line: 'b' },
  { n: 7, name: 'Alignment', line: 'b' },
  { n: 8, name: 'Movement', line: 'c' },
  { n: 9, name: 'Evidence', line: 'c' },
  { n: 10, name: 'Reroute', line: 'c' },
  { n: 11, name: 'Momentum', line: 'd' },
  { n: 12, name: 'Next Destination', line: 'd' }
];

export function RouteNetwerk() {
  const x0 = 84;
  const step = 66;
  const y = 108;
  const junctions = [4, 7, 10];

  return (
    <Figure
      viewBox="0 0 990 210"
      label="De volledige route: dertien haltes verdeeld over vier lijnen, met drie reroute-momenten en een depot aan het eind."
      caption="Fig. 2 — Vier lijnen, dertien haltes, drie plekken waar omkeren de bedoeling is."
    >
      {netStations.slice(0, -1).map((s, i) => (
        <line
          key={`seg-${s.n}`}
          x1={x0 + i * step}
          y1={y}
          x2={x0 + (i + 1) * step}
          y2={y}
          stroke={`var(--line-${s.line})`}
          strokeWidth="3"
        />
      ))}
      <line
        x1={x0 + 12 * step}
        y1={y}
        x2={x0 + 12 * step + 48}
        y2={y}
        className="d-dash"
      />
      <rect
        x={x0 + 12 * step + 48}
        y={y - 6}
        width="12"
        height="12"
        className="d-fill"
      />

      {netStations.map((s, i) => {
        const cx = x0 + i * step;
        const above = i % 2 === 0;
        return (
          <g key={s.n}>
            <circle
              cx={cx}
              cy={y}
              r={s.n === 0 ? 5 : 7}
              fill="var(--paper)"
              stroke={`var(--line-${s.line})`}
              strokeWidth="3"
            />
            <line
              x1={cx}
              y1={above ? y - 12 : y + 12}
              x2={cx}
              y2={above ? y - 24 : y + 24}
              className="d-rail"
            />
            <text
              x={cx}
              y={above ? y - 32 : y + 40}
              className="d-s"
              textAnchor="middle"
              style={{ fontWeight: 600 }}
            >
              {s.name}
            </text>
            <text
              x={cx}
              y={above ? y - 46 : y + 54}
              className="d-m"
              textAnchor="middle"
            >
              {String(s.n).padStart(2, '0')}
            </text>
          </g>
        );
      })}

      {junctions.map((j) => {
        const cx = x0 + j * step + step / 2;
        return (
          <g key={`j-${j}`}>
            <rect
              x={cx - 5}
              y={y - 5}
              width="10"
              height="10"
              transform={`rotate(45 ${cx} ${y})`}
              fill="var(--paper)"
              stroke="var(--signal)"
              strokeWidth="1.6"
            />
          </g>
        );
      })}
      <text
        x={x0 + 4 * step + step / 2}
        y={y - 16}
        className="d-m d-sig"
        textAnchor="middle"
      >
        REROUTE
      </text>

      <text
        x={x0 + 12 * step + 54}
        y={y + 32}
        className="d-m"
        textAnchor="middle"
      >
        DEPOT
      </text>
    </Figure>
  );
}

/* --------------------------------------------------------- 3. wisselwacht */

export function Wisselwacht() {
  const tracks = [
    { k: 'FEIT', d: 'Zou een camera het zien?', y: 26 },
    { k: 'INTERPRETATIE', d: 'Wat maak jij ervan?', y: 66 },
    { k: 'AANNAME', d: 'Nooit getoetst.', y: 106, hot: true },
    { k: 'WENS', d: 'Wat hoop je stiekem?', y: 146 },
    { k: 'ANGST', d: 'Wat vrees je?', y: 186 }
  ];
  const sx = 300;
  const ex = 470;

  return (
    <Figure
      viewBox="0 0 940 230"
      label="Eén vastloopzin komt binnen en wordt door een wissel gesplitst over vijf sporen: feit, interpretatie, aanname, wens en angst. Alleen het spoor aanname is binnen een week toetsbaar."
      caption="Fig. 3 — Eén zin, vijf sporen. Alleen het spoor Aanname kun je deze week toetsen."
    >
      <text x="0" y="94" className="d-m">
        DE ZIN
      </text>
      <text x="0" y="112" className="d-s">
        &ldquo;Ik kan geen eigen bedrijf
      </text>
      <text x="0" y="128" className="d-s">
        beginnen want ik heb
      </text>
      <text x="0" y="144" className="d-s">
        geen netwerk.&rdquo;
      </text>

      <line x1="196" y1="106" x2={sx} y2="106" className="d-line" />
      <circle cx={sx} cy="106" r="4" fill="var(--ink-3)" />

      {tracks.map((t) => (
        <g key={t.k}>
          <path
            d={`M${sx} 106 C ${sx + 60} 106, ${ex - 60} ${t.y}, ${ex} ${t.y}`}
            className={t.hot ? 'd-accent' : 'd-line'}
          />
          <line
            x1={ex}
            y1={t.y}
            x2="740"
            y2={t.y}
            className={t.hot ? 'd-accent' : 'd-line'}
            markerEnd={t.hot ? 'url(#ars)' : 'url(#ar)'}
          />
          <text x={ex + 8} y={t.y - 8} className={t.hot ? 'd-m d-sig' : 'd-m'}>
            {t.k}
          </text>
          <text x="756" y={t.y + 4} className="d-s">
            {t.d}
          </text>
        </g>
      ))}

      <text x="756" y="122" className="d-m d-sig">
        TOETSBAAR BINNEN 7 DAGEN
      </text>
    </Figure>
  );
}

/* ------------------------------------------------------ 4. vertaalmachine */

export function Vertaalmachine() {
  const stages = [
    { k: 'Beeld', q: [] as string[], ex: 'Huis aan zee' },
    { k: 'Kwaliteit', q: ['WELKE', 'ERVARING?'], ex: 'Stilte, ruimte' },
    { k: 'Gedrag', q: ['WAT DOE JE', 'WEKELIJKS?'], ex: '4× per week buiten' },
    {
      k: 'Omstandigheid',
      q: ['WAT MOET', 'GEREGELD ZIJN?'],
      ex: '< 10 min naar groen'
    },
    { k: 'Prijs', q: ['WAT KOST', 'HET?'], ex: 'Verhuizing, reistijd,' },
    { k: 'Nu al', q: ['WELKE 10%', 'DEZE MAAND?'], ex: 'Morgen wandelen' }
  ];
  const W = 132;
  const G = 28;

  return (
    <Figure
      viewBox="0 0 940 210"
      label="Een beeld van een vision board loopt door vijf vertaalstappen: kwaliteit, gedrag, omstandigheid, prijs en wat je nu al kunt doen. Onderaan loopt een voorbeeld mee."
      caption="Fig. 4 — Elk beeld gaat door dezelfde machine. De vierde stap, de prijs, wordt het vaakst overgeslagen."
    >
      {stages.map((s, i) => {
        const x = i * (W + G);
        const last = i === stages.length - 1;
        return (
          <g key={s.k}>
            <rect
              x={x}
              y={42}
              width={W}
              height={46}
              className={last ? 'd-fill' : 'd-box'}
              stroke={last ? 'var(--signal)' : undefined}
            />
            <text x={x + 12} y={70} className={last ? 'd-t d-sig' : 'd-t'}>
              {s.k}
            </text>

            {i > 0 ? (
              <line
                x1={x - G + 4}
                y1={65}
                x2={x - 4}
                y2={65}
                className="d-line"
                markerEnd="url(#ar)"
              />
            ) : null}
            {s.q.map((line, li) => (
              <text key={li} x={x} y={12 + li * 13} className="d-m">
                {line}
              </text>
            ))}

            <line
              x1={x + 12}
              y1={112}
              x2={x + 12}
              y2={130}
              className="d-rail"
            />
            <text x={x} y={148} className="d-s">
              {s.ex}
            </text>
            {i === 4 ? (
              <text x={x} y={164} className="d-s">
                twee vriendschappen
              </text>
            ) : null}
          </g>
        );
      })}
      <text x="0" y="196" className="d-m">
        VOORBEELD, HELEMAAL DOORGEREKEND
      </text>
    </Figure>
  );
}

/* ----------------------------------------------------- 5. backcast-ladder */

export function BackcastLadder() {
  const rungs = [
    {
      k: 'Over drie jaar',
      d: 'De situatie in vijf zinnen — inclusief één ding dat nog steeds lastig is.'
    },
    {
      k: 'Over één jaar',
      d: 'Wat moet er staan, wil de trede erboven mogelijk zijn?'
    },
    { k: 'Over drie maanden', d: 'Wat is er dan af, geleerd of geregeld?' },
    {
      k: 'Deze week',
      d: 'Past binnen twee uur. Zo niet: je bent te hoog blijven hangen.'
    }
  ];
  const H = 52;
  const G = 14;

  return (
    <Figure
      viewBox="0 0 940 300"
      label="Een ladder van vier treden die van drie jaar terugredeneert naar deze week; de pijlen wijzen van de toekomst naar het heden."
      caption="Fig. 5 — De pijlen wijzen de verkeerde kant op. Dat is precies het punt: je redeneert terug."
    >
      {rungs.map((r, i) => {
        const y = i * (H + G);
        const indent = (3 - i) * 34;
        const last = i === rungs.length - 1;
        return (
          <g key={r.k}>
            <rect
              x={indent}
              y={y}
              width={420}
              height={H}
              className={last ? 'd-fill' : 'd-box'}
              stroke={last ? 'var(--signal)' : undefined}
            />
            <text
              x={indent + 16}
              y={y + 24}
              className={last ? 'd-t d-sig' : 'd-t'}
            >
              {r.k}
            </text>
            <text x={indent + 16} y={y + 42} className="d-m">
              TREDE {4 - i}
            </text>
            <text x={480} y={y + 32} className="d-s">
              {r.d}
            </text>
            {i < rungs.length - 1 ? (
              <line
                x1={indent + 24}
                y1={y + H + 2}
                x2={indent - 34 + 24}
                y2={y + H + G - 2}
                className="d-line"
                markerEnd="url(#ar)"
              />
            ) : null}
          </g>
        );
      })}
      <text x="0" y="284" className="d-m d-sig">
        VRAAG PER TREDE: WAT MOET ER WAAR ZIJN GEWEEST, WIL DE TREDE HIERBOVEN
        MOGELIJK ZIJN?
      </text>
    </Figure>
  );
}

/* ------------------------------------------------------------- 6. kernlus */

export function Kernlus() {
  const cx = 240;
  const cy = 156;
  const r = 84;
  const pt = (a: number): [number, number] => [
    cx + r * Math.cos((a * Math.PI) / 180),
    cy + r * Math.sin((a * Math.PI) / 180)
  ];
  const nodes = [
    {
      k: 'Movement',
      a: -90,
      d: ['Handelen zodat de', 'werkelijkheid antwoordt']
    },
    { k: 'Evidence', a: 30, d: ['Noteren wat er', 'feitelijk gebeurde'] },
    { k: 'Reroute', a: 150, d: ['Bijsturen op wat', 'je leerde'] }
  ];

  const deadEnds = [
    {
      from: pt(-90),
      y: 72,
      k: 'ACTIE ZONDER REFLECTIE',
      d: 'De verkeerde trein, hard rijdend.'
    },
    {
      from: pt(30),
      y: 198,
      k: 'REFLECTIE ZONDER ACTIE',
      d: 'Het perron, met de dienstregeling uit je hoofd.'
    }
  ];

  return (
    <Figure
      viewBox="0 0 940 300"
      label="De kernlus: beweging levert bewijs, bewijs leidt tot bijsturen, bijsturen tot nieuwe beweging. Vanaf twee punten in de lus vertrekt een doodlopend spoor: actie zonder reflectie en reflectie zonder actie."
      caption="Fig. 6 — De motor van het programma. Wie een halve ronde overslaat, rijdt een van de twee doodlopende sporen op."
    >
      <circle cx={cx} cy={cy} r={r} className="d-rail" />

      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length]!;
        const [x1, y1] = pt(n.a + 24);
        const [x2, y2] = pt(next.a - 24);
        return (
          <path
            key={`arc-${n.k}`}
            d={`M${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
            className="d-accent"
            markerEnd="url(#ars)"
          />
        );
      })}

      {nodes.map((n) => {
        const [x, y] = pt(n.a);
        const below = n.a > 0;
        // labels van de onderste knopen naar buiten schuiven, weg van de bogen
        const lx = x + (x - cx) * 0.4;
        return (
          <g key={n.k}>
            <circle cx={x} cy={y} r="9" className="d-node" />
            <text
              x={lx}
              y={below ? y + 34 : y - 28}
              className="d-t"
              textAnchor="middle"
            >
              {n.k}
            </text>
            {n.d.map((l, li) => (
              <text
                key={li}
                x={lx}
                y={below ? y + 52 + li * 15 : y - 60 + li * 15}
                className="d-s"
                textAnchor="middle"
              >
                {l}
              </text>
            ))}
          </g>
        );
      })}

      {deadEnds.map((e) => (
        <g key={e.k}>
          <line
            x1={e.from[0] + 14}
            y1={e.y}
            x2={562}
            y2={e.y}
            className="d-dash"
            markerEnd="url(#ar)"
          />
          <line
            x1={572}
            y1={e.y - 9}
            x2={572}
            y2={e.y + 9}
            stroke="var(--ink-3)"
            strokeWidth="3"
          />
          <text x={370} y={e.y - 12} className="d-m">
            {e.k}
          </text>
          <text x={588} y={e.y + 4} className="d-s">
            {e.d}
          </text>
        </g>
      ))}
    </Figure>
  );
}

/* ------------------------------------------------------ 7. frictie-triage */

export function FrictieTriage() {
  const cols = [
    {
      k: 'Intern',
      ex: 'Angst, perfectionisme,\nkeuzestress, gewoonte',
      tool: 'Oefenen',
      hot: false
    },
    {
      k: 'Extern',
      ex: 'Tijd, geld, kennis,\nwerkplek, mensen',
      tool: 'Regelen',
      hot: false
    },
    {
      k: 'Structureel',
      ex: 'Gezondheid, zorgtaken,\npositie, markt, wetgeving',
      tool: 'Verwachting bijstellen',
      hot: false
    }
  ];
  const W = 260;
  const G = 30;
  const top = 46;

  return (
    <Figure
      viewBox="0 0 940 320"
      label="Wat je tegenhoudt splitst in interne, externe en structurele frictie, elk met een ander gereedschap: oefenen, regelen of verwachting bijstellen. Onderaan de veelgemaakte fout: externe of structurele frictie behandelen als een innerlijk probleem."
      caption="Fig. 7 — Drie soorten frictie, drie gereedschappen. Slechts één ervan gaat over jou."
    >
      <rect x={W + G} y="0" width={W} height="34" className="d-fill" />
      <text x={W + G + W / 2} y="22" className="d-t" textAnchor="middle">
        Wat gaat er niet vooruit?
      </text>

      {cols.map((c, i) => {
        const x = i * (W + G);
        const midx = x + W / 2;
        return (
          <g key={c.k}>
            <path
              d={`M${W + G + W / 2} 34 L${W + G + W / 2} ${top - 14} L${midx} ${top - 14} L${midx} ${top}`}
              className="d-line"
              markerEnd="url(#ar)"
            />
            <rect x={x} y={top} width={W} height={72} className="d-box" />
            <text x={x + 16} y={top + 26} className="d-t">
              {c.k}
            </text>
            {c.ex.split('\n').map((l, li) => (
              <text key={li} x={x + 16} y={top + 46 + li * 15} className="d-s">
                {l}
              </text>
            ))}

            <line
              x1={midx}
              y1={top + 72}
              x2={midx}
              y2={top + 100}
              className="d-line"
              markerEnd="url(#ar)"
            />
            <rect
              x={x + 30}
              y={top + 100}
              width={W - 60}
              height={38}
              className="d-fill"
            />
            <text x={midx} y={top + 125} className="d-t" textAnchor="middle">
              {c.tool}
            </text>
          </g>
        );
      })}

      <path
        d={`M${2 * (W + G) + W / 2} ${top + 148} L${2 * (W + G) + W / 2} ${top + 176} L${W / 2} ${top + 176} L${W / 2} ${top + 154}`}
        className="d-accent"
        markerEnd="url(#ars)"
        strokeDasharray="5 4"
      />
      <text
        x={W + G + W / 2}
        y={top + 196}
        className="d-m d-sig"
        textAnchor="middle"
      >
        DE DUURSTE FOUT IN PERSOONLIJKE ONTWIKKELING
      </text>
      <text x={W + G + W / 2} y={top + 214} className="d-s" textAnchor="middle">
        Externe of structurele frictie behandelen alsof het een innerlijk
        probleem is.
      </text>
      <text x={W + G + W / 2} y={top + 230} className="d-s" textAnchor="middle">
        Dat kost jaren, en levert schuldgevoel op in plaats van beweging.
      </text>
    </Figure>
  );
}

/* ------------------------------------------- koppeling station -> tekening */

export const stationDiagrams: Record<string, () => ReactNode> = {
  vertrekhal: InvloedSpectrum,
  vision: Vertaalmachine,
  'future-you': BackcastLadder,
  'reality-check': Wisselwacht,
  friction: FrictieTriage,
  movement: Kernlus
};
