import Link from 'next/link';
import { Themaschakelaar } from 'components/maniflow/thema';

const nav = [
  { href: '/maniflowstations/route', label: 'De route' },
  { href: '/maniflowstations/uitgangspunten', label: 'Uitgangspunten' },
  { href: '/maniflowstations/gereedschap', label: 'Gereedschap' },
  { href: '/maniflowstations/voorbeelden', label: 'Voorbeelden' },
  { href: '/maniflowstations/dienstregeling', label: 'Dienstregeling' },
  { href: '/maniflowstations/journaal', label: 'Journaal' }
];

export function Topbar() {
  return (
    <header className="topbar noprint">
      <div className="topbar-in">
        <Link href="/maniflowstations" className="brandmark">
          <Mark />
          ManiFlow<span style={{ color: 'var(--signal)' }}>Stations</span>
        </Link>
        <nav className="topnav" aria-label="Hoofdnavigatie">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Themaschakelaar />
      </div>
    </header>
  );
}

/* Merkteken: een spoor met een wissel. Geen logo-cliché, wel het idee. */
function Mark() {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 11h22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M0 11c7 0 7-8 14-8h8" stroke="var(--signal)" strokeWidth="1.4" />
      <circle cx="20.5" cy="3" r="1.5" fill="var(--signal)" />
    </svg>
  );
}
