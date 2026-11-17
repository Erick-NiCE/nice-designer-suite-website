# Toastr Notification (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/Toastr.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Error

Usage:
```tsx
args => <SOLToastr>
    <LaunchToastrButton {...args} />
  </SOLToastr>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Error</h1></header><main><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Show Toastr </span></button></main>
```

## Examples / Info

Usage:
```tsx
args => <SOLToastr>
    <LaunchToastrButton {...args} />
  </SOLToastr>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info</h1></header><main><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Show Toastr </span></button></main>
```

## Examples / Success

Usage:
```tsx
args => <SOLToastr>
    <LaunchToastrButton {...args} />
  </SOLToastr>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Success</h1></header><main><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Show Toastr </span></button></main>
```

## Examples / Warning

Usage:
```tsx
args => <SOLToastr>
    <LaunchToastrButton {...args} />
  </SOLToastr>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Warning</h1></header><main><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Show Toastr </span></button></main>
```
