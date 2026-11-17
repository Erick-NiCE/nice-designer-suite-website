# Button (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-icon-template-wrapper`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Button Icon

Usage:
```tsx
args => {
  const [iconClickMessage, setIconClickMessage] = useState('');
  return <div style={{
    maxWidth: '680px',
    width: '100%'
  }}>
      <main dir={args.dir}>
        <h1 className="sol-screenreader-only">Button</h1>
        <div style={{
        display: 'flex',
        padding: '24px',
        columnGap: '10px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <SOLButton id="leadingIconBtn" variant={args.variant} size={args.size} disabled={args.disabled} icon={customPlusIcon} onButtonClick={() => setIconClickMessage('Leading icon button clicked!')}>
            Button Text
          </SOLButton>
          <SOLButton id="trailingIconBtn" variant={args.variant} size={args.size} disabled={args.disabled} iconEnd={customPlusIcon} onButtonClick={() => setIconClickMessage('Trailing icon button clicked!')}>
            Button Text
          </SOLButton>
          <SOLButton id="dualIconBtn" variant={args.variant} size={args.size} disabled={args.disabled} icon={customPlusIcon} iconEnd={customPlusIcon} onButtonClick={() => setIconClickMessage('Dual icon button clicked!')}>
            Button Text
          </SOLButton>
        </div>
        <div style={{
        display: 'flex',
        padding: '24px',
        columnGap: '20px',
        flexWrap: 'wrap'
      }}>
          <div>
            <SOLButton id="iconOnlyBtn" variant={args.variant} size={args.size} disabled={args.disabled} icon={customPlusIcon} ariaLabel="Icon only" onButtonClick={() => setIconClickMessage('Icon-only button clicked!')} />
            <pre style={{
            margin: '8px 0 0 0'
          }}>
              {`<SOLButton
  icon={customPlusIcon}
  ariaLabel="Icon only"
  ...
/>`}
            </pre>
          </div>
          <div>
            <SOLButton id="iconOnlyTooltipBtn" variant={args.variant} size={args.size} disabled={args.disabled} icon={customPlusIcon} ariaLabel="Icon only" tooltip={args.tooltip || 'Custom tooltip icon only text'} tooltipAriaDescribedByDisabled={args.tooltipAriaDescribedByDisabled ?? false} onButtonClick={() => setIconClickMessage('Icon-only with tooltip button clicked!')} />
            <pre style={{
            margin: '8px 0 0 0'
          }}>
              {`<SOLButton
  icon={customPlusIcon}
  ariaLabel="Icon only"
  tooltip="Custom tooltip icon only text"
  ...
/>`}
            </pre>
          </div>
        </div>
        {iconClickMessage && <div className="click-message">{iconClickMessage}</div>}
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 680px; width: 100%;"><main><h1 class="sol-screenreader-only">Button</h1><div style="display: flex; padding: 24px; column-gap: 10px; align-items: center; flex-wrap: wrap;"><button type="button" id="leadingIconBtn" class="sol-button btn-primary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content">Button Text</span></button><button type="button" id="trailingIconBtn" class="sol-button btn-primary-medium"><span class="projected-content">Button Text</span><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></button><button type="button" id="dualIconBtn" class="sol-button btn-primary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content">Button Text</span><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></button></div><div style="display: flex; padding: 24px; column-gap: 20px; flex-wrap: wrap;"><div><button type="button" id="iconOnlyBtn" aria-label="Icon only" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content"></span></button><pre style="margin: 8px 0px 0px;">&lt;SOLButton
  icon={customPlusIcon}
  ariaLabel="Icon only"
  ...
/&gt;</pre></div><div><button type="button" id="iconOnlyTooltipBtn" aria-label="Icon only" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content"></span></button><pre style="margin: 8px 0px 0px;">&lt;SOLButton
  icon={customPlusIcon}
  ariaLabel="Icon only"
  tooltip="Custom tooltip icon only text"
  ...
/&gt;</pre></div></div></main></div>
```

## Examples / Button Sizes

