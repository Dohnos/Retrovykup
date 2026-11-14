/** Zpracovatelé a služby, přes které osobní údaje procházejí. Používá formulář i stránka GDPR. */
export const processors = [
  {
    name: 'Google Firebase (Firestore)',
    company: 'Google Ireland Limited, Irsko',
    what: 'Uložení údajů z formuláře (poptávky) a přihlášení do administrace.',
    transfer: 'Může docházet k předání do USA na základě rámce EU–USA Data Privacy Framework a standardních smluvních doložek.',
    url: 'https://firebase.google.com/support/privacy',
  },
  {
    name: 'Cloudinary',
    company: 'Cloudinary Ltd.',
    what: 'Uložení a zmenšení nahraných fotografií předmětů.',
    transfer: 'Data mohou být uložena mimo EU (USA) na základě standardních smluvních doložek EU.',
    url: 'https://cloudinary.com/privacy',
  },
  {
    name: 'EmailJS',
    company: 'EmailJS Pte. Ltd.',
    what: 'Odeslání e-mailové odpovědi na vaši poptávku (jméno, e-mail, číslo poptávky).',
    transfer: 'Služba provozovaná mimo EU; předání na základě standardních smluvních doložek EU.',
    url: 'https://www.emailjs.com/legal/privacy-policy/',
  },
  {
    name: 'WhatsApp',
    company: 'WhatsApp Ireland Limited (Meta), Irsko',
    what: 'Interní předání souhrnu poptávky (jméno, telefon, lokalita, popis, odkazy na fotky) pracovníkovi výkupu.',
    transfer: 'Může docházet k předání do USA na základě rámce EU–USA Data Privacy Framework.',
    url: 'https://www.whatsapp.com/legal/privacy-policy-eea',
  },
  {
    name: 'OpenStreetMap Nominatim',
    company: 'OpenStreetMap Foundation, Spojené království',
    what: 'Našeptávač adresy v poli „Lokalita“ — odesílá se jen text, který do pole napíšete.',
    transfer: 'Spojené království má rozhodnutí Evropské komise o odpovídající ochraně.',
    url: 'https://osmfoundation.org/wiki/Privacy_Policy',
  },
  {
    name: 'Vercel',
    company: 'Vercel Inc., USA',
    what: 'Hosting webu; technické záznamy o přístupu (IP adresa, prohlížeč) pro provoz a bezpečnost.',
    transfer: 'Předání do USA na základě rámce EU–USA Data Privacy Framework a standardních smluvních doložek.',
    url: 'https://vercel.com/legal/privacy-policy',
  },
];

export const dataCategories = [
  { icon: 'user', title: 'Identifikační a kontaktní údaje', text: 'Jméno, e-mail, telefon.' },
  { icon: 'map-pin', title: 'Lokalita', text: 'Obec nebo adresa, kam pro předměty přijedeme.' },
  { icon: 'image', title: 'Fotografie a popis', text: 'Fotky a popis předmětů, případně požadovaná cena.' },
  { icon: 'file-text', title: 'Záznam o souhlasu', text: 'Datum a čas odeslání, verze souhlasu, stránka, ze které jste formulář odeslali.' },
];
