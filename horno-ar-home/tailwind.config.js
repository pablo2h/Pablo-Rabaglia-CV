/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'horno-violeta': '#4F26C0',
        'horno-amarillo': '#FFD900',
        'horno-negro': '#111111',
        'horno-blanco': '#FFFFFF',
        'horno-gris': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