Usage:
```tsx
args => {
  const [sizeClickMessage, setSizeClickMessage] = useState('');
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <main>
        <h1 className="sol-screenreader-only">Button</h1>
        <div>
          <div style={{
          display: 'flex',
          padding: '24px',
          columnGap: '10px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
            <SOLButton variant={args.variant} size="large" disabled={args.disabled} onButtonClick={() => setSizeClickMessage(`${cap(args.variant)} Large button clicked!`)}>
              {cap(args.variant)} Large
            </SOLButton>
            <SOLButton variant={args.variant} size="medium" disabled={args.disabled} onButtonClick={() => setSizeClickMessage(`${cap(args.variant)} Medium button clicked!`)}>
              {cap(args.variant)} Medium
            </SOLButton>
            <SOLButton variant={args.variant} size="small" disabled={args.disabled} onButtonClick={() => setSizeClickMessage(`${cap(args.variant)} Small button clicked!`)}>
              {cap(args.variant)} Small
            </SOLButton>
          </div>
          {sizeClickMessage && <div className="click-message">{sizeClickMessage}</div>}
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 class="sol-screenreader-only">Button</h1><div><div style="display: flex; padding: 24px; column-gap: 10px; align-items: center; flex-wrap: wrap;"><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Primary Large</span></button><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Primary Medium</span></button><button type="button" class="sol-button btn-primary-small"><span class="projected-content">Primary Small</span></button></div></div></main></div>
```

## Examples / Button States

