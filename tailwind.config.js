/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './css/**/*.css',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0F172A',
          DEFAULT: '#1E3A8A',
          light: '#2563EB',
        },
        rose: {
          gold: '#F43F5E',
        },
        gold: {
          DEFAULT: '#F59E0B',
          accent: '#D97706',
        },
        emerald: {
          DEFAULT: '#059669',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
