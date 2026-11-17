export const site = {
  name: 'Retrovykup',
  url: 'https://retrovykup.cz',
  phone: '603 538 440',
  phoneHref: 'tel:+420603538440',
  phoneIntl: '+420603538440',
  whatsappNumber: '420603538440',
  email: 'retrovykup@seznam.cz',
  ogImage: '/og.png',
  ogImageAlt: 'Retrovykup — výkup starožitností po celé ČR: nábytek, lustry, porcelán, hodiny, obrazy, militaria',
  description:
    'Výkup starožitností a retro do roku 1989. Pošlete fotky a obratem máte férovou nabídku. Přijedeme, nebo objednáme dopravu a vy jen zabalíte. Snadno a rychle.',
};

/** 💬 WhatsApp s předvyplněnou zprávou (volitelně s městem) */
export function whatsappLink(city?: string) {
  const text = `Dobrý den, mám zájem o výkup starožitností${city ? ` (${city})` : ''}. Posílám fotky předmětů:`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** ✉️ E-mail s předvyplněným předmětem a osnovou zprávy */
export function emailLink(city?: string) {
  const subject = `Výkup starožitností – poptávka${city ? ` (${city})` : ''}`;
  const body = [
    'Dobrý den,',
    '',
    'rád/a bych nabídl/a k výkupu:',
    '- ',
    '',
    `Lokalita: ${city ?? ''}`,
    'Telefon: ',
    '',
    'Fotky přikládám v příloze.',
    '',
    'Děkuji',
  ].join('\n');
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * 🧾 Správce osobních údajů — DOPLŇTE (GDPR vyžaduje identifikaci správce).
 * Prázdná pole se na webu nezobrazí.
 */
export const operator = {
  name: '', // např. „Jan Novák“ nebo „Retrovykup s.r.o.“
  ico: '', // např. „12345678“
  address: '', // např. „Ulice 1, 110 00 Praha“
  dic: '', // nepovinné, jen plátce DPH, např. „CZ12345678“
  register: '', // např. „Fyzická osoba zapsaná v živnostenském rejstříku“ nebo „Zapsáno v OR u Městského soudu v Praze, oddíl C, vložka 12345“
};

/** 🔐 Ochrana osobních údajů — verze souhlasu a doba uložení */
export const privacy = {
  url: '/ochrana-osobnich-udaju',
  version: '2026-11-14',
  updated: '14. 11. 2026',
  /** Po této době se lead automaticky smaže (po zapnutí TTL ve Firestore, viz README) */
  retentionDays: 180,
  retentionText: '6 měsíců',
};

/** 🚚 Doprava — vždy na naše náklady */
export const shipping = {
  title: 'Doprava je na nás',
  text: 'Buď si pro předměty přijedeme osobně, nebo objednáme dopravu podle vašich preferencí. Dopravu platíme my — vy nic neplatíte.',
  options: [
    { icon: 'car', title: 'Osobní odvoz', text: 'Přijedeme, sbalíme a odneseme. Ideální pro nábytek a více kusů.' },
    { icon: 'package', title: 'Zásilkovna', text: 'Menší předměty pošlete z nejbližšího výdejního místa nebo Z-Boxu.' },
    { icon: 'package-check', title: 'Balíkovna', text: 'Podání na poště nebo v Balíkovně, štítek vám pošleme.' },
    { icon: 'container', title: 'TopTrans', text: 'Nadrozměrné a těžké kusy — nábytek, lustry, obrazy.' },
    { icon: 'boxes', title: 'A další', text: 'PPL, DPD a další dopravci podle toho, co vám vyhovuje.' },
  ],
};

/** Hlavní menu — jen to podstatné, zbytek řeší CTA */
export const nav = [
  { href: '/vykup', label: 'Jak to funguje' },
  { href: '/#faq', label: 'FAQ' },
];

export const categories = [
  { icon: 'armchair', title: 'Dřevěný nábytek', text: 'Křesla, komody, psací stoly, kredence, skříně, židle a další.' },
  { icon: 'sofa', title: 'Retro & chrom', text: 'Psací stoly, křesla, židle, květinové stěny, design 50.–80. let.' },
  { icon: 'lamp-ceiling', title: 'Lustry a osvětlení', text: 'Lustry, lampičky, stojací lampy a jiné staré osvětlení.' },
  { icon: 'wine', title: 'Sklo a porcelán', text: 'Broušené sklo, figurky, servisy, vázy. Těšíme se na fotky.' },
  { icon: 'palette', title: 'Obrazy', text: 'Známí i neznámí autoři, oleje, grafiky, akvarely.' },
  { icon: 'puzzle', title: 'Hračky', text: 'Autíčka na bowden, vláčky, panenky, stolní hry a další.' },
  { icon: 'medal', title: 'Militaria', text: 'Helmy, bodáky, šavle, uniformy, vyznamenání, dalekohledy.' },
  { icon: 'package', title: 'Ostatní předměty', text: 'Pošlete cokoliv do roku 1989 — vykupujeme široké spektrum.' },
];

export const benefits = [
  { icon: 'hand-coins', title: 'Férové ocenění', text: 'Nabídneme nejlepší možnou cenu podle aktuálního trhu.' },
  { icon: 'zap', title: 'Rychlá odpověď', text: 'Z fotek vám obratem pošleme férovou nabídku.' },
  { icon: 'shield-check', title: 'Diskrétně', text: 'Vaše údaje ani fotky nikde nezveřejňujeme.' },
  { icon: 'truck', title: 'Doprava zdarma', text: 'Přijedeme osobně, nebo objednáme dopravu. Platíme ji my, vy nic.' },
];

export const steps = [
  { icon: 'camera', title: 'Vyfoťte', text: 'Pár fotek z mobilu stačí. Vyplnění formuláře zabere minutu.' },
  { icon: 'search', title: 'Ocenění', text: 'Předměty posoudíme a obratem pošleme férovou nabídku.' },
  { icon: 'truck', title: 'Doprava zdarma', text: 'Přijedeme si pro věci, nebo objednáme Zásilkovnu, Balíkovnu či TopTrans. Platíme my.' },
  { icon: 'banknote', title: 'Platba ihned', text: 'Hotově na místě, nebo převodem na účet. Jak chcete.' },
];

export const faq = [
  {
    q: 'Jak dlouho trvá ocenění?',
    a: 'Snažíme se ozvat co nejdříve, obvykle obratem. Čím lepší fotky a popis, tím přesnější nabídka.',
  },
  {
    q: 'Jaké předměty vykupujete?',
    a: 'Starožitnosti a retro předměty zhruba do roku 1989 — nábytek, obrazy, sklo, porcelán, lustry, hračky, militaria a mnoho dalšího. Nejste si jistí? Pošlete fotku.',
  },
  {
    q: 'Jak probíhá platba?',
    a: 'Po odsouhlasení nabídky platíme hotově při převzetí, nebo převodem na váš bankovní účet.',
  },
  {
    q: 'Kdo platí dopravu?',
    a: 'Vždy my. Buď si pro předměty přijedeme osobně, nebo objednáme dopravu — Zásilkovna, Balíkovna, TopTrans a další podle vašich preferencí. Vy nic neplatíte.',
  },
  {
    q: 'Vykupujete i celé pozůstalosti a vyklízíte byty?',
    a: 'Ano. Rádi se podíváme na celou pozůstalost, půdu, sklep nebo chalupu a domluvíme výkup všeho, co má hodnotu.',
  },
  {
    q: 'Co se stane s mými fotkami a údaji?',
    a: 'Slouží jen k ocenění a domluvě výkupu. Nikde je nezveřejňujeme ani neprodáváme a po 6 měsících je mažeme. Podrobnosti najdete v Zásadách ochrany osobních údajů.',
  },
];
