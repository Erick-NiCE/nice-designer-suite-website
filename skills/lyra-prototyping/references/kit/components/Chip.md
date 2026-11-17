# Chip (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Chip.css`, `css/Icon.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-chip`, `sol-icon`, `sol-icon-host`, `sol-icon-template-wrapper`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Chip Error State

Usage:
```tsx
({
  showIcon = true,
  containerWidth = 600,
  role,
  storyTitle = 'Chip',
  ...args
}) => <div style={{
  maxWidth: `${containerWidth}px`,
  width: '100%'
}}>
    <main>
      <h1 className="sol-screenreader-only">{storyTitle}</h1>
      <SOLChip {...args} role={role || null} icon={showIcon ? LeadingIcon : null} onRemoved={action('chip removed')} onRemoveButtonKeydown={action('remove button keydown')} onChipClicked={action('chip clicked')} />
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Chip error state</h1><div id="sol-chip-1" role="group" aria-label="Validation failed, error chip, Press Delete or Backspace to remove the Validation failed chip, or Enter to navigate its controls" aria-roledescription="chip" aria-invalid="true" aria-describedby="_r_0_-error-description _r_0_-nav-hint" class="sol-chip small" tabindex="0"><div class="chip-inner-content small error"><span id="_r_0_-nav-hint" class="sol-screenreader-only">Press Enter to move and use the left and right arrow keys to navigate the controls</span><span id="_r_0_-error-description" class="sol-screenreader-only">Required field</span><span class="error-icon-wrapper" tabindex="-1" role="img" aria-label="Required field. Use left and right arrow keys to navigate the controls" data-base-ui-tooltip-trigger=""><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="icon"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 0H1.32C0.6 0 0 0.6 0 1.32V10.68C0 11.4 0.6 12 1.32 12H10.68C11.4 12 12 11.4 12 10.68V1.32C12 0.6 11.4 0 10.68 0V0ZM10.8 10.8H1.2V1.2H10.8V10.8ZM9 10.2C9.3 10.2 9.6 9.9 9.6 9.54V4.98C9.6 4.62 9.36 4.32 9 4.32C8.64 4.32 8.4 4.62 8.4 4.98V9.54C8.4 9.9 8.7 10.2 9 10.2ZM9 3.72C9.36 3.72 9.6 3.42 9.6 3.06C9.6 2.7 9.36 2.4 9 2.4C8.64 2.4 8.4 2.7 8.4 3.06C8.4 3.42 8.64 3.72 9 3.72ZM6 10.2C6.3 10.2 6.6 9.9 6.6 9.6V5.4C6.6 5.1 6.36 4.8 6 4.8C5.7 4.8 5.4 5.1 5.4 5.4V9.6C5.4 9.9 5.7 10.2 6 10.2ZM6 4.2C6.36 4.2 6.6 3.96 6.6 3.6C6.6 3.24 6.36 3 6 3C5.64 3 5.4 3.24 5.4 3.6C5.4 3.96 5.64 4.2 6 4.2ZM3 10.2C3.3 10.2 3.6 9.96 3.6 9.72V6.48C3.6 6.18 3.36 6 3 6C2.64 6 2.4 6.18 2.4 6.48V9.72C2.4 9.96 2.7 10.2 3 10.2ZM3 5.4C3.36 5.4 3.6 5.16 3.6 4.8C3.6 4.44 3.36 4.2 3 4.2C2.64 4.2 2.4 4.44 2.4 4.8C2.4 5.16 2.64 5.4 3 5.4Z" fill="#767676"></path></svg></span></span></span><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Validation failed</span><button type="button" tabindex="-1" aria-label="Remove Validation failed" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small remove-icon"><span class="projected-content"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span></button></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true">Validation failed has an error: Required field</span></main></div>
```

## Examples / Chip With Close

