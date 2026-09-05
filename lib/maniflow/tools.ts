import type { Tool } from './types';

export const tools: Tool[] = [
  {
    slug: 'vier-vak',
    name: 'Het Vier-vak',
    subtitle: 'Controle · Invloed · Kans · Toeval',
    usedAt: 'Perron 0, en bij elke tegenslag',
    what: 'Sorteert alles wat meespeelt bij een wens of tegenslag in vier categorieën, zodat je weet waar je kunt handelen en waar je moet accepteren.',
    how: [
      'Schrijf de situatie of wens bovenaan.',
      'Verdeel alle meespelende factoren over vier vakken.',
      'Plan alleen in het vak Controle. Vergroot kansen in het vak Invloed.',
      'Reken nuchter in het vak Kans. Accepteer het vak Toeval, en vergroot je blootstelling zodat toeval je vaker kan vinden.'
    ],
    columns: ['Controle', 'Invloed', 'Kans', 'Toeval'],
    trap: 'De klassieke fout is uitkomsten in het vak Controle zetten ("of ze ja zegt"). Uitkomsten waar een ander mens aan te pas komt, horen altijd in Invloed.'
  },
  {
    slug: 'routekaart',
    name: 'De Routekaart',
    subtitle: 'Eén A4, altijd zichtbaar',
    usedAt: 'Station 1, en bij elke reroute',
    what: 'Je bestemming, je huidige lijn en je eerstvolgende halte op één pagina. Het enige document dat je wekelijks terugziet.',
    how: [
      'Bovenaan: bestemming in één zin, plus de herkenzin ("Ik zou weten dat ik er ben als...").',
      'Midden: de onderliggende behoefte in één woord.',
      'Onder: huidige lijn (welke fase), eerstvolgende halte, en de datum van je volgende reroute.',
      'Achterkant: de bestemmingen die je hebt laten vallen, met datum. Dit blijkt na een halfjaar het meest leerzame deel.'
    ],
    trap: 'Als je routekaart langer is dan één pagina, is het geen routekaart maar een businessplan dat je niet gaat lezen.'
  },
  {
    slug: 'herkomstcheck',
    name: 'De Herkomstcheck',
    subtitle: 'Van wie is deze wens eigenlijk?',
    usedAt: 'Station 1, en bij elk nieuw idee dat opvlamt',
    what: 'Vijf vragen die onderscheid maken tussen eigen verlangen, aangeleerde wens, statusdoel, verwachting van anderen en vluchtfantasie.',
    how: [
      'Zou ik dit nog willen als niemand het ooit zag?',
      'Wanneer voelde ik dit voor het eerst, en wat gebeurde er toen in mijn leven?',
      'Wie zou het meest tevreden zijn als dit lukte?',
      'Wil ik dit ook als het drie jaar langer duurt?',
      'Welke behoefte zit eronder — en is er een goedkopere route naar diezelfde behoefte?'
    ],
    trap: 'Een wens die deels van anderen komt, is niet automatisch ongeldig. Het gaat erom dat je het weet, zodat je niet verbaasd bent als de voldoening uitblijft.'
  },
  {
    slug: 'vertaalmachine',
    name: 'De Vertaalmachine',
    subtitle: 'Beeld → kwaliteit → gedrag → omstandigheid → prijs',
    usedAt: 'Station 2, en telkens als je een nieuw beeld tegenkomt',
    what: 'Zet elk aantrekkelijk beeld om in iets wat je kunt inroosteren, betalen en toetsen.',
    how: [
      'Kolom 1 — Kwaliteit: welke ervaring zoek je hier, in maximaal drie woorden?',
      'Kolom 2 — Gedrag: wat zou je wekelijks doen? Alleen werkwoorden.',
      'Kolom 3 — Omstandigheid: wat moet er geregeld zijn?',
      'Kolom 4 — Prijs: tijd, geld, energie, relaties.',
      'Kolom 5 — Nu al: welke tien procent kun je binnen twee weken organiseren?'
    ],
    columns: ['Kwaliteit', 'Gedrag', 'Omstandigheid', 'Prijs', 'Nu al'],
    trap: 'Kolom 4 wordt het vaakst overgeslagen en is de enige die voorkomt dat je drie jaar aan iets werkt waarvan je de rekening niet wilde betalen.'
  },
  {
    slug: 'backcast-ladder',
    name: 'De Backcast-ladder',
    subtitle: 'Drie jaar → één jaar → drie maanden → deze week',
    usedAt: 'Station 3, en bij elk nieuw doel',
    what: 'Redeneert van de gewenste toekomst terug naar één handeling van deze week.',
    how: [
      'Beschrijf de situatie over drie jaar in vijf zinnen, inclusief één ding dat nog steeds lastig is.',
      'Vraag per trede: wat moet er waar zijn geweest, wil de trede erboven mogelijk zijn?',
      'Ga door tot deze week. De onderste trede moet binnen twee uur passen.',
      'Zet die onderste trede in de agenda met dag en tijd.'
    ],
    columns: ['3 jaar', '1 jaar', '3 maanden', 'Deze week'],
    trap: 'Als je onderste trede nog steeds klinkt als een project, ben je één niveau te hoog blijven hangen. Halveer tot het bijna beschamend klein is.'
  },
  {
    slug: 'verhaal-bewijstabel',
    name: 'De Verhaal-bewijstabel',
    subtitle: 'Welk zelfverhaal klopt nog?',
    usedAt: 'Station 4, en bij elke terugval',
    what: 'Splitst je zelfverhalen in bewijs voor, bewijs tegen, ouderdom van dat bewijs, en één gedrag dat nieuw bewijs oplevert.',
    how: [
      'Schrijf het verhaal letterlijk op zoals je het tegen jezelf zegt.',
      'Verzamel bewijs vóór en bewijs tegen. Minstens twee per kolom.',
      'Noteer de datum van het oudste bewijs vóór. Ouder dan vijf jaar is een archiefstuk.',
      'Bedenk één klein gedrag dat deze week tegenbewijs oplevert.'
    ],
    columns: [
      'Verhaal',
      'Bewijs vóór',
      'Bewijs tegen',
      'Datum',
      'Tegenbewijsactie'
    ],
    trap: 'De kolom Bewijs vóór eerlijk invullen is het punt. Een tabel waarin je oude verhaal nergens ondersteuning heeft, is niet eerlijk en overtuigt je dus niet.'
  },
  {
    slug: 'wisselwacht',
    name: 'De Wisselwacht',
    subtitle: 'Feit · Interpretatie · Aanname · Wens · Angst',
    usedAt: 'Station 5, en bij elke vastloopzin',
    what: 'Sorteert één zin waar je op vastloopt in vijf sporen, zodat je ziet welk deel getoetst kan worden.',
    how: [
      'Schrijf de zin letterlijk op.',
      'Sorteer elk onderdeel: zou een camera het zien (feit), of maak jij er iets van (interpretatie)?',
      'Omcirkel de meest bepalende ongetoetste aanname.',
      'Bepaal hoe je die binnen zeven dagen kunt toetsen, en bij wie.'
    ],
    columns: ['Feit', 'Interpretatie', 'Aanname', 'Wens', 'Angst'],
    trap: 'Niet alles hoort in het vak Interpretatie. Als er een echt feit staat dat je in de weg zit, verdient dat een plan, geen reflectie.'
  },
  {
    slug: 'frictie-triage',
    name: 'De Frictie-triage',
    subtitle: 'Intern · Extern · Structureel',
    usedAt: 'Station 6, en bij elke stilstand',
    what: 'Bepaalt welk gereedschap hoort bij wat je tegenhoudt: oefenen, regelen, of verwachting bijstellen.',
    how: [
      'Beschrijf wat er niet vooruitgaat, in één zin.',
      'Verdeel alle oorzaken over intern, extern en structureel.',
      'Zet achter elke oorzaak het gereedschap: oefenen / regelen / bijstellen.',
      'Haal deze week de goedkoopste externe frictie weg. Niet de belangrijkste — de goedkoopste.'
    ],
    columns: ['Intern', 'Extern', 'Structureel'],
    trap: 'De duurste fout in persoonlijke ontwikkeling: externe of structurele frictie behandelen als een innerlijk probleem. Dat kost jaren en levert schuldgevoel op.'
  },
  {
    slug: 'alignment-audit',
    name: 'De Vijfsporen-audit',
    subtitle: 'Uren · Euro’s · Aandacht · Mensen · Energie',
    usedAt: 'Station 7, maandelijks daarna',
    what: 'Maakt zichtbaar in hoeverre je week overeenkomt met wat je zegt belangrijk te vinden. Geen gevoel — bronnen.',
    how: [
      'Open je agenda en je bankafschrift van de afgelopen twee weken. Echt openen.',
      'Score per spoor van 0 tot 5.',
      'Kies het laagste spoor en verbeter het met één stap. Eén.',
      'Herhaal maandelijks. De trend is belangrijker dan de score.'
    ],
    columns: ['Uren', 'Euro’s', 'Aandacht', 'Mensen', 'Energie'],
    trap: 'Streven naar vijven op alle sporen is onrealistisch en meestal een teken dat je de audit gebruikt om jezelf te veroordelen. Kijk naar de vrij besteedbare marge, niet naar het totaal.'
  },
  {
    slug: 'energiebalans',
    name: 'De Energiebalans',
    subtitle: 'Wat kost, wat levert, wat herstelt',
    usedAt: 'Station 6, 7 en 11 — en elke week waarin het zwaar is',
    what: 'Behandelt energie als een middel met een voorraad in plaats van als een karaktereigenschap.',
    how: [
      'Noteer een week lang per dag drie dingen: grootste energievreter, grootste energiegever, en hoe je sliep.',
      'Markeer wat structureel is (werk, zorg, gezondheid) en wat variabel is.',
      'Kies één variabele vreter om te verkleinen en één gever om vast in te roosteren.',
      'Plan je belangrijkste blok op je hoogste energiemoment, niet op het moment dat toevallig vrij is.'
    ],
    columns: ['Vreters', 'Gevers', 'Herstel', 'Structureel of variabel'],
    trap: 'Energie proberen te vermeerderen met discipline. Energie ontstaat uit herstel, ritme en het weghalen van belasting — niet uit strenger zijn tegen jezelf.'
  },
  {
    slug: 'als-dan',
    name: 'De Als-dan-afspraak',
    subtitle: 'Implementatie-intentie',
    usedAt: 'Station 8, en bij elke actie die je uitstelt',
    what: 'Legt vooraf vast wanneer, waar en wat je doet, zodat je op het moment zelf niets meer hoeft te besluiten.',
    how: [
      'Schrijf: "Als het [dag] [tijd] is en ik ben [plek], dan doe ik [handeling van max 20 minuten]."',
      'Koppel hem aan iets wat je toch al doet (na de koffie, na het uitlaten van de hond).',
      'Bepaal vooraf de noodversie voor een slechte dag: dezelfde handeling in vijf minuten.',
      'Zet hem in je agenda, niet in je hoofd.'
    ],
    trap: 'Een als-dan zonder plek en tijd is een voornemen met een nieuw jasje. De precisie is het werkzame bestanddeel.'
  },
  {
    slug: 'experimentkaart',
    name: 'De Experimentkaart',
    subtitle: 'Aanname · Test · Bewijs · Afbreekcriterium',
    usedAt: 'Elk station met een experiment',
    what: 'Maakt van een vaag voornemen een test met een begin, een eind en een uitslag.',
    how: [
      'Aanname: wat denk je dat waar is?',
      'Kleinste test: hoe kun je dat met de minste moeite toetsen?',
      'Wat zou me overtuigen: schrijf vooraf op welke uitkomst je van gedachten doet veranderen.',
      'Afbreekcriterium en deadline: wanneer stop je, ongeacht de uitkomst?'
    ],
    columns: [
      'Aanname',
      'Kleinste test',
      'Wat mij overtuigt',
      'Afbreekcriterium',
      'Deadline'
    ],
    trap: 'Een experiment zonder afbreekcriterium is geen experiment maar een verhuizing. Zonder vooraf vastgelegde uitslag herinner je je achteraf dat je het al wist.'
  },
  {
    slug: 'evidence-log',
    name: 'Het Evidence Log',
    subtitle: 'Wat gebeurde er werkelijk?',
    usedAt: 'Station 9 en daarna wekelijks, voor altijd',
    what: 'Het hart van het programma. Zes kolommen die je geheugen vervangen door gegevens.',
    how: [
      'Vul wekelijks minstens vijf regels in. Klein telt mee.',
      'Noteer de verwachting altijd vóór de handeling, anders werkt de kolom niet.',
      'Onderstreep wekelijks de regel die je het meest verraste.',
      'Lees elke maand terug. Dit is het enige eerlijke bewijs dat er iets verandert.'
    ],
    columns: [
      'Handeling',
      'Verwachting',
      'Wat er gebeurde',
      'Reactie (wie)',
      'Energie −2…+2',
      'Aanname ↑/↓'
    ],
    trap: 'Alleen de goede regels opschrijven. Het log wordt pas een instrument als de tegenvallers er net zo hard in staan.'
  },
  {
    slug: 'tegentest',
    name: 'De Tegentest',
    subtitle: 'Wat zou ik zien als ik het mis heb?',
    usedAt: 'Station 9, en bij elke overtuiging waar veel op leunt',
    what: 'Het tegengif tegen confirmatiebias: je zoekt gericht naar wat je aanname zou weerleggen.',
    how: [
      'Formuleer je aanname zo scherp dat hij fout kán zijn.',
      'Schrijf op wat je concreet zou waarnemen als hij niet klopt. Met aantallen, niet met gevoel.',
      'Kijk daar een week gericht naar en noteer ook de gevallen die je aanname tegenspreken.',
      'Weeg: één tegenvoorbeeld weerlegt weinig, een patroon verandert je route.'
    ],
    trap: 'De tegentest gebruiken om aan alles te twijfelen. Eén aanname, één meetpunt, één week — anders wordt het piekeren met een formulier.'
  },
  {
    slug: 'reroute-review',
    name: 'De Reroute Review',
    subtitle: 'Elke twee weken, twintig minuten',
    usedAt: 'Station 10, daarna permanent in de agenda',
    what: 'De vaste procedure voor bijsturen, zodat je niet alleen aanpast op momenten van paniek of euforie.',
    how: [
      'Acht vragen: bestemming, route, geleerd, stoppen, versterken, experimenteren, aanname, en het type reroute.',
      'Verplicht: één stopbesluit en één versterking.',
      'Label je reroute LEREN of VLUCHT — bij VLUCHT spreek je een terugkomdatum af.',
      'Twintig minuten. Als het langer duurt, ben je aan het herontwerpen in plaats van bij te sturen.'
    ],
    columns: [
      'Bestemming?',
      'Route?',
      'Geleerd',
      'Stoppen',
      'Versterken',
      'Experiment',
      'Aanname',
      'Type'
    ],
    trap: 'De review overslaan in een goede periode. Juist dan levert hij het meeste op, omdat je dan durft te stoppen met wat toevallig meevalt.'
  },
  {
    slug: 'stopkaart',
    name: 'De Stopkaart',
    subtitle: 'Wat gaat eruit?',
    usedAt: 'Station 6, 7, 10 en 12',
    what: 'Dwingt ruimte af. Bij mensen met veel ideeën is schrappen productiever dan toevoegen, en het gebeurt alleen als het verplicht is.',
    how: [
      'Noteer alles wat nu open staat: projecten, verplichtingen, abonnementen, terugkerende afspraken.',
      'Zet per regel: houdt dit mij dichter bij mijn richting, of niet?',
      'Kies er één om te stoppen. Volledig, niet "minder".',
      'Noteer wat je vreest dat er gebeurt, en check dat over twee weken.'
    ],
    trap: 'Parkeren in plaats van stoppen. Een geparkeerd project kost nog steeds aandacht, en aandacht is de schaarste die je aan het oplossen was.'
  },
  {
    slug: 'minimumdienstregeling',
    name: 'De Minimumdienstregeling',
    subtitle: 'Wat rijdt er ook in een rotweek?',
    usedAt: 'Station 11, en elke keer dat je terugvalt',
    what: 'Maximaal drie dingen die doorgaan als alles tegenzit. Dit is het echte programma; de rest is bonus.',
    how: [
      'Kies maximaal drie handelingen, met dag, tijd en duur.',
      'De duur moet klein genoeg zijn om beschamend te klinken.',
      'Bepaal vooraf welke als eerste sneuvelt als het toch niet gaat.',
      'Hang hem op waar je hem ziet op een slechte dag.'
    ],
    trap: 'Vier of vijf dingen opschrijven. Bij vier is het geen minimum meer maar een gemiddelde week, en die haal je niet in de week waar het om ging.'
  },
  {
    slug: 'weekmeter',
    name: 'De Weekmeter',
    subtitle: 'Beweging · Bewijs · Alignment',
    usedAt: 'Wekelijks, tien minuten, permanent',
    what: 'De enige tracking in dit programma: drie meters, één keer per week, zonder streaks.',
    how: [
      'Beweging: hoeveel handelingen deed ik waar iets of iemand op kon reageren? (band: 2–5)',
      'Bewijs: welke aanname heb ik getoetst en wat kwam eruit? (band: 1–2)',
      'Alignment: hoeveel van mijn beste uren en euro’s gingen naar mijn richting?',
      'Eén zin per meter. Klaar. Missen reset niets.'
    ],
    columns: ['Beweging', 'Bewijs', 'Alignment'],
    trap: 'Meters toevoegen. Drie is het maximum; bij vijf ga je meten in plaats van bewegen, en dan meet je vooral je eigen braafheid.'
  }
];
