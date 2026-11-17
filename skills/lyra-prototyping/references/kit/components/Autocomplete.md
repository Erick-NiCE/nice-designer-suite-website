# Autocomplete (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Autocomplete.css`, `css/Button.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/Spinner.css`, `css/Tooltip.css`.
Component classes: `sol-auto-complete`, `sol-autocomplete-announcer`, `sol-input`, `sol-input-container`, `sol-input-wrapper`, `sol-label`, `sol-label-content`, `sol-label-text`, `sol-screenreader-only`, `sol-text-input`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Autocomplete Bottom Position

Usage:
```tsx
args => <div style={{
  maxWidth: 600,
  width: '100%'
}}>
    <main>
      <header>
        <h1 className="sol-screenreader-only">AutoComplete Bottom Position</h1>
      </header>
      <div style={{
      display: 'flex',
      padding: 24,
      alignItems: 'end',
      columnGap: 10,
      height: 'calc(100vh - 180px)'
    }}>
        <BottomPositionExample {...args} />
      </div>
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><header><h1 class="sol-screenreader-only">AutoComplete Bottom Position</h1></header><div style="display: flex; padding: 24px; align-items: end; column-gap: 10px; height: calc(-180px + 100vh);"><div style="width: 300px;"><div class="sol-auto-complete sol-input-wrapper"><label class="sol-label" for="sol-autocomplete-_r_1_"><span class="sol-label-content"><span id="sol-autocomplete-_r_1_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Search for items</span></span></label><div class="sol-text-input"><div class="sol-input-container"><input id="sol-autocomplete-_r_1_" class="sol-input body-md" role="combobox" placeholder="" aria-controls="autocompletePanel-_r_0_" aria-expanded="false" aria-autocomplete="list" autocomplete="off" type="text" value=""></div></div><div id="autocompletePanel-_r_0_" hidden=""></div><div class="sol-screenreader-only sol-autocomplete-announcer" role="status" aria-live="polite" aria-atomic="true"></div></div><br><span class="common-text">Search Text: </span><br><span class="common-text">Selected Item: </span></div></div></main></div>
```

## Examples / Autocomplete Mock Backend Search

Usage:
```tsx
() => <div style={{
  maxWidth: 600,
  width: '100%'
}}>
    <main>
      <header>
        <h1 className="sol-screenreader-only">AutoComplete With Mock Backend Search</h1>
      </header>
      <MockBackendSearchExample />
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><header><h1 class="sol-screenreader-only">AutoComplete With Mock Backend Search</h1></header><div style="width: 300px;"><div class="sol-auto-complete sol-input-wrapper"><label class="sol-label" for="sol-autocomplete-_r_1_"><span class="sol-label-content"><span id="sol-autocomplete-_r_1_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Search for items</span></span></label><div class="sol-text-input"><div class="sol-input-container"><input id="sol-autocomplete-_r_1_" class="sol-input body-md" role="combobox" placeholder="Search for item" aria-controls="autocompletePanel-_r_0_" aria-expanded="false" aria-autocomplete="list" autocomplete="off" type="text" value=""></div></div><div id="autocompletePanel-_r_0_" hidden=""></div><div class="sol-screenreader-only sol-autocomplete-announcer" role="status" aria-live="polite" aria-atomic="true"></div></div><br><span class="common-text">Search Text: </span><br><span class="common-text">Selected Item: </span></div></main></div>
```

## Examples / Autocomplete With Search Item

Usage:
```tsx
() => <div style={{
  maxWidth: 600,
  width: '100%'
}}>
    <main>
      <header>
        <h1 className="sol-screenreader-only">Autocomplete With Custom Template</h1>
      </header>
      <WithSearchItemExample />
    </main>
  </div>
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><main><header><h1 class="sol-screenreader-only">Autocomplete With Custom Template</h1></header><div style="max-width: 700px; min-width: 200px;"><div class="sol-auto-complete sol-input-wrapper"><label class="sol-label" for="sol-autocomplete-_r_1_"><span class="sol-label-content"><span id="sol-autocomplete-_r_1_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Search for items</span></span></label><div class="sol-text-input"><div class="sol-input-container"><input id="sol-autocomplete-_r_1_" class="sol-input body-md" role="combobox" placeholder="Search for item" aria-controls="autocompletePanel-_r_0_" aria-expanded="false" aria-autocomplete="list" autocomplete="off" type="text" value=""></div></div><div id="autocompletePanel-_r_0_" hidden=""></div><div class="sol-screenreader-only sol-autocomplete-announcer" role="status" aria-live="polite" aria-atomic="true"></div></div><br><span class="common-text">Search Text: </span><br><span class="common-text">Selected Item: </span></div></main></div>
```
