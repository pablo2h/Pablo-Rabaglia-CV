/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        'negro-bg': '#191919',
        'blanco-texto': '#FEFEFE',
        'amarillo-acento': '#FFE400',
        'cyan-acento': '#91FCEA',
        // Paleta secundaria
        'naranja-acento': '#FA4A33',
        'rosa-acento': '#FFD8E9',
        'violeta-acento': '#8B00CC'
      },
      fontFamily: {
        display: ['sans-serif'],
        condensed: ['Futura Condensed Extrabold', 'sans-serif'],
        body: ['sans-serif']
      }
    }
  },
  plugins: []
};