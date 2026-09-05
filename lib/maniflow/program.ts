import type { Phase, Track } from './types';

export const brand = {
  name: 'ManiFlowStations',
  tagline: 'Manifesteren voor mensen met een bullshitdetector.',
  subtitle:
    'Een reisprogramma voor iedereen die wil dromen, visualiseren en veranderen — en ondertussen gewoon wil kunnen blijven nadenken.',
  promise:
    'Je hoeft niet te leren hoe je de werkelijkheid met je gedachten bestuurt. Je leert helderder kiezen, realistischer kijken, gerichter experimenteren, sneller leren en steeds meer van je gewenste toekomst in je huidige leven organiseren.',
  thesis:
    'Je manifesteert een toekomst niet door harder te geloven dat hij eraan komt. Je vergroot de kans erop door helder te krijgen wat je wilt, je gedrag en omgeving daarop af te stemmen, te handelen, feedback te verzamelen en bij te sturen.'
};

export const houseRules = [
  {
    n: '01',
    rule: 'Een bestemming is een richting, geen contract.',
    why: 'Je mag hem willen, plannen en loslaten. Niemand tekent mee.'
  },
  {
    n: '02',
    rule: 'Een route mag veranderen.',
    why: 'Nieuwe informatie hoort tot een ander besluit te leiden. Anders was het geen informatie.'
  },
  {
    n: '03',
    rule: 'Vertraging betekent niet dat je niet aligned bent.',
    why: 'Het betekent meestal dat er iets duurder, drukker of ingewikkelder was dan gedacht.'
  },
  {
    n: '04',
    rule: 'Soms blijkt een bestemming helemaal niet meer aantrekkelijk.',
    why: 'Dat is winst. Je bent een verkeerde reis van drie jaar misgelopen.'
  },
  {
    n: '05',
    rule: 'Actie zonder reflectie zet je op de verkeerde trein.',
    why: 'Hard werken in een richting die je nooit toetste, is de duurste vorm van stilstand.'
  },
  {
    n: '06',
    rule: 'Reflectie zonder actie houdt je op het perron.',
    why: 'Je kunt de werkelijkheid niet uitdenken. Ze antwoordt pas als je haar aanraakt.'
  },
  {
    n: '07',
    rule: 'Je hebt invloed. Je hebt geen controle.',
    why: 'Het verschil tussen die twee is precies waar de meeste zelfhulp schuld begint te maken.'
  }
];

export const audience = {
  primary: [
    'Mensen die ooit iets met manifestatie deden — vision board, affirmaties, "high vibe" — en er stiekem iets aan hadden, maar afhaakten toen het magie, schuld of quantumtaal werd.',
    'Snelle denkers met een goed werkende bullshitdetector die daardoor óók de bruikbare technieken zijn kwijtgeraakt.',
    'Mensen in een overgangsfase: loopbaanwissel, herstel na burn-out, relatiebreuk, hormonale of levensfase-verschuiving, ondernemerschap in wording.',
    'Mensen met een gevoelig of onvoorspelbaar energiesysteem (ADHD, hoogsensitiviteit, chronische klachten, herstel) voor wie standaardproductiviteitssystemen structureel te duur zijn.'
  ],
  secondary: [
    'Coaches, therapeuten en trainers die een evidence-informed alternatief zoeken voor de manifestatiehype die hun cliënten meebrengen.',
    'Sceptici die eigenlijk best willen dromen, maar geen taal hebben waarin dat mag.',
    'Teams en ondernemers die visie en strategie willen verbinden zonder businessjargon.'
  ],
  notFor: [
    'Wie een garantie zoekt. Die verkopen we niet, en wie hem wel verkoopt, liegt.',
    'Wie op zoek is naar bevestiging dat gedachten fysieke gebeurtenissen veroorzaken.',
    'Wie acute psychische of medische zorg nodig heeft. Dit is een denk- en gedragsprogramma, geen behandeling.'
  ]
};

