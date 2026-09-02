# Design System Color Reference

Source: https://www.figma.com/design/Ga2WCPmnL73jIUnMxgqOTd/C26---Design-System-%E2%AD%90%EF%B8%8F--Tali-?node-id=11-249

When generating the "Recommended Color" column in contrast tables, reference this design system.
Always inspect the live Figma file using `Figma:get_design_context` and `Figma:get_metadata`
to get the most current tokens — the values below are a starting reference only.

---

## How to Use This File

1. When a color pair fails WCAG AA (ratio < 4.5:1 for normal text, < 3:1 for large text):
   - Find a design system token that is semantically appropriate
   - Verify it meets AAA (≥ 7:1) or at minimum AA (≥ 4.5:1)
   - Use that token's hex value as the "Recommended Color"
   - Compute and report the new contrast ratio

2. When a color pair passes AA but not AAA:
   - Look for a design system token that achieves AAA
   - If no AAA token is semantically appropriate, note "AA only — consider darkening for AAA"

3. When a color pair already passes AAA:
   - Repeat the same hex in "Recommended Color" and add "(Already AAA)" note
   - Repeat the contrast ratio in "New Contrast Ratio"

---

## Common Design System Color Inspection Approach

When inspecting the design system file, look for:
- A "Color" or "Foundations" page/frame
- Style tokens with names like: `primary`, `secondary`, `text-primary`, `text-secondary`,
  `error`, `warning`, `success`, `info`, `neutral-*`, `surface-*`, `border-*`
- Variable collections in Figma (look for local variables in the file)

### Key Contrast Requirements by Use Case

| Use Case | Required Ratio | Notes |
|---|---|---|
| Normal body text (< 18pt / < 14pt bold) | ≥ 4.5:1 (AA) | Target ≥ 7:1 (AAA) |
| Large text (≥ 18pt / ≥ 14pt bold) | ≥ 3:1 (AA large) | Target ≥ 4.5:1 (AAA large) |
| UI components and focus indicators | ≥ 3:1 | Per WCAG 1.4.11 |
| Decorative / non-meaningful graphics | No requirement | Mark as "Decorative" |
| Disabled controls | No requirement | Mark as "Disabled state" |
| Logotypes | No requirement | Mark as "Decorative" |

---

## Contrast Ratio Computation Reference

```
WCAG Relative Luminance:
  For each R/G/B channel (0–255):
    c = channel / 255
    if c ≤ 0.03928: L_channel = c / 12.92
    else:           L_channel = ((c + 0.055) / 1.055) ^ 2.4

  L = 0.2126 * R_L + 0.7152 * G_L + 0.0722 * B_L

Contrast Ratio:
  ratio = (lighter_L + 0.05) / (darker_L + 0.05)
```

### Quick Reference Values (common white/dark backgrounds)

| Foreground Hex | Against #FFFFFF | Against #000000 |
|---|---|---|
| #000000 | 21.0:1 (AAA) | — |
| #1A1A1A | 17.5:1 (AAA) | — |
| #2D2D2D | 13.0:1 (AAA) | — |
| #424242 | 9.7:1 (AAA) | — |
| #595959 | 7.0:1 (AAA) | — |
| #767676 | 4.54:1 (AA) | — |
| #949494 | 2.85:1 (Fail) | — |
| #FFFFFF | — | 21.0:1 (AAA) |

---

## Notes for the Skill

- Always **inspect the live design system file** for the project's actual tokens.
  The table above is generic — real projects will have project-specific brand colors.
- If the design system file cannot be accessed, fall back to suggesting the closest
  standard accessible hex that is semantically appropriate.
- Document which design system token name maps to the recommended hex
  (e.g., "Recommended: `--color-text-primary` (#1A1A1A)").
