import type { ReactNode } from 'react';

/* Sfeerbeelden. Geen informatie, geen tekst in het beeld — alleen ritme, zodat
   een lange pagina ergens kan ademen. Alles is met de hand getekend in dezelfde
   spoortaal als de rest van de site: hairlines, rechte lijnen, één warm punt.
   Kleuren komen uit de themavariabelen, dus ze kloppen op dag- en nachtbord. */

function Sfeer({
  label,
  caption,
  viewBox,
  children
}: {
  label: string;
  caption?: string;
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <figure className="figure sfeer">
      <div className="sfeer-frame">
        <svg viewBox={viewBox} role="img" aria-label={label}>
          {children}
        </svg>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/* --------------------------------------------------------------- 1. brug */

export function Brug() {
  const DEK = 150;
  const BOOG = 62;
  const A = 140;
  const B = 1060;
  const BAY = (B - A) / 10;

  const knopen: number[] = [];
  for (let i = 0; i <= 10; i++) knopen.push(A + i * BAY);

  const onder = knopen.filter((_x, i) => i % 2 === 0);
  const boven = knopen.filter((_x, i) => i % 2 === 1);

  const schoren: string[] = [];
  for (let i = 0; i < 10; i++) {
    const x1 = A + i * BAY;
    const x2 = A + (i + 1) * BAY;
    const y1 = i % 2 === 0 ? DEK : BOOG;
    const y2 = i % 2 === 0 ? BOOG : DEK;
    schoren.push('M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2);
  }

  const rimpels = [
    [60, 226],
    [190, 234],
    [300, 224],
    [430, 236],
    [520, 226],
    [660, 234],
    [770, 224],
    [900, 236],
    [1010, 226],
    [1130, 232]
  ];

  return (
    <Sfeer
      viewBox="0 0 1200 260"
      label="Een spoorbrug van opzij: een vakwerk van driehoeken boven een recht brugdek, twee pijlers in het water, aanbruggen naar links en rechts, en één sein dat brandt."
      caption="Een oversteek is geen sprong. Er ligt een constructie onder."
    >
      {/* pijlers */}
      {[140, 1060].map((x) => (
        <rect
          key={x}
          x={x - 15}
          y="158"
          width="30"
          height="58"
          className="s-board"
        />
      ))}
      {[54, 1146].map((x) => (
        <rect
          key={x}
          x={x - 9}
          y="158"
          width="18"
          height="58"
          className="s-board"
        />
      ))}

      {/* vakwerk */}
      <line x1={boven[0]} y1="56" x2={boven[4]} y2="56" className="s-ln" />
      <line x1={boven[0]} y1={BOOG} x2={boven[4]} y2={BOOG} className="s-ln" />
      {schoren.map((d) => (
        <path key={d} d={d} className="s-ln" />
      ))}
      {boven.map((x) => (
        <line key={x} x1={x} y1={BOOG} x2={x} y2={DEK} className="s-hair" />
      ))}
      {onder.map((x) => (
        <circle key={x} cx={x} cy={DEK} r="2.5" className="s-solid" />
      ))}

      {/* dek en spoor */}
      <line
        x1="0"
        y1="145"
        x2="1200"
        y2="145"
        className="s-hair"
        strokeWidth="9"
        strokeDasharray="5 12"
      />
      <line x1="0" y1="140" x2="1200" y2="140" className="s-ln" />
      <line x1="0" y1={DEK} x2="1200" y2={DEK} className="s-ln2" />
      <line x1="0" y1="158" x2="1200" y2="158" className="s-ln" />

      {/* water */}
      <line x1="0" y1="212" x2="1200" y2="212" className="s-ln2" />
      {rimpels.map(([x, y]) => (
        <line
          key={String(x) + '-' + String(y)}
          x1={x}
          y1={y}
          x2={(x ?? 0) + 46}
          y2={y}
          className="s-hair"
        />
      ))}

      <line x1="1120" y1={DEK} x2="1120" y2="82" className="s-ln" />
      <rect x="1111" y="62" width="18" height="32" className="s-plate" />
      <circle cx="1120" cy="78" r="4.5" className="s-sigf" />
    </Sfeer>
  );
}

/* -------------------------------------------------------- 2. wisselstraat */

export function Wisselstraat() {
  const MAIN = 130;
  const branches = [
    { x: 150, y: 44 },
    { x: 245, y: 216 },
    { x: 355, y: 72 },
    { x: 465, y: 188 },
    { x: 575, y: 100 },
    { x: 690, y: 160 }
  ];
  const path = (bx: number, by: number, off: number) => {
    const dx = Math.round(Math.abs(by - MAIN) * 2.4);
    return (
      'M 0 ' +
      (MAIN + off) +
      ' H ' +
      bx +
      ' L ' +
      (bx + dx) +
      ' ' +
      (by + off) +
      ' H 1200'
    );
  };
  const ruit = (x: number) =>
    'M ' +
    x +
    ' ' +
    (MAIN - 8) +
    ' L ' +
    (x + 7) +
    ' ' +
    MAIN +
    ' L ' +
    x +
    ' ' +
    (MAIN + 8) +
    ' L ' +
    (x - 7) +
    ' ' +
    MAIN +
    ' Z';

  return (
    <Sfeer
      viewBox="0 0 1200 260"
      label="Een sporenwaaier van bovenaf: één spoor dat via zes wissels uitwaaiert naar zeven sporen, waarvan er één in signaalkleur is uitgelicht. Geen van de sporen eindigt."
      caption="Elke wissel is een keuze. Geen van de sporen loopt dood."
    >
      <line
        x1="0"
        y1={MAIN}
        x2="152"
        y2={MAIN}
        className="s-hair"
        strokeWidth="20"
        strokeDasharray="5 13"
      />

      <path d={'M 0 ' + (MAIN - 3) + ' H 1200'} className="s-ln" />
      <path d={'M 0 ' + (MAIN + 3) + ' H 1200'} className="s-ln" />

      {branches.map((b, i) =>
        i === 2 ? null : (
          <g key={b.x}>
            <path d={path(b.x, b.y, -3)} className="s-ln" />
            <path d={path(b.x, b.y, 3)} className="s-ln" />
          </g>
        )
      )}

      {branches.map((b) => (
        <path key={'f' + b.x} d={ruit(b.x)} className="s-solid" />
      ))}

      <path d={path(355, 72, -3)} className="s-sig" />
      <path d={path(355, 72, 3)} className="s-sig" />
    </Sfeer>
  );
}

/* ------------------------------------------------------------ 3. perronkap */

export function Perronkap() {
  const valance: string[] = ['M 0 46'];
  for (let x = 0; x < 1200; x += 24) {
    valance.push('L ' + (x + 12) + ' 56', 'L ' + (x + 24) + ' 46');
  }
  const cols: number[] = [];
  for (let i = 0; i < 9; i++) cols.push(70 + i * 133);

  return (
    <Sfeer
      viewBox="0 0 1200 250"
      label="Een perronkap van opzij: een dak met een geschulpte rand op slanke kolommen, een vertrekbord dat aan het dak hangt, een lege bank, de perronrand met markeringsstrook, het spoor eronder, en één sein dat brandt."
      caption="Een perron is een plek om te wachten mét een bestemming."
    >
      <line x1="0" y1="40" x2="1200" y2="40" className="s-ln2" />
      <path d={valance.join(' ')} className="s-ln" />

      {cols.map((x) => (
        <g key={x}>
          <line x1={x - 3} y1="56" x2={x - 3} y2="196" className="s-ln" />
          <line x1={x + 3} y1="56" x2={x + 3} y2="196" className="s-ln" />
          <line x1={x - 3} y1="74" x2={x - 22} y2="56" className="s-hair" />
          <line x1={x + 3} y1="74" x2={x + 22} y2="56" className="s-hair" />
          <line x1={x - 9} y1="196" x2={x + 9} y2="196" className="s-ln2" />
        </g>
      ))}

      {/* het bord dat aan de kap hangt */}
      <line x1="358" y1="56" x2="358" y2="80" className="s-hair" />
      <line x1="446" y1="56" x2="446" y2="80" className="s-hair" />
      <rect x="350" y="80" width="104" height="34" className="s-board" />
      {[88, 96, 104].map((yy) => (
        <line key={yy} x1="358" y1={yy} x2="446" y2={yy} className="s-seam" />
      ))}

      {/* de lege bank */}
      <line x1="624" y1="178" x2="720" y2="178" className="s-ln" />
      <line x1="624" y1="166" x2="720" y2="166" className="s-hair" />
      <line x1="634" y1="178" x2="634" y2="196" className="s-ln" />
      <line x1="710" y1="178" x2="710" y2="196" className="s-ln" />

      <line
        x1="0"
        y1="189"
        x2="1200"
        y2="189"
        className="s-ln"
        strokeWidth="3"
        strokeDasharray="3 10"
      />
      <line x1="0" y1="196" x2="1200" y2="196" className="s-ln2" />
      <rect x="0" y="196" width="1200" height="18" className="s-band" />

      <line
        x1="0"
        y1="232"
        x2="1200"
        y2="232"
        className="s-hair"
        strokeWidth="13"
        strokeDasharray="6 15"
      />
      <line x1="0" y1="224" x2="1200" y2="224" className="s-ln" />

      <line x1="1060" y1="196" x2="1060" y2="118" className="s-ln" />
      <rect x="1053" y="104" width="14" height="26" className="s-plate" />
      <circle cx="1060" cy="117" r="4" className="s-sigf" />
    </Sfeer>
  );
}

/* --------------------------------------------------------- 4. bovenleiding */

export function Bovenleiding() {
  const SPAN = 240;
  const TOP = 62;
  const CTRL = 130;
  const WIRE = 170;
  const GROUND = 196;
  const masts = [60, 300, 540, 780, 1020];
  const spans = [-180, 60, 300, 540, 780, 1020];

  const sagY = (t: number) =>
    Math.round(
      ((1 - t) * (1 - t) * TOP + 2 * (1 - t) * t * CTRL + t * t * TOP) * 10
    ) / 10;

  const droppers: { x: number; y: number; hot: boolean }[] = [];
  spans.forEach((x1, si) => {
    for (let k = 1; k < 8; k++) {
      const t = k / 8;
      droppers.push({
        x: Math.round(x1 + SPAN * t),
        y: sagY(t),
        hot: si === 4 && k === 5
      });
    }
  });

  return (
    <Sfeer
      viewBox="0 0 1200 220"
      label="Een bovenleiding van opzij: vakwerkmasten op gelijke afstand, een draagkabel die tussen de masten doorhangt, verticale hangdraden naar de rijdraad eronder, en één hangdraad in signaalkleur."
      caption="Dezelfde bovenleiding boven elk spoor. Het systeem verandert niet met de bestemming."
    >
      {spans.map((x1) => (
        <path
          key={x1}
          d={
            'M ' +
            x1 +
            ' ' +
            TOP +
            ' Q ' +
            (x1 + SPAN / 2) +
            ' ' +
            CTRL +
            ' ' +
            (x1 + SPAN) +
            ' ' +
            TOP
          }
          className="s-ln"
        />
      ))}

      {droppers.map((d) => (
        <line
          key={d.x}
          x1={d.x}
          y1={d.y}
          x2={d.x}
          y2={WIRE}
          className={d.hot ? 's-sig' : 's-ln'}
        />
      ))}

      <line x1="0" y1={WIRE} x2="1200" y2={WIRE} className="s-ln2" />

      {masts.map((x) => (
        <g key={x}>
          <line x1={x - 8} y1={GROUND} x2={x - 8} y2="44" className="s-ln" />
          <line x1={x + 8} y1={GROUND} x2={x + 8} y2="44" className="s-ln" />
          {[52, 81, 110, 139, 167].map((yy) => (
            <g key={yy}>
              <line
                x1={x - 8}
                y1={yy}
                x2={x + 8}
                y2={yy + 29}
                className="s-hair"
              />
              <line
                x1={x + 8}
                y1={yy}
                x2={x - 8}
                y2={yy + 29}
                className="s-hair"
              />
            </g>
          ))}
          <line x1={x - 8} y1={TOP} x2={x + 8} y2={TOP} className="s-ln2" />
        </g>
      ))}

      <line
        x1="0"
        y1="202"
        x2="1200"
        y2="202"
        className="s-hair"
        strokeWidth="12"
        strokeDasharray="6 14"
      />
      <line x1="0" y1={GROUND} x2="1200" y2={GROUND} className="s-ln" />
    </Sfeer>
  );
}

/* --------------------------------------------------------- 5. vertrekbord */

export function Vertrekbord() {
  /* Het patroon is met de hand gezet: tijd, bestemming, via, perron. De vierde
     regel heeft nog geen perron en staat daarom op amber. */
  const rows = [
    '####.#####.####....##.##',
    '####.########..###....##',
    '####.######.#####....###',
    '####.##########.###.....',
    '####.#######.####.....##',
    '####.#####.#######...###'
  ];
  const COLS = 24;
  const X0 = 26;
  const Y0 = 21;
  const CW = 44;
  const CH = 38;
  const SX = 48;
  const SY = 44;
  const BW = COLS * SX - (SX - CW);
  const BH = rows.length * SY - (SY - CH);

  return (
    <Sfeer
      viewBox="0 0 1200 300"
      label="Een vertrekbord van dichtbij: een raster van klapcellen, waarvan een deel omgeklapt is tot blokken die op woorden lijken. Eén regel staat in amber en heeft nog geen perronnummer."
      caption="Een bord verandert niet omdat je ernaar staart."
    >
      <rect x={X0} y={Y0} width={BW} height={BH} className="s-board" />

      {rows.map((row, r) =>
        row
          .split('')
          .map((ch, c) =>
            ch === '#' ? (
              <rect
                key={'c' + r + '-' + c}
                x={X0 + c * SX}
                y={Y0 + r * SY}
                width={CW}
                height={CH}
                className={r === 3 ? 's-amberf' : 's-solid'}
              />
            ) : null
          )
      )}

      {rows.map((_, r) =>
        r === 0 ? null : (
          <line
            key={'h' + r}
            x1={X0}
            y1={Y0 + r * SY - 3}
            x2={X0 + BW}
            y2={Y0 + r * SY - 3}
            className="s-hair"
          />
        )
      )}
      {Array.from({ length: COLS - 1 }, (_v, i) => i + 1).map((c) => (
        <line
          key={'v' + c}
          x1={X0 + c * SX - 2}
          y1={Y0}
          x2={X0 + c * SX - 2}
          y2={Y0 + BH}
          className="s-hair"
        />
      ))}
      {rows.map((_, r) => (
        <line
          key={'seam' + r}
          x1={X0}
          y1={Y0 + r * SY + CH / 2}
          x2={X0 + BW}
          y2={Y0 + r * SY + CH / 2}
          className="s-seam"
        />
      ))}
    </Sfeer>
  );
}
