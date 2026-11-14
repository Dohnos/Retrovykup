// @ts-check
import { defineConfig } from 'astro/config';
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
  vite: {
    plugins: [tailwindcss()],
  },
});
