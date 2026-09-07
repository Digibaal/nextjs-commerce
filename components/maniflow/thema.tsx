'use client';

import { useEffect, useState } from 'react';

const SLEUTEL = 'mf-thema';

/* Dagbord of nachtbord. De site volgt bewust niet de systeeminstelling: hij
   staat standaard op wit en de bezoeker kiest zelf. De keuze blijft in deze
   browser bewaard.

   Welke knop ingedrukt oogt, bepaalt de CSS uit het data-attribuut op <html>.
   Deze component zet alleen het attribuut en de aria-status, zodat er niets
   verspringt tussen de eerste weergave en het moment dat de pagina laadt. */
export function Themaschakelaar() {
  const [nacht, setNacht] = useState<boolean | null>(null);

  useEffect(() => {
    setNacht(document.documentElement.dataset.thema === 'nacht');
  }, []);

  function zet(stand: 'dag' | 'nacht') {
    document.documentElement.dataset.thema = stand;
    setNacht(stand === 'nacht');
    try {
      localStorage.setItem(SLEUTEL, stand);
    } catch {
      /* privémodus: dan geldt de keuze alleen voor dit bezoek */
    }
  }

  return (
    <div className="thema noprint" role="group" aria-label="Weergave">
      <button
        type="button"
        data-stand="dag"
        aria-pressed={nacht === null ? undefined : !nacht}
        onClick={() => zet('dag')}
      >
        Dag
      </button>
      <button
        type="button"
        data-stand="nacht"
        aria-pressed={nacht === null ? undefined : nacht}
        onClick={() => zet('nacht')}
      >
        Nacht
      </button>
    </div>
  );
}
