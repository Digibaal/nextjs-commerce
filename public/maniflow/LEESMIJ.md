# Beeld voor ManiFlowStations

Alles in deze map is publiek bereikbaar op de site. Een bestand
`public/maniflow/perron.jpg` staat op `/maniflow/perron.jpg`.

## Toevoegen

1. Zet je bestand in deze map. Kleine letters, streepjes, geen spaties:
   `vertrekhal.jpg`, niet `Vertrekhal foto (1).jpg`.
2. Gebruik het op een pagina:

   ```tsx
   import { Beeld } from 'components/maniflow/beeld';

   <Beeld
     src="/maniflow/vertrekhal.jpg"
     alt="Wat er te zien is, in één zin."
     caption="Optioneel onderschrift."
     ratio="21 / 9"
   />;
   ```

## Het openingsbeeld

Eén bestandsnaam is speciaal: `hero.png` (of `hero.jpg`, `hero.jpeg`,
`hero.webp`, `hero.avif`). Staat dat bestand in deze map, dan komt het achter
de kop van `/maniflowstations` te staan. Staat het er niet, dan valt de pagina
terug op een getekend nachtstation — geen leeg kader, geen kapot beeld. Je
eigen beeld wint altijd; je hoeft nergens iets aan of uit te zetten.

Drie dingen om te weten:

- **De bovenste helft van je beeld valt weg.** De beeldlaag is ruim twee keer
  zo hoog als de hero en hangt aan de onderkant, zodat de uitsnede op elk
  scherm hetzelfde doet: breed, staand, telefoon. Zet dus niets wat je wilt
  laten zien in de bovenhelft van het bestand.
- **Geen tekst in het beeld.** De kop staat er in echte letters overheen. Een
  woordmerk dat in het beeld gebakken zit botst daarmee, en zoekmachines en
  schermlezers zien het niet.
- **Er ligt een inktwaas van 62% overheen.** Zonder die waas is de kop niet te
  lezen. Reken er dus op dat je beeld donkerder en rustiger wordt dan het in
  je map staat; een beeld dat al druk is, wordt daar niet beter van.

Wil je toch het midden van je beeld tonen in plaats van de onderkant, dan zet
je dat om in `app/(maniflow)/maniflowstations/page.tsx`:

```tsx
<HeroBeeld src={heroBeeld} uitsnede="50% 50%" />
```

Zie je na een `git pull` nog het oude beeld? Dan zit het nieuwe al goed en
serveert de ontwikkelserver alleen zijn eigen cache. Stop hem met Ctrl+C,
verwijder de map `.next/cache/images` en start hem opnieuw met `pnpm dev`.

## Wat werkt hier visueel

- **Breed en rustig.** 21:9 of 16:9. Staande beelden vechten met de
  kantlijnstructuur van de pagina.
- **Weinig kleur.** De site draait op één accent (vermiljoen) plus vier
  lijnkleuren. Een beeld met eigen felle kleuren haalt dat uit elkaar.
- **Abstract boven letterlijk.** Een perron met een peinzende vrouw erop is
  de beeldtaal van elke coachsite; dit programma ontleent zijn
  geloofwaardigheid aan het tegenovergestelde.
- **Geen tekst in het beeld.** De typografie op de pagina doet dat werk al.

## Formaat

- Breedte 2400 px is ruim genoeg; groter kost alleen laadtijd.
- JPEG voor foto's, PNG voor vlakke grafiek, SVG als je het zelf tekent.
- Next.js maakt zelf webp- en avif-varianten, dus optimaliseren hoeft niet.

## Alt-tekst

Beschrijf wat er te zien is, niet dat het een afbeelding is. Is het puur
decoratief, geef dan `alt=""` — dan slaan schermlezers het over in plaats van
de bestandsnaam voor te lezen.