export const positioning = {
  statement:
    'ManiFlowStations staat op het kruispunt van drie werelden die elkaar meestal negeren: de verbeeldingskracht van de manifestatiewereld, de nuchterheid van gedragswetenschap, en de praktijk van iemand die morgen gewoon een keuze moet maken.',
  category: 'Reconstructie, geen rant.',
  categoryBody:
    'We gooien de manifestatiewereld niet weg. We halen de motor eruit — visioning, future self, identiteit, alignment, mentale simulatie, intentie — en verwijderen de rookmachine: quantumjargon, frequenties, kosmische bezorgdiensten en de suggestie dat pech je eigen schuld is.',
  axes: [
    { left: 'Magisch denken', right: 'Toetsbaar denken', us: 82 },
    { left: 'Alleen mindset', right: 'Mindset én omstandigheden', us: 74 },
    { left: 'Discipline als antwoord', right: 'Frictie als diagnose', us: 88 },
    { left: 'Prestatiedruk', right: 'Energie als harde variabele', us: 79 },
    { left: 'Droogkoker', right: 'Er mag ook verlangen zijn', us: 35 }
  ]
};

export const differentiators = [
  {
    title: 'Bewijs in plaats van tekenen',
    classic:
      'Je let op tekenen van het universum: witte veren, herhaalde cijfers, toevallige ontmoetingen.',
    ours: 'Je houdt een Evidence Log bij: wat werkte, wat veranderde, wie reageerde, welke aanname sneuvelde, wat meer energie kostte dan gedacht. Inclusief de tegentest: wat zou je zien als je aanname níet klopt?'
  },
  {
    title: 'Reroute in plaats van "het was niet aligned"',
    classic:
      'Als het niet lukt, was de timing niet goed of zat je verkeerd afgestemd.',
    ours: 'Als het niet lukt, heb je informatie gekregen. Elke twee weken staat er een Reroute Moment in de dienstregeling — met de expliciete vraag of je bijstuurt omdat je iets leerde, of omdat het even ongemakkelijk werd.'
  },
  {
    title: 'Frictie-triage in plaats van blokkades',
    classic:
      'Wat je tegenhoudt is een energetische blokkade of een limiting belief.',
    ours: 'Wat je tegenhoudt is intern (angst, perfectionisme, gewoonte), extern (geld, tijd, mensen, markt) of structureel (zorgtaken, gezondheid, positie, wetgeving). Niet alles hoort psychologisch opgelost te worden — sommige dingen horen gewoon geregeld te worden.'
  },
  {
    title: 'Handelingsvermogen zonder schuld',
    classic: 'Je creëert je eigen werkelijkheid.',
    ours: 'Je beïnvloedt je eigen werkelijkheid, in gezelschap van andere mensen, je gezondheid, de economie, je startpositie, timing en puur toeval. We maken dat verschil expliciet, in een vast vier-vak: controle, invloed, kans, toeval.'
  },
  {
    title: 'Energie als variabele, niet als moraal',
    classic: 'Hoge vibratie trekt goede dingen aan.',
    ours: 'Energie is biologisch en situationeel: slaap, hormonen, herstel, zorgtaken, prikkels, ziekte. Je systeem wordt ontworpen voor je slechtste week, niet je beste. Wat alleen werkt als je je goed voelt, is geen systeem maar een goede bui met een naam.'
  },
  {
    title: 'Stoppen is een ingebouwde stap',
    classic: 'Blijf geloven, geef niet op, hou je frequentie hoog.',
    ours: 'Elk station heeft een stopvraag. Er is een Stopkaart. Er is een Stoptest. Ruimte maken is bij de meeste mensen productiever dan er nog een project bovenop leggen.'
  },
  {
    title: 'Het programma kan zichzelf weerleggen',
    classic: 'Werkte het niet, dan deed jij het niet goed genoeg.',
    ours: 'Elk experiment heeft een afbreekcriterium. Als een techniek bij jou meetbaar niets doet, laat je hem vallen. Een methode die niet kan falen, kan ook niet kloppen.'
  },
  {
    title: 'Verlangen blijft welkom',
    classic: 'Dromen groot, details later.',
    ours: 'Dromen mag hier hardop. Alleen wordt elk beeld vertaald naar levenskwaliteit, gedrag, omstandigheden — en een eerlijk prijskaartje in tijd, geld, energie en relaties.'
  }
];

