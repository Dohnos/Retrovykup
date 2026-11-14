/** Sdílené odeslání poptávky (velký formulář i rychlá nabídka v hero). */
import { firebaseConfig, cloudinary, assertEnv } from './env';

export const newLeadId = () => Math.floor(100000 + Math.random() * 900000);

type Libs = [typeof import('compressorjs'), typeof import('firebase/app'), typeof import('firebase/firestore/lite')];
let libs: Promise<Libs> | null = null;

/** Těžké knihovny se načtou až při práci s formulářem → rychlé první načtení stránky. */
export const preloadLeadLibs = () =>
  (libs ??= Promise.all([import('compressorjs'), import('firebase/app'), import('firebase/firestore/lite')]));

export function leadEnvReady(withPhotos: boolean) {
  return assertEnv(firebaseConfig, 'Firebase') && (!withPhotos || assertEnv(cloudinary, 'Cloudinary'));
}

export interface LeadFields {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  desiredPriceOption: string;
  fixedPriceAmount: string;
}

export interface SubmitOptions {
  id: number;
  fields: LeadFields;
  files: File[];
  consentText: string;
  consentVersion: string;
  retentionDays: number;
  source: string;
  onProgress?: (pct: number) => void;
}

async function uploadPhotos(Compressor: Libs[0]['default'], id: number, files: File[], onProgress?: (p: number) => void) {
  if (!files.length) return { urls: [] as string[], folderUrl: null as string | null };
  const folder = `retrovykup/vykup_${id}_${new Date().toISOString().slice(0, 10)}`;
  let done = 0;
  onProgress?.(0);

  const urls = await Promise.all(
    files.map(
      (file, i) =>
        new Promise<string>((resolve, reject) => {
          new Compressor(file, {
            quality: 0.6,
            maxWidth: 1600,
            maxHeight: 1600,
            async success(compressed) {
              try {
                const fd = new FormData();
                fd.append('file', compressed);
                fd.append('upload_preset', cloudinary.uploadPreset);
                fd.append('folder', folder);
                fd.append('public_id', `foto_${i + 1}`);
                const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.cloudName}/image/upload`, {
                  method: 'POST',
                  body: fd,
                });
                const json = await res.json();
                if (!res.ok || !json.secure_url) throw new Error(json?.error?.message || 'Upload selhal');
                onProgress?.(Math.round((++done / files.length) * 100));
                resolve(json.secure_url as string);
              } catch (err) {
                reject(err);
              }
            },
            error: reject,
          });
        }),
    ),
  );
  return { urls, folderUrl: `https://console.cloudinary.com/console/c-${cloudinary.cloudName}/media_library/folders/${folder}` };
}

export async function submitLead(o: SubmitOptions) {
  const [{ default: Compressor }, { initializeApp, getApps }, { getFirestore, collection, addDoc, serverTimestamp, Timestamp }] =
    await preloadLeadLibs();

  const upload = await uploadPhotos(Compressor, o.id, o.files, o.onProgress);
  const app = getApps()[0] ?? initializeApp(firebaseConfig);

  await addDoc(collection(getFirestore(app), 'leads'), {
    ...o.fields,
    photos_count: upload.urls.length,
    photos_urls: upload.urls,
    cloudinary_folder: upload.folderUrl || 'Bez fotografií',
    vykup_id: o.id,
    source: o.source,
    status: 'nova',
    consent: true,
    consent_version: o.consentVersion,
    consent_text: o.consentText,
    // Automatické smazání (zapněte TTL politiku na poli expireAt ve Firestore)
    expireAt: Timestamp.fromMillis(Date.now() + o.retentionDays * 86_400_000),
    timestamp: serverTimestamp(),
  });
}

/** Zobrazí modal „Odesláno“ (komponenta SuccessModal). */
export const showSuccess = (id: number) => window.dispatchEvent(new CustomEvent('rv:success', { detail: { id } }));
