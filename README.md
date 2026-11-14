# Retrovykup 🕰️

Výkup starožitností po celé ČR — statický web v **Astro** (rychlé načítání a indexace), nasazený na **Vercelu**.

## 🧱 Stack

- ⚡ **Astro** (statický výstup, 0 kB JS kromě formuláře) + **Tailwind CSS v4**
- 🔤 Fonty Inter + Instrument Serif self-hostované (žádné Google Fonts requesty)
- 🎨 Ikony Lucide jako inline SVG (vykreslené při buildu)
- 🔥 Firebase (Firestore + Auth) — leady a admin
- 🖼️ Cloudinary — nahrávání fotek (komprese v prohlížeči)
- ✉️ EmailJS — odpovědi zákazníkům z adminu
- 🗺️ Leaflet + OpenStreetMap — mapa leadů v adminu

## 📁 Stránky

| URL | Obsah |
| --- | --- |
| `/` | Úvod + výkupní formulář |
| `/vykup` | Jak probíhá výkup |
| `/galerie` | Galerie |
| `/vykup-starozitnosti` | Rozcestník měst |
| `/vykup-starozitnosti-{praha,brno,ostrava,plzen,liberec,olomouc}` | Lokální SEO stránky |
| `/admin`, `/admin/mapa` | Admin (noindex) |

`/kalendar-burz` je zrušený → 301 přesměrování na `/vykup-starozitnosti` (viz `vercel.json`).
Nové město přidáte do `src/data/cities.ts` — stránka, sitemapa i odkazy se vygenerují samy.

## 💻 Lokální vývoj

```bash
npm install
cp .env.example .env   # vyplňte hodnoty
npm run dev            # http://localhost:4321
npm run build          # výstup do dist/
```

## 🔐 Proměnné prostředí

Všechny klíče jsou ve **Vercel → Project → Settings → Environment Variables** (seznam viz `.env.example`).
V repozitáři nejsou žádné klíče. Bezpečnostní pravidla Firestore jsou v `firestore.rules`.

## 🎨 Brand

- **Značka:** černý kruh = ciferník (čas, historie) + kurzivní serifové „R“ (Instrument Serif). Komponenta `BrandMark.astro`, data v `src/data/brand.ts`.
- **Logo:** „RETRO“ (Inter, prostrkané) + „vykup“ (Instrument Serif kurzíva), podtitul „Výkup starožitností“.
- **Barvy:** Ink `#0a0a0a` · Paper `#ffffff` · Mist `#f4f4f4` · Line `#e6e6e6` · Muted `#6b6b6b`.
- **Soubory v `public/`:** `favicon.svg` (s tmavým režimem), `favicon.ico`, `apple-touch-icon.png`, `icon-192/512.png`, `icon-maskable-512.png`, `logo.svg`, `og.png` (1200×630 pro sdílení), `site.webmanifest`.

## 🔍 SEO

- Unikátní title (≤ 62 znaků) a description (120–160 znaků) na každé stránce, canonical, Open Graph + Twitter s `og.png`.
- JSON-LD: Organization, WebSite, Service, FAQPage, BreadcrumbList, ItemList.
- `/sitemap.xml` + `robots.txt`; admin a 404 jsou `noindex`.

## 🛡️ GDPR

- Stránka `/ochrana-osobnich-udaju` (+ `/gdpr` přesměrování), odkaz v patičce a u formuláře.
- Formulář má povinný souhlas; do leadu se ukládá `consent`, `consent_version`, `consent_text` a `expireAt`.
- 🧾 **Doplňte správce** (jméno/firma, IČO, adresa) v `src/data/site.ts` → `operator`.
- ⏳ **Automatické mazání:** Firebase Console → Firestore → *Time-to-live (TTL)* → přidat politiku pro kolekci `leads`, pole `expireAt`. Doba se nastavuje v `privacy.retentionDays`.
- 🖼️ Fotky v Cloudinary TTL nemaže — staré složky `retrovykup/vykup_*` je potřeba mazat ručně (nebo přes Cloudinary API).
- Při změně textu souhlasu zvyšte `privacy.version`.

## 📄 Licence

Tento projekt je licencován. Nelze ho používat pro další projekty.
