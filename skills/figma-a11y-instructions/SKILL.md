---
name: figma-a11y-instructions
description: >
  Generate comprehensive WCAG-compliant accessibility instructions for developers from a Figma screen URL.
  Use this skill whenever the user provides a Figma frame/screen URL and asks for accessibility instructions,
  developer handoff docs, a11y specs, ARIA guidance, screen reader text, keyboard navigation patterns,
  color/contrast analysis, or any accessibility documentation for a UI screen.
  Also triggers on phrases like "accessibility for developers", "a11y instructions", "WCAG audit",
  "screen reader annotations", or "keyboard navigation spec" when a Figma URL is present.
---

# Figma Accessibility Instructions for Developers

This skill produces a multi-section accessibility specification document for a given Figma screen.
The output follows a fixed visual style — the color palette, table styling, keyboard-key chips,
numbered-circle tab annotations, and section-card layout documented below. Output is rendered as
an **HTML artifact** (not plain markdown).

## Reference Files
Read `references/sections.md` for detailed section templates and HTML component patterns.
Read `references/color-system.md` for the color-token reference used when recommending colors.
Read `references/lyra-doc-pattern.md` for the layout pattern to follow when writing documentation
directly into a Figma "dev docs" style page, if the user asks for that instead of a standalone
HTML artifact.

---

## Visual Design System (from Figma reference)

These are the exact colors and styles used in the reference file. Apply them consistently.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-table-header-bg` | `#F3F2F1` | Table header row background |
| `--color-table-header-text` | `#323130` | Table header text |
| `--color-table-border` | `#EDEBE9` | Table cell borders |
| `--color-selected-row` | `#DEECF9` | Selected/highlighted row |
| `--color-section-bg` | `#FFFFFF` | Section card background |
| `--color-overview-bg` | `#F9F9F9` | Overview container background |
| `--color-overview-border` | `#E1DFDD` | Overview container border |
| `--color-h1-text` | `#201F1E` | H1 section title |
| `--color-h2-text` | `#201F1E` | H2 heading |
| `--color-h3-text` | `#323130` | H3 / overview heading |
| `--color-body-text` | `#323130` | Body paragraph text |
| `--color-kbd-bg` | `#F3F2F1` | Keyboard key chip background |
| `--color-kbd-border` | `#8A8886` | Keyboard key chip border |
| `--color-kbd-text` | `#201F1E` | Keyboard key chip text |
| `--color-code-bg` | `#1E1E1E` | Code block background |
| `--color-code-text` | `#D4D4D4` | Code block text |
| `--color-tab-circle-bg` | `#0078D4` | Tab-order number circle fill |
| `--color-tab-circle-text` | `#FFFFFF` | Tab-order number circle text |
| `--color-accent-blue` | `#0078D4` | Links, focus indicators, active states |
| `--color-warn-yellow-bg` | `#FFF4CE` | Warning/important callout background |
| `--color-warn-yellow-border` | `#F2C94C` | Warning callout left border |
| `--color-page-bg` | `#F5F4F3` | Page-level background |

### Typography
- **H1 section title**: 24px, font-weight 700, color `#201F1E`
- **H2 subsection**: 18px, font-weight 600, color `#201F1E`
- **H3 / overview heading**: 14px, font-weight 600, color `#323130`
- **Body text**: 14px, font-weight 400, color `#323130`
- **Table header**: 14px, font-weight 600, color `#323130`
- **Table cell**: 14px, font-weight 400, color `#323130`
- **Code / monospace**: 13px, font-family Consolas/monospace, color `#D4D4D4` on `#1E1E1E`

---

## Workflow

### Step 1 – Inspect the Figma Screen
Use `Figma:get_metadata` on the provided URL to enumerate all frames and layers, then use
`Figma:get_design_context` on key sections to understand components, colors, and interactions.
Also call `Figma:get_screenshot` with `enableBase64Response: true` so the image can be
embedded directly in the HTML output.

Extract the following from the Figma file:
- Page/screen name and purpose
- Heading structure (H1, H2, H3...)
- Semantic regions (header, nav, main, section, footer)
- All interactive elements: buttons, checkboxes, links, dropdowns, menus, inputs, toggles
- Status indicators, icons, and their visual representations
- All colors used for text, backgrounds, borders, focus indicators, and status icons
- Tab order implied by the layout (left-to-right, top-to-bottom)
- Dynamic content areas (live regions)

### Step 2 – Inspect the Design System for Recommended Colors
Ask the user for their design system's Figma file (or use the one they already provided the
screen from, if it also contains the foundations), then fetch its color tokens. If the user is
working in the NiCE Designer Suite's own Lyra/SOL system instead, use `scan_variables` or
`export_design_tokens` from the nice-designer-mcp server rather than a Figma fetch.

