# Checkbox Group (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Checkbox.css`, `css/CheckboxGroup.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/Tooltip.css`.
Component classes: `sol-checkbox`, `sol-checkbox-group`, `sol-checkbox-inputbox`, `sol-checkbox-label`, `sol-checkbox-label-text`, `sol-checkbox-wrapper`, `sol-error-message-container`, `sol-input-wrapper`, `sol-label`, `sol-label-asterisk`, `sol-label-content`, `sol-label-text`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Checkbox Group With Options

Usage:
```tsx
{
  argTypes: {
    name: {
      control: 'text'
    },
    optionLabel: {
      control: 'text'
    },
    readonly: {
      control: 'boolean'
    },
    labelHelpText: {
      control: 'text'
    },
    infoMessage: {
      control: 'text'
    },
    errorMessage: {
      control: 'text'
    },
    supportErrorMessage: {
      control: 'boolean'
    }
  },
  args: {
    name: 'preferences',
    disabled: false,
    required: true,
    readonly: false,
    supportErrorMessage: true,
    errorMessage: '',
    infoMessage: '',
    labelHelpText: '',
    label: 'Select options',
    optionLabel: 'Option 1'
  },
  render: args => {
    return <main>
        <h1 className="sol-screenreader-only">Checkbox Group Demo</h1>
        <SOLCheckboxGroup name={args.name} disabled={args.disabled} required={args.required} readonly={args.readonly} supportErrorMessage={args.supportErrorMessage} errorMessage={args.errorMessage} infoMessage={args.infoMessage} labelHelpText={args.labelHelpText} label={args.label} onClicked={value => action('click event triggered')(value)}>
          <SOLCheckbox value="option1">{args.optionLabel}</SOLCheckbox>
          <SOLCheckbox value="option2">Option 2</SOLCheckbox>
          <SOLCheckbox value="option3">Option 3</SOLCheckbox>
        </SOLCheckboxGroup>
      </main>;
  }
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Checkbox Group Demo</h1><div role="group" aria-label="Select options, Required" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Select options</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1" name="preferences"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2" name="preferences"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3" name="preferences"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div><div class="sol-error-message-container body-sm" id="error-_r_0_"></div></div></div></main>
```

## Examples / Checkbox Group With Selected

Usage:
```tsx
args => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['option2', 'option3']);
  return <main>
      <h1 className="sol-screenreader-only">Checkbox Group with Pre-selected Options</h1>
      <SOLCheckboxGroup value={selectedOptions} required={args.required} disabled={args.disabled} readonly={args.readonly} supportErrorMessage={args.supportErrorMessage} errorMessage={args.errorMessage} name="options" label={args.label} onClicked={value => {
      action('click event triggered')(value);
      setSelectedOptions(value);
    }}>
        <SOLCheckbox value="option1">Marketing Emails</SOLCheckbox>
        <SOLCheckbox value="option2">Product Updates</SOLCheckbox>
        <SOLCheckbox value="option3">Security Alerts</SOLCheckbox>
        <SOLCheckbox value="option4">Weekly Newsletter</SOLCheckbox>
      </SOLCheckboxGroup>
      <div style={{
      marginTop: '1rem',
      padding: '1rem',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>
        <p>
          <strong>Selected Values:</strong> {JSON.stringify(selectedOptions)}
        </p>
        <p>
          <strong>Form Valid:</strong> {String(selectedOptions.length > 0)}
        </p>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Checkbox Group with Pre-selected Options</h1><div role="group" aria-label="Email Preferences (Some Pre-selected), Required" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Email Preferences (Some Pre-selected)</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Marketing Emails</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2" checked="" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Product Updates</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3" checked="" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Security Alerts</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_b_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option4" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_b_">Weekly Newsletter</label></div></div></div></div></div><div><div class="sol-error-message-container body-sm" id="error-_r_0_"></div></div></div><div style="margin-top: 1rem; padding: 1rem; background: rgb(245, 245, 245); border-radius: 4px;"><p><strong>Selected Values:</strong> ["option2","option3"]</p><p><strong>Form Valid:</strong> true</p></div></main>
```

## Examples / Reactive Forms

Usage:
```tsx
() => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['email', 'push']);
  return <main>
      <h1 className="sol-screenreader-only">Checkbox Group in reactive forms</h1>
      <form>
        <SOLCheckboxGroup name="preferences" label="Choose your preferences" value={selectedOptions} onClicked={value => {
        action('click event triggered')(value);
        setSelectedOptions(value);
      }}>
          <SOLCheckbox value="email">Email notifications</SOLCheckbox>
          <SOLCheckbox value="sms">SMS notifications</SOLCheckbox>
          <SOLCheckbox value="push">Push notifications</SOLCheckbox>
        </SOLCheckboxGroup>
      </form>
      <br />
      <p className="common-text">Selected options: {JSON.stringify(selectedOptions)}</p>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Checkbox Group in reactive forms</h1><form><div role="group" aria-label="Choose your preferences" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose your preferences</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="email" checked="" name="preferences"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Email notifications</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="sms" name="preferences"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">SMS notifications</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="push" checked="" name="preferences"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Push notifications</label></div></div></div></div></div><div></div></div></form><br><p class="common-text">Selected options: ["email","push"]</p></main>
```

## Examples / Template Form With Options

