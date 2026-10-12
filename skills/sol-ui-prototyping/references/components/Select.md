# Select

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-select` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-select-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-select-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `options` | `any[]` | List of options to display. Default is []. |
| `selection` | `any \| any[]` | Currently selected value(s). Single value when isMultiple={false}; array when isMultiple={true}. |
| `isMultiple` | `boolean` | Enable multi-select mode. Default is false. |
| `searchEnabled` | `boolean` | Show inline search input. Default is false. |
| `searchFunction` | `(option, query) => boolean` | Custom search predicate. Used in place of the default substring match when filtering options. |
| `optionsLabel` | `string` | Property name on each option used as the display label. Default is 'name'. |
| `optionsValue` | `string` | Property name on each option used as the value. Default is 'value'. |
| `optionsIcon` | `string` | Property name on each option used to look up an icon. Default is 'icon'. |
| `maxSelectionLimit` | `number` | Maximum number of selectable items in multi-select mode. Minimum effective value is 2. Default is 1 (no limit applied). |
| `readonly` | `boolean` | Render in read-only mode (selected items displayed, no interaction). Default is false. |
| `projectedContent` | `(scope) => ReactNode` | Render-prop for custom option layouts. Mirrors Angular's TemplateRef. The scope argument exposes ariaLabel, option, and projectedData. |
| `projectedContentScopeKey` | `any` | Opaque scope key passed to the projected content (kept for parity with Angular). |
| `showFooter` | `boolean` | Show the footer with item / result count. Default is false. |
| `loading` | `boolean` | Show the loading state overlay. Default is false. |
| `externalSearchError` | `boolean` | Show the error state overlay (used together with externalSearchOptions.enabled). Default is false. |
| `externalSearchOptions` | `ExternalSearchOptions` | Configuration for async/server-side search: { enabled, keyStrokeDelay?, resultsCount? }. Default is { enabled: false, keyStrokeDelay: 300, resultsCount: 2500 }. |
| `searchText` | `string` | Pre-populates the search input. Default is ''. |
| `ariaLabel` | `string` | Accessible label for the listbox. Defaults to a translated "Available options" string when not provided. |
| `isSearchExpanded` | `boolean \| null` | Controls aria-expanded on the search input and switches its role between combobox (when set) and searchbox (when null). Default is null. |
| `selectOptionsId` | `string` | Custom id for the listbox element. Auto-generated when omitted. |
| `className` | `string` | Extra class added to the root .sol-select element. |
| `id` | `string` | Id attribute on the root element. |
| `expandAnnouncement` | `string` | Text announced to screen readers when the options panel opens and focus moves to an option. Prepended to the accessible name of the focused element. Default is undefined. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onSelectionChange` | `any \| any[]` | Fires when the selection changes. Emits a single value (matching optionsValue) for single-select; an array of values for multi-select. |
| `onSearchChanged` | `string` | Fires when the internal search text changes (local search only). |
| `onExternalSearch` | `{ searchQuery: string, selectedItem: any[] }` | Fires for async/server-side search after the configured keyStrokeDelay debounce. |
| `onSelectAllToggled` | `boolean` | Fires when the Select All toggle is clicked. true = all selected, false = all deselected. |
| `onTabKeyNavigation` | `{ shiftKey: boolean }` | Fires on Tab / Shift+Tab keydown at the component boundary for single and multi-select, including search-enabled and projected-content variants. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `options` | `any[]` | List of options to display. |
| `selection` | `any / any[]` | Currently selected value(s). |
| `isMultiple` | `boolean` | Enable multi-select mode. Default: false. |
| `searchEnabled` | `boolean` | Show inline search input. Default: false. |
| `searchFunction` | `(option, query) => boolean` | Custom search predicate. |
| `optionsLabel` | `string` | Property name used as the option label. Default: 'name'. |
| `optionsValue` | `string` | Property name used as the option value. Default: 'value'. |
| `optionsIcon` | `string` | Property name used for the option icon. Default: 'icon'. |
| `maxSelectionLimit` | `number` | Maximum number of selectable items (multi-select, min 2). Default: 1 (no limit). |
| `readonly` | `boolean` | Render in read-only mode (selected items displayed, no interaction). Default: false. |
| `projectedContent` | `TemplateRef<any>` | Custom ng-template applied as the content of every option. |
| `projectedContentScopeKey` | `any` | Scope key passed to the projected content template context. |
| `showFooter` | `boolean` | Show the footer with item / result count. Default: false. |
| `loading` | `boolean` | Show the loading state overlay. Default: false. |
| `externalSearchError` | `boolean` | Show the error state overlay (used with externalSearchOptions). Default: false. |
| `externalSearchOptions` | `ExternalSearchOptions` | Configuration for async / server-side search: { enabled, keyStrokeDelay?, resultsCount? }. |
| `searchText` | `string` | Pre-populate the search input. |
| `ariaLabel` | `string` | Accessible label for the listbox / combobox. Defaults to a translated "Available options" string. |
| `isSearchExpanded` | `boolean \| null` | Controls aria-expanded on the search input. null (default) omits the attribute; use true/false when the select is nested inside a custom overlay trigger. |
| `selectOptionsId` | `string` | ID for the select options panel. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `selectionChange` | `` | Fires when the selection changes. The emitted value matches the optionsValue key type (single or array). |
| `searchChanged` | `` | Fires when the internal search text changes. |
| `onExternalSearch` | `` | Fires for async search: { searchQuery: string, selectedItem: any[] }. |
| `selectAllToggled` | `` | Fires when the Select All toggle is clicked: true = all selected, false = all deselected. |
| `onTabKeyNavigation` | `` | Fires on Tab / Shift+Tab key-down at the panel boundary for single and multi-select, including search-enabled and projected-content variants. |

