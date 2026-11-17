# Toggle Group (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ToggleGroup.css`, `css/Tooltip.css`.
Component classes: `sol-screenreader-only`, `sol-toggle-group`, `sol-toggle-group--large`, `sol-toggle-group-cell`, `sol-toggle-group-inner`, `sol-toggle-group-item`, `sol-toggle-group-item-title`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Icons Only

Usage:
```tsx
args => {
  const [singleValue, setSingleValue] = useState<string>('');
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const sharedProps = args.multiple ? {
    multiple: true as const,
    value: multiValue,
    onSelectedChange: (v: string | string[]) => setMultiValue(v as string[])
  } : {
    multiple: false as const,
    value: singleValue,
    onSelectedChange: (v: string | string[]) => setSingleValue(v as string)
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group icons</h1>
      </header>
      <main>
        <SOLToggleGroup {...sharedProps} name="buttonWrapper" ariaLabel="Copy icon selection">
          <SOLToggleGroupItem value="icon1" ariaLabel="Copy option 1" titleTemplate={<CopyIcon />} />
          <SOLToggleGroupItem value="icon2" ariaLabel="Copy option 2" titleTemplate={<CopyIcon />} />
          <SOLToggleGroupItem value="icon3" ariaLabel="Copy option 3" titleTemplate={<CopyIcon />} />
          <SOLToggleGroupItem value="icon4" ariaLabel="Copy option 4" titleTemplate={<CopyIcon />} />
        </SOLToggleGroup>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group icons</h1></header><main><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Copy icon selection" role="radiogroup" data-name="buttonWrapper"><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" id="sol-toggle-group-item-_r_0_-0" aria-label="Copy option 1" role="radio" aria-checked="false" aria-posinset="1" aria-setsize="4" class="sol-toggle-group-item icon-only" data-base-ui-tooltip-trigger=""><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-1" aria-label="Copy option 2" role="radio" aria-checked="false" aria-posinset="2" aria-setsize="4" class="sol-toggle-group-item icon-only" data-base-ui-tooltip-trigger=""><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-2" aria-label="Copy option 3" role="radio" aria-checked="false" aria-posinset="3" aria-setsize="4" class="sol-toggle-group-item icon-only" data-base-ui-tooltip-trigger=""><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-3" aria-label="Copy option 4" role="radio" aria-checked="false" aria-posinset="4" aria-setsize="4" class="sol-toggle-group-item icon-only" data-base-ui-tooltip-trigger=""><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg></span></button></span></div></div></main>
```

## Examples / Icons With Text

Usage:
```tsx
args => {
  // Initial selection mirrors Angular's `[checked]="true"` on Text1 — wire
  // it through state so subsequent clicks update the selection.
  const [singleValue, setSingleValue] = useState<string>('Text1');
  const [multiValue, setMultiValue] = useState<string[]>(['Text1']);
  const sharedProps = args.multiple ? {
    multiple: true as const,
    value: multiValue,
    onSelectedChange: (v: string | string[]) => setMultiValue(v as string[])
  } : {
    multiple: false as const,
    value: singleValue,
    onSelectedChange: (v: string | string[]) => setSingleValue(v as string)
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group icons with text</h1>
      </header>
      <main>
        <SOLToggleGroup {...sharedProps} ariaLabel="Copy with text selection">
          <SOLToggleGroupItem value="Text1" title="Text 1" titleTemplate={CopyIconWithText} />
          <SOLToggleGroupItem value="Text2" title="Text 2" tooltip={args.tooltip} titleTemplate={CopyIconWithText} />
          <SOLToggleGroupItem value="Text3" title="Text with a label too long to fit" titleTemplate={CopyIconWithText} />
          <SOLToggleGroupItem value="Text4" title="Text 4" titleTemplate={CopyIconWithText} />
        </SOLToggleGroup>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group icons with text</h1></header><main><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Copy with text selection" role="radiogroup"><span class="sol-toggle-group-cell" role="presentation"><button type="button" data-pressed="" tabindex="0" id="sol-toggle-group-item-_r_0_-0" aria-labelledby="sol-toggle-group-item-_r_0_-0-label" role="radio" aria-checked="true" aria-posinset="1" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text 1</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-1" aria-labelledby="sol-toggle-group-item-_r_0_-1-label" role="radio" aria-checked="false" aria-posinset="2" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text 2</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-2" aria-labelledby="sol-toggle-group-item-_r_0_-2-label" role="radio" aria-checked="false" aria-posinset="3" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text with a label too long to fit</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-3" aria-labelledby="sol-toggle-group-item-_r_0_-3-label" role="radio" aria-checked="false" aria-posinset="4" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0V0ZM14 14V18H2V6H14V14ZM18 14H16V6C16 4.9 15.1 4 14 4H6V2H18V14Z" fill="#767676"></path></svg><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text 4</span></span></button></span></div></div></main>
```

