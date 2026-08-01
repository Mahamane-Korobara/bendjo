// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Base des URL canoniques, des métadonnées de partage (Layout.astro) et du
    // sitemap. Sans elle, Astro.site est undefined et l'URL doit être en dur.
    site: 'https://bendjo-delta.vercel.app',
    integrations: [sitemap()],
});
