// app/sitemaps/core.xml/route.ts
const BASE = "https://changenergygroup.com";

function url(loc: string, changefreq = "monthly", priority = "0.8") {
  return `
    <url>
      <loc>${BASE}${loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${url("/", "weekly", "1.0")}
  ${url("/solutions", "monthly", "0.9")}
  ${url("/industries", "monthly", "0.9")}
  ${url("/resources", "weekly", "0.8")}
  ${url("/contact", "monthly", "0.8")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
