import Link from 'next/link';
import { brand } from 'lib/maniflow';

export function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <h4>Over dit programma</h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--ink-2)',
                maxWidth: '30rem'
              }}
            >
              {brand.promise}
            </p>
            <p className="mono faint" style={{ marginTop: '1.4rem' }}>
              Geen behandeling · geen garantie · geen universum
            </p>
          </div>
          <div>
            <h4>De reis</h4>
            <ul>
              <li>
                <Link href="/maniflowstations/route">Volledige route</Link>
              </li>
              <li>
                <Link href="/maniflowstations/station/vertrekhal">
                  Perron 0 — Vertrekhal
                </Link>
              </li>
              <li>
                <Link href="/maniflowstations/dienstregeling">
                  21 · 30 · 42 dagen
                </Link>
              </li>
              <li>
                <Link href="/maniflowstations/journaal">
                  Journaal en Evidence Log
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Achtergrond</h4>
            <ul>
              <li>
                <Link href="/maniflowstations/uitgangspunten">
                  Uitgangspunten
                </Link>
              </li>
              <li>
                <Link href="/maniflowstations/gereedschap">
                  Vaste gereedschappen
                </Link>
              </li>
              <li>
                <Link href="/maniflowstations/voorbeelden">
                  Zes levensgebieden
                </Link>
              </li>
              <li>
                <Link href="/maniflowstations/vormen">Programmavormen</Link>
              </li>
              <li>
                <a href="/maniflowstations/programma">
                  Het hele programma als markdown
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr
          className="hair"
          style={{ marginTop: '3rem', marginBottom: '1.4rem' }}
        />
        <p className="mono faint" style={{ margin: 0 }}>
          {brand.name} — {brand.tagline}
        </p>
      </div>
    </footer>
  );
}