export const agencyModel = {
  title: 'Het vier-vak: controle, invloed, kans, toeval',
  intro:
    'Dit is het fundament van ManiFlowStations en het staat bewust op Perron 0, niet ergens achterin bij de kleine lettertjes. Het verschil tussen deze vier is precies de plek waar zelfhulp meestal ongemerkt schuld begint te produceren.',
  quadrants: [
    {
      key: 'Controle',
      body: 'Wat je direct kunt bepalen: wat je vanavond doet, wat je stuurt, waar je nee tegen zegt, waar je je aandacht heen brengt.',
      todo: 'Hier plan je. Direct, klein, concreet.'
    },
    {
      key: 'Invloed',
      body: 'Wat je waarschijnlijker of onwaarschijnlijker kunt maken: reacties van mensen, kansen, je gezondheid, je reputatie, je vaardigheid.',
      todo: 'Hier zet je kansen op scherp. Je stuurt de kans, niet de uitkomst.'
    },
    {
      key: 'Kans',
      body: 'De basiskansen waar je in speelt: hoeveel vergelijkbare mensen lukt dit, hoe lang duurt het meestal, wat is de markt, wat is je startpositie.',
      todo: 'Hier reken je nuchter. Niet om te ontmoedigen, maar om je tijdlijn eerlijk te maken.'
    },
    {
      key: 'Toeval',
      body: 'Wat gewoon gebeurt: timing, iemand die net die week iets zoekt, ziekte, economie, een mail die verdwijnt.',
      todo: 'Hier accepteer je. En je vergroot je blootstelling, zodat toeval je vaker kan vinden.'
    }
  ],
  rule: 'Regel: nooit een uitkomst uit het vak Toeval of Kans opschrijven als iets wat je persoonlijk fout deed. En nooit iets uit het vak Controle wegschrijven als pech.'
};

export const phases: Phase[] = [
  {
    id: 'a',
    line: 'Lijn A',
    name: 'Richting',
    claim: 'Wat wil je, van wie is dat, en hoe ziet het er op een dinsdag uit?',
    stations: [1, 2, 3, 4]
  },
  {
    id: 'b',
    line: 'Lijn B',
    name: 'Werkelijkheid',
    claim:
      'Wat is er waar, wat houdt je echt tegen, en klopt je week met je richting?',
    stations: [5, 6, 7]
  },
  {
    id: 'c',
    line: 'Lijn C',
    name: 'Beweging',
    claim:
      'Handelen, bewijs verzamelen, bijsturen. De lus waar het programma om draait.',
    stations: [8, 9, 10]
  },
  {
    id: 'd',
    line: 'Lijn D',
    name: 'Duur',
    claim: 'Volhouden bij lage energie, en opnieuw kiezen met wat je nu weet.',
    stations: [11, 12]
  }
];

