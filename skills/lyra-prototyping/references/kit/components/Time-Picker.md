# Time Picker (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/TimePicker.css`, `css/Tooltip.css`.
Component classes: `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-input`, `sol-input-container`, `sol-input-label-area`, `sol-input-trailing-button`, `sol-input-wrapper`, `sol-label`, `sol-label-asterisk`, `sol-label-content`, `sol-label-text`, `sol-screenreader-only`, `sol-text-input`, `sol-time-picker`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Basic Time Picker

Usage:
```tsx
args => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  // URL args cannot carry ':' or Date values, so format and the time window are driven by presets
  const {
    hourFormat,
    businessHours,
    ...pickerArgs
  } = args;
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <header className="sol-screenreader-only">
        <h1>Basic Time Picker (Closed)</h1>
      </header>
      <main>
        <div style={{
        width: '200px'
      }}>
          <SOLTimePicker {...pickerArgs} format={hourFormat === '24h' ? 'HH:mm' : args.format} minTime={businessHours ? new Date(2022, 10, 15, 9, 0, 0, 0) : args.minTime} maxTime={businessHours ? new Date(2022, 10, 15, 17, 0, 0, 0) : args.maxTime} disableTextInput={args.readonly} value={value} onTimeChanged={v => {
          setValue(v);
          action('time changed')(v);
        }} />
        </div>
        <br />
        <p className="common-text">
          Selected Time: {value ? value.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) : ''}
        </p>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header class="sol-screenreader-only"><h1>Basic Time Picker (Closed)</h1></header><main><div style="width: 200px;"><div id="time-picker-closed" class="sol-time-picker sol-input-wrapper"><label class="sol-label" for="sol-time-picker-text-input-_r_0_"><span class="sol-label-content"><span id="sol-time-picker-text-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Select Time</span></span></label><div><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large"><input class="sol-input" id="sol-time-picker-text-input-_r_0_" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="sol-time-picker-list-_r_0_" aria-haspopup="listbox" placeholder="HH:MM AM/PM" autocomplete="off" type="text" value=""><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="open time list" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg class="sol-input-trailing-button" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 8V5.32C8 4.878 7.642 4.52 7.2 4.52C6.758 4.52 6.4 4.878 6.4 5.32V9.048C6.4 9.424 7.024 9.6 7.4 9.6H12.2C12.642 9.6 13 9.242 13 8.8C13 8.358 12.642 8 12.2 8H8Z"></path><path d="M8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM8 14.4C4.4655 14.4 1.6 11.5345 1.6 8C1.6 4.4655 4.4655 1.6 8 1.6C11.5345 1.6 14.4 4.4655 14.4 8C14.4 11.5345 11.5345 14.4 8 14.4Z"></path></svg></div></button></span></div></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div><div id="sol-time-picker-list-_r_0_" aria-hidden="true" class="sol-screenreader-only"></div></div></div><br><p class="common-text">Selected Time: </p></main></div>
```

## Examples / Basic Time Picker always opened

