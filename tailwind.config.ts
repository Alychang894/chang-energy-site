// tailwind.config.ts (or tailwind.config.js)
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",  // used for primary button
          700: "#c2410c",  // used for hover
          800: "#9a3412",
          900: "#7c2d12",
          DEFAULT: "#ea580c",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