## Examples / Multiple Selection

Usage:
```tsx
args => {
  const preselected = args.value ? args.value.split('_') : [];
  const [value, setValue] = useState<string[]>(preselected);
  useEffect(() => setValue(preselected), [args.value]);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group multiple selection</h1>
      </header>
      <main>
        <SOLToggleGroup multiple={args.multiple} disabled={args.disabled} size={args.size} value={value} onSelectedChange={v => setValue(v as string[])} name="buttonWrapper" ariaLabel={args.ariaLabel}>
          <SOLToggleGroupItem title="primary" value="primary" name="buttonToggle" />
          <SOLToggleGroupItem title="warn" value="warn" />
          <SOLToggleGroupItem title="Text with a label too long to fit" value="Text" />
          <SOLToggleGroupItem title="okay" disabled value="okay" />
        </SOLToggleGroup>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group multiple selection</h1></header><main><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Status indicator selection" role="group" data-name="buttonWrapper"><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-0" name="buttonToggle" aria-labelledby="sol-toggle-group-item-_r_0_-0-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">primary</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-1" aria-labelledby="sol-toggle-group-item-_r_0_-1-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">warn</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-2" aria-labelledby="sol-toggle-group-item-_r_0_-2-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text with a label too long to fit</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" data-disabled="" tabindex="0" disabled="" aria-pressed="false" id="sol-toggle-group-item-_r_0_-3" aria-labelledby="sol-toggle-group-item-_r_0_-3-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">okay</span></span></button></span></div></div></main>
```

## Examples / Reactive Forms Toggle

Usage:
```tsx
() => {
  const [buttonToggle, setButtonToggle] = useState<string>('');
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group with reactive forms component</h1>
      </header>
      <main>
        <form>
          <SOLToggleGroup value={buttonToggle} onSelectedChange={value => {
          action('change event triggered')(value);
          setButtonToggle(value as string);
        }} onToggleClicked={event => action('clicked event triggered')(event)} multiple={false} name="buttonWrapper" ariaLabel="Button style selection">
            <SOLToggleGroupItem title="primary" value="primary" name="buttonToggle" />
            <SOLToggleGroupItem title="warn" value="warn" />
            <SOLToggleGroupItem title="Text with a label too long to fit" value="text" />
            <SOLToggleGroupItem title="okay" value="okay" />
          </SOLToggleGroup>
        </form>
        <br />
        <p className="common-text">Checked buttons : {buttonToggle}</p>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group with reactive forms component</h1></header><main><form><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Button style selection" role="radiogroup" data-name="buttonWrapper"><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" id="sol-toggle-group-item-_r_0_-0" name="buttonToggle" aria-labelledby="sol-toggle-group-item-_r_0_-0-label" role="radio" aria-checked="false" aria-posinset="1" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">primary</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-1" aria-labelledby="sol-toggle-group-item-_r_0_-1-label" role="radio" aria-checked="false" aria-posinset="2" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">warn</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-2" aria-labelledby="sol-toggle-group-item-_r_0_-2-label" role="radio" aria-checked="false" aria-posinset="3" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text with a label too long to fit</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-3" aria-labelledby="sol-toggle-group-item-_r_0_-3-label" role="radio" aria-checked="false" aria-posinset="4" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">okay</span></span></button></span></div></div></form><br><p class="common-text">Checked buttons : </p></main>
```

## Examples / Single Selection

Usage:
```tsx
args => {
  const [value, setValue] = useState<string>(args.value ?? '');
  useEffect(() => setValue(args.value ?? ''), [args.value]);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group single selection</h1>
      </header>
      <main>
        <SOLToggleGroup multiple={args.multiple} disabled={args.disabled} size={args.size} value={value} onSelectedChange={v => setValue(v as string)} name="buttonWrapper" ariaLabel={args.ariaLabel}>
          <SOLToggleGroupItem title="primary" value="primary" name="buttonToggle" />
          <SOLToggleGroupItem title="warn" value="warn" />
          <SOLToggleGroupItem title="Text with a label too long to fit" value="Text" />
          <SOLToggleGroupItem title="okay" disabled value="okay" />
        </SOLToggleGroup>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group single selection</h1></header><main><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Status indicator selection" role="radiogroup" data-name="buttonWrapper"><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" id="sol-toggle-group-item-_r_0_-0" name="buttonToggle" aria-labelledby="sol-toggle-group-item-_r_0_-0-label" role="radio" aria-checked="false" aria-posinset="1" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">primary</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-1" aria-labelledby="sol-toggle-group-item-_r_0_-1-label" role="radio" aria-checked="false" aria-posinset="2" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">warn</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-2" aria-labelledby="sol-toggle-group-item-_r_0_-2-label" role="radio" aria-checked="false" aria-posinset="3" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text with a label too long to fit</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" data-disabled="" tabindex="-1" disabled="" id="sol-toggle-group-item-_r_0_-3" aria-labelledby="sol-toggle-group-item-_r_0_-3-label" role="radio" aria-checked="false" aria-posinset="4" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">okay</span></span></button></span></div></div></main>
```

