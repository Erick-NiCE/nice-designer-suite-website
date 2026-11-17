# RadioButtonGroup (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/RadioButton.css`, `css/Tooltip.css`.
Component classes: `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-host`, `sol-input-wrapper`, `sol-label`, `sol-label-asterisk`, `sol-label-content`, `sol-label-text`, `sol-radio-container`, `sol-radio-control`, `sol-radio-group`, `sol-radio-indicator`, `sol-radio-item`, `sol-radio-label`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Basic Radio Button Group

Usage:
```tsx
args => {
  const [selectedValue, setSelectedValue] = useState('');
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <header>
        <h1 className="sol-screenreader-only">Basic Radio Button Group</h1>
      </header>
      <main>
        <SOLRadioGroup inline={args.inline} name={args.name} label={args.label} required={args.required} disabled={args.disabled} readonly={args.readonly} value={selectedValue} onClicked={value => {
        action('Radio button clicked')(value);
        setSelectedValue(value);
      }}>
          <SOLRadioButton value="option1">Option 1</SOLRadioButton>
          <SOLRadioButton value="option2">Option 2</SOLRadioButton>
          <SOLRadioButton value="option3">Option 3</SOLRadioButton>
        </SOLRadioGroup>
        <p className="common-text" style={{
        marginTop: '1rem'
      }}>
          Selected value: {selectedValue}
        </p>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header><h1 class="sol-screenreader-only">Basic Radio Button Group</h1></header><main><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Select your preferred option</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1_" class="sol-radio-group horizontal"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="option1" name="basicGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 1</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="option2" name="basicGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 2</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="option3" name="basicGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 3</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div><p class="common-text" style="margin-top: 1rem;">Selected value: </p></main></div>
```

## Examples / Fully Disabled Group

Usage:
```tsx
() => <div style={{
  maxWidth: '600px',
  width: '100%'
}}>
    <header>
      <h1 className="sol-screenreader-only">Fully Disabled Radio Button Group</h1>
    </header>
    <main>
      <SOLRadioGroup inline={false} name="disabledGroup" label="Disabled Options (Cannot be selected)" disabled={true} onClicked={value => action('Radio button clicked')(value)}>
        <SOLRadioButton value="opt1">Option 1</SOLRadioButton>
        <SOLRadioButton value="opt2">Option 2</SOLRadioButton>
        <SOLRadioButton value="opt3">Option 3</SOLRadioButton>
      </SOLRadioGroup>
      <p className="common-text" style={{
      marginTop: '1rem'
    }}>
        All options are disabled
      </p>
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header><h1 class="sol-screenreader-only">Fully Disabled Radio Button Group</h1></header><main><div class="sol-input-wrapper sol-radio-container"><label class="sol-label disabled"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Disabled Options (Cannot be selected)</span></span></label><div data-disabled="" role="radiogroup" aria-disabled="true" aria-labelledby="label-_r_1_" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-disabled="" data-unchecked="" role="radio" aria-disabled="true" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" disabled="" type="radio" value="opt1" name="disabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 1</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-disabled="" data-unchecked="" role="radio" aria-disabled="true" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" disabled="" type="radio" value="opt2" name="disabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 2</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-disabled="" data-unchecked="" role="radio" aria-disabled="true" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" disabled="" type="radio" value="opt3" name="disabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 3</span></label></div><div class="error-container"></div></div><p class="common-text" style="margin-top: 1rem;">All options are disabled</p></main></div>
```

## Examples / Horizontal Radio Button

Usage:
```tsx
args => {
  const label = 'Choose One';
  return <>
      <header>
        <h1 className="sol-screenreader-only">Radio Button Group Demo</h1>
      </header>
      <main>
        <SOLRadioGroup inline={args.inline} name="content" disabled={args.disabled} readonly={args.readonly} required={true} label={label} supportErrorMessage={true} errorMessage={args.errorMessage} onClicked={value => action('click event triggered')(value)}>
          <SOLRadioButton value="A">Option A</SOLRadioButton>
          <SOLRadioButton value="B">Option B</SOLRadioButton>
          <SOLRadioButton value="C">Option C</SOLRadioButton>
        </SOLRadioGroup>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Radio Button Group Demo</h1></header><main><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose One</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1_" aria-describedby="error-_r_1_" aria-invalid="true" class="sol-radio-group horizontal"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="A" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option A</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="B" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option B</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="C" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option C</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Choose One: </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">Please select an option</span></div></div></div></main>
```

