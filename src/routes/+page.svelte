<script>
  import Slide01_IntroBlender from '$lib/components/Slide01_IntroBlender.svelte';
  import Slide02_Recordar from '$lib/components/Slide02_Recordar.svelte';
  import Slide03_FichaPersonaje from '$lib/components/Slide03_FichaPersonaje.svelte';
  import Slide04_EstudiosIntro from '$lib/components/Slide04_EstudiosIntro.svelte';
  import Slide05_EstudiosGag from '$lib/components/Slide05_EstudiosGag.svelte';
  import Slide06_EstudiosMedios from '$lib/components/Slide06_EstudiosMedios.svelte';
  import Slide07_EstudiosUni from '$lib/components/Slide07_EstudiosUni.svelte';
  import Slide08_MisTrabajos from '$lib/components/Slide08_MisTrabajos.svelte';
  import Slide09_Conectemos from '$lib/components/Slide09_Conectemos.svelte';
  // Scroll Snap vertical: primer slide es un componente, el resto placeholders (2-9)
  // Ahora el segundo slide también es componente; placeholders (3-9)
  // Y ahora el tercero también es componente; placeholders (4-9)
  // Todos los slides ahora son componentes; sin placeholders
  const sections = [];
  // Paleta temporal para diferenciar slides (usa colores de marca)
  const bgClasses = [];
</script>

<!--
  Contenedor principal con scroll-snap-type: y mandatory
  - h-screen: vista completa
  - overflow-y-scroll: scroll vertical
  - snap-y snap-mandatory: activación de scroll snap
-->
<main class="h-screen overflow-y-scroll snap-y snap-mandatory">
  <!-- Primer slide: componente real -->
  <section class="h-screen snap-start">
    <Slide01_IntroBlender />
  </section>

  <!-- Segundo slide: componente de texto multi-línea -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide02_Recordar />
  </section>

  <!-- Tercer slide: ficha de personaje -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide03_FichaPersonaje />
  </section>

  <!-- Cuarto slide: estudios intro -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide04_EstudiosIntro />
  </section>

  <!-- Quinto slide: estudios gag -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide05_EstudiosGag />
  </section>

  <!-- Sexto slide: estudios medios (lista) -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide06_EstudiosMedios />
  </section>

  <!-- Séptimo slide: estudios universitarios (lista) -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide07_EstudiosUni />
  </section>

  <!-- Octavo slide: mis trabajos (logos) -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide08_MisTrabajos />
  </section>

  <!-- Noveno slide: conectemos (links) -->
  <section class="h-screen snap-start flex items-center justify-center">
    <Slide09_Conectemos />
  </section>
</main>