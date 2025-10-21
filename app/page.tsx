// app/page.tsx
import Hero from "../components/Hero";
import Offering from "../components/Offering"; // <-- added

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title="Smarter Energy Procurement for Modern Operators"
        subtitle="Chang Energy helps industrial, commercial, and multi-site operators control energy costs through transparent procurement, capacity optimization, and disciplined data tracking."
        imageUrl="/images/hero-power.jpg"
        ctas={[
          { label: "Explore Solutions", href: "/solutions", variant: "primary" },
          { label: "Request a Consultation", href: "/contact", variant: "outline" },
        ]}
      />

      {/* ENHANCED VALUE SECTION */}
      <Offering />
    </>
  );
}