export const tracks: Track[] = [
  {
    slug: '21',
    days: 21,
    name: 'De Korte Lijn',
    forWho:
      'Eén bestemming, weinig tijd, veel ongeduld. Voor wie snel wil weten of een richting hout snijdt.',
    rhythm:
      'Zes reisdagen per week, één stiltedag. Gemiddeld één station per anderhalve dag.',
    perDay: '15–25 minuten',
    schedule: [
      {
        label: 'Dag 1',
        content: 'Perron 0 — spelregels, vier-vak, nulmeting.'
      },
      {
        label: 'Dag 2–3',
        content: 'Station 1 Destination + Station 2 Vision.'
      },
      {
        label: 'Dag 4–5',
        content: 'Station 3 Future You + Station 4 Identity.'
      },
      {
        label: 'Dag 6',
        content: 'Reroute Moment 1 — klopt de bestemming nog?'
      },
      {
        label: 'Dag 7–9',
        content: 'Station 5 Reality Check + Station 6 Friction.'
      },
      {
        label: 'Dag 10–11',
        content: 'Station 7 Alignment — de 5-sporen audit.'
      },
      {
        label: 'Dag 12–14',
        content: 'Station 8 Movement — drie kleine deuren openzetten.'
      },
      {
        label: 'Dag 15–16',
        content: 'Station 9 Evidence — log invullen, tegentest doen.'
      },
      {
        label: 'Dag 17',
        content: 'Reroute Moment 2 — stoppen, versterken, verplaatsen.'
      },
      {
        label: 'Dag 18–19',
        content: 'Station 11 Momentum — minimumdienstregeling schrijven.'
      },
      {
        label: 'Dag 20–21',
        content: 'Station 12 Next Destination + korte integratie.'
      }
    ],
    warning:
      'In 21 dagen krijg je richting en een eerste bewijsronde. Je krijgt geen resultaat waar de werkelijkheid meer tijd voor nodig heeft. Wie dat toch belooft, verkoopt je een gevoel.'
  },
  {
    slug: '30',
    days: 30,
    name: 'De Volledige Route',
    forWho:
      'De standaardreis. Alle twaalf stations, met ruimte om iets echt uit te proberen.',
    rhythm:
      'Twaalf stationdagen, twaalf werkdagen ertussen, vier reroutedagen, twee reservedagen.',
    perDay: '20–30 minuten, plus de experimenten die in je gewone leven lopen',
    schedule: [
      {
        label: 'Dag 1',
        content: 'Perron 0 — vertrekhal, nulmeting, vier-vak.'
      },
      {
        label: 'Dag 2–9',
        content:
          'Lijn A: Destination, Vision, Future You, Identity — elk één leesdag, één werkdag.'
      },
      { label: 'Dag 10', content: 'Reroute Moment 1.' },
      {
        label: 'Dag 11–17',
        content: 'Lijn B: Reality Check, Friction, Alignment.'
      },
      {
        label: 'Dag 18',
        content:
          'Reroute Moment 2 — hier sneuvelt meestal een project. Dat is goed nieuws.'
      },
      {
        label: 'Dag 19–25',
        content:
          'Lijn C: Movement, Evidence, Reroute — de kernlus, drie keer rond.'
      },
      { label: 'Dag 26', content: 'Reroute Moment 3.' },
      { label: 'Dag 27–29', content: 'Lijn D: Momentum, Next Destination.' },
      {
        label: 'Dag 30',
        content:
          'Dienstregeling schrijven: hoe reis je verder zonder programma?'
      }
    ],
    warning:
      'Dertig dagen is lang genoeg om gedrag te veranderen en te kort om resultaten te oogsten die van andere mensen afhangen. Meet dus beweging en bewijs, niet uitkomst.'
  },
  {
    slug: '42',
    days: 42,
    name: 'De Lange Lijn',
    forWho:
      'Zes weken, drie dagen per station. Voor wie herstelt, weinig energie heeft, of het echt in de praktijk wil laten landen.',
    rhythm:
      'Per station: dag 1 lezen en ticket, dag 2 experiment lopen, dag 3 bewijs en reroute. Zondag is leeg. Altijd.',
    perDay: '10–20 minuten',
    schedule: [
      { label: 'Week 0 (dag 1–2)', content: 'Perron 0 en nulmeting, rustig.' },
      {
        label: 'Week 1–2',
        content: 'Lijn A — Richting. Vier stations, drie dagen elk.'
      },
      {
        label: 'Week 3',
        content: 'Lijn B — Werkelijkheid, deel 1: Reality Check en Friction.'
      },
      {
        label: 'Week 4',
        content: 'Lijn B — Alignment, plus een volle Reroute Review.'
      },
      { label: 'Week 5', content: 'Lijn C — Movement, Evidence, Reroute.' },
      { label: 'Week 6', content: 'Lijn D — Momentum en Next Destination.' },
      {
        label: 'Dag 41–42',
        content: 'Depot: integratie, eigen dienstregeling, terugvalplan.'
      }
    ],
    warning:
      'Dit is het tempo voor wie een gevoelig systeem heeft. Trager is hier geen zwakkere versie; het is de versie die je afmaakt.'
  }
];

