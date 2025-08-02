/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        themeColor:'#2964cc',
        mainColorLightBlue:"#1BB2B1"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}