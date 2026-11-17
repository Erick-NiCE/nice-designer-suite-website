# Checkbox (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Checkbox.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/Tooltip.css`.
Component classes: `sol-checkbox`, `sol-checkbox-inputbox`, `sol-checkbox-label`, `sol-checkbox-label-text`, `sol-checkbox-wrapper`, `sol-error-message-container`, `sol-label-asterisk`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Checkbox

Usage:
```tsx
{
  argTypes: {
    name: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    tabIndex: {
      control: 'number'
    },
    label: {
      control: 'text'
    },
    errorState: {
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
    ariaDescribedby: {
      control: 'text',
      description: 'Sets aria-describedby on the checkbox; the story heading has id "checkbox-heading"'
    }
  },
  args: {
    checkboxId: '',
    name: '',
    value: '',
    tabIndex: 0,
    label: 'Checkbox',
    checked: false,
    indeterminate: false,
    required: false,
    readonly: false,
    disabled: false,
    ariaLabel: '',
    ariaLabelledby: undefined,
    ariaDescribedby: '',
    errorState: false,
    errorMessage: '',
    infoMessage: ''
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<CheckboxProps>();
    return <main>
        <h1 id="checkbox-heading" className="sol-screenreader-only">
          Checkbox
        </h1>
        <SOLCheckbox {...args} onCheckedChange={event => {
        updateArgs({
          checked: event.checked,
          indeterminate: event.indeterminate
        });
        action('checked')(event);
      }} onIndeterminateChange={event => {
        updateArgs({
          indeterminate: event.indeterminate
        });
        action('indeterminate')(event);
      }} onClicked={() => action('clicked')()} onFocus={event => action('focus')(event)} onBlur={event => action('blur')(event)} />
      </main>;
  }
}
```

Rendered markup:
```html
<main><h1 id="checkbox-heading" class="sol-screenreader-only">Checkbox</h1><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">Checkbox</label></div></div></div></div></main>
```

## Examples / Checkbox With Reactive Form

Usage:
```tsx
() => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const toggleDisable = () => {
    setDisabled(prev => !prev);
  };
  return <main>
      <h1 className="sol-screenreader-only">Checkbox with reactive form</h1>
      <form>
        <SOLCheckbox checked={checked} disabled={disabled} onCheckedChange={event => {
        action('checked')(event);
        setChecked(event.checked);
      }} onIndeterminateChange={event => action('indeterminate')(event)}>
          Checkbox in a reactive form
        </SOLCheckbox>
      </form>
      <button type="button" onClick={toggleDisable} style={{
      margin: '16px 0'
    }}>
        Toggle disabled state
      </button>
      <p className="common-text">
        Variable in app.component : <strong>{String(checked)}</strong>
      </p>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Checkbox with reactive form</h1><form><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">Checkbox in a reactive form</label></div></div></div></div></form><button type="button" style="margin: 16px 0px;">Toggle disabled state</button><p class="common-text">Variable in app.component : <strong>false</strong></p></main>
```

## OverviewExamples / Checked Checkbox

Usage:
```tsx
{
  render: () => <CheckedCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label" checked=""><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label</label></div></div></div></div>
```

## OverviewExamples / Custom Content Checkbox

Usage:
```tsx
{
  render: () => <CustomContentCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_"><span style="font-weight: bold; color: rgb(51, 51, 51);">Custom template content</span></label></div></div></div></div>
```

## OverviewExamples / Default Checkbox

Usage:
```tsx
{
  render: () => <DefaultCheckbox />,
  name: 'Default Checkbox'
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox"></div></div></div>
```

## OverviewExamples / Disabled Label Checkbox

Usage:
```tsx
{
  render: () => <DisabledLabelCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" disabled="" aria-disabled="true" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label</label></div></div></div></div>
```

## OverviewExamples / Indeterminate Checkbox

Usage:
```tsx
{
  render: () => <IndeterminateCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-checked="mixed" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label" checked=""><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label</label></div></div></div></div>
```

## OverviewExamples / Label Checkbox

Usage:
```tsx
{
  render: () => <LabelCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label</label></div></div></div></div>
```

## OverviewExamples / Ng Content Checkbox

Usage:
```tsx
{
  render: () => <NgContentCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label content</label></div></div></div></div>
```

## OverviewExamples / Readonly Label Checkbox

Usage:
```tsx
{
  render: () => <ReadonlyLabelCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-readonly="true" aria-invalid="false" class="sol-checkbox-inputbox readonly" tabindex="0" type="checkbox" value="label"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label</label></div></div></div></div>
```

## OverviewExamples / Required Checkbox

Usage:
```tsx
{
  render: () => <RequiredCheckbox />
}
```

Rendered markup:
```html
<div class="sol-checkbox-wrapper has-message"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_1_" aria-describedby="required-_r_1_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="label"><span id="required-_r_1_" class="sol-screenreader-only">Required</span><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_1_">label</label><span class="sol-label-asterisk">*</span></div></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div>
```
