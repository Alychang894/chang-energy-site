// app/sitemap.xml/route.ts
const BASE = "https://changenergygroup.com";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${BASE}/sitemaps/core.xml</loc></sitemap>
  <sitemap><loc>${BASE}/sitemaps/resources.xml</loc></sitemap>
  <sitemap><loc>${BASE}/sitemaps/blog.xml</loc></sitemap>
</sitemapindex>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
