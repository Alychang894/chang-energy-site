export default function Page() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Blended Rate Calculator
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Understand your true blended energy rate. Calculate how your fixed and
          indexed blocks combine — and uncover real savings potential.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Coming Soon
        </button>
      </div>
    </section>
  );
}
