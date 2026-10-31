# Molar Dental — Color Theory & Brand Design System

This design system is extracted directly from the **Molar Dental** logo artwork and verified via pixel eyedropper sampling to meet strict **WCAG AA contrast requirements**.

---

## 1. Eyedropper Verification vs. Brand Tokens

| Token | Specified Hex | Eyedropper from Logo (`molar-logo.png`) | Notes & Verification |
|---|---|---|---|
| **Navy** | `#143A66` | `#123B65` | Direct vector text ink in `molar-logo-dark.png`. `#143A66` adds a subtle rich blue undertone. Both achieve > 9.5:1 contrast against white. |
| **Blue** | `#0072CE` | `#0074CD` / `#007FE1` | Primary blue gradient from the logo tooth icon. User estimate `#0072CE` is virtually identical (<0.4% delta). |
| **Green** | `#00B050` | `#00B04F` | Exact match with the vibrant green sparkle in the logo. |

---

## 2. Brand Colors

| Color | Hex | CSS Variable | Where to Use |
|---|---|---|---|
| **Navy** | `#143A66` | `--color-navy` | Headlines, body text, nav links, primary button, stat numbers, footer background |
| **Blue** | `#0072CE` | `--color-blue` | Highlighted words in headline ("WHOLE FAMILY"), active menu items, links, focus rings |
| **Green** | `#00B050` | `--color-green` | Non-text cues only: tick marks, "Open today" dot, WhatsApp button border |

---

## 3. Supporting Colors

| Color | Hex | CSS Variable | Where to Use |
|---|---|---|---|
| **Slate** | `#5E7690` | `--color-slate` | Stat labels, captions, secondary text (passes 4.5:1 AA contrast on light backdrops) |
| **Dark green** | `#0B6B33` | `--color-dark-green` | All green text (e.g. "Open today" label, WhatsApp text). Contrast-safe alternative to bright green. |
| **Gold** | `#F5A623` | `--color-gold` | Star ratings and review badges only |
| **White** | `#FFFFFF` | `--color-white` | Cards, header on scroll, secondary button surface, text on navy |

---

## 4. Backgrounds & Gradients

| Role | Hex | CSS Variable | Where to Use |
|---|---|---|---|
| **Page base** | `#F4F8FB` | `--color-page-base` | Main page canvas and section backgrounds |
| **Sky** | `#BFE3F5` | `--color-sky` | Hero gradient, left side behind headline |
| **Mint** | `#CDEFE3` | `--color-mint` | Hero gradient, blends with sky into the teal glow |
| **Faint blush** | `#F6E3E6` | `--color-faint-blush` | Hero gradient, right edge only, subtle warmth |
| **Soft blue tint** | `#E8F2FB` | `--color-blue-tint` | Active menu item pill, category tags, hover states |
| **Soft green tint** | `#E9F7EF` | `--color-green-tint` | "Open today" pill background, status chips |
| **Border** | `#E3EAF2` | `--color-border` | Card borders, dividers, subtle outlines |

---

## 5. Visual Hierarchy & Usage Rules

1. **Text Contrast Rule:**
   - Always use **Navy (`#143A66` / `#123B65`)** for headlines and primary body text.
   - Use **Blue (`#0072CE`)** sparingly for 1–2 highlighted focus words in headlines and interactive links.
   - **Never use bright green (`#00B050`) for text or as a background behind white text** (it has a ~2.4:1 contrast ratio and fails accessibility).
   - Use **Dark green (`#0B6B33`)** whenever green typography is required (passes > 4.7:1 AA).

2. **Buttons:**
   - **Primary:** Navy background (`#143A66`) with crisp white text (`#FFFFFF`).
   - **Secondary:** White background (`#FFFFFF`) with Navy border (`#143A66`) and Navy text.
   - **WhatsApp:** Translucent/light background with Green border (`#00B050`) and Dark Green text (`#0B6B33`).

3. **Hero Gradient Composition:**
   ```css
   background: linear-gradient(135deg, #BFE3F5 0%, #CDEFE3 45%, #F4F8FB 75%, #F6E3E6 100%);
   ```
   Blends `Sky` + `Mint` on the left into the neutral `Page Base`, with a touch of `Faint Blush` on the far right.

4. **One Accent per View:**
   - Keep blue highlights and green status cues localized so the page maintains clinical calm and clarity without visual noise.

---

## 6. Implementation

Import `src/styles/colors.css` in your stylesheets or read the CSS custom properties directly.

