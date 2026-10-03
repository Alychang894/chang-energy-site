// app/resources/blended-rate-calculator/layout.tsx — metadata for the client-component calculator page
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blended Rate Calculator",
  description:
    "Free tool: calculate your true all-in commercial electricity rate (cents/kWh) from your bill. See what you're really paying per kilowatt-hour.",
  alternates: {
    canonical: "/resources/blended-rate-calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
