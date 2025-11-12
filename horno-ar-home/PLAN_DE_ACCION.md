# Plan de Acción: Home horno.ar

Este plan detalla la creación modular de componentes para el sitio web.

## Tareas de Componentes

- [ ] Crear `Header.svelte`: (Banner superior con `logo-horno.png`).
- [ ] Crear `BannerDora.svelte`: (Banner con `flor-dora-1`, `logo-dora`, `flor-dora-2`).
- [ ] Crear `BannerRevivi.svelte`: (Banner con `logo-dora-groove-vertical`).
- [ ] Crear `BannerProximamente.svelte`: (Banner de texto "PROXIMAMENTE").
- [ ] Crear `BannerIdea.svelte`: (Banner de texto "¿Tenes una idea? ¡Contactanos!").
- [ ] Crear `BannerCarrusel.svelte`: (Usando `svelte-splide`, con 3 placeholders).
- [ ] Crear `Footer.svelte`: (Re-crear el footer desde el screenshot de dora.com.ar).
- [ ] Ensamblar `+page.svelte`: Importar y apilar todos los componentes (1-7) en la página principal (`src/routes/+page.svelte`) usando `flex flex-col gap-4`.