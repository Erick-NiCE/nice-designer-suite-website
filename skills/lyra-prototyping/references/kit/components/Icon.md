# Icon (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Icon.css`, `css/Tooltip.css`.
Component classes: `sol-icon`, `sol-icon-host`, `sol-icon-template-wrapper`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / String Input

Usage:
```tsx
args => <>
    <style>{`
      pre {
        padding-left: var(--sol-size-spacing-md);
        margin: 0;
        white-space: pre-wrap;
        color: inherit;
        font-size: var(--sol-size-spacing-sm);
        line-height: var(--sol-size-spacing-lg);
        margin: var(--sol-size-spacing-md) 0;
        color: #666;
      }
      .icon-row {
        display: flex;
        gap: var(--sol-size-spacing-md);
      }
      .icon-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--sol-size-spacing-md);
      }
    `}</style>
    <main>
      {/* Please do not remove this div. It mimics the CXone environment and allows icons to be accessed
          by a simple symbol like '#icon-lock-script' without the need to specify the path also. */}
      {lockScriptSprite}

      <h1 className="sol-screenreader-only">String Icon</h1>

      <div className="icon-row">
        <div id="icon-inputs" className="icon-col">
          <h2 className="heading-sm">Multiple Inputs</h2>
          <SOLIcon icon={args.icon} className={args.className} height={args.height} width={args.width} fill={args.fill} style={args.style} ariaLabel={args.ariaLabel} tooltipLabel={args.tooltipLabel} tooltipConfig={tooltipConfigFrom(args)} />
          <pre>{`<SOLIcon
    icon="string"
    fill="string"
    ...`}</pre>
        </div>
        <div id="icon-object" className="icon-col">
          <h2 className="heading-sm">Single Object</h2>
          <SOLIcon icon={{
          icon: args.icon,
          className: args.className,
          height: args.height,
          width: args.width,
          fill: args.fill,
          style: args.style,
          ariaLabel: args.ariaLabel,
          tooltipLabel: args.tooltipLabel,
          tooltipConfig: tooltipConfigFrom(args)
        }} />
          <pre>{`<SOLIcon icon={{
    icon: 'string',
    fill: 'string',
    ...`}</pre>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<style>
      pre {
        padding-left: var(--sol-size-spacing-md);
        margin: 0;
        white-space: pre-wrap;
        color: inherit;
        font-size: var(--sol-size-spacing-sm);
        line-height: var(--sol-size-spacing-lg);
        margin: var(--sol-size-spacing-md) 0;
        color: #666;
      }
      .icon-row {
        display: flex;
        gap: var(--sol-size-spacing-md);
      }
      .icon-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--sol-size-spacing-md);
      }
    </style><main><div class="nice-icon-sprite" data-spritename="navigation" data-spriteurl="/common_svg_icons/svg/navigation-icons-1622706561625.svg" style="display: none;"><svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol xmlns="http://www.w3.org/2000/svg" id="icon-lock-script" viewBox="0 0 32 32"><path d="M15.91 27.19zc0 .88-.71 1.6-1.59 1.6H3.19c-.89 0-1.61-.73-1.61-1.61V1.6c0-.89.72-1.61 1.61-1.61h16.39c.42 0 .82.17 1.13.47l6 6c.29.3.46.7.47 1.13v5.18h-.001c0 .88-.72 1.61-1.6 1.61h-.01v-.001c-.89-.01-1.61-.73-1.6-1.61V8.25h-4.11a.94.94 0 0 1-.9-.95V3.21H4.77v22.33l9.5-.001c.88-.01 1.6.71 1.6 1.59 0 0-.01 0-.01.01zm-5.15-16.26c-.47-.48-1.23-.48-1.7-.02-.01 0-.01 0-.02.01L6.46 13.6c-.46.46-.46 1.21 0 1.68l2.58 2.71h-.01c.22.23.54.36.87.37.31-.01.61-.13.84-.34.46-.48.46-1.24 0-1.71l-1.76-1.87 1.76-1.82c.46-.48.46-1.23 0-1.7zm11.58 2.68c.45.46.45 1.21 0 1.68L19.76 18c-.23.23-.55.36-.87.37a1.27 1.27 0 0 1-.84-.34c-.48-.47-.48-1.23-.02-1.7 0-.01 0-.01.01-.02l1.76-1.82-1.81-1.87c-.47-.46-.48-1.22-.02-1.69 0-.01.01-.02.01-.02a1.19 1.19 0 0 1 1.69-.02l.01.01zm-5.11-3.45-3.38 9.3c-.18.48-.63.8-1.14.8-.15-.01-.28-.04-.41-.08-.63-.23-.95-.92-.72-1.54L15 9.34c.27-.62.98-.89 1.59-.62.54.24.83.85.67 1.43zM30.4 22.4h-.89v-1.6a3.999 3.999 0 1 0-8 0v1.6h-.71c-.89 0-1.6.71-1.6 1.6v6.4c0 .88.71 1.6 1.6 1.6h9.6c.88 0 1.6-.72 1.6-1.6V24c0-.89-.72-1.6-1.6-1.6m-6.49-1.6c-.01-.89.71-1.6 1.6-1.6.88-.01 1.6.71 1.6 1.6v1.6h-3.2zm2.49 7v1c0 .44-.36.8-.8.8-.45 0-.8-.36-.8-.8v-1.05c-.5-.28-.8-.79-.8-1.35 0-.89.71-1.6 1.6-1.6.88 0 1.6.71 1.6 1.6h-.001c-.01.56-.31 1.07-.8 1.35z"></path></symbol></svg></div><h1 class="sol-screenreader-only">String Icon</h1><div class="icon-row"><div id="icon-inputs" class="icon-col"><h2 class="heading-sm">Multiple Inputs</h2><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="fill:var(--sol-color-icon-status-info);width:var(--sol-size-icon-lg);height:var(--sol-size-icon-lg);"><use href="./assets/application-icons.svg#icon-Activity-History"></use></svg></div></span><pre>&lt;SOLIcon
    icon="string"
    fill="string"
    ...</pre></div><div id="icon-object" class="icon-col"><h2 class="heading-sm">Single Object</h2><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="fill:var(--sol-color-icon-status-info);width:var(--sol-size-icon-lg);height:var(--sol-size-icon-lg);"><use href="./assets/application-icons.svg#icon-Activity-History"></use></svg></div></span><pre>&lt;SOLIcon icon={{
    icon: 'string',
    fill: 'string',
    ...</pre></div></div></main>
```

## Examples / Template Input

Usage:
```tsx
args => <>
    <style>{`
      pre {
        padding-left: 15px;
        margin: 0px;
        white-space: pre-wrap;
        color: inherit;
        font-size: 13px;
        line-height: 19px;
        margin: 1rem 0;
        color: #666;
      }
      .icon-row {
        display: flex;
        gap: 16px;
      }
      .icon-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    `}</style>
    <main>
      <h1 className="sol-screenreader-only">Template icon</h1>
      <div className="icon-row">
        <div className="icon-col">
          <h2 className="heading-sm">Simple Input</h2>
          <SOLIcon icon={args.iconType === 'decorative' ? saveIconDecorative : saveIconInformative} tooltipLabel={args.iconType === 'decorative' ? '' : args.tooltipLabel} />
          <pre>{`<SOLIcon
    icon={<svg />}
/>`}</pre>
        </div>
        <div className="icon-col">
          <h2 className="heading-sm">Single Object</h2>
          <SOLIcon icon={{
          icon: args.iconType === 'decorative' ? saveIconDecorative : saveIconInformative,
          tooltipLabel: args.iconType === 'decorative' ? '' : args.tooltipLabel
        }} />
          <pre>{`<SOLIcon icon={{
    icon: <svg />
}} />`}</pre>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<style>
      pre {
        padding-left: 15px;
        margin: 0px;
        white-space: pre-wrap;
        color: inherit;
        font-size: 13px;
        line-height: 19px;
        margin: 1rem 0;
        color: #666;
      }
      .icon-row {
        display: flex;
        gap: 16px;
      }
      .icon-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    </style><main><h1 class="sol-screenreader-only">Template icon</h1><div class="icon-row"><div class="icon-col"><h2 class="heading-sm">Simple Input</h2><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper" data-base-ui-tooltip-trigger=""><svg tabindex="0" role="button" aria-label="Save" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32" fill="var(--sol-color-icon-status-info)" style="cursor: pointer;"><path d="M28.8 0H3.2A3.21 3.21 0 000 3.2v25.6C0 30.56 1.44 32 3.2 32h25.6c1.76 0 3.2-1.44 3.2-3.2V3.2C32 1.44 30.56 0 28.8 0zM6.4 12.8h19.2V3.2h3.2v25.6h-3.2V16H6.4v12.8H3.2V3.2h3.2v9.6zm3.2-3.2V3.2h12.8v6.4H9.6zm0 19.2v-9.6h12.8v9.6H9.6z"></path><path d="M20.8 4.8h-3.2V8h3.2V4.8z"></path></svg></span></span><pre>&lt;SOLIcon
    icon={&lt;svg /&gt;}
/&gt;</pre></div><div class="icon-col"><h2 class="heading-sm">Single Object</h2><span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper" data-base-ui-tooltip-trigger=""><svg tabindex="0" role="button" aria-label="Save" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32" fill="var(--sol-color-icon-status-info)" style="cursor: pointer;"><path d="M28.8 0H3.2A3.21 3.21 0 000 3.2v25.6C0 30.56 1.44 32 3.2 32h25.6c1.76 0 3.2-1.44 3.2-3.2V3.2C32 1.44 30.56 0 28.8 0zM6.4 12.8h19.2V3.2h3.2v25.6h-3.2V16H6.4v12.8H3.2V3.2h3.2v9.6zm3.2-3.2V3.2h12.8v6.4H9.6zm0 19.2v-9.6h12.8v9.6H9.6z"></path><path d="M20.8 4.8h-3.2V8h3.2V4.8z"></path></svg></span></span><pre>&lt;SOLIcon icon={{
    icon: &lt;svg /&gt;
}} /&gt;</pre></div></div></main>
```

## OverviewExamples / Decorative Icon

Usage:
```tsx
story(<SOLIcon icon="./assets/application-icons.svg#icon-help" />)
```

Rendered markup:
```html
<span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-help"></use></svg></div></span>
```

## OverviewExamples / Informative Icon

Usage:
```tsx
story(<SOLIcon icon="./assets/application-icons.svg#icon-help" ariaLabel="Icon label" />)
```

Rendered markup:
```html
<span class="sol-icon-host"><div class="sol-icon" role="img" aria-label="Icon label" tabindex="0" data-base-ui-tooltip-trigger=""><svg><use href="./assets/application-icons.svg#icon-help"></use></svg></div></span>
```

## OverviewExamples / Object Input Icon

Usage:
```tsx
story(<SOLIcon icon={{
  icon: './assets/application-icons.svg#icon-help'
}} />)
```

Rendered markup:
```html
<span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg><use href="./assets/application-icons.svg#icon-help"></use></svg></div></span>
```

## OverviewExamples / Template Input Icon

Usage:
```tsx
story(<SOLIcon icon={<svg tabIndex={0} role="button" aria-label="Save" style={{
  cursor: 'pointer'
}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={32} width={32} fill="var(--sol-color-icon-status-info)">
        <title>Save</title>
        <path d="M28.8 0H3.2A3.21 3.21 0 000 3.2v25.6C0 30.56 1.44 32 3.2 32h25.6c1.76 0 3.2-1.44 3.2-3.2V3.2C32 1.44 30.56 0 28.8 0zM6.4 12.8h19.2V3.2h3.2v25.6h-3.2V16H6.4v12.8H3.2V3.2h3.2v9.6zm3.2-3.2V3.2h12.8v6.4H9.6zm0 19.2v-9.6h12.8v9.6H9.6z" />
        <path d="M20.8 4.8h-3.2V8h3.2V4.8z" />
      </svg>} />)
```

Rendered markup:
```html
<span class="sol-icon-host"><span tabindex="-1" class="sol-icon-template-wrapper"><svg tabindex="0" role="button" aria-label="Save" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32" fill="var(--sol-color-icon-status-info)" style="cursor: pointer;"><title>Save</title><path d="M28.8 0H3.2A3.21 3.21 0 000 3.2v25.6C0 30.56 1.44 32 3.2 32h25.6c1.76 0 3.2-1.44 3.2-3.2V3.2C32 1.44 30.56 0 28.8 0zM6.4 12.8h19.2V3.2h3.2v25.6h-3.2V16H6.4v12.8H3.2V3.2h3.2v9.6zm3.2-3.2V3.2h12.8v6.4H9.6zm0 19.2v-9.6h12.8v9.6H9.6z"></path><path d="M20.8 4.8h-3.2V8h3.2V4.8z"></path></svg></span></span>
```

## OverviewExamples / Tooltip Icon

Usage:
```tsx
story(<SOLIcon icon="./assets/application-icons.svg#icon-help" ariaLabel="Icon label" tooltipLabel="Icon tooltip" />)
```

Rendered markup:
```html
<span class="sol-icon-host"><div class="sol-icon" role="img" aria-label="Icon label" tabindex="0" data-base-ui-tooltip-trigger=""><svg><use href="./assets/application-icons.svg#icon-help"></use></svg></div></span>
```
