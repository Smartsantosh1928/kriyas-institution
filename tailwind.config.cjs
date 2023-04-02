/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontfamily: {
      mulish : ["Mulish", "sans-serif"],
      edu : ['Edu NSW ACT Foundation', 'cursive'],
      poppins : ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}