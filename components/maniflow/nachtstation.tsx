/* Nachtstation: het openingsbeeld van de vertrekhal, met de hand getekend.

   Dit is een beeld, geen interface-element. De kleuren staan daarom vast en
   veranderen niet mee met dag- en nachtbord — een foto doet dat ook niet. De
   gloed om een lamp is opgebouwd uit ringen met aflopende dekking in plaats
   van een kleurverloop, zoals in een risodruk.

   De compositie houdt de middenband leeg: bovenleiding in de lucht, seinbrug
   hoog, sporen laag, kap aan de rechterkant. Daar waar de kop staat is niets
   dan inkt. Het beeld wordt bijgesneden als een foto (slice). */

const GROND = 486;

const ROOD = '#e04a2a';
const GROEN = '#48c294';
const WARM = '#f4d5a0';

const LIJN = 'rgba(226,221,208,';

type Lamp = { x: number; y: number; kleur: string; groot?: boolean };

const lampen: Lamp[] = [
  { x: 640, y: 216, kleur: ROOD },
  { x: 740, y: 216, kleur: GROEN },
  { x: 1225, y: 344, kleur: WARM, groot: true },
  { x: 1355, y: 344, kleur: WARM, groot: true },
  { x: 1485, y: 344, kleur: WARM, groot: true }
];

/* Natte ballast breekt een weerspiegeling in losse streepjes. */
const spiegel = [
  { y: 500, w: 30, a: 0.18, dx: 0 },
  { y: 526, w: 24, a: 0.15, dx: -4 },
  { y: 554, w: 34, a: 0.12, dx: 3 },
  { y: 584, w: 20, a: 0.09, dx: -6 },
  { y: 616, w: 28, a: 0.065, dx: 5 },
  { y: 650, w: 16, a: 0.045, dx: -3 },
  { y: 684, w: 22, a: 0.03, dx: 2 }
];

const mist = [
  { y: 402, h: 14, a: 0.032 },
  { y: 424, h: 20, a: 0.045 },
  { y: 452, h: 16, a: 0.055 },
  { y: 476, h: 26, a: 0.062 },
  { y: 510, h: 18, a: 0.038 },
  { y: 540, h: 24, a: 0.022 }
];

const sporen = [
  [540, 554],
  [600, 618],
  [668, 690]
];

const masten = [150, 470, 790, 1110, 1430];
const draden = [118, 152, 186];

function Lattice({
  x,
  y1,
  y2,
  breedte = 16,
  dekking = 0.2
}: {
  x: number;
  y1: number;
  y2: number;
  breedte?: number;
  dekking?: number;
}) {
  const stappen: number[] = [];
  for (let y = y1; y < y2 - 24; y += 34) stappen.push(y);
  const l = x - breedte / 2;
  const r = x + breedte / 2;
  return (
    <g stroke={LIJN + dekking + ')'} strokeWidth="1.3" fill="none">
      <line x1={l} y1={y1} x2={l} y2={y2} />
      <line x1={r} y1={y1} x2={r} y2={y2} />
      {stappen.map((y) => (
        <g key={y} stroke={LIJN + dekking * 0.55 + ')'} strokeWidth="1">
          <line x1={l} y1={y} x2={r} y2={y + 34} />
          <line x1={r} y1={y} x2={l} y2={y + 34} />
        </g>
      ))}
    </g>
  );
}

function Gloed({ x, y, kleur, groot }: Lamp) {
  const ringen = groot
    ? [
        { r: 30, a: 0.045 },
        { r: 16, a: 0.11 },
        { r: 8, a: 0.3 }
      ]
    : [
        { r: 22, a: 0.04 },
        { r: 12, a: 0.1 },
        { r: 6, a: 0.28 }
      ];
  return (
    <g>
      {ringen.map((ring) => (
        <circle
          key={ring.r}
          cx={x}
          cy={y}
          r={ring.r}
          fill={kleur}
          opacity={ring.a}
        />
      ))}
      <circle cx={x} cy={y} r={groot ? 3.6 : 3} fill={kleur} />
    </g>
  );
}

