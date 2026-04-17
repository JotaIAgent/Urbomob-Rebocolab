/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EAEAEA',
        primary: '#727586',
        secondary: '#D63163',
        textPrimary: '#1D1E20',
        orange: {
          500: '#F97316', // Laranja vibrante para destaques e botões
          600: '#EA580C',
        }
      },
      fontFamily: {
        display: ['"Krona One"', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Jost"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
