<!--
  Slide03_FichaPersonaje
  - Ficha de personaje basada en "3 Ficha de persoanje.png".
  - Contenedor de slide a pantalla completa que centra una tarjeta.
  - La tarjeta incluye pestañas superiores, título y contenido en grid (4 columnas).
-->
<script>
  import { base } from '$app/paths';
</script>

<div class="h-screen flex items-center justify-center px-4">
  <!-- Tarjeta principal -->
  <div class="w-full max-w-md md:max-w-3xl rounded-lg bg-blanco-texto text-negro-bg p-5 md:p-8 shadow-sm max-h-[85vh] overflow-y-auto">
    <!-- Foto de perfil -->
    <img
      src={`${base}/profile/profile-photo.jpg`}
      alt="Foto de Pablo Rabaglia"
      class="mx-auto rounded-full h-24 w-24 md:h-32 md:w-32 object-cover mb-6"
    />

    <!-- Título -->
    <div class="text-center font-body text-lg md:text-xl mb-4">Ficha de personaje</div>

    <!-- Contenido en grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      <!-- Row 1 -->
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center md:col-span-2">
        <div class="font-display text-sm md:text-lg">Nombre</div>
        <div class="font-display text-lg md:text-2xl">Pablo Rabaglia</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center md:col-span-2">
        <div class="font-display text-sm md:text-lg">Edad</div>
        <div class="font-display text-lg md:text-2xl">25</div>
      </div>

      <!-- Row 2 -->
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center md:col-span-2">
        <div class="font-display text-sm md:text-lg">Ciudad</div>
        <div class="font-display text-lg md:text-2xl">Paraná, ER</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center md:col-span-2">
        <div class="font-display text-sm md:text-lg">Ciudad</div>
        <div class="font-display text-lg md:text-2xl">Paraná, ER</div>
      </div>

      <!-- Row 3 -->
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center md:col-span-2">
        <div class="font-display text-sm md:text-lg">Situacion Laboral:</div>
        <div class="font-display text-lg md:text-2xl">Ubicado</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center md:col-span-2">
        <div class="font-display text-sm md:text-lg">Orientacion Laboral:</div>
        <div class="font-display text-lg md:text-2xl">Flexible</div>
      </div>

      <!-- Título de habilidades -->
      <div class="col-span-2 md:col-span-4 text-center font-body text-sm md:text-lg">Puntos de habilidad: (de 0 a 10)</div>

      <!-- Row 4 (skills) -->
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Tecnologia</div>
        <div class="font-display text-lg md:text-2xl">7</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Carisma</div>
        <div class="font-display text-lg md:text-2xl">8</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Destreza</div>
        <div class="font-display text-lg md:text-2xl">6</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Fuerza</div>
        <div class="font-display text-lg md:text-2xl">4</div>
      </div>

      <!-- Row 5 (skills) -->
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Idiomas</div>
        <div class="font-display text-lg md:text-2xl">3</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Disciplina</div>
        <div class="font-display text-lg md:text-2xl">5</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Inteligencia</div>
        <div class="font-display text-lg md:text-2xl">7</div>
      </div>
      <div class="bg-gray-300 rounded-md p-3 md:p-4 text-center">
        <div class="font-body text-sm md:text-base">Energia</div>
        <div class="font-display text-lg md:text-2xl">5</div>
      </div>
    </div>
  </div>
</div>

<!-- Notas:
  - Se usan colores de marca: bg-blanco-texto y text-negro-bg para la tarjeta.
  - Las cajas siguen un patrón uniforme: fondo gris claro, padding y bordes redondeados.
  - Ajustar tamaños (text-2xl, text-lg) según se requiera para acercarse al mockup.
-->