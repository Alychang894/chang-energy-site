// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Chang Energy | Smarter Procurement for Modern Operators",
  description:
    "Chang Energy helps industrial, commercial, and multi-site operators control energy costs through transparent procurement, capacity optimization, and disciplined data tracking.",
  metadataBase: new URL("https://changenergygroup.com"), // your real domain
  icons: {
    icon: "/favicon.png", // favicon file in /public
  },
  openGraph: {
    title: "Chang Energy | Smarter Procurement for Modern Operators",
    description:
      "Industrial-grade energy procurement made transparent. Discover strategies that reduce volatility, protect budgets, and unlock long-term savings.",
    url: "https://changenergygroup.com",
    siteName: "Chang Energy",
    images: [
      {
        url: "/favicon.png", // you can later swap this with a custom OG banner
        width: 512,
        height: 512,
        alt: "Chang Energy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chang Energy | Smarter Procurement for Modern Operators",
    description:
      "Transparent procurement. Capacity optimization. Disciplined data tracking. Smarter energy solutions for real-world operations.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        {/* Global sticky header with logo, navigation, and CTA */}
        <Header />

        {/* Page content */}
        <main id="content" className="relative">
          {children}
        </main>

        {/* Optional footer (uncomment when ready) */}
        {/*
        <footer className="border-t">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
            © {new Date().getFullYear()} Chang Energy. All rights reserved.
          </div>
        </footer>
        */}
      </body>
    </html>
  );
}