## Examples / Horizontal Responsive

Usage:
```tsx
() => <main>
    <h1 className="sol-screenreader-only">Horizontal Responsive Radio Button</h1>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%'
  }}>
      <section>
        <h2 className="common-text" style={{
        margin: '0 0 1rem 0'
      }}>
          Few Buttons (3 options)
        </h2>
        <div style={{
        border: '1px dashed #ccc',
        padding: '0.5rem'
      }}>
          <SOLRadioGroup inline={true} name="responsive-small" required={true} label="Choose an option" onClicked={value => action('click event triggered')(value)}>
            <SOLRadioButton value="option1">Option 1</SOLRadioButton>
            <SOLRadioButton value="option2">Option 2</SOLRadioButton>
            <SOLRadioButton value="option3">Option 3</SOLRadioButton>
          </SOLRadioGroup>
        </div>
      </section>

      <section>
        <h2 className="common-text" style={{
        margin: '0 0 1rem 0'
      }}>
          Medium Buttons (6 options)
        </h2>
        <div style={{
        border: '1px dashed #ccc',
        padding: '0.5rem'
      }}>
          <SOLRadioGroup inline={true} name="responsive-medium" required={true} label="Choose an option" onClicked={value => action('click event triggered')(value)}>
            <SOLRadioButton value="opt1">First Option</SOLRadioButton>
            <SOLRadioButton value="opt2">Second Option</SOLRadioButton>
            <SOLRadioButton value="opt3">Third Option</SOLRadioButton>
            <SOLRadioButton value="opt4">Fourth Option</SOLRadioButton>
            <SOLRadioButton value="opt5">Fifth Option</SOLRadioButton>
            <SOLRadioButton value="opt6">Sixth Option</SOLRadioButton>
          </SOLRadioGroup>
        </div>
      </section>

      <section>
        <h2 className="common-text" style={{
        margin: '0 0 1rem 0'
      }}>
          Many Buttons (10 options)
        </h2>
        <div style={{
        border: '1px dashed #ccc',
        padding: '0.5rem'
      }}>
          <SOLRadioGroup inline={true} name="responsive-large" required={true} label="Choose an option" onClicked={value => action('click event triggered')(value)}>
            <SOLRadioButton value="1">Option One</SOLRadioButton>
            <SOLRadioButton value="2">Option Two</SOLRadioButton>
            <SOLRadioButton value="3">Option Three</SOLRadioButton>
            <SOLRadioButton value="4">Option Four</SOLRadioButton>
            <SOLRadioButton value="5">Option Five</SOLRadioButton>
            <SOLRadioButton value="6">Option Six</SOLRadioButton>
            <SOLRadioButton value="7">Option Seven</SOLRadioButton>
            <SOLRadioButton value="8">Option Eight</SOLRadioButton>
            <SOLRadioButton value="9">Option Nine</SOLRadioButton>
            <SOLRadioButton value="10">Option Ten</SOLRadioButton>
          </SOLRadioGroup>
        </div>
      </section>
    </div>
  </main>
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Horizontal Responsive Radio Button</h1><div style="display: flex; flex-direction: column; gap: 2rem; width: 100%;"><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Few Buttons (3 options)</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose an option</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1_" class="sol-radio-group horizontal"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="option1" name="responsive-small" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 1</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="option2" name="responsive-small" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 2</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="option3" name="responsive-small" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option 3</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Medium Buttons (6 options)</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_j_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose an option</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_j_" class="sol-radio-group horizontal"><label class="sol-radio-item body-md" id="radio-button-_r_o_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_o_-label"></span><input id="radio-button-_r_o_" tabindex="-1" aria-hidden="true" type="radio" value="opt1" name="responsive-medium" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">First Option</span></label><label class="sol-radio-item body-md" id="radio-button-_r_s_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_s_-label"></span><input id="radio-button-_r_s_" tabindex="-1" aria-hidden="true" type="radio" value="opt2" name="responsive-medium" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Second Option</span></label><label class="sol-radio-item body-md" id="radio-button-_r_10_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_10_-label"></span><input id="radio-button-_r_10_" tabindex="-1" aria-hidden="true" type="radio" value="opt3" name="responsive-medium" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Third Option</span></label><label class="sol-radio-item body-md" id="radio-button-_r_14_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_14_-label"></span><input id="radio-button-_r_14_" tabindex="-1" aria-hidden="true" type="radio" value="opt4" name="responsive-medium" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Fourth Option</span></label><label class="sol-radio-item body-md" id="radio-button-_r_18_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_18_-label"></span><input id="radio-button-_r_18_" tabindex="-1" aria-hidden="true" type="radio" value="opt5" name="responsive-medium" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Fifth Option</span></label><label class="sol-radio-item body-md" id="radio-button-_r_1c_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_1c_-label"></span><input id="radio-button-_r_1c_" tabindex="-1" aria-hidden="true" type="radio" value="opt6" name="responsive-medium" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Sixth Option</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_j_"></div></div></div></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Many Buttons (10 options)</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1h_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose an option</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1h_" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_1m_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_1m_-label"></span><input id="radio-button-_r_1m_" tabindex="-1" aria-hidden="true" type="radio" value="1" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option One</span></label><label class="sol-radio-item body-md" id="radio-button-_r_1q_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_1q_-label"></span><input id="radio-button-_r_1q_" tabindex="-1" aria-hidden="true" type="radio" value="2" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Two</span></label><label class="sol-radio-item body-md" id="radio-button-_r_1u_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_1u_-label"></span><input id="radio-button-_r_1u_" tabindex="-1" aria-hidden="true" type="radio" value="3" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Three</span></label><label class="sol-radio-item body-md" id="radio-button-_r_22_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_22_-label"></span><input id="radio-button-_r_22_" tabindex="-1" aria-hidden="true" type="radio" value="4" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Four</span></label><label class="sol-radio-item body-md" id="radio-button-_r_26_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_26_-label"></span><input id="radio-button-_r_26_" tabindex="-1" aria-hidden="true" type="radio" value="5" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Five</span></label><label class="sol-radio-item body-md" id="radio-button-_r_2a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_2a_-label"></span><input id="radio-button-_r_2a_" tabindex="-1" aria-hidden="true" type="radio" value="6" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Six</span></label><label class="sol-radio-item body-md" id="radio-button-_r_2e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_2e_-label"></span><input id="radio-button-_r_2e_" tabindex="-1" aria-hidden="true" type="radio" value="7" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Seven</span></label><label class="sol-radio-item body-md" id="radio-button-_r_2i_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_2i_-label"></span><input id="radio-button-_r_2i_" tabindex="-1" aria-hidden="true" type="radio" value="8" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Eight</span></label><label class="sol-radio-item body-md" id="radio-button-_r_2m_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_2m_-label"></span><input id="radio-button-_r_2m_" tabindex="-1" aria-hidden="true" type="radio" value="9" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Nine</span></label><label class="sol-radio-item body-md" id="radio-button-_r_2q_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_2q_-label"></span><input id="radio-button-_r_2q_" tabindex="-1" aria-hidden="true" type="radio" value="10" name="responsive-large" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option Ten</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1h_"></div></div></div></div></section></div></main>
```

