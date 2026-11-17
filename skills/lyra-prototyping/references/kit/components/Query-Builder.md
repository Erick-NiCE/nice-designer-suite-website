# Query Builder (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Autocomplete.css`, `css/Button.css`, `css/Calendar.css`, `css/Checkbox.css`, `css/Chip.css`, `css/ChipGroup.css`, `css/DatePicker.css`, `css/Dropdown.css`, `css/ErrorMessage.css`, `css/FileUpload.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Label.css`, `css/NumericSelector.css`, `css/QueryBuilder.css`, `css/RangeSlider.css`, `css/Select.css`, `css/Spinner.css`, `css/Tabs.css`, `css/TextArea.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/TimePicker.css`, `css/Tooltip.css`, `css/date-range-picker-utils.css`.
Component classes: `sol-button`, `sol-dropdown`, `sol-dropdown-content`, `sol-dropdown-icon`, `sol-dropdown-inside`, `sol-dropdown-trigger`, `sol-icon`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-input-container`, `sol-input-trailing-button-container`, `sol-input-wrapper`, `sol-query-builder`, `sol-query-builder-chip-item`, `sol-query-builder-chip-list`, `sol-query-chip`, `sol-screenreader-only`, `sol-smooth-height`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Borderless variant

Usage:
```tsx
args => <BorderlessVariantDemo {...args} />
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Borderless variant</h1></header><div style="background: var(--sol-color-background-subtle, #f5f5f5); padding: 12px 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgb(224, 224, 224);"><span style="font-size: 0.75rem; color: rgb(102, 102, 102); white-space: nowrap;">Filter bar:</span><div class="sol-smooth-height"><div class="sol-query-builder borderless active" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_1_" role="group" tabindex="0" aria-label="Status: Active" aria-describedby="_r_1_-nav-hint-desc" data-filter-id="status_multi"><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Status:</span></div><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Active</span><span class="overflow-badge" aria-hidden="true">+1</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Status Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_8_" role="group" tabindex="-1" aria-label="Role: Admin" aria-describedby="_r_8_-nav-hint-desc" data-filter-id="role_multi"><span id="_r_8_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_8_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Role:</span></div><button type="button" tabindex="-1" id="_r_8_-value-btn" aria-labelledby="_r_8_-filter-name _r_8_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Admin</span><span class="overflow-badge" aria-hidden="true">+2</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Role Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><button type="button" aria-label="Clear all filters" class="sol-button btn-tertiary-medium query-clear-filters-trigger"><span class="projected-content">Clear</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div></div><p style="font-size: 0.75rem; margin-top: 12px; padding: 8px; color: rgb(102, 102, 102); border: 1px solid rgb(204, 204, 204); background: rgb(249, 249, 249);"><code>{
  "selection": [
    {
      "filterId": "status_multi",
      "value": [
        "active",
        "inactive"
      ]
    },
    {
      "filterId": "role_multi",
      "value": [
        "admin",
        "user",
        "guest"
      ]
    }
  ],
  "isValid": true
}</code></p>
```

## Examples / Filter With Operators

Usage:
```tsx
() => <QueryBuilderDemo storyTitle="Filter with operators" initialModel={{
  selection: [{
    filterId: 'name',
    value: 'smith'
  }]
}} filters={filterWithOperatorsDefinition} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">Filter with operators</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder active" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_1_" role="group" tabindex="0" aria-label="Name: Contains Smith" aria-describedby="_r_1_-nav-hint-desc" data-filter-id="name"><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Name:</span></div><span id="_r_1_-operator-label" class="sol-screenreader-only">Operator</span><button type="button" tabindex="-1" id="_r_1_-operator-btn" aria-labelledby="_r_1_-operator-label _r_1_-operator-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-operator-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Contains</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Smith</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Name Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div><div class="sol-query-builder-chip-item"><button type="button" aria-label="Clear all filters" class="sol-button btn-tertiary-medium query-clear-filters-trigger"><span class="projected-content">Clear</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [
    {
      "filterId": "name",
      "value": "smith",
      "operator": "contains"
    }
  ],
  "isValid": true
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div></main>
```

## Examples / Mandatory And Default Filters

Usage:
```tsx
args => <QueryBuilderDemo {...args} storyTitle="Mandatory and default filters" initialModel={{
  selection: [{
    filterId: 'filter_1'
  }, {
    filterId: 'filter_2',
    value: 'Indigo'
  }, {
    filterId: 'filter_4',
    value: 'Rust'
  }]
}} filters={mandatoryAndDefaultFiltersDefinition} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">Mandatory and default filters</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_1_" role="group" tabindex="0" aria-label="Filter 1: Blue" aria-describedby="_r_1_-state-desc _r_1_-nav-hint-desc" data-filter-id="filter_1"><span id="_r_1_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Filter 1:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Blue</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container" id="_r_5_" role="group" tabindex="-1" aria-label="Filter 3: No value selected" aria-describedby="_r_5_-state-desc _r_5_-nav-hint-desc" data-filter-id="filter_3"><span id="_r_5_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_5_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_5_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Filter 3:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_5_-value-btn" aria-labelledby="_r_5_-filter-name _r_5_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span>Select…</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_9_" role="group" tabindex="-1" aria-label="Filter 5: Yellow" aria-describedby="_r_9_-state-desc _r_9_-nav-hint-desc" data-filter-id="filter_5"><span id="_r_9_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_9_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_9_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Filter 5:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_9_-value-btn" aria-labelledby="_r_9_-filter-name _r_9_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Yellow</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container" id="_r_d_" role="group" tabindex="-1" aria-label="Filter 7: No value selected" aria-describedby="_r_d_-state-desc _r_d_-nav-hint-desc" data-filter-id="filter_7"><span id="_r_d_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_d_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_d_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Filter 7:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_d_-value-btn" aria-labelledby="_r_d_-filter-name _r_d_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span>Select…</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_h_" role="group" tabindex="-1" aria-label="Filter 2: Indigo" aria-describedby="_r_h_-nav-hint-desc" data-filter-id="filter_2"><span id="_r_h_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_h_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Filter 2:</span></div><button type="button" tabindex="-1" id="_r_h_-value-btn" aria-labelledby="_r_h_-filter-name _r_h_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Indigo</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Filter 2 Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_o_" role="group" tabindex="-1" aria-label="Filter 4: Rust" aria-describedby="_r_o_-nav-hint-desc" data-filter-id="filter_4"><span id="_r_o_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_o_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Filter 4:</span></div><button type="button" tabindex="-1" id="_r_o_-value-btn" aria-labelledby="_r_o_-filter-name _r_o_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Rust</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Filter 4 Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div><div class="sol-query-builder-chip-item"><button type="button" aria-label="Clear all filters" class="sol-button btn-tertiary-medium query-clear-filters-trigger"><span class="projected-content">Clear</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [
    {
      "filterId": "filter_1",
      "value": "Blue"
    },
    {
      "filterId": "filter_3"
    },
    {
      "filterId": "filter_5",
      "value": "Yellow"
    },
    {
      "filterId": "filter_7"
    },
    {
      "filterId": "filter_2",
      "value": "Indigo"
    },
    {
      "filterId": "filter_4",
      "value": "Rust"
    }
  ],
  "isValid": false
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div></main>
```

## Examples / Multi filters change

Usage:
```tsx
() => <MultiFiltersChangeDemo />
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Multi filters change</h1></header><main><div style="display: flex; flex-direction: row; justify-content: space-between;"><div style="width: 35%;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-label="Dropdown, Select a preset" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select a preset</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span></div></div><div style="width: 60%;"><div class="sol-smooth-height"><div class="sol-query-builder" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_7_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [],
  "isValid": true
}</code></p></div></div></main>
```

## Examples / Multi-value overflow (+N)

Usage:
```tsx
() => <QueryBuilderDemo storyTitle="Multi-value overflow (+N)" initialModel={{
  selection: [{
    filterId: 'status_multi',
    value: ['active', 'inactive']
  }, {
    filterId: 'role_multi',
    value: ['admin', 'user', 'guest']
  }]
}} filters={multiValueFilters} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">Multi-value overflow (+N)</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder active" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_1_" role="group" tabindex="0" aria-label="Status: Active" aria-describedby="_r_1_-nav-hint-desc" data-filter-id="status_multi"><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Status:</span></div><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Active</span><span class="overflow-badge" aria-hidden="true">+1</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Status Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_8_" role="group" tabindex="-1" aria-label="Role: Admin" aria-describedby="_r_8_-nav-hint-desc" data-filter-id="role_multi"><span id="_r_8_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_8_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Role:</span></div><button type="button" tabindex="-1" id="_r_8_-value-btn" aria-labelledby="_r_8_-filter-name _r_8_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Admin</span><span class="overflow-badge" aria-hidden="true">+2</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Role Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><button type="button" aria-label="Clear all filters" class="sol-button btn-tertiary-medium query-clear-filters-trigger"><span class="projected-content">Clear</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [
    {
      "filterId": "status_multi",
      "value": [
        "active",
        "inactive"
      ]
    },
    {
      "filterId": "role_multi",
      "value": [
        "admin",
        "user",
        "guest"
      ]
    }
  ],
  "isValid": true
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div></main>
```

## Examples / No Filters Selected

Usage:
```tsx
args => <QueryBuilderDemo {...args} storyTitle="No filters selected" initialModel={{}} filters={noFiltersSelectedFilters} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">No filters selected</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [],
  "isValid": true
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div></main>
```

## Examples / Readonly Filter Display

Usage:
```tsx
({
  readonlyFilterType
}) => <QueryBuilderDemo storyTitle="Read only filter display" initialModel={{
  selection: [{
    filterId: 'string_filter'
  }]
}} filters={readonlyFiltersFor(readonlyFilterType)} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">Read only filter display</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container read-only active not-clickable" id="_r_1_" role="group" tabindex="0" aria-label="String: Blue" aria-describedby="_r_1_-state-desc _r_1_-nav-hint-desc" data-filter-id="string_filter"><span id="_r_1_-state-desc" class="sol-screenreader-only" aria-hidden="true">Read-only</span><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">String:</span></div><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Blue</span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_5_" role="group" tabindex="-1" aria-label="Number: 20" aria-describedby="_r_5_-state-desc _r_5_-nav-hint-desc" data-filter-id="number_filter"><span id="_r_5_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_5_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_5_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Number:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_5_-value-btn" aria-labelledby="_r_5_-filter-name _r_5_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">20</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container" id="_r_9_" role="group" tabindex="-1" aria-label="Date: No value selected" aria-describedby="_r_9_-state-desc _r_9_-nav-hint-desc" data-filter-id="date_filter"><span id="_r_9_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_9_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_9_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Date:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_9_-value-btn" aria-labelledby="_r_9_-filter-name _r_9_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span>Select…</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [
    {
      "filterId": "string_filter",
      "value": "Blue"
    },
    {
      "filterId": "number_filter",
      "value": 20
    },
    {
      "filterId": "date_filter"
    }
  ],
  "isValid": false
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div></main>
```

## Examples / Saved Filters

Usage:
```tsx
args => <QueryBuilderDemo storyTitle="Saved filters" initialModel={{
  selection: [{
    filterId: 'jedi_filter',
    value: 'Luke Skywalker'
  }]
}} filters={filtersStarWars} filterErrors={args.filterErrors} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">Saved filters</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder active" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container active" id="_r_1_" role="group" tabindex="0" aria-label="Jedi: Luke Skywalker" aria-describedby="_r_1_-nav-hint-desc" data-filter-id="jedi_filter"><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Jedi:</span></div><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span class="truncate" data-base-ui-tooltip-trigger="">Luke Skywalker</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Jedi Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div><div class="sol-query-builder-chip-item"><button type="button" aria-label="Clear all filters" class="sol-button btn-tertiary-medium query-clear-filters-trigger"><span class="projected-content">Clear</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [
    {
      "filterId": "jedi_filter",
      "value": "Luke Skywalker"
    }
  ],
  "isValid": true
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div></main>
```

## Examples / Test Filter Display

Usage:
```tsx
() => <QueryBuilderDemo storyTitle="Test filter display" initialModel={{
  selection: [{
    filterId: 'string_filter'
  }]
}} filters={filtersDisplay} initialModel2={{
  selection: [{
    filterId: 'number_filter_b'
  }]
}} filters2={filtersDisplayBottom} />
```

Rendered markup:
```html
<header><h1 id="query-builder-story-title" class="sol-screenreader-only">Test filter display</h1></header><main><div><div class="sol-smooth-height"><div class="sol-query-builder" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container" id="_r_1_" role="group" tabindex="0" aria-label="String: No value selected" aria-describedby="_r_1_-state-desc _r_1_-nav-hint-desc" data-filter-id="string_filter"><span id="_r_1_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_1_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_1_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">String:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_1_-value-btn" aria-labelledby="_r_1_-filter-name _r_1_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span>Select…</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_0_-error-message" aria-live="polite" aria-atomic="true"></div><p style="font-size: 0.875rem; margin-top: 20px; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238);"><code>{
  "selection": [
    {
      "filterId": "string_filter"
    }
  ],
  "isValid": false
}</code></p><button type="button" id="showMessageBtn" class="sol-button btn-secondary-large"><span class="projected-content">show error message</span></button></div><div style="margin-top: 100vh; padding: 20px;"><p style="font-size: 0.875rem; padding: 10px; color: rgb(102, 102, 102); border: 1px solid rgb(153, 153, 153); background: rgb(238, 238, 238); margin-bottom: 40px;"><code>{
  "selection": [
    {
      "filterId": "string_filter_b"
    },
    {
      "filterId": "number_filter_b"
    }
  ],
  "isValid": false
}</code></p><div class="sol-smooth-height"><div class="sol-query-builder" role="group" aria-label="Query filters"><div class="sol-query-builder-chip-list"><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container" id="_r_8_" role="group" tabindex="0" aria-label="String: No value selected" aria-describedby="_r_8_-state-desc _r_8_-nav-hint-desc" data-filter-id="string_filter_b"><span id="_r_8_-state-desc" class="sol-screenreader-only" aria-hidden="true">Required filter</span><span id="_r_8_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_8_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">String:</span><span class="chip-mandatory-indicator" aria-hidden="true">*</span></div><button type="button" tabindex="-1" id="_r_8_-value-btn" aria-labelledby="_r_8_-filter-name _r_8_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span>Select…</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button></div></div><div class="sol-query-builder-chip-item"><div class="sol-query-chip sol-input-container" id="_r_c_" role="group" tabindex="-1" aria-label="Number: No value selected" aria-describedby="_r_c_-nav-hint-desc" data-filter-id="number_filter_b"><span id="_r_c_-nav-hint-desc" class="sol-screenreader-only" aria-hidden="true">Press Enter to move and use Tab key to navigate the controls</span><div class="chip-filter-name"><span id="_r_c_-filter-name" class="truncate" data-base-ui-tooltip-trigger="">Number:</span></div><button type="button" tabindex="-1" id="_r_c_-value-btn" aria-labelledby="_r_c_-filter-name _r_c_-value-btn" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-tertiary-medium chip-filter-content focusable-item"><span class="projected-content"><div class="chip-value-btn"><span>Select…</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></span></button><div class="close-icon"><button type="button" tabindex="-1" class="close-icon-btn focusable-item" aria-label="Remove: Number Filter" data-base-ui-tooltip-trigger=""><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.41058 4.41107C4.73602 4.08563 5.26366 4.08563 5.58909 4.41107L9.99984 8.82181L14.4106 4.41107C14.736 4.08563 15.2637 4.08563 15.5891 4.41107C15.9145 4.73651 15.9145 5.26414 15.5891 5.58958L11.1783 10.0003L15.5891 14.4111C15.9145 14.7365 15.9145 15.2641 15.5891 15.5896C15.2637 15.915 14.736 15.915 14.4106 15.5896L9.99984 11.1788L5.58909 15.5896C5.26366 15.915 4.73602 15.915 4.41058 15.5896C4.08514 15.2641 4.08514 14.7365 4.41058 14.4111L8.82133 10.0003L4.41058 5.58958C4.08514 5.26414 4.08514 4.73651 4.41058 4.41107Z"></path></svg></button></div></div></div><div class="sol-query-builder-chip-item"><button type="button" tabindex="0" aria-expanded="false" aria-haspopup="dialog" data-base-ui-click-trigger="" class="sol-button btn-secondary-medium query-add-filters-trigger"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 1 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z"></path></svg></div></span></span><span class="projected-content">Add Criteria</span></button></div><div class="sol-query-builder-chip-item"><button type="button" aria-label="Clear all filters" class="sol-button btn-tertiary-medium query-clear-filters-trigger"><span class="projected-content">Clear</span></button></div></div></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><div class="error-message-container" id="_r_7_-error-message" aria-live="polite" aria-atomic="true"></div></div></main>
```
