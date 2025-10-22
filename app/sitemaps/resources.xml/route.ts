// app/sitemaps/resources.xml/route.ts
const BASE = "https://changenergygroup.com";

function url(loc: string, changefreq = "monthly", priority = "0.7") {
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
  ${url("/resources/capacity-transmission-playbook")}
  ${url("/resources/block-index-strategy-guide")}
  ${url("/resources/energy-budget-template")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
