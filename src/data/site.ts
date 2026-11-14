export const site = {
  name: 'Retrovykup',
  url: 'https://retrovykup.cz',
  phone: '603 538 440',
  phoneHref: 'tel:+420603538440',
  phoneIntl: '+420603538440',
  whatsappHref: 'https://wa.me/420603538440',
  email: 'retrovykup@seznam.cz',
  ogImage: '/og.png',
  ogImageAlt: 'Retrovykup — výkup starožitností po celé ČR: nábytek, lustry, porcelán, hodiny, obrazy, militaria',
  description:
    'Výkup starožitností po celé ČR. Pošlete fotky a do 24 h máte férovou nabídku. Nábytek, obrazy, porcelán, lustry, hodiny, militaria. Platba ihned.',
};

/**
 * 🧾 Správce osobních údajů — DOPLŇTE (GDPR vyžaduje identifikaci správce).
 * Prázdná pole se na webu nezobrazí.
 */
export const operator = {
  name: '', // např. „Jan Novák“ nebo „Retrovykup s.r.o.“
  ico: '', // např. „12345678“
  address: '', // např. „Ulice 1, 110 00 Praha“
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
  { icon: 'clock', title: 'Odpověď do 24 h', text: 'Z fotek vám pošleme nabídku nejpozději do druhého dne.' },
  { icon: 'shield-check', title: 'Diskrétně', text: 'Vaše údaje ani fotky nikde nezveřejňujeme.' },
  { icon: 'truck', title: 'Po celé ČR', text: 'Přijedeme, odneseme, odvezeme. Vy nemusíte nic.' },
];

export const steps = [
  { icon: 'camera', title: 'Vyfoťte', text: 'Pár fotek z mobilu stačí. Vyplnění formuláře zabere minutu.' },
  { icon: 'search', title: 'Ocenění', text: 'Předměty posoudíme a do 24 hodin pošleme férovou nabídku.' },
  { icon: 'truck', title: 'Vyzvednutí', text: 'Domluvíme termín, přijedeme a vše si odneseme sami.' },
  { icon: 'banknote', title: 'Platba ihned', text: 'Hotově na místě, nebo převodem na účet. Jak chcete.' },
];

export const faq = [
  {
    q: 'Jak dlouho trvá ocenění?',
    a: 'Obvykle do 24 hodin od odeslání formuláře. Čím lepší fotky a popis, tím přesnější nabídka.',
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
    q: 'Vykupujete i celé pozůstalosti a vyklízíte byty?',
    a: 'Ano. Rádi se podíváme na celou pozůstalost, půdu, sklep nebo chalupu a domluvíme výkup všeho, co má hodnotu.',
  },
  {
    q: 'Co se stane s mými fotkami a údaji?',
    a: 'Slouží jen k ocenění a domluvě výkupu. Nikde je nezveřejňujeme ani neprodáváme a po 6 měsících je mažeme. Podrobnosti najdete v Zásadách ochrany osobních údajů.',
  },
];
