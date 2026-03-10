# Design System Implementation Approach

*Owner: Frontend Development Team*

## 1. Token Implementation (Vanilla CSS / CSS Modules)
We will enforce the "GreatWood" aesthetic using a strict CSS variable token system mapped to a `/styles/variables.css` global file. No magic numbers or hardcoded hex codes are allowed in component files.

### Color Tokens
```css
:root {
  /* Backgrounds / Surfaces */
  --bg-canvas: #F7F5F0;    /* Warm Alabaster - Primary page background */
  --bg-surface: #FCFCFA;   /* Warm Off-White - Elevated cards */
  --bg-elevated: #EFECE5;  /* Soft Oatmeal - Secondary sections */
  --bg-dark: #1A1A1A;      /* Deep Charcoal - Dark mode/Editorial blocks */

  /* Text / Typography */
  --text-primary: #1A1A1A; /* Deep Charcoal - Maximum legibility */
  --text-secondary: #666666;/* Muted Slate - Metadata/Fine print */
  --text-inverse: #F7F5F0; /* Warm Alabaster - Text on dark bg */

  /* Accents / Interactive */
  --accent-primary: #8B4513;   /* Deep Terracotta - Main buttons */
  --accent-secondary: #CDBA96; /* Muted Ochre - Hover states */
  --accent-success: #4A5D4E;   /* Forest Green - In Stock badges */
  --border-subtle: #E0DCD3;    /* Architectural borders */
}
```

### Typography Tokens
We rely on dramatic contrast between serif and sans-serif.
```css
:root {
  --font-serif: 'Monument Extended', 'Ogg', serif;
  --font-sans: 'Inter', 'Roobert', sans-serif;

  /* Scale */
  --text-h1: 3.5rem; /* 56px, tracking -0.02em, line-height 1.1 */
  --text-h2: 2.5rem; /* 40px, tracking -0.01em, line-height 1.2 */
  --text-h3: 1.5rem; /* 24px, tracking normal, line-height 1.3 */
  
  --text-body-lg: 1.125rem; /* 18px, line-height 1.6 */
  --text-body: 1rem;        /* 16px, line-height 1.6 (minimum size) */
  --text-sm: 0.875rem;      /* 14px, line-height 1.5 */
  --text-micro: 0.75rem;    /* 12px, tracking 0.04em uppercase */
}
```

## 2. Shape and Elevation Parameters
*   **Border Radius:** Strict 0px to 2px for all components (buttons, cards, inputs) to maintain an architectural, precise feel.
    `--radius-base: 0px;` or `--radius-soft: 2px;`
*   **Elevation:** No decorative drop shadows or heavy blur effects. Use subtle 1px structural borders (`--border-subtle`) instead of shadows to lift cards.

## 3. Motion Language implementation
*   **Timing:** Deliberate and smooth. 
    `--transition-duration: 400ms;`
*   **Easing:** Subtle ease-out.
    `--transition-ease: cubic-bezier(0.25, 1, 0.5, 1);`
*   **Interactions:** Hover states should scale images up slightly (1.0 to 1.03) or perform a slow cross-fade. No jittering or bouncing.
