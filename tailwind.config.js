 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage :{
        triangle: "url(../img/triangle.png)",
      },
      fontFamily:{
        sans: ['Barlow Semi Condensed']
      }
    },
  },
  plugins: [],
}