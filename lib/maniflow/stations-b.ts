import type { Station } from './types';

export const stationsB: Station[] = [
  {
    id: 4,
    slug: 'identity',
    kind: 'station',
    name: 'Identity',
    dutch: 'Identiteit',
    phase: 'a',
    duration: '40 min',
    arrivalBoard:
      'Welke verhalen vertel je over jezelf, welke daarvan helpen, en welke kosten je stilletjes geld, tijd en kansen?',
    goal: 'Drie zelfverhalen uitgesplitst in bewijs voor en tegen, met per verhaal één klein gedrag dat tegenbewijs oplevert.',
    coreConcept:
      'Identiteit volgt bewijs net zo vaak als bewijs identiteit volgt.',
    bigIdea: [
      'Zelfverhalen zijn samenvattingen. "Ik maak nooit iets af", "ik ben slecht met geld", "ik ben niet commercieel" — dat zijn geen eigenschappen maar conclusies uit een steekproef, meestal getrokken op een slecht moment en daarna nooit meer herzien. Het probleem met een samenvatting is dat hij zichzelf gaat waarmaken: je stopt met dingen proberen die niet bij het verhaal passen, waardoor je nooit tegenbewijs verzamelt, waardoor de samenvatting klopt.',
      'De manifestatiewereld heeft dit correct gezien en er de verkeerde oplossing bij bedacht. De oplossing daar is: word eerst innerlijk die andere persoon, geloof het volledig, en dan volgt de wereld. In de praktijk werkt de keten meestal andersom en veel prettiger. Je doet iets kleins wat niet bij je verhaal past. Er gebeurt iets. Je registreert dat. En je zelfbeeld schuift een millimeter op. Daryl Bem noemde dit zelfperceptie: we leiden onze eigenschappen deels af uit ons eigen gedrag, net zoals een buitenstaander dat zou doen.',
      'Dat is goed nieuws voor iedereen die vastloopt op de opdracht om eerst in zichzelf te geloven. Je hoeft jezelf niet te overtuigen. Je hoeft jezelf te betrappen — op één keer wél doorpakken, één keer wél vragen, één keer wél een rekening op tijd betalen. Bewijs is goedkoper dan geloof en het beklijft beter, omdat je het zelf hebt gezien.',
      'Er is een tegenhanger die net zo belangrijk is. Sommige identiteiten worden geforceerd: je probeert de ondernemer te zijn die je omgeving bewondert, de spirituele vrouw die overal rust vindt, de harde werker die alles aankan. Dat kost enorm veel energie en levert weinig op, want het gedrag past niet bij wat je echt goed kunt of wilt. De vraag "welke identiteit probeer ik ten onrechte te forceren" hoort net zo hard bij dit station als de vraag welk verhaal je beperkt.'
    ],
    keyInsight:
      'Identiteit is geen ingang. Het is een uitkomst, en je mag hem onderweg bijwerken op basis van wat je jezelf hebt zien doen.',
    translations: [
      {
        claim: 'Word de persoon die het al heeft. Act as if.',
        translation:
          'Oefen het gedrag dat bij die persoon hoort, in kleine en veilige contexten. Dit heet gedragsoefening en het is een van de best onderbouwde technieken die er zijn — mits je oefent, niet doet alsof je iets kunt wat je niet kunt.',
        keep: 'De motor is prima. Alleen: "act as if" bij een klant of in een contract heet iets anders en heeft juridische gevolgen.'
      },
      {
        claim: 'You attract what you are.',
        translation:
          'Je gedrag bepaalt met wie je in contact komt, wat mensen je aanbieden en wat ze je durven vragen. Dat is sociologie en reputatie, geen magnetisme — en het is stuurbaarder dan magnetisme, want je kunt het aanpassen.',
        keep: 'De observatie klopt vaak: mensen trekken inderdaad aan wat past bij hoe ze zich gedragen. De verklaring klopt niet.'
      },
      {
        claim: 'Herhaal je affirmaties tot je ze gelooft.',
        translation:
          'Formuleer je zin zo dat je hem nu al kunt geloven: niet "ik ben een succesvolle ondernemer", maar "ik oefen wekelijks met verkopen en ik word er beter in". Onderzoek naar zelfbevestiging laat zien dat uitspraken die te ver van je zelfbeeld liggen bij mensen met een laag zelfbeeld averechts kunnen werken.'
      }
    ],
    realityCheck: [
      {
        claim: 'Je zelfbeeld bepaalt je resultaten.',
        check:
          'Deels, en het loopt beide kanten op. Een sterk zelfbeeld zonder vaardigheid levert zelfverzekerd falen op; vaardigheid zonder zelfbeeld levert onzichtbaar talent op. Bandura’s werk over zelfvertrouwen wijst op één betrouwbaarste bron: ervaringen waarin het je daadwerkelijk lukte. Niet toespraken, niet affirmaties. Meegemaakte successen.'
      },
      {
        claim:
          'Je moet eerst je limiting beliefs opruimen voordat je kunt beginnen.',
        check:
          'Vaak is het omgekeerd: overtuigingen zijn de laatste dominosteen, niet de eerste. Wachten tot je innerlijk klaar bent, is een van de comfortabelste manieren om jaren te laten verstrijken met het gevoel dat je aan jezelf werkt.'
      }
    ],
    platformQuestions: [
      'Welke drie zinnen zeg je het vaakst over jezelf, ook in grapjes?',
      'Welke daarvan is een feit, welke een gewoonte, en welke een verouderde samenvatting?',
      'Welk verhaal beschermde je ooit tegen iets echts — en wat kost het je nu?',
      'Welk gedrag zou volstrekt niet passen bij je huidige verhaal, en is toch te doen deze week?',
      'Welke identiteit probeer je te forceren omdat je erbij wilt horen of iemand wilt bewijzen?',
      'Wie zou als eerste iets merken als je verhaal veranderde? En wil je dat?'
    ],
    ticket: {
      title: 'De verhaal-bewijstabel',
      time: '25 minuten',
      steps: [
        'Schrijf drie zelfverhalen op, letterlijk zoals je ze tegen jezelf zegt.',
        'Kolom A — Bewijs vóór: wanneer klopte dit aantoonbaar? Wees eerlijk, dit is geen zelfhulp-truc.',
        'Kolom B — Bewijs tegen: wanneer klopte het niet? Zoek er minstens twee per verhaal; ze zijn er bijna altijd, ze zijn alleen niet opgeslagen.',
        'Kolom C — Datum: hoe oud is het oudste bewijs in kolom A? Als het ouder is dan vijf jaar, is het een archiefstuk, geen eigenschap.',
        'Kolom D — Tegenbewijsactie: welk klein gedrag zou deze week nieuw bewijs opleveren?'
      ]
    },
    experiment: {
      title: 'Drie keer betrappen',
      duration: '7 dagen',
      setup: [
        'Kies één verhaal uit je tabel.',
        'Doe deze week drie keer iets kleins dat alleen past bij de herziene versie. Klein betekent echt klein: één vraag stellen, één ding afmaken, één bedrag overmaken, één keer nee zeggen.',
        'Noteer per keer in één zin wat er gebeurde. Niet hoe je je erbij voelde — wat er gebeurde.'
      ],
      measure:
        'Lees je drie zinnen aan het eind van de week hardop. De vraag is niet of je je anders voelt. De vraag is of iemand die alleen deze drie zinnen leest, jouw oude verhaal nog zou geloven.',
      abort:
        'Als drie te veel is, doe er één. Eén stuk tegenbewijs is oneindig veel meer dan nul.'
    },
    evidencePrompts: [
      'Wat deed je deze week dat niet bij je oude verhaal past?',
      'Wat gebeurde er daarna — reactie van anderen, uitkomst, eigen verbazing?',
      'Welk verhaal bleek bij nader inzien vooral een beschrijving van een oude omgeving?'
    ],
    reroute: [
      'Welk verhaal mag deze week worden herschreven, in kleinere woorden?',
      'Welke geforceerde identiteit mag je laten vallen, met welke opluchting als gevolg?',
      'Welk gedrag verdient herhaling omdat het bewijs opleverde?'
    ],
    expectedResult:
      'Drie verhalen met datum en tegenbewijs, minstens één herziene formulering, en het begin van de gewoonte om jezelf te betrappen in plaats van te overtuigen.',
    departureNote:
      'Je hoeft jezelf niet te overtuigen. Je hoeft jezelf te betrappen — en het daarna op te schrijven, want anders telt je geheugen het niet mee.',
    tools: ['verhaal-bewijstabel', 'evidence-log']
  },
  {
    id: 5,
    slug: 'reality-check',
    kind: 'station',
    name: 'Reality Check',
    dutch: 'Werkelijkheidstoets',
    phase: 'b',
    duration: '35 min',
    arrivalBoard:
      'Wat is feit, wat is interpretatie, wat is aanname, wat is wens en wat is angst? Ze reizen in dezelfde trein en horen niet in dezelfde beslissing.',
    goal: 'Je grootste vastloopzin uit elkaar gehaald in vijf sporen, met één ongetoetste aanname die je binnen een week kunt toetsen.',
    coreConcept:
      'De Wisselwacht: sorteren wat op welk spoor hoort voordat je een besluit neemt.',
    bigIdea: [
      'De meeste mensen lopen niet vast op de feiten. Ze lopen vast op de laag eromheen. "Ik kan geen eigen bedrijf beginnen want ik heb geen netwerk" bevat één feit (het aantal mensen dat je kent in een bepaalde sector), één interpretatie (dat dat aantal te laag is), één aanname (dat je een netwerk nodig hebt om te beginnen), één wens (dat het zou lukken zonder dat je vreemden hoeft te benaderen) en één angst (dat je afgewezen wordt door mensen die je bewondert). Dat zijn vijf verschillende problemen, met vijf verschillende oplossingen, en ze staan allemaal in één zin.',
      'De Wisselwacht is het gereedschap van dit station. Je neemt de zin waar je op vastloopt en sorteert hem: FEIT — zou een camera het kunnen filmen. INTERPRETATIE — wat maak jij ervan. AANNAME — wat neem je aan zonder het te hebben getoetst. WENS — wat hoop je stiekem. ANGST — wat vrees je dat er gebeurt.',
      'Het bevrijdende deel zit in het vak Aanname. Bijna altijd staat daar één zin die je nooit hebt gecontroleerd en die binnen een week te controleren is. Niet door erover na te denken — door het aan iemand te vragen, een prijs op te zoeken, één keer iets te proberen. Mensen kunnen jaren vastzitten achter een aanname die in veertig minuten had kunnen sneuvelen.',
      'Eén waarschuwing die in dit soort programma’s meestal ontbreekt: niet elke muur is een overtuiging. Soms is de conclusie "dit kan nu niet" gewoon een correcte peiling van een moeilijke situatie. Iemand met een chronische ziekte, een zorgtaak, schulden of een onveilige woonsituatie heeft geen mindsetprobleem. Een programma dat elke belemmering herdoopt tot innerlijke blokkade, is niet krachtig maar hardhorend.'
    ],
    keyInsight:
      'Niet elke muur is een overtuiging. Sommige muren zijn muren — en die vragen om een plan, niet om reflectie.',
    translations: [
      {
        claim: 'Trust the universe.',
        translation:
          'Vertrouw op je vermogen om te toetsen, en op je vermogen om te herstellen als iets misgaat. Dat is een vertrouwen dat je kunt opbouwen met bewijs, en dat je bijblijft als het tegenzit.',
        keep: 'De functie van de zin is echt: hij verlaagt de spanning waardoor je durft te handelen. Die functie kun je behouden met een fundament dat standhoudt.'
      },
      {
        claim: 'Everything happens for a reason.',
        translation:
          'Je maakt achteraf betekenis van wat er gebeurde, en dat is nuttig en menselijk. Maar betekenis achteraf is geen bedoeling vooraf. Je hersenen zijn buitengewoon goed in het bedenken van een verhaal dat de afloop verklaart — ook als de afloop puur toeval was.'
      },
      {
        claim: 'Alles wat je stoort in een ander is een spiegel van jezelf.',
        translation:
          'Soms zegt je irritatie iets over jou, soms zegt hij iets over de ander, en soms zegt hij dat je moe bent. De spiegelregel maakt van elke klacht een zelfonderzoek, en dat is een uitstekende manier om nooit meer een grens te hoeven stellen.'
      }
    ],
    realityCheck: [
      {
        claim: 'Je gedachten creëren je werkelijkheid.',
        check:
          'Je gedachten sturen je aandacht, je stemming en je gedrag — en je gedrag verandert je werkelijkheid. Dat is een keten met tussenschakels, en die tussenschakels zijn precies waar het werk zit. Het weglaten van de schakels maakt de claim niet krachtiger, alleen ontoetsbaar.'
      },
      {
        claim: 'Quantumfysica bewijst dat waarneming de werkelijkheid vormt.',
        check:
          'Het "waarnemerseffect" gaat over meetinteracties op deeltjesniveau, niet over menselijke aandacht of bedoelingen. De sprong van deeltjes naar levensplannen is geen wetenschap maar een woordspeling die serieus klinkt omdat er natuurkundige woorden in zitten.'
      },
      {
        claim: 'Dat je het steeds tegenkomt, is een teken dat het klopt.',
        check:
          'Dat is de frequentie-illusie: zodra iets je aandacht heeft, zie je het overal — het aantal is niet veranderd, je filter wel. Combineer dat met confirmatiebias en je hebt een machine die elk idee kan bevestigen. Vandaar de tegentest verderop in de route.'
      }
    ],
    platformQuestions: [
      'Wat weet je zeker? Zou een camera het hebben gefilmd?',
      'Waar zit je interpretatie, en welke andere interpretatie is minstens even goed te verdedigen?',
      'Welke aanname heb je nooit getoetst omdat je hem nooit als aanname zag?',
      'Wat is hier wens en wat is hier angst — en welke van de twee stuurt op dit moment je besluit?',
      'Wat zou een nuchtere, welwillende buitenstaander hierover zeggen in twee zinnen?',
      'Welke informatie ontbreekt, en kun je die binnen een week krijgen? Van wie?'
    ],
    ticket: {
      title: 'De zin door de Wisselwacht',
      time: '15 minuten',
      steps: [
        'Schrijf je grootste "ik kan niet..." of "het lukt niet omdat..." zin letterlijk op.',
        'Sorteer elk onderdeel op vijf sporen: Feit, Interpretatie, Aanname, Wens, Angst.',
        'Omcirkel de aanname die het meest bepalend is voor je gedrag.',
        'Schrijf eronder: hoe zou ik dit binnen zeven dagen kunnen toetsen, en bij wie?',
        'Schrijf tot slot in één zin welk deel van je zin gewoon een feit is dat een plan verdient in plaats van reflectie.'
      ]
    },
    experiment: {
      title: 'Toets één aanname',
      duration: '3 dagen',
      setup: [
        'Neem de omcirkelde aanname.',
        'Kies één echte bron: een mens die het weet, een cijfer dat het antwoord bevat, of één kleine test in de praktijk.',
        'Schrijf vooraf op wat je verwacht te horen. Dit is essentieel — anders herinner je je achteraf dat je het al wist.',
        'Doe het. Binnen drie dagen.'
      ],
      measure:
        'Vergelijk je verwachting met wat je hoorde. Drie mogelijke uitkomsten: de aanname klopte (nu weet je het en kun je erop plannen), de aanname klopte niet (er komt ruimte vrij), of het antwoord was ingewikkelder (dan heb je een betere vraag).',
      abort:
        'Als de toets een gesprek vergt waar je nu de energie niet voor hebt: kies dan een aanname die je met een cijfer of één mail kunt toetsen. Niet elke toets hoeft moedig te zijn.'
    },
    evidencePrompts: [
      'Wat verwachtte je te horen, en wat hoorde je?',
      'Welke aanname sneuvelde, en wat kwam er vrij toen dat gebeurde?',
      'Welke muur bleek na sortering een echte muur, en wat is daarvoor het plan?'
    ],
    reroute: [
      'Verandert deze toets iets aan je bestemming, of alleen aan je route?',
      'Welke andere zinnen in je hoofd verdienen dezelfde sortering?',
      'Wat mag je stoppen met "aan jezelf werken" omdat het eigenlijk een organisatorisch probleem is?'
    ],
    expectedResult:
      'Eén ontrafelde vastloopzin, één getoetste aanname, en een scherper onderscheid tussen wat je moet oplossen en wat je moet regelen.',
    departureNote:
      'Feit, interpretatie, wens en angst reizen in dezelfde trein. Ze horen alleen niet in hetzelfde besluit.',
    tools: ['wisselwacht', 'experimentkaart']
  },
  {
    id: 6,
    slug: 'friction',
    kind: 'station',
    name: 'Friction',
    dutch: 'Frictie',
    phase: 'b',
    duration: '40 min',
    arrivalBoard:
      'Wat houdt beweging werkelijk tegen? Interne, externe en structurele frictie zien er hetzelfde uit en vragen om totaal verschillende oplossingen.',
    goal: 'Je huidige stilstand gediagnosticeerd op type, met één frictie die je deze week daadwerkelijk weghaalt.',
    coreConcept:
      'Frictie-triage: intern, extern, structureel — en de vraag of iets wel psychologisch opgelost hoort te worden.',
    bigIdea: [
      'Wanneer iemand niet in beweging komt, is de standaarddiagnose in vrijwel alle zelfhulp: er zit iets in jou dat het tegenhoudt. Angst, een overtuiging, zelfsabotage, een blokkade. Soms klopt dat. Vaak is het de duurste denkfout in het hele veld, want het stuurt mensen naar jarenlange innerlijke arbeid voor problemen die met een agenda-aanpassing, tweehonderd euro of één gesprek verholpen hadden kunnen worden.',
      'Frictie komt in drie soorten. Interne frictie zit in jou: angst, perfectionisme, keuzestress, gewoontepatronen, wachten op motivatie, eindeloos analyseren. Externe frictie zit in je situatie en is in principe te veranderen: te weinig tijd, te veel projecten tegelijk, gebrek aan kennis, een onhandige werkplek, mensen die er steeds tussen komen. Structurele frictie zit in de omstandigheden waar je niet zomaar uit stapt: geld, gezondheid, zorgtaken, je positie op de arbeidsmarkt, hoe de sector werkt, wetgeving, discriminatie.',
      'De triage is simpel en wordt bijna nooit gedaan. Bij interne frictie werkt oefenen, exposure, kleiner maken en tegenbewijs. Bij externe frictie werkt regelen, kopen, uitbesteden, schrappen of verplaatsen. Bij structurele frictie werkt aanpassen van je verwachting en tijdlijn, hulp organiseren, en soms: erkennen dat dit nu niet gaat en dat dat geen persoonlijk tekort is.',
      'Er is één type frictie dat overal doorheen loopt en systematisch verkeerd wordt begrepen: energie. Vermoeidheid wordt behandeld als een gebrek aan discipline, terwijl het meestal een biologische en situationele grootheid is — slaap, herstel, hormonen, ziekte, prikkelbelasting, zorgtaken, medicatie. Een plan dat alleen werkt op je goede dagen is geen plan. Vandaar dat energie in dit programma een aparte kolom heeft, niet een aparte preek.'
    ],
    keyInsight:
      'Motivatie is zelden het probleem. Meestal is het frictie die niemand heeft opgeruimd, omdat opruimen minder heroïsch klinkt dan doorbreken.',
    translations: [
      {
        claim: 'Je hebt een energetische blokkade.',
        translation:
          'Je blokkade is meestal een van vijf dingen: te vaag, te groot, te duur, te eng, of te moe. Alle vijf hebben een ander gereedschap, en vier ervan zijn geen therapie.',
        keep: 'De observatie dat er iets vastzit klopt. De diagnose is alleen te vaag om iets mee te doen.'
      },
      {
        claim: 'Je saboteert jezelf.',
        translation:
          'Er is een conflict tussen twee dingen die je allebei wilt: bijvoorbeeld groeien en veilig blijven, of publiceren en niet beoordeeld worden. Benoem beide kanten. Sabotage is bijna altijd een tweede belang dat geen stem heeft gekregen.'
      },
      {
        claim: 'Alles wat je tegenhoudt is een limiting belief.',
        translation:
          'Sommige belemmeringen zijn overtuigingen. Andere zijn accurate beschrijvingen van je situatie. Het verschil bepaalt of je aan jezelf werkt of aan je omstandigheden — en die verwisseling kost mensen jaren.'
      }
    ],
    realityCheck: [
      {
        claim: 'Als je het echt wilt, vind je de tijd.',
        check:
          'Tijd is niet gelijk verdeeld. Wie mantelzorgt, ziek is, in ploegendienst werkt of alleen opvoedt, heeft objectief minder beschikbare uren en minder herstel. De zin klinkt als motivatie en functioneert als een verwijt aan precies de mensen die het al zwaarder hebben.'
      },
      {
        claim: 'Je hebt alleen meer discipline nodig.',
        check:
          'Discipline is eindig, sterk afhankelijk van energie en context, en een van de minst betrouwbare bouwstenen van een systeem. Wie het gedrag makkelijker maakt, heeft minder discipline nodig; dat is geen zwakte, dat is ontwerp.'
      }
    ],
    platformQuestions: [
      'Wat gebeurt er precies op het moment dat je stopt? Beschrijf de laatste keer in slow motion: waar was je, hoe laat, wat dacht je, wat deed je in plaats daarvan?',
      'Is dit een vaardigheids-, energie-, informatie-, tijd- of angstprobleem? Kies er één als hoofdverdachte.',
      'Wat zou dit makkelijker maken zonder dat jij verandert?',
      'Hoeveel projecten heb je nu open? En welk aantal zou eerlijk gezegd passen bij je energie?',
      'Wie heeft dit al opgelost, en wat kostte het hen?',
      'Welke frictie is niet van jou om op te lossen, en aan wie hoort hij wel?'
    ],
    ticket: {
      title: 'Frictie-triage',
      time: '20 minuten',
      steps: [
        'Schrijf op wat er nu niet vooruitgaat. Eén ding.',
        'Maak drie kolommen: Intern, Extern, Structureel. Verdeel alles wat meespeelt.',
        'Zet achter elke frictie het bijbehorende gereedschap: oefenen, regelen, of verwachting bijstellen.',
        'Kies de goedkoopste frictie uit de kolom Extern en haal hem deze week weg. Niet de belangrijkste — de goedkoopste. Beweging eerst.',
        'Schrijf onderaan één zin over energie: op welk moment van de week heb je hier realistisch energie voor?'
      ]
    },
    experiment: {
      title: 'Verlaag de drempel',
      duration: '10 dagen',
      setup: [
        'Kies één handeling die je wilt doen maar structureel niet doet.',
        'Maak hem kleiner op precies één manier: vijf minuten korter, één stap minder, materiaal vooraf klaargezet, of een vast moment in plaats van "als het uitkomt".',
        'Verander verder niets. Geen extra voornemens, geen beloningssysteem.',
        'Noteer tien dagen lang alleen: gedaan / niet gedaan.'
      ],
      measure:
        'Vergelijk met de tien dagen ervoor. Als het gedrag toeneemt, was het frictie en geen motivatie — en weet je meteen welk gereedschap voortaan als eerste uit de kast komt.',
      abort:
        'Als het na tien dagen niet toeneemt, is de drempel niet het probleem. Ga terug naar de kolommen en kies een andere hoofdverdachte.'
    },
    evidencePrompts: [
      'Wat veranderde er toen je de drempel verlaagde?',
      'Welke frictie bleek bij nader inzien structureel in plaats van persoonlijk?',
      'Wat kostte meer energie dan je had ingeschat, en op welk moment van de dag?'
    ],
    reroute: [
      'Welk project moet weg om ruimte te maken? Niet parkeren — weg.',
      'Welke frictie heb je geprobeerd psychologisch op te lossen terwijl hij organisatorisch was?',
      'Wat verandert er aan je tijdlijn nu je de structurele frictie eerlijk hebt benoemd?'
    ],
    expectedResult:
      'Een correcte diagnose van je stilstand, één daadwerkelijk weggehaalde frictie, en het einde van de gewoonte om elke belemmering als karakterkwestie te behandelen.',
    departureNote:
      'Voordat je jezelf gaat repareren: probeer eerst of het aan de deur ligt. Dat scheelt vaak een jaar.',
    tools: ['frictie-triage', 'energiebalans', 'stopkaart']
  },
  {
    id: 7,
    slug: 'alignment',
    kind: 'station',
    name: 'Alignment',
    dutch: 'Afstemming',
    phase: 'b',
    duration: '45 min',
    arrivalBoard:
      'Komt je huidige gedrag overeen met wat je zegt belangrijk te vinden? We maken het meetbaar in vijf sporen.',
    goal: 'Een audit van je afgelopen twee weken op uren, euro’s, aandacht, mensen en energie — met één blok dat verschuift.',
    coreConcept:
      'Alignment is observeerbaar: de mate waarin je agenda, geld, aandacht, omgeving en middelen overeenkomen met je richting.',
    bigIdea: [
      'Alignment is het meest misbruikte woord in de manifestatiewereld. Het betekent daar meestal een gevoel: je zit lekker in je vel, dingen lopen soepel, je "voelt je aligned". Zo gebruikt is het onbruikbaar, want het is niet toetsbaar en het is vooral een omschrijving van een goede week.',
      'Hier betekent alignment iets wat je kunt meten zonder jezelf te hoeven kennen: de mate waarin je agenda, je uitgaven, je aandacht, de mensen om je heen en je energie overeenkomen met wat je zegt belangrijk te vinden. Als iemand zegt dat creatieve vrijheid haar hoogste waarde is, en haar afgelopen maand bestond uit vierendertig uur vergaderen, elf uur administratie en nul uur eigen werk, dan is dat geen energetische blokkade. Dat is een mismatch die je op een A4 kunt uittekenen.',
      'De reden dat dit zo hard aankomt, is dat de vijf sporen liegen niet. Je kunt jezelf overtuigen dat je aan je toekomst werkt; je bankafschrift en je agenda doen niet mee aan dat gesprek. Dat maakt dit het meest ongemakkelijke station van de route en tegelijk het meest bevrijdende, want een mismatch is te repareren zonder dat je een ander mens hoeft te worden. Je verzet een blok. Je zegt één ding af. Je zet één automatische overboeking klaar.',
      'Belangrijk: de audit is geen oordeel over hoe je leeft. Een groot deel van je uren is niet vrij besteedbaar en dat verandert niet door beter te willen. De vraag is niet of je honderd procent aligned bent — dat is niemand — maar of de vrij besteedbare marge de goede kant op wijst. Vijf procent verschuiving in de juiste richting, volgehouden, verslaat elke totale herinrichting die twee weken duurt.'
    ],
    keyInsight:
      'Je waarden staan niet in je hoofd. Ze staan in je agenda en op je bankafschrift, en die twee vertellen een verhaal waar je niet omheen kunt praten.',
    translations: [
      {
        claim: 'Raise your frequency.',
        translation:
          'Onderzoek welke emotionele toestand, omgeving en routines bepaald gedrag makkelijker of moeilijker maken — en verander die omstandigheden in plaats van je toestand te forceren.',
        keep: 'De kern klopt: je toestand beïnvloedt wat je doet. Alleen is de knop geen frequentie maar slaap, licht, beweging, gezelschap, geluid en wat er in je agenda staat.'
      },
      {
        claim: 'Align met je hogere zelf en de rest volgt.',
        translation:
          'Kijk waar je uren, geld en aandacht heen gaan, en verschuif één blok. De rest volgt niet vanzelf, maar er komt wel ruimte waarin iets kán volgen.'
      },
      {
        claim: 'Abundance mindset: doe alsof er genoeg is.',
        translation:
          'Onderzoek waar je uit schaarste beslist terwijl er feitelijk marge is, en waar er echt te weinig is. Het eerste is een denkpatroon dat je kunt bijstellen; het tweede is een begroting die je moet oplossen. Ze door elkaar halen is duur.'
      }
    ],
    realityCheck: [
      {
        claim: 'Als je aligned bent, komen de juiste dingen vanzelf op je pad.',
        check:
          'Er komt inderdaad meer op je pad als je richting duidelijk is — omdat je zichtbaarder bent, sneller ja en nee zegt, en kansen herkent die je eerder miste. Dat is geen aanzuigende werking maar aandacht en beschikbaarheid. Het praktische verschil: je moet nog steeds ergens zijn waar mensen je kunnen vinden.'
      },
      {
        claim: 'Je vibratie bepaalt wat je aantrekt.',
        check:
          'Er is geen meetbare menselijke frequentie die uitkomsten bepaalt. Wat er wel is: je stemming beïnvloedt hoe je overkomt, wat je durft te vragen en hoe mensen reageren. Dat effect is reëel, bescheiden, en volledig verklaarbaar zonder natuurkunde.'
      }
    ],
    platformQuestions: [
      'Als een vreemde je agenda van vorige maand zag, wat zou zij denken dat jij belangrijk vindt?',
      'Waar ging je geld heen? Noem de top drie zonder je bankafschrift te openen, en controleer daarna.',
      'Wie kreeg jouw beste uren van de dag — en heb je die keuze gemaakt of geërfd?',
      'Welke omgeving maakt het gewenste gedrag makkelijker, en hoe vaak ben je daar?',
      'Waar lek je energie zonder dat er iets tegenover staat?',
      'Wat zou er gebeuren als je één terugkerende verplichting deze maand zou schrappen? Wie zou het merken, en wat zou dat kosten?'
    ],
    ticket: {
      title: 'De vijfsporen-audit',
      time: '30 minuten',
      steps: [
        'Pak je agenda en je bankafschrift van de afgelopen twee weken. Echt openen, niet uit het hoofd.',
        'Spoor 1 — Uren: hoeveel uur ging naar je richting? Rond ruw af.',
        'Spoor 2 — Euro’s: welk deel van je uitgaven ondersteunde je richting?',
        'Spoor 3 — Aandacht: waar ging je hoofd heen in de vrije momenten? Schermtijd telt mee.',
        'Spoor 4 — Mensen: met wie was je het vaakst, en brengen die je dichter bij je richting of verder ervandaan?',
        'Spoor 5 — Energie: waar ging energie heen zonder opbrengst?',
        'Geef elk spoor een cijfer van 0 tot 5 en kies er één om deze maand één stap te verbeteren. Eén.'
      ]
    },
    experiment: {
      title: 'Eén blok verzetten',
      duration: '14 dagen',
      setup: [
        'Kies het spoor met de laagste score.',
        'Verplaats daar één wekelijks tijdblok van je laagste naar je hoogste alignment. Bijvoorbeeld: het uur dat naar scrollen ging wordt het uur dat naar maakwerk gaat, op een vast moment.',
        'Verander niets anders. Eén blok. Twee weken.',
        'Noteer per week: is het blok doorgegaan, en wat leverde het op?'
      ],
      measure:
        'Twee weken later: heeft het blok stand gehouden, en is er iets zichtbaars uit voortgekomen? Als het blok drie van de vier keer doorging, is het nu een vaste afspraak. Als het één keer doorging, stond het op het verkeerde moment — niet in de verkeerde persoon.',
      abort:
        'Als het blok drie keer sneuvelt door dezelfde oorzaak, verplaats hem niet nogmaals — los eerst die oorzaak op. Dat is een frictie, geen wilskwestie.'
    },
    evidencePrompts: [
      'Welk spoor scoorde het laagst, en verraste dat je?',
      'Wat kwam er uit het verplaatste blok?',
      'Welke terugkerende verplichting bleek bij nader inzien niet verplicht?'
    ],
    reroute: [
      'Wat moet je stoppen om dit blok te kunnen houden?',
      'Klopt je richting nog, of is de mismatch een teken dat je iets anders wilt dan je opschreef?',
      'Welke afspraak verdient een gesprek in plaats van een aanpassing van jouw kant?'
    ],
    expectedResult:
      'Vijf scores die je niet kunt wegpraten, één verplaatst tijdblok dat vaste vorm krijgt, en meestal één ontdekking over waar je energie werkelijk heen gaat.',
    departureNote:
      'Alignment is geen gevoel. Het is een rooster — en dat is goed nieuws, want een rooster kun je veranderen.',
    tools: ['alignment-audit', 'energiebalans', 'stopkaart']
  },
  {
    id: 8,
    slug: 'movement',
    kind: 'station',
    name: 'Movement',
    dutch: 'Beweging',
    phase: 'c',
    duration: '35 min',
    arrivalBoard:
      'Welke handeling zet iets in beweging waardoor de werkelijkheid jou antwoord geeft? Geen life overhaul. Deuren openzetten.',
    goal: 'Drie kleine handelingen deze week waar iets of iemand buiten je hoofd op kan reageren.',
    coreConcept:
      'Kleine acties als informatiegenerator, gepland als als-dan-afspraak.',
    bigIdea: [
      'Er zijn twee manieren om vast te zitten en ze zien er van buiten totaal verschillend uit. De eerste is de bekende: eindeloos nadenken, plannen, lezen, cursussen doen, wachten tot het duidelijk is. Je staat op het perron en je kent de dienstregeling uit je hoofd. De tweede is minder herkend maar net zo duur: heel hard bewegen in een richting die je nooit hebt getoetst. Je zit in de trein, hij rijdt hard, en niemand heeft gecontroleerd waar hij heen gaat.',
      'De uitweg uit allebei is dezelfde en verrassend klein: handelingen die de werkelijkheid dwingen te antwoorden. Niet "aan mijn plan werken" — dat kan maanden zonder één signaal van buiten. Wel: iets versturen, iemand iets vragen, iets publiceren, een prijs noemen, een afspraak maken, één keer nee zeggen. Alles waar iets of iemand op kan reageren.',
      'De reden dat dit werkt, is dat je hoofd geen bron van nieuwe informatie is. Het herschikt alleen wat er al in zit. Elke week dat je nadenkt zonder te handelen, denk je met precies dezelfde gegevens als de week ervoor. Eén verstuurde mail levert soms meer bruikbare informatie op dan drie weken afwegen.',
      'Praktisch: formuleer je handeling als als-dan-afspraak. "Als het donderdag negen uur is en ik zit aan mijn bureau, dan stuur ik die ene mail." Peter Gollwitzer noemde dit implementatie-intenties, en het is een van de best onderzochte kleine interventies in de gedragswetenschap: door vooraf moment, plek en handeling vast te leggen, hoef je op het moment zelf niet meer te besluiten. Dat scheelt precies de energie die je op een moeilijke dag niet hebt.',
      'En ja: motivatie komt meestal na de eerste tien minuten, niet ervoor. Wachten op zin is wachten op iets wat pas verschijnt als je al bezig bent.'
    ],
    keyInsight:
      'De vraag is niet wat de juiste stap is. De vraag is welke stap je het snelst informatie geeft die je onmogelijk had kunnen bedenken.',
    translations: [
      {
        claim: 'Neem inspired action — actie die vanuit ingeving komt.',
        translation:
          'Neem actie die voortkomt uit een aanname die je wilt toetsen. Dat voelt minder magisch en levert aanzienlijk meer op, want je weet vooraf wat je aan het uitzoeken bent.',
        keep: 'De onderliggende observatie klopt: geforceerd doorbuffelen zonder richting werkt slecht. Alleen is het alternatief niet wachten op een ingeving, maar kiezen wat je wilt weten.'
      },
      {
        claim: 'Als je aligned bent, weet je vanzelf wat je moet doen.',
        translation:
          'Als je richting duidelijk is, wordt de keuze uit opties makkelijker. De opties zelf moet je nog steeds bedenken, en de kleinste moet je nog steeds inplannen met een dag en een tijd.'
      },
      {
        claim: 'Laat het los en het komt naar je toe.',
        translation:
          'Verminder je greep op de uitkomst, niet op je handelen. Loslaten is nuttig voor het deel dat niet van jou is; het is een uitstekende manier om nooit te vertrekken als je het toepast op het deel dat wel van jou is.'
      }
    ],
    realityCheck: [
      {
        claim: 'Grote doelen vragen grote stappen.',
        check:
          'Grote stappen zijn vooral riskant: ze kosten veel, leveren laat informatie op en zijn moeilijk terug te draaien. Een reeks kleine handelingen met snelle terugkoppeling verslaat bijna altijd één grote sprong — niet omdat klein deugdzaam is, maar omdat je onderweg kunt bijsturen.'
      },
      {
        claim: 'Eerst motivatie, dan actie.',
        check:
          'In de praktijk werkt het meestal andersom. Gedragsactivatie — eerst doen, zin komt later — is een van de meest gebruikte principes bij het aanpakken van vastlopen en somberheid, juist omdat wachten op zin de vicieuze cirkel in stand houdt.'
      }
    ],
    platformQuestions: [
      'Wat kun je doen waardoor de werkelijkheid jou nieuwe informatie teruggeeft — deze week, niet ooit?',
      'Wat is de kleinste versie daarvan? En wat is de kleinste versie van die kleinste versie?',
      'Welke versie past bij een dag waarop je een 3 uit 10 hebt?',
      'Wanneer precies, waar precies, na welke bestaande handeling?',
      'Wat doe je al maanden voorbereiden dat eigenlijk gewoon verstuurd kan worden?',
      'Wat zou je doen als je wist dat niemand het zou beoordelen — en hoe kun je dat vandaag half doen?'
    ],
    ticket: {
      title: 'Eén als-dan-afspraak',
      time: '10 minuten',
      steps: [
        'Kies één handeling waar iets of iemand op kan reageren.',
        'Schrijf hem op als één zin: "Als het [dag] [tijd] is en ik ben [plek], dan doe ik [handeling van maximaal 20 minuten]."',
        'Zet hem in je agenda met een herinnering. Niet in je hoofd.',
        'Schrijf eronder wat je verwacht dat er gebeurt. Vooraf. Dit wordt straks je bewijs.',
        'Bepaal de noodversie: wat doe je als die dag alles tegenzit? Meestal is dat dezelfde handeling in vijf minuten.'
      ]
    },
    experiment: {
      title: 'Drie kleine deuren',
      duration: '7 dagen',
      setup: [
        'Zet deze week drie deuren open waar reactie doorheen kan komen: een mail naar iemand die je bewondert, een vraag in een groep, een aanbod, een publicatie, een prijs die je noemt, een afspraak die je voorstelt.',
        'Alle drie klein. Alle drie deze week. Verspreid over drie verschillende dagen.',
        'Noteer per deur vooraf: wat verwacht ik dat er gebeurt?'
      ],
      measure:
        'Tel na een week: hoeveel reacties, van wie, en hoe verschilden ze van je verwachting? De meest waardevolle uitkomst is meestal niet de reactie zelf, maar de afstand tussen wat je vreesde en wat er gebeurde.',
      abort:
        'Bij weinig energie: één deur. Eén deur is het verschil tussen een gesloten en een open systeem.'
    },
    evidencePrompts: [
      'Welke deur leverde reactie op, en welke bleef stil?',
      'Wat verwachtte je vooraf, en hoe verschilde dat van de werkelijkheid?',
      'Wat kostte de handeling aan energie, vergeleken met wat je vreesde?',
      'Wat werd er mogelijk dat er vorige week nog niet was?'
    ],
    reroute: [
      'Welke deur verdient herhaling, en welke was eenmalig?',
      'Welke reactie geeft aanleiding om je route aan te passen?',
      'Wat blijkt niet nodig te zijn, nu je het echt hebt geprobeerd?'
    ],
    expectedResult:
      'Drie handelingen die de buitenwereld hebben aangeraakt, minstens één onverwachte reactie, en een eerste stapel bewijs die niet uit je hoofd komt.',
    departureNote:
      'Je kunt de werkelijkheid niet uitdenken. Je kunt haar wel aanraken en kijken wat ze doet — dat is de hele truc.',
    tools: ['als-dan', 'experimentkaart', 'evidence-log']
  }
];
