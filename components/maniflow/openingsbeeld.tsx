import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

/* Het openingsbeeld van de vertrekhal: volle breedte, achter de kop.

   Zet je bestand neer als public/maniflow/hero.png (of .jpg, .jpeg, .webp,
   .avif) en het verschijnt vanzelf. Staat er niets, dan valt de hero terug op
   papier met donkere letters — de site blijft dus heel zolang het bestand nog
   niet gepusht is. */

const KANDIDATEN = [
  'hero.png',
  'hero.jpg',
  'hero.jpeg',
  'hero.webp',
  'hero.avif'
];

export function vindHeroBeeld(): string | null {
  const map = path.join(process.cwd(), 'public', 'maniflow');
  for (const naam of KANDIDATEN) {
    if (fs.existsSync(path.join(map, naam))) return '/maniflow/' + naam;
  }
  return null;
}

export function HeroBeeld({
  src,
  alt = '',
  /* Welk deel van het beeld blijft staan. De laag is anderhalf keer zo hoog
     als de hero en hangt aan de onderkant, dus de bovenkant van je beeld valt
     altijd weg — op elk schermformaat, ook staand op een telefoon. Zet hier
     iets anders neer als je juist het midden wilt tonen. */
  uitsnede = '50% 100%'
}: {
  src: string;
  alt?: string;
  uitsnede?: string;
}) {
  return (
    <>
      <div className="hero-beeld">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: uitsnede }}
        />
      </div>
      <div className="hero-waas" />
    </>
  );
}
