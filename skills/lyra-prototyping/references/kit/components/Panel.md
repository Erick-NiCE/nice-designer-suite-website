# Panel (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Autocomplete.css`, `css/Button.css`, `css/Calendar.css`, `css/Checkbox.css`, `css/Chip.css`, `css/ChipGroup.css`, `css/DatePicker.css`, `css/ErrorMessage.css`, `css/FileUpload.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Label.css`, `css/NumericSelector.css`, `css/Omnibar.css`, `css/QueryBuilder.css`, `css/RangeSlider.css`, `css/Select.css`, `css/Spinner.css`, `css/Tabs.css`, `css/TextArea.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/TimePicker.css`, `css/Tooltip.css`, `css/date-range-picker-utils.css`.
Component classes: `sol-button`, `sol-error-message-container`, `sol-form-example`, `sol-form-example--row`, `sol-form-example--row--row-item`, `sol-grid`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-input`, `sol-input-container`, `sol-input-label-area`, `sol-input-trailing-button`, `sol-input-wrapper`, `sol-label`, `sol-label-asterisk`, `sol-label-content`, `sol-label-text`, `sol-omnibar`, `sol-padding`, `sol-padding-large`, `sol-padding-medium`, `sol-padding-small`, `sol-panel`, `sol-panel-actions`, `sol-panel-body`, `sol-panel-divider-both`, `sol-panel-divider-footer`, `sol-panel-divider-header`, `sol-panel-footer`, `sol-panel-header`, `sol-panel-title`, `sol-password-toggle-icon`, `sol-screenreader-only`, `sol-scrollable`, `sol-tabs-alignment-left`, `sol-tabs-default`, `sol-tabs-header`, `sol-tabs-icon-text`, `sol-tabs-list`, `sol-tabs-panel`, `sol-tabs-root`, `sol-tabs-tab`, `sol-text-input`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Body + Footer

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel body and footer</h1>
    </header>
    <main className="common-text">
      <h2>class=&quot;sol-panel sol-panel-divider-footer&quot;</h2>
      <div className="sol-panel sol-panel-divider-footer" role="region" aria-label="Body and footer panel">
        <div className="sol-panel-body">
          <p>
            Body content. The footer below is separated by a divider line via <code>sol-panel-divider-footer</code>.
          </p>
        </div>
        <div className="sol-panel-footer" style={{
        display: 'flex',
        gap: 'var(--sol-size-spacing-xs)'
      }}>
          <SOLButton variant="secondary" size="medium">
            Cancel
          </SOLButton>
          <SOLButton variant="primary" size="medium">
            Save
          </SOLButton>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel body and footer</h1></header><main class="common-text"><h2>class="sol-panel sol-panel-divider-footer"</h2><div class="sol-panel sol-panel-divider-footer" role="region" aria-label="Body and footer panel"><div class="sol-panel-body"><p>Body content. The footer below is separated by a divider line via <code>sol-panel-divider-footer</code>.</p></div><div class="sol-panel-footer" style="display: flex; gap: var(--sol-size-spacing-xs);"><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Cancel</span></button><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Save</span></button></div></div></main>
```

## Examples / Body Only

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel body only</h1>
    </header>
    <main className="common-text">
      <h2>class=&quot;sol-panel&quot;</h2>
      <div className="sol-panel" role="region" aria-label="Body only panel">
        <div className="sol-panel-body">
          <p>This panel has a body section only. Header and footer are optional.</p>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel body only</h1></header><main class="common-text"><h2>class="sol-panel"</h2><div class="sol-panel" role="region" aria-label="Body only panel"><div class="sol-panel-body"><p>This panel has a body section only. Header and footer are optional.</p></div></div></main>
```

## Examples / Generic Header

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel generic header</h1>
    </header>
    <main className="common-text">
      <h2>Arbitrary content in header (generic single-slot mode)</h2>
      <div className="sol-panel sol-panel-divider-header" role="region" aria-label="Generic header panel">
        <div className="sol-panel-header">
          <strong>Custom Header Content</strong>
          <span style={{
          fontSize: '0.75rem'
        }}>Last updated: Today</span>
        </div>
        <div className="sol-panel-body">
          <p>
            The generic header accepts any projected content while keeping the grey background, <code>row-height-2xl</code> min-height, and{' '}
            <code>spacing-4</code> horizontal padding.
          </p>
          <p>
            Simply omit <code>sol-panel-title</code> and <code>sol-panel-actions</code> and place content directly inside{' '}
            <code>sol-panel-header</code>.
          </p>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel generic header</h1></header><main class="common-text"><h2>Arbitrary content in header (generic single-slot mode)</h2><div class="sol-panel sol-panel-divider-header" role="region" aria-label="Generic header panel"><div class="sol-panel-header"><strong>Custom Header Content</strong><span style="font-size: 0.75rem;">Last updated: Today</span></div><div class="sol-panel-body"><p>The generic header accepts any projected content while keeping the grey background, <code>row-height-2xl</code> min-height, and <code>spacing-4</code> horizontal padding.</p><p>Simply omit <code>sol-panel-title</code> and <code>sol-panel-actions</code> and place content directly inside <code>sol-panel-header</code>.</p></div></div></main>
```

## Examples / Grid Block

