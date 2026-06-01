# FST Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing teal/terracotta palette and system fonts with V4 Pine-Teal + Bleached Clay colours, Lora/DM Sans typography, and an Editorial Sharp layout language across all six pages.

**Architecture:** All changes are confined to `css/style.css` (full rewrite of design tokens and component rules) and the `<head>` of each of the six HTML pages (Google Fonts `<link>` tags). No JS, no page structure, no image paths change.

**Tech Stack:** Plain HTML/CSS, Google Fonts (Lora + DM Sans), Python http.server for local testing.

---

### Task 1: Design tokens + Google Fonts

**Files:**
- Modify: `css/style.css` lines 1–23 (`:root` block)
- Modify: `index.html`, `stay.html`, `cafe.html`, `explore.html`, `reach.html`, `contact.html` — `<head>` section of each

- [ ] **Step 1: Replace the `:root` block in `css/style.css`**

Replace everything from `/* ── Design Tokens */` through the closing `}` of `:root` (currently lines 1–23) with:

```css
/* ── Design Tokens ─────────────────────────────── */
:root {
  --clr-dark:    #1a3530;  /* deep pine-teal  — nav bg, footer, hero            */
  --clr-mid:     #2c5248;  /* mid pine-teal   — hero gradient, pull-quote        */
  --clr-accent:  #a87840;  /* bleached ochre  — buttons, borders, labels         */
  --clr-bg:      #f6f1e6;  /* light clay      — page body background             */
  --clr-surface: #eae3d4;  /* clay            — card / section backgrounds       */
  --clr-muted:   #e0dbd0;  /* pale clay       — text on dark backgrounds         */
  --clr-text:    #1a2c28;  /* near-black green — body copy on light bg           */
  --clr-text-lt: #5a4e3e;  /* warm brown-grey — secondary body copy              */

  --font-serif: 'Lora', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;

  --nav-h:  64px;
  --radius: 4px;
  --max-w:  1140px;
  --px:     clamp(16px, 4vw, 48px);
}
```

- [ ] **Step 2: Add Google Fonts to all six HTML pages**

Add these three lines immediately after `<meta name="viewport" ...>` and before `<title>` in each of the six HTML files:

```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

- [ ] **Step 3: Verify**

```bash
python3 -m http.server 8080
```

Open http://localhost:8080. Open DevTools → Elements, select `<html>`. In Computed styles, confirm `--clr-dark` is `#1a3530`. Open Network tab filtered to "Font" — confirm Lora and DM+Sans appear.

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html stay.html cafe.html explore.html reach.html contact.html
git commit -m "feat: update design tokens and load Lora + DM Sans from Google Fonts"
```

---

### Task 2: Global styles and typography

**Files:**
- Modify: `css/style.css` — Reset, Typography, Utilities sections

- [ ] **Step 1: Replace the Reset section**

Replace the current `/* ── Reset */` block with:

```css
/* ── Reset ─────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-sans); background: var(--clr-bg); color: var(--clr-text); line-height: 1.6; }
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
```

- [ ] **Step 2: Replace the Typography section**

Replace the current `/* ── Typography */` block with:

```css
/* ── Typography ─────────────────────────────────── */
h1,h2,h3,h4 { font-family: var(--font-serif); line-height: 1.2; }
h1 { font-size: clamp(2.4rem, 6vw, 4.5rem); }
h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); }
h3 { font-size: clamp(1.1rem, 2.5vw, 1.5rem); }
.section-label {
  font-family: var(--font-sans); font-size: 0.75rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--clr-accent); margin-bottom: 0.5rem; display: block;
}
```

- [ ] **Step 3: Replace the Utilities section**

Replace the current `/* ── Utilities */` block with:

```css
/* ── Utilities ──────────────────────────────────── */
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 var(--px); }
.section        { padding: 80px 0; border-top: 2px solid var(--clr-dark); }
.section--dark  { background: var(--clr-dark);  color: var(--clr-muted); }
.section--cream { background: var(--clr-bg); }
.text-center { text-align: center; }
.mt-2 { margin-top: 1rem; }   .mt-3 { margin-top: 1.5rem; }   .mt-4 { margin-top: 2rem; }
```

- [ ] **Step 4: Verify**

Open http://localhost:8080. Body background should be `#f6f1e6` (warm off-white). Section headings should render in Lora. Section labels (e.g. "What awaits") should be ochre/golden, not teal.

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "feat: update global styles, typography, and section utilities"
```

---

### Task 3: Buttons

**Files:**
- Modify: `css/style.css` — Buttons section

- [ ] **Step 1: Replace the Buttons section**

Replace the current `/* ── Buttons */` block with:

```css
/* ── Buttons ────────────────────────────────────── */
.btn {
  display: inline-block; padding: 0.65em 1.4em; border-radius: 3px;
  font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase;
  cursor: pointer; transition: background 0.15s, color 0.15s, transform 0.15s;
  border: 2px solid transparent;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--clr-accent); color: #fff; border-color: var(--clr-accent); }
