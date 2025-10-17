"use client";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctas: { label: string; href: string; variant: "primary" | "outline" }[];
}

export default function Hero({ title, subtitle, imageUrl, ctas }: HeroProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // trigger a subtle fade/slide-in after mount
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* cinematic dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div
        className={`relative z-10 text-center max-w-4xl px-6 text-white transition-all duration-700 ease-out
          ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {ctas.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                c.variant === "primary"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/40"
                  : "border border-white/70 text-white hover:bg-white/10"
              }`}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

