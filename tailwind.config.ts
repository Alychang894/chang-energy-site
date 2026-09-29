// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter is loaded via next/font in app/layout.tsx and exposed as --font-inter
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Single confident accent: warm energy orange.
        // Deep navy/slate surfaces come from Tailwind's slate scale (slate-950 etc.).
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      boxShadow: {
        card: "0 8px 24px -12px rgb(2 6 23 / 0.08)",
        lift: "0 16px 40px -16px rgb(2 6 23 / 0.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
