/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        'primary': "#6a1b9a",
        'secondary': "#e46c5b",
        'third': "#9A348E ",
        'fourth': "#0D0628 ",
      }
    },
  },

  //...
  plugins: [require("daisyui")],

}

