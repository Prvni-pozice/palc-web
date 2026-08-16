import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// palc-web — static output. Doména (site) se doplní podle zadání.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  // Veškeré CSS inline do HTML — žádné render-blocking requesty (PSI/LCP).
  build: { inlineStylesheets: 'always' },
});
