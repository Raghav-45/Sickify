/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0C0C0F',
        'Darkest': '#191414',
        'light': '#282828',
        'lightest': '#B3B3B3',
      },
    },
  },
  plugins: [],
}
