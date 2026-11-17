# Progress Bar (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/ProgressBar.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-progress-bar-announcer`, `sol-progress-bar-determinate`, `sol-progress-bar-fill`, `sol-progress-bar-name`, `sol-progress-bar-wrapper`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Multiple Progress Bar Determinate

Usage:
```tsx
args => <MultipleProgressBarWrapper {...args} />
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Muiltiple Progress Bars Determinate</h1></header><main><div><div style="display: flex; gap: 40px;"><div style="width: 350px;"><h2 class="heading heading-md">Progress Bar 1</h2><div class="sol-progress-bar-wrapper"><span class="sol-progress-bar-name" id="sol-progress-bar-label-_r_0_-name" aria-hidden="true">Progress Bar 1</span><div class="sol-progress-bar-determinate" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-labelledby="sol-progress-bar-label-_r_0_-name"><div class="sol-progress-bar-fill" style="width: 75%;"></div></div><div class="sol-progress-bar-announcer" aria-live="polite" aria-atomic="true"></div></div></div><div style="width: 350px;"><h2 class="heading heading-md">Progress Bar 2</h2><div class="sol-progress-bar-wrapper"><span class="sol-progress-bar-name" id="sol-progress-bar-label-_r_1_-name" aria-hidden="true">Progress Bar 2</span><div class="sol-progress-bar-determinate" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-labelledby="sol-progress-bar-label-_r_1_-name"><div class="sol-progress-bar-fill" style="width: 50%;"></div></div><div class="sol-progress-bar-announcer" aria-live="polite" aria-atomic="true"></div></div></div></div></div></main>
```

## Examples / Progress Bar Determinate

Usage:
```tsx
args => <ProgressBarAutoProgressWrapper {...args} />
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Progress Bar Determinate With Full Width</h1></header><main><div><div class="sol-progress-bar-wrapper"><span class="sol-progress-bar-name" id="sol-progress-bar-label-_r_0_-name" aria-hidden="true">Progress</span><div class="sol-progress-bar-determinate" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" aria-labelledby="sol-progress-bar-label-_r_0_-name"><div class="sol-progress-bar-fill" style="width: 20%;"></div></div><div class="sol-progress-bar-announcer" aria-live="polite" aria-atomic="true"></div></div><div style="margin-top: 10px; gap: 10px; display: flex;"><button type="button" class="sol-button btn-tertiary-large"><span class="projected-content">Start Auto Progress</span></button></div><p>Current Progress: 20%</p></div></main>
```