Usage:
```tsx
() => {
  const [selectedCount, setSelectedCount] = useState(0);
  const gridOptions: GridOptions = useMemo(() => ({
    rowSelection: 'multiple',
    onGridReady: (params: GridReadyEvent) => {
      params.api.sizeColumnsToFit();
    },
    onSelectionChanged: (event: SelectionChangedEvent) => {
      setSelectedCount(event.api.getSelectedRows().length);
    }
  }), []);
  const titleText = selectedCount > 0 ? `${GRID_ROW_DATA.length} Items / ${selectedCount} selected` : `${GRID_ROW_DATA.length} Items`;
  return <>
      <header>
        <h1 className="sol-screenreader-only">Panel grid block usage</h1>
      </header>
      <main className="common-text">
        <h2>Omnibar-style header with tertiary actions + scrollable grid body</h2>
        <div className="sol-panel sol-panel-divider-header" style={{
        height: '420px'
      }} role="region" aria-labelledby="panel-grid-title">
          <div className="sol-panel-header">
            <h2 className="sol-panel-title" id="panel-grid-title">
              {titleText}
            </h2>
            <div className="sol-panel-actions">
              <SOLButton variant="tertiary" size="medium">
                Export
              </SOLButton>
              <SOLButton variant="tertiary" size="medium">
                Columns
              </SOLButton>
              <SOLButton variant="tertiary" size="medium" ariaLabel="More options">
                More
              </SOLButton>
            </div>
          </div>
          <div className="sol-panel-body sol-scrollable" style={{
          padding: 0
        }}>
            <div style={{
            height: '100%',
            width: '100%'
          }}>
              <SOLGrid columnDefs={GRID_COL_DEFS} rowData={GRID_ROW_DATA} gridOptions={gridOptions} />
            </div>
          </div>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel grid block usage</h1></header><main class="common-text"><h2>Omnibar-style header with tertiary actions + scrollable grid body</h2><div class="sol-panel sol-panel-divider-header" role="region" aria-labelledby="panel-grid-title" style="height: 420px;"><div class="sol-panel-header"><h2 class="sol-panel-title" id="panel-grid-title">10 Items</h2><div class="sol-panel-actions"><button type="button" class="sol-button btn-tertiary-medium"><span class="projected-content">Export</span></button><button type="button" class="sol-button btn-tertiary-medium"><span class="projected-content">Columns</span></button><button type="button" aria-label="More options" class="sol-button btn-tertiary-medium"><span class="projected-content">More</span></button></div></div><div class="sol-panel-body sol-scrollable" style="padding: 0px;"><div style="height: 100%; width: 100%;"><div class="sol-grid"><div class="grid-announcements"><div class="sol-screenreader-only" id="sol-grid-grid-_r_0_-status" role="status" aria-atomic="true">Grid loaded with 10 rows</div><div class="sol-screenreader-only" id="sol-grid-grid-_r_0_-selection" role="status"></div><div class="sol-screenreader-only" id="sol-grid-grid-_r_0_-sortable">Sortable column</div><span class="sol-screenreader-only" id="sol-grid-grid-_r_0_-selectall-desc">No rows selected. Press space to select all rows.</span><span hidden="" id="sol-grid-grid-_r_0_-activation-hint">Press Enter to activate.</span><span hidden="" id="sol-grid-grid-_r_0_-activation-hint-selection">Press Space to select the row and Enter to activate.</span></div><div class="ag-theme-balham" style="height: 100%; --ag-internal-row-border-width: 0px; --ag-line-height: 36px;"><div class="ag-measurement-container"><div style="width: var(--ag-list-item-height, 15538px);"></div><div style="width: var(--ag-row-height, 15538px);"></div><div style="width: var(--ag-header-height, 15538px);"></div><div class="ag-measurement-element-border" style="--ag-internal-measurement-border: var(--ag-row-border, solid 15538px);"></div><div class="ag-measurement-element-border" style="--ag-internal-measurement-border: var(--ag-pinned-row-border, solid 15538px);"></div><div class="ag-measurement-element-border" style="--ag-internal-measurement-border: var(--ag-header-row-border, solid 15538px);"></div></div><div class="ag-aria-description-container" aria-live="polite" aria-relevant="additions text" aria-atomic="true"></div><div class="ag-root-wrapper ag-ltr ag-layout-normal" role="presentation" grid-id="1"><div class="ag-toolbar ag-hidden ag-focus-managed" role="toolbar" aria-hidden="true"></div><div class="ag-column-drop-wrapper" role="presentation"><div class="ag-unselectable ag-column-drop ag-column-drop-horizontal ag-column-drop-rowgroup ag-column-drop-horizontal-rowgroup ag-focus-managed ag-column-drop-empty ag-hidden" role="presentation" aria-hidden="true"><div aria-hidden="true" class="ag-column-drop-title-bar ag-column-drop-horizontal-title-bar"><span class="ag-icon ag-icon-group ag-column-drop-icon ag-column-drop-horizontal-icon" role="presentation" unselectable="on"></span></div><div class="ag-column-drop-list ag-column-drop-horizontal-list" role="presentation" aria-label="Row Groups"><span class="ag-column-drop-empty-message ag-column-drop-horizontal-empty-message" role="option">Drag here to set row groups</span></div></div><div class="ag-unselectable ag-column-drop ag-column-drop-horizontal ag-column-drop-pivot ag-column-drop-horizontal-pivot ag-focus-managed ag-column-drop-empty ag-hidden" role="presentation" aria-hidden="true"><div aria-hidden="true" class="ag-column-drop-title-bar ag-column-drop-horizontal-title-bar"><span class="ag-icon ag-icon-pivot ag-column-drop-icon ag-column-drop-horizontal-icon" role="presentation" unselectable="on"></span></div><div class="ag-column-drop-list ag-column-drop-horizontal-list" role="presentation" aria-label="Column Labels"><span class="ag-column-drop-empty-message ag-column-drop-horizontal-empty-message" role="option">Drag here to set column labels</span></div></div></div><div class="ag-root-wrapper-body ag-focus-managed ag-layout-normal" role="presentation"><div class="ag-tab-guard ag-tab-guard-top" role="presentation" tabindex="0"></div><div class="ag-root ag-unselectable ag-layout-normal ag-delay-render ag-body-vertical-content-no-gap ag-body-horizontal-content-no-gap" role="grid" aria-colcount="3" aria-rowcount="11"><div class="ag-header ag-pivot-off ag-header-allow-overflow" role="presentation" style="height: 44px; min-height: 44px;"><div class="ag-pinned-left-header ag-hidden" aria-hidden="true" role="presentation" data-sol-grid-empty-rowgroup="true" style="width: 0px; min-width: 0px; max-width: 0px;"></div><div class="ag-header-viewport " role="rowgroup" tabindex="-1"><div class="ag-header-container" role="presentation" style="width: 1166px;"><div class="ag-header-row ag-header-row-column" role="row" tabindex="0" aria-rowindex="1" style="height: 44px; top: 0px; width: 1166px;"><div class="ag-header-cell ag-column-first ag-header-parent-hidden checkbox-class ag-focus-managed" role="columnheader" col-id="0" aria-colindex="1" tabindex="-1" data-sol-grid-header-tooltip-wired="true" aria-label="Row selection" aria-describedby="sol-grid-grid-_r_0_-selectall-desc" style="top: 0px; height: 44px; width: 42px; left: 0px; touch-action: none;"><div class="ag-header-cell-resize" role="presentation" aria-hidden="false" style="touch-action: none;"></div><div role="presentation" class="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all"> <div class="ag-input-field-label ag-label ag-hidden ag-checkbox-label" data-ref="eLabel" aria-hidden="true" role="presentation" id="ag-21-label"></div> <div class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" data-ref="eWrapper" role="presentation"> <input class="ag-input-field-input ag-checkbox-input" data-ref="eInput" type="checkbox" id="ag-21-input" tabindex="-1" aria-label="Select all rows"> </div> </div><div class="ag-header-cell-comp-wrapper" role="presentation"><div class="ag-cell-label-container" role="presentation">   <div class="ag-header-cell-label" data-ref="eLabel" role="presentation"> <span class="ag-header-cell-text" data-ref="eText"></span> <span class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" data-ref="eFilter" aria-hidden="true"><span class="ag-icon ag-icon-filter" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-container" data-ref="eSortIndicator"> <span class="ag-sort-indicator-icon ag-sort-order ag-hidden" data-ref="eSortOrder" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" data-ref="eSortAsc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" data-ref="eSortDesc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" data-ref="eSortMixed" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden" data-ref="eSortAbsoluteAsc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden" data-ref="eSortAbsoluteDesc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" data-ref="eSortNone" aria-hidden="true"></span> </span> </div> </div></div></div><div class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed" role="columnheader" col-id="name" aria-colindex="2" tabindex="-1" aria-sort="none" data-sol-grid-header-tooltip-wired="true" aria-label="Name" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_0_-sortable" style="top: 0px; height: 44px; width: 562px; left: 42px; touch-action: none;"><div class="ag-header-cell-resize" role="presentation" aria-hidden="false" style="touch-action: none;"></div><div class="ag-header-cell-comp-wrapper" role="presentation"><div class="ag-cell-label-container" role="presentation">   <div class="ag-header-cell-label" data-ref="eLabel" role="button" tabindex="-1" data-sol-grid-sort-voice-target="true" aria-label="Name" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_0_-sortable"> <span class="ag-header-cell-text" data-ref="eText">Name</span> <span class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" data-ref="eFilter" aria-hidden="true"><span class="ag-icon ag-icon-filter" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-container" data-ref="eSortIndicator"> <span class="ag-sort-indicator-icon ag-sort-order ag-hidden" data-ref="eSortOrder" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" data-ref="eSortAsc" aria-hidden="true"><span class="ag-icon ag-icon-asc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" data-ref="eSortDesc" aria-hidden="true"><span class="ag-icon ag-icon-desc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" data-ref="eSortMixed" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden" data-ref="eSortAbsoluteAsc" aria-hidden="true"><span class="ag-icon ag-icon-aasc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden" data-ref="eSortAbsoluteDesc" aria-hidden="true"><span class="ag-icon ag-icon-adesc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" data-ref="eSortNone" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> </span> </div> </div></div></div><div class="ag-header-cell ag-column-last ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed" role="columnheader" col-id="universe" aria-colindex="3" tabindex="-1" aria-sort="none" data-sol-grid-header-tooltip-wired="true" aria-label="Universe" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_0_-sortable" style="top: 0px; height: 44px; width: 562px; left: 604px; touch-action: none;"><div class="ag-header-cell-resize" role="presentation" aria-hidden="false" style="touch-action: none;"></div><div class="ag-header-cell-comp-wrapper" role="presentation"><div class="ag-cell-label-container" role="presentation">   <div class="ag-header-cell-label" data-ref="eLabel" role="button" tabindex="-1" data-sol-grid-sort-voice-target="true" aria-label="Universe" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_0_-sortable"> <span class="ag-header-cell-text" data-ref="eText">Universe</span> <span class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" data-ref="eFilter" aria-hidden="true"><span class="ag-icon ag-icon-filter" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-container" data-ref="eSortIndicator"> <span class="ag-sort-indicator-icon ag-sort-order ag-hidden" data-ref="eSortOrder" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" data-ref="eSortAsc" aria-hidden="true"><span class="ag-icon ag-icon-asc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" data-ref="eSortDesc" aria-hidden="true"><span class="ag-icon ag-icon-desc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" data-ref="eSortMixed" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden" data-ref="eSortAbsoluteAsc" aria-hidden="true"><span class="ag-icon ag-icon-aasc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden" data-ref="eSortAbsoluteDesc" aria-hidden="true"><span class="ag-icon ag-icon-adesc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" data-ref="eSortNone" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> </span> </div> </div></div></div></div></div></div><div class="ag-pinned-right-header ag-hidden" aria-hidden="true" role="presentation" data-sol-grid-empty-rowgroup="true" style="width: 0px; min-width: 0px; max-width: 0px;"></div></div><div class="ag-advanced-filter-header ag-hidden" role="row" aria-hidden="true"></div><div class="ag-floating-top ag-invisible" role="presentation" style="height: 0px; min-height: 0px;"><div class="ag-pinned-left-floating-top ag-hidden" role="presentation" data-sol-grid-empty-rowgroup="true" aria-hidden="true" style="width: 0px; max-width: 0px; min-width: 0px;"></div><div class="ag-viewport ag-floating-top-viewport" role="presentation" data-sol-grid-empty-rowgroup="true"><div class="ag-floating-top-container" role="presentation" style="width: 1166px;"></div></div><div class="ag-pinned-right-floating-top ag-hidden" role="presentation" data-sol-grid-empty-rowgroup="true" aria-hidden="true" style="width: 0px; max-width: 0px; min-width: 0px;"></div><div class="ag-floating-top-full-width-container" role="presentation" data-sol-grid-empty-rowgroup="true"></div></div><div class="ag-body ag-layout-normal" role="presentation"><div class="ag-body-viewport ag-row-no-animation ag-layout-normal" role="presentation"><div class="ag-pinned-left-cols-container ag-hidden" role="presentation" data-sol-grid-empty-rowgroup="true" style="height: 360px; width: 0px; max-width: 0px; min-width: 0px;" aria-hidden="true"></div><div class="ag-viewport ag-center-cols-viewport" role="rowgroup" style="height: 360px;"><div class="ag-center-cols-container" role="presentation" style="width: 1166px; height: 360px;"><div role="row" row-index="0" row-id="0" tabindex="0" class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first" aria-rowindex="2" aria-selected="false" style="transform: translateY(0px); height: 36px;"><div role="gridcell" col-id="0" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first checkbox-class" aria-colindex="1" aria-label="Madara row 1" style="left: 0px; width: 42px;"><div class="ag-cell-wrapper" role="presentation"><div class="ag-selection-checkbox" role="presentation"> <div role="presentation" data-ref="eCheckbox" class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"> <div class="ag-input-field-label ag-label ag-hidden ag-checkbox-label" data-ref="eLabel" aria-hidden="true" role="presentation" id="ag-29-label"></div> <div class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" data-ref="eWrapper" role="presentation"> <input class="ag-input-field-input ag-checkbox-input" data-ref="eInput" type="checkbox" id="ag-29-input" tabindex="-1" aria-label="Madara row 1"> </div> </div> </div><span role="presentation" id="cell-0-0" class="ag-cell-value"></span></div></div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 42px; width: 562px;">Madara</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 604px; width: 562px;">Naruto</div></div><div role="row" row-index="1" row-id="1" tabindex="0" class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="3" aria-selected="false" style="transform: translateY(36px); height: 36px;"><div role="gridcell" col-id="0" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first checkbox-class" aria-colindex="1" aria-label="Doctor Strange row 2" style="left: 0px; width: 42px;"><div class="ag-cell-wrapper" role="presentation"><div class="ag-selection-checkbox" role="presentation"> <div role="presentation" data-ref="eCheckbox" class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"> <div class="ag-input-field-label ag-label ag-hidden ag-checkbox-label" data-ref="eLabel" aria-hidden="true" role="presentation" id="ag-31-label"></div> <div class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" data-ref="eWrapper" role="presentation"> <input class="ag-input-field-input ag-checkbox-input" data-ref="eInput" type="checkbox" id="ag-31-input" tabindex="-1" aria-label="Doctor Strange row 2"> </div> </div> </div><span role="presentation" id="cell-0-3" class="ag-cell-value"></span></div></div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 42px; width: 562px;">Doctor Strange</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 604px; width: 562px;">Marvel</div></div><div role="row" row-index="2" row-id="2" tabindex="0" class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="4" aria-selected="false" style="transform: translateY(72px); height: 36px;"><div role="gridcell" col-id="0" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first checkbox-class" aria-colindex="1" aria-label="Gohan row 3" style="left: 0px; width: 42px;"><div class="ag-cell-wrapper" role="presentation"><div class="ag-selection-checkbox" role="presentation"> <div role="presentation" data-ref="eCheckbox" class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"> <div class="ag-input-field-label ag-label ag-hidden ag-checkbox-label" data-ref="eLabel" aria-hidden="true" role="presentation" id="ag-33-label"></div> <div class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" data-ref="eWrapper" role="presentation"> <input class="ag-input-field-input ag-checkbox-input" data-ref="eInput" type="checkbox" id="ag-33-input" tabindex="-1" aria-label="Gohan row 3"> </div> </div> </div><span role="presentation" id="cell-0-6" class="ag-cell-value"></span></div></div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 42px; width: 562px;">Gohan</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 604px; width: 562px;">Dragon Ball Z</div></div><div role="row" row-index="3" row-id="3" tabindex="0" class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="5" aria-selected="false" style="transform: translateY(108px); height: 36px;"><div role="gridcell" col-id="0" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first checkbox-class" aria-colindex="1" aria-label="Saitama row 4" style="left: 0px; width: 42px;"><div class="ag-cell-wrapper" role="presentation"><div class="ag-selection-checkbox" role="presentation"> <div role="presentation" data-ref="eCheckbox" class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"> <div class="ag-input-field-label ag-label ag-hidden ag-checkbox-label" data-ref="eLabel" aria-hidden="true" role="presentation" id="ag-35-label"></div> <div class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper" data-ref="eWrapper" role="presentation"> <input class="ag-input-field-input
```

