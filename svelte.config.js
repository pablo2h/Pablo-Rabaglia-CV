// Configuración de SvelteKit con adapter para Vercel
import adapter from '@sveltejs/adapter-vercel';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x'
    }),
    paths: {
      // Sirve la app bajo /holablender en producción
      base: dev ? '' : '/holablender'
    }
  }
};

export default config;