interface ImportMetaEnv {
  readonly PUBLIC_FIREBASE_API_KEY: string;
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_UPLOAD_PRESET: string;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ZAJEM: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_NEZAJEM: string;
  readonly PUBLIC_ADMIN_WHATSAPP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