Use `Figma:get_metadata` + `Figma:get_design_context` on the foundations node to extract:
- Semantic color tokens (primary, secondary, error, success, warning, neutral)
- Hex values for each token
- Which tokens have sufficient WCAG AA/AAA contrast on white or dark backgrounds

### Step 3 – Compute Contrast Ratios
For every color pair (foreground + background) identified in Step 1:
1. Compute the WCAG 2.1 relative luminance for each hex color
2. Compute the contrast ratio: (L1 + 0.05) / (L2 + 0.05) where L1 > L2
3. Classify: ratio ≥ 7:1 = AAA, ratio ≥ 4.5:1 = AA, ratio ≥ 3:1 = AA Large, < 3:1 = Fail
4. If the current color fails or is only AA, look up the closest design-system token
   that meets AAA and recommend it in the "Recommended Color" and "New Contrast Ratio" columns

```
function relativeLuminance(hex) {
  const [r, g, b] = [hex.slice(1,3), hex.slice(3,5), hex.slice(5,7)]
    .map(c => { const v = parseInt(c,16)/255; return v<=0.03928 ? v/12.92 : ((v+0.055)/1.055)**2.4; });
  return 0.2126*r + 0.7152*g + 0.0722*b;
}
function contrastRatio(hex1, hex2) {
  const [l1, l2] = [relativeLuminance(hex1), relativeLuminance(hex2)].sort((a,b)=>b-a);
  return (l1 + 0.05) / (l2 + 0.05);
}
```

### Step 4 – Generate the HTML Document
Produce all five sections as a single styled HTML artifact. See `references/sections.md` for
the exact HTML component patterns, CSS variables, and layout structure.

**Output format: HTML artifact — NOT plain markdown.**

The HTML must:
- Use the CSS variables and color palette defined above
- Render section cards with white backgrounds, subtle drop shadow, and `#EDEBE9` border
- Style tables with gray header rows (`#F3F2F1`) and clean `#EDEBE9` borders
- Render `<kbd>` elements as pill chips (gray bg `#F3F2F1`, 1px solid `#8A8886` border, border-radius 3px, monospace font)
- Embed the Figma screenshot (base64 PNG) with a dotted overlay border for the screenshot frame
- Render numbered tab-order circles as `#0078D4` filled circles with white text
- Render overview containers with `#F9F9F9` bg and `#E1DFDD` border
- Render warning/important callouts with `#FFF4CE` bg and `#F2C94C` left border
- Render code blocks with `#1E1E1E` background
- Include a sticky top navigation bar (white bg, `#EDEBE9` bottom border) with section links
- Add WCAG level badge cells: green `#107C10` bg for AAA ✓, amber `#C19C00` bg for AA ✓, red `#A4262C` bg for Fail
- Show color swatch `<span style="display:inline-block;width:14px;height:14px;border-radius:2px;background:#HEX;border:1px solid #ccc;vertical-align:middle;margin-right:4px">` next to each hex value in color tables

---

## Output Sections (in order)

1. **Page Structure and Semantic HTML** — heading hierarchy table, Figma screenshot with colored semantic region overlays, visual page structure table
2. **Keyboard Navigation – Tab Order** — Figma screenshot with numbered blue circles, keyboard interaction patterns table
3. **Keyboard Navigation – Shortcut Keys & Component Patterns** — per-component keyboard tables with `<kbd>` chips
4. **Screen Reader Announcements & Alternative Text** *(combined)* — announcement tables, ARIA live region code block, status indicator table, interactive element labels table
5. **Color and Contrast** — color palette tables with hex swatches, WCAG level badges, design-system recommendations

---

## Critical Rules

- **HTML artifact only**: Never output plain markdown for the final document. Use the HTML templates in `references/sections.md`.
- **Embed the screenshot**: Use `Figma:get_screenshot` with `enableBase64Response: true` and embed via `<img src="data:image/png;base64,...">`.
- **Keyboard keys**: Always use `<kbd>` elements styled as chips — never backtick markdown.
- **Combine** "Screen Reader Text and Announcements" and "Alternative Text and Status Indicators" into a single section 4.
- **Color tables** must always include these columns in order:
  `Element | Foreground | Background | Contrast Ratio | WCAG Level | Recommended Color | New Contrast Ratio`
- All heading level tables must reference actual element names from the inspected screen.
- Screen reader announcements must reference actual element names from the screen.
- Keyboard navigation tables must list every interactive component found on screen.
- Tab order numbering must be inferred from the spatial layout (left→right, top→bottom, landmark order).
- For color recommendations, prefer design system tokens over arbitrary hex values.
- The sticky nav at the top must link to section anchors using smooth scroll.
