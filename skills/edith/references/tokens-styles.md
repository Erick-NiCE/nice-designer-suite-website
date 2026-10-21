# Lyra Styles

Verified against Lyra Foundations (V1), file `qyCq4jUOrpYcpHhpNCdgA5`, Aug 2026 (Typography and Shadows pages).

Styles are applied by **key import**, not variable binding:

```js
node.effectStyleId = (await figma.importStyleByKeyAsync(key)).id;
textNode.textStyleId = (await figma.importStyleByKeyAsync(key)).id;
```

Resolve keys per file via `search_design_system` scoped to the Lyra `libraryKey`.

---

## Effect styles (shadows)

`Shadow none`, `Shadow sm`, `Shadow md`, `Shadow lg`, `Shadow xl`

Published values:

| Style | Value | Typical use |
|---|---|---|
| `none` | — | Flat surfaces, inline containers |
| `sm` | `0 2px 6px rgba(0,0,0,0.04)` | Subtle lift — cards at rest, list rows |
| `md` | `0 4px 12px rgba(0,0,0,0.06)` | Raised cards, popovers |
| `lg` | `0 12px 24px rgba(0,0,0,0.08)` | Dropdowns, menus, floating panels |
| `xl` | `0 20px 40px rgba(0,0,0,0.12)` | Modals, dialogs, top-layer overlays |

There is also a `lyra/shadow/*` variable family, but those are **STRING variables in an `Effects` collection holding CSS shadow values** — they are for code export, not for binding to a Figma effect. In Figma, always use the effect style.

---

## Text styles

Typeface is **Inter** throughout.

| Style | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| `Heading XL` | 24px | 600 Semi-bold | 28px | −0.02rem |
| `Heading LG` | 20px | 600 Semi-bold | 24px | −0.01rem |
| `Heading MD` | 16px | 500 Medium | 20px | −0.01rem |
| `Heading SM` | 14px | 500 Medium | 18px | 0 |
| `Heading XS` | 12px | 500 Medium | 16px | 0.01rem |
| `Body LG` | 16px | 400 Regular | 24px | −0.01rem |
| `Body LG emphasized` | 16px | 500 Medium | 24px | −0.01rem |
| `Body MD` | 14px | 400 Regular | 20px | 0 |
| `Body MD emphasized` | 14px | 500 Medium | 20px | 0 |
| `Body SM` | 12px | 400 Regular | 16px | 0.01rem |
| `Body SM emphasis` | 12px | 500 Medium | 16px | 0.01rem |
| `Label` | 14px | 500 Medium | 20px | 0 |

> **There is no `Heading 2xl`.** The scale tops out at `Heading XL` (24px). If a design needs something larger, that's a gap to raise, not a token to invent.
>
> The library labels the weights "500 (Semi-bold)" on XL/LG and "500 (Medium)" elsewhere despite both reading 500 — treat the resolved style as authoritative over the label, and never override weight manually.
>
> Emphasis naming is inconsistent in the library ("emphasized" on Body LG/MD, "emphasis" on Body SM). Search, don't guess the suffix.

### Rules

- A text style covers family, size, weight, line-height, and letter-spacing as one unit. Never set `fontSize` / `fontName` manually when a style exists.
- **Always `await figma.loadFontAsync(...)` before assigning `textStyleId`** — see the canonical text-edit recipe in `figma-use`. Skipping this is the most common failure in Lyra builds.
- For Inter, the Figma style string is `"Semi Bold"` (with a space), not `"SemiBold"`.
- Use `Label` for form field labels rather than `Body MD emphasized` — same metrics, but it carries the semantic role.
- Text **colour** is not part of the text style — it's a Fill using `lyra/color/fg/*`. See `variables.md`.

### Rough mapping

| Role | Style |
|---|---|
| Page title | `Heading XL` |
| Section heading | `Heading LG` / `Heading MD` |
| Card title, subsection | `Heading SM` / `Heading XS` |
| Default paragraph, input text | `Body MD` |
| Helper text, captions, metadata | `Body SM` |
| Lead paragraph, prominent copy | `Body LG` |
| Form field label | `Label` |
| Table header, inline emphasis | `Body SM emphasis` / `Body MD emphasized` |
