# File Upload (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/ErrorMessage.css`, `css/FileUpload.css`, `css/Icon.css`, `css/Label.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-error-message-container`, `sol-file-upload`, `sol-file-upload-field`, `sol-file-upload-hint`, `sol-file-upload-native`, `sol-file-upload-row`, `sol-input`, `sol-input-container`, `sol-input-label-area`, `sol-input-wrapper`, `sol-label`, `sol-label-content`, `sol-label-text`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / File Upload

Usage:
```tsx
{
  args: {
    headerTitle: 'File upload',
    label: '',
    acceptedFileTypes: ['.csv', '.xlsx'],
    maxFileSizeMB: 10,
    hintText: 'Select CSV, XLSX formats, up to 10mb',
    placeholder: '',
    disabled: false,
    readonly: false,
    selection: null
  },
  render: ({
    headerTitle,
    ...args
  }) => <div style={{
    maxWidth: '35rem',
    width: '100%'
  }}>
      <header>
        <h1 className="sol-screenreader-only">{headerTitle}</h1>
      </header>
      <main>
        <SOLFileUpload {...args} onSelectionChange={action('selectionChange')} />
      </main>
    </div>
}
```

Rendered markup:
```html
<div style="max-width: 35rem; width: 100%;"><header><h1 class="sol-screenreader-only">File upload</h1></header><main><div class="sol-file-upload"><p class="sol-file-upload-hint body-md" id="sol-file-upload-_r_0_-hint">Select CSV, XLSX formats, up to 10mb</p><div class="sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="sol-file-upload-_r_0_"><span class="sol-label-content"><span id="sol-file-upload-_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">File Name</span></span></label></div><div class="sol-file-upload-row"><div class="sol-input-container sol-file-upload-field readonly"><input class="sol-input" readonly="" autocomplete="off" id="sol-file-upload-_r_0_" placeholder="No file selected" aria-describedby="sol-file-upload-_r_0_-hint" data-base-ui-tooltip-trigger="" type="text" value=""></div><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Select File...</span></button><input class="sol-file-upload-native" tabindex="-1" aria-hidden="true" accept=".csv,.xlsx" type="file"></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main></div>
```
