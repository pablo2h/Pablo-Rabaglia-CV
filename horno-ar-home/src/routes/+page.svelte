<script>
  import Header from '$lib/components/Header.svelte';
  import BannerDora from '$lib/components/BannerDora.svelte';
  import BannerRevivi from '$lib/components/BannerRevivi.svelte';
  import BannerProximamente from '$lib/components/BannerProximamente.svelte';
  import BannerIdea from '$lib/components/BannerIdea.svelte';
  import BannerCarrusel from '$lib/components/BannerCarrusel.svelte';
  import BannerWebMeditaciones from '$lib/components/BannerWebMeditaciones.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="h-screen grid grid-rows-[auto_1fr_auto]">
  <Header />

  <main class="overflow-y-auto">
    <div id="banner-container" class="container-narrow space-md flex flex-col items-center">
      <BannerWebMeditaciones />
      <BannerDora />
      <BannerRevivi />
      <BannerProximamente />
      <BannerIdea />
      <BannerCarrusel />
    </div>
  </main>

  <Footer />
</div>

<!-- Estilos globales eliminados: ahora todo se maneja por clases estándar -->
