import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        creme: {
          50: '#F7F1E0',
          100: '#F4E8D3',
          300: '#E8C888',
          500: '#BCA16B',
          700: '#7A5304',
          900: '#684704',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '0.5rem',
      },
    },
  },
  plugins: [],
}

export default config