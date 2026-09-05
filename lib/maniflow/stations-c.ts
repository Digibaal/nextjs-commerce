import type { Station } from './types';

export const stationsC: Station[] = [
  {
    id: 9,
    slug: 'evidence',
    kind: 'station',
    name: 'Evidence',
    dutch: 'Bewijs',
    phase: 'c',
    duration: '35 min',
    arrivalBoard:
      'Welke feedback geeft de werkelijkheid je werkelijk? Inclusief het deel dat je liever niet had gezien.',
    goal: 'Een ingevuld Evidence Log over zeven dagen, plus één tegentest die je aanname eerlijk op de proef stelt.',
    coreConcept:
      'Bewijs verzamelen als motor voor zowel strategie als zelfvertrouwen — met ingebouwde correctie voor je eigen bias.',
    bigIdea: [
      'De manifestatiewereld heeft één gewoonte die verrassend dicht bij goed onderzoek ligt: kijken wat er gebeurt. Alleen wordt daar meestal gekeken naar tekenen — een witte veer, drie keer hetzelfde nummer, een liedje op de radio. Het probleem is niet dat mensen betekenis zoeken. Het probleem is dat deze manier van kijken uitsluitend bevestigt: je onthoudt wat past en vergeet wat niet past, dus je krijgt altijd gelijk.',
      'Het Evidence Log doet hetzelfde werk, maar dan zo dat het je iets kan leren. Zes kolommen: wat deed ik, wat verwachtte ik, wat gebeurde er feitelijk, wie reageerde en hoe, wat kostte het aan energie, en welke aanname is hierdoor sterker of zwakker geworden. Dat laatste is de kolom die het verschil maakt tussen een dagboek en een navigatie-instrument.',
      'De echte signalen zijn saaier en bruikbaarder dan tekenen. Wat werkte? Wat veranderde? Wat kostte meer energie dan verwacht? Welke reactie kreeg je, en van wie precies? Welke aanname bleek verkeerd? Waar ontstond onverwachte interesse — bij anderen of bij jezelf? En de vraag die de meeste routes verandert: wat voelde aantrekkelijk in fantasie maar niet in werkelijkheid?',
      'Dan de tegentest, het meest ongemakkelijke gereedschap uit het hele programma. Schrijf vooraf op wat je zou zien als je aanname níet klopt, en kijk daar een week gericht naar. Zonder die stap ben je aan het verzamelen wat je al geloofde. Mét die stap wordt je zelfvertrouwen ergens op gebouwd — en dat is het verschil tussen vertrouwen dat standhoudt bij tegenslag en vertrouwen dat bij de eerste afwijzing uit elkaar valt.'
    ],
    keyInsight:
      'Het universum stuurt geen tekenen. Mensen, cijfers, je lichaam en je agenda sturen betere — preciezer, sneller en met bruikbare details.',
    translations: [
      {
        claim: 'Let op de tekenen die het universum je stuurt.',
        translation:
          'Aandacht en patroonherkenning zijn echt en nuttig: je merkt kansen op die je eerder miste. Noteer alleen ook wat je níet zag, anders meet je je eigen filter.',
        keep: 'De onderliggende gewoonte — opletten en betekenis geven aan wat je tegenkomt — is waardevol. Alleen de boekhouding deugt niet.'
      },
      {
        claim:
          'Het werkte — kijk maar wat er gebeurde nadat ik ging manifesteren.',
        translation:
          'Dat er iets gebeurde ná iets anders, zegt op zichzelf weinig. De bruikbare vraag is: welke handelingen deed je in diezelfde periode anders, en welke van die handelingen zou je herhalen?',
        keep: 'De uitkomst is echt. De verklaring is alleen zo grof dat je er niets van kunt leren voor de volgende keer.'
      },
      {
        claim: 'Vier je kleine overwinningen.',
        translation:
          'Noteer je kleine overwinningen met datum en context, want je geheugen gooit ze weg zodra het tegenzit. Vieren is optioneel; vastleggen is dat niet.'
      }
    ],
    realityCheck: [
      {
        claim: 'Ik kwam het drie keer tegen deze week, dus het klopt.',
        check:
          'Frequentie-illusie: nadat iets je aandacht heeft gekregen, valt het je overal op. Het aantal is niet veranderd. Wil je weten of het echt vaker voorkomt, dan moet je tellen vanaf een moment dat je er nog niet op lette — of iemand anders laten tellen.'
      },
      {
        claim: 'Mijn gevoel zegt me dat dit de goede richting is.',
        check:
          'Je gevoel is een uitstekende snelle inschatting en een matige toetsingsmethode, vooral bij dingen die je nooit eerder hebt gedaan. Gebruik het als hypothese, niet als conclusie. Het mooie is dat je het kunt controleren en dat je gevoel dan vaak beter wordt.'
      },
      {
        claim: 'Als je gelooft dat het werkt, werkt het beter.',
        check:
          'Verwachtingseffecten bestaan echt en zijn goed beschreven — vooral bij ervaringen als pijn, vermoeidheid en motivatie. Ze zijn ook begrensd. Verwachting verandert hoe iets voelt en hoeveel je volhoudt; ze verandert geen markt, geen agenda van iemand anders en geen bankrekening.'
      }
    ],
    platformQuestions: [
      'Wat werkte deze week? Feitelijk, met datum.',
      'Wat veranderde er in je situatie dat er vorige maand nog niet was?',
      'Wat kostte meer energie dan verwacht, en op welk moment precies?',
      'Welke reactie kreeg je, en van wie? Van iemand wiens oordeel je vertrouwt, of van iemand die toevallig in de buurt stond?',
      'Welke aanname bleek verkeerd, en wat had je vooraf opgeschreven?',
      'Waar ontstond onverwachte interesse — bij anderen, of bij jezelf?',
      'Wat voelde aantrekkelijk in fantasie en viel tegen in werkelijkheid?'
    ],
    ticket: {
      title: 'Zeven dagen terug in zes kolommen',
      time: '20 minuten',
      steps: [
        'Maak zes kolommen: Handeling — Verwachting — Wat er gebeurde — Reactie (wie) — Energie (−2 tot +2) — Aanname sterker/zwakker.',
        'Vul minstens vijf regels in over de afgelopen zeven dagen. Klein telt mee.',
        'Onderstreep de regel die je het meest verraste.',
        'Schrijf onderaan één zin: wat weet je nu wat je vorige week nog niet wist?'
      ]
    },
    experiment: {
      title: 'De tegentest',
      duration: '7 dagen',
      setup: [
        'Kies de aanname waar je route het meest op leunt.',
        'Schrijf op: wat zou ik zien, horen of meten als deze aanname niet klopt? Wees concreet — "mensen zouden niet reageren" is te vaag, "minder dan één van de vijf reageert binnen een week" is bruikbaar.',
        'Kijk een week gericht naar precies dat.',
        'Noteer ook de gevallen die je aanname tegenspreken. Vooral die.'
      ],
      measure:
        'Kwam het tegenbewijs voor? Zo ja, hoe vaak? Eén tegenvoorbeeld weerlegt zelden iets, maar een patroon van tegenvoorbeelden dat je eerder niet zag, verandert je route zonder dat je jezelf hoeft te overtuigen.',
      abort:
        'Als de tegentest je in een spiraal van twijfel brengt: begrens hem tot één concreet meetpunt en één week. Toetsen is geen zelfonderzoek.'
    },
    evidencePrompts: [
      'Welke aanname is sterker geworden, welke zwakker?',
      'Welk tegenbewijs kwam er, en had je het eerder al kunnen zien?',
      'Wat is het beste stuk bewijs dat je deze week hebt verzameld over je eigen kunnen?'
    ],
    reroute: [
      'Welke conclusie trek je uit deze week — en welke conclusie zou iemand anders trekken uit dezelfde regels?',
      'Verdient een van je aannames een echte test in plaats van nog een week observeren?',
      'Wat mag je stoppen omdat het bewijs duidelijk is?'
    ],
    expectedResult:
      'Een log met echte gegevens over je eigen leven, minstens één omgevallen aanname, en zelfvertrouwen dat op iets rust dat je kunt teruglezen.',
    departureNote:
      'Bewijs verzamelen is geen wantrouwen richting jezelf. Het is de enige manier waarop zelfvertrouwen ergens op komt te staan.',
    tools: ['evidence-log', 'tegentest']
  },
  {
    id: 10,
    slug: 'reroute',
    kind: 'station',
    name: 'Reroute',
    dutch: 'Omleiding',
    phase: 'c',
    duration: '40 min',
    arrivalBoard:
      'Wat moet er worden aangepast? En de vraag die niemand stelt: stuur je bij omdat je iets leerde, of omdat het even ongemakkelijk werd?',
    goal: 'Een volledige Reroute Review met minstens één stopbesluit en één versterking.',
    coreConcept:
      'Bijsturen als vaste procedure in plaats van als noodgreep — met onderscheid tussen leerreroute en vluchtreroute.',
    bigIdea: [
      'Plannen zijn hypotheses met een deadline. Dat betekent dat aanpassen niet het bewijs is dat je faalde, maar het bewijs dat je gemeten hebt. In de manifestatiewereld wordt tegenslag meestal verklaard met "het was niet aligned" of "het was de verkeerde timing". Dat klinkt zacht en doet iets hards: het maakt van informatie een kosmisch oordeel, waar je niets van kunt leren en waar je jezelf wel schuldig over kunt voelen.',
      'De Reroute Review is een vaste afspraak, elke twee weken, twintig minuten. Zeven vragen: wil ik nog steeds dezelfde bestemming, werkt mijn huidige route, wat heb ik geleerd, wat moet ik stoppen, wat moet ik versterken, wat verdient een experiment, welke aanname moet opnieuw worden onderzocht. Het feit dat het een vaste afspraak is, is de helft van de waarde — anders stuur je alleen bij op momenten van paniek of euforie, en dat zijn precies de twee slechtste momenten.',
      'Dan het onderscheid dat dit station bijzonder maakt. Er zijn twee soorten reroutes en ze voelen identiek. Een leerreroute komt voort uit informatie: je hebt iets geprobeerd, het antwoord was duidelijk, je past aan. Een vluchtreroute komt voort uit ongemak: het werd saai, iemand keek raar, het eerste echte moeilijke stuk kwam eraan, en er verscheen precies op dat moment een nieuw en veel interessanter idee. Nieuwe ideeën zijn verslavend voor mensen met veel ideeën. Ze voelen als inzicht en werken als ontsnapping.',
      'De test is simpel en genadeloos: schrijf op welk feit je hebt geleerd dat deze wijziging rechtvaardigt. Als je geen feit kunt opschrijven — alleen een gevoel of een nieuw idee — dan is het waarschijnlijk een vluchtreroute. Dat mag nog steeds. Maar dan noem je het bij naam, en spreek je met jezelf af wanneer je erop terugkomt.',
      'Tot slot de tegenkant: doorgaan met iets alleen omdat je er al veel in hebt gestopt, is de bekendste denkfout in de boekhouding van je leven. Geïnvesteerde tijd komt niet terug door er meer tijd bij te doen. De vraag is nooit hoeveel het je heeft gekost, maar wat het vanaf vandaag gaat opleveren.'
    ],
    keyInsight:
      'Er is een verschil tussen bijsturen omdat je iets leerde en bijsturen omdat het ongemakkelijk werd. Schrijf op welke van de twee het is — dat is de hele oefening.',
    translations: [
      {
        claim: 'Het was niet aligned, of het was gewoon niet de juiste timing.',
        translation:
          'Je hebt informatie gekregen die je vooraf niet had. Dat is geen kosmisch oordeel over jou; dat is navigatie. Schrijf op wát je precies te weten kwam, anders is het geen les maar een troost.',
        keep: 'De functie klopt: het voorkomt dat je jezelf afbrandt na een tegenslag. Alleen kan die functie ook zonder een verklaring die je niets leert.'
      },
      {
        claim: 'Het universum beschermde je tegen iets ergers.',
        translation:
          'Achteraf blijkt vaak dat een afwijzing je iets bespaarde. Dat is een correcte observatie en een dubieuze verklaring. Gebruik hem om verder te kunnen, niet om te stoppen met kijken naar wat je zelf kunt verbeteren.'
      },
      {
        claim: 'Blijf geloven, geef nooit op.',
        translation:
          'Blijf bij je bestemming zolang die van jou is, en wees losser over de route dan over de richting. Nooit opgeven is een strategie die geen stopcriterium kent, en zonder stopcriterium kun je jaren verliezen aan iets wat na drie maanden al antwoord gaf.'
      }
    ],
    realityCheck: [
      {
        claim: 'Ik heb er al zoveel tijd in gestopt, ik kan nu niet stoppen.',
        check:
          'Dat is de sunk cost fallacy, en hij is bijzonder hardnekkig omdat stoppen voelt als het weggooien van je investering. Het geld en de tijd zijn al weg, ongeacht wat je nu kiest. De enige eerlijke vraag: als ik er vandaag voor het eerst naar keek, zou ik dan instappen?'
      },
      {
        claim: 'Ik voel dat dit niet mijn pad is, dus ik stop.',
        check:
          'Dat gevoel is soms accuraat en soms is het de eerste moeilijke week. Het onderscheid: kun je een feit noemen dat je erover geleerd hebt? Zo niet, geef het één afgebakende periode meer, met een vooraf vastgelegd stopcriterium. Dan beslis je op gegevens in plaats van op een dag met slechte slaap.'
      }
    ],
    platformQuestions: [
      'Wil je nog steeds dezelfde bestemming? Antwoord eerlijk, ook als het onhandig uitkomt.',
      'Werkt je huidige route, gemeten aan bewijs en niet aan hoop?',
      'Wat heb je geleerd sinds je vertrok — noem drie concrete dingen?',
      'Wat moet je stoppen? Er moet iets zijn. Er is altijd iets.',
      'Wat moet je versterken, omdat het meer opleverde dan verwacht?',
      'Wat verdient een experiment in plaats van nog een ronde nadenken?',
      'Welke aanname moet opnieuw worden onderzocht, nu de omstandigheden veranderd zijn?',
      'Is deze reroute een leerreroute of een vluchtreroute? Welk feit rechtvaardigt hem?'
    ],
    ticket: {
      title: 'De Reroute Review',
      time: '20 minuten',
      steps: [
        'Zet twintig minuten in je agenda, elke twee weken, met een vaste dag. Nu doen.',
        'Beantwoord de acht vragen hierboven kort. Twee zinnen per vraag is genoeg.',
        'Verplicht onderdeel: één stopbesluit. Iets gaat eruit deze week.',
        'Verplicht onderdeel: één versterking. Iets dat werkte krijgt meer ruimte of tijd.',
        'Label je reroute: LEREN of VLUCHT. Bij VLUCHT: spreek een datum af waarop je erop terugkomt.'
      ]
    },
    experiment: {
      title: 'De stoptest',
      duration: '14 dagen',
      setup: [
        'Kies één ding waarvan je vermoedt dat het niets oplevert maar dat je uit gewoonte, plicht of angst blijft doen.',
        'Stop er twee weken volledig mee. Niet minderen — stoppen.',
        'Noteer wat er misgaat en wat er vrijkomt.',
        'Als iemand het opmerkt, noteer wie en wat ze zeiden. Meestal is dat aantal lager dan gevreesd.'
      ],
      measure:
        'Na twee weken: welke schade is er echt ontstaan, en wat kwam er vrij aan tijd, geld, aandacht of rust? Bij de meeste stoptests is de schade kleiner dan verwacht en de vrijgekomen ruimte groter.',
      abort:
        'Stop de stoptest niet halverwege omdat het spannend wordt. Dat is precies het moment waarop hij data begint op te leveren.'
    },
    evidencePrompts: [
      'Wat gebeurde er toen je ergens mee stopte?',
      'Wie merkte het, en wat zei dat over hoe nodig het was?',
      'Welk feit rechtvaardigde je reroute — en kon je er echt één opschrijven?'
    ],
    reroute: [
      'Wat is je route vanaf vandaag, in één zin?',
      'Welke bestemming is stilletjes veranderd zonder dat je het had opgeschreven?',
      'Welke afspraak met jezelf verdient een datum in plaats van een voornemen?'
    ],
    expectedResult:
      'Een bijgestelde route op basis van gegevens, één ding minder in je week, en een vaste tweewekelijkse afspraak waardoor bijsturen normaal wordt in plaats van dramatisch.',
    departureNote:
      'Een route veranderen is niet hetzelfde als je bestemming opgeven. Meestal is het het tegenovergestelde: je neemt hem serieus genoeg om er niet in te blijven hangen.',
    tools: ['reroute-review', 'stopkaart']
  },
  {
    id: 11,
    slug: 'momentum',
    kind: 'station',
    name: 'Momentum',
    dutch: 'Voortgang',
    phase: 'd',
    duration: '40 min',
    arrivalBoard:
      'Hoe ontstaan herhaling, vaardigheid en vertrouwen — ook in de weken waarin je niets voelt en weinig kunt?',
    goal: 'Een minimumdienstregeling die het uithoudt op een slechte week, en één vaardigheid die je gericht gaat opbouwen.',
    coreConcept:
      'Ontwerpen voor je slechtste week, niet voor je beste. Vaardigheid als bron van vertrouwen, energie als harde variabele.',
    bigIdea: [
      'Momentum wordt meestal uitgelegd als een soort snelheid die je opbouwt en die je vervolgens meeneemt. In de praktijk werkt het anders: momentum is het gevolg van herhaalbaarheid onder slechte omstandigheden. Iedereen kan drie goede weken. Het verschil zit in wat er gebeurt in week vier, als je verkouden bent, er iets misgaat op je werk en je twee nachten slecht hebt geslapen.',
      'Daarom is de belangrijkste ontwerpvraag van dit station niet "hoe word ik consistenter" maar "wat blijft er over als het tegenzit". Schrijf je minimumdienstregeling: maximaal drie dingen die ook in een rotweek doorgaan. Meestal is dat één wekelijks blok werk, één meetmoment van tien minuten, en één ding dat je systeem overeind houdt — een wandeling, een gesprek, slaap.',
      'Streaks werken hier tegen je. Ze belonen precies de weken waarin het toch al makkelijk was en ze straffen de weken waarin het zwaar was. Erger: ze maken van één gemiste dag een reden om helemaal te stoppen, want de streak is toch al kapot. Werk daarom met bandbreedte: zestig procent is geslaagd. Wie zestig procent van de weken zijn blok haalt, heeft over een jaar meer dan dertig sessies gedaan, en dat is een aanzienlijk ander mens dan iemand die drie keer perfect begon en drie keer stopte.',
      'Waar het vertrouwen vandaan komt, is minder mysterieus dan het lijkt. Bandura’s werk over zelfvertrouwen wijst consequent op één sterkste bron: ervaringen waarin het je daadwerkelijk lukte. Niet aanmoediging, niet visualisatie, niet affirmaties — meegemaakt succes. Dat betekent dat vaardigheid opbouwen de meest onderschatte manier is om zelfvertrouwen te krijgen. Je hoeft niet moediger te worden; je moet beter worden, en moed volgt.',
      'En dan energie. Voor een deel van de mensen is energie geen kwestie van planning maar van biologie en levensfase: herstel na burn-out, chronische klachten, hormonale verschuivingen, medicatie, zorgtaken, een zenuwstelsel dat sneller vol zit. Een programma dat daar overheen praat, produceert schuldgevoel en verder niets. Een programma dat het meeneemt, ontwerpt kleinere blokken, meer herstel, langere tijdlijnen — en levert daardoor meer op.'
    ],
    keyInsight:
      'Een systeem dat alleen werkt als je je goed voelt, is geen systeem. Het is een goede bui met een naam.',
    translations: [
      {
        claim: 'Quantum leap: spring naar het volgende niveau.',
        translation:
          'Samengestelde groei: vaardigheid plus herhaling plus zichtbaarheid. Van buiten ziet het eruit als een sprong; van binnen zijn het veertig saaie weken met drie interessante.',
        keep: 'De observatie dat groei niet-lineair aanvoelt, klopt. Alleen komt de versnelling uit opgebouwd vermogen, niet uit een besluit.'
      },
      {
        claim: 'High vibe, high results — houd je energie hoog.',
        translation:
          'Beheer je energie als een middel met een voorraad: slaap, herstel, beweging, prikkels, gezelschap, medische zorg. Energie is een biologische en situationele grootheid, geen morele prestatie.'
      },
      {
        claim: 'Consistentie is alles. Elke dag, geen excuses.',
        translation:
          'Consistentie is terugkomen. Niet elke dag halen, maar na een gemiste week weer instappen zonder eerst een heel oordeel over jezelf te hoeven doorlopen.'
      }
    ],
    realityCheck: [
      {
        claim: 'Het duurt eenentwintig dagen om een gewoonte te vormen.',
        check:
          'Dat getal komt uit een observatie van een chirurg uit de jaren zestig over patiënten die wenden aan hun nieuwe uiterlijk, en het is nooit een onderzoeksresultaat over gewoontevorming geweest. Onderzoek naar echte gewoontes laat een enorme spreiding zien — van enkele weken tot ruim een halfjaar, afhankelijk van gedrag en persoon. Reken dus niet af op dag tweeëntwintig.'
      },
      {
        claim: 'Als je het echt belangrijk vindt, hou je het wel vol.',
        check:
          'Volhouden hangt sterker samen met hoe makkelijk het gedrag is gemaakt, hoe het in je dag past en hoeveel herstel je hebt, dan met hoe belangrijk je het vindt. Belang is een slechte voorspeller; ontwerp is een goede.'
      }
    ],
    platformQuestions: [
      'Wat werkt nog op een dag waarop je een 3 uit 10 hebt?',
      'Wat is je minimumversie — de drie dingen die ook in een rotweek doorgaan?',
      'Welke vaardigheid is nu je echte bottleneck? Niet je motivatie: je vaardigheid.',
      'Waar haal je herstel vandaan, en staat dat ergens in je week of hoop je er maar op?',
      'Wat moet je stoppen om dit vol te kunnen houden?',
      'Wie merkt het als je stilvalt, en heb je iemand die dat mag zeggen?'
    ],
    ticket: {
      title: 'Schrijf je minimumdienstregeling',
      time: '15 minuten',
      steps: [
        'Schrijf maximaal drie dingen op die ook doorgaan in een week waarin alles tegenzit.',
        'Zet er per ding een dag, tijd en duur bij. De duur moet klein genoeg zijn om beschamend te klinken.',
        'Schrijf erbij welk ding je als eerste laat vallen als het tóch niet gaat — vooraf besloten, zodat het geen mislukking wordt maar een plan.',
        'Hang hem op waar je hem ziet op een slechte dag. Niet in een app die je dan niet opent.'
      ]
    },
    experiment: {
      title: 'Bandbreedte in plaats van streak',
      duration: '21 dagen',
      setup: [
        'Kies één gedrag dat je wilt volhouden.',
        'Mik expliciet op zestig procent, niet op honderd. Schrijf dat op: "Ik streef naar 4 van de 7."',
        'Turf zonder oordeel. Geen inhaalronde na een gemiste dag.',
        'Noteer per week één zin over hoe het voelde om niet naar honderd procent te streven.'
      ],
      measure:
        'Vergelijk na drie weken met eerdere pogingen op honderd procent. Twee dingen om naar te kijken: haalde je meer sessies in totaal, en stopte je eerder of later dan gebruikelijk?',
      abort:
        'Als zestig procent je juist ontspant en het gedrag stijgt: houd het zo. Het doel is niet strengheid, het is duur.'
    },
    evidencePrompts: [
      'Hoeveel sessies haalde je in totaal, vergeleken met eerdere pogingen?',
      'Wat gebeurde er na een gemiste dag — stopte je, of stapte je weer in?',
      'Welke vaardigheid ging merkbaar vooruit, en waaraan merkte je dat?',
      'Welk deel van je energie was planbaar en welk deel niet?'
    ],
    reroute: [
      'Welke verwachting over tempo moet naar beneden om dit vol te houden?',
      'Welke vaardigheid verdient echte leertijd in plaats van goede bedoelingen?',
      'Wat moet er uit je week om ruimte te maken voor herstel?'
    ],
    expectedResult:
      'Een minimumversie die het uithoudt, een realistischer tijdlijn, meetbaar meer sessies dan bij eerdere pogingen, en een vaardigheid die zichtbaar groeit.',
    departureNote:
      'Consistentie is niet elke dag. Consistentie is terugkomen zonder eerst een heel proces over jezelf te hoeven voeren.',
    tools: ['minimumdienstregeling', 'energiebalans', 'weekmeter']
  },
  {
    id: 12,
    slug: 'next-destination',
    kind: 'station',
    name: 'Next Destination',
    dutch: 'Volgende bestemming',
    phase: 'd',
    duration: '45 min',
    arrivalBoard:
      'Wat is er werkelijk veranderd, wat neem je mee, en waar wil je nu heen — met de persoon die je nu bent?',
    goal: 'Een herziene bestemming, een lijst van wat blijft en wat achterblijft, en een eigen dienstregeling voor daarna.',
    coreConcept:
      'Herijken met nieuwe informatie: de reis heeft niet alleen je route veranderd maar ook de reiziger.',
    bigIdea: [
      'Aan het eind van een route is de verleiding groot om te beoordelen of je "het gehaald hebt". Dat is bijna altijd de verkeerde vraag, en wel om een concrete reden: de dingen die het langst duren zijn precies de dingen die van andere mensen, markten en timing afhangen. Wat je in zes weken wel kunt beoordelen, is of je richting scherper is, of je gedrag veranderd is, en of je nu sneller leert dan toen je begon.',
      'Er is ook iets veranderd wat zelden wordt meegenomen: jij. Je hebt aannames getoetst, dingen geprobeerd die niet bij je oude verhaal pasten, en waarschijnlijk minstens één bestemming afgeschaft. Dat betekent dat je oorspronkelijke bestemming is opgesteld door iemand met minder informatie dan jij nu hebt. Hem klakkeloos overnemen is geen trouw, het is nalatigheid.',
      'Dus herijk je. Niet door alles omver te gooien — dat is vaak de vluchtvariant — maar door de bestemming opnieuw op te schrijven en te kijken wat er vanzelf verandert in de formulering. Meestal blijft de kern staan en verschuiven de details: het domein blijft, de vorm verandert. Soms verdwijnt er een wens, en dan is de juiste reactie opluchting, niet rouw.',
      'Tot slot: consolidatie is een geldige fase. De cultuur rond persoonlijke ontwikkeling suggereert onafgebroken groei, alsof stilstand verdacht is. Dat klopt niet. Na een periode van verandering is een periode van laten bezinken vaak productiever dan de volgende sprong. Als je nieuwe bestemming "hetzelfde, maar dan rustiger en dieper" is, is dat een volwaardig antwoord.'
    ],
    keyInsight:
      'De beste uitkomst van een reis is soms niet dat je aankwam, maar dat je nu een betere bestemming kunt bedenken dan aan het begin.',
    translations: [
      {
        claim: 'Manifest your next level.',
        translation:
          'Herzie je richting op basis van wat je hebt geleerd, met de persoon die je nu bent. Niveaus bestaan niet; informatie wel.',
        keep: 'De impuls klopt: na een periode van verandering hoor je opnieuw te kiezen. Alleen niet omdat je "hoger" moet.'
      },
      {
        claim: 'Als je het gemanifesteerd hebt, blijf je in die energie.',
        translation:
          'Als iets is gelukt, leg dan vast wat je feitelijk deed. Dat is je herhaalbare deel. Energie herinner je je niet; handelingen kun je teruglezen.'
      }
    ],
    realityCheck: [
      {
        claim: 'Je moet altijd blijven groeien.',
        check:
          'Nee. Consolideren, herstellen en gewoon een tijd doen wat werkt, zijn volwaardige fases. Permanente groei is een economisch model, geen menselijke behoefte, en voor mensen die van nature veel ideeën hebben is het vaak precies het patroon dat resultaten voorkomt.'
      },
      {
        claim: 'Het is gelukt omdat ik het heb gemanifesteerd.',
        check:
          'Als het gelukt is, is dat mooi — en de nuttige vraag is: welk deel was jouw handelen, welk deel was timing, en welk deel waren andere mensen? Alleen het eerste deel kun je de volgende keer opnieuw doen. De rest weten is óók waardevol, want het houdt je bescheiden als het een keer niet lukt.'
      }
    ],
    platformQuestions: [
      'Wat is er feitelijk veranderd in je gedrag, je omstandigheden en je zelfbeeld? Drie kolommen, geen gevoel.',
      'Welke wens is verdwenen — en is dat een verlies of een opluchting?',
      'Wat neem je mee als vaste route, en wat laat je hier achter?',
      'Wat wil je nu, opgeschreven zonder terug te kijken naar je oude bestemming?',
      'Waar heb je dit programma tegengesproken, en had je gelijk?',
      'Wat zou je iemand aanraden die hier over een halfjaar begint?'
    ],
    ticket: {
      title: 'De nieuwe bestemmingszin',
      time: '25 minuten',
      steps: [
        'Lees je oude bestemmingszin uit Station 1 pas ná stap 2. Niet eerder.',
        'Schrijf eerst een nieuwe zin: waar wil je heen, en waaraan zou je merken dat je er bent?',
        'Vergelijk nu pas met de oude. Noteer wat er is veranderd en waarom — welk bewijs veroorzaakte de verschuiving?',
        'Schrijf drie dingen op die je stopt. Verplicht. Zonder ruimte geen route.',
        'Zet je eigen dienstregeling in de agenda: wekelijkse tien minuten, tweewekelijkse reroute, maandelijkse review.'
      ]
    },
    experiment: {
      title: 'Het tweede seizoen',
      duration: '30 dagen',
      setup: [
        'Kies één station uit de route dat je opnieuw doet met je nieuwe bestemming. Meestal is dat 2, 6 of 7.',
        'Doe alleen dat station, met de volle dertig dagen ervoor.',
        'Vergelijk je antwoorden met die van de eerste ronde. Bewaar beide.'
      ],
      measure:
        'Het verschil tussen ronde één en ronde twee is de eerlijkste maat voor wat er is veranderd. Niet het resultaat — het verschil in je antwoorden.',
      abort:
        'Als de eerste ronde nog aan het bezinken is, wacht. Consolidatie is geen uitstel.'
    },
    evidencePrompts: [
      'Wat is er in zes weken feitelijk veranderd?',
      'Welke wens is stilletjes verdwenen?',
      'Welk deel van je succes was handelen, welk deel timing, welk deel anderen?'
    ],
    reroute: [
      'Wat wordt je volgende bestemming, in één zin?',
      'Welke drie dingen stop je vandaag?',
      'Wanneer staat je volgende herijking in de agenda — met datum?'
    ],
    expectedResult:
      'Een bestemming die past bij wie je nu bent, drie stopbesluiten, een eigen cadans in je agenda, en een archief waarmee je over een jaar kunt zien wat er werkelijk gebeurde.',
    departureNote:
      'Je hebt niets gemanifesteerd. Je hebt gekozen, getoetst, bewogen, geleerd en bijgestuurd. Dat is beter nieuws dan magie, want het is herhaalbaar en je hebt het zelf gedaan.',
    tools: ['routekaart', 'weekmeter', 'stopkaart']
  }
];