Usage:
```tsx
args => {
  const [stateClickMessage, setStateClickMessage] = useState('');
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return <>
      <style>{`
        .states-demo .hover-forced { background: var(--sol-color-background-state-hover-primary) !important; border-color: var(--sol-color-background-action-primary) !important; color: var(--sol-color-text-action-inverse) !important; }
        .states-demo .hover-forced.secondary { background: var(--sol-color-background-state-hover-neutral) !important; border-color: var(--sol-color-border-standard) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .hover-forced.tertiary { background: var(--sol-color-background-state-hover-neutral) !important; border-color: var(--sol-color-background-state-hover-neutral) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .hover-forced.critical { background: var(--sol-color-background-state-hover-critical-strong) !important; border-color: var(--sol-color-background-status-critical-strong) !important; color: var(--sol-color-text-action-inverse) !important; }
        .states-demo .focus-forced { outline: var(--sol-size-spacing-3xs) solid var(--sol-color-border-focus-default) !important; outline-offset: var(--sol-size-spacing-3xs) !important; }
        .states-demo .active-forced { background: var(--sol-color-background-state-pressed-primary) !important; border-color: var(--sol-color-background-action-primary) !important; color: var(--sol-color-text-action-inverse) !important; transform: translateY(1px); }
        .states-demo .active-forced.secondary { background: var(--sol-color-background-state-pressed-neutral) !important; border-color: var(--sol-color-border-standard) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .active-forced.tertiary { background: var(--sol-color-background-state-pressed-neutral) !important; border-color: var(--sol-color-background-state-pressed-neutral) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .active-forced.critical { background: var(--sol-color-background-state-pressed-critical-strong) !important; border-color: var(--sol-color-background-status-critical-strong) !important; color: var(--sol-color-text-action-inverse) !important; }
      `}</style>
      <div style={{
      maxWidth: '600px',
      width: '100%'
    }}>
        <main>
          <h1 id="button-states-heading" className="sol-screenreader-only">
            Button
          </h1>
          <div className="states-demo">
            <div style={{
            display: 'flex',
            padding: '24px',
            columnGap: '15px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
              <SOLButton variant={args.variant} size={args.size} disabled={false} onButtonClick={() => setStateClickMessage(`${cap(args.variant)} Default button clicked!`)}>
                Default
              </SOLButton>
              <SOLButton variant={args.variant} size={args.size} disabled={false} className={`hover-forced ${args.variant}`} onButtonClick={() => setStateClickMessage(`${cap(args.variant)} Hover button clicked!`)}>
                Hover
              </SOLButton>
              <SOLButton variant={args.variant} size={args.size} disabled={false} className={`active-forced ${args.variant}`} onButtonClick={() => setStateClickMessage(`${cap(args.variant)} Pressed button clicked!`)}>
                Pressed
              </SOLButton>
              <SOLButton variant={args.variant} size={args.size} disabled={false} className="focus-forced" onButtonClick={() => setStateClickMessage(`${cap(args.variant)} Focus button clicked!`)}>
                Focus
              </SOLButton>
              <SOLButton variant={args.variant} size={args.size} disabled={!args.disabledAltState} disabledAltState={args.disabledAltState} ariaDescribedBy={args.ariaDescribedby} onButtonClick={() => setStateClickMessage(`${cap(args.variant)} Disabled button clicked!`)}>
                Disabled
              </SOLButton>
            </div>
            {stateClickMessage && <div className="click-message">{stateClickMessage}</div>}
          </div>
        </main>
      </div>
    </>;
}
```

Rendered markup:
```html
<style>
        .states-demo .hover-forced { background: var(--sol-color-background-state-hover-primary) !important; border-color: var(--sol-color-background-action-primary) !important; color: var(--sol-color-text-action-inverse) !important; }
        .states-demo .hover-forced.secondary { background: var(--sol-color-background-state-hover-neutral) !important; border-color: var(--sol-color-border-standard) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .hover-forced.tertiary { background: var(--sol-color-background-state-hover-neutral) !important; border-color: var(--sol-color-background-state-hover-neutral) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .hover-forced.critical { background: var(--sol-color-background-state-hover-critical-strong) !important; border-color: var(--sol-color-background-status-critical-strong) !important; color: var(--sol-color-text-action-inverse) !important; }
        .states-demo .focus-forced { outline: var(--sol-size-spacing-3xs) solid var(--sol-color-border-focus-default) !important; outline-offset: var(--sol-size-spacing-3xs) !important; }
        .states-demo .active-forced { background: var(--sol-color-background-state-pressed-primary) !important; border-color: var(--sol-color-background-action-primary) !important; color: var(--sol-color-text-action-inverse) !important; transform: translateY(1px); }
        .states-demo .active-forced.secondary { background: var(--sol-color-background-state-pressed-neutral) !important; border-color: var(--sol-color-border-standard) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .active-forced.tertiary { background: var(--sol-color-background-state-pressed-neutral) !important; border-color: var(--sol-color-background-state-pressed-neutral) !important; color: var(--sol-color-text-action) !important; }
        .states-demo .active-forced.critical { background: var(--sol-color-background-state-pressed-critical-strong) !important; border-color: var(--sol-color-background-status-critical-strong) !important; color: var(--sol-color-text-action-inverse) !important; }
      </style><div style="max-width: 600px; width: 100%;"><main><h1 id="button-states-heading" class="sol-screenreader-only">Button</h1><div class="states-demo"><div style="display: flex; padding: 24px; column-gap: 15px; align-items: center; flex-wrap: wrap;"><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Default</span></button><button type="button" class="sol-button btn-primary-medium hover-forced primary"><span class="projected-content">Hover</span></button><button type="button" class="sol-button btn-primary-medium active-forced primary"><span class="projected-content">Pressed</span></button><button type="button" class="sol-button btn-primary-medium focus-forced"><span class="projected-content">Focus</span></button><button type="button" data-disabled="" disabled="" aria-disabled="true" class="sol-button btn-primary-medium"><span class="projected-content">Disabled</span></button></div></div></main></div>
```

## Examples / Button Styles

Usage:
```tsx
args => {
  const [clickMessage, setClickMessage] = useState('');
  const [pressed, setPressed] = useState<boolean | undefined>(args.ariaPressed);
  useEffect(() => setPressed(args.ariaPressed), [args.ariaPressed]);
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <main>
        <h1 id="button-styles-heading" className="sol-screenreader-only">
          Button styles
        </h1>
        <div>
          <div style={{
          display: 'flex',
          padding: '24px',
          columnGap: '10px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
            <SOLButton variant="primary" size={args.size} disabled={args.disabled} maxWidth={args.maxWidth} ariaPressed={pressed} ariaHaspopup={args.ariaHaspopup} ariaInvalid={args.ariaInvalid} ariaLabelledBy={args.ariaLabelledby} ariaDescribedBy={args.ariaDescribedby} ariaLabel={args.ariaLabel} ariaExpanded={args.ariaExpanded} tabindex={args.tabindex || undefined} name={args.name} value={args.value} type={args.type || 'button'} onButtonClick={() => {
            setClickMessage('Primary button clicked!');
            // A set ariaPressed arg turns the Primary button into a toggle.
            setPressed(prev => prev === undefined ? prev : !prev);
          }}>
              Primary
            </SOLButton>
            <SOLButton variant="secondary" size={args.size} disabled={args.disabled} onButtonClick={() => setClickMessage('Secondary button clicked!')}>
              Secondary
            </SOLButton>
            <SOLButton variant="tertiary" size={args.size} disabled={args.disabled} onButtonClick={() => setClickMessage('Tertiary button clicked!')}>
              Tertiary
            </SOLButton>
            <SOLButton variant="critical" size={args.size} disabled={args.disabled} onButtonClick={() => setClickMessage('Critical button clicked!')}>
              Critical
            </SOLButton>
          </div>
          {clickMessage && <div className="click-message">{clickMessage}</div>}
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><h1 id="button-styles-heading" class="sol-screenreader-only">Button styles</h1><div><div style="display: flex; padding: 24px; column-gap: 10px; align-items: center; flex-wrap: wrap;"><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Primary</span></button><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Secondary</span></button><button type="button" class="sol-button btn-tertiary-large"><span class="projected-content">Tertiary</span></button><button type="button" class="sol-button btn-critical-large"><span class="projected-content">Critical</span></button></div></div></main></div>
```

## OverviewExamples / Critical Button

Usage:
```tsx
story(<SOLButton variant="critical">Critical Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-critical-large"><span class="projected-content">Critical Button</span></button>
```

## OverviewExamples / Default Button

Usage:
```tsx
story(<SOLButton>Default Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-large"><span class="projected-content">Default Button</span></button>
```

## OverviewExamples / Disabled Button

Usage:
```tsx
story(<SOLButton disabled>Disabled Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" data-disabled="" disabled="" aria-disabled="true" class="sol-button btn-primary-large"><span class="projected-content">Disabled Button</span></button>
```

## OverviewExamples / Dual Icon Button

Usage:
```tsx
story(<SOLButton icon={<svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" />
      </svg>} iconEnd={<svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" />
      </svg>}>
    Add Button
  </SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content">Add Button</span><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></button>
```

## OverviewExamples / Icon Only Button

Usage:
```tsx
story(<SOLButton icon={<svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" />
      </svg>} ariaLabel="Add item" />)
```

Rendered markup:
```html
<button type="button" aria-label="Add item" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content"></span></button>
```

## OverviewExamples / Large Button

Usage:
```tsx
story(<SOLButton size="large">Large Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-large"><span class="projected-content">Large Button</span></button>
```

## OverviewExamples / Leading Icon Button

Usage:
```tsx
story(<SOLButton icon={<svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" />
      </svg>}>
    Add Button
  </SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></span><span class="projected-content">Add Button</span></button>
```

## OverviewExamples / Medium Button

Usage:
```tsx
story(<SOLButton size="medium">Medium Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Medium Button</span></button>
```

## OverviewExamples / Primary Button

Usage:
```tsx
story(<SOLButton variant="primary">Primary Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-large"><span class="projected-content">Primary Button</span></button>
```

## OverviewExamples / Secondary Button

Usage:
```tsx
story(<SOLButton variant="secondary">Secondary Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Secondary Button</span></button>
```

## OverviewExamples / Small Button

Usage:
```tsx
story(<SOLButton size="small">Small Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-small"><span class="projected-content">Small Button</span></button>
```

## OverviewExamples / Tertiary Button

Usage:
```tsx
story(<SOLButton variant="tertiary">Tertiary Button</SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-tertiary-large"><span class="projected-content">Tertiary Button</span></button>
```

## OverviewExamples / Trailing Icon Button

Usage:
```tsx
story(<SOLButton iconEnd={<svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" />
      </svg>}>
    Add Button
  </SOLButton>)
```

Rendered markup:
```html
<button type="button" class="sol-button btn-primary-large"><span class="projected-content">Add Button</span><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg aria-hidden="true" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></span></span></button>
```
