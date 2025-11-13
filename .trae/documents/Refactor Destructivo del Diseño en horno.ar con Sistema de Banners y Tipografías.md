## Objetivo
- Estandarizar tamaños, contenedores, espaciados y tipografías con clases reutilizables.
- Aplicar un Design System robusto en `app.css` y refactorizar componentes para desarrollo escalable.

## Tokens y Utilidades (app.css)
- Aliases consistentes sobre Tailwind para evitar variaciones ad-hoc:
```
@layer components {
  /* Contenedores */
  .container-narrow { @apply max-w-md mx-auto; }
  .container-default { @apply max-w-lg mx-auto; }
  .container-wide { @apply max-w-2xl mx-auto; }

  /* Espaciados estandar */
  .space-sm { @apply p-3 gap-3; }
  .space-md { @apply p-6 gap-4; }
  .space-lg { @apply p-8 gap-6; }

  /* Tarjetas de banner */
  .banner-card { @apply w-full rounded-2xl overflow-hidden; }
  .banner-padding { @apply p-6; } /* padding desacoplado para variar sin duplicar clase */
  .banner-card--gris { @apply bg-horno-gris text-horno-negro; }
  .banner-card--blanco { @apply bg-horno-blanco text-horno-negro border border-horno-gris; }
  .banner-card--violeta { @apply bg-horno-violeta text-horno-blanco; }
  .banner-card--amarillo { @apply bg-horno-amarillo text-horno-negro; }
  .banner-card--negro { @apply bg-horno-negro text-horno-blanco; }

  /* Tipografía escalable */
  .heading-1 { @apply font-heading text-4xl md:text-5xl; }
  .heading-2 { @apply font-heading text-3xl md:text-4xl; }
  .subheading { @apply font-complement text-xl md:text-2xl; }
  .body-text { @apply font-body text-base md:text-lg; }

  /* Imágenes responsivas estandar */
  .img-responsive { @apply max-w-full h-auto object-contain mx-auto; }
  .banner-card img { @apply max-w-full h-auto object-contain mx-auto; }
}
```
- Resultado: Usaremos `.container-*`, `.space-*`, `.heading-*`, evitando `max-w-md`, `mx-auto`, `p-4`, `gap-4` dispersos.

## Layout Principal (`+page.svelte`)
- Mantener Holy Grail. Limpiar `<style global>` obsoleto.
- Aplicar contenedor estandar:
```
<main class="overflow-y-auto">
  <div id="banner-container" class="container-narrow space-md flex flex-col items-center">
    <!-- componentes -->
  </div>
</main>
```

## Refactor de Componentes
- Patrón común: `banner-card banner-padding banner-card--{color}` + layout.
- `Header.svelte`: `<header class="banner-card banner-padding banner-card--blanco flex items-center justify-center"> ... </header>`
- `BannerDora.svelte`: `<div class="banner-card banner-padding banner-card--gris flex flex-row items-center justify-around"> ... </div>`
- `BannerRevivi.svelte`: `<div class="banner-card banner-padding banner-card--blanco flex flex-row items-center justify-around"> ... </div>`
- `BannerProximamente.svelte`: `<div class="banner-card banner-padding banner-card--gris flex items-center justify-center"><h2 class="heading-2">PROXIMAMENTE</h2></div>`
- `BannerIdea.svelte`: `<div class="banner-card banner-padding banner-card--blanco flex flex-col items-center justify-center"><h2 class="heading-2">¿Tenes una <span class="text-horno-violeta">idea</span>?</h2><p class="body-text mt-2">¡Contactanos!</p></div>`
- `BannerCarrusel.svelte`: `<Splide class="banner-card banner-padding banner-card--gris" ...>`
- Comentarios de cabecera en español en cada `.svelte` explicando el propósito.
- Reemplazar clases sueltas (`max-w-md`, `mx-auto`, `p-4`, `gap-4`) por utilidades estandar (`container-*`, `space-*`).

## Footer en Grid
- Sustituir por layout robusto:
```
<footer class="grid grid-cols-3 w-full">
  <div class="flex items-center justify-center p-6 h-24 bg-horno-violeta"> <!-- Icono 1 --></div>
  <div class="flex items-center justify-center p-6 h-24 bg-horno-negro">   <!-- Icono 2 --></div>
  <div class="flex items-center justify-center p-6 h-24 bg-horno-amarillo"> <!-- Icono 3 --></div>
</footer>
```

## Accesibilidad y Buenas Prácticas
- `alt` descriptivos en todas las imágenes.
- Roles/`aria-label` pertinentes en footer y Splide.
- Imports correctos y `onMount` en `BannerCarrusel` para SSR.

## Verificación
- Ejecutar build y preview.
- Validar que:
  - Imágenes no desbordan.
  - Espaciados y contenedores usan clases estandar.
  - Footer renderiza correctamente en grid.

## Entregables
- 8 archivos actualizados: `app.css`, `+page.svelte`, `Header.svelte`, `Footer.svelte`, `BannerDora.svelte`, `BannerRevivi.svelte`, `BannerProximamente.svelte`, `BannerIdea.svelte`, `BannerCarrusel.svelte`.
- Confirmación final en español.

Si apruebas, implemento el refactor y valido con build + preview.