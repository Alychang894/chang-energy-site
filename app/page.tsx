import Hero from "../components/Hero";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero
        title="Your Large-Company Edge in Power Procurement"
        subtitle="Chang Energy helps enterprises tame volatility, lower total cost, and protect budgets with block+index strategies, PLC management, and bill-audit discipline."
        imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
        ctas={[
          { label: "Book a Strategy Call", href: "/contact", variant: "primary" },
          { label: "Blended Rate Calculator", href: "/resources/blended-rate-calculator", variant: "outline" },
        ]}
      />

      {/* proof section below hero */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div><div className="text-2xl font-semibold">$100M+</div><div>Energy spend guided</div></div>
          <div><div className="text-2xl font-semibold">40+</div><div>Active suppliers</div></div>
          <div><div className="text-2xl font-semibold">3–7%</div><div>Typical audit recovery</div></div>
          <div><div className="text-2xl font-semibold">PJM/ERCOT</div><div>Market coverage</div></div>
        </div>
        <p className="p mt-8 text-gray-600">
          Need a specific plan for cold storage or manufacturing? See{" "}
          <Link href="/industries/cold-storage" className="underline">industry playbooks</Link>.
        </p>
      </section>
    </>
  );
}
