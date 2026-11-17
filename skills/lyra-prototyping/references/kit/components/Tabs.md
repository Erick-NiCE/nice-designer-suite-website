# Tabs (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Tabs.css`, `css/Tooltip.css`.
Component classes: `sol-screenreader-only`, `sol-tabs-alignment-left`, `sol-tabs-default`, `sol-tabs-error-icon`, `sol-tabs-error-icon-wrapper`, `sol-tabs-header`, `sol-tabs-icon-only`, `sol-tabs-icon-text`, `sol-tabs-list`, `sol-tabs-panel`, `sol-tabs-root`, `sol-tabs-small`, `sol-tabs-tab`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Default Icon Text

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Tabs</h1>
    </header>
    <main>
      <div style={{
      height: '150px',
      width: 'calc(100% - 30px)',
      paddingLeft: '15px',
      paddingRight: '15px'
    }}>
        <SOLTabs size={args.size} alignment={args.alignment}>
          <SOLTab titleTemplate={detailsIconText} ariaLabel="Details Icon With Text Template">
            Content A - Loaded
          </SOLTab>
          <SOLTab titleTemplate={usersIconText} ariaLabel="Users Icon With Text Template">
            Content B - Loaded
          </SOLTab>
          <SOLTab titleTemplate={historyIconText} ariaLabel="History Icon With Text Template">
            Content C - Loaded
          </SOLTab>
          {Array.from({
          length: args.tabCount ?? 0
        }, (_, i) => <SOLTab key={i} title={`Filler ${i + 1}`}>
              Filler content {i + 1}
            </SOLTab>)}
        </SOLTabs>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Tabs</h1></header><main><div style="height: 150px; width: calc(100% - 30px); padding-left: 15px; padding-right: 15px;"><div class="sol-tabs-default sol-tabs-alignment-left"><div data-orientation="horizontal" data-activation-direction="none" class="sol-tabs-root"><div class="sol-tabs-header"><div data-orientation="horizontal" data-activation-direction="none" role="tablist" class="sol-tabs-list"><button type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" data-composite-item-active="" aria-label="Details Icon With Text Template" class="sol-tabs-tab"><span class="sol-tabs-icon-text"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg>Details</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="Users Icon With Text Template" class="sol-tabs-tab"><span class="sol-tabs-icon-text"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M8.00005 1.6C8.99579 1.6 9.91494 2 10.5277 2.72C11.1405 3.44 11.5235 4.4 11.5235 5.36C11.5235 6.08 11.3703 6.8 10.9873 7.36C10.8341 7.52 10.7575 7.76 10.6043 7.92L9.37877 9.36L10.9107 10.32C11.4469 10.64 11.983 11.12 12.4426 11.76C13.0554 12.64 13.5149 13.6 13.5915 14.4H2.10218C2.17877 13.6 2.79154 12.56 3.4043 11.76C3.86388 11.2 4.32345 10.72 4.93622 10.32L6.46813 9.36L5.3192 7.92C5.16601 7.76 5.08941 7.6 4.93622 7.44C4.62984 6.8 4.40005 6.08 4.40005 5.36C4.40005 4.4 4.78303 3.44 5.39579 2.72C6.08516 2 7.0043 1.6 8.00005 1.6ZM8.00005 0C6.54473 0 5.3192 0.56 4.32345 1.6C3.4043 2.64 2.86813 4 2.86813 5.36C2.86813 6.4 3.09792 7.36 3.63409 8.24C3.78728 8.48 3.94047 8.72 4.17026 8.96C3.4809 9.44 2.79154 10 2.25537 10.72C1.33622 11.92 0.800049 13.44 0.800049 14.64C0.800049 15.44 1.41281 16 2.25537 16H13.7447C14.5107 16 15.2 15.36 15.2 14.64C15.2 13.44 14.6639 12 13.7447 10.8C13.2086 10.08 12.5192 9.44 11.8298 9.04C11.983 8.8 12.2128 8.56 12.366 8.32C12.9022 7.44 13.132 6.48 13.132 5.44C13.0554 4 12.5192 2.64 11.6 1.6C10.6809 0.56 9.37877 0 8.00005 0V0Z" fill="currentColor"></path></svg>Users</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="History Icon With Text Template" class="sol-tabs-tab"><span class="sol-tabs-icon-text"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M8.55997 0.800049C7.03997 0.800049 5.51997 1.29096 4.31997 2.27278C3.27997 3.09096 2.39997 4.31823 1.99997 5.5455L1.67997 4.97278C1.51997 4.80914 1.43997 4.72732 1.27997 4.6455C1.19997 4.6455 1.11997 4.6455 1.11997 4.6455C1.03997 4.6455 0.87997 4.6455 0.79997 4.72732C0.39997 4.89096 0.31997 5.30005 0.47997 5.62732L1.59997 7.67278C1.67997 7.83641 1.75997 7.91823 1.91997 8.00005C2.07997 8.08187 2.23997 8.00005 2.39997 7.91823L4.39997 6.77278C4.63997 6.77278 4.71997 6.60914 4.79997 6.4455C4.79997 6.28187 4.79997 6.03641 4.71997 5.87278C4.63997 5.70914 4.47997 5.62732 4.31997 5.5455C4.15997 5.5455 3.99997 5.5455 3.83997 5.62732L3.19997 5.95459C3.99997 3.66369 6.15997 2.19096 8.55997 2.19096C11.68 2.19096 14.24 4.80914 14.24 8.00005C14.24 11.191 11.68 13.8091 8.55997 13.8091C7.03997 13.8091 5.59997 13.2364 4.55997 12.091C4.31997 11.8455 3.91997 11.8455 3.59997 12.091C3.35997 12.3364 3.35997 12.8273 3.59997 13.0728C4.95997 14.4637 6.71997 15.2 8.55997 15.2C12.4 15.2 15.6 12.0091 15.6 8.00005C15.6 3.99096 12.48 0.800049 8.55997 0.800049Z" fill="currentColor"></path><path d="M8.15997 4.56369C7.83997 4.56369 7.51997 4.89096 7.51997 5.21823V8.81823C7.51997 9.1455 7.83997 9.47278 8.15997 9.47278H11.12C11.44 9.47278 11.76 9.1455 11.76 8.81823C11.76 8.49096 11.44 8.16369 11.12 8.16369H8.79997V5.21823C8.79997 4.89096 8.47997 4.56369 8.15997 4.56369Z" fill="currentColor"></path></svg>History</span></button></div></div><div data-orientation="horizontal" data-activation-direction="none" role="tabpanel" tabindex="0" data-index="0" class="sol-tabs-panel">Content A - Loaded</div></div></div></div></main>
