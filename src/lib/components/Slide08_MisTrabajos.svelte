<!--
  Slide08_MisTrabajos
  - Basado en "mis trabajos.png": lista de trabajos destacados con logos.
  - Las imágenes deben ubicarse en /static/logos/ para que se sirvan desde /logos/.
-->
<script>
  import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center justify-center h-screen p-4 text-center">
  <h2 class="font-display text-4xl mb-8">Proyectos y Logros</h2>

  <!-- Nueva lista en 3 columnas -->
  <div class="flex flex-col gap-4 max-w-3xl w-full">
    <!-- Item 1: 2019 | Clandestina | Coordinador -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2019</span>
      <img src={`${base}/logos/clandestina-logo.jpg`} alt="Clandestina" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right">Distribución y Producción</span>
    </div>

    <!-- Item 2: 2024 | Barro | Dirección General -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2024</span>
      <img src={`${base}/logos/barro-logo.png`} alt="Barro" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right">Dirección General</span>
    </div>

    <!-- Item 3: 2024 | /cde | Dirección General -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2024</span>
      <img src={`${base}/logos/cde-logo.png`} alt="/cde" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right">Coordinador</span>
    </div>

    <!-- Item 4: 2024 | BLENDER STREAM LAB | Ganador -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2024</span>
      <img src={`${base}/logos/blender-stream-lab.png`} alt="BLENDER STREAM LAB" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right font-bold text-amarillo-acento">Ganador</span>
    </div>

    <!-- Item 5: 2025 | Deli | Producción Conducción -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2025</span>
      <img src={`${base}/logos/deli-logo.png`} alt="Deli" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right">Producción Conducción</span>
    </div>

    <!-- Item 6: 2025 | Dora | Distribución y Producción -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2025</span>
      <img src={`${base}/logos/dora-logo.png`} alt="Dora" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right">Dirección General</span>
    </div>

    <!-- Item 7: 2025 | BLENDER STREAM LAB (2da Ed.) | Ganador -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">2025</span>
      <img src={`${base}/logos/blender-stream-lab-2da.png`} alt="BLENDER STREAM LAB (2da Ed.)" class="h-12 object-contain mx-auto" />
      <span class="font-body text-xl text-right font-bold text-amarillo-acento">Ganador</span>
    </div>
  </div>

  <!-- Disclaimer -->
  <p class="font-body mt-4 text-sm">*los destacados</p>
</div>