## Examples / Header + Body

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel header and body</h1>
    </header>
    <main className="common-text">
      <h2>class=&quot;sol-panel sol-panel-divider-header&quot;</h2>
      <div className="sol-panel sol-panel-divider-header" role="region" aria-labelledby="panel-hb-title">
        <div className="sol-panel-header">
          <h2 className="sol-panel-title" id="panel-hb-title">
            Panel Title
          </h2>
          <div className="sol-panel-actions">
            <SOLButton variant="tertiary" size="medium">
              Export
            </SOLButton>
            <SOLButton variant="tertiary" size="medium">
              Columns
            </SOLButton>
          </div>
        </div>
        <div className="sol-panel-body">
          <p>
            Main body content. The header above is separated by a divider line via <code>sol-panel-divider-header</code>.
          </p>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel header and body</h1></header><main class="common-text"><h2>class="sol-panel sol-panel-divider-header"</h2><div class="sol-panel sol-panel-divider-header" role="region" aria-labelledby="panel-hb-title"><div class="sol-panel-header"><h2 class="sol-panel-title" id="panel-hb-title">Panel Title</h2><div class="sol-panel-actions"><button type="button" class="sol-button btn-tertiary-medium"><span class="projected-content">Export</span></button><button type="button" class="sol-button btn-tertiary-medium"><span class="projected-content">Columns</span></button></div></div><div class="sol-panel-body"><p>Main body content. The header above is separated by a divider line via <code>sol-panel-divider-header</code>.</p></div></div></main>