Usage:
```tsx
args => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['option2']);
  const isFormValid = selectedOptions.length > 0;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    action('form submitted')({
      valid: isFormValid,
      selectedOptions
    });
  };
  return <main>
      <h1 className="sol-screenreader-only">Checkbox Group with validation</h1>
      <form onSubmit={handleSubmit}>
        <SOLCheckboxGroup value={selectedOptions} required={args.required} disabled={args.disabled} readonly={args.readonly} supportErrorMessage={args.supportErrorMessage} errorMessage={args.errorMessage} name="options" label={args.label || 'Select at least one option (required)'} onClicked={value => {
        action('click event triggered')(value);
        setSelectedOptions(value);
      }}>
          <SOLCheckbox value="option1">Option 1</SOLCheckbox>
          <SOLCheckbox value="option2">Option 2</SOLCheckbox>
          <SOLCheckbox value="option3">Option 3</SOLCheckbox>
        </SOLCheckboxGroup>
        <br />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
        <br />
        <br />
        <div className="common-text">
          Form valid: {String(isFormValid)}
          <br />
          Selected options: {JSON.stringify(selectedOptions)}
        </div>
      </form>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Checkbox Group with validation</h1><form><div role="group" aria-label="Select at least one option (required), Required" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Select at least one option (required)</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2" checked="" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3" name="options"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div><div class="sol-error-message-container body-sm" id="error-_r_0_"></div></div></div><br><button type="submit">Submit</button><br><br><div class="common-text">Form valid: true<br>Selected options: ["option2"]</div></form></main>
```

## OverviewExamples / Group Checkbox

Usage:
```tsx
{
  render: () => <SOLCheckboxGroup label="Checkbox group">
      <SOLCheckbox value="option1">Option 1</SOLCheckbox>
      <SOLCheckbox value="option2">Option 2</SOLCheckbox>
      <SOLCheckbox value="option3">Option 3</SOLCheckbox>
    </SOLCheckboxGroup>
}
```

Rendered markup:
```html
<div role="group" aria-label="Checkbox group" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Checkbox group</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div></div></div>
```

## OverviewExamples / Group Disabled Checkbox

Usage:
```tsx
{
  render: () => <SOLCheckboxGroup label="Checkbox group" disabled={true} value={['option1']}>
      <SOLCheckbox value="option1">Option 1</SOLCheckbox>
      <SOLCheckbox value="option2">Option 2</SOLCheckbox>
      <SOLCheckbox value="option3">Option 3</SOLCheckbox>
    </SOLCheckboxGroup>
}
```

Rendered markup:
```html
<div role="group" aria-label="Checkbox group" aria-disabled="true" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label disabled"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Checkbox group</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" disabled="" aria-disabled="true" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1" checked=""><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" disabled="" aria-disabled="true" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" disabled="" aria-disabled="true" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div></div></div>
```

## OverviewExamples / Group Readonly Checkbox

Usage:
```tsx
{
  render: () => <SOLCheckboxGroup label="Checkbox group" readonly={true} value={['option1']}>
      <SOLCheckbox value="option1">Option 1</SOLCheckbox>
      <SOLCheckbox value="option2">Option 2</SOLCheckbox>
      <SOLCheckbox value="option3">Option 3</SOLCheckbox>
    </SOLCheckboxGroup>
}
```

Rendered markup:
```html
<div role="group" aria-label="Checkbox group" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label readonly"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Checkbox group</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-readonly="true" aria-invalid="false" class="sol-checkbox-inputbox readonly" tabindex="0" type="checkbox" value="option1" checked=""><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-readonly="true" aria-invalid="false" class="sol-checkbox-inputbox readonly" tabindex="0" type="checkbox" value="option2"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-readonly="true" aria-invalid="false" class="sol-checkbox-inputbox readonly" tabindex="0" type="checkbox" value="option3"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div></div></div>
```

## OverviewExamples / Group Required Checkbox

Usage:
```tsx
{
  render: () => <SOLCheckboxGroup label="Checkbox group" required={true} value={['option1']}>
      <SOLCheckbox value="option1">Option 1</SOLCheckbox>
      <SOLCheckbox value="option2">Option 2</SOLCheckbox>
      <SOLCheckbox value="option3">Option 3</SOLCheckbox>
    </SOLCheckboxGroup>
}
```

Rendered markup:
```html
<div role="group" aria-label="Checkbox group, Required" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Checkbox group</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1" checked=""><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div><div class="sol-error-message-container body-sm" id="error-_r_0_"></div></div></div>
```

## OverviewExamples / Group Selected Checkbox

Usage:
```tsx
{
  render: () => <SOLCheckboxGroup label="Checkbox group" value={['option1']}>
      <SOLCheckbox value="option1">Option 1</SOLCheckbox>
      <SOLCheckbox value="option2">Option 2</SOLCheckbox>
      <SOLCheckbox value="option3">Option 3</SOLCheckbox>
    </SOLCheckboxGroup>
}
```

Rendered markup:
```html
<div role="group" aria-label="Checkbox group" class="sol-input-wrapper sol-checkbox-group"><label class="sol-label"><span class="sol-label-content"><span id="label-_r_0_" class="sol-label-text" data-base-ui-tooltip-trigger="">Checkbox group</span></span></label><div class="checkbox-group-options"><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_5_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option1" checked=""><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_5_">Option 1</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_7_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option2"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_7_">Option 2</label></div></div></div></div><div class="sol-checkbox-wrapper"><div class="sol-checkbox"><div class="sol-checkbox-label clickable"><input id="sol-checkbox-_r_9_" aria-invalid="false" class="sol-checkbox-inputbox" tabindex="0" type="checkbox" value="option3"><div class="sol-checkbox-label-text"><label for="sol-checkbox-_r_9_">Option 3</label></div></div></div></div></div><div></div></div>
```
