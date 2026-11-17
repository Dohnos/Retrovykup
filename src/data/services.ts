/** Specializované služby — každá má vlastní SEO podstránku. */
export interface Service {
  slug: string;
  /** Krátký název do menu/patičky */
  name: string;
  /** Krátký popis do karet odkazů */
  short: string;
  seoTitle: string;
  seoDesc: string;
  eyebrow: string;
  /** Řádky H1, text v _podtržítkách_ = zvýraznění */
  lines: string[];
  intro: string;
  quickLabel: string;
  items: { icon: string; title: string; text: string }[];
  itemsTitle: string;
  steps: { icon: string; title: string; text: string }[];
  info: { icon: string; title: string; points: string[] };
  faq: { q: string; a: string }[];
  cta: { title: string; text: string };
  /** Zobrazit přehled puncovních značek */
  hallmarks?: 'zlato' | 'stribro';
}

export const services: Service[] = [
  {
    slug: 'vykup-zlata',
    name: 'Výkup zlata',
    short: 'Zlaté šperky, mince, slitky i zubní zlato. Cena podle ryzosti a kurzu.',
    seoTitle: 'Výkup zlata – šperky, mince, slitky | Retrovykup',
    seoDesc:
      'Výkup zlata po celé ČR: zlaté šperky, řetízky, prsteny, mince, slitky i zubní zlato. Férová cena podle ryzosti a aktuálního kurzu, platba ihned.',
    eyebrow: 'Výkup zlata po celé ČR',
    lines: ['Výkup', 'zlata', '_férově._'],
    intro:
      'Vykupujeme zlaté šperky, mince, slitky i poškozené a zubní zlato. Cenu určujeme podle ryzosti (punc), hmotnosti a aktuální ceny zlata — transparentně a bez skrytých poplatků.',
    quickLabel: 'zlata',
    itemsTitle: 'Jaké zlato vykupujeme',
    items: [
      { icon: 'gem', title: 'Zlaté šperky', text: 'Prsteny, řetízky, náramky, náušnice, přívěsky — i poškozené nebo bez kamenů.' },
      { icon: 'coins', title: 'Mince a medaile', text: 'Investiční i sběratelské zlaté mince, dukáty a medaile.' },
      { icon: 'landmark', title: 'Slitky a cihličky', text: 'Investiční zlato různých gramáží, i bez certifikátu.' },
      { icon: 'clock-3', title: 'Zlaté hodinky', text: 'Pouzdra, řemínky a celé hodinky ze zlata.' },
      { icon: 'crown', title: 'Starožitné šperky', text: 'Šperky s historickou hodnotou oceníme víc než jen podle váhy kovu.' },
      { icon: 'sparkles', title: 'Zubní a lomové zlato', text: 'Zubní zlato, ulomené kousky, samostatné články řetízků.' },
    ],
    steps: [
      { icon: 'camera', title: 'Vyfoťte a zvažte', text: 'Pošlete fotky, ideálně i detail puncu a přibližnou hmotnost.' },
      { icon: 'scale', title: 'Předběžná cena', text: 'Podle ryzosti a aktuálního kurzu vám pošleme nabídku obratem.' },
      { icon: 'badge-check', title: 'Ověření', text: 'Při předání zlato převážíme a ověříme ryzost.' },
      { icon: 'banknote', title: 'Platba ihned', text: 'Hotově, nebo převodem na účet — ihned po ověření.' },
    ],
    info: {
      icon: 'stamp',
      title: 'Jak poznat zlato',
      points: [
        'Hledejte punc — malou značku na zapínání, vnitřní straně prstenu nebo očku řetízku.',
        'Ryzost se uvádí v tisícinách: 585 = 14karátové zlato, 750 = 18karátové, 999 = ryzí. Přehled značek níže.',
        'Vyfoťte punc zblízka a přidejte hmotnost v gramech — nabídka pak bude přesnější.',
        'Při výkupu zlata je ze zákona potřeba doklad totožnosti prodávajícího.',
      ],
    },
    faq: [
      {
        q: 'Jak určujete výkupní cenu zlata?',
        a: 'Podle hmotnosti, ryzosti (punce) a aktuální ceny zlata. U starožitných a designových šperků zohledňujeme i jejich sběratelskou hodnotu.',
      },
      {
        q: 'Vykupujete i poškozené šperky nebo zubní zlato?',
        a: 'Ano. Zlomené řetízky, samotné náušnice, šperky bez kamenů i zubní zlato vykupujeme podle obsahu zlata.',
      },
      {
        q: 'Potřebuji k výkupu zlata doklad?',
        a: 'Ano, při výkupu zlata je ze zákona potřeba ověřit totožnost prodávajícího — stačí občanský průkaz.',
      },
      {
        q: 'Jak poznám, jestli má šperk punc?',
        a: 'Český státní punc je malá značka se zvířecí hlavou (orel, kohout nebo labuť) a číslem ryzosti. Přehled najdete výše na této stránce, kompletní seznam platných i starších značek má Puncovní úřad na punc.gov.cz.',
      },
      {
        q: 'Musím zlato posílat poštou?',
        a: 'Nemusíte. U zlata a cenných předmětů preferujeme osobní předání — přijedeme za vámi.',
      },
    ],
    cta: { title: 'Máte doma zlato?', text: 'Pošlete fotky a detail puncu — obratem víte, kolik za něj dostanete.' },
    hallmarks: 'zlato',
  },
  {
    slug: 'vykup-stribra',
    name: 'Výkup stříbra',
    short: 'Stříbrné příbory, mince, šperky, podnosy i slitky. Cena podle ryzosti a váhy.',
    seoTitle: 'Výkup stříbra – příbory, mince, šperky | Retrovykup',
    seoDesc:
      'Výkup stříbra po celé ČR: stříbrné příbory, podnosy, mince, šperky, svícny i slitky. Férová cena podle ryzosti a váhy, rychlé ocenění, platba ihned.',
    eyebrow: 'Výkup stříbra po celé ČR',
    lines: ['Výkup', 'stříbra', '_férově._'],
    intro:
      'Vykupujeme stříbrné příbory, nádobí, mince, šperky i slitky. Cenu určujeme podle ryzosti (punc), hmotnosti a aktuální ceny stříbra — u starožitností i podle sběratelské hodnoty.',
    quickLabel: 'stříbra',
    itemsTitle: 'Jaké stříbro vykupujeme',
    items: [
      { icon: 'utensils', title: 'Příbory a soupravy', text: 'Celé jídelní soupravy i jednotlivé lžíce, vidličky, nože a naběračky.' },
      { icon: 'coffee', title: 'Nádobí a podnosy', text: 'Podnosy, konvice, cukřenky, poháry, tácky a misky.' },
      { icon: 'coins', title: 'Mince a medaile', text: 'Historické i investiční stříbrné mince, pamětní medaile.' },
      { icon: 'gem', title: 'Šperky', text: 'Prsteny, řetízky, náramky, brože — i poškozené.' },
      { icon: 'flame', title: 'Svícny a dekorace', text: 'Svícny, dózy, rámečky, tabatěrky a další stříbrné předměty.' },
      { icon: 'landmark', title: 'Slitky', text: 'Investiční stříbro v cihličkách a slitcích.' },
    ],
    steps: [
      { icon: 'camera', title: 'Vyfoťte a zvažte', text: 'Pošlete fotky, detail puncu a přibližnou hmotnost.' },
      { icon: 'scale', title: 'Předběžná cena', text: 'Podle ryzosti, váhy a hodnoty předmětu pošleme nabídku obratem.' },
      { icon: 'badge-check', title: 'Ověření', text: 'Při předání stříbro převážíme a ověříme ryzost.' },
      { icon: 'banknote', title: 'Platba ihned', text: 'Hotově, nebo převodem na účet — ihned po ověření.' },
    ],
    info: {
      icon: 'stamp',
      title: 'Jak poznat stříbro',
      points: [
        'Hledejte punc — na příborech bývá na zadní straně rukojeti, na nádobí na dně.',
        'Nejčastější ryzosti: 925 (sterling), 900 a 800 u starších předmětů. Přehled značek níže.',
        'Postříbřené předměty (např. značené Alpaka nebo EPNS) nejsou z ryzího stříbra — i tak je rádi posoudíme.',
        'Při výkupu drahých kovů je ze zákona potřeba doklad totožnosti prodávajícího.',
      ],
    },
    faq: [
      {
        q: 'Jak určujete výkupní cenu stříbra?',
        a: 'Podle hmotnosti, ryzosti (punce) a aktuální ceny stříbra. U starožitných a designových předmětů zohledňujeme i jejich sběratelskou hodnotu.',
      },
      {
        q: 'Vykupujete i neúplné sady příborů?',
        a: 'Ano. Vykupujeme celé soupravy v kazetách i jednotlivé kusy.',
      },
      {
        q: 'Jak poznám, jestli je předmět stříbrný, nebo jen postříbřený?',
        a: 'Stříbrné předměty mají punc s ryzostí (např. 925 nebo 800). Postříbřené bývají značené Alpaka, EPNS nebo nemají punc vůbec. Pošlete fotku značky a poradíme.',
      },
      {
        q: 'Potřebuji k výkupu stříbra doklad?',
        a: 'Ano, při výkupu drahých kovů je ze zákona potřeba ověřit totožnost prodávajícího — stačí občanský průkaz.',
      },
    ],
    cta: { title: 'Máte doma stříbro?', text: 'Pošlete fotky a detail puncu — obratem víte, kolik za něj dostanete.' },
    hallmarks: 'stribro',
  },
  {
    slug: 'vykup-knih',
    name: 'Výkup knih',
    short: 'Staré a vzácné knihy, první vydání, mapy i celé knihovny.',
    seoTitle: 'Výkup starých knih a knihoven | Retrovykup',
    seoDesc:
      'Výkup starých a vzácných knih po celé ČR: první vydání, bibliofilie, knihy s podpisem, staré mapy, rukopisy i celé knihovny. Rychlé ocenění z fotek.',
    eyebrow: 'Výkup knih po celé ČR',
    lines: ['Výkup', 'starých knih', '_i knihoven._'],
    intro:
      'Vykupujeme staré a vzácné knihy, bibliofilie, mapy i celé knihovny po prarodičích. Pošlete fotky hřbetů a titulních stran a obratem máte nabídku.',
    quickLabel: 'knih',
    itemsTitle: 'Jaké knihy vykupujeme',
    items: [
      { icon: 'book-marked', title: 'Staré a vzácné tisky', text: 'Knihy do roku 1950, staré tisky, kalendáře a modlitební knihy.' },
      { icon: 'feather', title: 'Bibliofilie a podpisy', text: 'Číslované náklady, ilustrované edice, knihy s věnováním a podpisem autora.' },
      { icon: 'book-open-text', title: 'První vydání', text: 'Prvovydání českých i světových autorů, zakázané a exilové tituly.' },
      { icon: 'map', title: 'Mapy a atlasy', text: 'Staré mapy, atlasy, plány měst a cestopisy.' },
      { icon: 'newspaper', title: 'Časopisy a tiskoviny', text: 'Staré časopisy, plakáty, pohlednice, dokumenty a rukopisy.' },
      { icon: 'library', title: 'Celé knihovny', text: 'Odkoupíme celou knihovnu najednou — po prarodičích i ze sbírky.' },
    ],
    steps: [
      { icon: 'camera', title: 'Vyfoťte knihy', text: 'Hřbety v knihovně, titulní stranu a tiráž u zajímavých kusů.' },
      { icon: 'search', title: 'Ocenění', text: 'Posoudíme vydání, stav a vzácnost a obratem pošleme nabídku.' },
      { icon: 'truck', title: 'Odvoz zdarma', text: 'Celou knihovnu sbalíme a odvezeme, menší počet můžete poslat.' },
      { icon: 'banknote', title: 'Platba ihned', text: 'Hotově při převzetí, nebo převodem na účet.' },
    ],
    info: {
      icon: 'book-open',
      title: 'Co zvyšuje hodnotu knihy',
      points: [
        'Stáří a vzácnost vydání — první vydání, malé náklady, zakázané tituly.',
        'Podpis nebo věnování autora, ilustrace známých výtvarníků.',
        'Dobrý stav vazby a zachovaná obálka (přebal).',
        'U běžných knih z velkých nákladů vám na rovinu řekneme, pokud nemají výkupní hodnotu.',
      ],
    },
    faq: [
      {
        q: 'Vykupujete i celé knihovny?',
        a: 'Ano. Stačí vyfotit police tak, aby byly čitelné hřbety. Celou knihovnu pak sbalíme a odvezeme na naše náklady.',
      },
      {
        q: 'Jaké knihy nevykupujete?',
        a: 'Většinou nevykupujeme běžné tituly z velkých nákladů, učebnice a výrazně poškozené knihy. Pokud si nejste jistí, pošlete fotku.',
      },
      {
        q: 'Co mám vyfotit pro ocenění?',
        a: 'Hřbety knih, u zajímavých kusů titulní stranu a tiráž (strana s rokem vydání a nákladem). Případně podpis nebo věnování.',
      },
    ],
    cta: { title: 'Máte doma staré knihy?', text: 'Vyfoťte hřbety v knihovně a obratem víte, co má hodnotu.' },
  },
  {
    slug: 'vyklizeni-pozustalosti',
    name: 'Vyklízení pozůstalostí',
    short: 'Byty, domy, chalupy, půdy. Hodnotné věci vykoupíme, zbytek odvezeme.',
    seoTitle: 'Vyklízení pozůstalostí a bytů s výkupem | Retrovykup',
    seoDesc:
      'Vyklízení pozůstalostí, bytů, domů, chalup, půd a sklepů po celé ČR. Hodnotné věci vykoupíme, zbytek odvezeme. Diskrétně, rychle a s férovou cenou.',
    eyebrow: 'Vyklízení po celé ČR',
    lines: ['Vyklízení', 'pozůstalostí', '_s výkupem._'],
    intro:
      'Pomůžeme vám s pozůstalostí citlivě a bez starostí. Prohlédneme byt, dům nebo chalupu, hodnotné věci vykoupíme a zbytek po domluvě vyklidíme a odvezeme.',
    quickLabel: 'pozůstalosti',
    itemsTitle: 'Co vyklízíme',
    items: [
      { icon: 'house', title: 'Byty a domy', text: 'Kompletní vyklizení po prarodičích, před prodejem nebo pronájmem.' },
      { icon: 'key-round', title: 'Chalupy a chaty', text: 'Vyklizení rekreačních objektů včetně půd a kůlen.' },
      { icon: 'boxes', title: 'Půdy a sklepy', text: 'Věci, které roky čekaly na půdě, ve sklepě nebo v garáži.' },
      { icon: 'armchair', title: 'Nábytek a vybavení', text: 'Starožitný i retro nábytek, lustry, obrazy, porcelán a sklo.' },
      { icon: 'library', title: 'Knihovny a sbírky', text: 'Knihy, známky, mince, pohlednice a další sběratelské předměty.' },
      { icon: 'recycle', title: 'Odvoz zbytku', text: 'Věci bez hodnoty po domluvě odvezeme a ekologicky zlikvidujeme.' },
    ],
    steps: [
      { icon: 'camera', title: 'Fotky nebo obhlídka', text: 'Pošlete fotky místností, nebo se domluvíme na prohlídce na místě.' },
      { icon: 'clipboard-check', title: 'Nabídka', text: 'Oceníme hodnotné věci a navrhneme, jak vyklizení proběhne.' },
      { icon: 'truck', title: 'Vyklizení', text: 'V domluvený termín přijedeme, sbalíme, odneseme a odvezeme.' },
      { icon: 'banknote', title: 'Platba', text: 'Za vykoupené věci platíme ihned, hotově nebo převodem.' },
    ],
    info: {
      icon: 'heart-handshake',
      title: 'Diskrétně a s respektem',
      points: [
        'Víme, že jde o citlivou situaci. Pracujeme ohleduplně a nikam nespěcháme.',
        'Osobní věci, fotografie a dokumenty odložíme stranou a předáme vám je.',
        'Nemusíte být na místě — po domluvě stačí předat klíče.',
        'Hodnotu vykoupených věcí můžeme započítat proti ceně vyklizení.',
      ],
    },
    faq: [
      {
        q: 'Kolik vyklizení stojí?',
        a: 'Záleží na rozsahu a na tom, kolik hodnotných věcí vykoupíme. Hodnotu vykoupených věcí můžeme započítat proti ceně vyklizení — přesnou nabídku dostanete po fotkách nebo prohlídce.',
      },
      {
        q: 'Musím být při vyklízení přítomen?',
        a: 'Nemusíte. Po domluvě stačí předat klíče, vše nafotíme a průběžně vás informujeme.',
      },
      {
        q: 'Co se stane s věcmi, které nemají hodnotu?',
        a: 'Po domluvě je odvezeme a ekologicky zlikvidujeme. Osobní dokumenty a fotografie vždy předáme vám.',
      },
      {
        q: 'Vyklízíte i mimo velká města?',
        a: 'Ano, vyklízíme po celé České republice — ve městech i na venkově.',
      },
    ],
    cta: { title: 'Řešíte pozůstalost?', text: 'Pošlete fotky místností nebo zavolejte — domluvíme vše potřebné citlivě a rychle.' },
  },
];

export const serviceUrl = (s: Service) => `/${s.slug}`;
