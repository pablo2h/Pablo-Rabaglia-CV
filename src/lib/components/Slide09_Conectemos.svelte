<script>
  // Icono de enlace externo en SVG inline como string reutilizable
  const externalIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-8 w-8" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;
</script>

<div class="flex flex-col items-center justify-center h-screen p-4">
  <h2 class="font-display text-6xl mb-8">¡Conectemos!</h2>

  <div class="flex flex-col gap-4 items-start">
    <a href="https://www.instagram.com/pablorabaglia/" target="_blank" rel="noopener noreferrer" class="flex flex-row items-center gap-3">
      <span class="font-display text-5xl">Instagram</span>
      {@html externalIconSvg}
    </a>
    <a href="https://www.linkedin.com/in/pablo-rabaglia/" target="_blank" rel="noopener noreferrer" class="flex flex-row items-center gap-3">
      <span class="font-display text-5xl">Linkedin</span>
      {@html externalIconSvg}
    </a>
    <a href="mailto:pabloo.hd@gmail.com" target="_blank" rel="noopener noreferrer" class="flex flex-row items-center gap-3">
      <span class="font-display text-5xl">Mail</span>
      {@html externalIconSvg}
    </a>
    <a href="https://wa.me/5493434056621" target="_blank" rel="noopener noreferrer" class="flex flex-row items-center gap-3">
      <span class="font-display text-5xl">Whatsapp</span>
      {@html externalIconSvg}
    </a>
    <a href="https://github.com/pablo2h" target="_blank" rel="noopener noreferrer" class="flex flex-row items-center gap-3">
      <span class="font-display text-5xl">Github</span>
      {@html externalIconSvg}
    </a>
  </div>
</div>