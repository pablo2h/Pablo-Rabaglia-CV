<script>
  // Componente de introducción basado en el mockup 1.png
  // Muestra el texto "Hola equipo de" y el logo de BLENDER.
  // Usar la carpeta estática de SvelteKit: /static/logos
  // Coloca el archivo real en: static/logos/blender-logo.jpg
  const logoSrc = '/logos/blender-logo.jpg';
</script>

<!--
  Slide de introducción
  - Contenedor full-screen
  - Texto y logo dispuestos en fila (lado a lado)
-->
<div class="flex h-screen items-center justify-center">
  <div class="flex flex-row items-center gap-8">
    <h1 class="font-display text-6xl">
      Hola equipo de
    </h1>
    <img
      src={logoSrc}
      alt="Logotipo de BLENDER"
      class="h-32 w-auto rounded-md bg-black/20 p-4"
      loading="lazy"
      decoding="async"
    />
  </div>
</div>

<!-- Nota: El archivo del logo debe ubicarse en /static/logos/blender-logo.jpg -->