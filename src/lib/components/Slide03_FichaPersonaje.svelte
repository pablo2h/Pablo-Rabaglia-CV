<!--
  Slide03_FichaPersonaje
  - Ficha de personaje basada en "3 Ficha de persoanje.png".
  - Contenedor de slide a pantalla completa que centra una tarjeta.
  - La tarjeta incluye pestañas superiores, título y contenido en grid (4 columnas).
-->
<div class="h-screen flex items-center justify-center">
  <!-- Tarjeta principal -->
  <div class="w-full max-w-3xl rounded-lg bg-blanco-texto text-negro-bg p-6 md:p-8 shadow-sm">
    <!-- Foto de perfil -->
    <img
      src="/profile/profile-photo.jpg"
      alt="Foto de Pablo Rabaglia"
      class="mx-auto rounded-full h-32 w-32 object-cover mb-6"
    />

    <!-- Título -->
    <div class="text-center font-body text-xl mb-4">Ficha de personaje</div>

    <!-- Contenido en grid -->
    <div class="grid grid-cols-4 gap-4">
      <!-- Row 1 -->
      <div class="col-span-2 bg-gray-300 rounded-md p-4 text-center">
        <div class="font-display text-lg">Nombre</div>
        <div class="font-display text-2xl">Pablo Rabaglia</div>
      </div>
      <div class="col-span-2 bg-gray-300 rounded-md p-4 text-center">
        <div class="font-display text-lg">Edad</div>
        <div class="font-display text-2xl">25</div>
      </div>

      <!-- Row 2 -->
      <div class="col-span-2 bg-gray-300 rounded-md p-4 text-center">
        <div class="font-display text-lg">Ciudad</div>
        <div class="font-display text-2xl">Paraná, ER</div>
      </div>
      <div class="col-span-2 bg-gray-300 rounded-md p-4 text-center">
        <div class="font-display text-lg">Ciudad</div>
        <div class="font-display text-2xl">Paraná, ER</div>
      </div>

      <!-- Row 3 -->
      <div class="col-span-2 bg-gray-300 rounded-md p-4 text-center">
        <div class="font-display text-lg">Situacion Laboral:</div>
        <div class="font-display text-2xl">Ubicado</div>
      </div>
      <div class="col-span-2 bg-gray-300 rounded-md p-4 text-center">
        <div class="font-display text-lg">Orientacion Laboral:</div>
        <div class="font-display text-2xl">Flexible</div>
      </div>

      <!-- Título de habilidades -->
      <div class="col-span-4 text-center font-body text-lg">Puntos de habilidad: (de 0 a 10)</div>

      <!-- Row 4 (skills) -->
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Tecnologia</div>
        <div class="font-display text-2xl">7</div>
      </div>
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Carisma</div>
        <div class="font-display text-2xl">8</div>
      </div>
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Destreza</div>
        <div class="font-display text-2xl">6</div>
      </div>
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Fuerza</div>
        <div class="font-display text-2xl">4</div>
      </div>

      <!-- Row 5 (skills) -->
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Idiomas</div>
        <div class="font-display text-2xl">3</div>
      </div>
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Disciplina</div>
        <div class="font-display text-2xl">5</div>
      </div>
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Inteligencia</div>
        <div class="font-display text-2xl">7</div>
      </div>
      <div class="bg-gray-300 rounded-md p-4 text-center">
        <div class="font-body">Energia</div>
        <div class="font-display text-2xl">5</div>
      </div>
    </div>
  </div>
</div>

<!-- Notas:
  - Se usan colores de marca: bg-blanco-texto y text-negro-bg para la tarjeta.
  - Las cajas siguen un patrón uniforme: fondo gris claro, padding y bordes redondeados.
  - Ajustar tamaños (text-2xl, text-lg) según se requiera para acercarse al mockup.
-->