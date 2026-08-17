# Caribbean YPN — Sticker-Poster Design System

A loud, tropical, sticker-poster system: clashing high-chroma fills, thick black
outlines, deeply nested rounded rectangles, and chunky Inter. Every layer is a
*different* high-chroma color, so the design reads like layered vinyl stickers.
Flat fills only — no gradients, no drop shadows. Depth comes from color layering,
rounding, and the black keyline.

This is the system as actually shipped on **caribbeanypn.org**. Companion
machine-readable tokens: [`tokens.json`](./tokens.json).

---

## 1. Color

| Token | Hex | Role |
|---|---|---|
| `ink` | `#000000` | Outlines, body text, page canvas, wordmark on light |
| `paper` | `#ffffff` | Text on dark fills, knockout, wordmark on dark |
| `signal-red` | `#ee3835` | Card fill, photo frames, emphasis |
| `cobalt` | `#007df6` | Card fill, backdrop, hero |
| `acid-lime` | `#c3f900` | Backdrop, high-voltage accent, CTAs |
| `spring-mint` | `#6dff80` | Card fill, photo backdrop |
| `lavender` | `#bea2e7` | Soft card fill, breathing room |
| `orchid` | `#e280fd` | Vivid photo frame / backdrop |
| `lemon` | `#f8eb39` | Panel fill behind cutouts, photo frames |
| `kelly-green` | `#29b24a` | Backdrop |
| `coral` | `#ffabab` | Outlined display text (the one soft tone) |

### Semantic mapping
- `bg` → ink (black page canvas) · `surface` → paper · `text` → ink
- `text-mute` → `rgba(0,0,0,0.66)` (ink-based, reads on any bright card)
- `line` → ink (the keyline is always black)
- `accent` → cobalt · `accent-2` → signal-red · `on-accent` → paper

### Pairing rules
- **One backdrop, one card fill, one photo frame — each a different token.** Never two adjacent layers in the same hue family.
- `ink` is the default text color on every fill *except* the darkest backdrops (cobalt, signal-red, kelly-green), where text flips to `paper`.
- Outlined display type = a bright fill (e.g. `coral`) with a solid `ink` stroke.

### Section rotation (the clash engine)
Sections cycle through 8 fixed schemes via `:nth-of-type(8n+N)`. Each sets a poster
backdrop, its text color, an inner card fill + text, and two clashing frame colors.
Adjacent schemes never share a hue; cobalt lands last so it never sits under the
cobalt hero.

| # | Poster | Text | Card fill | Frame | Frame-2 |
|---|---|---|---|---|---|
| 1 | acid-lime | ink | lavender | cobalt | orchid |
| 2 | orchid | ink | spring-mint | cobalt | lemon |
| 3 | spring-mint | ink | coral | cobalt | lemon |
| 4 | lemon | ink | orchid | kelly-green | cobalt |
| 5 | lavender | ink | signal-red | lemon | cobalt |
| 6 | signal-red | paper | lemon | cobalt | spring-mint |
| 7 | kelly-green | paper | coral | lemon | cobalt |
| 8 | cobalt | paper | lemon | signal-red | spring-mint |

---

## 2. Typography

**Inter** (variable, weights 100–900), one family for everything.

| Role | Weight | Case | Tracking | Notes |
|---|---|---|---|---|
| Display / headline | 800 | UPPER | `-0.02em` | line-height `1.0`, tight, near full width |
| Wordmark | 800 | — | `-0.02em` | top element, near full container width |
| Body | 500 | mixed | normal | line-height `1.4` |
| Label / eyebrow / pill | 800 | UPPER | `0.18–0.22em` | small, widely spaced |
| Outlined callout | 800 | UPPER | `-0.01em` | coral fill + 3px ink stroke |

Rules: headlines huge, tight, uppercase. Body bold-ish (500), tight leading.
Labels uppercase + wide-tracked. Callout names can be all-caps outlined.

---

## 3. Geometry

Radius scales down as you nest inward (~4–5% of element width at the outer level).

| Token | Value | Applies to |
|---|---|---|
| `radius.outer` | `44px` | Section poster card |
| `radius.card` | `32px` | Inner content cards |
| `radius.photo` | `22px` | Photo frames |
| `radius.pill` | `999px` | Pills, CTAs, arrows |
| `border.card` | `3px` solid ink | Every card / poster keyline |
| `border.photo` | `12px` solid (clashing) | Photo frames |
| `border.pill` | `2px` solid ink | Pills |

### Spacing
| Token | Value | Role |
|---|---|---|
| `maxw` | `1180px` | Poster column |
| `edge` | `clamp(14px, 3.5vw, 30px)` | Viewport-edge gutter (nothing touches the edge) |
| `gutter` | `clamp(18px, 2.4vw, 30px)` | Grid gap = card row gap |
| `gap-stack` | `clamp(20px, 3.5vw, 44px)` | Between poster sections |
| `pad-card` | `clamp(20px, 3.4vw, 44px)` | Poster inner padding |

Motion: `--ease: cubic-bezier(0.25, 0.1, 0.25, 1)`. CSS transitions only.

---

## 4. Anatomy (the repeatable poster)

```
BLACK PAGE
 └─ POSTER (section)  · clashing fill · 3px ink border · radius 44 · floats with `edge` gutters
     ├─ eyebrow (uppercase, wide-tracked)
     ├─ big display heading
     └─ INNER CARD(S)  · clashing fill · 3px ink border · radius 32
         └─ PHOTO FRAME  · 12px clashing border · radius 22 · flat chroma bg
```

---

## 5. Components

- **Poster section** — full-width floating card; fill/text/frame come from the rotation.
- **Card** — clashing fill + 3px ink border + radius 32; hover nudges `translate(-2px,-3px)`.
- **Pill** — ink bg, paper text, 2px ink border, uppercase, `0.18em`. `pill-soft` = paper bg / ink text.
- **CTA pill** — ink bg (or `acid-lime` on dark), paper/ink text, 3px ink border, radius 999.
- **Photo frame** — 12px clashing border, radius 22, flat chroma backdrop; photo covers it. Never full-bleed.
- **Outlined callout** — coral fill + `-webkit-text-stroke: 3px ink`, `paint-order: stroke fill`.
- **Progress bar** — ink fill on paper track, 2px ink border, radius 999.
- **Rail** — horizontal scroll-snap row of cards; round arrow buttons (paper bg, 3px ink border).
- **Accordion** — native `<details>`; card-styled; `+` rotates to `×`.
- **Spotlight** (featured person) — 2-col card: framed portrait + outlined name (see the Chairwoman card).

---

## 6. Do / Don't

- ✅ Clash colors hard between neighboring layers · ✅ Round everything (inner < outer) · ✅ Thick photo frames · ✅ Even floating gutters · ✅ Wordmark on top, full width
- ❌ Gradients, drop shadows, glassmorphism · ❌ Two same-family colors touching · ❌ Thin/light type or serifs · ❌ Full-bleed photos · ❌ Muted/pastel-only palettes (coral is the only soft tone)

---

## 7. Quick start (CSS)

Copy `:root` from [`src/styles/tokens.css`](../src/styles/tokens.css) and self-host
Inter (`/fonts/Inter-Variable.ttf`, `font-weight: 100 900`). The card grammar lives
in [`src/styles/global.css`](../src/styles/global.css); the 8-scheme rotation is the
`main > section:nth-of-type(8n+N)` block.
