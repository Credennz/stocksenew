/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#160F4A',
          light: '#2A1F6F',
          dark: '#020015',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #160F4A, #020015)',
      }
    },
  },
  plugins: [],
};