## Examples / Reactive Forms

Usage:
```tsx
args => {
  const [value, setValue] = useState('Male');
  return <>
      <header>
        <h1 className="sol-screenreader-only">Radio Button Group in reactive forms</h1>
      </header>
      <main>
        <form>
          <SOLRadioGroup value={value} disabled={args.disabled} name="gender" label="Choose gender" onClicked={next => {
          action('click event triggered')(next);
          setValue(next);
        }}>
            <SOLRadioButton value="Male" disabled={false}>
              Male
            </SOLRadioButton>
            <SOLRadioButton value="Female" disabled={false}>
              Female
            </SOLRadioButton>
          </SOLRadioGroup>
        </form>
        <p className="common-text" style={{
        marginTop: '1rem'
      }}>
          Selected Radio button : {value}
        </p>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Radio Button Group in reactive forms</h1></header><main><form><div class="sol-input-wrapper sol-radio-container"><label class="sol-label"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose gender</span></span></label><div role="radiogroup" aria-labelledby="label-_r_1_" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-checked="" role="radio" tabindex="0" aria-checked="true" data-composite-item-active="" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"><span data-checked="" class="sol-radio-indicator"></span></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="Male" checked="" name="gender" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Male</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="Female" name="gender" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Female</span></label></div><div class="error-container"></div></div></form><p class="common-text" style="margin-top: 1rem;">Selected Radio button : Male</p></main>
```

