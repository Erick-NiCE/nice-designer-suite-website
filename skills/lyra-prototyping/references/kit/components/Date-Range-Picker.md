# Date Range Picker (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Calendar.css`, `css/Checkbox.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Label.css`, `css/NumericSelector.css`, `css/Select.css`, `css/Spinner.css`, `css/Tabs.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/TimePicker.css`, `css/Tooltip.css`, `css/date-range-picker-utils.css`.
Component classes: `sol-button`, `sol-calendar-icon`, `sol-date-range-container`, `sol-error-message-container`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-input`, `sol-input-container`, `sol-input-trailing-button`, `sol-input-wrapper`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Basic Date Range Picker

Usage:
```tsx
({
  headerTitle,
  value,
  ...args
}) => {
  const [selected, setSelected] = useState<DateRangeValue | undefined>(value);
  return <>
      <header>
        <h1 className="sol-screenreader-only">{headerTitle || 'Date Range Picker'}</h1>
      </header>
      <main role="main">
        <SOLDateRangePicker {...args} value={selected} onChange={setSelected} />
        <br />
        <span id="selectedRangeValue" style={{
        fontFamily: 'var(--sol-typography-body-md-font-family)',
        fontSize: 'small'
      }}>
          Selected date range : {formatRange(selected)}
        </span>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Basic Date Range Picker</h1></header><main role="main"><div class="sol-date-range-container sol-input-wrapper"><div class="date-range-subcontainer"><div class="sol-input-container"><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span><span id="sol-date-range-picker-_r_0_-format-hint" class="sol-screenreader-only">Date format: MMMM d, y</span><div class="input-subcontainer"><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-start" placeholder="Start Date" title="Start Date" aria-label="Start Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="" name="sol-date-range-picker-_r_0_-start"><span class="date-separator">-</span><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-end" placeholder="End Date" title="End Date" aria-label="End Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="" name="sol-date-range-picker-_r_0_-end"></div><span class="sol-calendar-icon sol-input-trailing-button icon-clickable"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></span></div><div class="action-button-container"><button type="button" data-disabled="" disabled="" aria-label="Previous Day" aria-disabled="true" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><button type="button" data-disabled="" disabled="" aria-label="Next Day" aria-disabled="true" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 2.16a.471.471 0 0 0-.707 0 .581.581 0 0 0 0 .771L9.793 8l-4.646 5.069a.581.581 0 0 0 0 .771.47.47 0 0 0 .707 0l5-5.454a.581.581 0 0 0 0-.772l-5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><br><span id="selectedRangeValue" style="font-family: var(--sol-typography-body-md-font-family); font-size: small;">Selected date range :  - </span></main>
```

## Examples / Date Range Picker States

Usage:
```tsx
({
  headerTitle,
  value,
  ...args
}) => {
  const [selected, setSelected] = useState<DateRangeValue | undefined>(value);
  return <>
      <header>
        <h1 className="sol-screenreader-only">{headerTitle || 'Date Range Picker'}</h1>
      </header>
      <main role="main">
        <SOLDateRangePicker {...args} value={selected} onChange={setSelected} />
        <br />
        <span id="selectedRangeValue" style={{
        fontFamily: 'var(--sol-typography-body-md-font-family)',
        fontSize: 'small'
      }}>
          Selected date range : {formatRange(selected)}
        </span>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Date Range Picker States</h1></header><main role="main"><div class="sol-date-range-container sol-input-wrapper"><div class="date-range-subcontainer"><div class="sol-input-container"><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span><span id="sol-date-range-picker-_r_0_-format-hint" class="sol-screenreader-only">Date format: MMMM d, y</span><div class="input-subcontainer"><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-start" placeholder="Start Date" title="Start Date" aria-label="Start Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="March 6, 2023" name="sol-date-range-picker-_r_0_-start"><span class="date-separator">-</span><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-end" placeholder="End Date" title="End Date" aria-label="End Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="March 10, 2023" name="sol-date-range-picker-_r_0_-end"></div><span class="sol-calendar-icon sol-input-trailing-button icon-clickable"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></span></div><div class="action-button-container"><button type="button" aria-label="Previous Day" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><button type="button" aria-label="Next Day" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 2.16a.471.471 0 0 0-.707 0 .581.581 0 0 0 0 .771L9.793 8l-4.646 5.069a.581.581 0 0 0 0 .771.47.47 0 0 0 .707 0l5-5.454a.581.581 0 0 0 0-.772l-5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><br><span id="selectedRangeValue" style="font-family: var(--sol-typography-body-md-font-family); font-size: small;">Selected date range : Mar 6, 2023, 12:00:00 AM - Mar 10, 2023, 12:00:00 AM</span></main>
```

## Examples / Date Range Picker With Constraints

Usage:
```tsx
({
  headerTitle,
  value,
  ...args
}) => {
  const [selected, setSelected] = useState<DateRangeValue | undefined>(value);
  return <>
      <header>
        <h1 className="sol-screenreader-only">{headerTitle || 'Date Range Picker'}</h1>
      </header>
      <main role="main">
        <SOLDateRangePicker {...args} value={selected} onChange={setSelected} />
        <br />
        <span id="selectedRangeValue" style={{
        fontFamily: 'var(--sol-typography-body-md-font-family)',
        fontSize: 'small'
      }}>
          Selected date range : {formatRange(selected)}
        </span>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Date Range Picker With Constraints</h1></header><main role="main"><div class="sol-date-range-container sol-input-wrapper"><div class="date-range-subcontainer"><div class="sol-input-container"><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span><span id="sol-date-range-picker-_r_0_-format-hint" class="sol-screenreader-only">Date format: MMM d, y</span><div class="input-subcontainer"><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-start" placeholder="Start Date" title="Start Date" aria-label="Start Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="Mar 6, 2026" name="sol-date-range-picker-_r_0_-start"><span class="date-separator">-</span><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-end" placeholder="End Date" title="End Date" aria-label="End Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="Mar 10, 2026" name="sol-date-range-picker-_r_0_-end"></div><span class="sol-calendar-icon sol-input-trailing-button icon-clickable"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></span></div><div class="action-button-container"><button type="button" aria-label="Previous Day" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><button type="button" aria-label="Next Day" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 2.16a.471.471 0 0 0-.707 0 .581.581 0 0 0 0 .771L9.793 8l-4.646 5.069a.581.581 0 0 0 0 .771.47.47 0 0 0 .707 0l5-5.454a.581.581 0 0 0 0-.772l-5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><br><span id="selectedRangeValue" style="font-family: var(--sol-typography-body-md-font-family); font-size: small;">Selected date range : Mar 6, 2026, 12:00:00 AM - Mar 10, 2026, 12:00:00 AM</span></main>
```

## Examples / Date Range Picker With Presets

Usage:
```tsx
({
  headerTitle,
  value,
  ...args
}) => {
  const [selected, setSelected] = useState<DateRangeValue | undefined>(value);
  return <>
      <header>
        <h1 className="sol-screenreader-only">{headerTitle || 'Date Range Picker'}</h1>
      </header>
      <main role="main">
        <SOLDateRangePicker {...args} value={selected} onChange={setSelected} />
        <br />
        <span id="selectedRangeValue" style={{
        fontFamily: 'var(--sol-typography-body-md-font-family)',
        fontSize: 'small'
      }}>
          Selected date range : {formatRange(selected)}
        </span>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Date Range Picker with Presets</h1></header><main role="main"><div class="sol-date-range-container sol-input-wrapper"><div class="date-range-subcontainer"><div class="sol-input-container"><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span><span id="sol-date-range-picker-_r_0_-format-hint" class="sol-screenreader-only">Date format: MMM d, y</span><div class="input-subcontainer"><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-start" placeholder="Start Date" title="Start Date" aria-label="Start Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="" name="sol-date-range-picker-_r_0_-start"><span class="date-separator">-</span><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-end" placeholder="End Date" title="End Date" aria-label="End Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="" name="sol-date-range-picker-_r_0_-end"></div><span class="sol-calendar-icon sol-input-trailing-button icon-clickable"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></span></div><div class="action-button-container"><button type="button" data-disabled="" disabled="" aria-label="Previous Day" aria-disabled="true" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><button type="button" data-disabled="" disabled="" aria-label="Next Day" aria-disabled="true" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 2.16a.471.471 0 0 0-.707 0 .581.581 0 0 0 0 .771L9.793 8l-4.646 5.069a.581.581 0 0 0 0 .771.47.47 0 0 0 .707 0l5-5.454a.581.581 0 0 0 0-.772l-5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><br><span id="selectedRangeValue" style="font-family: var(--sol-typography-body-md-font-family); font-size: small;">Selected date range :  - </span></main>
```

## Examples / Date Range Picker With Time

Usage:
```tsx
({
  headerTitle,
  value,
  ...args
}) => {
  const [selected, setSelected] = useState<DateRangeValue | undefined>(value);
  return <>
      <header>
        <h1 className="sol-screenreader-only">{headerTitle || 'Date Range Picker'}</h1>
      </header>
      <main role="main">
        <SOLDateRangePicker {...args} value={selected} onChange={setSelected} />
        <br />
        <span id="selectedRangeValue" style={{
        fontFamily: 'var(--sol-typography-body-md-font-family)',
        fontSize: 'small'
      }}>
          Selected date range : {formatRange(selected)}
        </span>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Date Range Picker With Time</h1></header><main role="main"><div class="sol-date-range-container sol-input-wrapper"><div class="date-range-subcontainer"><div class="sol-input-container"><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span><span id="sol-date-range-picker-_r_0_-format-hint" class="sol-screenreader-only">Date format: MMMM d, y, h:mm:ss a</span><div class="input-subcontainer"><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-start" placeholder="Start Date" title="Start Date" aria-label="Start Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="" name="sol-date-range-picker-_r_0_-start"><span class="date-separator">-</span><input class="sol-input body-md" id="sol-date-range-picker-_r_0_-end" placeholder="End Date" title="End Date" aria-label="End Date" aria-describedby="sol-date-range-picker-_r_0_-format-hint" autocomplete="off" type="text" value="" name="sol-date-range-picker-_r_0_-end"></div><span class="sol-calendar-icon sol-input-trailing-button icon-clickable"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></span></div><div class="action-button-container"><button type="button" data-disabled="" disabled="" aria-label="Previous Day" aria-disabled="true" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><button type="button" data-disabled="" disabled="" aria-label="Next Day" aria-disabled="true" data-base-ui-tooltip-trigger="" class="sol-button btn-secondary-large"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.854 2.16a.471.471 0 0 0-.707 0 .581.581 0 0 0 0 .771L9.793 8l-4.646 5.069a.581.581 0 0 0 0 .771.47.47 0 0 0 .707 0l5-5.454a.581.581 0 0 0 0-.772l-5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><br><span id="selectedRangeValue" style="font-family: var(--sol-typography-body-md-font-family); font-size: small;">Selected date range :  - </span></main>
```
