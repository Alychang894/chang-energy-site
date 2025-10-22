// app/sitemaps/core.xml/route.ts
export const revalidate = 3600;

const BASE = "https://www.changenergygroup.com";

function url(loc: string, changefreq: string, priority: string) {
  const lastmod = new Date().toISOString();
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${url(`${BASE}/`, "weekly", "1.0")}
  ${url(`${BASE}/solutions`, "monthly", "0.9")}
  ${url(`${BASE}/industries`, "monthly", "0.9")}
  ${url(`${BASE}/resources`, "weekly", "0.8")}
  ${url(`${BASE}/contact`, "monthly", "0.8")}
</urlset>`;
  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
