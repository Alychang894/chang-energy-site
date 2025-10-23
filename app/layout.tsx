// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chang Energy | Commercial Energy Optimization in the PJM Region",
  description:
    "Chang Energy helps businesses in the PJM region reduce commercial energy costs through smarter procurement, capacity planning, and transparent energy management solutions.",
  keywords: [
    // Core commercial + energy keywords
    "High energy bills",
    "Commercial energy costs",
    "Energy management for businesses",
    "Reducing energy costs",
    "Commercial electricity savings",
    "Energy cost reduction solutions",
    "Energy efficiency for businesses",
    "Business energy audit",
    "Commercial energy rates",
    "Energy billing solutions",
    "Commercial utility costs",
    "Energy consumption reduction",
    "Energy contract optimization",
    "Energy providers in PJM region",
    "Energy procurement services",
    "Energy monitoring systems",
    "Energy bill auditing",
    "Commercial energy contract negotiation",
    "Demand response programs",
    "Peak demand management",
    "Energy rate analysis",
    "Energy saving tips for businesses",
    "Energy efficiency for warehouses",
    "Energy savings for data centers",
    "Energy management for manufacturers",
    "Factory energy optimization",
    "Energy solutions for restaurants",
    "Energy for commercial buildings",
    "Load forecasting for commercial clients",
    "Smart meters for businesses",
    "Commercial energy efficiency programs",
    "Time-of-use pricing for businesses",
    "Energy cost solutions for offices",
    "Energy saving for retail businesses",
    "Energy procurement services for businesses in PJM",
    "Commercial energy services in Pennsylvania",
    "PJM energy market",
    "PJM electricity rates",
    "PJM commercial energy solutions",
    "PJM electricity pricing",
    "PJM business energy savings",
    "PJM utility management",
    "PJM peak demand charges",
    "PJM energy pricing analysis",
    "PJM energy efficiency programs",
    "PJM energy management programs",
    "Lower your business electricity bill with PJM energy services",
    "Best ways to lower high electricity rates in PJM for commercial clients",
    "PJM electricity savings for large businesses",
    "Cost-effective energy solutions for businesses in the PJM area",
    "Commercial energy efficiency programs in the PJM region",
    "How to Lower Your Commercial Energy Bill in the PJM Region",
    "Understanding PJM Electricity Pricing and How It Impacts Your Business",
    "Top 5 Ways to Save on Energy Costs for Commercial Clients in PJM",
    "How PJM’s Peak Demand Charges Affect Your Energy Bills",
    "The Best Energy Management Solutions for Commercial Clients in the PJM Area",
    "How to Navigate the PJM Energy Market and Save on Utility Bills",

    // Local restaurant & business tie-ins
    "Bella Roma Pizza",
    "Three Brothers Grill",
    "A Taste of Philly",
    "Valley Pizza",
    "Newtown Farmers Market",
    "Amy’s Family Pizzeria",
    "Newtown Pizza",
    "Omiza",
    "Oishi",
    "Anthony’s Pizza",
    "Italian Delight",
    "Eastern Dragon",
    "Kickin Wings",
    "Baco Bistro Pizza",
    "Amore Pizza",
    "Telford Pizzeria",
    "Bacco Bistro Pizza",
    "Frida’s Mexican Grill",
    "Pumpernicks Deli",
    "Poco’s Restaurant Bar & Comedy Cabaret",
  ],
  metadataBase: new URL("https://changenergygroup.com"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title:
      "Chang Energy | Smarter Energy Procurement and Management for Commercial Clients",
    description:
      "Reduce energy costs, optimize contracts, and stabilize budgets with Chang Energy’s commercial energy management solutions across the PJM region.",
    url: "https://changenergygroup.com",
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
    title:
      "Chang Energy | Commercial Energy Procurement and Cost Optimization",
    description:
      "Smarter energy procurement, demand response, and capacity planning for businesses across the PJM region.",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "https://changenergygroup.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = "https://changenergygroup.com";
  const logoUrl = `${siteUrl}/favicon.png`; // or switch to /images/logo.png if you prefer

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        {/* ===== Global JSON-LD (SEO) ===== */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chang Energy Group",
            url: siteUrl,
            logo: logoUrl,
            description:
              "Chang Energy helps commercial and industrial clients in the PJM region lower electricity costs through transparent procurement and strategic energy management.",
            sameAs: [
              "https://www.linkedin.com/company/chang-energy-group/",
              "https://twitter.com/changenergy",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-267-340-8300",
              contactType: "Customer Service",
              areaServed: "US",
              availableLanguage: "English",
            },
            areaServed: [
              "PJM Interconnection Region",
              "United States",
              "Pennsylvania",
              "New Jersey",
              "Maryland",
              "Delaware",
              "Virginia",
              "Ohio",
              "Illinois",
              "Indiana",
            ],
          })}
        </Script>

        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Chang Energy",
            url: siteUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
        {/* ===== End Global JSON-LD ===== */}

        {/* Sticky header */}
        <Header />

        {/* Main content */}
        <main id="content" className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
