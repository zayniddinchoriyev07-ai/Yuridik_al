/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0f1f38',
          700: '#152847',
          600: '#1a3156',
          500: '#1f3a65',
        },
        gold: {
          500: '#f59e0b',
          600: '#d97706',
          400: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
