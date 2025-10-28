"use client";

import Image from "next/image";

type HeroBannerProps = {
  title: string;
  kicker?: string;
  date?: string;
  readTime?: string;
  image?: string;
  imageAlt?: string;
};

export default function HeroBanner({
  title,
  kicker = "Energy Insights",
  date,
  readTime,
  image,
  imageAlt = "",
}: HeroBannerProps) {
  const hasImage = Boolean(image);

  return (
    <header className="relative overflow-hidden">
      {/* Featured image layer */}
      {hasImage && (
        <div className="relative h-[220px] md:h-[320px]">
          <Image
            src={image!}
            alt={imageAlt || title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      {/* Text block */}
      <div
        className={[
          "mx-auto max-w-4xl px-6",
          hasImage ? "relative -mt-20 md:-mt-28" : "pt-10",
        ].join(" ")}
      >
        <div
          className={[
            "rounded-2xl",
            hasImage
              ? "bg-white/90 backdrop-blur shadow-lg p-6 md:p-8"
              : "bg-transparent p-0",
          ].join(" ")}
        >
          <p className="text-sm font-medium text-brand mb-2">{kicker}</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {title}
          </h1>

          {(date || readTime) && (
            <p className="mt-2 text-sm text-gray-500">
              {date}
              {date && readTime ? " • " : ""}
              {readTime}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
