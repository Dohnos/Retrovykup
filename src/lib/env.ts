/**
 * Veškerá konfigurace se čte z proměnných prostředí (Vercel → Settings → Environment Variables).
 * V kódu ani v repozitáři nejsou žádné klíče.
 *
 * Pozor: proměnné s prefixem PUBLIC_ se při buildu vloží do JS, který běží v prohlížeči.
 * To je u Firebase / Cloudinary / EmailJS v pořádku — tyto klíče nejsou tajné hesla,
 * ochranu zajišťují Firestore Rules, omezení API klíče na doménu a allowlist domén v EmailJS.
 */

export const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

export const cloudinary = {
  cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  uploadPreset: import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
};

export const emailjsConfig = {
  publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
  templateZajem: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ZAJEM,
  templateNezajem: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_NEZAJEM,
};

export const adminWhatsapp = import.meta.env.PUBLIC_ADMIN_WHATSAPP || '';

/** Vypíše do konzole, které proměnné chybí (pomáhá při nastavování Vercelu). */
export function assertEnv(group: Record<string, string | undefined>, label: string): boolean {
  const missing = Object.entries(group)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) {
    console.error(`[Retrovykup] Chybí proměnné prostředí pro ${label}: ${missing.join(', ')}`);
    return false;
  }
  return true;
}
