import type { Station } from './types';

export const stationsA: Station[] = [
  {
    id: 0,
    slug: 'vertrekhal',
    kind: 'platform',
    name: 'Vertrekhal',
    dutch: 'De spelregels',
    phase: 'a',
    duration: '25 min',
    arrivalBoard:
      'Voordat je vertrekt: wat dit programma wel en niet kan beloven, waar je invloed ophoudt, en hoe je merkt of er iets verandert.',
    goal: 'Een eerlijke uitgangspositie: je weet wat je koopt, je weet wat je zelf in de hand hebt, en je hebt een nulmeting waar je over zes weken iets aan hebt.',
    coreConcept:
      'Handelingsvermogen zonder schuld — het vier-vak van controle, invloed, kans en toeval.',
    bigIdea: [
      'Bijna elke methode die belooft dat jij je werkelijkheid creëert, doet twee dingen tegelijk. Het eerste is prettig: je krijgt het gevoel dat je invloed hebt, en dat gevoel is op zichzelf al waardevol — mensen die denken dat hun handelen ertoe doet, handelen meer. Het tweede is giftig en wordt zelden hardop gezegd: als jij je werkelijkheid creëert, dan heb je ook de rotdelen gemaakt. De ziekte, de afwijzing, de recessie, de ex, het jaar dat alles tegenzat.',
      'Die tweede helft is geen ongelukje in de leer. Het is er logisch onderdeel van. En het is precies waarom mensen die het echt zwaar hebben gehad, zich van de manifestatiewereld afkeren: op het moment dat je pech krijgt, verandert je gereedschap in een aanklacht.',
      'ManiFlowStations begint daarom niet met dromen maar met een sorteervak. Alles wat je wilt, hangt af van vier soorten factoren. Je hebt controle over een klein deel, invloed op een groter deel, je speelt binnen kansen die je niet hebt bepaald, en er is toeval dat niemand stuurt. Wie die vier door elkaar haalt, krijgt twee voorspelbare problemen: passiviteit (alles is toeval, dus ik doe niets) of schuld (alles is van mij, dus dit is mijn schuld).',
      'De rest van dit programma bestaat uit één beweging: zoveel mogelijk uit het vak Toeval verplaatsen naar het vak Invloed, en zoveel mogelijk uit het vak Invloed verplaatsen naar het vak Controle. Niet door harder te geloven. Door beter te kijken, kleiner te handelen en sneller te leren.'
    ],
    keyInsight:
      'Je creëert je werkelijkheid niet. Je onderhandelt ermee — en je positie in die onderhandeling kun je aanzienlijk verbeteren.',
    translations: [
      {
        claim: 'Alles is mogelijk als je het maar echt genoeg wilt.',
        translation:
          'Er is voor vrijwel iedereen aanzienlijk meer mogelijk dan wat ze nu doen. Niet alles is mogelijk, en waar het niet lukt, is dat zelden een karakterfout.',
        keep: 'De aanzet klopt: de meeste mensen onderschatten hun speelruimte drastisch. Alleen de belofte van totale maakbaarheid moet eruit.'
      },
      {
        claim: 'Jij creëert je eigen werkelijkheid.',
        translation:
          'Jij bent een van de krachten in je werkelijkheid, en meestal de enige waar je iets aan kunt veranderen. Dat is genoeg om mee te werken en te weinig om schuld voor te dragen.'
      }
    ],
    realityCheck: [
      {
        claim: 'Wie het echt wil, krijgt het. De verhalen bewijzen het.',
        check:
          'Dat zijn de verhalen die je te horen krijgt. De mensen die hetzelfde deden en het niet kregen, houden geen webinar. Dit heet survivorship bias, en het is de reden dat elke methode ter wereld werkt als je alleen naar de winnaars kijkt.'
      },
      {
        claim: 'Er zit een reden achter alles wat je overkomt.',
        check:
          'Het idee dat de wereld eerlijk verdeelt wat mensen verdienen, is zo diep ingesleten dat psychologen er een naam voor hebben: de just-world hypothese. Het is comfortabel zolang het jou goed gaat en het is wreed op het moment dat het misgaat. Betekenis mag je achteraf maken. Noem het alleen geen plan.'
      }
    ],
    platformQuestions: [
      'Wat hoop je stiekem dat dit programma voor je regelt? En wat weet je eigenlijk al dat het niet kan?',
      'Waar in je leven doe je te weinig omdat je denkt dat het toch toeval is?',
      'Waar in je leven neem je te veel op je schouders wat eigenlijk buiten je invloed lag?',
      'Wat zou er over zes weken concreet anders moeten zijn om te zeggen: dit was de moeite waard?',
      'Wie of wat bepaalt op dit moment het meest hoe je week eruitziet — en heb jij die persoon gekozen?'
    ],
    ticket: {
      title: 'Vul het vier-vak in voor je grootste wens',
      time: '15 minuten',
      steps: [
        'Schrijf bovenaan één zin: wat je het liefst zou willen dat er over een jaar anders is.',
        'Teken vier vakken: Controle, Invloed, Kans, Toeval.',
        'Verdeel alle factoren die eraan bijdragen over die vier vakken. Wees streng: "of iemand ja zegt" hoort bij Invloed, niet bij Controle.',
        'Onderstreep in het vak Controle de drie kleinste dingen. Daar begint je reis, niet bij de grote.',
        'Schrijf onderaan: wat heb ik in het verleden onterecht mezelf aangerekend uit het vak Kans of Toeval?'
      ]
    },
    experiment: {
      title: 'De invloedstelling',
      duration: '7 dagen',
      setup: [
        'Noteer één keer per dag één ding dat je aandacht kreeg maar buiten je invloed lag: nieuws, andermans mening, een reactie die uitbleef.',
        'Zet erachter hoeveel minuten aandacht het ongeveer kostte.',
        'Noteer daarnaast één ding dat wél in je invloed lag en waar je aandacht aan gaf.'
      ],
      measure:
        'Tel na zeven dagen de minuten in beide kolommen. De verhouding is je vertrekpositie. Bij de meeste mensen staat die eerste kolom drie tot tien keer hoger.',
      abort:
        'Werkt niet als je het gaat gebruiken om jezelf te veroordelen. Dan stop je, en noteer je alleen nog de tweede kolom.'
    },
    evidencePrompts: [
      'Welke verhouding kwam eruit tussen aandacht binnen en buiten je invloed?',
      'Wat kostte je meer aandacht dan je had gedacht?',
      'Was er iets dat je eerst in het vak Toeval zette en bij nader inzien in Invloed hoort?'
    ],
    reroute: [
      'Klopt de wens die je bovenaan schreef nog, nu je hem hebt uitgesplitst?',
      'Is er iets in het vak Controle dat je vandaag al zou kunnen doen en waar je op wacht?',
      'Wat wil je in dit programma níet: welk onderwerp is nu te vers of te zwaar?'
    ],
    expectedResult:
      'Je hebt een werkwens, een eerlijk beeld van je speelruimte, een nulmeting van je aandacht en een grens: dit programma gaat over jouw handelen, niet over jouw schuld.',
    departureNote:
      'Je bent niet de bestuurder van de wereld. Je bent wel de bestuurder van je eigen wissels — en dat zijn er meer dan je denkt.',
    tools: ['vier-vak', 'routekaart']
  },
  {
    id: 1,
    slug: 'destination',
    kind: 'station',
    name: 'Destination',
    dutch: 'Bestemming',
    phase: 'a',
    duration: '35 min',
    arrivalBoard:
      'Waar wil je eigenlijk heen? En belangrijker: van wie is die wens, en welke behoefte zit eronder?',
    goal: 'Eén werkbestemming die van jou is, geformuleerd zo precies dat je zou merken als je er was.',
    coreConcept:
      'Herkomstonderzoek van verlangen: eigen wens, aangeleerde wens, statusdoel, vluchtfantasie, of onderliggende behoefte.',
    bigIdea: [
      'Wensen komen zelden alleen binnen. Ze reizen mee met de wensen van je ouders, je vak, je tijdlijn en de vijf mensen die je het vaakst spreekt. Dat is geen zwakte, dat is hoe mensen werken: we leren wat begerenswaardig is door te kijken naar wat anderen begeren. Het probleem ontstaat pas als je jaren van je leven en het beste deel van je energie besteedt aan een bestemming die je nooit hebt gekozen, alleen overgenomen.',
      'Er zijn vijf soorten wensen die op elkaar lijken en zich totaal verschillend gedragen. Een eigen verlangen blijft ook aantrekkelijk als niemand het ziet. Een aantrekkelijk klinkende wens verdampt zodra je de dinsdagen erbij bedenkt. Een verwachting van anderen voelt als plicht met een strik erom. Een statusdoel is herkenbaar doordat de fantasie vooral gaat over hoe anderen reageren. En een vluchtfantasie is geen bestemming maar een thermometer: hij wordt heter naarmate je huidige situatie onhoudbaarder wordt.',
      'Onder al die vormen zit meestal één van een handvol behoeften: rust, autonomie, erkenning, veiligheid, betekenis, contact, plezier, invloed. Dat is de laag die er werkelijk toe doet, want behoeften kennen vaak meerdere routes. Wie denkt dat ze een verhuizing naar Portugal nodig heeft, blijkt soms vooral stilte, ruimte en het einde van een bepaalde vergadering nodig te hebben — en dat is beschikbaar in maanden in plaats van jaren.',
      'Dit station haalt de romantiek er niet uit. Het maakt de romantiek betrouwbaar: als je weet welke behoefte je najaagt, kun je onderweg herkennen wanneer een route hem gaat leveren en wanneer niet.'
    ],
    keyInsight:
      'De meeste mensen lopen niet vast omdat ze hun doel niet halen. Ze lopen vast omdat ze met hun eigen energie het doel van iemand anders najagen.',
    translations: [
      {
        claim: 'Vraag het universum om wat je wilt en wees specifiek.',
        translation:
          'Formuleer wat je wilt zo precies dat je het zou herkennen als het er was — en onderzoek eerlijk van wie die wens is. Specificiteit werkt, maar via aandacht, keuze en gedrag, niet via bezorging.',
        keep: 'De opdracht om specifiek te zijn is het beste advies uit de hele manifestatiewereld. Alleen het bezorgadres klopt niet.'
      },
      {
        claim: 'Spreek je intentie hardop uit tegen zoveel mogelijk mensen.',
        translation:
          'Deel je intentie selectief, met mensen die je kunnen bevragen. Er zijn aanwijzingen uit onderzoek naar doelgedrag dat een doel breed rondbazuinen alvast een deel van de sociale beloning oplevert — waardoor de drang om het ook echt te doen kan afnemen.',
        keep: 'Uitspreken helpt wél als het je verplicht aan iemand die doorvraagt. Publiek applaus is iets anders dan verantwoording.'
      }
    ],
    realityCheck: [
      {
        claim:
          'Als je maar duidelijk genoeg bent over wat je wilt, komt het naar je toe.',
        check:
          'Duidelijkheid doet aantoonbaar iets: je herkent kansen die je anders had gemist, je zegt sneller nee, je beslissingen worden consistenter. Dat is aandachtssturing, geen aantrekkingskracht. Het verschil is te merken: bij aandachtssturing moet je nog steeds zelf de mail versturen.'
      },
      {
        claim:
          'Als je twijfelt over je doel, blokkeer je de manifestatie ervan.',
        check:
          'Twijfel is meestal geen blokkade maar informatie. Bij een groot deel van de mensen die "niet in beweging komen" blijkt bij navraag dat ze het gewoon niet echt willen. Dat is geen weerstand die je moet doorbreken; dat is een correcte peiling die je serieus mag nemen.'
      }
    ],
    platformQuestions: [
      'Van wie is deze wens? Wie hoorde hem het eerst, en wie zou hem het meest waarderen?',
      'Wat zou je willen als niemand het ooit zou zien of erover zou horen?',
      'Als het drie jaar langer duurt dan gehoopt, wil je het dan nog steeds? Zo niet, dan zoek je iets anders.',
      'Welke behoefte zit hieronder: rust, autonomie, erkenning, veiligheid, betekenis, contact, plezier, invloed?',
      'Waar loop je van weg? Beschrijf de vluchtvariant van deze wens eerlijk — die informatie is nooit weggegooid.',
      'Is er een goedkopere route naar dezelfde behoefte, die je nu weigert omdat hij minder mooi klinkt?'
    ],
    ticket: {
      title: 'De drie-min-twee',
      time: '20 minuten',
      steps: [
        'Schrijf drie bestemmingen op waar je op dit moment iets mee hebt. Niet vijftien. Drie.',
        'Streep er twee door. Ja, nu. Je mag ze later terughalen; het gaat om wat je voelt bij het doorstrepen.',
        'Schrijf bij de overgebleven bestemming één zin af: "Ik zou weten dat ik er ben als ___." Geen gevoel, maar iets wat een camera zou kunnen zien.',
        'Schrijf er de behoefte onder die eronder zit, in één woord.',
        'Zet in de kantlijn wat het doorstrepen van die andere twee met je deed. Opluchting en spijt zijn allebei bruikbare gegevens.'
      ]
    },
    experiment: {
      title: 'De vluchttest',
      duration: '48 uur',
      setup: [
        'Zet een notitie klaar op je telefoon.',
        'Elke keer dat je merkt dat je over je bestemming fantaseert, noteer je twee dingen: hoe laat het is, en wat je op dat moment aan het doen was.',
        'Niet oordelen, alleen noteren. Je bent geen rechter, je bent conducteur.'
      ],
      measure:
        'Kijk na twee dagen naar de tweede kolom. Als je fantasieën vooral opkomen tijdens vergaderingen, huishoudelijke plichten of het derde uur van iets dat je uitput, dan meet je verlangen mét een flinke dosis ontsnapping. Dat maakt de bestemming niet ongeldig — het betekent dat er iets in je huidige leven dringend aandacht nodig heeft dat niet kan wachten tot je aankomt.',
      abort:
        'Als het noteren zelf je onrustig maakt, stop na één dag. Eén dag is genoeg data voor deze vraag.'
    },
    evidencePrompts: [
      'Wanneer kwam de fantasie op, en wat was je op dat moment aan het doen?',
      'Welke van de drie bestemmingen deed het meest pijn om door te strepen — en waarom precies?',
      'Wie reageerde er op je bestemming toen je hem uitsprak, en wat zei dat over de herkomst ervan?'
    ],
    reroute: [
      'Is dit een bestemming of een ontsnapping? Beide mogen, maar ze vragen om een verschillende route.',
      'Zou een deel van de onderliggende behoefte deze maand al te regelen zijn?',
      'Wat verandert er aan je bestemming als je hem opschrijft zonder de reactie van anderen erbij?'
    ],
    expectedResult:
      'Eén bestemming die van jou is, een herkenzin die toetsbaar is, een benoemde behoefte, en het besef dat een deel van je verlangen misschien vooral een noodsignaal was.',
    departureNote:
      'Een bestemming die je alleen aantrekkelijk vindt als anderen het zien, is geen thuis. Dat is een adres.',
    tools: ['herkomstcheck', 'routekaart']
  },
  {
    id: 2,
    slug: 'vision',
    kind: 'station',
    name: 'Vision',
    dutch: 'Visie',
    phase: 'a',
    duration: '40 min',
    arrivalBoard:
      'Hoe ziet dat gewenste leven er concreet uit — op een dinsdag in november, niet op de foto?',
    goal: 'Je beelden vertaald naar levenskwaliteit, gedrag en omstandigheden, inclusief een eerlijk prijskaartje.',
    coreConcept:
      'De vertaalmachine: beeld → kwaliteit → gedrag → omstandigheid → prijs.',
    bigIdea: [
      'Een vision board is een uitstekende verlangenmeter en een waardeloos plan. Het meet betrouwbaar waar je hart naartoe trekt, want je knipt niet per ongeluk drie keer hetzelfde beeld uit. Maar het meet uitsluitend de voorkant: het uitzicht, het licht, de rust op iemands gezicht. De achterkant — wat die persoon elke week doet, wat het kost, wie het betaalt, wat er niet op de foto staat — ontbreekt volledig.',
      'Daar komt een tweede probleem bij dat serieus onderzocht is en zelden wordt genoemd in de manifestatiewereld. Uitgebreid en genietend fantaseren over een gewenste toekomst kan de drang om eraan te werken juist verlagen. Je krijgt alvast een deel van de beloning. Gabriele Oettingen liet dit patroon herhaaldelijk zien en ontwikkelde er het tegengif voor: mentaal contrasteren. Je zet het gewenste beeld direct naast het obstakel dat er in werkelijkheid tussen zit, en pas dan wordt het beeld een motor in plaats van een luie stoel.',
      'De vertaalmachine van dit station doet precies dat, maar dan met vijf kolommen. Elk beeld gaat door: welke ervaring zoek ik hier (kwaliteit), wat zou ik dan wekelijks doen (gedrag), wat moet er geregeld zijn (omstandigheid), en wat kost dat in tijd, geld, energie en relaties (prijs). Het beeld van een huis aan zee wordt zo: stilte en ruimte, vier keer per week buiten in de ochtend, een woonplek met minder dan tien minuten naar groen, en een prijs van een verhuizing plus verder reizen naar werk plus twee vriendschappen op afstand.',
      'Dan pas kun je iets nuttigs vaststellen: welk deel van dat beeld kun je deze maand al organiseren, en welk deel vraagt echt een reis van jaren. Bijna altijd blijkt dertig tot zestig procent van de gewenste levenskwaliteit veel dichterbij te liggen dan de foto suggereert. Dat is geen troostprijs. Dat is de winst van dit station.'
    ],
    keyInsight:
      'Elk beeld op je vision board heeft een prijskaartje aan de achterkant. De manifestatiewereld plakt alleen de voorkant op.',
    translations: [
      {
        claim: 'Voel alsof je het al hebt.',
        translation:
          'Simuleer de situatie levendig, en zet er meteen naast wat er in werkelijkheid tussen zit. Het gevoel is de brandstof; het obstakel is de kaart. Zonder de kaart rijd je in cirkels met een vol reservoir.',
        keep: 'Levendig voorstellen werkt echt — het maakt keuzes concreter en aantrekkelijker. Alleen niet als eindpunt.'
      },
      {
        claim: 'Maak een vision board en hang het waar je het elke dag ziet.',
        translation:
          'Maak het bord, maar hang er een tweede kolom naast: per beeld één gedrag dat er deze week bij hoort. Een bord zonder werkweek is een screensaver.',
        keep: 'Het knippen en kiezen zelf is diagnostisch waardevol. Je ontdekt wat je wilt door te merken waar je hand naartoe gaat.'
      }
    ],
    realityCheck: [
      {
        claim:
          'Visualiseren van het eindresultaat programmeert je onderbewuste op succes.',
        check:
          'Onderzoek naar mentale simulatie wijst consequent één kant op: het visualiseren van het proces — de stappen, de moeilijke momenten, wat je dan doet — helpt aantoonbaar meer dan het visualiseren van de uitkomst. Shelley Taylor en collega’s lieten dat al in de jaren negentig zien bij studenten. Uitkomstvisualisatie voelt beter en werkt slechter.'
      },
      {
        claim:
          'Als je maar hard genoeg gelooft in het beeld, komt het dichterbij.',
        check:
          'Geloof verandert je gedrag, en gedrag verandert je kansen. Dat is een keten met twee schakels, en beide kunnen breken. Als je alleen aan de eerste schakel werkt, heb je een zeer overtuigd persoon die niets heeft veranderd.'
      }
    ],
    platformQuestions: [
      'Welke ervaring zoek je in dit beeld: rust, ritme, erkenning, autonomie, ruimte, aanraking, verwondering, geld, veiligheid?',
      'Wat staat er níet op de foto? Wie doet de administratie, wie ruimt op, hoe ziet februari eruit?',
      'Welk beeld op je bord is eigenlijk een vakantie, geen leven?',
      'Wat kost dit beeld aan tijd, geld, energie en relaties — en ben je bereid die rekening te betalen?',
      'Welk deel van de gewenste kwaliteit zou je deze maand al kunnen organiseren, in een kleinere vorm?',
      'Als je maar één beeld mocht houden en de rest moest weggooien, welke bleef er hangen?'
    ],
    ticket: {
      title: 'Eén beeld door de vertaalmachine',
      time: '20 minuten',
      steps: [
        'Kies één beeld of scène die je gewenste leven het beste vangt. Eén.',
        'Kolom 1 — Kwaliteit: welke ervaring zoek je hier? Maximaal drie woorden.',
        'Kolom 2 — Gedrag: wat zou je dan wekelijks doen? Werkwoorden, geen gevoelens.',
        'Kolom 3 — Omstandigheid: wat moet er geregeld zijn? Geld, plek, mensen, tijd, gezondheid.',
        'Kolom 4 — Prijs: wat kost het in tijd, geld, energie en relaties?',
        'Kolom 5 — Nu al: welke 10% van kolom 1 kun je binnen twee weken organiseren?'
      ]
    },
    experiment: {
      title: 'Een dag uit het leven',
      duration: '1 dag, deze week',
      setup: [
        'Plan één dag die voor ongeveer twintig procent lijkt op het gewenste leven. Niet meer — twintig procent is precies genoeg om te toetsen.',
        'Bouw hem uit de kolommen Gedrag en Kwaliteit: het ochtendritme, het soort werk, het soort contact, de plek.',
        'Doe hem. Niet aanpassen als het tegenvalt; juist dan levert hij data.'
      ],
      measure:
        'Beantwoord ’s avonds drie vragen: wat beviel meer dan verwacht, wat viel tegen, en wat miste je van je huidige leven? Die derde vraag is de belangrijkste en wordt bijna altijd overgeslagen.',
      abort:
        'Als de dag onhaalbaar blijkt door zorg, werk of gezondheid: doe een dagdeel. Dat is geen afgezwakte versie, dat is dezelfde test.'
    },
    evidencePrompts: [
      'Wat beviel meer dan je had verwacht?',
      'Wat viel tegen, en was dat de omstandigheid of het gedrag zelf?',
      'Wat miste je uit je huidige leven — en wist je dat je dat waardeerde?',
      'Wat kostte meer energie dan gedacht?'
    ],
    reroute: [
      'Welk beeld kan van je bord af nu je de prijs kent?',
      'Is de kwaliteit die je zoekt via een andere, goedkopere route te krijgen?',
      'Welk deel van je visie kun je deze maand al beginnen, in een lelijke, kleine versie?'
    ],
    expectedResult:
      'Een visie die je kunt inroosteren in plaats van alleen bewonderen, plus minstens één stuk gewenste levenskwaliteit dat vanaf nu al in je week zit.',
    departureNote:
      'Als je gewenste leven geen dinsdag heeft, is het geen leven maar een reclamefoto.',
    tools: ['vertaalmachine', 'energiebalans']
  },
  {
    id: 3,
    slug: 'future-you',
    kind: 'station',
    name: 'Future You',
    dutch: 'Toekomstige jij',
    phase: 'a',
    duration: '35 min',
    arrivalBoard:
      'Wat kun je vanuit die mogelijke toekomst terugvertalen naar deze week? Geen orakel — een belanghebbende.',
    goal: 'Een backcast van drie jaar naar deze week, en één wekelijkse gewoonte die je van haar overneemt.',
    coreConcept:
      'Prospectief denken en backcasting: van de toekomst terugredeneren naar vandaag.',
    bigIdea: [
      'Je toekomstige zelf is psychologisch gezien vaak een vreemde. Onderzoek naar hoe mensen over hun toekomst denken laat iets ongemakkelijks zien: als we ons voorstellen wie we over tien jaar zijn, activeert dat bij veel mensen eerder het patroon van "iemand anders" dan van "ik". Dat verklaart een enorme hoeveelheid gedrag. Je laat die vreemde de rekening betalen — voor je slaaptekort, je uitgestelde beslissingen, het project dat je nooit begon.',
      'Future-self thinking is daarom geen esoterische techniek maar een correctie op een systematische denkfout. Hoe levendiger en concreter je toekomstige zelf wordt, hoe meer haar belangen meewegen in wat je vandaag kiest. Niet omdat ze je informatie stuurt, maar omdat ze een stem krijgt in een vergadering waar ze normaal niet zit.',
      'De tweede helft van dit station is de nuttigste: backcasting. Je begint niet bij vandaag en werkt vooruit — dat leidt tot voorspelbare, kleine, incrementele plannen. Je begint bij de gewenste situatie en werkt terug: als dit over drie jaar waar is, wat moet er dan na één jaar staan? En als dát waar is, wat moet er dan over drie maanden zijn? En dan: wat is er dan deze week gebeurd? Die laatste trede is bijna altijd verrassend klein en verrassend saai. Dat is het punt.',
      'Let op één valkuil. Mensen ontwerpen hun future self meestal als reclame voor zichzelf: fitter, kalmer, productiever, ondernemender, met betere randen. Een geloofwaardige future self heeft ook nog steeds een vermoeide week, een hekel aan administratie en een lichaam met beperkingen. Als jouw toekomstige zelf nergens meer last van heeft, heb je geen toekomst ontworpen maar een vlucht.'
    ],
    keyInsight:
      'Je toekomstige zelf is geen orakel. Ze is een belanghebbende die nu geen stem heeft in je beslissingen — en de rekening krijgt.',
    translations: [
      {
        claim: 'Ontvang informatie van je toekomstige, hogere zelf.',
        translation:
          'Simuleer een geloofwaardige toekomst en redeneer terug. De informatie komt niet van haar — hij komt uit jouw eigen kennis, alleen beter geordend en zonder de druk van vandaag.',
        keep: 'De techniek is uitstekend. Perspectiefwissel maakt je slimmer over je eigen situatie; alleen de bron klopt niet.'
      },
      {
        claim: 'Word nu al de vrouw die het allemaal heeft.',
        translation:
          'Kies één wekelijkse gewoonte van haar en doe die twee weken. Identiteit verandert via herhaald gedrag, niet via een besluit dat je een ander mens bent.',
        keep: 'De richting klopt: doen gaat vooraf aan worden. De sprong-in-één-keer klopt niet.'
      }
    ],
    realityCheck: [
      {
        claim:
          'Je kunt naar een andere tijdlijn springen waarin het al gelukt is.',
        check:
          'Timeline shifting leent taal uit de natuurkunde voor iets wat er niets mee te maken heeft. Wat wél verandert als je "vanuit de toekomst" denkt, is je aandacht en je risicoafweging — dat is aanzienlijk, en het gebeurt in dezelfde tijdlijn als de rest van je afspraken.'
      },
      {
        claim: 'Je toekomstige zelf weet al wat je moet doen.',
        check:
          'Zij weet precies wat jij weet. Het verschil is dat de simulatie je uit de dagelijkse ruis haalt, waardoor je afwegingen zichtbaar worden die er al lagen. Nuttig, en aanzienlijk minder mystiek dan het klinkt.'
      }
    ],
    platformQuestions: [
      'Welke vaardigheid heeft zij die jij nu niet hebt? Kies er één, niet vijf.',
      'Waar zegt zij nee tegen dat jij nu nog ja tegen zegt?',
      'Wat doet zij elke week, zonder dat het bijzonder is?',
      'Waar geeft zij geld aan uit dat jij nu niet uitgeeft — en wat koopt ze daarmee eigenlijk?',
      'Wat heeft zij losgelaten, en wie was daar verdrietig over?',
      'Waar heeft zij nog steeds last van? Als het antwoord "niets" is, ontwerp je een reclamefoto.'
    ],
    ticket: {
      title: 'De backcast-ladder',
      time: '20 minuten',
      steps: [
        'Trede 4 — Over drie jaar: beschrijf de situatie in vijf zinnen, inclusief één ding dat nog steeds lastig is.',
        'Trede 3 — Over één jaar: wat moet er dan staan, wil trede 4 nog mogelijk zijn?',
        'Trede 2 — Over drie maanden: wat is er dan af, geleerd of geregeld?',
        'Trede 1 — Deze week: wat is er dan gebeurd? Als dit niet in één zin past en niet binnen twee uur kan, ben je te hoog blijven hangen.',
        'Onderaan: wat op trede 1 kun je vandaag nog in je agenda zetten, met dag en tijd?'
      ]
    },
    experiment: {
      title: 'Eén gewoonte van haar',
      duration: '14 dagen',
      setup: [
        'Kies uit je antwoorden één wekelijkse gewoonte van je toekomstige zelf. Iets kleins: een uur maakwerk, een wandeling, een wekelijkse mail, een vaste financiële handeling.',
        'Zet hem twee weken lang op een vaste dag en tijd. Als-dan: "Als het woensdag 9 uur is, dan doe ik X."',
        'Noteer per keer alleen: gedaan of niet, en de energie erna op een schaal van 1 tot 5.'
      ],
      measure:
        'Na twee weken: hoe vaak lukte het, en wat deed het met je beeld van jezelf? Een gewoonte die vier van de zes keer lukt en je energie niet sloopt, is een keeper. Twee van de zes is meestal een teken dat de gewoonte te groot of verkeerd getimed is, niet dat jij te ongedisciplineerd bent.',
      abort:
        'Als het na twee weken alleen maar zwaarder wordt in plaats van neutraler, stop. Dat is data, geen falen.'
    },
    evidencePrompts: [
      'Hoe vaak lukte de gewoonte, en op welke dagen niet?',
      'Wat deed het met je zelfbeeld toen het wél lukte?',
      'Welke trede van de ladder bleek onrealistisch toen je hem uitschreef?'
    ],
    reroute: [
      'Klopt de driejaarsversie nog, nu je hem hebt teruggerekend?',
      'Is trede 1 klein genoeg? Zo nee: halveer hem, en dan nog een keer.',
      'Welke vaardigheid uit haar leven verdient een eigen leertraject in plaats van een goed voornemen?'
    ],
    expectedResult:
      'Een geloofwaardige toekomstversie, een ladder van vier treden die eindigt in deze week, en één gewoonte die twee weken loopt en meetbaar iets teruggeeft.',
    departureNote:
      'De vraag is niet wat zij heeft. De vraag is wat zij wekelijks doet — en of jij daar deze week tien procent van kunt doen.',
    tools: ['backcast-ladder', 'experimentkaart']
  }
];
