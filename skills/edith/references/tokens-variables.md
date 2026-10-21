# Lyra Variables

Verified against Lyra Foundations (V1), file `qyCq4jUOrpYcpHhpNCdgA5`, Aug 2026 — Colors, Sizes, Typography, and Shadows pages, cross-checked with `search_design_system`.

Names are **search terms**, not hardcoded keys. Keys are per-library-version; always re-resolve via `search_design_system` scoped to the Lyra `libraryKey`.

Collections: **Semantic Sizes** (float), **Semantic Colors** (color), **Effects** (string).

## Contents
- [Semantic Sizes — spacing, radius, border weight](#semantic-sizes--spacing-radius-border-weight)
- [Semantic Sizes — dimension scales](#semantic-sizes--dimension-scales)
- [Semantic Colors — backgrounds](#semantic-colors--backgrounds)
- [Semantic Colors — foregrounds](#semantic-colors--foregrounds)
- [Semantic Colors — borders](#semantic-colors--borders)
- [Semantic Colors — status](#semantic-colors--status)
- [Semantic Colors — accents](#semantic-colors--accents)
- [Interaction states](#interaction-states)
- [Picking the right color family](#picking-the-right-color-family)

---

## Semantic Sizes — spacing, radius, border weight

### Spacing — scope `GAP`
`lyra/spacing/0` (0), `05` (2px), `1` (4px), `2`, `3` (12px), `4` (16px), `5` (20px), `6` (24px), `7` (28px), `8` (32px), `9` (36px), `10` (40px)

> `05` is a half step between `0` and `1`. The docs page lists step `2` as "1 rem / 16px", which conflicts with the otherwise-linear 4px progression (`1`=4, `3`=12) — read the resolved value from `search_design_system` rather than trusting either number.

### Radius — scope `CORNER_RADIUS`
`lyra/radius/none`, `xs` (4px), `sm` (6px), `md` (8px), `lg` (12px), `xl` (16px), `round`

### Border weight — scope `STROKE_FLOAT`
`lyra/border/none`, `md`, `lg`, and `lyra/border/default`

---

## Semantic Sizes — dimension scales

Scope `WIDTH_HEIGHT`. **These have no slot in the six token categories** — width/height is a seventh thing to bind. Use `node.setBoundVariable("width", var)` / `"height"`. Don't hardcode a control or icon size when one of these covers it.

| Family | Steps |
|---|---|
| `lyra/icon-size/*` | `xs` (12px), `sm` (16px), `md` (20px), `lg` (24px) |
| `lyra/control-height/*` | `2xs`, `xs`, `sm`, `md`, `lg`, `xl` |
| `lyra/row-height/*` | `sm` (32px), `md` (36px), `lg` (40px), `xl` (48px), `2xl` (56px) |

---

## Semantic Colors — backgrounds

Scope `FRAME_FILL` / `SHAPE_FILL`.

**Element fills:** `lyra/color/bg/primary`, `secondary`, `control`, `control-subtle`, `field`, `disabled`, `destructive`, `ai`, `none`

**Surfaces:** `lyra/color/bg/surface/base`, `surface/canvas`, `surface/container`, `surface/container-subtle`, `surface/shell`, `surface/overlay`, `surface/backdrop`, `surface/inverse`

**Active backgrounds:** `lyra/color/bg/active-strong`, `active-moderate`, `active-subtle`

> `active-moderate` and `active-subtle` are *not* accessible on their own — the library requires pairing them with an `active-strong` border or a high-contrast foreground.

## Semantic Colors — foregrounds

Applied as a **Fill** on TEXT/vector nodes (scope `ALL_FILLS` / `STROKE`).

`lyra/color/fg/default`, `secondary`, `action`, `link`, `disabled`, `inverse`, `inverse-disabled`, `on-primary`, `on-destructive`, `active-strong`, `active-subtle`

> `on-primary` and `on-destructive` are the correct foregrounds for `bg/primary` and `bg/destructive` — don't reach for `fg/inverse` there.
> `fg/disabled` and `bg/disabled` are opacity-based, so they work over any background.

## Semantic Colors — borders

Scope `STROKE`.

`lyra/color/border/subtle`, `soft`, `medium`, `strong`, `active`, `disabled`, `inverse`, `none`, `focus-default`, `focus-inverse`

> Scale runs subtle → soft → medium → strong (weakest to strongest). Focus rings are deliberately separate from the scale so they stay visible regardless of resting border state; use `focus-inverse` on dark surfaces.

## Semantic Colors — status

Three tiers per status, not two: `lyra/color/status/{success | critical | warning | info}-{strong | moderate | subtle}`

| Tier | Use |
|---|---|
| `-strong` | Text, icons, borders. Meets 4.5:1 on the matching `-subtle` background. |
| `-moderate` | Foreground on inverted backgrounds, or decorative elements not needing high contrast. |
| `-subtle` | Banner/badge/row backgrounds and tinted status surfaces. |

Note the status set uses **critical**, not "error" or "danger".

## Semantic Colors — accents

Pattern: `lyra/color/accent/{hue}-{subtle | strong}-{bg | fg}` — **four tokens per hue**, with an explicit `-bg`/`-fg` suffix.

Confirmed hues include `blue`, `red`, `lime`, `pink`, `teal`; the base ramp page also carries `orange`, `yellow`, `green`, `purple`, `slate`. Search per hue rather than assuming the full set.

Example: `lyra/color/accent/blue-strong-bg`, `lyra/color/accent/teal-subtle-fg`

---

## Interaction states

Hover and pressed are **not** a separate token per component. Two mechanisms:

**1. Overlay tokens** (for transparent-background elements):
`lyra/color/state/hover-opacity` (black 4%), `lyra/color/state/pressed-opacity` (black 8%)

**2. Relative-color formulas** (documented in the library for code, not bindable variables):

| Base | Hover | Pressed |
|---|---|---|
| Filled background | luminance −3 | luminance −6 |
| Partial-opacity background | alpha +0.04 | alpha +0.08 |

In Figma, resolve these to the component's own hover/pressed variant rather than hand-mixing a color.

---

## Picking the right color family

| You're coloring… | Family |
|---|---|
| A page/canvas or panel background | `bg/surface/*` |
| The suite shell (top bar, side nav) | `bg/surface/shell` |
| A button, control, or input background | `bg/control`, `control-subtle`, `field`, `destructive`, `ai` |
| Text on a primary or destructive fill | `fg/on-primary`, `fg/on-destructive` |
| Any other text or icon | `fg/*` (as a Fill) |
| A divider, card outline, or input border | `border/*` |
| A focus ring | `border/focus-default` (or `focus-inverse` on dark) |
| A modal scrim | `bg/surface/backdrop` |
| Selected nav item / active tab / active chip | `bg/active-*` + `fg/active-*` + `border/active` |
| Success/warning/critical/info messaging | `status/*-subtle` background, `status/*-strong` text |
| Categorical decoration (tags, charts, avatars) | `accent/{hue}-{subtle\|strong}-{bg\|fg}` |
| Anything on a dark/inverted surface | `bg/surface/inverse` + `fg/inverse` + `border/inverse` |
| A disabled state | `bg/disabled`, `fg/disabled`, `border/disabled` |
