import Hero from "../../../components/Hero";


export default function Page() {
  return (
    <>
      <Hero
        title="Blended Rate Calculator"
        subtitle="See how fixed blocks and index exposure combine into your true blended $/kWh."
        imageUrl="https://images.unsplash.com/photo-1581090464777-16a38f52c12b?auto=format&fit=crop&w=2000&q=80"
        ctas={[{ label: "Contact Us", href: "/contact", variant: "primary" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-gray-700">
          Calculator UI coming soon. We’ll add inputs for usage, fixed %, index rate, and fees.
        </p>
      </section>
    </>
  );
}
