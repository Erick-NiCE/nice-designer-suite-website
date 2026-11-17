# Popover (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/Popover.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-icon`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Max height Popover

Usage:
```tsx
() => {
  const ref = useRef<PopoverHandle>(null);
  return <main role="main">
      <h1 className="sol-screenreader-only">Max height popover</h1>
      <div className="popover-demo-container">
        <SOLPopover ref={ref} hideOnOutsideClick popoverId="scroll-popover" placement="right" popoverTitle="Scrollable Content" popover={<div id="scrollPopover" className="scroll-content" tabIndex={0} role="region" aria-label="Scrollable content area">
              <h4>Scrollable Content</h4>
              <p>This popover has a maximum height and shows a scrollbar when content exceeds that height.</p>
              <h5>Features:</h5>
              <ul>
                <li>Real-time messaging capabilities</li>
                <li>Multi-channel support (web, mobile, social)</li>
                <li>Advanced analytics and reporting</li>
                <li>Integration with CRM systems</li>
                <li>Automated workflow management</li>
                <li>Customer journey tracking</li>
                <li>AI-powered insights</li>
                <li>Customizable dashboards</li>
                <li>Team collaboration tools</li>
                <li>Performance metrics</li>
              </ul>
              <h5>Benefits:</h5>
              <ul>
                <li>Improved customer satisfaction</li>
                <li>Reduced response times</li>
                <li>Better resource allocation</li>
                <li>Enhanced team productivity</li>
                <li>Data-driven decision making</li>
              </ul>
            </div>}>
          <SOLButton variant="primary" size="large" ariaLabel="Scrollable Popover" icon={clipboardIcon}>
            Scrollable Popover
          </SOLButton>
        </SOLPopover>
      </div>
      <style>{`
        .popover-demo-container {
          padding-top: 5rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .scroll-content {
          padding: 0 var(--sol-size-spacing-sm);
        }
        .scroll-content h4, .scroll-content h5 {
          margin-top: var(--sol-size-spacing-sm);
          margin-bottom: var(--sol-size-spacing-sm);
        }
        .scroll-content ul {
          margin: var(--sol-size-spacing-sm) 0;
          padding-left: var(--sol-size-spacing-xl);
        }
        .scroll-content li { margin: var(--sol-size-spacing-xs) 0; }
      `}</style>
    </main>;
}
```

Rendered markup:
```html
<main role="main"><h1 class="sol-screenreader-only">Max height popover</h1><div class="popover-demo-container"><button type="button" tabindex="0" aria-label="Scrollable Popover" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></div></span></span><span class="projected-content">Scrollable Popover</span></button></div><style>
        .popover-demo-container {
          padding-top: 5rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .scroll-content {
          padding: 0 var(--sol-size-spacing-sm);
        }
        .scroll-content h4, .scroll-content h5 {
          margin-top: var(--sol-size-spacing-sm);
          margin-bottom: var(--sol-size-spacing-sm);
        }
        .scroll-content ul {
          margin: var(--sol-size-spacing-sm) 0;
          padding-left: var(--sol-size-spacing-xl);
        }
        .scroll-content li { margin: var(--sol-size-spacing-xs) 0; }
      </style></main>
```

## Examples / Max width Popover

Usage:
```tsx
() => {
  const wideRef = useRef<PopoverHandle>(null);
  const standardRef = useRef<PopoverHandle>(null);
  return <main role="main">
      <h1 className="sol-screenreader-only">Max width popover</h1>
      <div className="popover-demo-container column">
        <SOLPopover ref={wideRef} hideOnOutsideClick popoverId="wide-popover" placement="bottom" popoverTitle="Wide Popover" maxWidth={500} popover={<div className="wide-content">
              <p>This popover demonstrates maximum width constraint. The content will wrap within the specified width limit.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <div className="info-box">
                <strong>Note:</strong> The maxWidth property controls how wide the popover can be before content wraps to the next line.
              </div>
            </div>}>
          <SOLButton variant="primary" size="large" ariaLabel="Wide Popover" icon={clipboardIcon}>
            Wide Popover
          </SOLButton>
        </SOLPopover>

        <div style={{
        marginTop: '2rem'
      }}>
          <SOLPopover ref={standardRef} hideOnOutsideClick popoverId="standard-popover" placement="bottom" popoverTitle="Standard Popover" popover={<div className="standard-content">
                <p>This is a standard popover with default maxWidth (384px) for comparison.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              </div>}>
            <SOLButton variant="secondary" size="large" ariaLabel="Standard Width" icon={clipboardIcon}>
              Standard Width
            </SOLButton>
          </SOLPopover>
        </div>
      </div>
      <style>{`
        .popover-demo-container {
          padding-top: 5rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popover-demo-container.column { flex-direction: column; }
        .wide-content, .standard-content { padding: var(--sol-size-spacing-sm); }
        .wide-content p, .standard-content p { margin: var(--sol-size-spacing-sm) 0; }
        .info-box {
          background-color: var(--sol-color-neutral-2);
          padding: var(--sol-size-spacing-md);
          border-radius: 4px;
          margin-top: var(--sol-size-spacing-lg);
        }
      `}</style>
    </main>;
}
```

Rendered markup:
```html
<main role="main"><h1 class="sol-screenreader-only">Max width popover</h1><div class="popover-demo-container column"><button type="button" tabindex="0" aria-label="Wide Popover" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></div></span></span><span class="projected-content">Wide Popover</span></button><div style="margin-top: 2rem;"><button type="button" tabindex="0" aria-label="Standard Width" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></div></span></span><span class="projected-content">Standard Width</span></button></div></div><style>
        .popover-demo-container {
          padding-top: 5rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popover-demo-container.column { flex-direction: column; }
        .wide-content, .standard-content { padding: var(--sol-size-spacing-sm); }
        .wide-content p, .standard-content p { margin: var(--sol-size-spacing-sm) 0; }
        .info-box {
          background-color: var(--sol-color-neutral-2);
          padding: var(--sol-size-spacing-md);
          border-radius: 4px;
          margin-top: var(--sol-size-spacing-lg);
        }
      </style></main>
```

## Examples / Simple popover

Usage:
```tsx
({
  popoverTitle,
  popoverAriaLabel,
  popoverTrigger,
  popoverRole,
  placement,
  hideOnOutsideClick,
  contentType,
  arrow,
  maxWidth,
  popoverDisabled,
  interactive,
  delay,
  duration,
  popoverId,
  nativeButton
}) => {
  const popoverRef = useRef<PopoverHandle>(null);
  const doConfirm = () => {
    console.log('Confirmed!');
    popoverRef.current?.hide();
  };
  return <main role="main">
      <h1 className="sol-screenreader-only">Simple popover</h1>
      <div className="popover-demo-container">
        <SOLPopover ref={popoverRef} hideOnOutsideClick={hideOnOutsideClick} popoverId={popoverId} popoverTrigger={popoverTrigger} popoverRole={popoverRole} interactive={interactive} delay={delay} duration={duration} nativeButton={nativeButton} placement={placement} arrow={arrow} maxWidth={maxWidth} popoverDisabled={popoverDisabled} popoverTitle={popoverTitle} popoverAriaLabel={popoverAriaLabel} popover={contentType === 'menu' ? <ul role="menu" aria-label="Actions" className="popover-menu">
                <li role="none">
                  <button type="button" role="menuitem">
                    Edit
                  </button>
                </li>
                <li role="none">
                  <button type="button" role="menuitem">
                    Duplicate
                  </button>
                </li>
                <li role="none">
                  <button type="button" role="menuitem" onClick={() => popoverRef.current?.hide()}>
                    Delete
                  </button>
                </li>
              </ul> : contentType === 'form' ? <form onSubmit={e => {
        e.preventDefault();
        popoverRef.current?.hide();
      }}>
                <label htmlFor="popover-name">Name</label>
                <input id="popover-name" type="text" />
                <div className="popover-buttons">
                  <SOLButton size="medium" variant="secondary" onButtonClick={() => popoverRef.current?.hide()}>
                    Cancel
                  </SOLButton>
                  <SOLButton size="medium" onButtonClick={doConfirm}>
                    Save
                  </SOLButton>
                </div>
              </form> : <>
                <p className="popover-content">This is a simple popover with text content and action buttons.</p>
                <div className="popover-buttons">
                  <SOLButton size="medium" variant="secondary" onButtonClick={() => popoverRef.current?.hide()}>
                    Cancel
                  </SOLButton>
                  <SOLButton size="medium" onButtonClick={doConfirm}>
                    Confirm
                  </SOLButton>
                </div>
              </>}>
          <SOLButton variant="primary" size="large" ariaLabel="Simple Popover" icon={clipboardIcon}>
            Simple Popover
          </SOLButton>
        </SOLPopover>
      </div>
      <style>{`
        .popover-demo-container {
          padding-top: 5rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
        }
        .popover-content { margin-bottom: 0; }
        .popover-buttons {
          padding-top: var(--sol-size-spacing-lg);
          display: flex;
          gap: var(--sol-size-spacing-sm);
          justify-content: flex-end;
        }
      `}</style>
    </main>;
}
```

Rendered markup:
```html
<main role="main"><h1 class="sol-screenreader-only">Simple popover</h1><div class="popover-demo-container"><button type="button" tabindex="0" aria-label="Simple Popover" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></div></span></span><span class="projected-content">Simple Popover</span></button></div><style>
        .popover-demo-container {
          padding-top: 5rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
        }
        .popover-content { margin-bottom: 0; }
        .popover-buttons {
          padding-top: var(--sol-size-spacing-lg);
          display: flex;
          gap: var(--sol-size-spacing-sm);
          justify-content: flex-end;
        }
      </style></main>
```
