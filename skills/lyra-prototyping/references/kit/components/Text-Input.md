# Text Input (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/Tooltip.css`.
Component classes: `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-input`, `sol-input-container`, `sol-input-label-area`, `sol-input-trailing-button`, `sol-input-wrapper`, `sol-label`, `sol-label-asterisk`, `sol-label-content`, `sol-label-text`, `sol-password-toggle-icon`, `sol-screenreader-only`, `sol-text-counter`, `sol-text-counter-text`, `sol-text-input`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Default Input

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<TextInputProps>();
  return <TextInputDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Text Input</h1><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text label</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Text" autocomplete="off" type="text" value="Sample text value"></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><span class="ng-model-text sol-screenreader-only">Sample text value</span></main></div>
```

## Examples / Password Input

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<TextInputProps>();
  return <TextInputDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Text Input</h1><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Password</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Type your password here" autocomplete="off" type="password" value=""><span class="sol-password-toggle-icon sol-input-trailing-button"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Show Toggle password visibility" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></button></span></span></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><span class="ng-model-text sol-screenreader-only"></span></main></div>
```

## Examples / Reactive Form

Usage:
```tsx
() => {
  const [value, setValue] = useState('Testing');
  const [disabled, setDisabled] = useState(false);
  const required = true;
  return <div>
      <header>
        <h1 className="sol-screenreader-only">Text Input</h1>
      </header>
      <main>
        <form style={{
        maxWidth: '600px'
      }}>
          <SOLTextInput placeholder="Placeholder" label="label Text" value={value} disabled={disabled} required={required} onValueChange={setValue} />
        </form>
        <br />
        <div className="common-text">value: {value}</div>
        <br />
        <button type="button" onClick={() => setDisabled(d => !d)}>
          Toggle disabled state
        </button>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div><header><h1 class="sol-screenreader-only">Text Input</h1></header><main><form style="max-width: 600px;"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label required" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">label Text</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Placeholder" autocomplete="off" type="text" value="Testing" required="true"></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></form><br><div class="common-text">value: Testing</div><br><button type="button">Toggle disabled state</button></main></div>
```

## Examples / Search Input

Usage:
```tsx
args => {
  const [, updateArgs] = useArgs<TextInputProps>();
  return <TextInputDemo args={args} updateArgs={updateArgs} />;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Text Input</h1><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Search</span></span></label></div><div class="sol-input-container size-large"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5 0a6.5 6.5 0 0 1 4.935 10.727l4.418 4.42a.5.5 0 1 1-.707.707l-4.419-4.42A6.5 6.5 0 1 1 6.5 0Zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" clip-rule="evenodd"></path></svg></div></span><input class="sol-input" id="_r_0_" placeholder="Search" autocomplete="off" type="search" value=""></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><span class="ng-model-text sol-screenreader-only"></span></main></div>
```

## OverviewExamples / Basic Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Basic Text Input" />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Basic Text Input" autocomplete="off" type="text" value=""></div></div>
```

## OverviewExamples / Disabled Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Disabled Text Input" label="Text" disabled={true} />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label disabled" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large disabled"><input class="sol-input" id="_r_0_" placeholder="Disabled Text Input" autocomplete="off" type="text" value="" disabled=""></div></div>
```

## OverviewExamples / Error Message Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Error Message Text Input" label="Text" errorMessage="This field has custom error" />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large error-border"><input class="sol-input" id="_r_0_" placeholder="Error Message Text Input" autocomplete="off" type="text" value="" aria-invalid="true" aria-describedby="error-_r_1_"></div><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Text: </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">This field has custom error</span></div></div>
```

## OverviewExamples / Icon Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Icon Text Input" label="Text" icon="./assets/application-icons.svg#icon-help" />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-help"></use></svg></div></span><input class="sol-input" id="_r_0_" placeholder="Icon Text Input" autocomplete="off" type="text" value=""></div></div>
```

## OverviewExamples / Label Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Label Text Input" label="Text" />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Label Text Input" autocomplete="off" type="text" value=""></div></div>
```

## OverviewExamples / Max Length Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Max Length Message Text Input" label="Text" maxLength={10} />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label><div class="sol-text-counter body-sm"><span id="text-counter-_r_0_" class="sol-text-counter-text"> 0 / 10 <span class="sol-screenreader-only">characters</span> </span><div role="status" aria-live="polite" aria-atomic="true" class="sol-screenreader-only"></div></div></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Max Length Message Text Input" maxlength="10" autocomplete="off" type="text" value="" aria-describedby="text-counter-_r_0_"></div></div>
```

## OverviewExamples / Password Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Password Text Input" label="Text" type="password" />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Password Text Input" autocomplete="off" type="password" value=""><span class="sol-password-toggle-icon sol-input-trailing-button"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Show password" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></button></span></span></div></div>
```

## OverviewExamples / Readonly Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Readonly Text Input" label="Text" readonly={true} />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label readonly" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large readonly"><input class="sol-input" id="_r_0_" placeholder="Readonly Text Input" autocomplete="off" type="text" value="" readonly=""></div></div>
```

## OverviewExamples / Required Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Required Text Input" label="Text" required={true} />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label required" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" placeholder="Required Text Input" autocomplete="off" type="text" value="" required="true"></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div>
```

## OverviewExamples / Search Text Input

Usage:
```tsx
story(<SOLTextInput placeholder="Search Text Input" label="Text" type="search" />)
```

Rendered markup:
```html
<div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Text</span></span></label></div><div class="sol-input-container size-large"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5 0a6.5 6.5 0 0 1 4.935 10.727l4.418 4.42a.5.5 0 1 1-.707.707l-4.419-4.42A6.5 6.5 0 1 1 6.5 0Zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" clip-rule="evenodd"></path></svg></div></span><input class="sol-input" id="_r_0_" placeholder="Search Text Input" autocomplete="off" type="search" value=""></div></div>
```
