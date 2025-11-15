/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00E676',
          dark: '#00C853',
        },
        secondary: {
          DEFAULT: '#FFC400',
        },
        dark: {
          DEFAULT: '#0D1117',
          light: '#161B22',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
