# Numeric Selector (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/NumericSelector.css`, `css/Tooltip.css`.
Component classes: `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-info-message`, `sol-input`, `sol-input-container`, `sol-input-trailing-button-container`, `sol-input-wrapper`, `sol-label`, `sol-label-asterisk`, `sol-label-container`, `sol-label-content`, `sol-label-help`, `sol-label-text`, `sol-numeric-selector`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / All Other Modes

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<AllModesArgs>();
  return <AllModesDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector - All Modes</h1></header><main><form><div id="all-modes-example" class="sol-numeric-selector sol-input-wrapper"><div class="sol-label-container"><label class="sol-label" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Numeric Selector</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Numeric Selector" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div><div role="group" class="sol-input-container"><input id="sol-numeric-selector-input-_r_0_" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuemin="5" aria-valuemax="20" min="5" max="20" class="sol-input body-md" type="text" value="" aria-describedby="error-_r_1_"><div class="sol-input-trailing-button-container numeric-buttons"><button type="button" tabindex="-1" class="top-button" aria-label="Increment Numeric Selector"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></button><button type="button" tabindex="-1" class="bottom-button" aria-label="Decrement Numeric Selector"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_" role="status" aria-live="polite"><span class="sol-screenreader-only">Numeric Selector: </span><span class="sol-info-message">Select a value between 5–20</span></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input min="5" max="20" step="1" aria-hidden="true" tabindex="-1" type="number" value="" name="numericSelector" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><br><p class="common-text">Value : <strong></strong></p></form></main>
```

## Examples / Default With Label And Info Text

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<NumericSelectorStoryArgs>();
  return <NumericSelectorDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector with Label and Message</h1></header><main><div><div id="with-label-and-info-message" class="sol-numeric-selector sol-input-wrapper"><label class="sol-label" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Numeric Selector with Label and Message</span></span></label><div role="group" class="sol-input-container"><input id="sol-numeric-selector-input-_r_0_" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuemin="5" aria-valuemax="25" min="5" max="25" class="sol-input body-md" type="text" value="" aria-describedby="error-_r_1_"><div class="sol-input-trailing-button-container numeric-buttons"><button type="button" tabindex="-1" class="top-button" aria-label="Increment Numeric Selector with Label and Message"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></button><button type="button" tabindex="-1" class="bottom-button" aria-label="Decrement Numeric Selector with Label and Message"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_" role="status" aria-live="polite"><span class="sol-screenreader-only">Numeric Selector with Label and Message: </span><span class="sol-info-message">Select a value between 5–25</span></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input min="5" max="25" step="1" aria-hidden="true" tabindex="-1" type="number" value="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><br><p class="common-text">Value : <strong></strong></p></div></main>
```

## Examples / Ng Model

Usage:
```tsx
args => {
  const [model, setModel] = useState<number | undefined>(15);
  return <>
      <header className="sol-screenreader-only">
        <h1 className="sol-screenreader-only">Numeric Selector NgModel</h1>
      </header>
      <main>
        <div>
          <SOLNumericSelector id="ng-model" name="name" label="Numeric Selector with NgModel" infoMessage={args.infoMessage} errorMessage={args.errorMessage} supportErrorMessage value={model} disabled={args.disabled} required={args.required} placeholder={args.placeholder} step={1} min={args.min} max={args.max} allowDecimal={args.allowDecimal} onValueChange={value => {
          setModel(value === '' ? undefined : Number(value));
          action('change fired')(value);
        }} />
        </div>
        <br />
        <p className="common-text">
          Value : <strong>{model ?? ''}</strong>
        </p>
      </main>
    </>;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector NgModel</h1></header><main><div><div id="ng-model" class="sol-numeric-selector sol-input-wrapper"><label class="sol-label" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Numeric Selector with NgModel</span></span></label><div role="group" class="sol-input-container"><input id="sol-numeric-selector-input-_r_0_" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuenow="15" class="sol-input body-md" type="text" value="15"><div class="sol-input-trailing-button-container numeric-buttons"><button type="button" tabindex="-1" class="top-button" aria-label="Increment Numeric Selector with NgModel"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></button><button type="button" tabindex="-1" class="bottom-button" aria-label="Decrement Numeric Selector with NgModel"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input step="1" aria-hidden="true" tabindex="-1" type="number" value="15" name="name" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"></div><br><p class="common-text">Value : <strong>15</strong></p></main>
```

