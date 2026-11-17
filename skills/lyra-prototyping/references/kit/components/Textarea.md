# Textarea (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/TextArea.css`, `css/TextCounter.css`, `css/Tooltip.css`.
Component classes: `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-input`, `sol-input-container`, `sol-input-label-area`, `sol-input-wrapper`, `sol-label`, `sol-label-container`, `sol-label-content`, `sol-label-help`, `sol-label-text`, `sol-screenreader-only`, `sol-text-area`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / With Error Message

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<TextAreaProps>();
  return <TextareaDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Text Area</h1><div style="max-width: 310px;"><div class="sol-text-area sol-input-wrapper"><div class="sol-input-label-area"><div class="sol-label-container"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Label" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div></div><div class="sol-input-container error-border"><textarea class="sol-input body-md font-size-small hide-scroll" id="_r_0_" placeholder="Enter text here" rows="1" cols="30" autocomplete="off" wrap="on" aria-label="Label" aria-invalid="true" aria-describedby="error-_r_1_" style="min-height: 60px; height: 60px;"></textarea></div><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Label: </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">This is CUSTOM error message</span></div><span class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></span></div></div></main>
```

## Examples / With Value

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<TextAreaProps>();
  return <TextareaDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Text Area</h1><div style="max-width: 310px;"><div class="sol-text-area sol-input-wrapper"><div class="sol-input-label-area"><div class="sol-label-container"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Label" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div></div><div class="sol-input-container"><textarea class="sol-input body-md font-size-small hide-scroll" id="_r_0_" placeholder="Enter text here" rows="1" cols="30" autocomplete="off" wrap="on" aria-label="Label" style="min-height: 60px; height: 60px;"></textarea></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div><span class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></span></div></div></main>
```