Usage:
```tsx
({
  showIcon = true,
  containerWidth = 600,
  role,
  storyTitle = 'Chip',
  ...args
}) => <div style={{
  maxWidth: `${containerWidth}px`,
  width: '100%'
}}>
    <main>
      <h1 className="sol-screenreader-only">{storyTitle}</h1>
      <SOLChip {...args} role={role || null} icon={showIcon ? LeadingIcon : null} onRemoved={action('chip removed')} onRemoveButtonKeydown={action('remove button keydown')} onChipClicked={action('chip clicked')} />
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Chip with close</h1><div id="sol-chip-1" role="group" aria-label="Main Label with remove, Press Delete or Backspace to remove the Main Label with remove chip, or Enter to navigate its controls" aria-roledescription="chip" class="sol-chip small" tabindex="0"><div class="chip-inner-content small"><span class="icon"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 0H1.32C0.6 0 0 0.6 0 1.32V10.68C0 11.4 0.6 12 1.32 12H10.68C11.4 12 12 11.4 12 10.68V1.32C12 0.6 11.4 0 10.68 0V0ZM10.8 10.8H1.2V1.2H10.8V10.8ZM9 10.2C9.3 10.2 9.6 9.9 9.6 9.54V4.98C9.6 4.62 9.36 4.32 9 4.32C8.64 4.32 8.4 4.62 8.4 4.98V9.54C8.4 9.9 8.7 10.2 9 10.2ZM9 3.72C9.36 3.72 9.6 3.42 9.6 3.06C9.6 2.7 9.36 2.4 9 2.4C8.64 2.4 8.4 2.7 8.4 3.06C8.4 3.42 8.64 3.72 9 3.72ZM6 10.2C6.3 10.2 6.6 9.9 6.6 9.6V5.4C6.6 5.1 6.36 4.8 6 4.8C5.7 4.8 5.4 5.1 5.4 5.4V9.6C5.4 9.9 5.7 10.2 6 10.2ZM6 4.2C6.36 4.2 6.6 3.96 6.6 3.6C6.6 3.24 6.36 3 6 3C5.64 3 5.4 3.24 5.4 3.6C5.4 3.96 5.64 4.2 6 4.2ZM3 10.2C3.3 10.2 3.6 9.96 3.6 9.72V6.48C3.6 6.18 3.36 6 3 6C2.64 6 2.4 6.18 2.4 6.48V9.72C2.4 9.96 2.7 10.2 3 10.2ZM3 5.4C3.36 5.4 3.6 5.16 3.6 4.8C3.6 4.44 3.36 4.2 3 4.2C2.64 4.2 2.4 4.44 2.4 4.8C2.4 5.16 2.64 5.4 3 5.4Z" fill="#767676"></path></svg></span></span></span><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Main Label with remove</span><button type="button" tabindex="-1" aria-label="Remove Main Label with remove" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small remove-icon"><span class="projected-content"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span></button></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true"></span></main></div>
```

## Examples / Simple Chip

