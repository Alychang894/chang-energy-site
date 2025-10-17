import Link from "next/link";
import type { Route } from "next";

type CTA = { label: string; href: Route; variant?: "primary" | "outline" };

export default function Hero({
  title,
  subtitle,
  imageUrl,
  ctas = [],
}: {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctas?: CTA[];
}) {
  return (
  <section
  className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${imageUrl})`,
  }}
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

  <div className="relative z-10 text-center max-w-4xl px-6 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
      {title}
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-200">{subtitle}</p>
    <div className="flex flex-wrap justify-center gap-4">
      {ctas.map((c) => (
        <a
          key={c.href}
          href={c.href}
          className={`px-6 py-3 rounded-md text-sm font-semibold ${
            c.variant === "primary"
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              : "border border-white/70 text-white hover:bg-white/10"
          }`}
        >
          {c.label}
        </a>
      ))}
    </div>
  </div>
</section>

}
