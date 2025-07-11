/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_STRIPE_PUBLIC_KEY: string;
  readonly VITE_AIRTABLE_API_KEY: string;
  readonly VITE_AIRTABLE_BASE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}