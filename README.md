# Pablo Rabaglia CV

Proyecto base con **SvelteKit** y **Tailwind CSS**.

## Desarrollo

1. Instalar dependencias: `npm install`
2. Ejecutar servidor: `npm run dev`
3. Previsualizar build: `npm run preview`

## Estructura

- `src/app.html`: HTML base de SvelteKit
- `src/app.css`: estilos globales y directivas Tailwind
- `src/routes/+layout.svelte`: layout raíz (importa `app.css`)
- `src/routes/+page.svelte`: página inicial placeholder
- `tailwind.config.js` y `postcss.config.js`: configuración de Tailwind/PostCSS

## Despliegue

Adaptable a Vercel usando `@sveltejs/adapter-auto` o `@sveltejs/adapter-vercel`.