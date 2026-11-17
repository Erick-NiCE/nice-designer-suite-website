# Card (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Card.css`.
Component classes: `sol-card`, `sol-card-body`, `sol-card-footer`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Card With Body And Footer

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Card component with body and footer</h1>
    </header>
    <main>
      <SOLCard enableHover={args.enableHover} divider={args.divider} body={<span> {longText} </span>} footer={<span> {longText} </span>} />
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Card component with body and footer</h1></header><main><div class="sol-card show-divider"><div class="sol-card-body body-md"><span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span></div><div class="sol-card-footer body-md"><span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span></div></div></main>
```

## Examples / Card With Only Body

Usage:
```tsx
args => <>
    <header>
      <h1 id="card-heading" className="sol-screenreader-only">
        Card component with only body
      </h1>
    </header>
    <main>
      <SOLCard enableHover={args.enableHover} variant={args.variant} chatRole={args.chatRole} selectable={args.selectable} selected={args.selected} ariaLabelledby={args.ariaLabelledby} ariaDescribedby={args.ariaDescribedby} ariaLive={args.ariaLive} semantic={args.semantic} body={<span> {longText} </span>} />
    </main>
  </>
```

Rendered markup:
```html
<header><h1 id="card-heading" class="sol-screenreader-only">Card component with only body</h1></header><main><div class="sol-card"><div class="sol-card-body body-md"><span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span></div></div></main>
```
