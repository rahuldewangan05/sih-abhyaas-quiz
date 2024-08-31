/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bookmark-blue': '#242A45',
        'bookmark-red': '#FA5959',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7',
        'bookmark-purple': '#7E88C3',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}