export const dailySession = {
  name: 'De Perronsessie',
  duration: '3 tot 12 minuten',
  intro:
    'De losse dagelijkse eenheid van ManiFlowStations. Bruikbaar als app-sessie, kaartje, e-mail of pagina in het journaal. Altijd dezelfde vier bewegingen.',
  steps: [
    {
      n: '1',
      label: 'Aankomst',
      body: 'Eén regel: waar sta je nu, feitelijk? Geen verhaal, geen oordeel.',
      time: '30 sec'
    },
    {
      n: '2',
      label: 'Eén vraag',
      body: 'Eén platformvraag uit het station waar je bent. Schriftelijk beantwoorden, kort mag.',
      time: '3 min'
    },
    {
      n: '3',
      label: 'Eén handeling',
      body: 'De kleinste actie die vandaag past bij je energie. Als-dan geformuleerd.',
      time: '2 min plannen'
    },
    {
      n: '4',
      label: 'Eén notitie',
      body: 'Wat gaf de werkelijkheid gisteren terug? Eén regel in je Evidence Log.',
      time: '1 min'
    }
  ],
  lowEnergy:
    'Slechte dag? Dan alleen stap 4. Eén regel bewijs. Dat telt volledig mee. Een programma dat je op je slechtste dagen laat vallen, is een programma dat je alleen prijst als je het al goed doet.'
};

export const progressMethod = {
  title: 'Voortgang meten zonder er een tweede baan van te maken',
  principle:
    'De meeste tracking-systemen meten braafheid: heb je je vinkjes gehaald? Dat voelt goed en leert je niets. ManiFlowStations meet drie dingen, één keer per week, in tien minuten.',
  gauges: [
    {
      name: 'Beweging',
      question:
        'Hoeveel handelingen deed ik die de werkelijkheid lieten antwoorden?',
      counts:
        'Alles waar iets of iemand buiten je hoofd op kon reageren: verstuurd, gevraagd, gepubliceerd, geboekt, geweigerd.',
      band: 'Gezonde band: 2 tot 5 per week. Nul is een signaal. Vijftien is meestal vlucht.'
    },
    {
      name: 'Bewijs',
      question: 'Welke aanname heb ik deze week getoetst, en wat kwam eruit?',
      counts: 'Eén getoetste aanname per week is genoeg. Twee is luxe.',
      band: 'Gezonde band: 1 tot 2. Nul betekent dat je aan het uitvoeren bent zonder te leren.'
    },
    {
      name: 'Alignment',
      question:
        'Hoeveel van mijn beste uren en mijn geld gingen naar mijn richting?',
      counts: 'Ruwe schatting in uren en euro’s. Geen minutenregistratie.',
      band: 'Gezonde band: elke week iets meer dan nul, en zichtbaar stijgend over een maand.'
    }
  ],
  cadence: [
    {
      when: 'Wekelijks — 10 minuten',
      what: 'De drie meters invullen. Eén zin per meter. Klaar.'
    },
    {
      when: 'Tweewekelijks — 20 minuten',
      what: 'Reroute Moment: de zeven vragen, met minstens één stopbesluit.'
    },
    {
      when: 'Maandelijks — 30 minuten',
      what: 'Dienstregeling-review: klopt de bestemming, de route en het tempo nog?'
    },
    {
      when: 'Per kwartaal — 60 minuten',
      what: 'Terug naar Station 1 en 12. Herijken met de persoon die je nu bent.'
    }
  ],
  antiRules: [
    'Geen streaks. Een streak is een prestatiemetriek vermomd als motivatie, en hij straft precies de weken waarin je het al zwaar had.',
    'Missen reset niets. Je pakt de draad op bij de eerstvolgende meting, zonder inhaalronde.',
    'Zestig procent is geslaagd. Wie honderd procent nodig heeft, ontwerpt een systeem dat alleen bij goed weer rijdt.',
    'Maximaal één meetmoment per week. Vaker meten verandert je gedrag niet; het verandert alleen je stemming.',
    'Een meter die drie keer achter elkaar geen enkel besluit heeft veranderd, gaat eruit. Meten is geen deugd.',
    'Meet nooit iets wat je niet in de hand hebt. Volgers, omzet, reacties van anderen: dat zijn uitkomsten, geen sturingsinformatie. Die noteer je in het Evidence Log, niet op je meter.'
  ]
};

