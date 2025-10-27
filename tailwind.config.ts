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
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },
    },
    boxShadow: {
      card: "0 8px 24px -12px rgb(2 6 23 / 0.08)",
    },
  },
},
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
