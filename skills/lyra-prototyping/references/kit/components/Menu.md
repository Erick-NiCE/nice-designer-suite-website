# Menu (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/Menu.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Multiple Level Menu

Usage:
```tsx
args => {
  const menuItems = getMenuItems(args);
  return <main>
      <header>
        <h1 className="sol-screenreader-only">Menu</h1>
      </header>
      <div style={{
      display: 'flex',
      padding: '24px',
      alignItems: 'center',
      columnGap: '10px'
    }}>
        <SOLMenu menuItems={menuItems} menuClass={args.menuClass} maxHeight={args.maxHeight} onTabKeyPressed={args.hasTabCallback ? shift => document.body.dataset.menuTab = shift ? 'back' : 'forward' : undefined}>
          <SOLButton variant="secondary" id="menu-button">
            Menu
          </SOLButton>
        </SOLMenu>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><header><h1 class="sol-screenreader-only">Menu</h1></header><div style="display: flex; padding: 24px; align-items: center; column-gap: 10px;"><button type="button" tabindex="0" id="menu-button" aria-expanded="false" aria-haspopup="menu" class="sol-button btn-secondary-large"><span class="projected-content">Menu</span></button><span class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></span></div></main>
```

## Examples / Single Level Menu

Usage:
```tsx
args => {
  const menuItems = getMenuItems({
    ...args,
    numberOfLevels: 1
  });
  return <main>
      <header>
        <h1 className="sol-screenreader-only">Menu</h1>
      </header>
      <div style={{
      display: 'flex',
      padding: '24px',
      alignItems: 'center',
      columnGap: '10px'
    }}>
        <SOLMenu menuItems={menuItems} menuClass={args.menuClass} maxHeight={args.maxHeight} onTabKeyPressed={args.hasTabCallback ? shift => document.body.dataset.menuTab = shift ? 'back' : 'forward' : undefined}>
          <SOLButton variant="secondary" id="menu-button">
            Menu
          </SOLButton>
        </SOLMenu>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><header><h1 class="sol-screenreader-only">Menu</h1></header><div style="display: flex; padding: 24px; align-items: center; column-gap: 10px;"><button type="button" tabindex="0" id="menu-button" aria-expanded="false" aria-haspopup="menu" class="sol-button btn-secondary-large"><span class="projected-content">Menu</span></button><span class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></span></div></main>
```
