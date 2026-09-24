// Hlavní profese PALČ. Texty a rozsahy dodávek = podklady od klienta (24. 9. 2026).
// Vzduchotechnika, rekuperace a chlazení byly z nabídky vyřazeny (zadání klienta).
export const SERVICES = [
  {
    slug: 'zdravotechnika',
    title: 'Zdravotechnika',
    desc: 'Podtlakové odvodnění střech, vnitřní rozvody vody a kanalizace, sanitární keramika.',
    tags: ['ZTI', 'Podtlakové odvodnění'],
    items: [
      'Navrhujeme a dodáváme podtlakové odvodnění střech — systémy DYKA Vacurain Fix a Flex, Wavin QuickStream, Geberit Pluvia',
      'Vnitřní rozvody pitné vody',
      'Vnitřní rozvody požární vody',
      'Vnitřní rozvody kanalizace',
      'Dodávky sanitární keramiky a doplňků',
    ],
  },
  {
    slug: 'vytapeni',
    title: 'Vytápění',
    desc: 'Rozvody topných systémů, plynové kotelny a výměníkové stanice, podlahové systémy a tepelná čerpadla.',
    tags: ['Vytápění'],
    items: [
      'Vnitřní rozvody topných systémů',
      'Plynové kotelny a výměníkové stanice',
      'Navrhujeme a dodáváme teplovodní a sálavé podlahové systémy',
      'Navrhujeme řešení s tepelnými čerpadly na míru vašim potřebám. Zajišťujeme dodávku, odbornou instalaci a spolehlivý provoz celého systému',
    ],
  },
  {
    slug: 'plyn',
    title: 'Plyn',
    desc: 'Domovní i průmyslové plynovody a plynové kotelny.',
    tags: ['Plyn'],
    items: [
      'Montáž domovních i průmyslových plynovodů',
      'Montáž plynových kotelen do výkonu 50 kW',
    ],
  },
  {
    slug: 'jadrove-vrtani',
    title: 'Jádrové vrtání',
    desc: 'Prostupy a otvory v betonu — rychle, přesně a s minimálními vibracemi.',
    tags: ['Jádrové vrtání'],
    body: [
      'Jádrové vrtání do betonu je rychlá, přesná a šetrná metoda pro vytváření otvorů a prostupů v betonu a dalších stavebních materiálech. Oproti použití pneumatické sbíječky může být vrtání až 10× až 20× rychlejší.',
      'Vrtání je vhodné pro vytvoření prostupů pro elektroinstalace, vodovodní a kanalizační rozvody, vzduchotechniku i další technické instalace. Lze jej využít také pro kotvení konstrukcí, odběr vzorků betonu nebo postupné odstraňování větších betonových ploch.',
      'Velkou výhodou jsou minimální vibrace, díky kterým dochází k menšímu zatížení okolní konstrukce. Vrtání lze provádět svisle, vodorovně i šikmo podle konkrétních požadavků stavby.',
      'K dispozici máme vrtací korunky o průměru od 42 do 252 mm, které umožňují provádět přesné otvory podle individuálních požadavků zákazníka.',
    ],
    priceNote:
      'Ceník nezveřejňujeme — cena se odvíjí od průměru a počtu vrtů, tloušťky a vyztužení konstrukce a přístupnosti místa. ' +
      'Pošlete zadání a obratem dostanete konkrétní nabídku.',
  },
];

// Profese pro filtr realizací — jen ty, které se v referencích skutečně objevují
// (jádrové vrtání se u referenčních staveb neuvádí, proto tu chybí).
export const PROFESSIONS = ['Podtlakové odvodnění', 'ZTI', 'Vytápění', 'Plyn'];
