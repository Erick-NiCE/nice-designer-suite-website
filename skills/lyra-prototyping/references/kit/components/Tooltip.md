# Tooltip (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/Popover.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-icon-template-wrapper`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Overflow Tooltip

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Overflow Tooltip</h1>
    </header>
    <main role="main">
      <div style={{
      width: '100%',
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '25px'
    }}>
        <SOLTooltip overflowOnly={args.overflowOnly} tooltip={args.buttonTextShort} placement="bottom">
          <button id="button-1" style={{
          width: '95px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          display: 'block',
          textOverflow: 'ellipsis',
          fontSize: '0.8125rem',
          lineHeight: 0.975,
          padding: '0.5rem 0.938rem',
          borderRadius: '0.25rem',
          border: '0.063rem solid #b0cddb',
          color: '#003d7a',
          backgroundColor: '#fff'
        }}>
            {args.buttonTextShort}
          </button>
        </SOLTooltip>
        <SOLTooltip overflowOnly={args.overflowOnly} tooltip={args.buttonTextLong} placement="bottom">
          <button id="button-2" style={{
          width: '95px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          display: 'block',
          textOverflow: 'ellipsis',
          fontSize: '0.8125rem',
          lineHeight: 0.975,
          padding: '0.5rem 0.938rem',
          borderRadius: '0.25rem',
          border: '0.063rem solid #b0cddb',
          color: '#003d7a',
          backgroundColor: '#fff'
        }}>
            {args.buttonTextLong}
          </button>
        </SOLTooltip>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Overflow Tooltip</h1></header><main role="main"><div style="width: 100%; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 25px;"><button id="button-1" data-base-ui-tooltip-trigger="" style="width: 95px; overflow: hidden; white-space: nowrap; display: block; text-overflow: ellipsis; font-size: 0.8125rem; line-height: 0.975; padding: 0.5rem 0.938rem; border-radius: 0.25rem; border: 0.063rem solid rgb(176, 205, 219); color: rgb(0, 61, 122); background-color: rgb(255, 255, 255);">Short text</button><button id="button-2" data-base-ui-tooltip-trigger="" style="width: 95px; overflow: hidden; white-space: nowrap; display: block; text-overflow: ellipsis; font-size: 0.8125rem; line-height: 0.975; padding: 0.5rem 0.938rem; border-radius: 0.25rem; border: 0.063rem solid rgb(176, 205, 219); color: rgb(0, 61, 122); background-color: rgb(255, 255, 255);">Very long text Very long text Very long text</button></div></main>