## Examples / Reactive Form

Usage:
```tsx
args => {
  const [value, setValue] = useState<number | undefined>(99);
  const [touched, setTouched] = useState(false);
  const errorMessage = touched && value === undefined ? 'This field is required.' : undefined;
  return <>
      <header className="sol-screenreader-only">
        <h1 className="sol-screenreader-only">Numeric Selector with Reactive Forms</h1>
      </header>
      <main>
        <form>
          <SOLNumericSelector id="formsExample" name="numericSelector" label="Numeric Selector" placeholder="--" step={1} min={args.min} max={args.max} required disabled={args.disabled} errorMessage={errorMessage} value={value} allowDecimal={args.allowDecimal} onValueChange={next => {
          setValue(next === '' ? undefined : Number(next));
          setTouched(true);
        }} />
        </form>
        <br />
        <div className="common-text">value: {value ?? ''}</div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector with Reactive Forms</h1></header><main><form><div data-required="" id="formsExample" class="sol-numeric-selector sol-input-wrapper"><label class="sol-label required" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Numeric Selector</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div data-required="" role="group" class="sol-input-container"><input data-required="" id="sol-numeric-selector-input-_r_0_" required="true" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuenow="99" class="sol-input body-md" type="text" value="99"><div class="sol-input-trailing-button-container numeric-buttons"><button type="button" tabindex="-1" class="top-button" aria-label="Increment Numeric Selector"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></button><button type="button" tabindex="-1" class="bottom-button" aria-label="Decrement Numeric Selector"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input step="1" required="" aria-hidden="true" tabindex="-1" type="number" value="99" name="numericSelector" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"></form><br><div class="common-text">value: 99</div></main>
```

## Variants / Disabled

Usage:
```tsx
args => {
  const [model, setModel] = useState<number | undefined>(args.initialValue);
  const [touched, setTouched] = useState(false);
  const errorMessage = args.errorMessage ?? (args.required && touched && model === undefined ? 'This field is required.' : undefined);
  return <>
      <header className="sol-screenreader-only">
        <h1 className="sol-screenreader-only">Numeric Selector Variant</h1>
      </header>
      <main>
        <form>
          <SOLNumericSelector id={args.id} name="numericSelector" label={args.label} labelHelpText={args.labelHelpText} infoMessage={args.infoMessage} disabled={args.disabled} readonly={args.readonly} required={args.required} placeholder={args.placeholder} min={args.min} max={args.max} step={args.step} errorMessage={errorMessage} value={model} allowDecimal={args.allowDecimal} onValueChange={value => {
          setModel(value === '' ? undefined : Number(value));
          action('change fired')(value);
          setTouched(true);
        }} />
          <div className="common-text">Value: {model ?? 'No value'}</div>
        </form>
      </main>
    </>;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector Variant</h1></header><main><form><div data-disabled="" id="disabled-example" class="sol-numeric-selector sol-input-wrapper"><label class="sol-label disabled" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Disabled Numeric Selector</span></span></label><div data-disabled="" role="group" class="sol-input-container disabled"><input data-disabled="" id="sol-numeric-selector-input-_r_0_" disabled="" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuemin="0" aria-valuemax="100" min="0" max="100" class="sol-input body-md" type="text" value=""></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input min="0" max="100" step="1" disabled="" aria-hidden="true" tabindex="-1" type="number" value="" name="numericSelector" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><div class="common-text">Value: No value</div></form></main>
```

## Variants / Readonly