```

## Examples / Icon Only

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Tabs</h1>
    </header>
    <main>
      <div style={{
      height: '150px',
      width: 'calc(100% - 30px)',
      paddingLeft: '15px',
      paddingRight: '15px'
    }}>
        <SOLTabs size={args.size}>
          <SOLTab titleTemplate={detailsIcon} ariaLabel="Details Icon Template">
            <div style={{
            height: '100%',
            backgroundColor: '#fff'
          }}>Content A - Loaded</div>
          </SOLTab>
          <SOLTab titleTemplate={usersIcon} ariaLabel="Users Icon Template">
            Content B - Loaded
          </SOLTab>
          <SOLTab titleTemplate={historyIcon} ariaLabel="History Icon Template">
            Content C - Loaded
          </SOLTab>
        </SOLTabs>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Tabs</h1></header><main><div style="height: 150px; width: calc(100% - 30px); padding-left: 15px; padding-right: 15px;"><div class="sol-tabs-default sol-tabs-alignment-left"><div data-orientation="horizontal" data-activation-direction="none" class="sol-tabs-root"><div class="sol-tabs-header"><div data-orientation="horizontal" data-activation-direction="none" role="tablist" class="sol-tabs-list"><button type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" data-composite-item-active="" aria-label="Details Icon Template" class="sol-tabs-tab"><span class="sol-tabs-icon-only" data-base-ui-tooltip-trigger=""><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg></span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="Users Icon Template" class="sol-tabs-tab"><span class="sol-tabs-icon-only" data-base-ui-tooltip-trigger=""><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.00005 1.6C8.99579 1.6 9.91494 2 10.5277 2.72C11.1405 3.44 11.5235 4.4 11.5235 5.36C11.5235 6.08 11.3703 6.8 10.9873 7.36C10.8341 7.52 10.7575 7.76 10.6043 7.92L9.37877 9.36L10.9107 10.32C11.4469 10.64 11.983 11.12 12.4426 11.76C13.0554 12.64 13.5149 13.6 13.5915 14.4H2.10218C2.17877 13.6 2.79154 12.56 3.4043 11.76C3.86388 11.2 4.32345 10.72 4.93622 10.32L6.46813 9.36L5.3192 7.92C5.16601 7.76 5.08941 7.6 4.93622 7.44C4.62984 6.8 4.40005 6.08 4.40005 5.36C4.40005 4.4 4.78303 3.44 5.39579 2.72C6.08516 2 7.0043 1.6 8.00005 1.6ZM8.00005 0C6.54473 0 5.3192 0.56 4.32345 1.6C3.4043 2.64 2.86813 4 2.86813 5.36C2.86813 6.4 3.09792 7.36 3.63409 8.24C3.78728 8.48 3.94047 8.72 4.17026 8.96C3.4809 9.44 2.79154 10 2.25537 10.72C1.33622 11.92 0.800049 13.44 0.800049 14.64C0.800049 15.44 1.41281 16 2.25537 16H13.7447C14.5107 16 15.2 15.36 15.2 14.64C15.2 13.44 14.6639 12 13.7447 10.8C13.2086 10.08 12.5192 9.44 11.8298 9.04C11.983 8.8 12.2128 8.56 12.366 8.32C12.9022 7.44 13.132 6.48 13.132 5.44C13.0554 4 12.5192 2.64 11.6 1.6C10.6809 0.56 9.37877 0 8.00005 0V0Z" fill="currentColor"></path></svg></span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="History Icon Template" class="sol-tabs-tab"><span class="sol-tabs-icon-only" data-base-ui-tooltip-trigger=""><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.55997 0.800049C7.03997 0.800049 5.51997 1.29096 4.31997 2.27278C3.27997 3.09096 2.39997 4.31823 1.99997 5.5455L1.67997 4.97278C1.51997 4.80914 1.43997 4.72732 1.27997 4.6455C1.19997 4.6455 1.11997 4.6455 1.11997 4.6455C1.03997 4.6455 0.87997 4.6455 0.79997 4.72732C0.39997 4.89096 0.31997 5.30005 0.47997 5.62732L1.59997 7.67278C1.67997 7.83641 1.75997 7.91823 1.91997 8.00005C2.07997 8.08187 2.23997 8.00005 2.39997 7.91823L4.39997 6.77278C4.63997 6.77278 4.71997 6.60914 4.79997 6.4455C4.79997 6.28187 4.79997 6.03641 4.71997 5.87278C4.63997 5.70914 4.47997 5.62732 4.31997 5.5455C4.15997 5.5455 3.99997 5.5455 3.83997 5.62732L3.19997 5.95459C3.99997 3.66369 6.15997 2.19096 8.55997 2.19096C11.68 2.19096 14.24 4.80914 14.24 8.00005C14.24 11.191 11.68 13.8091 8.55997 13.8091C7.03997 13.8091 5.59997 13.2364 4.55997 12.091C4.31997 11.8455 3.91997 11.8455 3.59997 12.091C3.35997 12.3364 3.35997 12.8273 3.59997 13.0728C4.95997 14.4637 6.71997 15.2 8.55997 15.2C12.4 15.2 15.6 12.0091 15.6 8.00005C15.6 3.99096 12.48 0.800049 8.55997 0.800049Z" fill="currentColor"></path><path d="M8.15997 4.56369C7.83997 4.56369 7.51997 4.89096 7.51997 5.21823V8.81823C7.51997 9.1455 7.83997 9.47278 8.15997 9.47278H11.12C11.44 9.47278 11.76 9.1455 11.76 8.81823C11.76 8.49096 11.44 8.16369 11.12 8.16369H8.79997V5.21823C8.79997 4.89096 8.47997 4.56369 8.15997 4.56369Z" fill="currentColor"></path></svg></span></button></div></div><div data-orientation="horizontal" data-activation-direction="none" role="tabpanel" tabindex="0" data-index="0" class="sol-tabs-panel"><div style="height: 100%; background-color: rgb(255, 255, 255);">Content A - Loaded</div></div></div></div></div></main>
```

