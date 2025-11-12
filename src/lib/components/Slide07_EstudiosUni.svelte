<!--
  Slide07_EstudiosUni
  - Basado en "Estudios 4 universiadad.png": lista de estudios universitarios.
  - Contenedor a pantalla completa centrado y lista con variaciones en justificación.
-->
<div class="flex flex-col items-center justify-center h-screen p-4 text-center">
  <h2 class="font-display text-4xl mb-8">Mis estudios universitarios:</h2>

  <!-- Contenedor de lista -->
  <div class="flex flex-col gap-4 max-w-lg w-full">
    <!-- Item 1: carrera, institución, estado -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">Abogacia</span>
      <span class="font-body text-xl text-center">UCA</span>
      <span class="font-body text-xl font-bold text-right">ABANDONADO</span>
    </div>

    <!-- Item 2: carrera, institución, estado -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 grid grid-cols-3 gap-4 items-center">
      <span class="font-display text-2xl">Informatica</span>
      <span class="font-body text-xl text-center">UNL</span>
      <span class="font-body text-xl font-bold text-right">ABANDONADO</span>
    </div>

    <!-- Item 3: justify-center -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 flex items-center justify-center">
      <span class="font-body text-xl">La tercera es la vencida</span>
    </div>

    <!-- Item 4: justify-center -->
    <div class="bg-blanco-texto text-negro-bg rounded-md p-4 flex items-center justify-center">
      <span class="font-body text-xl">actualizaremos...</span>
    </div>
  </div>
</div>