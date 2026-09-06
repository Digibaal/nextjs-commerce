import Image from 'next/image';

/* Beeldband in de huisstijl: hairline kader, ondertitel in mono.
   Bestanden staan in public/maniflow/ en spreek je aan als /maniflow/naam.jpg */

export function Beeld({
  src,
  alt,
  caption,
  ratio = '21 / 9',
  priority = false
}: {
  /** pad vanaf public/, bijvoorbeeld "/maniflow/perron.jpg" */
  src: string;
  /** beschrijving voor wie het beeld niet ziet — geen "afbeelding van" */
  alt: string;
  caption?: string;
  /** hoogte-breedteverhouding, bijvoorbeeld "16 / 9" of "3 / 2" */
  ratio?: string;
  /** true voor het eerste beeld op een pagina, dan laadt het meteen */
  priority?: boolean;
}) {
  return (
    <figure className="figure">
      <div className="beeld-frame" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 78rem) 100vw, 78rem"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
