/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      bebasNeue: ['Bebas Neue', 'sans-serif'],
      cevicheOne: ['Ceviche One', 'cursive'],
      bodoniModa: ['Bodoni Moda', 'erif'],
      caveat: ['Caveat', 'cursive'],
      bungee: ['Bungee', 'cursive'],
    },

    extend: {
      screens: {
        'xs': '500px'
      }
    },
  },
  
  plugins: [],
}

