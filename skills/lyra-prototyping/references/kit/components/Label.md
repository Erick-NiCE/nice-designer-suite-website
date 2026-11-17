# Label (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Icon.css`, `css/Label.css`, `css/Tooltip.css`.
Component classes: `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-label`, `sol-label-asterisk`, `sol-label-container`, `sol-label-content`, `sol-label-help`, `sol-label-text`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Default

Usage:
```tsx
args => <div style={{
  maxWidth: '600px',
  width: '100%'
}}>
    <main>
      <h1 className="sol-screenreader-only">Label</h1>
      <div>
        <SOLLabel label={args.label} labelHelpText={args.labelHelpText} labelFor={args.labelFor} labelId={args.labelId} required={args.required} disabled={args.disabled} readonly={args.readonly} />
        {args.labelFor && <input id={args.labelFor} type="text" required={args.required} />}
      </div>
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Label</h1><div><div class="sol-label-container"><label class="sol-label required"><span class="sol-label-content"><span class="sol-label-text" data-base-ui-tooltip-trigger="">Default Label</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Default Label" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div></div></main></div>
```

## OverviewExamples / Basic Label

Usage:
```tsx
story(<SOLLabel label="Basic Label" />)
```

Rendered markup:
```html
<label class="sol-label"><span class="sol-label-content"><span class="sol-label-text" data-base-ui-tooltip-trigger="">Basic Label</span></span></label>
```

## OverviewExamples / Disabled Label

Usage:
```tsx
story(<SOLLabel label="Disabled Label" disabled />)
```

Rendered markup:
```html
<label class="sol-label disabled"><span class="sol-label-content"><span class="sol-label-text" data-base-ui-tooltip-trigger="">Disabled Label</span></span></label>
```

## OverviewExamples / Label With Help Text

Usage:
```tsx
story(<SOLLabel label="Label with Help" labelHelpText="This is helpful information about this field" />)
```

Rendered markup:
```html
<div class="sol-label-container"><label class="sol-label"><span class="sol-label-content"><span class="sol-label-text" data-base-ui-tooltip-trigger="">Label with Help</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Label with Help" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div>
```

## OverviewExamples / Readonly Label

Usage:
```tsx
story(<SOLLabel label="Readonly Label" readonly required />)
```

Rendered markup:
```html
<label class="sol-label required readonly"><span class="sol-label-content"><span class="sol-label-text" data-base-ui-tooltip-trigger="">Readonly Label</span></span></label>
```

## OverviewExamples / Required Label

Usage:
```tsx
story(<SOLLabel label="Required Label" required />)
```

Rendered markup:
```html
<label class="sol-label required"><span class="sol-label-content"><span class="sol-label-text" data-base-ui-tooltip-trigger="">Required Label</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label>
```
