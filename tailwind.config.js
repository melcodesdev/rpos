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

    // colors: {
    //   'black': '#000000',
    //   'white': '#ffffff',
    //   'gray-light': '#f5f5f5',
    //   'purple-light': '#fdf4ff',
    //   'purple-bright': 'd946ef',
    //   'purple-gradient': 'linear-gradient(to bottom, #d946ef, #ff968f)'
    // },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      bebasNeue: ['Bebas Neue', 'sans-serif'],
      cevicheOne: ['Ceviche One', 'cursive'],
      bodoniModa: ['Bodoni Moda', 'erif'],
      caveat: ['Caveat', 'cursive'],
      bungee: ['Bungee', 'cursive'],
    },

    extend: {},
  },
  plugins: [],
}

