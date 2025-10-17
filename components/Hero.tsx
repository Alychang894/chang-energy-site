import Link from "next/link";
import type { Route } from "next";

type CTA = {
  label: string;
  href: Route;                 // typed routes-friendly
  variant?: "primary" | "outline";
};

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
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url(" + imageUrl + ")" }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctas.length > 0 && (
          <div className="mt-
