---
name: Nocturne Gastropub System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cfc2d4'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#988d9e'
  outline-variant: '#4c4452'
  surface-tint: '#dfb7ff'
  primary: '#dfb7ff'
  on-primary: '#4a007f'
  primary-container: '#6b21a8'
  on-primary-container: '#d7a8ff'
  inverse-primary: '#803abd'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#4c4b4b'
  on-tertiary-container: '#bdbbbb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f1dbff'
  primary-fixed-dim: '#dfb7ff'
  on-primary-fixed: '#2d0050'
  on-primary-fixed-variant: '#661aa3'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of an exclusive, late-night tapas lounge. It centers on an "Atmospheric Minimalism" aesthetic, where the absence of light is used to frame moments of luxury. The target audience is the discerning epicurean who values intimacy and precision. 

The visual language relies on high-contrast pairings and razor-sharp execution. By utilizing a deep, void-like black as the canvas, the system allows the Royal Purple and Gold accents to shimmer like stage lights. The emotional response is one of sophistication, indulgence, and quiet confidence. Every element must feel intentional, avoiding clutter to maintain a premium, curated experience.

## Colors

The palette is strictly dark-mode, leveraging the psychological weight of pure black (#000000). 

- **Primary (Royal Purple):** Used for interactive states, hover effects, and category highlights. It represents the "vibe" of the gastropub.
- **Secondary (Gold):** Reserved for high-value information, such as pricing, "Chef's Specials," and brand iconography. It must be used sparingly to maintain its prestige.
- **Tertiary (Onyx):** A subtle off-black (#1A1A1A) used for card backgrounds or surface separation where pure black creates too much optical vibration.
- **Accents:** Use white (#FFFFFF) only for critical legibility in body copy; otherwise, lean into tinted greys to keep the "low-light" feel.

## Typography

This design system utilizes a high-contrast typographic pairing to balance heritage and modernity. 

- **Display & Headlines:** Playfair Display provides a literary, editorial feel. Use "Display-LG" for main menu categories (e.g., *Vinos*, *Raciones*).
- **Body & Metadata:** Inter is used for menu descriptions and functional text. It ensures legibility in low-light environments.
- **Pricing:** Prices should be set in Inter (Title-MD) with Gold coloring to ensure they are immediate but secondary to the dish name.
- **Styling:** Use uppercase with increased letter spacing for labels and section headers to create a "gallery tag" appearance.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a cinematic, centered composition that feels like a physical printed menu. 

- **Grid:** A 12-column grid is used for desktop. Menu items typically span 4 columns (3-up layout) or 6 columns (2-up layout) to allow for generous negative space.
- **Mobile:** Transitions to a single-column fluid layout with 16px side margins. 
- **Rhythm:** Vertical rhythm is intentionally loose. Sections should be separated by a minimum of 80px to prevent the "wall of text" effect common in digital menus.
- **Focus:** Use center-alignment for display headers to anchor the eye, while keeping menu descriptions left-aligned for reading comfort.

## Elevation & Depth

To maintain a sophisticated aesthetic, this system avoids traditional drop shadows. Depth is instead achieved through **Low-Contrast Outlines** and **Tonal Layering**.

- **Surfaces:** Most content sits directly on the #000000 background. Interactive cards use a 1px solid border in Royal Purple (at 30% opacity) or a subtle background of #1A1A1A.
- **Gold Accents:** Use thin, 1px Gold borders to highlight "Chef’s Specials" or seasonal offerings. This "framed" look suggests a physical plaque.
- **Glassmorphism:** For mobile navigation bars or sticky headers, use a backdrop blur (20px) with a 60% transparent black fill to create a sense of depth without breaking the dark aesthetic.

## Shapes

The shape language is strictly **Sharp (0)**. 

Right angles reinforce the architectural, "fine-dining" feel of the system. This applies to buttons, input fields, image containers, and cards. The only exception to the sharp rule is for purely circular elements like radio buttons or specific ornamental icons, though even these should lean toward a "diamond" or "square" motif where possible.

## Components

- **Menu Cards:** Should be minimal. Dish name in Playfair Display (Headline-LG), description in Inter (Body-MD), and price in Gold. No heavy containers—use whitespace to separate items.
- **Primary Buttons:** Solid Royal Purple background with white text, or a Gold 1px border with transparent background for secondary actions. Always 0px border-radius.
- **Category Chips:** Small, uppercase labels with a 1px Gold border. Used for dietary tags like "GF" or "VEGAN".
- **Input Fields:** Bottom-border only (1px Gold or Purple) to mimic high-end stationery.
- **Separators:** Use thin (1px) horizontal lines in dark purple to divide menu sections. Avoid full-width lines; use 50% width centered lines for a more decorative, boutique feel.
- **Imagery:** Photos should be high-contrast with dark backgrounds, fitting seamlessly into the UI. Use 0px rounded corners for all image containers.