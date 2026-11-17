# Switch (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/Switch.css`, `css/Tooltip.css`.
Component classes: `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-host`, `sol-label`, `sol-label-asterisk`, `sol-label-content`, `sol-label-text`, `sol-readonly`, `sol-screenreader-only`, `sol-switch`, `sol-switch-wrapper`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / All States

Usage:
```tsx
{
  render: () => <AllStatesWithState />
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">All Switch Toggle Checkbox States</h1></header><main><h2 class="heading">Large</h2><p class="common-text">Without Icon</p><div style="display: flex; gap: 20px; flex-wrap: wrap;"><div class="sol-switch-wrapper"><div id="sol-switch-1" class="sol-switch large"><span id="sol-switch-1-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-checked="" tabindex="0" id="sol-switch-1-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-1-button-label" aria-describedby="sol-switch-1-interaction-hint"><span data-checked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-1-button"><span class="sol-label-content"><span id="sol-switch-1-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-2" class="sol-switch large"><span id="sol-switch-2-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-2-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-2-button-label" aria-describedby="sol-switch-2-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-2-button"><span class="sol-label-content"><span id="sol-switch-2-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-3" class="sol-switch large"><button type="button" data-disabled="" data-checked="" tabindex="0" disabled="" id="sol-switch-3-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-3-button-label" aria-disabled="true"><span data-disabled="" data-checked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-3-button"><span class="sol-label-content"><span id="sol-switch-3-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-4" class="sol-switch large"><button type="button" data-disabled="" data-unchecked="" tabindex="0" disabled="" id="sol-switch-4-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-4-button-label" aria-disabled="true"><span data-disabled="" data-unchecked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-4-button"><span class="sol-label-content"><span id="sol-switch-4-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-5" class="sol-switch large"><span id="sol-switch-5-readonly-hint" class="sol-screenreader-only">Read-only</span><button type="button" data-checked="" data-readonly="" tabindex="0" id="sol-switch-5-button" role="switch" aria-checked="true" aria-readonly="true" aria-labelledby="sol-switch-5-button-label" aria-describedby="sol-switch-5-readonly-hint" class="sol-readonly"><span data-checked="" data-readonly=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label readonly" for="sol-switch-5-button"><span class="sol-label-content"><span id="sol-switch-5-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-6" class="sol-switch large"><span id="sol-switch-6-readonly-hint" class="sol-screenreader-only">Read-only</span><button type="button" data-unchecked="" data-readonly="" tabindex="0" id="sol-switch-6-button" role="switch" aria-checked="false" aria-readonly="true" aria-labelledby="sol-switch-6-button-label" aria-describedby="sol-switch-6-readonly-hint" class="sol-readonly"><span data-unchecked="" data-readonly=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label readonly" for="sol-switch-6-button"><span class="sol-label-content"><span id="sol-switch-6-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div></div><p class="common-text">With Icon</p><div style="display: flex; gap: 20px; flex-wrap: wrap;"><div class="sol-switch-wrapper"><div id="sol-switch-7" class="sol-switch large icon"><span id="sol-switch-7-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-checked="" tabindex="0" id="sol-switch-7-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-7-button-label" aria-describedby="sol-switch-7-interaction-hint"><span data-checked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-7-button"><span class="sol-label-content"><span id="sol-switch-7-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-8" class="sol-switch large icon"><span id="sol-switch-8-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-8-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-8-button-label" aria-describedby="sol-switch-8-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-8-button"><span class="sol-label-content"><span id="sol-switch-8-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-9" class="sol-switch large icon"><button type="button" data-disabled="" data-checked="" tabindex="0" disabled="" id="sol-switch-9-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-9-button-label" aria-disabled="true"><span data-disabled="" data-checked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-9-button"><span class="sol-label-content"><span id="sol-switch-9-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-10" class="sol-switch large icon"><button type="button" data-disabled="" data-unchecked="" tabindex="0" disabled="" id="sol-switch-10-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-10-button-label" aria-disabled="true"><span data-disabled="" data-unchecked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-10-button"><span class="sol-label-content"><span id="sol-switch-10-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-11" class="sol-switch large icon"><span id="sol-switch-11-readonly-hint" class="sol-screenreader-only">Read-only</span><button type="button" data-checked="" data-readonly="" tabindex="0" id="sol-switch-11-button" role="switch" aria-checked="true" aria-readonly="true" aria-labelledby="sol-switch-11-button-label" aria-describedby="sol-switch-11-readonly-hint" class="sol-readonly"><span data-checked="" data-readonly=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label readonly" for="sol-switch-11-button"><span class="sol-label-content"><span id="sol-switch-11-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-12" class="sol-switch large icon"><span id="sol-switch-12-readonly-hint" class="sol-screenreader-only">Read-only</span><button type="button" data-unchecked="" data-readonly="" tabindex="0" id="sol-switch-12-button" role="switch" aria-checked="false" aria-readonly="true" aria-labelledby="sol-switch-12-button-label" aria-describedby="sol-switch-12-readonly-hint" class="sol-readonly"><span data-unchecked="" data-readonly=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label readonly" for="sol-switch-12-button"><span class="sol-label-content"><span id="sol-switch-12-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div></div><h2 class="heading">Small</h2><p class="common-text">Without Icon</p><div style="display: flex; gap: 20px; flex-wrap: wrap;"><div class="sol-switch-wrapper"><div id="sol-switch-13" class="sol-switch small"><span id="sol-switch-13-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-checked="" tabindex="0" id="sol-switch-13-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-13-button-label" aria-describedby="sol-switch-13-interaction-hint"><span data-checked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-13-button"><span class="sol-label-content"><span id="sol-switch-13-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-14" class="sol-switch small"><span id="sol-switch-14-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-14-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-14-button-label" aria-describedby="sol-switch-14-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-14-button"><span class="sol-label-content"><span id="sol-switch-14-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-15" class="sol-switch small"><button type="button" data-disabled="" data-checked="" tabindex="0" disabled="" id="sol-switch-15-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-15-button-label" aria-disabled="true"><span data-disabled="" data-checked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-15-button"><span class="sol-label-content"><span id="sol-switch-15-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-16" class="sol-switch small"><button type="button" data-disabled="" data-unchecked="" tabindex="0" disabled="" id="sol-switch-16-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-16-button-label" aria-disabled="true"><span data-disabled="" data-unchecked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-16-button"><span class="sol-label-content"><span id="sol-switch-16-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-17" class="sol-switch small"><span id="sol-switch-17-readonly-hint" class="sol-screenreader-only">Read-only</span><button type="button" data-checked="" data-readonly="" tabindex="0" id="sol-switch-17-button" role="switch" aria-checked="true" aria-readonly="true" aria-labelledby="sol-switch-17-button-label" aria-describedby="sol-switch-17-readonly-hint" class="sol-readonly"><span data-checked="" data-readonly=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label readonly" for="sol-switch-17-button"><span class="sol-label-content"><span id="sol-switch-17-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-18" class="sol-switch small"><span id="sol-switch-18-readonly-hint" class="sol-screenreader-only">Read-only</span><button type="button" data-unchecked="" data-readonly="" tabindex="0" id="sol-switch-18-button" role="switch" aria-checked="false" aria-readonly="true" aria-labelledby="sol-switch-18-button-label" aria-describedby="sol-switch-18-readonly-hint" class="sol-readonly"><span data-unchecked="" data-readonly=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label readonly" for="sol-switch-18-button"><span class="sol-label-content"><span id="sol-switch-18-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div></div><p class="common-text">With Icon</p><div style="display: flex; gap: 20px; flex-wrap: wrap;"><div class="sol-switch-wrapper"><div id="sol-switch-19" class="sol-switch small icon"><span id="sol-switch-19-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-checked="" tabindex="0" id="sol-switch-19-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-19-button-label" aria-describedby="sol-switch-19-interaction-hint"><span data-checked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-19-button"><span class="sol-label-content"><span id="sol-switch-19-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-20" class="sol-switch small icon"><span id="sol-switch-20-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-20-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-20-button-label" aria-describedby="sol-switch-20-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-20-button"><span class="sol-label-content"><span id="sol-switch-20-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-21" class="sol-switch small icon"><button type="button" data-disabled="" data-checked="" tabindex="0" disabled="" id="sol-switch-21-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-21-button-label" aria-disabled="true"><span data-disabled="" data-checked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-21-button"><span class="sol-label-content"><span id="sol-switch-21-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-22" class="sol-switch small icon"><button type="button" data-disabled="" data-unchecked="" tabindex="0" disabled="" id="sol-switch-22-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-22-button-label" aria-disabled="true"><span data-disabled="" data-unchecked=""></span></button><input disabled="" tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label disabled" for="sol-switch-22-button"><span class="sol-label-content"><span id="sol-switch-22-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Label</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-23" class="sol-switch small icon"><span id="sol-switch-23-re
```