```

## Examples / Tooltip

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Tooltip with different positions</h1>
    </header>
    <main role="main">
      <div className="tooltip-container">
        <SOLTooltip placement="top" tooltip={longText('top')} tooltipId="tooltip-1" interactive={args.interactive} arrow={args.arrow} tooltipTrigger={args.tooltipTrigger} ariaDescribedByDisabled={args.ariaDescribedByDisabled} delay={args.delay} maxWidth={args.maxWidth} duration={args.duration}>
          <SOLButton variant="primary" size="large" ariaLabel="Help" icon={HelpIcon} id="tooltip-trigger-1" />
        </SOLTooltip>
        <SOLTooltip placement="right" tooltip={longText('right')} tooltipId="tooltip-7" interactive={args.interactive} arrow={args.arrow} tooltipTrigger={args.tooltipTrigger} ariaDescribedByDisabled={args.ariaDescribedByDisabled} delay={args.delay} maxWidth={args.maxWidth} duration={args.duration}>
          <SOLButton variant="primary" size="large" ariaLabel="Help" icon={HelpIcon} id="tooltip-trigger-7" />
        </SOLTooltip>
        <SOLTooltip placement="bottom" tooltip={longText('bottom')} tooltipId="tooltip-4" interactive={args.interactive} arrow={args.arrow} tooltipTrigger={args.tooltipTrigger} ariaDescribedByDisabled={args.ariaDescribedByDisabled} delay={args.delay} maxWidth={args.maxWidth} duration={args.duration}>
          <SOLButton variant="primary" size="large" ariaLabel="Help" icon={HelpIcon} id="tooltip-trigger-4" />
        </SOLTooltip>
        <SOLTooltip placement="left" tooltip={longText('left')} tooltipId="tooltip-10" interactive={args.interactive} arrow={args.arrow} tooltipTrigger={args.tooltipTrigger} ariaDescribedByDisabled={args.ariaDescribedByDisabled} delay={args.delay} maxWidth={args.maxWidth} duration={args.duration}>
          <SOLButton variant="primary" size="large" ariaLabel="Help" icon={HelpIcon} id="tooltip-trigger-10" />
        </SOLTooltip>
      </div>
      <header>
        <h1 className="sol-screenreader-only">One line tooltip text with arrow</h1>
      </header>
      <div className="tooltip-container">
        <SOLTooltip placement="right" tooltip="Tooltips are used to describe." tooltipId="tooltip-11" interactive={args.interactive} arrow={args.arrow} tooltipTrigger={args.tooltipTrigger} ariaDescribedByDisabled={args.ariaDescribedByDisabled} delay={args.delay} maxWidth={args.maxWidth} duration={args.duration}>
          <SOLButton variant="primary" size="large" ariaLabel="Help" icon={HelpIcon} id="tooltip-trigger-11" />
        </SOLTooltip>
        <SOLTooltip placement="left" tooltip="Tooltips are used to describe." tooltipId="tooltip-12" hideOnOutsideClick interactive={args.interactive} arrow={args.arrow} tooltipTrigger={args.tooltipTrigger} ariaDescribedByDisabled={args.ariaDescribedByDisabled} delay={args.delay} maxWidth={args.maxWidth} duration={args.duration}>
          <SOLButton variant="primary" size="large" ariaLabel="Help" icon={HelpIcon} id="tooltip-trigger-12" />
        </SOLTooltip>
      </div>
      <style>{`
        .tooltip-container {
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
        }
        @media only screen and (max-width: 730px) {
          .tooltip-container { flex-direction: column; }
        }
      `}</style>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Tooltip with different positions</h1></header><main role="main"><div class="tooltip-container"><button type="button" id="tooltip-trigger-1" aria-label="Help" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><img alt="help logo" src="./assets/Help.svg"></span></span></span><span class="projected-content"></span></button><button type="button" id="tooltip-trigger-7" aria-label="Help" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><img alt="help logo" src="./assets/Help.svg"></span></span></span><span class="projected-content"></span></button><button type="button" id="tooltip-trigger-4" aria-label="Help" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><img alt="help logo" src="./assets/Help.svg"></span></span></span><span class="projected-content"></span></button><button type="button" id="tooltip-trigger-10" aria-label="Help" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><img alt="help logo" src="./assets/Help.svg"></span></span></span><span class="projected-content"></span></button></div><header><h1 class="sol-screenreader-only">One line tooltip text with arrow</h1></header><div class="tooltip-container"><button type="button" id="tooltip-trigger-11" aria-label="Help" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><img alt="help logo" src="./assets/Help.svg"></span></span></span><span class="projected-content"></span></button><button type="button" id="tooltip-trigger-12" aria-label="Help" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><img alt="help logo" src="./assets/Help.svg"></span></span></span><span class="projected-content"></span></button></div><style>
        .tooltip-container {
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
        }
        @media only screen and (max-width: 730px) {
          .tooltip-container { flex-direction: column; }
        }
      </style></main>
```

## Examples / Tooltip With Binding

Usage:
```tsx
args => {
  const tooltipRef = useRef<TooltipHandle>(null);
  const tooltip2Ref = useRef<TooltipHandle>(null);
  const [disabled, setDisabled] = useState<boolean>(!!args.disabled);
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Tooltip with bindings</h1>
      </header>
      <main role="main">
        <div style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        marginLeft: '-25px'
      }}>
          <SOLTooltip ref={tooltipRef} placement="bottom" hideOnOutsideClick={false} tooltipId="my-id-1" appendTo={args.appendTo === 'main' ? 'main' : undefined} tooltip="Tooltip 1">
            <SOLButton id="sol-button-1" variant="primary" size="large">
              Test
            </SOLButton>
          </SOLTooltip>
          <SOLButton id="sol-button-2" variant="secondary" size="large" onButtonClick={() => tooltipRef.current?.show()}>
            show
          </SOLButton>
          <SOLButton id="sol-button-3" variant="secondary" size="large" onButtonClick={() => tooltipRef.current?.hide()}>
            hide
          </SOLButton>
          <SOLButton id="sol-button-4" variant="secondary" size="large" onButtonClick={() => tooltipRef.current?.toggle()}>
            toggle
          </SOLButton>
        </div>
        <div style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px'
      }}>
          <SOLTooltip ref={tooltip2Ref} tooltipId="my-id" tooltipDisabled={disabled} placement="bottom" hideOnOutsideClick={false} tooltip="Tooltip 2" onShown={() => setIsOpen(true)} onHidden={() => setIsOpen(false)}>
            <SOLButton id="sol-button-5" variant="primary" size="large">
              Test 2
            </SOLButton>
          </SOLTooltip>
          <SOLButton id="sol-button-6" variant="secondary" size="large" onButtonClick={() => tooltip2Ref.current?.show()}>
            show
          </SOLButton>
          <SOLButton id="sol-button-7" variant="secondary" size="large" onButtonClick={() => tooltip2Ref.current?.hide()}>
            hide
          </SOLButton>
          <SOLButton id="sol-button-8" variant="secondary" size="large" onButtonClick={() => setDisabled(d => !d)}>
            {disabled ? 'enable' : 'disable'} the tooltip
          </SOLButton>
          <p className="common-text tooltip-state">
            Tooltip Shown: <b>{String(isOpen)}</b>
          </p>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Tooltip with bindings</h1></header><main role="main"><div style="width: 100%; height: 200px; display: flex; justify-content: center; align-items: center; gap: 25px; margin-left: -25px;"><button type="button" id="sol-button-1" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="projected-content">Test</span></button><button type="button" id="sol-button-2" class="sol-button btn-secondary-large"><span class="projected-content">show</span></button><button type="button" id="sol-button-3" class="sol-button btn-secondary-large"><span class="projected-content">hide</span></button><button type="button" id="sol-button-4" class="sol-button btn-secondary-large"><span class="projected-content">toggle</span></button></div><div style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center; gap: 25px;"><button type="button" id="sol-button-5" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="projected-content">Test 2</span></button><button type="button" id="sol-button-6" class="sol-button btn-secondary-large"><span class="projected-content">show</span></button><button type="button" id="sol-button-7" class="sol-button btn-secondary-large"><span class="projected-content">hide</span></button><button type="button" id="sol-button-8" class="sol-button btn-secondary-large"><span class="projected-content">disable the tooltip</span></button><p class="common-text tooltip-state">Tooltip Shown: <b>false</b></p></div></main>
```

