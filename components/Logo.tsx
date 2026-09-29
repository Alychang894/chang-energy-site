// components/Logo.tsx
// Chang Energy brand mark: navy badge + orange bolt ring, wordmark lockup.
// Inline SVG so the wordmark renders in the page's Inter font.

type LogoProps = {
  variant?: "dark" | "light"; // dark = navy wordmark (light backgrounds), light = white wordmark (navy backgrounds)
  className?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Chang Energy badge">
      <circle cx="60" cy="60" r="56" fill="#0F2740" />
      <circle cx="60" cy="60" r="45" fill="none" stroke="#F97316" strokeWidth="4.5" />
      <path d="M69 30 L45 67 h14 L53 92 L79 54 H63 Z" fill="#F97316" />
    </svg>
  );
}

export default function Logo({ variant = "dark", className }: LogoProps) {
  const wordmark = variant === "dark" ? "#0F2740" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      role="img"
      aria-label="Chang Energy"
    >
      <circle cx="60" cy="60" r="56" fill="#0F2740" />
      {variant === "light" && (
        <>
          <circle cx="60" cy="60" r="56" fill="#FFFFFF" opacity="0.08" />
          <circle
            cx="60"
            cy="60"
            r="56"
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
            opacity="0.35"
          />
        </>
      )}
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#F97316"
        strokeWidth="4.5"
      />
      <path d="M69 30 L45 67 h14 L53 92 L79 54 H63 Z" fill="#F97316" />
      <text
        x="130"
        y="74"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="36"
        fontWeight="800"
        fill={wordmark}
        letterSpacing="-1"
      >
        Chang Energy
      </text>
    </svg>
  );
}
