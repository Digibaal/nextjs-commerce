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
    <html
      lang="nl"
      data-thema="dag"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="mf">
        {/* Zet de opgeslagen keuze meteen, voordat er iets geverfd wordt. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('mf-thema');if(t==='nacht'||t==='dag')document.documentElement.dataset.thema=t}catch(e){}"
          }}
        />
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
