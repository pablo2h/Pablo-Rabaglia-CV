<script>
  import { onMount } from 'svelte';
  // CSS de Splide: usar el paquete oficial para evitar errores de resolución en build
  import '@splidejs/splide/css';

  let SplideComp;
  let SplideSlideComp;

  const options = {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    pagination: true,
    arrows: false,
    perPage: 1
  };

  // Cargar svelte-splide solo en cliente para evitar errores de SSR (self/window)
  onMount(async () => {
    const mod = await import('svelte-splide');
    SplideComp = mod.Splide;
    SplideSlideComp = mod.SplideSlide;
  });
</script>
{#if SplideComp && SplideSlideComp}
  <svelte:component this={SplideComp} {options} aria-label="Carrusel de banners" class="w-full max-w-md mx-auto bg-horno-gris rounded-xl overflow-hidden">
    <svelte:component this={SplideSlideComp}>
      <div class="h-24 sm:h-28 md:h-32 lg:h-40 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <h2 class="text-2xl font-semibold text-horno-negro">Banner 1</h2>
      </div>
    </svelte:component>
    <svelte:component this={SplideSlideComp}>
      <div class="h-24 sm:h-28 md:h-32 lg:h-40 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <h2 class="text-2xl font-semibold text-horno-negro">Banner 2</h2>
      </div>
    </svelte:component>
    <svelte:component this={SplideSlideComp}>
      <div class="h-24 sm:h-28 md:h-32 lg:h-40 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <h2 class="text-2xl font-semibold text-horno-negro">Banner 3</h2>
      </div>
    </svelte:component>
  </svelte:component>
{/if}

<style>
  :global(.splide__pagination) {
    bottom: 0.75rem; /* separa los puntitos del borde */
  }

  :global(.splide__pagination__page) {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background-color: #e5e7eb; /* gris claro por defecto */
    opacity: 1;
  }

  :global(.splide__pagination__page.is-active) {
    background-color: #4F26C0; /* horno-violeta */
    transform: scale(1.1);
  }
</style>