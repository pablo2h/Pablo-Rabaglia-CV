<script>
  import Header from '$lib/components/Header.svelte';
  import BannerDora from '$lib/components/BannerDora.svelte';
  import BannerRevivi from '$lib/components/BannerRevivi.svelte';
  import BannerProximamente from '$lib/components/BannerProximamente.svelte';
  import BannerIdea from '$lib/components/BannerIdea.svelte';
  import BannerCarrusel from '$lib/components/BannerCarrusel.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center gap-4 p-3 sm:p-4">
  <Header />
  <BannerDora />
  <BannerRevivi />
  <BannerProximamente />
  <BannerIdea />
  <BannerCarrusel />
  <Footer />
</main>
