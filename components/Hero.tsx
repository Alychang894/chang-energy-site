"use client";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  eyebrow?: string;
  ctas: { label: string; href: string; variant: "primary" | "outline" }[];
}

export default function Hero({ title, subtitle, imageUrl, eyebrow, ctas }: HeroProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // trigger a subtle fade/slide-in after mount
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative flex min-h-[88vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* deep navy gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />

      <div
        className={`relative z-10 max-w-4xl px-6 text-center text-white transition-all duration-700 ease-out
          ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {eyebrow && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200 ring-1 ring-white/15 backdrop-blur">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {ctas.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className={
                c.variant === "primary"
                  ? "btn btn-primary btn-lg shadow-lift"
                  : "btn btn-lg btn-outline-light"
              }
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 h-10 w-6 -translate-x-1/2 rounded-full border-2 border-white/30"
      >
        <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-white/60" />
      </div>
    </section>
  );
}
