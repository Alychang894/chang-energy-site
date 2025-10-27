// app/sitemaps/blog.xml/route.ts
const BASE = "https://changenergygroup.com";

function url(loc: string, dateISO: string, changefreq = "monthly", priority = "0.6") {
  return `
    <url>
      <loc>${BASE}${loc}</loc>
      <lastmod>${dateISO}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
}

export async function GET() {
  // Keep this in sync with your posts above
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${url("/blog", new Date().toISOString(), "weekly", "0.7")}
  ${url("/blog/pjm-peak-demand-charges", "2025-10-15T00:00:00.000Z")}
  ${url("/blog/lower-commercial-energy-bills", "2025-10-10T00:00:00.000Z")}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
