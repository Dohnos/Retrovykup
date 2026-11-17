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
      'Vykupujeme starožitnosti a retro předměty v celé Praze — z bytů po prarodičích, vil, půd i sklepů. Pošlete fotky a obratem máte nabídku. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
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
      'Výkup starožitností v Brně a okolí rychle a férově. Stačí pár fotek a obratem máte ocenění. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
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
      'Výkup starožitností a retro předmětů v Ostravě a celém Moravskoslezském kraji. Rychlé ocenění z fotek a platba ihned. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
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
      'Výkup starožitností v Plzni a okolí. Pošlete fotky předmětů a obratem dostanete férovou nabídku. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
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
        a: 'Často ano, hlavně starší kusy se značkou pivovaru. Pošlete fotky a ocenění dostanete obratem.',
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
      'Výkup starožitností v Olomouci a na celé Hané. Fotky stačí poslat přes formulář a nabídku máte obratem. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
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
  {
    slug: 'ceske-budejovice',
    name: 'České Budějovice',
    locative: 'v Českých Budějovicích',
    genitive: 'z Českých Budějovic',
    region: 'Jihočeský kraj',
    lat: 48.9745,
    lon: 14.4743,
    intro:
      'Výkup starožitností v Českých Budějovicích a celých jižních Čechách. Pošlete fotky a nabídku máte obratem. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Jihočeská tradice',
      text: 'Budějovice proslavilo pivovarnictví i výroba psacích potřeb. Rádi vykoupíme pivní sklo a reklamní předměty, staré tužky a pastelky v plechových krabičkách, selský a malovaný nábytek z jihočeských vesnic i obrazy krajinářů.',
    },
    districts: ['Centrum', 'Suché Vrbné', 'Rožnov', 'Mladé', 'Nové Vráto', 'Čtyři Dvory', 'Pražské předměstí', 'Nemanice'],
    surroundings: ['Hluboká nad Vltavou', 'Český Krumlov', 'Týn nad Vltavou', 'Trhové Sviny', 'Třeboň', 'Tábor', 'Písek', 'Prachatice'],
    highlights: ['Selský nábytek', 'Pivní sklo', 'Psací potřeby', 'Obrazy'],
    faq: [
      { q: 'Jezdíte i do Českého Krumlova, Tábora nebo Písku?', a: 'Ano, vykupujeme v celém Jihočeském kraji — Hluboká, Český Krumlov, Třeboň, Tábor, Písek, Prachatice a okolí.' },
      { q: 'Vykupujete malovaný selský nábytek?', a: 'Ano — truhly, skříně, postele i židle. I kusy, které potřebují renovaci. Pošlete fotky z více stran.' },
    ],
  },
  {
    slug: 'hradec-kralove',
    name: 'Hradec Králové',
    locative: 'v Hradci Králové',
    genitive: 'z Hradce Králové',
    region: 'Královéhradecký kraj',
    lat: 50.2092,
    lon: 15.8328,
    intro:
      'Výkup starožitností v Hradci Králové a okolí. Rychlé ocenění z fotek a platba hned na místě. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Salon republiky',
      text: 'Hradec Králové je známý prvorepublikovou architekturou a hudební tradicí. Vykupujeme prvorepublikový a funkcionalistický nábytek, hudební nástroje, militaria spojená s bitvou roku 1866, obrazy i hodiny.',
    },
    districts: ['Centrum', 'Moravské Předměstí', 'Pražské Předměstí', 'Slezské Předměstí', 'Nový Hradec Králové', 'Kukleny', 'Malšovice', 'Plotiště'],
    surroundings: ['Jaroměř', 'Dvůr Králové nad Labem', 'Třebechovice pod Orebem', 'Nechanice', 'Smiřice', 'Nový Bydžov', 'Hořice', 'Jičín'],
    highlights: ['Prvorepublikový nábytek', 'Hudební nástroje', 'Militaria', 'Hodiny'],
    faq: [
      { q: 'Vykupujete i v Jaroměři, Dvoře Králové nebo Jičíně?', a: 'Ano, celý Královéhradecký kraj včetně Jaroměře, Dvora Králové, Hořic, Nového Bydžova a Jičína.' },
      { q: 'Vykupujete staré hudební nástroje?', a: 'Ano — housle, harmoniky, dechové nástroje i gramofony. Pošlete fotky včetně štítků a značek.' },
    ],
  },
  {
    slug: 'usti-nad-labem',
    name: 'Ústí nad Labem',
    locative: 'v Ústí nad Labem',
    genitive: 'z Ústí nad Labem',
    region: 'Ústecký kraj',
    lat: 50.6607,
    lon: 14.0323,
    intro:
      'Vykupujeme starožitnosti v Ústí nad Labem a celém Ústeckém kraji. Fotky stačí poslat přes formulář a nabídku máte obratem. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Severní Čechy plné příběhů',
      text: 'Severní Čechy mají bohatou průmyslovou a měšťanskou historii. Často vykupujeme porcelán, sklo, nábytek z vil a činžovních domů, hodiny, obrazy i retro předměty z období průmyslového rozmachu.',
    },
    districts: ['Centrum', 'Střekov', 'Severní Terasa', 'Klíše', 'Krásné Březno', 'Neštěmice', 'Vaňov', 'Bukov'],
    surroundings: ['Teplice', 'Děčín', 'Litoměřice', 'Lovosice', 'Trmice', 'Chabařovice', 'Chlumec', 'Most'],
    highlights: ['Porcelán', 'Sklo', 'Nábytek', 'Hodiny'],
    faq: [
      { q: 'Přijedete i do Teplic, Děčína nebo Litoměřic?', a: 'Ano, vykupujeme v celém Ústeckém kraji — Teplice, Děčín, Litoměřice, Lovosice, Most a okolí.' },
      { q: 'Vykupujete starý porcelán?', a: 'Ano — servisy, figurky, vázy i jednotlivé kusy. Pošlete fotku spodní strany se značkou, pomůže to s oceněním.' },
    ],
  },
  {
    slug: 'pardubice',
    name: 'Pardubice',
    locative: 'v Pardubicích',
    genitive: 'z Pardubic',
    region: 'Pardubický kraj',
    lat: 50.0343,
    lon: 15.7812,
    intro:
      'Výkup starožitností v Pardubicích a okolí — rychle, férově a diskrétně. Pošlete fotky a obratem máte nabídku. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Město perníku a dostihů',
      text: 'Pardubice mají silnou průmyslovou i jezdeckou tradici. Vykupujeme retro elektroniku — rádia, gramofony, magnetofony — jezdecké a dostihové předměty, nábytek, obrazy i militaria.',
    },
    districts: ['Centrum', 'Polabiny', 'Dukla', 'Zelené Předměstí', 'Bílé Předměstí', 'Svítkov', 'Rosice', 'Studánka'],
    surroundings: ['Chrudim', 'Přelouč', 'Lázně Bohdaneč', 'Holice', 'Sezemice', 'Heřmanův Městec', 'Vysoké Mýto', 'Choceň'],
    highlights: ['Retro elektronika', 'Jezdecké předměty', 'Nábytek', 'Militaria'],
    faq: [
      { q: 'Vykupujete i v Chrudimi a Přelouči?', a: 'Ano, celý Pardubický kraj — Chrudim, Přelouč, Holice, Vysoké Mýto, Choceň a okolí.' },
      { q: 'Má cenu stará elektronika (rádia, gramofony)?', a: 'Často ano, hlavně funkční nebo kompletní kusy. Pošlete fotky zepředu i zezadu se štítkem.' },
    ],
  },
  {
    slug: 'zlin',
    name: 'Zlín',
    locative: 've Zlíně',
    genitive: 'ze Zlína',
    region: 'Zlínský kraj',
    lat: 49.2265,
    lon: 17.6707,
    intro:
      'Výkup starožitností ve Zlíně a celém Zlínském kraji. Rychlé ocenění z fotek a platba ihned. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Baťovo funkcionalistické město',
      text: 'Zlín je symbolem baťovské éry a funkcionalismu a kraj má i tradici ohýbaného nábytku. Vykupujeme předměty z baťovského období, funkcionalistický a ohýbaný nábytek, lidové umění ze Slovácka a Valašska i obrazy.',
    },
    districts: ['Centrum', 'Jižní Svahy', 'Malenovice', 'Prštné', 'Louky', 'Kudlov', 'Příluky', 'Štípa'],
    surroundings: ['Otrokovice', 'Vizovice', 'Napajedla', 'Fryšták', 'Luhačovice', 'Holešov', 'Kroměříž', 'Uherské Hradiště'],
    highlights: ['Baťovská éra', 'Ohýbaný nábytek', 'Funkcionalismus', 'Lidové umění'],
    faq: [
      { q: 'Jezdíte i do Kroměříže a Uherského Hradiště?', a: 'Ano, vykupujeme v celém Zlínském kraji — Otrokovice, Vizovice, Luhačovice, Holešov, Kroměříž, Uherské Hradiště a okolí.' },
      { q: 'Vykupujete předměty z baťovské éry?', a: 'Ano — reklamní předměty, nábytek, fotografie, dokumenty i další sběratelské kusy spojené s firmou Baťa.' },
    ],
  },
  {
    slug: 'jihlava',
    name: 'Jihlava',
    locative: 'v Jihlavě',
    genitive: 'z Jihlavy',
    region: 'Kraj Vysočina',
    lat: 49.3961,
    lon: 15.5912,
    intro:
      'Výkup starožitností v Jihlavě a na celé Vysočině. Pošlete fotky a nabídku máte obratem. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Stříbrné město Vysočiny',
      text: 'Jihlava vyrostla na těžbě stříbra a Vysočina je krajem skla a venkovských statků. Vykupujeme selský nábytek, broušené sklo, hodiny, obrazy, staré nářadí i předměty z chalup a půd.',
    },
    districts: ['Centrum', 'Horní Kosov', 'Pávov', 'Bedřichov', 'Staré Hory', 'Hruškové Dvory', 'Helenín', 'Heroltice'],
    surroundings: ['Třebíč', 'Havlíčkův Brod', 'Pelhřimov', 'Žďár nad Sázavou', 'Telč', 'Polná', 'Humpolec', 'Velké Meziříčí'],
    highlights: ['Selský nábytek', 'Broušené sklo', 'Hodiny', 'Věci z chalup'],
    faq: [
      { q: 'Vykupujete i v Třebíči, Havlíčkově Brodě a Žďáru?', a: 'Ano, celý Kraj Vysočina — Třebíč, Havlíčkův Brod, Pelhřimov, Žďár nad Sázavou, Telč a okolí.' },
      { q: 'Vyklízíte i chalupy a půdy?', a: 'Ano. Podíváme se na celou chalupu nebo půdu a nabídneme cenu za vše, co má hodnotu.' },
    ],
  },
  {
    slug: 'karlovy-vary',
    name: 'Karlovy Vary',
    locative: 'v Karlových Varech',
    genitive: 'z Karlových Varů',
    region: 'Karlovarský kraj',
    lat: 50.2319,
    lon: 12.8711,
    intro:
      'Výkup starožitností v Karlových Varech a celém Karlovarském kraji. Rychlé ocenění z fotek a platba na místě. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Lázně, sklo a porcelán',
      text: 'Karlovarsko je proslulé sklem, porcelánem a lázeňskou tradicí. Rádi vykoupíme sklo a porcelán z místních výroben, lázeňské pohárky, lázeňské suvenýry, starožitný nábytek i obrazy.',
    },
    districts: ['Centrum', 'Drahovice', 'Rybáře', 'Stará Role', 'Doubí', 'Bohatice', 'Tuhnice', 'Dvory'],
    surroundings: ['Ostrov', 'Nejdek', 'Chodov', 'Sokolov', 'Loket', 'Cheb', 'Mariánské Lázně', 'Františkovy Lázně'],
    highlights: ['Sklo', 'Porcelán', 'Lázeňské pohárky', 'Nábytek'],
    faq: [
      { q: 'Přijedete i do Chebu, Sokolova nebo Mariánských Lázní?', a: 'Ano, vykupujeme v celém Karlovarském kraji — Ostrov, Sokolov, Loket, Cheb, Mariánské i Františkovy Lázně.' },
      { q: 'Vykupujete karlovarské sklo a porcelán?', a: 'Ano. Pošlete fotky včetně značek na dně — u skla a porcelánu výrazně pomáhají s oceněním.' },
    ],
  },
  {
    slug: 'kladno',
    name: 'Kladno',
    locative: 'na Kladně',
    genitive: 'z Kladna',
    region: 'Středočeský kraj',
    lat: 50.1473,
    lon: 14.1029,
    intro:
      'Výkup starožitností na Kladně a v okolí. Pošlete fotky a nabídku máte obratem. Přijedeme si pro věci, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
    local: {
      title: 'Hornické a hutnické Kladno',
      text: 'Kladno má za sebou dlouhou historii dolů a oceláren. Vedle běžných starožitností rádi vykoupíme hornické a hutnické předměty, odznaky, militaria, retro nábytek a vybavení domácností z 50.–80. let.',
    },
    districts: ['Centrum', 'Kročehlavy', 'Rozdělov', 'Švermov', 'Dubí', 'Vrapice', 'Motyčín', 'Ostrovec'],
    surroundings: ['Slaný', 'Unhošť', 'Buštěhrad', 'Stochov', 'Velvary', 'Kralupy nad Vltavou', 'Rakovník', 'Beroun'],
    highlights: ['Hornické předměty', 'Odznaky', 'Retro nábytek', 'Militaria'],
    faq: [
      { q: 'Vykupujete i ve Slaném, Rakovníku a Kralupech?', a: 'Ano — celé Kladensko a okolí: Slaný, Unhošť, Stochov, Kralupy nad Vltavou, Rakovník i Beroun.' },
      { q: 'Mají hodnotu hornické odznaky a předměty?', a: 'Často ano. Pošlete fotky a ocenění dostanete obratem.' },
    ],
  },
  {
    slug: 'opava',
    name: 'Opava',
    locative: 'v Opavě',
    genitive: 'z Opavy',
    region: 'Moravskoslezský kraj',
    lat: 49.9387,
    lon: 17.9026,
    intro:
      'Výkup starožitností v Opavě, na Hlučínsku a v celém okolí. Rychlé ocenění z fotek, férová cena a vyzvednutí u vás.',
    local: {
      title: 'Historická metropole Slezska',
      text: 'Opava je historickým centrem českého Slezska s bohatou měšťanskou tradicí. Vykupujeme starožitný nábytek, porcelán a sklo, obrazy, hodiny i militaria a vojenské předměty.',
    },
    districts: ['Centrum', 'Kateřinky', 'Kylešovice', 'Jaktař', 'Komárov', 'Vávrovice', 'Malé Hoštice', 'Suché Lazce'],
    surroundings: ['Hlučín', 'Kravaře', 'Hradec nad Moravicí', 'Dolní Benešov', 'Vítkov', 'Bílovec', 'Krnov', 'Budišov nad Budišovkou'],
    highlights: ['Militaria', 'Porcelán a sklo', 'Nábytek', 'Hodiny'],
    faq: [
      { q: 'Jezdíte i na Hlučínsko a do Krnova?', a: 'Ano — Hlučín, Kravaře, Hradec nad Moravicí, Vítkov, Bílovec, Krnov a celé okolí Opavy.' },
      { q: 'Vykupujete militaria?', a: 'Ano — helmy, bodáky, uniformy, vyznamenání i dalekohledy. Pošlete fotky z více stran.' },
    ],
  },
];

export const cityUrl = (c: City) => `/vykup-starozitnosti-${c.slug}`;
