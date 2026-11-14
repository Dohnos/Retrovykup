/** Čistá cesta bez .html / index (Astro s build.format 'file' vrací /vykup.html). */
export const cleanPath = (pathname: string) =>
  pathname.replace(/(\/index)?\.html$/, '').replace(/\/$/, '') || '/';