Usage:
```tsx
({
  showIcon = true,
  containerWidth = 600,
  role,
  storyTitle = 'Chip',
  ...args
}) => <div style={{
  maxWidth: `${containerWidth}px`,
  width: '100%'
}}>
    <main>
      <h1 className="sol-screenreader-only">{storyTitle}</h1>
      <SOLChip {...args} role={role || null} icon={showIcon ? LeadingIcon : null} onRemoved={action('chip removed')} onRemoveButtonKeydown={action('remove button keydown')} onChipClicked={action('chip clicked')} />
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Simple chip</h1><div id="sol-chip-1" role="button" aria-label="Main Label" class="sol-chip small readonly" tabindex="0"><div class="chip-inner-content small readonly"><span class="icon"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 0H1.32C0.6 0 0 0.6 0 1.32V10.68C0 11.4 0.6 12 1.32 12H10.68C11.4 12 12 11.4 12 10.68V1.32C12 0.6 11.4 0 10.68 0V0ZM10.8 10.8H1.2V1.2H10.8V10.8ZM9 10.2C9.3 10.2 9.6 9.9 9.6 9.54V4.98C9.6 4.62 9.36 4.32 9 4.32C8.64 4.32 8.4 4.62 8.4 4.98V9.54C8.4 9.9 8.7 10.2 9 10.2ZM9 3.72C9.36 3.72 9.6 3.42 9.6 3.06C9.6 2.7 9.36 2.4 9 2.4C8.64 2.4 8.4 2.7 8.4 3.06C8.4 3.42 8.64 3.72 9 3.72ZM6 10.2C6.3 10.2 6.6 9.9 6.6 9.6V5.4C6.6 5.1 6.36 4.8 6 4.8C5.7 4.8 5.4 5.1 5.4 5.4V9.6C5.4 9.9 5.7 10.2 6 10.2ZM6 4.2C6.36 4.2 6.6 3.96 6.6 3.6C6.6 3.24 6.36 3 6 3C5.64 3 5.4 3.24 5.4 3.6C5.4 3.96 5.64 4.2 6 4.2ZM3 10.2C3.3 10.2 3.6 9.96 3.6 9.72V6.48C3.6 6.18 3.36 6 3 6C2.64 6 2.4 6.18 2.4 6.48V9.72C2.4 9.96 2.7 10.2 3 10.2ZM3 5.4C3.36 5.4 3.6 5.16 3.6 4.8C3.6 4.44 3.36 4.2 3 4.2C2.64 4.2 2.4 4.44 2.4 4.8C2.4 5.16 2.64 5.4 3 5.4Z" fill="#767676"></path></svg></span></span></span><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Main Label</span></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true"></span></main></div>
```

## OverviewExamples / Chip With Close

Usage:
```tsx
() => <SOLChip label="Main Label with remove" removable />
```

Rendered markup:
```html
<div id="sol-chip-1" role="group" aria-label="Main Label with remove, Press Delete or Backspace to remove the Main Label with remove chip, or Enter to navigate its controls" aria-roledescription="chip" class="sol-chip small" tabindex="0"><div class="chip-inner-content small"><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Main Label with remove</span><button type="button" tabindex="-1" aria-label="Remove Main Label with remove" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small remove-icon"><span class="projected-content"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span></button></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true"></span>
```

## OverviewExamples / Error State Chip

Usage:
```tsx
() => <SOLChip label="Validation failed" removable errorState errorMessage="Required field" />
```

Rendered markup:
```html
<div id="sol-chip-1" role="group" aria-label="Validation failed, error chip, Press Delete or Backspace to remove the Validation failed chip, or Enter to navigate its controls" aria-roledescription="chip" aria-invalid="true" aria-describedby="_r_0_-error-description _r_0_-nav-hint" class="sol-chip small" tabindex="0"><div class="chip-inner-content small error"><span id="_r_0_-nav-hint" class="sol-screenreader-only">Press Enter to move and use the left and right arrow keys to navigate the controls</span><span id="_r_0_-error-description" class="sol-screenreader-only">Required field</span><span class="error-icon-wrapper" tabindex="-1" role="img" aria-label="Required field. Use left and right arrow keys to navigate the controls" data-base-ui-tooltip-trigger=""><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Validation failed</span><button type="button" tabindex="-1" aria-label="Remove Validation failed" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small remove-icon"><span class="projected-content"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span></button></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true">Validation failed has an error: Required field</span>
```

## OverviewExamples / Simple Chip

Usage:
```tsx
() => <div style={{
  display: 'flex',
  gap: '16px'
}}>
    <SOLChip label="Medium Chip" size="medium" icon={LeadingIcon} onChipClicked={action('chip clicked')} />
    <SOLChip label="Small Chip" size="small" icon={LeadingIcon} onChipClicked={action('chip clicked')} />
  </div>
```

