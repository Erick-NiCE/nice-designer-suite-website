# Spinner (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/Spinner.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-screenreader-only`, `sol-spinner`, `sol-spinner-announcer`, `sol-spinner-bar`, `sol-spinner-circle`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Multiple Spinner

Usage:
```tsx
() => {
  const [showSpinner1, setShowSpinner1] = useState(false);
  const [showSpinner2, setShowSpinner2] = useState(false);
  const [showSpinner3, setShowSpinner3] = useState(false);
  const [showSpinner4, setShowSpinner4] = useState(false);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Multiple Spinners</h1>
      </header>
      <main>
        <div style={{
        display: 'flex',
        gap: '20px'
      }}>
          <div>
            <SOLButton variant="secondary" size="medium" id="toggle1" onButtonClick={() => setShowSpinner1(v => !v)}>
              Toggle 1
            </SOLButton>
            <div style={{
            position: 'relative',
            width: '100px',
            height: '120px'
          }}>
              <SOLSpinner showSpinner={showSpinner1} id="spinner1" />
            </div>
          </div>
          <div>
            <SOLButton variant="secondary" size="medium" id="toggle2" onButtonClick={() => setShowSpinner2(v => !v)}>
              Toggle 2
            </SOLButton>
            <div style={{
            position: 'relative',
            width: '100px',
            height: '120px'
          }}>
              <SOLSpinner showSpinner={showSpinner2} id="spinner2" />
            </div>
          </div>
          <div>
            <SOLButton variant="secondary" size="medium" id="toggle3" onButtonClick={() => setShowSpinner3(v => !v)}>
              Toggle 3
            </SOLButton>
            <div style={{
            position: 'relative',
            width: '100px',
            height: '120px'
          }}>
              <SOLSpinner variant="circle" showSpinner={showSpinner3} id="spinner3" />
            </div>
          </div>
          <div>
            <SOLButton variant="secondary" size="medium" id="toggle4" onButtonClick={() => setShowSpinner4(v => !v)}>
              Toggle 4
            </SOLButton>
            <div style={{
            position: 'relative',
            width: '100px',
            height: '120px'
          }}>
              <SOLSpinner variant="circle" showSpinner={showSpinner4} id="spinner4" />
            </div>
          </div>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Multiple Spinners</h1></header><main><div style="display: flex; gap: 20px;"><div><button type="button" id="toggle1" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle 1</span></button><div style="position: relative; width: 100px; height: 120px;"><div class="sol-screenreader-only sol-spinner-announcer" role="status" aria-atomic="true"></div></div></div><div><button type="button" id="toggle2" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle 2</span></button><div style="position: relative; width: 100px; height: 120px;"><div class="sol-screenreader-only sol-spinner-announcer" role="status" aria-atomic="true"></div></div></div><div><button type="button" id="toggle3" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle 3</span></button><div style="position: relative; width: 100px; height: 120px;"><div class="sol-screenreader-only sol-spinner-announcer" role="status" aria-atomic="true"></div></div></div><div><button type="button" id="toggle4" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle 4</span></button><div style="position: relative; width: 100px; height: 120px;"><div class="sol-screenreader-only sol-spinner-announcer" role="status" aria-atomic="true"></div></div></div></div></main>
```

## Examples / Spinner Bar

Usage:
```tsx
args => {
  const storyName = `Spinner (${args.variant} variant)`;
  return <>
      <header>
        <h1 className="sol-screenreader-only">{storyName}</h1>
      </header>
      <main>
        <div style={{
        position: 'relative',
        width: '100%',
        height: '120px'
      }}>
          <SOLSpinner variant={args.variant} showSpinner={args.showSpinner} id={args.id} dark={args.dark} ariaLabel={args.ariaLabel} />
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Spinner (bar variant)</h1></header><main><div style="position: relative; width: 100%; height: 120px;"><div class="sol-screenreader-only sol-spinner-announcer" role="status" aria-atomic="true">Loading</div><div class="sol-spinner light bar" id="spinner1" role="presentation"><span class="sol-spinner-bar"></span><span class="sol-spinner-bar"></span><span class="sol-spinner-bar"></span></div></div></main>
```

## Examples / Spinner Circle

Usage:
```tsx
args => {
  const storyName = `Spinner (${args.variant} variant)`;
  return <>
      <header>
        <h1 className="sol-screenreader-only">{storyName}</h1>
      </header>
      <main>
        <div style={{
        position: 'relative',
        width: '100%',
        height: '120px'
      }}>
          <SOLSpinner variant={args.variant} showSpinner={args.showSpinner} id={args.id} dark={args.dark} ariaLabel={args.ariaLabel} />
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Spinner (circle variant)</h1></header><main><div style="position: relative; width: 100%; height: 120px;"><div class="sol-screenreader-only sol-spinner-announcer" role="status" aria-atomic="true">Loading</div><div class="sol-spinner light circle" id="spinner3" role="presentation"><span class="sol-spinner-circle"></span></div></div></main>
```
