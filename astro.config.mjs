// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://retrovykup.cz',
  trailingSlash: 'never',
  build: {
    // /vykup.html → Vercel (cleanUrls) obslouží jako /vykup
    format: 'file',
    // CSS přímo v HTML = žádný render-blocking request navíc
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
