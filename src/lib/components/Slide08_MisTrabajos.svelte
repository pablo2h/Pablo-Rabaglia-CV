<!--
  Slide08_MisTrabajos
  - Basado en "mis trabajos.png": lista de trabajos destacados con logos.
  - Las imágenes deben ubicarse en /static/logos/ para que se sirvan desde /logos/.
-->
<script>
  import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center justify-center h-full p-4 text-center">
  <h2 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">Proyectos y Logros</h2>
  <div class="flex flex-col gap-4 max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full">
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl">2019</span>
      <img src={`${base}/logos/clandestina-logo.jpg`} alt="Clandestina" class="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-right">Distribución y Producción</span>
    </div>

    <!-- Item 2: 2024 | Barro | Dirección General -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-2xl lg:text-3xl">2024</span>
      <img src={`${base}/logos/barro-logo.png`} alt="Barro" class="h-12 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-xl lg:text-2xl xl:text-3xl text-right">Dirección General</span>
    </div>

    <!-- Item 3: 2024 | /cde | Dirección General -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-2xl lg:text-3xl">2024</span>
      <img src={`${base}/logos/cde-logo.png`} alt="/cde" class="h-12 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-xl lg:text-2xl xl:text-3xl text-right">Coordinador</span>
    </div>

    <!-- Item 4: 2024 | BLENDER STREAM LAB | Ganador -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-2xl lg:text-3xl">2024</span>
      <img src={`${base}/logos/blender-stream-lab.png`} alt="BLENDER STREAM LAB" class="h-12 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-xl lg:text-2xl xl:text-3xl text-right font-bold text-amarillo-acento">Ganador</span>
    </div>

    <!-- Item 5: 2025 | Deli | Producción Conducción -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-2xl lg:text-3xl">2025</span>
      <img src={`${base}/logos/deli-logo.png`} alt="Deli" class="h-12 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-xl lg:text-2xl xl:text-3xl text-right">Producción Conducción</span>
    </div>

    <!-- Item 6: 2025 | Dora | Distribución y Producción -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-2xl lg:text-3xl">2025</span>
      <img src={`${base}/logos/dora-logo.png`} alt="Dora" class="h-12 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-xl lg:text-2xl xl:text-3xl text-right">Dirección General</span>
    </div>

    <!-- Item 7: 2025 | BLENDER STREAM LAB (2da Ed.) | Ganador -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 lg:p-6 grid grid-cols-3 gap-4 lg:gap-6 items-center">
      <span class="font-display text-2xl lg:text-3xl">2025</span>
      <img src={`${base}/logos/blender-stream-lab-2da.png`} alt="BLENDER STREAM LAB (2da Ed.)" class="h-12 lg:h-20 xl:h-24 object-contain mx-auto" />
      <span class="font-body text-xl lg:text-2xl xl:text-3xl text-right font-bold text-amarillo-acento">Ganador</span>
    </div>
  </div>

  <!-- Disclaimer -->
  <p class="font-body mt-4 text-xs sm:text-sm lg:text-base xl:text-lg">*los destacados</p>
</div>