## Examples / Selectively Disabled Items

Usage:
```tsx
() => {
  const [selectedValue, setSelectedValue] = useState('');
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <header>
        <h1 className="sol-screenreader-only">Selectively Disabled Radio Buttons</h1>
      </header>
      <main>
        <SOLRadioGroup inline={false} name="selectivelyDisabledGroup" label="Select an available option" value={selectedValue} onClicked={value => {
        action('Radio button clicked')(value);
        setSelectedValue(value);
      }}>
          <SOLRadioButton value="available1">Available Option 1</SOLRadioButton>
          <SOLRadioButton value="disabled1" disabled={true}>
            Disabled Option
          </SOLRadioButton>
          <SOLRadioButton value="available2">Available Option 2</SOLRadioButton>
          <SOLRadioButton value="disabled2" disabled={true}>
            Another Disabled Option
          </SOLRadioButton>
        </SOLRadioGroup>
        <p className="common-text" style={{
        marginTop: '1rem'
      }}>
          Selected value: {selectedValue}
        </p>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header><h1 class="sol-screenreader-only">Selectively Disabled Radio Buttons</h1></header><main><div class="sol-input-wrapper sol-radio-container"><label class="sol-label"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Select an available option</span></span></label><div role="radiogroup" aria-labelledby="label-_r_1_" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="available1" name="selectivelyDisabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Available Option 1</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-disabled="" data-unchecked="" role="radio" aria-disabled="true" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" disabled="" type="radio" value="disabled1" name="selectivelyDisabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Disabled Option</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="available2" name="selectivelyDisabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Available Option 2</span></label><label class="sol-radio-item body-md" id="radio-button-_r_i_-label"><span data-disabled="" data-unchecked="" role="radio" aria-disabled="true" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_i_-label"></span><input id="radio-button-_r_i_" tabindex="-1" aria-hidden="true" disabled="" type="radio" value="disabled2" name="selectivelyDisabledGroup" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Another Disabled Option</span></label></div><div class="error-container"></div></div><p class="common-text" style="margin-top: 1rem;">Selected value: </p></main></div>
```

## Examples / Template Form

Usage:
```tsx
() => {
  const [pressedButton, setPressedButton] = useState('B');
  const label = 'Choose one';
  return <>
      <header>
        <h1 className="sol-screenreader-only">Radio Button Group in template forms</h1>
      </header>
      <main>
        <form>
          <SOLRadioGroup value={pressedButton} required={true} disabled={false} name="content" label={label} onClicked={value => {
          action('click event triggered')(value);
          setPressedButton(value);
        }}>
            <SOLRadioButton value="A">Option A</SOLRadioButton>
            <SOLRadioButton value="B">Option B</SOLRadioButton>
            <SOLRadioButton value="C">Option C</SOLRadioButton>
          </SOLRadioGroup>
        </form>
        <div className="common-text" style={{
        marginTop: '1rem'
      }}>
          Selected Radio button : {pressedButton}
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Radio Button Group in template forms</h1></header><main><form><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose one</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1_" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="A" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option A</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-checked="" role="radio" tabindex="0" aria-checked="true" data-composite-item-active="" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"><span data-checked="" class="sol-radio-indicator"></span></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="B" checked="" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option B</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="C" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option C</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></form><div class="common-text" style="margin-top: 1rem;">Selected Radio button : B</div></main>
```

