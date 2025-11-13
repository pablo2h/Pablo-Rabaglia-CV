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
        'dora-pink': '#FC95BB',
        'dora-yellow': '#F5C92B',
        'dora-orange': '#FA8632',
        'dora-red': '#F05B31',
        'dora-blue': '#0083CF',
        'dora-light-blue': '#80C7D9',
        'dora-green': '#2DB092',
        'dora-black': '#000000',
        'dora-gray': '#F7F5F6',
      },
      fontFamily: {
        heading: ['DynaPuff', 'system-ui', 'sans-serif'],
        complement: ['Baloo 2', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

