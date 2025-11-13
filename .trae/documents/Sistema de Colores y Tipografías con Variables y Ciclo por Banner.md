## Objetivo
- Definir una paleta centralizada con variables (Dora y futuro Horno).
- Distribuir colores de fondo en banners con una lógica cíclica para variedad.
- Unificar tipografías (familias, pesos y tamaños) de forma consistente.

## Problemas Detectados
- Los fondos alternos por `nth-child` generan advertencias y no garantizan variedad controlada.
- Uso de `@apply` en global sin referencias correctas puede romper el build.
- Tipografías no aplicadas de forma uniforme ni con jerarquías claras.

## Paleta y Variables (Root)
- Crear variables CSS en `app.css` bajo scopes de tema:
```
:root.theme-dora {
  --dora-pink: #FC95BB;
  --dora-yellow: #F5C92B;
  --dora-orange: #FA8632;
  --dora-red: #F05B31;
  --dora-blue: #0083CF;
  --dora-light-blue: #80C7D9;
  --dora-green: #2DB092;
  --dora-black: #000000;
  --dora-gray: #F7F5F6;
}
/* Fondo por defecto si no se setea explícito */
.banner-card { background-color: var(--banner-bg, var(--dora-gray)); }
```
- Preparar `:root.theme-horno { ... }` como futuro segundo tema con su paleta.

## Distribución de Colores (Lógica)
- En `+page.svelte`, definir una lista de banners y una lista de colores (variables) y asignar por índice:
```
<script>
  import BannerDora from '$lib/components/BannerDora.svelte';
  import BannerRevivi from '$lib/components/BannerRevivi.svelte';
  import BannerProximamente from '$lib/components/BannerProximamente.svelte';
  import BannerIdea from '$lib/components/BannerIdea.svelte';
  import BannerCarrusel from '$lib/components/BannerCarrusel.svelte';

  const banners = [BannerDora, BannerRevivi, BannerProximamente, BannerIdea, BannerCarrusel];
  const palette = ['var(--dora-light-blue)','var(--dora-yellow)','var(--dora-orange)','var(--dora-pink)','var(--dora-gray)'];
</script>
<div id="banner-container" class="flex flex-col gap-4 p-4 max-w-md mx-auto">
  {#each banners as Banner, i}
    <div class="banner-card" style={`--banner-bg: ${palette[i % palette.length]}`}>
      <Banner />
    </div>
  {/each}
</div>
```
- Ventajas: 100% control, sin depender de `nth-child`, fácil cambiar orden y tema.
- Alternativa Tailwind: usar clases (`bg-dora-pink`, etc.) con `safelist` en `tailwind.config.js` si prefieres clases en vez de variables.

## Tipografías (Jerarquía y Uso)
- Configurar familias (ya descargadas o vía Google Fonts) y mapear en Tailwind:
  - `font-heading`: DynaPuff 700 (solo bold) para títulos.
  - `font-complement`: Baloo 2 800 para complementos/segunda jerarquía.
  - `font-body`: Poppins para textos (todas sus variantes).
- Aplicación sugerida:
  - Títulos de banner: `font-heading text-3xl md:text-4xl text-horno-negro`.
  - Subtítulos/complemento: `font-complement text-xl md:text-2xl`.
  - Texto de lectura: `font-body text-base md:text-lg`.
- Acentos de color en texto: `text-[var(--dora-blue)]` o clases `text-dora-blue`.

## Limpieza de Estilos Existentes
- Eliminar el bloque `<style global>` con `nth-child` de `+page.svelte` para evitar advertencias y duplicidad.
- Mantener `.banner-card` como base global en `app.css` y las reglas de imagen responsiva.

## Verificación
- Ejecutar `npm run build` y confirmar que no hay errores de Tailwind ni advertencias críticas.
- Lanzar `npm run preview` y revisar que cada banner rota correctamente el color.
- Validar tipografías en encabezados, complementos y cuerpo.

## Entregables
- `app.css`: variables CSS `:root.theme-dora`, fondo por `--banner-bg`, y reglas de `.banner-card`.
- `tailwind.config.js`: colores Dora (clases), familias tipográficas y (opcional) `safelist` de `bg-dora-*`.
- `+page.svelte`: render de banners con asignación cíclica de `--banner-bg`.
- Actualización de componentes: aplicar `font-heading`/`font-body` según jerarquía.

## Extensión (Tema Horno)
- Añadir `:root.theme-horno` con su paleta y cambiar tema aplicando `class="theme-horno"` en `<body>` para conmutar colores sin tocar componentes.
