// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        600: "#ea580c", // used for bg-brand-600
        700: "#c2410c", // used for hover:bg-brand-700
        800: "#9a3412",
        900: "#7c2d12"
      }
    }
  }
},
  plugins: [typography],
};

export default config;
