// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Chang Energy",
  description: "Smarter energy procurement for modern operators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

        {/* Full-width main so hero sections can be edge-to-edge */}
        <main>{children}</main>

        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Chang Energy
          </div>
        </footer>
      </body>
    </html>
  );
}

