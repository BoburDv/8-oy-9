/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        triangle: "url('../img/triangle.png')",
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