Rendered markup:
```html
<div style="display: flex; gap: 16px;"><div id="sol-chip-1" role="button" aria-label="Medium Chip" class="sol-chip medium readonly" tabindex="0"><div class="chip-inner-content medium readonly"><span class="icon"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 0H1.32C0.6 0 0 0.6 0 1.32V10.68C0 11.4 0.6 12 1.32 12H10.68C11.4 12 12 11.4 12 10.68V1.32C12 0.6 11.4 0 10.68 0V0ZM10.8 10.8H1.2V1.2H10.8V10.8ZM9 10.2C9.3 10.2 9.6 9.9 9.6 9.54V4.98C9.6 4.62 9.36 4.32 9 4.32C8.64 4.32 8.4 4.62 8.4 4.98V9.54C8.4 9.9 8.7 10.2 9 10.2ZM9 3.72C9.36 3.72 9.6 3.42 9.6 3.06C9.6 2.7 9.36 2.4 9 2.4C8.64 2.4 8.4 2.7 8.4 3.06C8.4 3.42 8.64 3.72 9 3.72ZM6 10.2C6.3 10.2 6.6 9.9 6.6 9.6V5.4C6.6 5.1 6.36 4.8 6 4.8C5.7 4.8 5.4 5.1 5.4 5.4V9.6C5.4 9.9 5.7 10.2 6 10.2ZM6 4.2C6.36 4.2 6.6 3.96 6.6 3.6C6.6 3.24 6.36 3 6 3C5.64 3 5.4 3.24 5.4 3.6C5.4 3.96 5.64 4.2 6 4.2ZM3 10.2C3.3 10.2 3.6 9.96 3.6 9.72V6.48C3.6 6.18 3.36 6 3 6C2.64 6 2.4 6.18 2.4 6.48V9.72C2.4 9.96 2.7 10.2 3 10.2ZM3 5.4C3.36 5.4 3.6 5.16 3.6 4.8C3.6 4.44 3.36 4.2 3 4.2C2.64 4.2 2.4 4.44 2.4 4.8C2.4 5.16 2.64 5.4 3 5.4Z" fill="#767676"></path></svg></span></span></span><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Medium Chip</span></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true"></span><div id="sol-chip-2" role="button" aria-label="Small Chip" class="sol-chip small readonly" tabindex="0"><div class="chip-inner-content small readonly"><span class="icon"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 0H1.32C0.6 0 0 0.6 0 1.32V10.68C0 11.4 0.6 12 1.32 12H10.68C11.4 12 12 11.4 12 10.68V1.32C12 0.6 11.4 0 10.68 0V0ZM10.8 10.8H1.2V1.2H10.8V10.8ZM9 10.2C9.3 10.2 9.6 9.9 9.6 9.54V4.98C9.6 4.62 9.36 4.32 9 4.32C8.64 4.32 8.4 4.62 8.4 4.98V9.54C8.4 9.9 8.7 10.2 9 10.2ZM9 3.72C9.36 3.72 9.6 3.42 9.6 3.06C9.6 2.7 9.36 2.4 9 2.4C8.64 2.4 8.4 2.7 8.4 3.06C8.4 3.42 8.64 3.72 9 3.72ZM6 10.2C6.3 10.2 6.6 9.9 6.6 9.6V5.4C6.6 5.1 6.36 4.8 6 4.8C5.7 4.8 5.4 5.1 5.4 5.4V9.6C5.4 9.9 5.7 10.2 6 10.2ZM6 4.2C6.36 4.2 6.6 3.96 6.6 3.6C6.6 3.24 6.36 3 6 3C5.64 3 5.4 3.24 5.4 3.6C5.4 3.96 5.64 4.2 6 4.2ZM3 10.2C3.3 10.2 3.6 9.96 3.6 9.72V6.48C3.6 6.18 3.36 6 3 6C2.64 6 2.4 6.18 2.4 6.48V9.72C2.4 9.96 2.7 10.2 3 10.2ZM3 5.4C3.36 5.4 3.6 5.16 3.6 4.8C3.6 4.44 3.36 4.2 3 4.2C2.64 4.2 2.4 4.44 2.4 4.8C2.4 5.16 2.64 5.4 3 5.4Z" fill="#767676"></path></svg></span></span></span><span class="main-label chip-text-content" tabindex="-1" data-base-ui-tooltip-trigger="">Small Chip</span></div></div><span class="sol-screenreader-only chip-error-announcement" aria-live="assertive" aria-atomic="true"></span></div>
```