## Examples / Tooltip With Function

Usage:
```tsx
() => {
  const tooltip1Ref = useRef<TooltipHandle>(null);
  const tooltip2Ref = useRef<TooltipHandle>(null);
  const tooltip3Ref = useRef<TooltipHandle>(null);
  const row = (handleRef: React.RefObject<TooltipHandle>, startIndex: number) => <div style={{
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px'
  }}>
      <SOLTooltip ref={handleRef} placement="bottom" tooltip="This is a tooltip. Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.">
        <SOLButton id={`sol-button-${startIndex}`} variant="primary" size="large">
          Test
        </SOLButton>
      </SOLTooltip>
      <SOLButton id={`sol-button-${startIndex + 1}`} variant="secondary" size="large" onButtonClick={() => handleRef.current?.show()}>
        show
      </SOLButton>
      <SOLButton id={`sol-button-${startIndex + 2}`} variant="secondary" size="large" onButtonClick={() => handleRef.current?.hide()}>
        hide
      </SOLButton>
      <SOLButton id={`sol-button-${startIndex + 3}`} variant="secondary" size="large" onButtonClick={() => handleRef.current?.toggle()}>
        toggle
      </SOLButton>
    </div>;
  return <>
      <header>
        <h1 className="sol-screenreader-only">Tooltip with functions</h1>
      </header>
      <main role="main">
        {row(tooltip1Ref, 1)}
        {row(tooltip2Ref, 5)}
        {row(tooltip3Ref, 9)}
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Tooltip with functions</h1></header><main role="main"><div style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center; gap: 25px;"><button type="button" id="sol-button-1" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="projected-content">Test</span></button><button type="button" id="sol-button-2" class="sol-button btn-secondary-large"><span class="projected-content">show</span></button><button type="button" id="sol-button-3" class="sol-button btn-secondary-large"><span class="projected-content">hide</span></button><button type="button" id="sol-button-4" class="sol-button btn-secondary-large"><span class="projected-content">toggle</span></button></div><div style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center; gap: 25px;"><button type="button" id="sol-button-5" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="projected-content">Test</span></button><button type="button" id="sol-button-6" class="sol-button btn-secondary-large"><span class="projected-content">show</span></button><button type="button" id="sol-button-7" class="sol-button btn-secondary-large"><span class="projected-content">hide</span></button><button type="button" id="sol-button-8" class="sol-button btn-secondary-large"><span class="projected-content">toggle</span></button></div><div style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center; gap: 25px;"><button type="button" id="sol-button-9" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="projected-content">Test</span></button><button type="button" id="sol-button-10" class="sol-button btn-secondary-large"><span class="projected-content">show</span></button><button type="button" id="sol-button-11" class="sol-button btn-secondary-large"><span class="projected-content">hide</span></button><button type="button" id="sol-button-12" class="sol-button btn-secondary-large"><span class="projected-content">toggle</span></button></div></main>
```

## Examples / Tooltip With View Child

