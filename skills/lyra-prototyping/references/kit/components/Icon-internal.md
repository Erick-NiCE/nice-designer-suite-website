# Icon (internal) (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Icon.css`, `css/Tooltip.css`.
Component classes: `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples

Usage:
```tsx
args => {
  const doSomething = action('clicked!');
  return <>
      <style>{`
        pre {
          padding-left: var(--sol-size-spacing-md);
          margin: var(--sol-size-spacing-md) 0;
          white-space: pre-wrap;
          color: var(--sol-color-text-default);
          font-size: var(--sol-size-spacing-sm);
          line-height: var(--sol-size-spacing-lg);
        }
        .internal-icon-row {
          display: flex;
          gap: var(--sol-size-spacing-md);
        }
        .internal-icon-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sol-size-spacing-md);
        }
      `}</style>
      <main>
        {/* Please do not remove this div. It mimics the CXone environment and allows icons to be accessed in one of the examples
            by a simple symbol like '#icon-lock-script' without the need to specifying the path also. */}
        {lockScriptSprite}

        <h1 className="sol-screenreader-only">String Icon</h1>

        {/* Please do not remove either of these icons. There are two icons on this page so we can verify
            internally that the two approaches both produce the same icon without regression. */}
        <div className="internal-icon-row">
          <div id="icon-inputs" className="internal-icon-col">
            <h2 className="heading-sm">Multiple Inputs</h2>
            <SOLIcon iconClick={args.addIconClick ? doSomething : undefined} icon={args.icon} className={args.className} height={args.height} width={args.width} fill={args.fill} style={args.style} ariaLabel={args.ariaLabel} tooltipLabel={args.tooltipLabel} />
            <pre>{`<SOLIcon
    icon="string"
    fill="string"
    ...`}</pre>
          </div>
          <div id="icon-object" className="internal-icon-col">
            <h2 className="heading-sm">Single Object</h2>
            <SOLIcon icon={{
            iconClick: args.addIconClick ? doSomething : undefined,
            icon: args.icon,
            className: args.className,
            height: args.height,
            width: args.width,
            fill: args.fill,
            style: args.style,
            ariaLabel: args.ariaLabel,
            tooltipLabel: args.tooltipLabel
          }} />
            <pre>{`<SOLIcon icon={{
    icon: 'string',
    fill: 'string',
    ...`}</pre>
          </div>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<style>
        pre {
          padding-left: var(--sol-size-spacing-md);
          margin: var(--sol-size-spacing-md) 0;
          white-space: pre-wrap;
          color: var(--sol-color-text-default);
          font-size: var(--sol-size-spacing-sm);
          line-height: var(--sol-size-spacing-lg);
        }
        .internal-icon-row {
          display: flex;
          gap: var(--sol-size-spacing-md);
        }
        .internal-icon-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sol-size-spacing-md);
        }
      </style><main><div class="nice-icon-sprite" data-spritename="navigation" data-spriteurl="/common_svg_icons/svg/navigation-icons-1622706561625.svg" style="display: none;"><svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol xmlns="http://www.w3.org/2000/svg" id="icon-lock-script" viewBox="0 0 32 32"><path d="M15.91 27.19zc0 .88-.71 1.6-1.59 1.6H3.19c-.89 0-1.61-.73-1.61-1.61V1.6c0-.89.72-1.61 1.61-1.61h16.39c.42 0 .82.17 1.13.47l6 6c.29.3.46.7.47 1.13v5.18h-.001c0 .88-.72 1.61-1.6 1.61h-.01v-.001c-.89-.01-1.61-.73-1.6-1.61V8.25h-4.11a.94.94 0 0 1-.9-.95V3.21H4.77v22.33l9.5-.001c.88-.01 1.6.71 1.6 1.59 0 0-.01 0-.01.01zm-5.15-16.26c-.47-.48-1.23-.48-1.7-.02-.01 0-.01 0-.02.01L6.46 13.6c-.46.46-.46 1.21 0 1.68l2.58 2.71h-.01c.22.23.54.36.87.37.31-.01.61-.13.84-.34.46-.48.46-1.24 0-1.71l-1.76-1.87 1.76-1.82c.46-.48.46-1.23 0-1.7zm11.58 2.68c.45.46.45 1.21 0 1.68L19.76 18c-.23.23-.55.36-.87.37a1.27 1.27 0 0 1-.84-.34c-.48-.47-.48-1.23-.02-1.7 0-.01 0-.01.01-.02l1.76-1.82-1.81-1.87c-.47-.46-.48-1.22-.02-1.69 0-.01.01-.02.01-.02a1.19 1.19 0 0 1 1.69-.02l.01.01zm-5.11-3.45-3.38 9.3c-.18.48-.63.8-1.14.8-.15-.01-.28-.04-.41-.08-.63-.23-.95-.92-.72-1.54L15 9.34c.27-.62.98-.89 1.59-.62.54.24.83.85.67 1.43zM30.4 22.4h-.89v-1.6a3.999 3.999 0 1 0-8 0v1.6h-.71c-.89 0-1.6.71-1.6 1.6v6.4c0 .88.71 1.6 1.6 1.6h9.6c.88 0 1.6-.72 1.6-1.6V24c0-.89-.72-1.6-1.6-1.6m-6.49-1.6c-.01-.89.71-1.6 1.6-1.6.88-.01 1.6.71 1.6 1.6v1.6h-3.2zm2.49 7v1c0 .44-.36.8-.8.8-.45 0-.8-.36-.8-.8v-1.05c-.5-.28-.8-.79-.8-1.35 0-.89.71-1.6 1.6-1.6.88 0 1.6.71 1.6 1.6h-.001c-.01.56-.31 1.07-.8 1.35z"></path></symbol></svg></div><h1 class="sol-screenreader-only">String Icon</h1><div class="internal-icon-row"><div id="icon-inputs" class="internal-icon-col"><h2 class="heading-sm">Multiple Inputs</h2><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="fill:var(--sol-color-icon-status-info);width:var(--sol-size-icon-lg);height:var(--sol-size-icon-lg);" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></span><pre>&lt;SOLIcon
    icon="string"
    fill="string"
    ...</pre></div><div id="icon-object" class="internal-icon-col"><h2 class="heading-sm">Single Object</h2><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="fill:var(--sol-color-icon-status-info);width:var(--sol-size-icon-lg);height:var(--sol-size-icon-lg);" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></span><pre>&lt;SOLIcon icon={{
    icon: 'string',
    fill: 'string',
    ...</pre></div></div></main>
```

## OverviewExamples / Icon Example

Usage:
```tsx
() => <SOLIcon icon="sol-plus" />
```

Rendered markup:
```html
<span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span>
```

## OverviewExamples / Icon With Click Example

Usage:
```tsx
() => <SOLIcon icon="sol-plus" iconClick={action('clicked!')} ariaLabel="iconButton" />
```

Rendered markup:
```html
<span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="iconButton" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></button></span>
```

## OverviewExamples / Predefined Icons Example

Usage:
```tsx
() => <main>
    <table className="body-lg">
      <tbody>
        {Object.keys(PredefinedIcons).map(name => <tr key={name}>
            <td>
              <SOLIcon icon={name} width="20px" />
            </td>
            <td>
              <p style={{
            margin: 8
          }}>&nbsp;&nbsp;{name}</p>
            </td>
          </tr>)}
      </tbody>
    </table>
  </main>
```

Rendered markup:
```html
<main><table class="body-lg"><tbody><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-plus</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".8" d="M3.333 8 8 3.333 12.667 8M8 12.667V3.333"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-send</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.666 10.666c-.733 0-1.333-.6-1.333-1.333V2.666c0-.733.6-1.333 1.333-1.333h6.667c.733 0 1.333.6 1.333 1.333m-4 2.667h6.667c.736 0 1.333.597 1.333 1.333v6.667c0 .736-.597 1.333-1.333 1.333H6.666a1.333 1.333 0 0 1-1.333-1.333V6.666c0-.736.597-1.333 1.333-1.333Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-copy</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 8a6 6 0 1 1-6-6c1.68 0 3.287.667 4.493 1.827L14 5.333m-3.333 0H14V2"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-refresh</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.333 8h9.334M8 3.333v9.334"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-ai-attach</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".8" d="m12 4-8 8m0-8 8 8"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-ai-close-small</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.667 6.667v8M10 3.92l-.666 2.747h3.886a1.333 1.333 0 0 1 1.28 1.706l-1.553 5.334a1.333 1.333 0 0 1-1.28.96h-9a1.333 1.333 0 0 1-1.333-1.334V8a1.333 1.333 0 0 1 1.333-1.333h1.84a1.333 1.333 0 0 0 1.193-.74L8 1.333a2.087 2.087 0 0 1 2 2.587Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-ai-thumb-up</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.334 9.333v-8M6 12.08l.667-2.747H2.78A1.333 1.333 0 0 1 1.5 7.627l1.553-5.334a1.333 1.333 0 0 1 1.28-.96h9a1.333 1.333 0 0 1 1.334 1.334V8a1.334 1.334 0 0 1-1.334 1.333h-1.84a1.333 1.333 0 0 0-1.193.74L8 14.667a2.085 2.085 0 0 1-2-2.587Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-ai-thumb-down</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".8" d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-ai-stop</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sol-ai-sparkle-grad" x1="0" y1="0" x2="16" y2="16"><stop offset="0" stop-color="#7b61ff"></stop><stop offset="1" stop-color="#3b82f6"></stop></linearGradient></defs><path fill="url(#sol-ai-sparkle-grad)" d="M8 2L9.2 6.8L14 8L9.2 9.2L8 14L6.8 9.2L2 8L6.8 6.8Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-ai-sparkle</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="3 3 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.2653 7.30508L10 10.5593L6.73469 7.30508C6.32653 6.89831 5.71429 6.89831 5.30612 7.30508C4.89796 7.71186 4.89796 8.32203 5.30612 8.72881L9.28571 12.6949C9.38775 12.7966 9.4898 12.8983 9.59184 12.8983C9.69388 13 9.89796 13 10 13C10.102 13 10.3061 13 10.4082 12.8983C10.5102 12.7966 10.6122 12.7966 10.7143 12.6949L14.6939 8.72881C15.102 8.32203 15.102 7.71186 14.6939 7.30508C14.2857 6.89831 13.6735 6.89831 13.2653 7.30508Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-dropdown-arrow</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".8" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4Zm0 9.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-dots-vertical</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-dots-horizontal</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-calendar</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M 16 0 H 4 C 1.8 0 0 1.8 0 4 V 16 C 0 18.2 1.8 20 4 20 H 16 C 18.2 20 20 18.2 20 16 V 4 C 20 1.8 18.2 0 16 0 V 0 Z Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-square</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z"></path><path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z"></path><path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-help</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-eye-show</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M.15.15a.51.51 0 0 1 .722 0L15.85 15.129a.512.512 0 0 1-.722.722l-3.141-3.14a7.367 7.367 0 0 1-3.98 1.247H8c-2.587 0-4.585-1.478-5.905-2.886A13.914 13.914 0 0 1 .191 8.485a8.135 8.135 0 0 1-.1-.184.817.817 0 0 1-.026-.052l-.008-.014-.003-.006a.513.513 0 0 1 .007-.47 13.074 13.074 0 0 1 3.13-3.845L.15.872a.51.51 0 0 1 0-.722Zm3.767 4.489a12.054 12.054 0 0 0-2.824 3.364 12.896 12.896 0 0 0 1.747 2.372c1.233 1.314 2.979 2.559 5.156 2.56a6.345 6.345 0 0 0 3.253-.964l-1.833-1.833a2.554 2.554 0 0 1-.428.245 2.556 2.556 0 0 1-2.844-.526 2.557 2.557 0 0 1-.284-3.275L3.917 4.64ZM6.55 7.427a1.535 1.535 0 0 0 .825 2.045 1.534 1.534 0 0 0 1.197-.022c.035-.016.069-.035.103-.053L6.6 7.323a1.521 1.521 0 0 0-.051.104Z" clip-rule="evenodd"></path><path d="M8 2.044c2.586 0 4.585 1.476 5.905 2.884a13.91 13.91 0 0 1 1.903 2.588c.044.078.078.141.1.184l.027.051.01.018.002.002a.513.513 0 0 1-.007.47 13.11 13.11 0 0 1-1.53 2.26.512.512 0 0 1-.782-.658 12.09 12.09 0 0 0 1.278-1.845 12.898 12.898 0 0 0-1.747-2.372c-1.234-1.316-2.98-2.562-5.16-2.562a5.713 5.713 0 0 0-1.313.15.51.51 0 0 1-.232-.995A6.721 6.721 0 0 1 8 2.044Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-eye-hide</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5 0a6.5 6.5 0 0 1 4.935 10.727l4.418 4.42a.5.5 0 1 1-.707.707l-4.419-4.42A6.5 6.5 0 1 1 6.5 0Zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" clip-rule="evenodd"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-search</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-chevron-up</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-chevron-down</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-error</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m10 4 .204.01a2 2 0 0 1 0 3.98L10 8H2a2 2 0 1 1 0-4h8ZM7 7h3a1 1 0 1 0 0-2H5l2 2Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-special-event-partial</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 6a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H2a2 2 0 0 1-2-2Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-special-event-full</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 2.16a.471.471 0 0 0-.707 0 .581.581 0 0 0 0 .771L9.793 8l-4.646 5.069a.581.581 0 0 0 0 .771.47.47 0 0 0 .707 0l5-5.454a.581.581 0 0 0 0-.772l-5-5.454Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-right-chevron</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-left-chevron</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 2V14M10.6667 10L8.66667 8L10.6667 6M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-sidebar-collapse</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-close-small</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 8V5.32C8 4.878 7.642 4.52 7.2 4.52C6.758 4.52 6.4 4.878 6.4 5.32V9.048C6.4 9.424 7.024 9.6 7.4 9.6H12.2C12.642 9.6 13 9.242 13 8.8C13 8.358 12.642 8 12.2 8H8Z"></path><path d="M8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM8 14.4C4.4655 14.4 1.6 11.5345 1.6 8C1.6 4.4655 4.4655 1.6 8 1.6C11.5345 1.6 14.4 4.4655 14.4 8C14.4 11.5345 11.5345 14.4 8 14.4Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-clock</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.394 9V2.1c0-.96.642-1.6 1.606-1.6.803 0 1.606.64 1.606 1.6V9c0 .96-.803 1.6-1.606 1.6-.964 0-1.606-.64-1.606-1.6Zm0 4.9c0-.96.642-1.6 1.606-1.6.803 0 1.606.64 1.606 1.6 0 .96-.803 1.6-1.606 1.6-.964 0-1.606-.64-1.606-1.6Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-error-not-complete</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.718 2.94a.93.93 0 0 0-1.318 0l-8.282 8.028L1.6 6.772a.93.93 0 0 0-1.318 0 .863.863 0 0 0 0 1.277l5.27 4.744a.867.867 0 0 0 .66.274c.282 0 .47-.091.659-.274l8.847-8.575a.863.863 0 0 0 0-1.278Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-done-complete</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 8.9 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0,13H1V0H0ZM8.9,1.6,7.5.1l-4.9,5L1.1,6.5l6.4,6.4,1.4-1.4L4,6.5Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-skip-to-start</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 8.9 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.9,13h-1V0h1ZM0,1.6,1.4.1l4.9,5L7.8,6.5,1.4,12.9,0,11.5l4.9-5Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-skip-to-end</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M4.313 3.646a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.707-.707L7.96 8 4.313 4.354a.5.5 0 0 1 0-.708ZM10.833 12V4a.5.5 0 0 1 1 0v8a.5.5 0 1 1-1 0Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-next</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M10.98 3.646a.5.5 0 0 1 .707.708L8.04 8l3.647 3.646a.5.5 0 0 1-.707.707l-4-4a.5.5 0 0 1 0-.707l4-4ZM4.167 12V4a.5.5 0 1 1 1 0v8a.5.5 0 0 1-1 0Z"></path></svg></div></span></td><td><p style="margin: 8px;">&nbsp;&nbsp;sol-prev</p></td></tr><tr><td><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:20px;" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20ZM10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2Z"></path><path d="M10 9.5C10.6 9.5 11 9.9 11 10.5V14.5C11 15 10.6 15.5 10 15.5C9.5 15.5 9 15.1 9 14.5V10.5C9 9.9 9.4 9.5 10 9.5Z"></path><path d="M10 4.5C10.6 4.5 11 4.9 11 5.5V6.5C11 7 10.6 7.5 10 7.5C9.5 7.5 9 7.1 9 6.5V5.5C9 4.9 9.4 4.5 10 4.5Z"></path></s
```
