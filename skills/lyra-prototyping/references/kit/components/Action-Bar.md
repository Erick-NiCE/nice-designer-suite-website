# Action Bar (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ActionBar.css`, `css/Button.css`, `css/Icon.css`, `css/Tooltip.css`.
Component classes: `sol-action-bar`, `sol-button`, `sol-icon`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Action Bar

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Action bar</h1>
    </header>
    <main>
      <SOLActionBar showActionBar={args.showActionBar} ariaLabel={args.ariaLabel} liveMessage={args.liveMessage} actionBarTextContent={args.actionBarTextContent} buttonIcon={args.buttonIcon} buttonText={args.buttonText} styleData={args.styleData} iconPath={args.iconPath} onButtonClicked={action('stop button clicked')} />
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Action bar</h1></header><main><div class="sol-action-bar" role="region" aria-label="Action bar" aria-describedby="sol-action-bar-_r_0_-message"><div class="bar-wrapper"><span class="bar-label body-md" id="sol-action-bar-_r_0_-message" data-trigger-disabled="">You are currently impersonating Darth Vader on tenant Galactic Empire</span><button type="button" class="sol-button btn-secondary-small"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width: 0.75rem; height: 0.75rem; background-color: var(--sol-color-text-default);"><use href="./assets/application-icons.svg#stopIcon"></use></svg></div></span></span><span class="projected-content">Stop</span></button></div></div></main>
```
