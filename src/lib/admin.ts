/** Sdílená logika pro admin dashboard a mapu leadů. */
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, type Timestamp } from 'firebase/firestore';
import { firebaseConfig, adminWhatsapp, assertEnv } from './env';

if (!assertEnv(firebaseConfig, 'Firebase')) {
  const msg = document.createElement('p');
  msg.className = 'max-w-sm px-6 text-center text-sm';
  msg.textContent = 'Chybí proměnné prostředí Firebase. Nastavte je ve Vercelu (Settings → Environment Variables) a udělejte redeploy.';
  document.getElementById('appLoading')?.replaceChildren(msg);
  throw new Error('Chybí konfigurace Firebase');
}

export const app = getApps()[0] ?? initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export interface Lead {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
  desiredPriceOption?: string;
  fixedPriceAmount?: string;
  photos_count?: number;
  photos_urls?: string[] | string;
  cloudinary_folder?: string;
  vykup_id?: number | string;
  status?: string;
  timestamp?: Timestamp;
  consent?: boolean;
  consent_version?: string;
  expireAt?: Timestamp;
}

export { STATUS_LABELS, STATUS_SHORT } from './admin-labels';

/** Monochromatické odznaky — liší se výplní, rámečkem a stylem. */
export const STATUS_BADGE: Record<string, string> = {
  nova: 'bg-ink text-paper',
  probiha: 'bg-neutral-600 text-paper',
  vyrizeno: 'bg-paper text-ink border border-ink',
  nezajem: 'bg-mist text-neutral-400 line-through',
  ceka: 'bg-neutral-200 text-ink',
  domluveno: 'bg-paper text-ink border border-dashed border-ink',
};

export const badgeClass = (status?: string) => STATUS_BADGE[status ?? ''] ?? 'bg-mist text-ink';

export function formatDate(ts?: Timestamp | Date | string) {
  if (!ts) return '—';
  const d = typeof ts === 'object' && 'toDate' in ts ? ts.toDate() : new Date(ts as string);
  return d.toLocaleDateString('cs-CZ', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function escapeHtml(str: unknown) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function getPhotoUrls(lead: Lead): string[] {
  if (Array.isArray(lead.photos_urls)) return lead.photos_urls.filter(Boolean);
  if (lead.photos_urls) return String(lead.photos_urls).split('\n').filter(Boolean);
  return [];
}

export function buildWhatsappMessage(lead: Lead) {
  const photos = getPhotoUrls(lead);
  const lines = [
    `🕰️ Retrovýkup — poptávka #${lead.vykup_id || '—'}`,
    '',
    `Jméno: ${lead.name || '—'}`,
    `Telefon: ${lead.phone || '—'}`,
    `Umístění: ${lead.location || '—'}`,
    `Poznámka: ${lead.message || '—'}`,
  ];
  if (photos.length) lines.push('', `Fotky (${photos.length}):`, ...photos);
  else if (lead.cloudinary_folder && lead.cloudinary_folder !== 'Bez fotografií') lines.push('', `Fotky: ${lead.cloudinary_folder}`);
  else lines.push('', 'Fotky: bez fotografií');
  return lines.join('\n');
}

export const whatsappHref = (lead: Lead) =>
  `https://wa.me/${adminWhatsapp}?text=${encodeURIComponent(buildWhatsappMessage(lead))}`;

export const WHATSAPP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ============================================================
// KONTAKT KLIENTA — WhatsApp / SMS / e-mail s předvyplněnou zprávou
// ============================================================

export type Decision = 'zajem' | 'nezajem';
export type Channel = 'wa' | 'sms' | 'email';

/** Převede libovolně zadané číslo na mezinárodní tvar bez „+“ (např. 420603538440). */
export function normalizePhone(raw?: string): string {
  if (!raw) return '';
  const trimmed = raw.trim();
  let digits = trimmed.replace(/\D/g, '');
  if (!digits) return '';
  if (trimmed.startsWith('+')) return digits;
  if (digits.startsWith('00')) return digits.slice(2);
  if (digits.length === 9) return `420${digits}`;
  return digits;
}

export const hasEmail = (lead: Lead) => !!lead.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.email.trim());
export const hasPhone = (lead: Lead) => normalizePhone(lead.phone).length >= 6;

function leadDateTime(lead: Lead) {
  const ts = lead.timestamp;
  if (!ts) return { date: '—', time: '—' };
  const d = typeof ts === 'object' && 'toDate' in ts ? ts.toDate() : new Date(ts as unknown as string);
  return {
    date: d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' }),
    time: d.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' }),
  };
}

/** Text zprávy klientovi podle rozhodnutí. */
export function clientMessage(lead: Lead, decision: Decision) {
  const { date, time } = leadDateTime(lead);
  const id = lead.vykup_id ? ` č. ${lead.vykup_id}` : '';
  const intro = `Dobrý den,\nděkujeme za Vaši poptávku${id} ze dne ${date} v ${time}.`;
  const body =
    decision === 'zajem'
      ? 'O Vaše předměty máme zájem. Kdy se Vám hodí krátce zavolat a domluvit cenu, dopravu a platbu?'
      : 'Po posouzení fotografií o předměty bohužel nemáme zájem. Děkujeme za důvěru a přejeme hezký den.';
  const sign = 'S pozdravem\nRetrovykup · 603 538 440 · retrovykup.cz';
  return `${intro}\n\n${body}\n\n${sign}`;
}

/** Odkaz, který otevře WhatsApp / SMS / e-mail s předvyplněnou zprávou. */
export function clientLink(lead: Lead, channel: Channel, decision: Decision) {
  const text = clientMessage(lead, decision);
  const phone = normalizePhone(lead.phone);
  if (channel === 'wa') return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  if (channel === 'sms') return `sms:+${phone}?&body=${encodeURIComponent(text)}`;
  const subject = `Vaše poptávka${lead.vykup_id ? ` č. ${lead.vykup_id}` : ''} – Retrovykup`;
  return `mailto:${(lead.email ?? '').trim().replace(/[\s?&#]/g, '')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
