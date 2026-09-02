# Lyra Dev — Documentation Page Pattern Reference

Source: `https://www.figma.com/design/e7n6qXpu61Ji5is4HzEjbC/Lyra-Dev?node-id=151-8377`
Extracted from: Container frames (432:165, 510:824, 510:938) and Usage Guidelines (510:9226)

Use this reference whenever adding a new documentation section to the Lyra Dev Documentation page.
All values below are **exact pixel measurements** extracted directly from the Figma file.

---

## 1. Page Layout

- All documentation containers sit on the same page (`151:8377`)
- Containers are positioned **horizontally** side-by-side with a **44px gap** between them
- Each container: **width = 1200px**, height = AUTO (hug content), **y = 0**
- Existing x-positions: 607, 1840, 3084 → next new container goes at **x = 4328**
- If placing BELOW existing content: x = 607, y = existing_height + 80

---

## 2. Main Container Frame

```
Frame name:     "Accessibility Instructions" (or section topic)
Type:           FRAME
Width:          1200px (FIXED)
Height:         AUTO (hug)
Layout mode:    VERTICAL
Item spacing:   0
Padding:        0 all sides
Fill:           #FFFFFF (white)
Corner radius:  16px
Stroke:         none
Clips content:  false
```

---

## 3. Header (Dark Navy Bar)

```
Width:          1200px (FIXED)
Height:         AUTO
Layout mode:    VERTICAL
Item spacing:   0
Padding:        20px left, 20px right, 20px top, 0px bottom
Fill:           #293541 = rgb(0.161, 0.204, 0.259)
Corner radius:  14px (top corners only matches parent's 16px outer)

Children (HORIZONTAL row inside, 1160px wide):
  Layout:       HORIZONTAL, item spacing = auto (SPACE_BETWEEN)
  Width:        1160px (FIXED)

  Left group (VERTICAL, gap=4):
    ① "LYRA" label:
       Font:    Inter Regular 16px
       Color:   #81BDF9 = rgb(0.506, 0.741, 1)
       Line-h:  24px

    ② Section title (e.g. "Accessibility Instructions"):
       Font:    Inter Medium 24px
       Color:   #FFFFFF
       Line-h:  36px
```

---

## 4. Content Body

```
Width:          1200px (FIXED)
Height:         AUTO (hug)
Layout mode:    NONE (absolute positioning)
Padding:        0
Fill:           none (transparent, sits on white main container)

Content starts at:  x=60, y=40 relative to content area start
Content width:      1080px (= 1200 - 60×2 margins)
```

### 4a. Section Title Block (each major section)

```
Width:          1080px
Layout mode:    NONE
Height:         AUTO

  Section heading text:
    Font:       Inter Medium 20px
    Color:      #000000
    Line-h:     30px
    y-offset:   0

  Section description:
    Font:       Inter Regular 16px
    Color:      #000000
    Line-h:     24px
    y-offset:   38px (below heading)
    Width:      ~733–800px (wraps within 1080)
```

### 4b. Do / Don't Column Layout

```
Layout:         Two columns side-by-side (NONE positioning)
Column width:   524px each
Gap between:    32px (1080 - 524 - 524 = 32)
Left column x:  0 (relative to content area)
Right column x: 556 (524 + 32)

Each column (VERTICAL, FIXED width/height):
  Layout mode:    VERTICAL
  Width:          524px (FIXED)
  Item spacing:   16px
  Padding:        0 all sides
  counterAxisAlignItems: MIN
  primaryAxisSizingMode: FIXED
  counterAxisSizingMode: FIXED
```

### 4c. Do / Don't Column Header

```
Row layout:     HORIZONTAL, item spacing=8, counterAxisAlignItems=CENTER
Width:          524px

  Icon circle (24×24, corner radius 999):
    Do:     fill #00C950 (green) rgb(0, 0.788, 0.314), text "✓" white 16px
    Don't:  fill #FB2C36 (red)   rgb(0.984, 0.173, 0.212), text "✕" white 16px

  Label text:
    "Do" / "Don't"
    Font:   Inter Medium 18px
    Color:  #000000
    Line-h: 27px
```

### 4d. Rule Card (each Do / Don't item)

```
Width:          524px (FIXED)
Layout mode:    VERTICAL
Item spacing:   0
Padding:        17px left, 17px right, 16.5px top, 17.5px bottom
Corner radius:  10px

  Do card:
    Fill:   #F6FAFF = rgb(0.965, 0.980, 0.996) light blue
    Stroke: #C8E2FF = rgb(0.784, 0.882, 1.0) light blue border, 1px inside

  Don't card:
    Fill:   #FEF2F2 = rgb(0.996, 0.949, 0.949) light red
    Stroke: #FFCACA = rgb(1, 0.788, 0.788) light red border, 1px inside

  Text content:
    Font:   Inter Regular 16px
    Color:  #000000
    Line-h: 24px
    Width:  490px (524 - 17 - 17)
    Wraps:  2 lines max = 82px tall, 1 line = 58px tall
```

---

## 5. Best Practices / Full-Width Section Cards

```
Width:          1080px (FIXED)
Layout mode:    VERTICAL
Item spacing:   8px
Padding:        25px left, 25px right, 25px top, 1px bottom
Fill:           #FFFFFF
Corner radius:  0 (or 4 in some variants)
Stroke:         none (or subtle #E5E5E5 in some variants)

  Sub-heading (Heading 3):
    Font:   Inter Medium 18px
    Color:  #000000
    Line-h: 27px

  Paragraph:
    Font:   Inter Regular 16px
    Color:  #000000
    Line-h: 24px
    Width:  1030px (1080 - 25 - 25)
```