## Examples / Small Icon Text

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Small Tabs with Icon and Text</h1>
    </header>
    <main>
      <div style={{
      height: '150px',
      width: 'calc(100% - 30px)',
      paddingLeft: '15px',
      paddingRight: '15px'
    }}>
        <SOLTabs size={args.size}>
          <SOLTab titleTemplate={detailsIconText} ariaLabel="Details Icon With Text Template">
            Content A - Loaded
          </SOLTab>
          <SOLTab titleTemplate={usersIconText} ariaLabel="Users Icon With Text Template">
            Content B - Loaded
          </SOLTab>
          <SOLTab titleTemplate={historyIconText} ariaLabel="History Icon With Text Template">
            Content C - Loaded
          </SOLTab>
        </SOLTabs>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Small Tabs with Icon and Text</h1></header><main><div style="height: 150px; width: calc(100% - 30px); padding-left: 15px; padding-right: 15px;"><div class="sol-tabs-small sol-tabs-alignment-left"><div data-orientation="horizontal" data-activation-direction="none" class="sol-tabs-root"><div class="sol-tabs-header"><div data-orientation="horizontal" data-activation-direction="none" role="tablist" class="sol-tabs-list"><button type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" data-composite-item-active="" aria-label="Details Icon With Text Template" class="sol-tabs-tab"><span class="sol-tabs-icon-text"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg>Details</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="Users Icon With Text Template" class="sol-tabs-tab"><span class="sol-tabs-icon-text"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M8.00005 1.6C8.99579 1.6 9.91494 2 10.5277 2.72C11.1405 3.44 11.5235 4.4 11.5235 5.36C11.5235 6.08 11.3703 6.8 10.9873 7.36C10.8341 7.52 10.7575 7.76 10.6043 7.92L9.37877 9.36L10.9107 10.32C11.4469 10.64 11.983 11.12 12.4426 11.76C13.0554 12.64 13.5149 13.6 13.5915 14.4H2.10218C2.17877 13.6 2.79154 12.56 3.4043 11.76C3.86388 11.2 4.32345 10.72 4.93622 10.32L6.46813 9.36L5.3192 7.92C5.16601 7.76 5.08941 7.6 4.93622 7.44C4.62984 6.8 4.40005 6.08 4.40005 5.36C4.40005 4.4 4.78303 3.44 5.39579 2.72C6.08516 2 7.0043 1.6 8.00005 1.6ZM8.00005 0C6.54473 0 5.3192 0.56 4.32345 1.6C3.4043 2.64 2.86813 4 2.86813 5.36C2.86813 6.4 3.09792 7.36 3.63409 8.24C3.78728 8.48 3.94047 8.72 4.17026 8.96C3.4809 9.44 2.79154 10 2.25537 10.72C1.33622 11.92 0.800049 13.44 0.800049 14.64C0.800049 15.44 1.41281 16 2.25537 16H13.7447C14.5107 16 15.2 15.36 15.2 14.64C15.2 13.44 14.6639 12 13.7447 10.8C13.2086 10.08 12.5192 9.44 11.8298 9.04C11.983 8.8 12.2128 8.56 12.366 8.32C12.9022 7.44 13.132 6.48 13.132 5.44C13.0554 4 12.5192 2.64 11.6 1.6C10.6809 0.56 9.37877 0 8.00005 0V0Z" fill="currentColor"></path></svg>Users</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="History Icon With Text Template" class="sol-tabs-tab"><span class="sol-tabs-icon-text"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M8.55997 0.800049C7.03997 0.800049 5.51997 1.29096 4.31997 2.27278C3.27997 3.09096 2.39997 4.31823 1.99997 5.5455L1.67997 4.97278C1.51997 4.80914 1.43997 4.72732 1.27997 4.6455C1.19997 4.6455 1.11997 4.6455 1.11997 4.6455C1.03997 4.6455 0.87997 4.6455 0.79997 4.72732C0.39997 4.89096 0.31997 5.30005 0.47997 5.62732L1.59997 7.67278C1.67997 7.83641 1.75997 7.91823 1.91997 8.00005C2.07997 8.08187 2.23997 8.00005 2.39997 7.91823L4.39997 6.77278C4.63997 6.77278 4.71997 6.60914 4.79997 6.4455C4.79997 6.28187 4.79997 6.03641 4.71997 5.87278C4.63997 5.70914 4.47997 5.62732 4.31997 5.5455C4.15997 5.5455 3.99997 5.5455 3.83997 5.62732L3.19997 5.95459C3.99997 3.66369 6.15997 2.19096 8.55997 2.19096C11.68 2.19096 14.24 4.80914 14.24 8.00005C14.24 11.191 11.68 13.8091 8.55997 13.8091C7.03997 13.8091 5.59997 13.2364 4.55997 12.091C4.31997 11.8455 3.91997 11.8455 3.59997 12.091C3.35997 12.3364 3.35997 12.8273 3.59997 13.0728C4.95997 14.4637 6.71997 15.2 8.55997 15.2C12.4 15.2 15.6 12.0091 15.6 8.00005C15.6 3.99096 12.48 0.800049 8.55997 0.800049Z" fill="currentColor"></path><path d="M8.15997 4.56369C7.83997 4.56369 7.51997 4.89096 7.51997 5.21823V8.81823C7.51997 9.1455 7.83997 9.47278 8.15997 9.47278H11.12C11.44 9.47278 11.76 9.1455 11.76 8.81823C11.76 8.49096 11.44 8.16369 11.12 8.16369H8.79997V5.21823C8.79997 4.89096 8.47997 4.56369 8.15997 4.56369Z" fill="currentColor"></path></svg>History</span></button></div></div><div data-orientation="horizontal" data-activation-direction="none" role="tabpanel" tabindex="0" data-index="0" class="sol-tabs-panel">Content A - Loaded</div></div></div></div></main>
