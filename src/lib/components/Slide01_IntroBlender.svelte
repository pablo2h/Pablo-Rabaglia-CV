<script>
  // Componente de introducción basado en el mockup 1.png
  // Muestra el texto "Hola equipo de" y el logo de BLENDER.
  // Usar la carpeta estática de SvelteKit: /static/logos
  // Coloca el archivo real en: static/logos/blender-logo.jpg
  // Cuando se sirve bajo subpath, anteponer `${base}`
  import { base } from '$app/paths';
  const logoSrc = `${base}/logos/blender-logo.jpg`;
</script>

<!--
  Slide de introducción
  - Contenedor full-screen
  - Texto y logo dispuestos en fila (lado a lado)
-->
<div class="flex h-screen items-center justify-start md:justify-center px-4">
  <div class="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 w-full max-w-3xl">
    <h1 class="font-display text-5xl md:text-6xl text-center md:text-left">
      Hola equipo de
    </h1>
    <img
      src={logoSrc}
      alt="Logotipo de BLENDER"
      class="h-40 md:h-32 w-auto rounded-md bg-negro-bg p-4"
      loading="lazy"
      decoding="async"
    />
  </div>
</div>

<!-- Nota: El archivo del logo debe ubicarse en /static/logos/blender-logo.jpg -->