import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// palc-web — static output.
export default defineConfig({
  site: 'https://www.palc-instalace.cz',
  integrations: [sitemap()],
  // Veškeré CSS inline do HTML — žádné render-blocking requesty (PSI/LCP).
  build: { inlineStylesheets: 'always' },
});
