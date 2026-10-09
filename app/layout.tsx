// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.changenergygroup.com";

export const metadata: Metadata = {
  title: {
    default: "Chang Energy | Cut Your Business Electricity Costs",
    template: "%s | Chang Energy",
  },
  description:
    "Chang Energy helps businesses across PA, OH, TX, and New England lower electricity costs with transparent supplier procurement, demand-charge strategy, and line-by-line bill audits.",
  keywords: [
    "commercial electricity procurement",
    "business energy broker",
    "lower business electricity bill",
    "commercial energy rates",
    "energy procurement services",
    "electricity supplier comparison for business",
    "demand charge management",
    "peak load contribution PLC",
    "utility bill audit commercial",
    "PJM energy procurement",
    "ERCOT commercial electricity",
    "block and index energy pricing",
    "small business energy costs",
  ],
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Chang Energy | Cut Your Business Electricity Costs",
    description:
      "Transparent supplier procurement, demand-charge strategy, and bill audits for businesses across PA, OH, TX, and New England.",
    url: SITE_URL,
    siteName: "Chang Energy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Chang Energy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chang Energy | Cut Your Business Electricity Costs",
    description:
      "Transparent energy procurement and demand strategy for businesses across PA, OH, TX, and New England.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logoUrl = `${SITE_URL}/favicon.png`;

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-dvh bg-white font-sans text-slate-900 antialiased">
        {/* ===== Global JSON-LD (SEO) ===== */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chang Energy Group",
            url: SITE_URL,
            logo: logoUrl,
            description:
              "Chang Energy helps businesses lower electricity costs through transparent supplier procurement, demand-charge strategy, and bill audits.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@changenergygroup.com",
              contactType: "Customer Service",
              areaServed: "US",
              availableLanguage: "English",
            },
            areaServed: [
              "Pennsylvania",
              "Ohio",
              "Texas",
              "New England",
              "PJM Interconnection Region",
              "ERCOT",
            ],
          })}
        </Script>

        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Chang Energy",
            url: SITE_URL,
          })}
        </Script>
        {/* ===== End Global JSON-LD ===== */}

        {/* Sticky header */}
        <Header />

        {/* Main content */}
        <main id="content" className="relative">
          {children}
        </main>

        {/* Site footer */}
        <Footer />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
