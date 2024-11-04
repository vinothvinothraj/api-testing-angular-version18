/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#032539',
        'secondary': '#1C768F',
        'tertiary': '#FBF3F2',
        'quaternary': '#FA991C',
      }
    },
  },
  plugins: [],
}

