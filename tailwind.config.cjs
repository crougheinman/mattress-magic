/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Source of truth is the @theme block in src/index.css (Tailwind v4).
        'copa-blue': {
          50: '#f6f6f7',
          100: '#e8e9eb',
          200: '#d1d2d6',
          300: '#adafb6',
          400: '#82858d',
          500: '#5d606a',
          600: '#3c3e46',
          700: '#2b2d34',
          800: '#1f2025',
          900: '#15161a',
          950: '#0b0c0e',
        },
        'copa-gold': {
          50: '#fbf6ea',
          100: '#f5e9c8',
          200: '#ecd391',
          300: '#e0bb59',
          400: '#d4a738',
          500: '#c08f2b',
          600: '#9c6f22',
          700: '#7c581e',
          800: '#66481d',
          900: '#563d1b',
          950: '#321f0c',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
