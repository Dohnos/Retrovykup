import type { APIRoute } from 'astro';
import { cities, cityUrl } from '../data/cities';
import { services, serviceUrl } from '../data/services';
import { site } from '../data/site';

/** Sitemapa pro Google Search Console / Seznam Webmaster: https://retrovykup.cz/sitemap.xml */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const pages: [path: string, priority: string, changefreq: string][] = [
    ['/', '1.0', 'weekly'],
    ['/vykup-starozitnosti', '0.9', 'weekly'],
    ...services.map((s) => [serviceUrl(s), '0.9', 'monthly'] as [string, string, string]),
    ...cities.map((c) => [cityUrl(c), '0.8', 'monthly'] as [string, string, string]),
    ['/vykup', '0.7', 'monthly'],
    ['/galerie', '0.6', 'monthly'],
    ['/ochrana-osobnich-udaju', '0.3', 'yearly'],
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ([path, priority, changefreq]) => `  <url>
    <loc>${site.url}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
