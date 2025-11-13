# PLAYBOOK: Refactor Main Page Layout (Holy Grail)

## 1. OBJECTIVE
To implement or refactor the main page (src/routes/+page.svelte) to the project's standard "Holy Grail" layout. This layout fixes the Header/Footer and makes the central content scrollable.

## 2. PROCEDURE

### File to Edit: `src/routes/+page.svelte`

### Verify Imports:
Ensure all components (Header, Footer, and all Banner*.svelte components) are imported in the `<script>` tag.

### Wipe & Replace Structure:
Delete all existing HTML markup and replace it with this exact 3-row grid structure:

```svelte
<div class="h-screen grid grid-rows-[auto_1fr_auto]">
  
  <Header />
  <main class="overflow-y-auto">
    
    <div id="banner-container" class="flex flex-col items-center gap-4 p-4 max-w-md mx-auto">
      
      <BannerDora />
      <BannerRevivi />
      <BannerProximamente />
      <BannerIdea />
      <BannerCarrusel />
      
    </div>
  </main>
  <Footer />
</div>
```

### Verify Constraints (Critical):
- **div.h-screen:** MUST define the 3-row grid.
- **main.overflow-y-auto:** MUST be present to enable scrolling.
- **div#banner-container:** MUST have max-w-md and mx-auto (as per 00_MISSION.md).