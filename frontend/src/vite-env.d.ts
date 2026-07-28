/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL:              string;
  readonly VITE_API_TIMEOUT:          string;
  readonly VITE_APP_NAME:             string;
  readonly VITE_APP_URL:              string;
  readonly VITE_APP_ENV:              string;
  readonly VITE_GA_MEASUREMENT_ID:    string;
  readonly VITE_GTM_ID:               string;
  readonly VITE_CLOUDINARY_CLOUD_NAME:string;
  readonly VITE_CLOUDINARY_UPLOAD_PRESET: string;
  readonly VITE_ENABLE_DEVTOOLS:      string;
  readonly VITE_ENABLE_MOCK_API:      string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
