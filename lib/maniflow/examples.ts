import type { DomainExample } from './types';

export const examples: DomainExample[] = [
  {
    slug: 'relaties',
    domain: 'Relaties',
    headline:
      'Van "ik wil een gelijkwaardige relatie" naar iets wat je op een dinsdag kunt herkennen',
    start:
      'Marit (48) wil een relatie waarin ze zichzelf niet klein maakt. Ze leest veel over hechting, herkent zichzelf in elk profiel, en heeft in twee jaar drie keer gedatet — telkens met iemand die emotioneel op afstand bleef.',
    destination:
      'Herkenzin: "Ik zou weten dat ik er ben als ik een week lang iets oncomfortabels heb gezegd zonder daarna drie dagen te herstellen." Onderliggende behoefte: veiligheid, en het mogen innemen van ruimte.',
    translation:
      'Het beeld "een warme relatie" wordt vertaald: kwaliteit = veiligheid en directheid; gedrag = wekelijks één ding zeggen dat ongemakkelijk is; omstandigheid = mensen ontmoeten buiten apps; prijs = meer afwijzing op korte termijn, minder maanden verspild aan iemand die niet beschikbaar is.',
    friction: [
      {
        type: 'intern',
        text: 'Bij het eerste teken van afstand gaat ze harder haar best doen, in plaats van te benoemen wat ze ziet.'
      },
      {
        type: 'extern',
        text: 'Ze ontmoet vrijwel alleen mensen via apps, waar afstand houden geen kosten heeft.'
      },
      {
        type: 'structureel',
        text: 'Vriendenkring is grotendeels samengesteld uit stellen; nieuwe mensen ontmoeten kost tijd die ze niet vanzelf heeft.'
      }
    ],
    experiment:
      'Vier weken lang: bij elk contact één keer benoemen wat ze opmerkt ("je reageert vaak pas na dagen, hoe zit dat?"). Vooraf opgeschreven verwachting: "ze haken af."',
    evidence: [
      'Van de vier gesprekken haakte er één af, twee reageerden neutraal, één werd juist opener. De verwachting klopte in één van de vier gevallen.',
      'Het benoemen kostte veel minder energie dan het dagenlang analyseren dat ze anders deed.',
      'Onverwachte informatie: het gesprek waar ze het meest tegenop zag, verliep het beste.'
    ],
    reroute:
      'Stop: profielen analyseren en gesprekken naspelen met vriendinnen. Versterk: vroeg benoemen. Aanname die sneuvelde: "directheid jaagt mensen weg." Nieuwe aanname om te toetsen: "directheid selecteert sneller."',
    note: 'Let op wat hier níet gebeurde: er is niet gewerkt aan "eerst jezelf helemaal liefhebben". Er is één gedrag veranderd, en het zelfbeeld schoof mee.'
  },
  {
    slug: 'carriere',
    domain: 'Carrière',
    headline: 'Weg uit een rol die te veel kost, zonder blinde sprong',
    start:
      'Consultant, twintig jaar ervaring, herstellend van een burn-out, re-integrerend in een functie die energie blijft vragen. Wil weg van klantcontact, richting bouwen en maken. Twijfelt tussen "gewoon volhouden tot het beter gaat" en "alles opzeggen".',
    destination:
      'Herkenzin: "Ik zou weten dat ik er ben als minstens de helft van mijn werkuren maakwerk is en ik na een werkweek nog iets over heb." Behoefte: autonomie.',
    translation:
      'Het beeld "eigen bedrijf" wordt vertaald: kwaliteit = autonomie en maken; gedrag = wekelijks tien uur aan eigen werk; omstandigheid = inkomen dat niet meteen weg hoeft; prijs = minder status, onregelmatig inkomen, en zelf de administratie doen.',
    friction: [
      {
        type: 'intern',
        text: 'Perfectionisme: alles moet af zijn voordat iemand het mag zien, dus niemand ziet iets.'
      },
      {
        type: 'extern',
        text: 'Vier ideeën tegelijk open, wat betekent dat er aan geen enkel idee genoeg gebeurt om antwoord te krijgen.'
      },
      {
        type: 'structureel',
        text: 'Re-integratie beperkt het aantal beschikbare uren en dat is een medisch gegeven, geen motivatiekwestie.'
      }
    ],
    experiment:
      'Zes weken: één idee kiezen (de andere drie schriftelijk parkeren met datum), en wekelijks één klein ding publiek maken — een pagina, een korte tekst, een demo. Verwachting vooraf: "niemand reageert."',
    evidence: [
      'Zes publicaties leverden elf reacties op, waarvan twee van mensen die zelf in de doelgroep zaten.',
      'De weken met een vast blok op dinsdagochtend lukten; de weken met "als het uitkomt" niet — het was geen wilskwestie maar een roosterkwestie.',
      'Publiceren kostte veel minder energie dan het weken schaven eraan.',
      'Eén idee dat op papier het sterkst leek, bleek in de uitvoering saai. Dat is in zes weken duidelijk geworden in plaats van in twee jaar.'
    ],
    reroute:
      'Stop: het idee dat in de uitvoering saai bleek, en het volgen van vijf nieuwsbrieven over ondernemen. Versterk: het vaste dinsdagblok en publiceren in onaffe vorm. Bijgestelde tijdlijn: niet zes maanden maar achttien, passend bij het aantal beschikbare uren.',
    note: 'De grootste winst is niet het idee dat overbleef, maar de drie die eruit gingen. Ruimte is bij dit profiel de schaarste, niet motivatie.'
  },
  {
    slug: 'creatief-werk',
    domain: 'Creatief werk',
    headline: 'Van "ik kom er nooit aan toe" naar bewijs dat het bestaat',
    start:
      'Wil al jaren schrijven. Heeft veertig aanzetten, geen afgerond stuk. Leest veel over schrijven, doet twee cursussen per jaar, en beschouwt zichzelf inmiddels als iemand die het waarschijnlijk niet echt wil.',
    destination:
      'Herkenzin: "Ik zou weten dat ik er ben als er twaalf afgeronde stukken zijn die iemand anders heeft gelezen." Behoefte: expressie en erkenning — beide, en dat is geen schande.',
    translation:
      'Kwaliteit = verwondering en afronding; gedrag = wekelijks twee uur schrijven en één keer per maand iets afronden; omstandigheid = een plek en een tijd die niet ter discussie staan; prijs = accepteren dat wat af is minder goed is dan wat in je hoofd zat.',
    friction: [
      {
        type: 'intern',
        text: 'Perfectionisme, herkenbaar aan het patroon: elk stuk wordt herschreven tot het onherkenbaar en dan oninteressant is.'
      },
      {
        type: 'extern',
        text: 'Schrijven gebeurt op restjes tijd na alle andere verplichtingen, dus op het slechtste energiemoment van de dag.'
      },
      {
        type: 'structureel',
        text: 'Geen enkele externe deadline. Niets is af omdat niets af hoeft.'
      }
    ],
    experiment:
      'Acht weken: elke vrijdag om 17.00 uur één stuk versturen naar één vaste lezer, ongeacht kwaliteit. Maximaal 600 woorden. Verwachting vooraf: "wat ik onder tijdsdruk maak, is te slecht om te versturen."',
    evidence: [
      'Acht stukken verstuurd, waarvan de lezer er drie goed vond en één uitzonderlijk. De verwachting klopte niet.',
      'Het stuk dat in negentig minuten werd geschreven kreeg de beste reactie. Het stuk waar drie weken in zat, kreeg de minste.',
      'Onverwachte interesse: twee onderwerpen die als bijzin begonnen, bleken het echte materiaal.'
    ],
    reroute:
      'Stop: cursussen. Versterk: de vaste vrijdagdeadline en de vaste lezer. Nieuwe aanname om te toetsen: "een externe lezer doet meer voor mijn afrondingspercentage dan welke techniek dan ook."',
    note: 'Er is hier geen blokkade opgeruimd. Er is een deadline en een lezer toegevoegd — externe frictie omgekeerd ingezet.'
  },
  {
    slug: 'geld',
    domain: 'Geld',
    headline:
      'Van "abundance mindset" naar een getal dat je durft aan te kijken',
    start:
      'Zelfstandig, wisselend inkomen, chronische financiële onrust. Heeft manifestatie-oefeningen rond overvloed gedaan en merkt dat de onrust erdoor toenam in plaats van af — want het bleef bij een gevoel dat niet klopte met het saldo.',
    destination:
      'Herkenzin: "Ik zou weten dat ik er ben als ik drie maanden vaste lasten op een aparte rekening heb staan en mijn tarief kan noemen zonder te haperen." Behoefte: veiligheid en autonomie.',
    translation:
      'Kwaliteit = rust en speelruimte; gedrag = maandelijks één financieel half uur en wekelijks één keer een tarief noemen; omstandigheid = een buffer en een tarief dat de rekening dekt; prijs = een paar klanten die afhaken op de prijs.',
    friction: [
      {
        type: 'intern',
        text: 'Vermijding: bankapp niet openen, waardoor onrust groeit zonder informatie.'
      },
      {
        type: 'extern',
        text: 'Tarief is drie jaar niet verhoogd terwijl de kosten wel stegen.'
      },
      {
        type: 'structureel',
        text: 'Wisselende inkomsten en een sector waarin klanten laat betalen. Dat is geen mindset, dat is een cashflowprobleem met een oplossing in voorwaarden en facturatie.'
      }
    ],
    experiment:
      'Twaalf weken: elke maandagochtend tien minuten bankapp openen en drie getallen noteren. Bij de eerstvolgende drie offertes het tarief met twintig procent verhogen. Verwachting vooraf: "twee van de drie haken af."',
    evidence: [
      'Eén van de drie haakte af, en die had het laagste budget en de meeste vragen. Netto-inkomen steeg.',
      'De onrust nam meetbaar af in week drie — niet door meer geld, maar doordat het getal bekend was.',
      'De tien minuten op maandag kostten minder energie dan het vermijden ervan de rest van de week.'
    ],
    reroute:
      'Stop: offertes uitbrengen zonder betalingstermijn. Versterk: het maandagse half uur en het nieuwe tarief. Aanname die sneuvelde: "hogere prijzen jagen iedereen weg."',
    note: 'De abundance-taal was hier niet alleen ineffectief maar actief schadelijk: ze verving informatie door gevoel, precies bij het onderwerp waar informatie de onrust verlaagt.'
  },
  {
    slug: 'gezondheid',
    domain: 'Gezondheid en energie',
    headline:
      'Van "ik moet meer discipline" naar een week die je lichaam aankan',
    start:
      'Chronische spanning in nek en schouders, slecht slapen, en in een levensfase waarin energie onvoorspelbaar is geworden. Elke poging tot een strak sportregime strandt binnen drie weken, gevolgd door zelfverwijt.',
    destination:
      'Herkenzin: "Ik zou weten dat ik er ben als ik vier van de zeven dagen buiten ben geweest en de ochtendstijfheid merkbaar korter duurt." Behoefte: rust in het lichaam.',
    translation:
      'Kwaliteit = ontspanning en beweeglijkheid; gedrag = dagelijks buiten en tweemaal per week iets van kracht; omstandigheid = een vast tijdstip en kleding die klaarligt; prijs = een half uur per dag, en accepteren dat de goede dagen niet gebruikt worden om in te halen.',
    friction: [
      {
        type: 'intern',
        text: 'Alles-of-niets: een gemiste dag maakt de week "mislukt", dus stopt de hele week.'
      },
      {
        type: 'extern',
        text: 'Sportschool op twintig minuten rijden; de reistijd is de echte drempel, niet de training.'
      },
      {
        type: 'structureel',
        text: 'Wisselende energie door herstel en levensfase. Dat is een gegeven om omheen te plannen, geen tekort om te overwinnen.'
      }
    ],
    experiment:
      'Drie weken: mikken op vier van de zeven dagen in plaats van zeven. Wandelen telt volledig mee. Geen inhaalsessies. Verwachting vooraf: "met vier dagen bereik ik niets."',
    evidence: [
      'Vier van de zeven werd zestien van de eenentwintig dagen — bijna twee keer zoveel als bij eerdere pogingen op zeven van de zeven.',
      'Na een gemiste dag stapte ze de volgende dag weer in, voor het eerst zonder dat de week eraan ging.',
      'De ochtendstijfheid nam af in week drie; de dagen na een wandeling van meer dan veertig minuten waren merkbaar beter.',
      'De sportschool is in drie weken één keer bezocht. De reistijd was inderdaad de drempel.'
    ],
    reroute:
      'Stop: het sportschoolabonnement, na één laatste toets. Versterk: wandelen met de hond als vaste eerste handeling van de dag. Bijgesteld: krachttraining thuis in blokken van vijftien minuten.',
    note: 'Dit is geen medisch advies en vervangt geen zorg. Wat het wel doet: het scheidt wat je kunt roosteren van wat je moet laten onderzoeken — en dat scheelt maanden zelfverwijt.'
  },
  {
    slug: 'persoonlijke-ontwikkeling',
    domain: 'Persoonlijke ontwikkeling',
    headline: 'Van eindeloos aan jezelf werken naar iets wat verandert',
    start:
      'Tien jaar zelfonderzoek: therapie, cursussen, boeken, retraites. Veel inzicht, weinig verschil in de dagelijkse praktijk. Zegt ja terwijl ze nee bedoelt, en weet precies waarom — al jaren.',
    destination:
      'Herkenzin: "Ik zou weten dat ik er ben als ik in een maand drie keer nee heb gezegd tegen iets waar ik vroeger ja op zei." Behoefte: autonomie.',
    translation:
      'Kwaliteit = zelfbeschikking; gedrag = wekelijks één keer nee zeggen en het niet uitleggen; omstandigheid = een vaste zin klaar hebben; prijs = ongemak, en het risico dat mensen teleurgesteld zijn.',
    friction: [
      {
        type: 'intern',
        text: 'Inzicht als vervanging van handelen: het patroon zo goed kunnen uitleggen dat het lijkt alsof je er al iets aan doet.'
      },
      {
        type: 'extern',
        text: 'Verzoeken komen mondeling en direct, waardoor er geen bedenktijd is.'
      },
      {
        type: 'structureel',
        text: 'Werkcultuur waarin beschikbaarheid als toewijding geldt. Dat verandert niet door innerlijk werk.'
      }
    ],
    experiment:
      'Vier weken: bij elk verzoek standaard antwoorden met "ik laat het je morgen weten", en dan minstens één keer per week nee zeggen. Verwachting vooraf: "mensen reageren geïrriteerd."',
    evidence: [
      'Zeven keer bedenktijd genomen, vier keer nee gezegd. Eén geïrriteerde reactie, van iemand die vaker geïrriteerd reageert.',
      'De bedenktijd bleek belangrijker dan het nee: de meeste ja’s waren reflexen, geen keuzes.',
      'Onverwacht: twee mensen vroegen daarna iets interessanters, omdat ze wisten dat een ja gemeend was.'
    ],
    reroute:
      'Stop: één cursus die vooral herhaalde wat ze al wist. Versterk: de zin "ik laat het je morgen weten", die nu standaard is. Aanname die sneuvelde: "eerst begrijpen, dan veranderen."',
    note: 'Tien jaar inzicht en vier weken gedrag. De volgorde die overal wordt aangeleerd — eerst begrijpen, dan doen — blijkt bij dit patroon precies omgekeerd te werken.'
  }
];
