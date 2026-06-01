# FST Website Redesign — Design Spec

## Goal

Replace the current teal/terracotta colour scheme, system-font stack, and generic card styling with a cohesive Pine-Teal + Bleached Clay palette, Lora/DM Sans typography, and an Editorial Sharp layout language applied consistently across all six pages.

## Architecture

All changes are confined to `css/style.css` (CSS custom properties + component rules) and `index.html` (Google Fonts `<link>`). Every other HTML page already pulls `css/style.css` so the palette and type changes propagate automatically. No JS changes are needed.

---

## Design Tokens

Replace all existing `:root` custom properties with the following:

```css
:root {
  --clr-dark:    #1a3530;  /* deep pine-teal  — nav bg, footer, hero gradient end   */
  --clr-mid:     #2c5248;  /* mid pine-teal   — hero gradient start, pull-quote bg  */
  --clr-accent:  #a87840;  /* bleached ochre  — buttons, border rules, labels       */
  --clr-bg:      #f6f1e6;  /* light clay      — page body background                */
  --clr-surface: #eae3d4;  /* clay            — card/section backgrounds            */
  --clr-muted:   #e0dbd0;  /* pale clay       — nav text on dark, footer body text  */
  --clr-text:    #1a2c28;  /* near-black green — body copy on light bg              */
  --clr-text-lt: #5a4e3e;  /* warm brown-grey — secondary body copy                */
}
```

Remove all old tokens (`--clr-forest`, `--clr-sage`, `--clr-misty`, `--clr-cream`, `--clr-terra`, `--clr-aqua`).

---

## Typography

### Google Fonts

Add to the `<head>` of every HTML page (currently only `index.html` needs it added; others inherit via CSS but fonts must be loaded):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

### Font stack tokens

```css
:root {
  --font-serif: 'Lora', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;
}
```

### Usage rules

| Element | Font | Weight | Style |
|---|---|---|---|
| `h1`, `h2`, `h3` | Lora | 700 | normal |
| Brand / logo text | Lora | 600 | italic |
| Body copy, nav links | DM Sans | 400 | — |
| Buttons, labels, badges | DM Sans | 600 | uppercase |
| Pull-quote | Lora | 400 | italic |

---

## Layout Language — Editorial Sharp

### Nav

- Background: `var(--clr-bg)` (`#f6f1e6`)
- Bottom border: `2px solid var(--clr-dark)`
- Brand name: Lora italic, `var(--clr-dark)`
- Links: DM Sans, uppercase, `0.08em` letter-spacing, `var(--clr-mid)`
- Enquire button: outlined — `border: 2px solid var(--clr-accent)`, `border-radius: 3px`, `color: var(--clr-accent)`, transparent bg; on hover fill with `var(--clr-accent)` + white text

### Hero

- Background: `linear-gradient(155deg, var(--clr-mid) 0%, var(--clr-dark) 100%)`
- Left accent strip: `border-left: 5px solid var(--clr-accent)` on `.hero__content`
- Text colour: `var(--clr-bg)`
- Tag line: DM Sans uppercase, `var(--clr-accent)`

### Buttons

Two variants, both `border-radius: 3px`, DM Sans 600, uppercase, `letter-spacing: 0.06em`:

- **Primary (filled):** `background: var(--clr-accent)`, `color: #fff`, no border
- **Outline:** `border: 2px solid var(--clr-accent)`, `color: var(--clr-accent)`, transparent bg; hover → filled

### Pull-quote strip

- Background: `var(--clr-dark)`
- Left rule: `border-left: 4px solid var(--clr-accent)`
- Text: Lora italic, `var(--clr-muted)`

### Cards (room cards, highlight cards, adventure cards, meal cards)

- Background: `var(--clr-surface)`
- Border radius: `4px` (sharp)
- Left accent: `border-left: 3px solid var(--clr-accent)`
- No box-shadow
- Title: Lora 700
- Body: DM Sans 400, `var(--clr-text-lt)`

### Section dividers

- Between sections: `border-top: 2px solid var(--clr-dark)`
- Section label (small caps above headings): DM Sans, `var(--clr-accent)`, uppercase, `0.12em` letter-spacing

### Distance strip

- Background: `var(--clr-mid)`
- Number: Lora 700, `var(--clr-bg)`
- Label: DM Sans uppercase, `var(--clr-muted)`

### Footer

- Background: `var(--clr-dark)`
- Column heading: DM Sans uppercase, `var(--clr-accent)`
- Links: DM Sans, `var(--clr-muted)`

### Badges (explore page)

- Keep existing badge variants but update colours:
  - `badge--dist`: `var(--clr-mid)` bg, white text
  - `badge--type`: `var(--clr-surface)` bg, `var(--clr-text)` text, `1px solid var(--clr-accent)` border
  - `badge--easy`: green-tinted `#2c5248` bg, white text
  - `badge--moderate`: `var(--clr-accent)` bg, white text

---

## Scope

- **In:** `css/style.css` token swap + component rule updates, Google Fonts `<link>` on all 6 HTML pages
- **Out:** Page structure, content, JS, image paths — none of these change
- **Out:** New components or pages

---

## Pages affected

All six: `index.html`, `stay.html`, `cafe.html`, `explore.html`, `reach.html`, `contact.html`
