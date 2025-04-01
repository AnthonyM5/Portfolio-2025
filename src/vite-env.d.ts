/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_ACCESS_KEY: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.json?raw' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}
