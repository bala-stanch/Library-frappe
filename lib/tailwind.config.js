/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightblue,
        cyan: colors.cyan,
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.7), rgba(43, 108, 176, 0.6)), url('https://i.etsystatic.com/46079887/r/il/40b660/5229845978/il_fullxfull.5229845978_o7gi.jpg')",
      },
    },
  },
  plugins: [],
}