import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";

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
          { label: "Book a Strategy Call", href: "/contact", variant: "outline" },
        ]}
      />

      {/* ABOUT / VALUE SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Transparent Strategy. Tangible Results.
            </h2>
            <p className="text-gray-700 max-w-3xl">
              We combine deep market expertise with data-driven insight to reduce volatility,
              protect budgets, and unlock long-term savings across your energy portfolio.
              From manufacturers and cold storage to restaurants and offices, our process
              aligns procurement with real-world operations.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FadeIn delay={100}>
              <div className="bg-white shadow-sm rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold mb-3">Procurement</h3>
                <p className="text-gray-600">
                  Competitive supplier bids and strategy-aligned structures — fixed, index,
                  or hybrid — built for your actual load profile.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white shadow-sm rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold mb-3">Capacity Planning</h3>
                <p className="text-gray-600">
                  Peak demand management and PLC/NSPL optimization to lower
                  transmission and capacity charges year over year.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-white shadow-sm rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold mb-3">Reporting</h3>
                <p className="text-gray-600">
                  Clear dashboards, variance tracking, and KPI visibility to keep
                  leadership informed and operations stable.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn delay={400}>
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to see how much you could be saving?
            </h3>
            <p className="text-gray-600 mt-2">
              Upload a recent bill and we’ll build a custom strategy that fits your operations.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 btn btn-primary"
            >
              Schedule a Free Audit
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