## Examples / Ng Model

Usage:
```tsx
{
  args: {
    name: 'hello',
    symbol: true,
    size: 'large',
    disabled: false,
    required: true,
    label: 'Slide Title'
  },
  render: args => <NgModelStoryRenderer {...args as NgModelArgs} />
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Switch Toggle Checkbox NgModel</h1></header><main><form><div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch large icon"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><span id="sol-switch-_r_0_-required-hint" class="sol-screenreader-only">Required</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint sol-switch-_r_0_-required-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" name="hello" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><label class="sol-label required" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Slide Title</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div></div><br><br><button type="submit" disabled="">Submit</button><p class="common-text">Value : <strong>false</strong></p><p class="common-text">Form Valid : <strong>false</strong></p></form></main>
```

## Examples / Reactive Form

Usage:
```tsx
{
  render: () => <ReactiveFormStoryRenderer />
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Switch Reactive Form</h1></header><main><form><div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch large"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Switch in a reactive form</span></span></label></div></div></form><br><button type="button">Toggle disabled state</button><button type="submit" disabled="">submit</button><p class="common-text">Form Group Value : <strong>{"slideToggle":false}</strong></p></main>
```

## Examples / Required With Error

Usage:
```tsx
{
  args: {
    name: 'requiredSwitch',
    symbol: true,
    size: 'large',
    disabled: false,
    required: true,
    label: 'Accept Terms',
    errorMessage: 'You must accept the terms'
  },
  render: args => <RequiredWithErrorStoryRenderer {...args as RequiredWithErrorArgs} />
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Switch Required with Error</h1></header><main><form><div class="sol-switch-wrapper has-message"><div id="sol-switch-_r_0_" class="sol-switch large icon"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><span id="sol-switch-_r_0_-required-hint" class="sol-screenreader-only">Required</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-invalid="true" aria-describedby="sol-switch-_r_0_-interaction-hint sol-switch-_r_0_-required-hint error-_r_0_"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" name="requiredSwitch" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><label class="sol-label required" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Accept Terms</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-error-message-container body-sm" id="error-_r_0_" role="alert" aria-live="assertive"><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">You must accept the terms</span></div></div><br><br><button type="submit" disabled="">Submit</button><p class="common-text">Value : <strong>false</strong></p><p class="common-text">Form Valid : <strong>false</strong></p></form></main>
```

