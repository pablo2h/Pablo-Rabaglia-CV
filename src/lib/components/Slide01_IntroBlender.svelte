<script>
  // Componente de introducción basado en el mockup 1.png
  // Muestra el texto "Hola equipo de" y el logo de BLENDER.
  // Usar la carpeta estática de SvelteKit: /static/logos
  // Coloca el archivo real en: static/logos/blender-logo.jpg
  // Cuando se sirve bajo subpath, anteponer `${base}`
  import { base } from '$app/paths';
  const logoSrc = `${base}/logos/blender-logo.jpg`;
</script>

<div class="flex h-full items-center justify-start md:justify-center px-4">
  <div class="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 w-full max-w-3xl md:max-w-4xl lg:max-w-6xl lg:gap-12">
    <h1 class="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
      Hola equipo de
    </h1>
    <img
      src={logoSrc}
      alt="Logotipo de BLENDER"
      class="h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-auto rounded-md bg-negro-bg p-4"
      loading="lazy"
      decoding="async"
    />
  </div>
</div>

<!-- Nota: El archivo del logo debe ubicarse en /static/logos/blender-logo.jpg -->