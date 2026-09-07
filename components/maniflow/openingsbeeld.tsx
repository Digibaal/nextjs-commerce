import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

/* Openingsbeeld van de vertrekhal: volle breedte, hairline boven en onder.

   Zet je bestand neer als public/maniflow/hero.png (of .jpg, .jpeg, .webp,
   .avif) en het verschijnt vanzelf boven aan de pagina. Staat er niets, dan
   slaat de pagina het blok over in plaats van een leeg kader te tonen — de
   site blijft dus heel zolang het bestand nog niet gepusht is. */

const KANDIDATEN = [
  'hero.png',
  'hero.jpg',
  'hero.jpeg',
  'hero.webp',
  'hero.avif'
];

function vindOpeningsbeeld(): string | null {
  const map = path.join(process.cwd(), 'public', 'maniflow');
  for (const naam of KANDIDATEN) {
    if (fs.existsSync(path.join(map, naam))) return `/maniflow/${naam}`;
  }
  return null;
}

export function Openingsbeeld({
  alt,
  caption,
  toon = 'puur'
}: {
  /** beschrijving voor wie het beeld niet ziet — geen "afbeelding van" */
  alt: string;
  caption?: string;
  /** "gedempt" haalt kleur eruit zodat het beeld het vermiljoen niet beconcurreert */
  toon?: 'puur' | 'gedempt';
}) {
  const src = vindOpeningsbeeld();
  if (!src) return null;

  return (
    <figure
      className={
        toon === 'gedempt' ? 'openingsbeeld is-gedempt' : 'openingsbeeld'
      }
    >
      <div className="openingsbeeld-frame">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {caption ? <figcaption className="shell">{caption}</figcaption> : null}
    </figure>
  );
}