## Examples / Switch

Usage:
```tsx
{
  name: 'Switch',
  argTypes: {
    name: {
      control: 'text'
    },
    label: {
      control: 'text'
    },
    toggleId: {
      control: 'text'
    },
    checked: {
      control: 'boolean'
    },
    symbol: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    readonly: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    errorMessage: {
      control: 'text'
    },
    infoMessage: {
      control: 'text'
    },
    supportErrorMessage: {
      control: 'boolean'
    },
    labelHelpText: {
      control: 'text'
    },
    ariaLabel: {
      control: 'text',
      type: 'string'
    },
    ariaLabelledby: {
      control: 'text'
    },
    ariaDescribedby: {
      control: 'text',
      type: 'string'
    },
    interactionHint: {
      control: 'text',
      description: 'SR interaction hint; empty string suppresses it'
    }
  },
  args: {
    name: 'hello',
    label: 'Switch Toggle Title',
    labelHelpText: '',
    checked: false,
    symbol: true,
    size: 'large',
    disabled: false,
    readonly: false,
    required: false,
    ariaLabel: 'my Label',
    toggleId: 'toggleId',
    errorMessage: '',
    infoMessage: ''
  },
  render: args => <SwitchWithState {...args} />
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Switch Demo</h1></header><main><div class="sol-switch-wrapper"><div id="toggleId" class="sol-switch large icon"><span id="toggleId-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="toggleId-button" role="switch" aria-checked="false" aria-labelledby="toggleId-button-label" aria-describedby="toggleId-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" name="hello" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><label class="sol-label" for="toggleId-button"><span class="sol-label-content"><span id="toggleId-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Switch Toggle Title</span></span></label></div></div></main>
```

