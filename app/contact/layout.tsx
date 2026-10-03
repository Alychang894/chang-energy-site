// app/contact/layout.tsx — metadata for the client-component contact page
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free commercial electricity bill review from Chang Energy. Send us your bill and we'll show you what you're really paying — no obligation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