export const integration = {
  name: 'Depot — de integratiefase',
  duration: '14 dagen na Station 12',
  intro:
    'Het einde van een programma is de gevaarlijkste plek van een programma. Alles wat je hebt geleerd, hangt op dat moment nog aan de structuur die je net verlaat. De integratiefase heeft één doel: het werkende deel overzetten naar je gewone leven, en de rest laten gaan.',
  steps: [
    {
      n: '01',
      title: 'De uitdunning',
      body: 'Kies uit alles wat je deed maximaal drie dingen die blijven. Niet vijf. Alles wat je meeneemt, kost wekelijks iets.'
    },
    {
      n: '02',
      title: 'Je eigen dienstregeling',
      body: 'Schrijf op wanneer je reist: welke dag is je wekelijkse tien minuten, wanneer je Reroute Moment, welke maand je herijking. Zet het in je agenda als terugkerende afspraak, niet als voornemen.'
    },
    {
      n: '03',
      title: 'De minimumversie',
      body: 'Wat gebeurt er in een week waarin alles misgaat? Schrijf de drieregelige noodversie. Die versie is het echte programma; de rest is bonus.'
    },
    {
      n: '04',
      title: 'Het terugvalplan',
      body: 'Benoem je twee bekendste terugvalpatronen (bijvoorbeeld: te veel projecten tegelijk, of stilvallen na een tegenslag) en schrijf per patroon één herkenningssignaal en één eerste handeling.'
    },
    {
      n: '05',
      title: 'De overdracht aan iemand anders',
      body: 'Leg je route in tien minuten uit aan één mens. Uitleggen is de snelste manier om te merken welk deel je nog niet begrijpt — en het maakt van je bestemming iets waar iemand naar kan vragen.'
    },
    {
      n: '06',
      title: 'De archiefdoos',
      body: 'Bewaar je Evidence Log en je afgedankte bestemmingen. Over een jaar is dat het enige eerlijke bewijs dat er iets veranderd is. Geheugen liegt in beide richtingen.'
    }
  ],
  closing:
    'Je hebt niets gemanifesteerd. Je hebt gekozen, getoetst, bewogen, geleerd en bijgestuurd — en dat is beter nieuws dan magie, want het is herhaalbaar en je hebt het zelf gedaan.'
};

export const slogans = [
  'Manifesteren voor mensen met een bullshitdetector.',
  'Dromen mag. Bewijs verzamelen ook.',
  'Je bestemming is een richting, geen contract met het universum.',
  'Reroute is geen mislukking. Het is navigatie.',
  'Visualiseren is prima. Vertrekken is beter.',
  'Het universum stuurt geen tekenen. De werkelijkheid stuurt betere.',
  'Alignment is geen gevoel. Het is een rooster.',
  'Minder frequentie. Meer frictie-onderzoek.',
  'Geen quantumsprong. Wel een volgende halte.',
  'Van perron naar beweging.',
  'Behoud de motor. Verwijder de rookmachine.',
  'Je creëert je werkelijkheid niet. Je onderhandelt ermee.',
  'Vertraging is geen oordeel. Het is meestal een dienstregeling.',
  'Voor wie wil dromen én kan nadenken.'
];

export const subtitles = [
  'Een reisprogramma van verlangen naar bewijs.',
  'Twaalf stations van vaag verlangen naar toetsbare beweging.',
  'Visie, gedrag en werkelijkheid op één spoor.',
  'Het manifestatieprogramma dat zichzelf kan weerleggen.',
  'Voor dromers die geen sprookjes meer geloven.'
];