```

## Examples / Tab With Error

Usage:
```tsx
args => {
  const [selectedIndex, setSelectedIndex] = useState(args.selectedIndex);
  useEffect(() => setSelectedIndex(args.selectedIndex), [args.selectedIndex]);
  return <>
      <header>
        <h1 id="tabs-with-error-heading" className="sol-screenreader-only">
          Tabs with Error Icon
        </h1>
      </header>
      <main>
        <div style={{
        height: '150px',
        width: 'calc(100% - 30px)',
        paddingLeft: '15px',
        paddingRight: '15px'
      }}>
          <SOLTabs size={args.size} selectedIndex={selectedIndex} ariaLabel={args.ariaLabel} ariaLabelledby={args.ariaLabelledby} onSelectedTabChange={event => {
          setSelectedIndex(event.index);
          action('selectedTabChange')(event.index);
        }}>
            <SOLTab title="Details">Content A - Loaded</SOLTab>
            <SOLTab title="Users" hasError={args.hasError} disabled={args.disabled}>
              Content B - Has Error
            </SOLTab>
            <SOLTab title="History">Content C - Loaded</SOLTab>
          </SOLTabs>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 id="tabs-with-error-heading" class="sol-screenreader-only">Tabs with Error Icon</h1></header><main><div style="height: 150px; width: calc(100% - 30px); padding-left: 15px; padding-right: 15px;"><div class="sol-tabs-default sol-tabs-alignment-left"><div data-orientation="horizontal" data-activation-direction="none" class="sol-tabs-root"><div class="sol-tabs-header"><div data-orientation="horizontal" data-activation-direction="none" role="tablist" class="sol-tabs-list"><button type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" data-composite-item-active="" class="sol-tabs-tab"><span class="sol-tabs-icon-text">Details</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" aria-label="Users Error" class="sol-tabs-tab"><span class="sol-tabs-icon-text">Users<span class="sol-tabs-error-icon-wrapper"><svg viewBox="0 0 16 16" fill="currentColor" class="sol-tabs-error-icon" aria-hidden="true"><path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z"></path></svg></span></span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" class="sol-tabs-tab"><span class="sol-tabs-icon-text">History</span></button></div></div><div data-orientation="horizontal" data-activation-direction="none" role="tabpanel" tabindex="0" data-index="0" class="sol-tabs-panel">Content A - Loaded</div></div></div></div></main>
```