Usage:
```tsx
args => {
  const [model, setModel] = useState<number | undefined>(args.initialValue);
  const [touched, setTouched] = useState(false);
  const errorMessage = args.errorMessage ?? (args.required && touched && model === undefined ? 'This field is required.' : undefined);
  return <>
      <header className="sol-screenreader-only">
        <h1 className="sol-screenreader-only">Numeric Selector Variant</h1>
      </header>
      <main>
        <form>
          <SOLNumericSelector id={args.id} name="numericSelector" label={args.label} labelHelpText={args.labelHelpText} infoMessage={args.infoMessage} disabled={args.disabled} readonly={args.readonly} required={args.required} placeholder={args.placeholder} min={args.min} max={args.max} step={args.step} errorMessage={errorMessage} value={model} allowDecimal={args.allowDecimal} onValueChange={value => {
          setModel(value === '' ? undefined : Number(value));
          action('change fired')(value);
          setTouched(true);
        }} />
          <div className="common-text">Value: {model ?? 'No value'}</div>
        </form>
      </main>
    </>;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector Variant</h1></header><main><form><div data-readonly="" id="readonly-example" class="sol-numeric-selector sol-input-wrapper"><div class="sol-label-container"><label class="sol-label readonly" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Readonly Numeric Selector</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Readonly Numeric Selector" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div><div data-readonly="" role="group" class="sol-input-container readonly"><input data-readonly="" id="sol-numeric-selector-input-_r_0_" readonly="" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15" min="0" max="100" class="sol-input body-md" type="text" value="15" aria-invalid="true"></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input min="0" max="100" step="1" aria-hidden="true" tabindex="-1" type="number" value="15" name="numericSelector" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><div class="common-text">Value: 15</div></form></main>
```

## Variants / Required With Error

Usage:
```tsx
args => {
  const [model, setModel] = useState<number | undefined>(args.initialValue);
  const [touched, setTouched] = useState(false);
  const errorMessage = args.errorMessage ?? (args.required && touched && model === undefined ? 'This field is required.' : undefined);
  return <>
      <header className="sol-screenreader-only">
        <h1 className="sol-screenreader-only">Numeric Selector Variant</h1>
      </header>
      <main>
        <form>
          <SOLNumericSelector id={args.id} name="numericSelector" label={args.label} labelHelpText={args.labelHelpText} infoMessage={args.infoMessage} disabled={args.disabled} readonly={args.readonly} required={args.required} placeholder={args.placeholder} min={args.min} max={args.max} step={args.step} errorMessage={errorMessage} value={model} allowDecimal={args.allowDecimal} onValueChange={value => {
          setModel(value === '' ? undefined : Number(value));
          action('change fired')(value);
          setTouched(true);
        }} />
          <div className="common-text">Value: {model ?? 'No value'}</div>
        </form>
      </main>
    </>;
}
```

Rendered markup:
```html
<header class="sol-screenreader-only"><h1 class="sol-screenreader-only">Numeric Selector Variant</h1></header><main><form><div data-required="" id="required-with-error-example" class="sol-numeric-selector sol-input-wrapper"><div class="sol-label-container"><label class="sol-label required" for="sol-numeric-selector-input-_r_0_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Required Numeric Selector</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Help for Required Numeric Selector" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" class="sol-label-help" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></button></span></div><div data-required="" role="group" class="sol-input-container error-border"><input data-required="" id="sol-numeric-selector-input-_r_0_" required="true" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="--" role="spinbutton" aria-valuemin="0" aria-valuemax="100" min="0" max="100" class="sol-input body-md" type="text" value="" aria-invalid="true" aria-describedby="error-_r_1_"><div class="sol-input-trailing-button-container numeric-buttons"><button type="button" tabindex="-1" class="top-button" aria-label="Increment Required Numeric Selector"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></button><button type="button" tabindex="-1" class="bottom-button" aria-label="Decrement Required Numeric Selector"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Required Numeric Selector: </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">This field is required.</span></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input min="0" max="100" step="1" required="" aria-hidden="true" tabindex="-1" type="number" value="" name="numericSelector" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: absolute;"><div class="common-text">Value: No value</div></form></main>
```