export const workbook = {
  intro:
    'Het journaal is geen dagboek en geen planner. Het is een reisdocument: bewijsmateriaal van een reis die je aan het maken bent, inclusief de haltes waar je bent uitgestapt.',
  format: [
    'Formaat 165 × 220 mm, garenloos gebonden zodat het plat openligt naast een laptop. Ongecoat papier, 100 g, zodat vulpen en potlood het overleven.',
    'Voorin een uitvouwbare routekaart van de twaalf stations, met ruimte om je eigen bestemming en overstappen erop te schrijven.',
    'Twaalf stationsecties, elk met een tabblad aan de zijkant, zodat je terug kunt bladeren zonder te zoeken.',
    'Achterin: vijftig lege Evidence Log-spreads. Bewust meer dan je denkt nodig te hebben. Dit is het deel dat vol raakt.'
  ],
  pageTypes: [
    {
      name: 'Vertrekkaart',
      body: 'Aan het begin van elk station: waar sta je, waarom sta je hier, wat verwacht je?'
    },
    {
      name: 'Grote-idee-pagina',
      body: 'Uitleg links, brede kantlijn rechts om tegen te spreken. De kantlijn is expres breed.'
    },
    {
      name: 'Vertaalstrook',
      body: 'Manifestatie-uitspraak boven, doorgestreept. Bruikbare vertaling eronder. Ruimte voor je eigen vertaling.'
    },
    {
      name: 'Storingsmelding',
      body: 'De reality check, vormgegeven als een dienstmededeling. Kort, geel, zonder preek.'
    },
    {
      name: 'Perronvragen',
      body: 'Zes vragen, elk met vier regels. Niet meer. Beperkte ruimte dwingt tot eerlijkheid.'
    },
    {
      name: 'Ticketstrook',
      body: 'Een afscheurbare kaart met één actie, datum en tijd. Meenemen in je jaszak of op de koelkast.'
    },
    {
      name: 'Experimentkaart',
      body: 'Aanname, kleinste test, wat zou me overtuigen, afbreekcriterium, deadline.'
    },
    {
      name: 'Evidence Log',
      body: 'Zes kolommen, liggend formaat, twintig regels per spread.'
    },
    {
      name: 'Reroutepagina',
      body: 'De zeven vragen, met onderaan één verplicht stopbesluit.'
    },
    {
      name: 'Vertreknotitie',
      body: 'Eén zin, groot gezet, veel wit. Het enige sierlijke element per station.'
    }
  ],
  extras: [
    'Een vel met stickers: GETOETST, AANNAME, GESTOPT, VERTRAAGD, ONVERWACHT. Voor wie visueel denkt en niet van invulvelden houdt.',
    'Een lint als bladwijzer in twee kleuren: waar je leest, en waar je Evidence Log staat.',
    'Achterop een gedrukte kaart met het vier-vak: controle, invloed, kans, toeval. Het meest herlezen onderdeel van het hele programma.',
    'Elke twaalf pagina’s een lege pagina met alleen een klein kopje: “Wat heb ik hier niet opgeschreven?”'
  ]
};

export const productForms = [
  {
    name: 'Digitaal zelfstudieprogramma',
    body: 'Twaalf modules, elk met de tien vaste onderdelen. Tekst blijft de drager; video optioneel per station als vertreknotitie van twee minuten.',
    needs:
      'Toegangsbeheer, voortgang per station, downloadbare werkbladen als PDF.'
  },
  {
    name: 'Interactieve webapp',
    body: 'Deze site is de blauwdruk: stationsroute, tools, journaal met lokaal opgeslagen bewijs, export naar markdown. Volgende stap: accounts, herinneringen op basis van jouw cadans, en een reroute-melding elke twee weken.',
    needs:
      'Auth, opslag, exportformaat, en een expliciete belofte dat er niets met je aantekeningen gebeurt.'
  },
  {
    name: 'Workbook / journaal',
    body: 'Het fysieke reisdocument. Verkoopbaar los van het programma en de beste toegangspoort tot de rest.',
    needs:
      'Drukwerkspecificatie, illustratie van de routekaart, ISBN als je het via de boekhandel wilt.'
  },
  {
    name: '21-, 30- of 42-dagenprogramma',
    body: 'Dezelfde inhoud, drie tempo’s. Per dag één Perronsessie via e-mail, app of kaart.',
    needs:
      'Een sequentiële mailflow en een manier om iemand zonder schuldgevoel te laten pauzeren.'
  },
  {
    name: 'Losse ManiFlowStation-sessies',
    body: 'Elke sessie staat op zichzelf: één vraag, één handeling, één notitie. Bruikbaar als kaartendeck, dagelijkse mail of los sessieformaat in een app.',
    needs:
      'Een set van ongeveer negentig sessies, gelabeld op station, energie-niveau en tijdsduur.'
  },
  {
    name: 'Groeps- of begeleide variant',
    body: 'Zes bijeenkomsten, één per lijn plus twee reroute-sessies. De groep functioneert als externe bewijsbron: mensen zien jouw aannames sneller dan jij.',
    needs:
      'Facilitatorhandleiding, groepsregels, en een strikte regel tegen advies geven zonder vraag.'
  }
];
