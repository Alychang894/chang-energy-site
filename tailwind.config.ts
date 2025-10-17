import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral, industrial-friendly palette (blue/steel + charcoal)
        brand: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#cfe0ee',
          300: '#a8c5df',
          400: '#6fa2c9',
          500: '#3b7eaf',
          600: '#2f6490',
          700: '#274f73',
          800: '#223f5c',
          900: '#1b3249'
        }
      }
    }
  },
  plugins: []
}

export default config