## Examples / Vertical Radio Button

Usage:
```tsx
args => {
  const label = 'Choose One';
  return <>
      <header>
        <h1 className="sol-screenreader-only">Radio Button Group Demo</h1>
      </header>
      <main>
        <SOLRadioGroup inline={args.inline} name="content" disabled={args.disabled} readonly={args.readonly} required={true} label={label} supportErrorMessage={true} errorMessage={args.errorMessage} onClicked={value => action('click event triggered')(value)}>
          <SOLRadioButton value="A">Option A</SOLRadioButton>
          <SOLRadioButton value="B">Option B</SOLRadioButton>
          <SOLRadioButton value="C">Option C</SOLRadioButton>
        </SOLRadioGroup>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Radio Button Group Demo</h1></header><main><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Choose One</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1_" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="A" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option A</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="B" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option B</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="C" name="content" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Option C</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / With Error Message

Usage:
```tsx
args => <div style={{
  maxWidth: '600px',
  width: '100%'
}}>
    <header>
      <h1 className="sol-screenreader-only">Radio Button Group with Error</h1>
    </header>
    <main>
      <SOLRadioGroup inline={args.inline} name="selection" disabled={args.disabled} readonly={args.readonly} required={true} label={args.label} labelHelpText={args.labelHelpText} infoMessage={args.infoMessage} supportErrorMessage={args.supportErrorMessage} errorMessage={args.errorMessage} onClicked={value => action('click event triggered')(value)}>
        <SOLRadioButton value="option1">
          This is a very long radio button option text that should wrap to the next line when it exceeds the available width of the container. It
          demonstrates how text wrapping works in radio buttons.
        </SOLRadioButton>
        <SOLRadioButton value="option2">
          Another long option with extensive description that will automatically wrap to multiple lines to ensure all content is visible and readable
          to users.
        </SOLRadioButton>
        <SOLRadioButton value="option3">Short option</SOLRadioButton>
      </SOLRadioGroup>
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header><h1 class="sol-screenreader-only">Radio Button Group with Error</h1></header><main><div class="sol-input-wrapper sol-radio-container"><label class="sol-label required"><span class="sol-label-content"><span id="label-_r_1_" class="sol-label-text" data-base-ui-tooltip-trigger="">Please select one of the following options with detailed descriptions</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div role="radiogroup" aria-required="true" aria-labelledby="label-_r_1_" aria-describedby="error-_r_1_" aria-invalid="true" class="sol-radio-group vertical"><label class="sol-radio-item body-md" id="radio-button-_r_6_-label"><span data-unchecked="" role="radio" tabindex="0" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_6_-label"></span><input id="radio-button-_r_6_" tabindex="-1" aria-hidden="true" type="radio" value="option1" name="selection" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">This is a very long radio button option text that should wrap to the next line when it exceeds the available width of the container. It demonstrates how text wrapping works in radio buttons.</span></label><label class="sol-radio-item body-md" id="radio-button-_r_a_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_a_-label"></span><input id="radio-button-_r_a_" tabindex="-1" aria-hidden="true" type="radio" value="option2" name="selection" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Another long option with extensive description that will automatically wrap to multiple lines to ensure all content is visible and readable to users.</span></label><label class="sol-radio-item body-md" id="radio-button-_r_e_-label"><span data-unchecked="" role="radio" tabindex="-1" aria-checked="false" class="sol-radio-control" aria-labelledby="radio-button-_r_e_-label"></span><input id="radio-button-_r_e_" tabindex="-1" aria-hidden="true" type="radio" value="option3" name="selection" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><span class="sol-radio-label">Short option</span></label></div><div class="error-container"><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Please select one of the following options with detailed descriptions: </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">Please select an option</span></div></div></div></main></div>
```