```

## Examples / Header + Body + Footer

Usage:
```tsx
({
  divider
}) => {
  const panelClass = `sol-panel${divider === 'none' ? '' : ` sol-panel-divider-${divider}`}`;
  return <>
      <header>
        <h1 className="sol-screenreader-only">Panel header body and footer</h1>
      </header>
      <main className="common-text">
        <h2>class=&quot;{panelClass}&quot;</h2>
        <section className={panelClass} role="region" aria-labelledby="panel-all-title">
          <header className="sol-panel-header">
            <h2 className="sol-panel-title" id="panel-all-title">
              Panel Title
            </h2>
            <div className="sol-panel-actions">
              <SOLButton variant="tertiary" size="medium">
                Export
              </SOLButton>
            </div>
          </header>
          <div className="sol-panel-body">
            <p>All three sections are present: header, body, and footer.</p>
            <p>
              <code>sol-panel-divider-both</code> adds a divider beneath the header and above the footer.
            </p>
            <p>The body grows to fill available space; header and footer remain fixed.</p>
          </div>
          <footer className="sol-panel-footer" style={{
          display: 'flex',
          gap: 'var(--sol-size-spacing-xs)'
        }}>
            <SOLButton variant="secondary" size="medium">
              Cancel
            </SOLButton>
            <SOLButton variant="primary" size="medium">
              Confirm
            </SOLButton>
          </footer>
        </section>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel header body and footer</h1></header><main class="common-text"><h2>class="sol-panel sol-panel-divider-both"</h2><section class="sol-panel sol-panel-divider-both" role="region" aria-labelledby="panel-all-title"><header class="sol-panel-header"><h2 class="sol-panel-title" id="panel-all-title">Panel Title</h2><div class="sol-panel-actions"><button type="button" class="sol-button btn-tertiary-medium"><span class="projected-content">Export</span></button></div></header><div class="sol-panel-body"><p>All three sections are present: header, body, and footer.</p><p><code>sol-panel-divider-both</code> adds a divider beneath the header and above the footer.</p><p>The body grows to fill available space; header and footer remain fixed.</p></div><footer class="sol-panel-footer" style="display: flex; gap: var(--sol-size-spacing-xs);"><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Cancel</span></button><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Confirm</span></button></footer></section></main>
```

## Examples / Panel Content Dynamic

Usage:
```tsx
({
  padding
}) => {
  const cssClass = padding === 'none' ? 'sol-panel' : `sol-panel sol-padding-${padding}`;
  return <>
      <header>
        <h1 className="sol-screenreader-only">Panel content</h1>
      </header>
      <main className="common-text">
        <div>
          <h2>Generate css class</h2>
          <h3>class=&quot;{cssClass}&quot;</h3>
          <div className={cssClass}>
            <div style={{
            display: 'inline-block',
            width: '100%'
          }}>
              <span>This is panel content:</span>
              <div>
                <label htmlFor="dyn-input">label:</label>
                <input id="dyn-input" type="text" placeholder="Insert your text" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel content</h1></header><main class="common-text"><div><h2>Generate css class</h2><h3>class="sol-panel"</h3><div class="sol-panel"><div style="display: inline-block; width: 100%;"><span>This is panel content:</span><div><label for="dyn-input">label:</label><input id="dyn-input" placeholder="Insert your text" type="text"></div></div></div></div></main>
```

## Examples / Panel Form

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel form</h1>
    </header>
    <main className="common-text">
      <div>
        <h2>class=&quot;sol-panel sol-padding&quot;</h2>
        <h2>&quot;sol-padding&quot; default value is the same as using &quot;sol-padding-medium&quot;</h2>
        <div className="sol-panel sol-padding">
          <form className="sol-form-example">
            <div className="sol-form-example--row">
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Employee name" required name="employeeName" />
              </div>
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Enter password" type="password" name="password" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>class=&quot;sol-panel sol-padding-small&quot;</h2>
        <div className="sol-panel sol-padding-small">
          <form className="sol-form-example">
            <div className="sol-form-example--row">
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Employee name" required name="employeeName" />
              </div>
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Enter password" type="password" name="password" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>class=&quot;sol-panel sol-padding-medium&quot;</h2>
        <div className="sol-panel sol-padding-medium">
          <form className="sol-form-example">
            <div className="sol-form-example--row">
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Employee name" required name="employeeName" />
              </div>
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Enter password" type="password" name="password" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>class=&quot;sol-panel sol-padding-large&quot;</h2>
        <div className="sol-panel sol-padding-large">
          <form className="sol-form-example">
            <div className="sol-form-example--row">
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Employee name" required name="employeeName" />
              </div>
              <div className="sol-form-example--row--row-item">
                <SOLTextInput label="Enter password" type="password" name="password" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel form</h1></header><main class="common-text"><div><h2>class="sol-panel sol-padding"</h2><h2>"sol-padding" default value is the same as using "sol-padding-medium"</h2><div class="sol-panel sol-padding"><form class="sol-form-example"><div class="sol-form-example--row"><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label required" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Employee name</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" autocomplete="off" type="text" value="" name="employeeName" required="true"></div><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_5_"><span class="sol-label-content"><span id="_r_5_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Enter password</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_5_" autocomplete="off" type="password" value="" name="password"><span class="sol-password-toggle-icon sol-input-trailing-button"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Show password" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></button></span></span></div></div></div></div></form></div></div><div><h2>class="sol-panel sol-padding-small"</h2><div class="sol-panel sol-padding-small"><form class="sol-form-example"><div class="sol-form-example--row"><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label required" for="_r_d_"><span class="sol-label-content"><span id="_r_d_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Employee name</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_d_" autocomplete="off" type="text" value="" name="employeeName" required="true"></div><div class="sol-error-message-container body-sm" id="error-_r_e_"></div></div></div><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_i_"><span class="sol-label-content"><span id="_r_i_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Enter password</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_i_" autocomplete="off" type="password" value="" name="password"><span class="sol-password-toggle-icon sol-input-trailing-button"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Show password" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></button></span></span></div></div></div></div></form></div></div><div><h2>class="sol-panel sol-padding-medium"</h2><div class="sol-panel sol-padding-medium"><form class="sol-form-example"><div class="sol-form-example--row"><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label required" for="_r_q_"><span class="sol-label-content"><span id="_r_q_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Employee name</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_q_" autocomplete="off" type="text" value="" name="employeeName" required="true"></div><div class="sol-error-message-container body-sm" id="error-_r_r_"></div></div></div><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_v_"><span class="sol-label-content"><span id="_r_v_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Enter password</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_v_" autocomplete="off" type="password" value="" name="password"><span class="sol-password-toggle-icon sol-input-trailing-button"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Show password" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></button></span></span></div></div></div></div></form></div></div><div><h2>class="sol-panel sol-padding-large"</h2><div class="sol-panel sol-padding-large"><form class="sol-form-example"><div class="sol-form-example--row"><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label required" for="_r_17_"><span class="sol-label-content"><span id="_r_17_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Employee name</span><span class="sol-label-asterisk" aria-hidden="true">*</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_17_" autocomplete="off" type="text" value="" name="employeeName" required="true"></div><div class="sol-error-message-container body-sm" id="error-_r_18_"></div></div></div><div class="sol-form-example--row--row-item"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_1c_"><span class="sol-label-content"><span id="_r_1c_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Enter password</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_1c_" autocomplete="off" type="password" value="" name="password"><span class="sol-password-toggle-icon sol-input-trailing-button"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Show password" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 2c2.586 0 4.585 1.487 5.905 2.905a13.984 13.984 0 0 1 1.903 2.607l.1.186.027.051.01.018v.001s0 .002-.456.232l.456.23-.01.02-.027.052a12.643 12.643 0 0 1-.49.834 13.987 13.987 0 0 1-1.513 1.958C12.585 12.512 10.586 14 8 14c-2.587 0-4.585-1.488-5.905-2.906A14 14 0 0 1 .191 8.488a8.17 8.17 0 0 1-.1-.186L.065 8.25l-.008-.014-.003-.006a.52.52 0 0 1 0-.462v-.002l.003-.004.008-.014c.006-.012.014-.03.026-.05a12.534 12.534 0 0 1 .49-.835c.342-.533.85-1.245 1.514-1.96C3.415 3.488 5.413 2 8 2Zm0 1.029c-2.18 0-3.926 1.255-5.16 2.58a12.975 12.975 0 0 0-1.749 2.39 12.973 12.973 0 0 0 1.75 2.392c1.233 1.325 2.98 2.58 5.159 2.58 2.178 0 3.925-1.255 5.159-2.58A12.97 12.97 0 0 0 14.908 8a12.964 12.964 0 0 0-1.75-2.39C11.926 4.283 10.179 3.028 8 3.028Zm7.946 4.74a.518.518 0 0 1 0 .46L15.49 8l.457-.23Z"></path><path d="M9.532 8c0-.852-.686-1.543-1.532-1.543S6.468 7.147 6.468 8c0 .852.686 1.543 1.532 1.543S9.532 8.852 9.532 8Zm1.021 0A2.562 2.562 0 0 1 8 10.57 2.562 2.562 0 0 1 5.447 8 2.562 2.562 0 0 1 8 5.428 2.562 2.562 0 0 1 10.553 8Z"></path></svg></div></button></span></span></div></div></div></div></form></div></div></main>
```

## Examples / Panel Omnibar With Grid

Usage:
```tsx
() => {
  const [rows, setRows] = useState<SuperHeroRow[]>(ALL_SUPERHEROES);
  // Forwarded to the grid's searchValue prop so it announces the result count to screen readers
  // when the omnibar (not the grid's own filter bar) drives the search.
  const [searchValue, setSearchValue] = useState('');
  const columnDefs = useMemo<ColDef[]>(() => [{
    headerName: 'ID',
    field: 'id',
    sortable: false
  }, {
    headerName: 'Name',
    field: 'name',
    sortable: true
  }, {
    headerName: 'Universe',
    field: 'universe',
    sortable: true
  }], []);
  const handleSearchChange = (query: string) => {
    setSearchValue(query ?? '');
    if (!query) {
      setRows(ALL_SUPERHEROES);
      return;
    }
    const lc = query.toLowerCase();
    setRows(ALL_SUPERHEROES.filter(item => item.name.toLowerCase().startsWith(lc)));
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Panel omnibar with grid</h1>
      </header>
      <main className="common-text">
        <h2>class=&quot;sol-panel&quot;</h2>
        <div className="sol-panel">
          <SOLOmnibar searchPlaceholderText="Type to search for superheroes..." isFilterable={false} onSearchQueryChange={handleSearchChange} />
          <div style={{
          height: '100%',
          width: '100%'
        }}>
            <SOLGrid columnDefs={columnDefs} rowData={rows} searchValue={searchValue} />
          </div>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel omnibar with grid</h1></header><main class="common-text"><h2>class="sol-panel"</h2><div class="sol-panel"><div class="sol-omnibar" id="sol-omnibar-1" role="group" aria-label="Search and filter controls"><div class="content-wrapper flex-container column"><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div><section class="header-wrapper flex-container"><div class="count-wrapper flex-container"><div class="search-filter-wrapper"><div class="search-wrapper"><span class="sol-screenreader-only" id="sol-omnibar-1-search-label" aria-hidden="true">Type to search for superheroes...</span><div class="search-box"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5 0a6.5 6.5 0 0 1 4.935 10.727l4.418 4.42a.5.5 0 1 1-.707.707l-4.419-4.42A6.5 6.5 0 1 1 6.5 0Zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" clip-rule="evenodd"></path></svg></div></span><input class="sol-input" id="sol-omnibar-1-search-input" aria-labelledby="sol-omnibar-1-search-label" placeholder="Type to search for superheroes..." autocomplete="off" type="search" value="" name="search"></div></div></div></div></div></div><div class="custom-content-wrapper"></div></section></div></div><div style="height: 100%; width: 100%;"><div class="sol-grid"><div class="grid-announcements"><div class="sol-screenreader-only" id="sol-grid-grid-_r_2_-status" role="status" aria-atomic="true">Grid loaded with 10 rows</div><div class="sol-screenreader-only" id="sol-grid-grid-_r_2_-selection" role="status"></div><div class="sol-screenreader-only" id="sol-grid-grid-_r_2_-sortable">Sortable column</div><span class="sol-screenreader-only" id="sol-grid-grid-_r_2_-selectall-desc"></span><span hidden="" id="sol-grid-grid-_r_2_-activation-hint">Press Enter to activate.</span><span hidden="" id="sol-grid-grid-_r_2_-activation-hint-selection">Press Space to select the row and Enter to activate.</span></div><div class="ag-theme-balham" style="height: 100%; --ag-internal-row-border-width: 0px; --ag-line-height: 36px;"><div class="ag-measurement-container"><div style="width: var(--ag-list-item-height, 15538px);"></div><div style="width: var(--ag-row-height, 15538px);"></div><div style="width: var(--ag-header-height, 15538px);"></div><div class="ag-measurement-element-border" style="--ag-internal-measurement-border: var(--ag-row-border, solid 15538px);"></div><div class="ag-measurement-element-border" style="--ag-internal-measurement-border: var(--ag-pinned-row-border, solid 15538px);"></div><div class="ag-measurement-element-border" style="--ag-internal-measurement-border: var(--ag-header-row-border, solid 15538px);"></div></div><div class="ag-aria-description-container" aria-live="polite" aria-relevant="additions text" aria-atomic="true"></div><div class="ag-root-wrapper ag-ltr ag-layout-normal" role="presentation" grid-id="1"><div class="ag-toolbar ag-hidden ag-focus-managed" role="toolbar" aria-hidden="true"></div><div class="ag-column-drop-wrapper" role="presentation"><div class="ag-unselectable ag-column-drop ag-column-drop-horizontal ag-column-drop-rowgroup ag-column-drop-horizontal-rowgroup ag-focus-managed ag-column-drop-empty ag-hidden" role="presentation" aria-hidden="true"><div aria-hidden="true" class="ag-column-drop-title-bar ag-column-drop-horizontal-title-bar"><span class="ag-icon ag-icon-group ag-column-drop-icon ag-column-drop-horizontal-icon" role="presentation" unselectable="on"></span></div><div class="ag-column-drop-list ag-column-drop-horizontal-list" role="presentation" aria-label="Row Groups"><span class="ag-column-drop-empty-message ag-column-drop-horizontal-empty-message" role="option">Drag here to set row groups</span></div></div><div class="ag-unselectable ag-column-drop ag-column-drop-horizontal ag-column-drop-pivot ag-column-drop-horizontal-pivot ag-focus-managed ag-column-drop-empty ag-hidden" role="presentation" aria-hidden="true"><div aria-hidden="true" class="ag-column-drop-title-bar ag-column-drop-horizontal-title-bar"><span class="ag-icon ag-icon-pivot ag-column-drop-icon ag-column-drop-horizontal-icon" role="presentation" unselectable="on"></span></div><div class="ag-column-drop-list ag-column-drop-horizontal-list" role="presentation" aria-label="Column Labels"><span class="ag-column-drop-empty-message ag-column-drop-horizontal-empty-message" role="option">Drag here to set column labels</span></div></div></div><div class="ag-root-wrapper-body ag-focus-managed ag-layout-normal" role="presentation"><div class="ag-tab-guard ag-tab-guard-top" role="presentation" tabindex="0"></div><div class="ag-root ag-unselectable ag-layout-normal ag-body-vertical-content-no-gap ag-body-horizontal-content-no-gap" role="grid" aria-colcount="3" aria-rowcount="11"><div class="ag-header ag-pivot-off ag-header-allow-overflow" role="presentation" style="height: 44px; min-height: 44px;"><div class="ag-pinned-left-header ag-hidden" aria-hidden="true" role="presentation" data-sol-grid-empty-rowgroup="true" style="width: 0px; min-width: 0px; max-width: 0px;"></div><div class="ag-header-viewport " role="rowgroup" tabindex="-1"><div class="ag-header-container" role="presentation" style="width: 1166px;"><div class="ag-header-row ag-header-row-column" role="row" tabindex="0" aria-rowindex="1" style="height: 44px; top: 0px; width: 1166px;"><div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-focus-managed" role="columnheader" col-id="id" aria-colindex="1" tabindex="-1" data-sol-grid-header-tooltip-wired="true" style="top: 0px; height: 44px; width: 388px; left: 0px; touch-action: none;"><div class="ag-header-cell-resize" role="presentation" aria-hidden="false" style="touch-action: none;"></div><div class="ag-header-cell-comp-wrapper" role="presentation"><div class="ag-cell-label-container" role="presentation">   <div class="ag-header-cell-label" data-ref="eLabel" role="presentation"> <span class="ag-header-cell-text" data-ref="eText">ID</span> <span class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" data-ref="eFilter" aria-hidden="true"><span class="ag-icon ag-icon-filter" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-container" data-ref="eSortIndicator"> <span class="ag-sort-indicator-icon ag-sort-order ag-hidden" data-ref="eSortOrder" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" data-ref="eSortAsc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" data-ref="eSortDesc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" data-ref="eSortMixed" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden" data-ref="eSortAbsoluteAsc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden" data-ref="eSortAbsoluteDesc" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" data-ref="eSortNone" aria-hidden="true"></span> </span> </div> </div></div></div><div class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed" role="columnheader" col-id="name" aria-colindex="2" tabindex="-1" aria-sort="none" data-sol-grid-header-tooltip-wired="true" aria-label="Name" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_2_-sortable" style="top: 0px; height: 44px; width: 389px; left: 388px; touch-action: none;"><div class="ag-header-cell-resize" role="presentation" aria-hidden="false" style="touch-action: none;"></div><div class="ag-header-cell-comp-wrapper" role="presentation"><div class="ag-cell-label-container" role="presentation">   <div class="ag-header-cell-label" data-ref="eLabel" role="button" tabindex="-1" data-sol-grid-sort-voice-target="true" aria-label="Name" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_2_-sortable"> <span class="ag-header-cell-text" data-ref="eText">Name</span> <span class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" data-ref="eFilter" aria-hidden="true"><span class="ag-icon ag-icon-filter" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-container" data-ref="eSortIndicator"> <span class="ag-sort-indicator-icon ag-sort-order ag-hidden" data-ref="eSortOrder" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" data-ref="eSortAsc" aria-hidden="true"><span class="ag-icon ag-icon-asc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" data-ref="eSortDesc" aria-hidden="true"><span class="ag-icon ag-icon-desc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" data-ref="eSortMixed" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden" data-ref="eSortAbsoluteAsc" aria-hidden="true"><span class="ag-icon ag-icon-aasc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden" data-ref="eSortAbsoluteDesc" aria-hidden="true"><span class="ag-icon ag-icon-adesc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" data-ref="eSortNone" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> </span> </div> </div></div></div><div class="ag-header-cell ag-column-last ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed" role="columnheader" col-id="universe" aria-colindex="3" tabindex="-1" aria-sort="none" data-sol-grid-header-tooltip-wired="true" aria-label="Universe" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_2_-sortable" style="top: 0px; height: 44px; width: 389px; left: 777px; touch-action: none;"><div class="ag-header-cell-resize" role="presentation" aria-hidden="false" style="touch-action: none;"></div><div class="ag-header-cell-comp-wrapper" role="presentation"><div class="ag-cell-label-container" role="presentation">   <div class="ag-header-cell-label" data-ref="eLabel" role="button" tabindex="-1" data-sol-grid-sort-voice-target="true" aria-label="Universe" data-sol-grid-sort-aria-label="true" aria-describedby="sol-grid-grid-_r_2_-sortable"> <span class="ag-header-cell-text" data-ref="eText">Universe</span> <span class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden" data-ref="eFilter" aria-hidden="true"><span class="ag-icon ag-icon-filter" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-container" data-ref="eSortIndicator"> <span class="ag-sort-indicator-icon ag-sort-order ag-hidden" data-ref="eSortOrder" aria-hidden="true"></span> <span class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden" data-ref="eSortAsc" aria-hidden="true"><span class="ag-icon ag-icon-asc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden" data-ref="eSortDesc" aria-hidden="true"><span class="ag-icon ag-icon-desc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden" data-ref="eSortMixed" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden" data-ref="eSortAbsoluteAsc" aria-hidden="true"><span class="ag-icon ag-icon-aasc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden" data-ref="eSortAbsoluteDesc" aria-hidden="true"><span class="ag-icon ag-icon-adesc" role="presentation" unselectable="on"></span></span> <span class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden" data-ref="eSortNone" aria-hidden="true"><span class="ag-icon ag-icon-none" role="presentation" unselectable="on"></span></span> </span> </div> </div></div></div></div></div></div><div class="ag-pinned-right-header ag-hidden" aria-hidden="true" role="presentation" data-sol-grid-empty-rowgroup="true" style="width: 0px; min-width: 0px; max-width: 0px;"></div></div><div class="ag-advanced-filter-header ag-hidden" role="row" aria-hidden="true"></div><div class="ag-floating-top ag-invisible" role="presentation" style="height: 0px; min-height: 0px;"><div class="ag-pinned-left-floating-top ag-hidden" role="presentation" data-sol-grid-empty-rowgroup="true" aria-hidden="true" style="width: 0px; max-width: 0px; min-width: 0px;"></div><div class="ag-viewport ag-floating-top-viewport" role="presentation" data-sol-grid-empty-rowgroup="true"><div class="ag-floating-top-container" role="presentation" style="width: 1166px;"></div></div><div class="ag-pinned-right-floating-top ag-hidden" role="presentation" data-sol-grid-empty-rowgroup="true" aria-hidden="true" style="width: 0px; max-width: 0px; min-width: 0px;"></div><div class="ag-floating-top-full-width-container" role="presentation" data-sol-grid-empty-rowgroup="true"></div></div><div class="ag-body ag-layout-normal" role="presentation"><div class="ag-body-viewport ag-row-no-animation ag-layout-normal" role="presentation"><div class="ag-pinned-left-cols-container ag-hidden" role="presentation" data-sol-grid-empty-rowgroup="true" aria-hidden="true" style="height: 360px; width: 0px; max-width: 0px; min-width: 0px;"></div><div class="ag-viewport ag-center-cols-viewport" role="rowgroup" style="height: 360px;"><div class="ag-center-cols-container" role="presentation" style="width: 1166px; height: 360px;"><div role="row" row-index="0" row-id="0" tabindex="0" class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first" aria-rowindex="2" aria-selected="false" style="transform: translateY(0px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">1</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Madara</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 777px; width: 389px;">Naruto</div></div><div role="row" row-index="1" row-id="1" tabindex="0" class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="3" aria-selected="false" style="transform: translateY(36px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">2</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Doctor Strange</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 777px; width: 389px;">Marvel</div></div><div role="row" row-index="2" row-id="2" tabindex="0" class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="4" aria-selected="false" style="transform: translateY(72px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">3</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Gohan</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 777px; width: 389px;">Dragon Ball Z</div></div><div role="row" row-index="3" row-id="3" tabindex="0" class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="5" aria-selected="false" style="transform: translateY(108px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">4</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Saitama</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 777px; width: 389px;">One Punch Man</div></div><div role="row" row-index="4" row-id="4" tabindex="0" class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="6" aria-selected="false" style="transform: translateY(144px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">5</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Sasuke</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 777px; width: 389px;">Naruto</div></div><div role="row" row-index="5" row-id="5" tabindex="0" class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="7" aria-selected="false" style="transform: translateY(180px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">6</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Spiderman</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-cell-value" aria-colindex="3" style="left: 777px; width: 389px;">Marvel</div></div><div role="row" row-index="6" row-id="6" tabindex="0" class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute" aria-rowindex="8" aria-selected="false" style="transform: translateY(216px); height: 36px;"><div role="gridcell" col-id="id" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first ag-cell-value" aria-colindex="1" style="left: 0px; width: 388px;">7</div><div role="gridcell" col-id="name" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value" aria-colindex="2" style="left: 388px; width: 389px;">Black Adam</div><div role="gridcell" col-id="universe" tabindex="-1" class="ag-cell ag-cell-not-inline-editing ag-cell-normal
```

## Examples / Panel Scrollable

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel with Scrollable Content</h1>
    </header>
    <main className="common-text">
      <div>
        <h2>class=&quot;sol-panel sol-scrollable sol-padding&quot;</h2>
        <div className="sol-panel sol-scrollable sol-padding" style={{
        height: '300px'
      } as CSSProperties} tabIndex={0} role="region" aria-label="Long content panel with scrollable region">
          <h3>Long Content Panel with Scrollable</h3>
          <p>This panel demonstrates the scrollable functionality with a fixed height and overflow content.</p>
          <div className="content-section">
            <h4>Section 1: Introduction</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="content-section">
            <h4>Section 2: Features</h4>
            <ul>
              <li>Automatic vertical scrolling when content exceeds panel height</li>
              <li>Maintains panel styling and borders</li>
              <li>Compatible with all panel padding variants</li>
            </ul>
          </div>
          <div className="content-section">
            <h4>Section 3: Usage Guidelines</h4>
            <ol>
              <li>
                Add the <code>sol-scrollable</code> class to enable vertical scrolling
              </li>
              <li>Set a fixed height on the panel container</li>
              <li>Combine with padding classes as needed</li>
            </ol>
          </div>
          <div className="content-section">
            <h4>Section 4: Additional Content</h4>
            <p>This is the end of the scrollable content. You should be able to scroll back to the top.</p>
          </div>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel with Scrollable Content</h1></header><main class="common-text"><div><h2>class="sol-panel sol-scrollable sol-padding"</h2><div class="sol-panel sol-scrollable sol-padding" tabindex="0" role="region" aria-label="Long content panel with scrollable region" style="height: 300px;"><h3>Long Content Panel with Scrollable</h3><p>This panel demonstrates the scrollable functionality with a fixed height and overflow content.</p><div class="content-section"><h4>Section 1: Introduction</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div><div class="content-section"><h4>Section 2: Features</h4><ul><li>Automatic vertical scrolling when content exceeds panel height</li><li>Maintains panel styling and borders</li><li>Compatible with all panel padding variants</li></ul></div><div class="content-section"><h4>Section 3: Usage Guidelines</h4><ol><li>Add the <code>sol-scrollable</code> class to enable vertical scrolling</li><li>Set a fixed height on the panel container</li><li>Combine with padding classes as needed</li></ol></div><div class="content-section"><h4>Section 4: Additional Content</h4><p>This is the end of the scrollable content. You should be able to scroll back to the top.</p></div></div></div></main>
```

## Examples / Panel Tabs

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel Tabs</h1>
    </header>
    <main className="common-text">
      <h2>class=&quot;sol-panel&quot;</h2>
      <SOLTabs className="sol-panel">
        <SOLTab title="Details A">Content A - Loaded</SOLTab>
        <SOLTab title="Details B">Content B - Loaded</SOLTab>
        <SOLTab title="Details C">Content C - Loaded</SOLTab>
      </SOLTabs>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel Tabs</h1></header><main class="common-text"><h2>class="sol-panel"</h2><div class="sol-tabs-default sol-tabs-alignment-left sol-panel"><div data-orientation="horizontal" data-activation-direction="none" class="sol-tabs-root"><div class="sol-tabs-header"><div data-orientation="horizontal" data-activation-direction="none" role="tablist" class="sol-tabs-list"><button type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabindex="0" role="tab" aria-selected="true" data-composite-item-active="" class="sol-tabs-tab"><span class="sol-tabs-icon-text">Details A</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" class="sol-tabs-tab"><span class="sol-tabs-icon-text">Details B</span></button><button type="button" data-orientation="horizontal" aria-disabled="false" tabindex="-1" role="tab" aria-selected="false" class="sol-tabs-tab"><span class="sol-tabs-icon-text">Details C</span></button></div></div><div data-orientation="horizontal" data-activation-direction="none" role="tabpanel" tabindex="0" data-index="0" class="sol-tabs-panel">Content A - Loaded</div></div></div></main>
```

## Examples / Scrollable

Usage:
```tsx
() => <>
    <header>
      <h1 className="sol-screenreader-only">Panel scrollable body</h1>
    </header>
    <main className="common-text">
      <h2>class=&quot;sol-panel-body sol-scrollable&quot; on a fixed-height panel</h2>
      <div className="sol-panel sol-panel-divider-header" style={{
      height: '300px'
    }} role="region" aria-labelledby="panel-scroll-title">
        <div className="sol-panel-header">
          <h2 className="sol-panel-title" id="panel-scroll-title">
            Scrollable Panel
          </h2>
        </div>
        <div className="sol-panel-body sol-scrollable" tabIndex={0} aria-label="Scrollable panel content">
          <p>
            Add <code>sol-scrollable</code> to <code>sol-panel-body</code> so only the body scrolls — the header stays pinned at the top.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
        </div>
      </div>
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Panel scrollable body</h1></header><main class="common-text"><h2>class="sol-panel-body sol-scrollable" on a fixed-height panel</h2><div class="sol-panel sol-panel-divider-header" role="region" aria-labelledby="panel-scroll-title" style="height: 300px;"><div class="sol-panel-header"><h2 class="sol-panel-title" id="panel-scroll-title">Scrollable Panel</h2></div><div class="sol-panel-body sol-scrollable" tabindex="0" aria-label="Scrollable panel content"><p>Add <code>sol-scrollable</code> to <code>sol-panel-body</code> so only the body scrolls — the header stays pinned at the top.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p></div></div></main>
```