## Examples / Template With Multiple Selection

Usage:
```tsx
() => {
  const [pressedButton, setPressedButton] = useState<string[]>([]);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group template multiple selection</h1>
      </header>
      <main>
        <form>
          <SOLToggleGroup value={pressedButton} onSelectedChange={value => {
          action('change event triggered')(value);
          setPressedButton(value as string[]);
        }} onToggleClicked={event => action('clicked event triggered')(event)} multiple disabled={false} name="buttonWrapper" ariaLabel="Button types selection (multiple)">
            <SOLToggleGroupItem title="primary" value="primary" name="primaryButton" />
            <SOLToggleGroupItem title="warn" value="warn" name="warnButton" />
            <SOLToggleGroupItem title="Text with a label too long to fit" value="text" name="textButton" />
            <SOLToggleGroupItem title="okay" value="okay" name="okayButton" />
          </SOLToggleGroup>
        </form>
        <br />
        <div className="common-text">Checked buttons : {pressedButton.join(',')}</div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group template multiple selection</h1></header><main><form><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Button types selection (multiple)" role="group" data-name="buttonWrapper"><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-0" name="primaryButton" aria-labelledby="sol-toggle-group-item-_r_0_-0-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">primary</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-1" name="warnButton" aria-labelledby="sol-toggle-group-item-_r_0_-1-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">warn</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-2" name="textButton" aria-labelledby="sol-toggle-group-item-_r_0_-2-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text with a label too long to fit</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" aria-pressed="false" id="sol-toggle-group-item-_r_0_-3" name="okayButton" aria-labelledby="sol-toggle-group-item-_r_0_-3-label" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">okay</span></span></button></span></div></div></form><br><div class="common-text">Checked buttons : </div></main>
```

## Examples / Template With Single Selection

Usage:
```tsx
() => {
  const [pressedButton, setPressedButton] = useState<string>('');
  return <>
      <header>
        <h1 className="sol-screenreader-only">Toggle group template single selection</h1>
      </header>
      <main>
        <form>
          <SOLToggleGroup value={pressedButton} onSelectedChange={value => {
          action('change event triggered')(value);
          setPressedButton(value as string);
        }} multiple={false} disabled={false} name="buttonWrapper" ariaLabel="Button type selection">
            <SOLToggleGroupItem title="primary" value="primary" name="primaryButton" />
            <SOLToggleGroupItem title="warn" value="warn" name="warnButton" />
            <SOLToggleGroupItem title="Text with a label too long to fit" value="text" name="textButton" />
            <SOLToggleGroupItem title="okay" value="okay" disabled name="okayButton" />
          </SOLToggleGroup>
        </form>
        <br />
        <div className="common-text">Checked button : {pressedButton}</div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Toggle group template single selection</h1></header><main><form><div class="sol-toggle-group sol-toggle-group--large"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="sol-toggle-group-inner" aria-label="Button type selection" role="radiogroup" data-name="buttonWrapper"><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="0" id="sol-toggle-group-item-_r_0_-0" name="primaryButton" aria-labelledby="sol-toggle-group-item-_r_0_-0-label" role="radio" aria-checked="false" aria-posinset="1" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-0-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">primary</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-1" name="warnButton" aria-labelledby="sol-toggle-group-item-_r_0_-1-label" role="radio" aria-checked="false" aria-posinset="2" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-1-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">warn</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" tabindex="-1" id="sol-toggle-group-item-_r_0_-2" name="textButton" aria-labelledby="sol-toggle-group-item-_r_0_-2-label" role="radio" aria-checked="false" aria-posinset="3" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-2-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">Text with a label too long to fit</span></span></button></span><span class="sol-toggle-group-cell" role="presentation"><button type="button" data-disabled="" tabindex="-1" disabled="" id="sol-toggle-group-item-_r_0_-3" name="okayButton" aria-labelledby="sol-toggle-group-item-_r_0_-3-label" role="radio" aria-checked="false" aria-posinset="4" aria-setsize="4" data-base-ui-tooltip-trigger="" class="sol-toggle-group-item"><span id="sol-toggle-group-item-_r_0_-3-label" class="icon-text body-md"><span class="sol-toggle-group-item-title" data-sol-tooltip-overflow-target="">okay</span></span></button></span></div></div></form><br><div class="common-text">Checked button : </div></main>
```
