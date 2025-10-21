// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

// If you were using Next Fonts, you can add them here and put the className on <body>.
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chang Energy",
  description:
    "Smarter energy procurement for modern operators. Transparent procurement, capacity optimization, and disciplined data tracking.",
  metadataBase: new URL("https://chang-energy-site.vercel.app"), // update to your domain once you connect it
  openGraph: {
    title: "Chang Energy",
    description:
      "Smarter energy procurement for modern operators. Transparent procurement, capacity optimization, and disciplined data tracking.",
    url: "https://chang-energy-site.vercel.app",
    siteName: "Chang Energy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chang Energy",
    description:
      "Smarter energy procurement for modern operators. Transparent procurement, capacity optimization, and disciplined data tracking.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // className={inter.className}
        className="min-h-dvh bg-white text-gray-900 antialiased"
      >
        {/* Global sticky header with logo, navigation, and CTA */}
        <Header />

        {/* Page content */}
        <main id="content" className="relative">
          {children}
        </main>

        {/* (Optional) footer placeholder — uncomment if/when needed */}
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