export function Nachtstation() {
  const valans: string[] = ['M 1120 306'];
  for (let x = 1120; x < 1600; x += 22) {
    valans.push('L ' + (x + 11) + ' 316', 'L ' + (x + 22) + ' 306');
  }

  /* De draad hangt door tussen de masten; de virtuele mast buiten beeld houdt
     het ritme aan de randen gelijk. */
  const spanpunten = [-170, ...masten, 1750];
  const draad = (basis: number) =>
    spanpunten
      .slice(0, -1)
      .map((x1, i) => {
        const x2 = spanpunten[i + 1] ?? x1;
        return (
          'M ' +
          x1 +
          ' ' +
          basis +
          ' Q ' +
          (x1 + x2) / 2 +
          ' ' +
          (basis + 34) +
          ' ' +
          x2 +
          ' ' +
          basis
        );
      })
      .join(' ');

  return (
    <svg
      className="nachtstation"
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Een station bij nacht: bovenleiding die door de lucht loopt, een seinbrug met een rood en een groen sein, rechts een perronkap met verlichte lampen eronder, mist boven het emplacement en sporen op de voorgrond waarin de lichten gebroken weerspiegelen."
    >
      <rect x="0" y="0" width="1600" height="700" fill="#0a0c10" />
      <rect x="0" y={GROND} width="1600" height={700 - GROND} fill="#0c0f14" />

      {mist.map((m) => (
        <rect
          key={m.y}
          x="0"
          y={m.y}
          width="1600"
          height={m.h}
          fill="#cddaee"
          opacity={m.a}
        />
      ))}

      {/* bovenleiding: draden door de lucht, masten die er nauwelijks zijn */}
      <g stroke={LIJN + '0.075)'} strokeWidth="1" fill="none">
        {draden.map((d) => (
          <path key={d} d={draad(d)} />
        ))}
        {masten.map((x) => (
          <line key={x} x1={x} y1={GROND} x2={x} y2="104" />
        ))}
      </g>

      {/* een verlicht gebouwtje ver weg, tegen de linkerrand */}
      <rect x="8" y="440" width="142" height={GROND - 440} fill="#070910" />
      {[26, 44, 62, 86, 104].map((x) => (
        <rect
          key={x}
          x={x}
          y="452"
          width="7"
          height="10"
          fill={WARM}
          opacity="0.42"
        />
      ))}

      {/* seinbrug, hoog genoeg om de kop vrij te laten */}
      <Lattice x={560} y1={192} y2={GROND} />
      <Lattice x={1000} y1={192} y2={GROND} />
      <g stroke={LIJN + '0.24)'} strokeWidth="1.3" fill="none">
        <line x1="540" y1="150" x2="1020" y2="150" />
        <line x1="540" y1="192" x2="1020" y2="192" />
      </g>
      <g stroke={LIJN + '0.11)'} strokeWidth="1" fill="none">
        {[540, 600, 660, 720, 780, 840, 900, 960].map((x) => (
          <g key={x}>
            <line x1={x} y1="150" x2={x + 60} y2="192" />
            <line x1={x + 60} y1="150" x2={x} y2="192" />
          </g>
        ))}
      </g>
      {[640, 740, 840].map((x) => (
        <rect
          key={x}
          x={x - 13}
          y="192"
          width="26"
          height="48"
          fill="#05070a"
          stroke={LIJN + '0.18)'}
          strokeWidth="1"
        />
      ))}

      {/* perronkap tegen de rechterrand */}
      <path d={valans.join(' ')} stroke={LIJN + '0.18)'} fill="none" />
      <line
        x1="1120"
        y1="300"
        x2="1600"
        y2="300"
        stroke={LIJN + '0.28)'}
        strokeWidth="1.5"
      />
      {[1160, 1290, 1420, 1550].map((x) => (
        <g key={x} stroke={LIJN + '0.2)'} strokeWidth="1.3">
          <line x1={x - 4} y1="316" x2={x - 4} y2={GROND} />
          <line x1={x + 4} y1="316" x2={x + 4} y2={GROND} />
        </g>
      ))}
      {lampen
        .filter((l) => l.groot)
        .map((l) => (
          <line
            key={'ophang' + l.x}
            x1={l.x}
            y1="310"
            x2={l.x}
            y2={l.y}
            stroke={LIJN + '0.14)'}
            strokeWidth="1"
          />
        ))}
      <rect x="1120" y={GROND} width="480" height="24" fill="#0e1219" />
      <line
        x1="1120"
        y1={GROND}
        x2="1600"
        y2={GROND}
        stroke={LIJN + '0.26)'}
        strokeWidth="1.3"
      />

      {/* sporen op de voorgrond */}
      {sporen.map(([a, b]) => (
        <g key={a}>
          <line
            x1="0"
            y1={((a ?? 0) + (b ?? 0)) / 2}
            x2="1600"
            y2={((a ?? 0) + (b ?? 0)) / 2}
            stroke={LIJN + '0.028)'}
            strokeWidth={(b ?? 0) - (a ?? 0) + 8}
            strokeDasharray="7 22"
          />
          <line
            x1="0"
            y1={a}
            x2="1600"
            y2={a}
            stroke={LIJN + '0.11)'}
            strokeWidth="1.1"
          />
          <line
            x1="0"
            y1={b}
            x2="1600"
            y2={b}
            stroke={LIJN + '0.11)'}
            strokeWidth="1.1"
          />
        </g>
      ))}

      {/* weerspiegeling in de natte ballast */}
      {lampen.map((l) =>
        spiegel.map((s) => (
          <rect
            key={l.x + '-' + s.y}
            x={l.x + s.dx - s.w / 2}
            y={s.y}
            width={s.w}
            height="2"
            fill={l.kleur}
            opacity={s.a}
          />
        ))
      )}

      {lampen.map((l) => (
        <Gloed key={l.x} {...l} />
      ))}
    </svg>
  );
}
