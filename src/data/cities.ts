export interface City {
  slug: string;
  name: string;
  /** 6. pád: „v Praze“ */
  locative: string;
  /** 2. pád: „z Prahy“ */
  genitive: string;
  region: string;
  lat: number;
  lon: number;
  intro: string;
  local: { title: string; text: string };
  districts: string[];
  surroundings: string[];
  highlights: string[];
  faq: { q: string; a: string }[];
}

export const cities: City[] = [
  {
    slug: 'praha',
    name: 'Praha',
    locative: 'v Praze',
    genitive: 'z Prahy',
    region: 'Hlavní město Praha',
    lat: 50.0755,
    lon: 14.4378,
    intro:
      'Vykupujeme starožitnosti a retro předměty v celé Praze — z bytů po prarodičích, vil, půd i sklepů. Pošlete fotky, do 24 hodin máte nabídku a my si pro věci přijedeme.',
    local: {
      title: 'Pražské byty skrývají poklady',
      text: 'Činžovní domy na Vinohradech, vily v Dejvicích nebo Bubenči i paneláky ze 70. let — každá pražská domácnost má jiný příběh. Často vykupujeme starožitný nábytek, obrazy, lustry, broušené sklo a design z období socialismu, který dnes zažívá velký návrat.',
    },
    districts: ['Vinohrady', 'Žižkov', 'Smíchov', 'Dejvice', 'Holešovice', 'Karlín', 'Nusle', 'Libeň', 'Strašnice', 'Chodov', 'Modřany', 'Stodůlky'],
    surroundings: ['Praha-východ', 'Praha-západ', 'Říčany', 'Černošice', 'Beroun', 'Kladno', 'Mělník', 'Benešov'],
    highlights: ['Starožitný nábytek', 'Obrazy a grafiky', 'Lustry', 'Retro design 60.–80. let'],
    faq: [
      {
        q: 'Přijedete do kterékoliv části Prahy?',
        a: 'Ano, vykupujeme ve všech pražských městských částech i v okolí — Praha-východ, Praha-západ, Kladno, Beroun a další.',
      },
      {
        q: 'Vyklízíte i byty a pozůstalosti v Praze?',
        a: 'Ano. Podíváme se na celý byt, půdu nebo sklep a nabídneme cenu za vše hodnotné.',
      },
    ],
  },
  {
    slug: 'brno',
    name: 'Brno',
    locative: 'v Brně',
    genitive: 'z Brna',
    region: 'Jihomoravský kraj',
    lat: 49.1951,
    lon: 16.6068,
    intro:
      'Výkup starožitností v Brně a okolí rychle a férově. Stačí pár fotek — ocenění pošleme do 24 hodin a pro předměty si přijedeme kamkoliv v Brně.',
    local: {
      title: 'Brno — město funkcionalismu',
      text: 'Brno je proslulé funkcionalistickou architekturou a moravskou tradicí ohýbaného nábytku. Rádi vykoupíme thonetky, funkcionalistické kusy, chromový nábytek, keramiku i obrazy moravských autorů.',
    },
    districts: ['Královo Pole', 'Žabovřesky', 'Černá Pole', 'Líšeň', 'Bystrc', 'Řečkovice', 'Komín', 'Židenice', 'Bohunice', 'Lesná'],
    surroundings: ['Kuřim', 'Tišnov', 'Blansko', 'Vyškov', 'Šlapanice', 'Rosice', 'Židlochovice', 'Hustopeče'],
    highlights: ['Ohýbaný nábytek (Thonet)', 'Funkcionalismus', 'Keramika', 'Obrazy'],
    faq: [
      {
        q: 'Vykupujete i v okolí Brna?',
        a: 'Ano — Kuřim, Tišnov, Blansko, Vyškov, Šlapanice, Rosice a celý Jihomoravský kraj.',
      },
      {
        q: 'Vykupujete ohýbaný nábytek Thonet?',
        a: 'Ano, thonetky a ohýbaný nábytek vykupujeme rádi, i poškozené kusy. Pošlete fotku včetně spodní strany se značkou.',
      },
    ],
  },
  {
    slug: 'ostrava',
    name: 'Ostrava',
    locative: 'v Ostravě',
    genitive: 'z Ostravy',
    region: 'Moravskoslezský kraj',
    lat: 49.8209,
    lon: 18.2625,
    intro:
      'Výkup starožitností a retro předmětů v Ostravě a celém Moravskoslezském kraji. Ocenění z fotek do 24 hodin, vyzvednutí u vás doma a platba ihned.',
    local: {
      title: 'Hornická a průmyslová tradice',
      text: 'Ostrava žije průmyslovou historií. Vedle klasických starožitností rádi vykoupíme hornické a hutnické předměty, odznaky, militaria, retro elektroniku a nábytek ze sorely i z pozdějších desetiletí.',
    },
    districts: ['Moravská Ostrava', 'Poruba', 'Zábřeh', 'Vítkovice', 'Mariánské Hory', 'Hrabůvka', 'Slezská Ostrava', 'Přívoz', 'Dubina'],
    surroundings: ['Havířov', 'Karviná', 'Frýdek-Místek', 'Opava', 'Orlová', 'Bohumín', 'Nový Jičín', 'Kopřivnice'],
    highlights: ['Hornické předměty', 'Militaria a odznaky', 'Retro elektronika', 'Nábytek'],
    faq: [
      {
        q: 'Jezdíte i do Havířova, Karviné nebo Frýdku-Místku?',
        a: 'Ano, vykupujeme v celém Moravskoslezském kraji včetně Opavy, Bohumína, Nového Jičína a Kopřivnice.',
      },
      {
        q: 'Vykupujete hornické a hutnické předměty?',
        a: 'Ano — kahany, uniformy, odznaky, plakety a další sběratelské předměty spojené s hornictvím a hutnictvím.',
      },
    ],
  },
  {
    slug: 'plzen',
    name: 'Plzeň',
    locative: 'v Plzni',
    genitive: 'z Plzně',
    region: 'Plzeňský kraj',
    lat: 49.7384,
    lon: 13.3736,
    intro:
      'Výkup starožitností v Plzni a okolí. Pošlete fotky předmětů, do 24 hodin dostanete férovou nabídku a my si vše vyzvedneme.',
    local: {
      title: 'Pivo, Škodovka a Chodsko',
      text: 'Plzeňsko má bohatou pivovarskou a strojírenskou tradici. Vykupujeme pivní sklo, půllitry a reklamní předměty, věci spojené se Škodovkou i lidovou keramiku z Chodska a Šumavy.',
    },
    districts: ['Slovany', 'Bory', 'Doubravka', 'Lochotín', 'Bolevec', 'Skvrňany', 'Doudlevce', 'Košutka', 'Vinice'],
    surroundings: ['Rokycany', 'Nýřany', 'Přeštice', 'Stod', 'Klatovy', 'Domažlice', 'Tachov', 'Stříbro'],
    highlights: ['Pivní sklo a reklama', 'Lidová keramika', 'Nábytek', 'Hodiny'],
    faq: [
      {
        q: 'Přijedete i na Klatovsko nebo Domažlicko?',
        a: 'Ano, vykupujeme v celém Plzeňském kraji — Rokycany, Klatovy, Domažlice, Tachov a okolí.',
      },
      {
        q: 'Mají cenu staré pivní půllitry a tácky?',
        a: 'Často ano, hlavně starší kusy se značkou pivovaru. Pošlete fotky a ocenění dostanete do 24 hodin.',
      },
    ],
  },
  {
    slug: 'liberec',
    name: 'Liberec',
    locative: 'v Liberci',
    genitive: 'z Liberce',
    region: 'Liberecký kraj',
    lat: 50.7663,
    lon: 15.0543,
    intro:
      'Vykupujeme starožitnosti v Liberci, Jablonci a celém Libereckém kraji. Rychlé ocenění z fotek, férová cena a vyzvednutí u vás.',
    local: {
      title: 'Kraj skla a bižuterie',
      text: 'Severní Čechy jsou proslulé sklářstvím a bižuterií. Rádi vykoupíme sklo z Železného Brodu a okolí, jabloneckou bižuterii, šperky s českými granáty z Turnovska, lustry i starožitný nábytek.',
    },
    districts: ['Centrum', 'Ruprechtice', 'Vratislavice nad Nisou', 'Rochlice', 'Starý Harcov', 'Kristiánov', 'Horní Růžodol', 'Vesec'],
    surroundings: ['Jablonec nad Nisou', 'Turnov', 'Železný Brod', 'Frýdlant', 'Chrastava', 'Hrádek nad Nisou', 'Semily', 'Česká Lípa'],
    highlights: ['Sklo a lustry', 'Bižuterie', 'Granátové šperky', 'Nábytek'],
    faq: [
      {
        q: 'Vykupujete i v Jablonci nad Nisou a Turnově?',
        a: 'Ano, celý Liberecký kraj — Jablonec, Turnov, Železný Brod, Frýdlant, Semily i Českou Lípu.',
      },
      {
        q: 'Vykupujete starou bižuterii a sklo?',
        a: 'Ano. Jablonecká bižuterie, broušené a malované sklo i lustry patří mezi předměty, které vykupujeme nejčastěji.',
      },
    ],
  },
  {
    slug: 'olomouc',
    name: 'Olomouc',
    locative: 'v Olomouci',
    genitive: 'z Olomouce',
    region: 'Olomoucký kraj',
    lat: 49.5938,
    lon: 17.2509,
    intro:
      'Výkup starožitností v Olomouci a na celé Hané. Fotky stačí poslat přes formulář — nabídku máte do 24 hodin a pro věci si přijedeme.',
    local: {
      title: 'Hanácká metropole a bývalá pevnost',
      text: 'Olomouc byla po staletí pevnostním a posádkovým městem a centrem Hané. Vykupujeme militaria, uniformy a vyznamenání, lidové kroje a výšivky, starožitný nábytek, obrazy i hodiny.',
    },
    districts: ['Centrum', 'Nová Ulice', 'Neředín', 'Hodolany', 'Holice', 'Nové Sady', 'Lazce', 'Chválkovice', 'Řepčín'],
    surroundings: ['Prostějov', 'Přerov', 'Šternberk', 'Litovel', 'Uničov', 'Hranice', 'Mohelnice', 'Šumperk'],
    highlights: ['Militaria', 'Kroje a výšivky', 'Nábytek', 'Hodiny'],
    faq: [
      {
        q: 'Vykupujete i v Prostějově a Přerově?',
        a: 'Ano, vykupujeme v celém Olomouckém kraji — Prostějov, Přerov, Šternberk, Litovel, Šumperk a okolí.',
      },
      {
        q: 'Vykupujete militaria a vyznamenání?',
        a: 'Ano — helmy, bodáky, šavle, uniformy, vyznamenání i dalekohledy. Pošlete fotky z více stran.',
      },
    ],
  },
];

export const cityUrl = (c: City) => `/vykup-starozitnosti-${c.slug}`;
