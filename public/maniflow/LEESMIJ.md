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
`hero.webp`, `hero.avif`). Staat dat bestand in deze map, dan verschijnt het
vanzelf over de volle breedte onder de kop van `/maniflowstations`. Staat het
er niet, dan slaat de pagina het blok over — geen leeg kader, geen kapot
beeld.

Twee dingen die je zelf nog aanzet in
`app/(maniflow)/maniflowstations/page.tsx`:

```tsx
<Openingsbeeld
  alt="Wat er te zien is, in één zin."
  caption="Optioneel onderschrift."
  toon="gedempt"
/>
```

- **`alt`** staat nu leeg. Dat klopt zolang het beeld puur sfeer is;
  schermlezers slaan het dan over. Draagt het beeld betekenis, vul het dan in.
- **`toon="gedempt"`** haalt kleur uit het beeld zodat het vermiljoen van de
  site het enige felle accent blijft. Laat het weg voor het beeld zoals het is.

De verhouding schaalt mee: 4:3 op telefoon, 16:9 op tablet, 21:9 op breed.
Een liggend beeld werkt dus het best; de onderste en bovenste rand worden op
telefoon weggesneden.

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
