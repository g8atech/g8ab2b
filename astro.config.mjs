import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio definitivo del sito: aggiornalo qui se cambia.
// Tutte le pagine sono HTML statico: velocissime e leggibili da Google e dai motori AI.
export default defineConfig({
  site: 'https://www.g8a.it',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