Usage:
```tsx
() => {
  const refA = useRef<PopoverHandle>(null);
  const refB = useRef<PopoverHandle>(null);
  const refC = useRef<PopoverHandle>(null);
  const doChange = () => {
    console.log('doChange...');
    refA.current?.hide();
    refB.current?.hide();
    refC.current?.hide();
  };
  const hideA = () => refA.current?.hide();
  const hideB = () => refB.current?.hide();
  const hideC = () => refC.current?.hide();
  return <>
      <header>
        <h1 className="sol-screenreader-only">Tooltip with functions</h1>
      </header>
      <main role="main">
        <div className="tooltip-with-view-child-container">
          <SOLPopover ref={refA} hideOnOutsideClick popoverId="tooltip-1" placement="top" popoverTitle="Popover Title" maxWidth={380} popover={<>
                <p className="popover-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et manis dis parturient montes.
                </p>
                <div className="popover-buttons">
                  <SOLButton size="medium" variant="secondary" onButtonClick={hideA}>
                    Cancel
                  </SOLButton>
                  <SOLButton size="medium" onButtonClick={doChange}>
                    Confirm
                  </SOLButton>
                </div>
              </>}>
            <SOLButton variant="primary" size="large" ariaLabel="Change Status" icon={ClipboardIconWhite} />
          </SOLPopover>

          <SOLPopover ref={refB} hideOnOutsideClick popoverId="tooltip-2" placement="top" popoverTitle="Popover Title" maxWidth={220} arrow={false} popover={<>
                <p className="popover-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                </p>
                <div className="popover-buttons">
                  <SOLButton size="medium" variant="secondary" onButtonClick={hideB}>
                    Cancel
                  </SOLButton>
                  <SOLButton size="medium" onButtonClick={doChange}>
                    Confirm
                  </SOLButton>
                </div>
              </>}>
            <SOLButton variant="primary" size="large" ariaLabel="Change Status" icon={ClipboardIconWhite} />
          </SOLPopover>

          <SOLPopover ref={refC} hideOnOutsideClick popoverId="tooltip-3" placement="top" popoverTitle="Popover Title" popover={<div className="popover-buttons">
                <SOLButton size="medium" variant="secondary" onButtonClick={hideC}>
                  Cancel
                </SOLButton>
                <SOLButton size="medium" onButtonClick={doChange}>
                  Confirm
                </SOLButton>
              </div>}>
            <SOLButton variant="primary" size="large" ariaLabel="Change Status" icon={ClipboardIconWhite} />
          </SOLPopover>
        </div>
        <style>{`
          .tooltip-with-view-child-container {
            padding-top: 5rem;
            min-height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 35px;
          }
          .popover-content {
            letter-spacing: 0.0125rem;
            max-height: 6rem;
            margin-top: 0.2rem;
            margin-bottom: 0;
            overflow: hidden;
            line-height: 1rem;
            font-size: 0.9375rem;
            font-weight: 400;
            font-family: var(--sol-typography-body-md-font-family);
            color: var(--sol-color-text-default);
            opacity: var(--sol-base-opacity-60);
          }
          .popover-buttons {
            padding-top: 1rem;
            display: flex;
            gap: 0.5rem;
            justify-content: right;
          }
          @media only screen and (max-width: 330px) {
            .tooltip-with-view-child-container { flex-direction: column; }
          }
        `}</style>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Tooltip with functions</h1></header><main role="main"><div class="tooltip-with-view-child-container"><button type="button" tabindex="0" aria-label="Change Status" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="20" height="20" aria-hidden="true" style="fill: rgb(255, 255, 255);"><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></span></span></span><span class="projected-content"></span></button><button type="button" tabindex="0" aria-label="Change Status" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="20" height="20" aria-hidden="true" style="fill: rgb(255, 255, 255);"><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></span></span></span><span class="projected-content"></span></button><button type="button" tabindex="0" aria-label="Change Status" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" data-base-ui-tooltip-trigger="" class="sol-button btn-primary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg width="20" height="20" aria-hidden="true" style="fill: rgb(255, 255, 255);"><use href="./assets/application-icons.svg#icon-clipboard"></use></svg></span></span></span><span class="projected-content"></span></button></div><style>
          .tooltip-with-view-child-container {
            padding-top: 5rem;
            min-height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 35px;
          }
          .popover-content {
            letter-spacing: 0.0125rem;
            max-height: 6rem;
            margin-top: 0.2rem;
            margin-bottom: 0;
            overflow: hidden;
            line-height: 1rem;
            font-size: 0.9375rem;
            font-weight: 400;
            font-family: var(--sol-typography-body-md-font-family);
            color: var(--sol-color-text-default);
            opacity: var(--sol-base-opacity-60);
          }
          .popover-buttons {
            padding-top: 1rem;
            display: flex;
            gap: 0.5rem;
            justify-content: right;
          }
          @media only screen and (max-width: 330px) {
            .tooltip-with-view-child-container { flex-direction: column; }
          }
        </style></main>
```
