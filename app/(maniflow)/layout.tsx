import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';
import { Footer } from 'components/maniflow/footer';
import { Topbar } from 'components/maniflow/topbar';
import { brand } from 'lib/maniflow';
import './maniflow.css';

export const metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`
  },
  description: brand.subtitle,
  robots: { index: true, follow: true }
};

export default function ManiFlowLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="mf">
        <a
          href="#inhoud"
          className="mono"
          style={{ position: 'absolute', left: '-9999px' }}
        >
          Naar de inhoud
        </a>
        <Topbar />
        <main id="inhoud">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