Usage:
```tsx
args => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  const {
    readonly,
    ...pickerArgs
  } = args;
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <header className="sol-screenreader-only">
        <h1>Basic Time Picker (Always Open)</h1>
      </header>
      <main>
        <div style={{
        width: '200px',
        height: '300px'
      }}>
          <SOLTimePicker {...pickerArgs} disableTextInput={readonly} value={value} onTimeChanged={v => {
          setValue(v);
          action('time changed')(v);
        }} />
        </div>
        <br />
        <p className="common-text">
          Selected Time: {value ? value.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) : ''}
        </p>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header class="sol-screenreader-only"><h1>Basic Time Picker (Always Open)</h1></header><main><div style="width: 200px; height: 300px;"><div id="time-picker-always-open" class="sol-time-picker sol-input-wrapper"><label class="sol-label" for="sol-time-picker-text-input-_r_0_"><span class="sol-label-content"><span id="sol-time-picker-text-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Select Time (Always Open)</span></span></label><div><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large"><input class="sol-input" id="sol-time-picker-text-input-_r_0_" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-controls="sol-time-picker-list-_r_0_" aria-haspopup="listbox" placeholder="Select time" autocomplete="off" type="text" value=""></div></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div><div class="time-options-container" id="sol-time-picker-list-_r_0_" role="listbox" aria-multiselectable="false" aria-label="time options"><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-1" aria-label="04:00 AM" aria-selected="false" tabindex="0"><span>04:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-2" aria-label="04:30 AM" aria-selected="false" tabindex="-1"><span>04:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-3" aria-label="05:00 AM" aria-selected="false" tabindex="-1"><span>05:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-4" aria-label="05:30 AM" aria-selected="false" tabindex="-1"><span>05:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-5" aria-label="06:00 AM" aria-selected="false" tabindex="-1"><span>06:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-6" aria-label="06:30 AM" aria-selected="false" tabindex="-1"><span>06:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-7" aria-label="07:00 AM" aria-selected="false" tabindex="-1"><span>07:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-8" aria-label="07:30 AM" aria-selected="false" tabindex="-1"><span>07:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-9" aria-label="08:00 AM" aria-selected="false" tabindex="-1"><span>08:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-10" aria-label="08:30 AM" aria-selected="false" tabindex="-1"><span>08:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-11" aria-label="09:00 AM" aria-selected="false" tabindex="-1"><span>09:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-12" aria-label="09:30 AM" aria-selected="false" tabindex="-1"><span>09:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-13" aria-label="10:00 AM" aria-selected="false" tabindex="-1"><span>10:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-14" aria-label="10:30 AM" aria-selected="false" tabindex="-1"><span>10:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-15" aria-label="11:00 AM" aria-selected="false" tabindex="-1"><span>11:00 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-16" aria-label="11:30 AM" aria-selected="false" tabindex="-1"><span>11:30 AM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-17" aria-label="12:00 PM" aria-selected="false" tabindex="-1"><span>12:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-18" aria-label="12:30 PM" aria-selected="false" tabindex="-1"><span>12:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-19" aria-label="01:00 PM" aria-selected="false" tabindex="-1"><span>01:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-20" aria-label="01:30 PM" aria-selected="false" tabindex="-1"><span>01:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-21" aria-label="02:00 PM" aria-selected="false" tabindex="-1"><span>02:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-22" aria-label="02:30 PM" aria-selected="false" tabindex="-1"><span>02:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-23" aria-label="03:00 PM" aria-selected="false" tabindex="-1"><span>03:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-24" aria-label="03:30 PM" aria-selected="false" tabindex="-1"><span>03:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-25" aria-label="04:00 PM" aria-selected="false" tabindex="-1"><span>04:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-26" aria-label="04:30 PM" aria-selected="false" tabindex="-1"><span>04:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-27" aria-label="05:00 PM" aria-selected="false" tabindex="-1"><span>05:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-28" aria-label="05:30 PM" aria-selected="false" tabindex="-1"><span>05:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-29" aria-label="06:00 PM" aria-selected="false" tabindex="-1"><span>06:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-30" aria-label="06:30 PM" aria-selected="false" tabindex="-1"><span>06:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-31" aria-label="07:00 PM" aria-selected="false" tabindex="-1"><span>07:00 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-32" aria-label="07:30 PM" aria-selected="false" tabindex="-1"><span>07:30 PM</span></div><div class="time-option body-md" role="option" id="sol-time-picker-list-_r_0_-option-33" aria-label="08:00 PM" aria-selected="false" tabindex="-1"><span>08:00 PM</span></div></div></div></div><br><p class="common-text">Selected Time: </p></main></div>
```

## Examples / Time Picker with Error

Usage:
```tsx
args => {
  const [value, setValue] = useState<Date | undefined>(undefined);
  return <div style={{
    maxWidth: '600px',
    width: '100%'
  }}>
      <header className="sol-screenreader-only">
        <h1>Time Picker Error Mode</h1>
      </header>
      <main>
        <div style={{
        width: '200px'
      }}>
          <SOLTimePicker {...args} required errorMessage={value ? '' : args.errorMessage} value={value} onTimeChanged={v => {
          setValue(v);
          action('time changed')(v);
        }} />
        </div>
        <br />
        <p className="common-text">
          Selected Time: {value ? value.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) : ''}
        </p>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div style="max-width: 600px; width: 100%;"><header class="sol-screenreader-only"><h1>Time Picker Error Mode</h1></header><main><div style="width: 200px;"><div id="time-picker-error" class="sol-time-picker sol-input-wrapper"><label class="sol-label required" for="sol-time-picker-text-input-_r_0_"><span class="sol-label-content"><span id="sol-time-picker-text-input-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Select Time (With Error)</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label><div><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large error-border"><input class="sol-input" id="sol-time-picker-text-input-_r_0_" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="sol-time-picker-list-_r_0_" aria-haspopup="listbox" aria-invalid="true" aria-required="true" placeholder="HH:MM AM/PM" autocomplete="off" type="text" value="" aria-describedby="error-_r_1_"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="open time list" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg class="sol-input-trailing-button" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 8V5.32C8 4.878 7.642 4.52 7.2 4.52C6.758 4.52 6.4 4.878 6.4 5.32V9.048C6.4 9.424 7.024 9.6 7.4 9.6H12.2C12.642 9.6 13 9.242 13 8.8C13 8.358 12.642 8 12.2 8H8Z"></path><path d="M8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM8 14.4C4.4655 14.4 1.6 11.5345 1.6 8C1.6 4.4655 4.4655 1.6 8 1.6C11.5345 1.6 14.4 4.4655 14.4 8C14.4 11.5345 11.5345 14.4 8 14.4Z"></path></svg></div></button></span></div></div></div><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Select Time (With Error): </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">Please select a valid time</span></div><div id="sol-time-picker-list-_r_0_" aria-hidden="true" class="sol-screenreader-only"></div></div></div><br><p class="common-text">Selected Time: </p></main></div>
```