---

## 6. Bullet List Items

```
Layout:         HORIZONTAL, gap=0
  Bullet dot "•":
    Font:   Inter Regular 16px
    Color:  #1E6CCB = rgb(0.086, 0.424, 0.792) LYRA blue
    Width:  9px

  Text:
    Font:   Inter Regular 16px
    Color:  #000000
    Line-h: 24px
    x:      offset ~15px from bullet
```

---

## 7. Sub-section Headings (Heading 2)

```
Font:         Inter Medium 20px
Color:        #000000
Line-h:       30px
Used for:     "Best Practices", "When to Use Cards" etc.
Spacing above: 40px from previous section
```

---

## 8. ARIA Table (full-width)

For a structured reference table within a documentation container:

```
Width:          1080px
Row height:     AUTO
Header row fill: #F0F5FF = rgb(0.941, 0.961, 1.0) light blue
Body row fill:   #FFFFFF
Row padding:     12px left/right, 10px top/bottom
Stroke:          #E0E8F5 border between rows, 1px
Corner radius:   4px (outer table frame)

Column widths (for 4-col ARIA table):
  Card Variant:   160px
  ARIA/Role:      300px
  Keyboard:       200px
  Notes:          420px (fills to 1080)

Text in cells:
  Header: Inter Medium 13px, color #000000
  Body:   Inter Regular 13px, color #000000 or LYRA blue for code
```

---

## 9. Vertical Spacing Between Sections

```
Between header and first section:    40px
Between sections:                    48–64px
Between section heading and content: 16–20px
Between Do/Don't header and cards:   16px
Between rule cards:                  16px (item spacing in column)
Between best-practice cards:         16px
```

---

## 10. Figma Construction — Critical Rules

When building with `Figma:use_figma`:

1. **Use NONE layout for the content body** — the main content area uses `layoutMode: 'NONE'` 
   with children absolutely positioned. Do NOT use VERTICAL auto-layout for the content wrapper.

2. **FIXED sizing on all content children** — every frame inside the NONE-layout content area
   must have both width AND height set as explicit pixel values using `node.resize(w, h)`.
   `primaryAxisSizingMode='AUTO'` will NOT work inside a NONE-layout parent.

3. **Calculate heights precisely** — before placing a child frame, calculate its total height
   from its own content, then use that to set its resize and position the next element.

4. **Position with x/y** — inside a NONE-layout parent, set `node.x` and `node.y` explicitly.
   Auto-layout spacing does not apply.

5. **Text wrapping** — after creating a text node, always call `node.resize(targetWidth, node.height)`
   to force it to the correct width, then use `node.textAutoResize = 'HEIGHT'` so it grows vertically.

6. **Do/Don't columns** — place both columns inside a NONE-layout wrapper, left column at x=0,
   right column at x=556. Both must have FIXED width=524 and FIXED height (calculated from content).

### Pseudocode for building a section with Do/Don't columns:

```js
// Content body (NONE layout, absolute positioning)
const body = figma.createFrame();
body.layoutMode = 'NONE';
body.resize(1200, totalCalculatedHeight);

// Section title at y=40, x=60
const secTitle = figma.createText(); /* Inter Medium 20px */
secTitle.x = 60; secTitle.y = 40;

// Do/Don't wrapper at y=90, x=60 (below title + 20px gap)
const doColFrame = figma.createFrame();
doColFrame.resize(524, calculatedColHeight);  // FIXED, not AUTO
doColFrame.x = 0; doColFrame.y = 0;  // relative to wrapper

const dontColFrame = figma.createFrame();
dontColFrame.resize(524, calculatedColHeight);
dontColFrame.x = 556; dontColFrame.y = 0;

const colsWrapper = figma.createFrame();
colsWrapper.layoutMode = 'NONE';
colsWrapper.resize(1080, calculatedColHeight);
colsWrapper.appendChild(doColFrame);
colsWrapper.appendChild(dontColFrame);
colsWrapper.x = 60; colsWrapper.y = 90;
body.appendChild(colsWrapper);
```

---

## 11. Color Quick Reference

| Usage | Hex | RGB |
|---|---|---|
| Header background | #293541 | 0.161, 0.204, 0.259 |
| Header LYRA label | #81BDF9 | 0.506, 0.741, 1.0 |
| Header title text | #FFFFFF | 1, 1, 1 |
| Body background | #FFFFFF | 1, 1, 1 |
| All body text | #000000 | 0, 0, 0 |
| LYRA blue (bullets, code) | #1E6CCB | 0.086, 0.424, 0.792 |
| Do card fill | #F6FAFF | 0.965, 0.980, 0.996 |
| Do card stroke | #C8E2FF | 0.784, 0.882, 1.0 |
| Don't card fill | #FEF2F2 | 0.996, 0.949, 0.949 |
| Don't card stroke | #FFCACA | 1.0, 0.788, 0.788 |
| Do icon circle | #00C950 | 0, 0.788, 0.314 |
| Don't icon circle | #FB2C36 | 0.984, 0.173, 0.212 |
| Table header fill | #F0F5FF | 0.941, 0.961, 1.0 |
| Table row stroke | #E0E8F5 | 0.878, 0.910, 0.961 |
