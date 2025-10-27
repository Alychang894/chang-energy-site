// components/blog/HeroBanner.tsx
import Image from "next/image";

export default function HeroBanner({
  title,
  kicker,
  byline,
  image = "/images/hero-power.jpg",
}: {
  title: string;
  kicker?: string;
  byline?: string;
  image?: string;
}) {
  return (
    <header className="relative overflow-hidden rounded-2xl border bg-gray-900 text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative px-6 py-14 md:px-10 md:py-16">
          {kicker ? <div className="kicker">{kicker}</div> : null}
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            {title}
          </h1>
          {byline && (
            <p className="mt-3 text-sm text-gray-200">{byline}</p>
          )}
        </div>
      </div>
    </header>
  );
}
