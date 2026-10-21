# Binding Recipes

Copy-paste patterns for `use_figma`. Load `figma-use` alongside this — it owns the Plugin API rules, gotchas, and error recovery. These snippets assume you've already resolved variable/style keys via `search_design_system` scoped to the Lyra `libraryKey`.

## Import a variable by key

```js
const v = await figma.variables.importVariableByKeyAsync(KEY);
```

## Alignment — gap & padding

```js
frame.layoutMode = "VERTICAL"; // auto-layout must exist first
frame.setBoundVariable("itemSpacing", gapVar);
frame.setBoundVariable("paddingTop", padVar);
frame.setBoundVariable("paddingBottom", padVar);
frame.setBoundVariable("paddingLeft", padVar);
frame.setBoundVariable("paddingRight", padVar);
```

## Appearance — corner radius

Bind each corner individually for full binding, even when uniform:

```js
for (const c of ["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"]) {
  frame.setBoundVariable(c, radiusVar);
}
```

Opacity has no Lyra variable today — set numerically and flag it as untokenized if non-default.

## Fill — background colour

Paints are immutable; clone, bind, reassign:

```js
const paint = figma.variables.setBoundVariableForPaint(
  { type: "SOLID", color: { r: 0, g: 0, b: 0 } }, // placeholder, overridden by binding
  "color",
  bgVar
);
frame.fills = [paint];
```

## Fill — text colour

Same mechanism, `fg/*` token, on a TEXT node:

```js
const paint = figma.variables.setBoundVariableForPaint(
  { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
  "color",
  fgVar
);
textNode.fills = [paint];
```

## Stroke — colour and weight

```js
const strokePaint = figma.variables.setBoundVariableForPaint(
  { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
  "color",
  borderColorVar
);
node.strokes = [strokePaint];
node.setBoundVariable("strokeWeight", borderWeightVar);
// per-side alternative: strokeTopWeight / strokeRightWeight / strokeBottomWeight / strokeLeftWeight
```

## Effects — shadow style

```js
const style = await figma.importStyleByKeyAsync(SHADOW_STYLE_KEY);
node.effectStyleId = style.id;
```

Never hand-construct a `DROP_SHADOW` effect object when a Lyra shadow style exists.

## Typography — text style

Load the font first, always:

```js
const style = await figma.importStyleByKeyAsync(TEXT_STYLE_KEY);
await figma.loadFontAsync(style.fontName);
textNode.textStyleId = style.id;
```

---

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| `setBoundVariable` throws on `cornerRadius` | Variable's `scopes` don't include `CORNER_RADIUS` (e.g. you passed a `GAP`-scoped spacing var) | Re-check the `scopes` array from the search result; pick a `lyra/radius/*` variable |
| Fill binding silently doesn't apply | Mutated the existing paint object in place | Build a new paint via `setBoundVariableForPaint`, then reassign the whole `fills` array |
| Text style assignment throws | Font not loaded | `await figma.loadFontAsync(style.fontName)` before setting `textStyleId` |
| `itemSpacing` binding has no effect | Node has no auto-layout | Set `layoutMode` before binding |
| Search returns a token from Material 3 / org "Colors" | Missing library scope | Pass `includeLibraryKeys: [lyraLibraryKey]` on every search |

On any `use_figma` error: stop, read the message, fix, retry. Scripts are atomic, so nothing partial is left behind.