.btn-primary:hover { opacity: 0.9; }
.btn-outline { background: transparent; color: var(--clr-accent); border: 2px solid var(--clr-accent); }
.btn-outline:hover { background: var(--clr-accent); color: #fff; }
.btn-dark { background: var(--clr-dark); color: var(--clr-muted); border-color: var(--clr-dark); }
.btn-lg   { font-size: 1rem; padding: 0.8em 2em; }
.btn-full { width: 100%; text-align: center; }
```

- [ ] **Step 2: Verify**

Open http://localhost:8080. The "Get in Touch" and "Explore Rooms" hero buttons should be sharp-cornered (no pill shape). Primary button should be ochre-filled; outline button should have an ochre border, transparent background, hover fills ochre.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle buttons — sharp corners, ochre accent, uppercase tracking"
```

---

### Task 4: Nav

**Files:**
- Modify: `css/style.css` — Nav section

- [ ] **Step 1: Replace the Nav section**

Replace the current `/* ── Nav */` block (including the `@media (max-width: 768px)` block at the end of it) with:

```css
/* ── Nav ────────────────────────────────────────── */
.site-nav {
  position: sticky; top: 0; z-index: 100; height: var(--nav-h);
  background: var(--clr-bg); border-bottom: 2px solid var(--clr-dark);
  display: flex; align-items: center; padding: 0 var(--px); gap: 2rem;
  transition: box-shadow 0.2s;
}
.site-nav.scrolled { box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
.nav-brand { font-family: var(--font-serif); font-style: italic; font-size: 1.15rem; color: var(--clr-dark); white-space: nowrap; }
.nav-links { display: flex; gap: 1.5rem; margin-left: auto; font-size: 0.8rem; }
.nav-links a { font-family: var(--font-sans); color: var(--clr-mid); text-transform: uppercase; letter-spacing: 0.08em; transition: color 0.15s; }
.nav-links a:hover, .nav-links a.active { color: var(--clr-accent); }
.nav-cta { margin-left: 1rem; }
.nav-hamburger { display: none; background: none; border: none; cursor: pointer; font-size: 1.4rem; margin-left: auto; color: var(--clr-dark); }
@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .nav-hamburger { display: block; }
  .site-nav.open .nav-links {
    display: flex; flex-direction: column;
    position: absolute; top: var(--nav-h); left: 0; right: 0;
    background: var(--clr-bg); padding: 1.5rem var(--px);
    gap: 1rem; border-bottom: 2px solid var(--clr-dark);
  }
  .site-nav.open .nav-cta { display: block; margin: 0 var(--px) 1.5rem; }
}
```

- [ ] **Step 2: Verify**

Open http://localhost:8080. Nav should have a warm off-white background with a dark pine border at the bottom. Links should be mid-green, turning ochre on hover. Brand name in italic Lora. Resize to mobile — hamburger appears, tapping opens the menu below the nav bar.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle nav — light bg, dark border, ochre active state"
```

---

### Task 5: Hero, pull-quote, and distance strip

**Files:**
- Modify: `css/style.css` — Hero, Pull Quote, Distance Strip sections

- [ ] **Step 1: Replace the Hero section**

Replace the current `/* ── Hero (home) */` block with:

```css
/* ── Hero (home) ────────────────────────────────── */
.hero {
  position: relative; min-height: 92vh;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 var(--px) 64px; overflow: hidden; background: var(--clr-dark);
}
.hero__bg { position: absolute; inset: 0; background-size: cover; background-position: center; filter: brightness(0.55); }
.hero__content { position: relative; z-index: 1; max-width: 640px; border-left: 5px solid var(--clr-accent); padding-left: 1.5rem; }
.hero__tag {
  display: inline-block; font-family: var(--font-sans); font-size: 0.75rem;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--clr-accent); margin-bottom: 1rem;
}
.hero__title { color: var(--clr-bg); }
.hero__sub   { color: rgba(246,241,230,0.75); margin-top: 0.75rem; font-size: 1.05rem; }
.hero__actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }
```

- [ ] **Step 2: Replace the Pull Quote section**

Replace the current `/* ── Pull Quote */` block with:

```css
/* ── Pull Quote ─────────────────────────────────── */
.pull-quote {
  background: var(--clr-dark); color: var(--clr-muted);
  padding: 36px var(--px) 36px calc(var(--px) + 1.5rem);
  display: flex; align-items: center; gap: 2.5rem; flex-wrap: wrap;
  border-left: 4px solid var(--clr-accent);
}
.pull-quote__text {
  flex: 1; min-width: 260px; font-family: var(--font-serif); font-style: italic;
  font-size: clamp(1rem, 2vw, 1.2rem); line-height: 1.7;
}
```

- [ ] **Step 3: Replace the Distance Strip section**

Replace the current `/* ── Distance Strip */` block with:

```css
/* ── Distance Strip ─────────────────────────────── */
.distance-strip {
  background: var(--clr-mid); padding: 20px var(--px); border-top: 2px solid var(--clr-dark);
  display: flex; justify-content: center; gap: clamp(1rem,4vw,3rem); flex-wrap: wrap;
}
.distance-item { text-align: center; color: var(--clr-bg); }
.distance-item__km    { font-family: var(--font-serif); font-size: 1.6rem; font-weight: bold; line-height: 1; }
.distance-item__label { font-family: var(--font-sans); font-size: 0.72rem; color: var(--clr-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
```

- [ ] **Step 4: Verify**

Open http://localhost:8080. Hero text block should have a visible ochre left strip. Location tag is ochre, not teal. Pull-quote strip has an ochre left rule. Distance strip background is mid pine-teal, numbers in cream, labels in pale clay.

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle hero, pull-quote, and distance strip"
```

---

### Task 6: Cards — highlight, room, and meal

**Files:**
- Modify: `css/style.css` — Highlights Grid, Room Cards, Meals sections

- [ ] **Step 1: Replace the Highlights Grid section**

Replace the current `/* ── Highlights Grid */` block with:

```css
/* ── Highlights Grid ────────────────────────────── */
.highlights-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
.highlight-card {
  background: var(--clr-surface); border-radius: var(--radius);
  border-left: 3px solid var(--clr-accent);
  padding: 28px 24px; transition: transform 0.2s; display: block; color: inherit;
}
.highlight-card:hover { transform: translateY(-4px); }
.highlight-card__icon  { font-size: 2rem; margin-bottom: 0.75rem; }
.highlight-card__title { font-family: var(--font-serif); color: var(--clr-dark); margin-bottom: 0.4rem; }
.highlight-card__desc  { font-size: 0.88rem; color: var(--clr-text-lt); }
@media (max-width: 768px) { .highlights-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 480px) { .highlights-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 2: Replace the Room Cards section**

Replace the current `/* ── Room Cards */` block with:

```css
/* ── Room Cards ─────────────────────────────────── */
.room-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
.room-card  { background: var(--clr-surface); border-radius: var(--radius); overflow: hidden; border-left: 3px solid var(--clr-accent); display: flex; flex-direction: column; }
.room-card__img  { height: 220px; object-fit: cover; width: 100%; }
.room-card__body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
.room-card__title { font-family: var(--font-serif); color: var(--clr-dark); }
.room-card__meta  { font-size: 0.83rem; color: var(--clr-text-lt); margin-top: 0.3rem; }
.room-card__features { margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 6px; }
.feature-tag { font-family: var(--font-sans); font-size: 0.73rem; padding: 0.25em 0.7em; border-radius: 3px; background: rgba(26,53,48,0.1); color: var(--clr-dark); }
.room-card__pricing { margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--clr-surface); }
.price-row   { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem; }
.price-label { font-size: 0.78rem; color: var(--clr-text-lt); }
.price-value { font-family: var(--font-serif); font-size: 1rem; color: var(--clr-dark); font-weight: bold; }
.price-note  { font-size: 0.72rem; color: var(--clr-text-lt); margin-top: 4px; }
.room-card__cta { margin-top: auto; padding-top: 1.25rem; }
.pricing-note {
  background: rgba(26,53,48,0.07); border-left: 3px solid var(--clr-accent);
  border-radius: 0 var(--radius) var(--radius) 0; padding: 14px 18px;
  font-size: 0.88rem; color: var(--clr-dark); margin-bottom: 2rem;
}
@media (max-width: 640px) { .room-cards { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Replace the Meals section**

Replace the current `/* ── Meals */` block with:

```css
/* ── Meals ──────────────────────────────────────── */
.meals-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.meal-card  { background: var(--clr-surface); border-radius: var(--radius); overflow: hidden; border-left: 3px solid var(--clr-accent); text-align: center; }
.meal-card__img  { height: 160px; object-fit: cover; width: 100%; }
.meal-card__body { padding: 20px; }
.meal-card__time { font-family: var(--font-sans); font-size: 0.73rem; color: var(--clr-accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.3rem; }
.meal-card__title { font-family: var(--font-serif); color: var(--clr-dark); }
.meal-card__desc  { font-size: 0.83rem; color: var(--clr-text-lt); margin-top: 0.4rem; }
@media (max-width: 640px) { .meals-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 4: Verify**

Open http://localhost:8080 (highlight cards) and http://localhost:8080/stay.html (room cards) and http://localhost:8080/cafe.html (meal cards). All cards should be clay-coloured with an ochre left border strip and no box shadow.

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle highlight, room, and meal cards — clay surface, ochre border, no shadow"
```

---

### Task 7: Explore components — adventure cards, badges, amenities, rules

**Files:**
- Modify: `css/style.css` — Amenities, Rules, Adventure Cards sections

- [ ] **Step 1: Replace the Amenities section**

Replace the current `/* ── Amenities */` block with:

```css
/* ── Amenities ──────────────────────────────────── */
.amenities-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
.amenity-item { display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: var(--clr-surface); border-radius: var(--radius); border-left: 3px solid var(--clr-accent); }
.amenity-item__icon  { font-size: 1.4rem; flex-shrink: 0; }
.amenity-item__title { font-family: var(--font-sans); font-weight: 600; font-size: 0.92rem; color: var(--clr-dark); }
.amenity-item__desc  { font-size: 0.8rem; color: var(--clr-text-lt); margin-top: 2px; }
@media (max-width: 768px) { .amenities-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 480px) { .amenities-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 2: Replace the Rules section**

Replace the current `/* ── Rules */` block with:

```css
/* ── Rules ──────────────────────────────────────── */
.rules-list { display: flex; flex-direction: column; gap: 12px; }
.rule-item  { display: flex; align-items: center; gap: 14px; padding: 14px 16px; background: var(--clr-surface); border-radius: var(--radius); border-left: 3px solid var(--clr-accent); font-size: 0.93rem; }
.rule-item__icon { font-size: 1.1rem; flex-shrink: 0; }
```

- [ ] **Step 3: Replace the Adventure Cards section**

Replace the current `/* ── Adventure Cards (Explore) */` block with:

```css
/* ── Adventure Cards (Explore) ──────────────────── */
.adventure-section-title {
  font-family: var(--font-serif); font-size: 1.05rem; color: var(--clr-mid);
  padding-bottom: 0.5rem; border-bottom: 2px solid var(--clr-dark); margin: 2.5rem 0 1.25rem;
}
.adventure-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.adventure-card  { background: var(--clr-surface); border-radius: var(--radius); overflow: hidden; border-left: 3px solid var(--clr-accent); transition: transform 0.2s; }
.adventure-card:hover { transform: translateY(-4px); }
.adventure-card__img  { height: 180px; object-fit: cover; width: 100%; }
.adventure-card__body { padding: 16px; }
.adventure-card__badges { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 0.5rem; }
.badge { font-family: var(--font-sans); font-size: 0.68rem; padding: 0.2em 0.65em; border-radius: 3px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
.badge--dist     { background: var(--clr-mid);     color: #fff; }
.badge--type     { background: var(--clr-surface);  color: var(--clr-text); border: 1px solid var(--clr-accent); }
.badge--easy     { background: var(--clr-mid);      color: #fff; }
.badge--moderate { background: var(--clr-accent);   color: #fff; }
.adventure-card__title { font-family: var(--font-serif); color: var(--clr-dark); margin-bottom: 0.35rem; font-size: 1rem; }
.adventure-card__desc  { font-size: 0.83rem; color: var(--clr-text-lt); line-height: 1.5; }
.adventure-card__footer { display: flex; justify-content: space-between; margin-top: 0.7rem; font-size: 0.76rem; color: var(--clr-text-lt); }
@media (max-width: 900px) { .adventure-cards { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 540px) { .adventure-cards { grid-template-columns: 1fr; } }
```

- [ ] **Step 4: Verify**

Open http://localhost:8080/cafe.html (amenities + rules) and http://localhost:8080/explore.html (adventure cards + badges). All should use clay surface with ochre left borders. Badges should be sharp-cornered with updated colours — no pill shape, no old teal.

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle amenities, rules, adventure cards, and badges"
```

---

### Task 8: Reach, Contact, and page hero

**Files:**
- Modify: `css/style.css` — Page Hero, Transport Tabs, Contact sections

- [ ] **Step 1: Replace the Page Hero section**

Replace the current `/* ── Page Hero (inner pages) */` block with:

```css
/* ── Page Hero (inner pages) ────────────────────── */
.page-hero { background: linear-gradient(155deg, var(--clr-mid) 0%, var(--clr-dark) 100%); color: var(--clr-bg); padding: 80px var(--px) 60px; border-left: 5px solid var(--clr-accent); }
.page-hero__title { margin-top: 0.5rem; }
.page-hero__sub   { margin-top: 0.75rem; color: rgba(246,241,230,0.75); max-width: 600px; }
```

- [ ] **Step 2: Replace the Transport Tabs section**

Replace the current `/* ── Transport Tabs (Reach) */` block with:

```css
/* ── Transport Tabs (Reach) ─────────────────────── */
.transport-tabs { display: flex; border-radius: var(--radius); overflow: hidden; border: 2px solid var(--clr-dark); margin-bottom: 2rem; }
.transport-tab  { flex: 1; padding: 12px; text-align: center; font-family: var(--font-sans); font-size: 0.82rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; background: var(--clr-bg); color: var(--clr-text-lt); border: none; transition: background 0.15s, color 0.15s; }
.transport-tab.active { background: var(--clr-dark); color: var(--clr-muted); }
.transport-panel        { display: none; }
.transport-panel.active { display: block; }
.step-list { display: flex; flex-direction: column; gap: 14px; }
.step-item { display: grid; grid-template-columns: 32px 1fr; gap: 14px; align-items: flex-start; }
.step-num  { width: 32px; height: 32px; border-radius: 3px; background: var(--clr-dark); color: var(--clr-muted); display: flex; align-items: center; justify-content: center; font-family: var(--font-sans); font-size: 0.78rem; font-weight: 700; flex-shrink: 0; }
.step-text { font-size: 0.93rem; padding-top: 5px; line-height: 1.5; }
.step-text strong { color: var(--clr-dark); }
.directions-box { background: var(--clr-dark); color: var(--clr-muted); border-radius: var(--radius); border-left: 4px solid var(--clr-accent); padding: 20px 24px; margin-top: 2rem; font-size: 0.93rem; line-height: 1.8; }
.directions-box__label { font-family: var(--font-sans); color: var(--clr-accent); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
.map-embed { margin-top: 2rem; border-radius: var(--radius); overflow: hidden; }
.map-embed iframe { display: block; width: 100%; height: 400px; border: none; }
```

- [ ] **Step 3: Replace the Contact section**

Replace the current `/* ── Contact */` block with:

```css
/* ── Contact ─────────────────────────────────────── */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
.contact-info { display: flex; flex-direction: column; gap: 14px; }
.whatsapp-btn { display: flex; align-items: center; justify-content: center; gap: 0.6rem; background: #25D366; color: #fff; font-family: var(--font-sans); font-weight: 600; font-size: 1rem; padding: 0.9em 1.8em; border-radius: 3px; transition: opacity 0.15s, transform 0.15s; }
.whatsapp-btn:hover { opacity: 0.9; transform: translateY(-1px); }
.contact-item { display: flex; align-items: flex-start; gap: 14px; padding: 16px; background: var(--clr-surface); border-radius: var(--radius); border-left: 3px solid var(--clr-accent); }
.contact-item__icon  { font-size: 1.3rem; flex-shrink: 0; }
.contact-item__label { font-family: var(--font-sans); font-size: 0.72rem; color: var(--clr-accent); text-transform: uppercase; letter-spacing: 0.1em; }
.contact-item__value { font-size: 0.93rem; color: var(--clr-dark); margin-top: 2px; }
.contact-item__value a { transition: color 0.15s; }
.contact-item__value a:hover { color: var(--clr-accent); }
.contact-form { background: var(--clr-surface); border-radius: var(--radius); padding: 32px; border-top: 2px solid var(--clr-dark); }
.contact-form h3 { font-family: var(--font-serif); color: var(--clr-dark); margin-bottom: 1.5rem; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; font-family: var(--font-sans); font-size: 0.83rem; font-weight: 600; color: var(--clr-dark); margin-bottom: 0.35rem; }
.form-group input,
.form-group select,
.form-group textarea { width: 100%; padding: 0.68em 1em; border: 2px solid var(--clr-surface); border-radius: var(--radius); font-family: var(--font-sans); font-size: 0.93rem; background: var(--clr-bg); color: var(--clr-text); transition: border-color 0.15s; }
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { outline: none; border-color: var(--clr-accent); }
.form-group textarea { resize: vertical; min-height: 100px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
```

- [ ] **Step 4: Verify**

Open http://localhost:8080/reach.html — page hero has left ochre strip, tabs are sharp-cornered, active tab is dark pine. Step numbers are square. Directions box has ochre left rule.

Open http://localhost:8080/contact.html — contact items are clay with ochre left border. WhatsApp button is sharp-cornered. Form inputs focus with ochre border.

Open http://localhost:8080/stay.html and http://localhost:8080/cafe.html — inner page heroes match home page hero style.

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle page hero, transport tabs, and contact components"
```

---

### Task 9: Footer

**Files:**
- Modify: `css/style.css` — Footer section

- [ ] **Step 1: Replace the Footer section**

Replace the current `/* ── Footer */` block (including its `@media` blocks at the end) with:

```css
/* ── Footer ──────────────────────────────────────── */
.site-footer { background: var(--clr-dark); color: var(--clr-muted); padding: 56px var(--px) 24px; border-top: 2px solid var(--clr-accent); }
.footer-inner { max-width: var(--max-w); margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid rgba(224,219,208,0.15); }
.footer-brand-name { font-family: var(--font-serif); font-style: italic; font-size: 1.3rem; margin-bottom: 0.75rem; color: var(--clr-bg); }
.footer-address { font-size: 0.83rem; color: rgba(224,219,208,0.6); line-height: 1.7; }
.footer-col-title { font-family: var(--font-sans); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--clr-accent); margin-bottom: 1rem; }
.footer-col a { display: block; font-size: 0.88rem; color: rgba(224,219,208,0.7); margin-bottom: 0.5rem; transition: color 0.15s; }
.footer-col a:hover { color: var(--clr-muted); }
.footer-bottom { max-width: var(--max-w); margin: 24px auto 0; font-size: 0.78rem; color: rgba(224,219,208,0.35); text-align: center; }
@media (max-width: 768px) { .footer-inner { grid-template-columns: 1fr 1fr; } .footer-inner > :first-child { grid-column: span 2; } }
@media (max-width: 480px) { .footer-inner { grid-template-columns: 1fr; } .footer-inner > :first-child { grid-column: span 1; } }
```

- [ ] **Step 2: Verify**

Open any page and scroll to the footer. Footer background is deep pine-teal with a visible ochre top border. Brand name in italic Lora. Column headings are ochre uppercase. Links are pale clay, turning lighter on hover.

- [ ] **Step 3: Final cross-page check**

Visit each page and visually confirm no old colours remain (no old teal `#5b8f82`, no terracotta `#c4704f`, no pill-shaped buttons outside the WhatsApp button):

```
http://localhost:8080/
http://localhost:8080/stay.html
http://localhost:8080/cafe.html
http://localhost:8080/explore.html
http://localhost:8080/reach.html
http://localhost:8080/contact.html
```

- [ ] **Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: restyle footer — ochre top border, accent column headings"
```
