// Hlavní TZB profese. Texty z design systému (ui_kits/web/shared.jsx).
// Jistě doloženo z veřejných zdrojů: kompletní TZB, podtlakové odvodnění střech,
// jádrové vrtání; voda, odpad, topení, klimatizace. Zbytek POTVRDÍ KLIENT.
export const SERVICES = [
  {
    slug: 'zdravotechnika',
    title: 'Zdravotechnika',
    desc: 'Voda, kanalizace a sanitární instalace pro celé objekty.',
    tags: ['ZTI'],
  },
  {
    slug: 'vytapeni',
    title: 'Vytápění',
    desc: 'Kotelny, zdroje tepla, rozvody, podlahové systémy a kompletní realizace.',
    tags: ['ÚT'],
  },
  {
    slug: 'vzduchotechnika',
    title: 'Vzduchotechnika a rekuperace',
    desc: 'VZT jednotky, rozvody vzduchu a zpětné získávání tepla.',
    tags: ['VZT'],
  },
  {
    slug: 'chlazeni-a-klimatizace',
    title: 'Chlazení a klimatizace',
    desc: 'Zdroje chladu, klimatizační systémy a technologické chlazení.',
    tags: ['Chlazení'],
  },
  {
    slug: 'plyn',
    title: 'Plyn',
    desc: 'Plynové rozvody a spotřebiče včetně revizí a zkoušek.',
    tags: ['Plyn'],
  },
  {
    slug: 'specializovane-technologie',
    title: 'Specializované technologie',
    desc: 'Podtlakové odvodnění střech, jádrové vrtání, technologické rozvody.',
    tags: [],
  },
];

// Zkratky profesí pro filtry a tagy
export const PROFESSIONS = ['ZTI', 'Vytápění', 'VZT', 'Chlazení', 'Plyn'];