## Examples / Template Form

Usage:
```tsx
{
  args: {
    name: 'hello',
    symbol: false,
    size: 'large',
    disabled: false,
    required: true,
    label: 'Slide Title'
  },
  render: args => <TemplateFormStoryRenderer {...args as TemplateFormArgs} />
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Switch Toggle Checkbox Template Form</h1></header><main><form><div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch large"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><span id="sol-switch-_r_0_-required-hint" class="sol-screenreader-only">Required</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint sol-switch-_r_0_-required-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" name="hello" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><label class="sol-label required" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Slide Title</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div></div><br><br><button type="submit" disabled="">submit</button></form></main>
```

## OverviewExamples / Large

Usage:
```tsx
{
  render: () => <LargeSwitch />
}
```

Rendered markup:
```html
<div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch large icon"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Large Switch</span></span></label></div></div>
```

## OverviewExamples / Small

Usage:
```tsx
{
  render: () => <SmallSwitch />
}
```

Rendered markup:
```html
<div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch small icon"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Small Switch</span></span></label></div></div>
```

## OverviewExamples / With Symbol

Usage:
```tsx
{
  render: () => <WithSymbolSwitches />
}
```

Rendered markup:
```html
<div style="display: flex; gap: 20px; align-items: center;"><div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch large icon"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Unchecked</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-_r_7_" class="sol-switch large icon"><span id="sol-switch-_r_7_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-checked="" tabindex="0" id="sol-switch-_r_7_-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-_r_7_-button-label" aria-describedby="sol-switch-_r_7_-interaction-hint"><span data-checked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_7_-button"><span class="sol-label-content"><span id="sol-switch-_r_7_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Checked</span></span></label></div></div></div>
```

## OverviewExamples / Without Symbol

Usage:
```tsx
{
  render: () => <WithoutSymbolSwitches />
}
```

Rendered markup:
```html
<div style="display: flex; gap: 20px; align-items: center;"><div class="sol-switch-wrapper"><div id="sol-switch-_r_0_" class="sol-switch large"><span id="sol-switch-_r_0_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_0_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_0_-button-label" aria-describedby="sol-switch-_r_0_-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_0_-button"><span class="sol-label-content"><span id="sol-switch-_r_0_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Unchecked</span></span></label></div></div><div class="sol-switch-wrapper"><div id="sol-switch-_r_7_" class="sol-switch large"><span id="sol-switch-_r_7_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-checked="" tabindex="0" id="sol-switch-_r_7_-button" role="switch" aria-checked="true" aria-labelledby="sol-switch-_r_7_-button-label" aria-describedby="sol-switch-_r_7_-interaction-hint"><span data-checked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" checked="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_7_-button"><span class="sol-label-content"><span id="sol-switch-_r_7_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Checked</span></span></label></div></div></div>
```
