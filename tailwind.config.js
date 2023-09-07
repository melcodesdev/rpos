/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px'
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      bebasNeue: ['Bebas Neue', 'sans-serif'],
      cevicheOne: ['Ceviche One', 'cursive'],
      bodoniModa: ['Bodoni Moda', 'erif'],
      caveat: ['Caveat', 'cursive'],
      bungee: ['Bungee', 'cursive'],
    },

    extend: {
    },
  },
  
  plugins: [],
}

