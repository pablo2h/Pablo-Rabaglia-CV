# PLAYBOOK: Create New Banner Component

## 1. OBJECTIVE
To create a new, responsive banner component (.svelte) that conforms to the project's Design System.

## 2. PROCEDURE

### File Creation:
- **Location:** `src/lib/components/`
- **Name:** `Banner[Name].svelte` (e.g., `BannerProximamente.svelte`)

### Boilerplate (Svelte Structure):
You MUST use this exact structure.
You MUST select one color modifier (.banner-card--[color]).

```svelte
<script>
  // Imports (if any)
</script>

<div class="banner-card banner-card--gris flex items-center justify-center">
  
  <h2>Placeholder Title</h2>
  
</div>
```

### Image Handling (If Applicable):
- All `<img>` tags MUST be placed inside the `.banner-card` div.
- The global CSS rule `.banner-card img` will automatically make them responsive.
- **RULE:** You MUST add a descriptive alt attribute.

### Final Step (Assembly):
After creating the component, you MUST import it and add it to the stack in `src/routes/+page.svelte` (inside the `<main>` area).