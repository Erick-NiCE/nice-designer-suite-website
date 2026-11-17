# Side Panel (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/Label.css`, `css/SidePanel.css`, `css/TextArea.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-icon`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-input`, `sol-input-container`, `sol-input-label-area`, `sol-input-wrapper`, `sol-label`, `sol-label-content`, `sol-label-text`, `sol-screenreader-only`, `sol-side-panel`, `sol-side-panel--edge-left`, `sol-side-panel--hidden`, `sol-side-panel--persistent`, `sol-side-panel--push`, `sol-side-panel-footer`, `sol-side-panel__body`, `sol-side-panel__close`, `sol-side-panel__header`, `sol-side-panel__header-actions`, `sol-side-panel__inner`, `sol-side-panel__resize`, `sol-side-panel__title`, `sol-side-panel__titles`, `sol-text-area`, `sol-text-input`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Accessibility

Usage:
```tsx
() => {
  const [open, setOpen] = useState(false);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Side panel accessibility</h1>
      </header>
      <main>
        <div style={layoutStyle}>
          <div style={pageStyle}>
            <div style={pageHeaderStyle}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sol-size-spacing-sm)'
            }}>
                <SOLButton variant="tertiary" size="medium" icon="sol-left-chevron" ariaLabel="Back" onButtonClick={() => undefined} />
                <h2 className="heading-md" style={{
                margin: 0
              }}>
                  Page Title
                </h2>
              </div>
              <SOLButton id="panel-trigger" variant="primary" size="medium" onButtonClick={() => setOpen(true)}>
                Open panel
              </SOLButton>
            </div>
            <div style={pageContentStyle}>
              <ul className="body-md" style={{
              color: 'var(--sol-color-text-secondary)',
              paddingLeft: 'var(--sol-size-spacing-lg)',
              margin: 0
            }}>
                <li>Focus moves into the panel on open.</li>
                <li>Focus returns to the trigger button on close.</li>
                <li>
                  The panel root has <code>role=&quot;complementary&quot;</code>.
                </li>
                <li>Dismissal is intentional: only the × close button closes the panel.</li>
              </ul>
            </div>
          </div>
          <SOLSidePanel open={open} mode="push" title="Accessibility Demo" onOpenChange={setOpen} footer={<SOLSidePanelFooter>
                <SOLButton variant="secondary" onButtonClick={() => setOpen(false)}>
                  Close
                </SOLButton>
              </SOLSidePanelFooter>}>
            <SOLTextInput label="First focusable field" name="a11yField" placeholder="Focus lands here on open" externalAriaDescribedby="a11y-panel-instructions" onValueChange={() => undefined} />
            <p id="a11y-panel-instructions" className="body-md" style={{
            color: 'var(--sol-color-text-secondary)',
            marginTop: 'var(--sol-size-spacing-sm)'
          }}>
              Use <kbd>Tab</kbd> to cycle through focusable elements. Close the panel to return focus to the trigger button.
            </p>
          </SOLSidePanel>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Side panel accessibility</h1></header><main><div style="position: relative; display: flex; height: 520px; overflow: hidden; border: 1px solid var(--sol-color-border-subtle); border-radius: var(--sol-size-radius-sm); background: var(--sol-color-background-surface-panel);"><div style="display: flex; flex-direction: column; flex: 1 1 0%; min-width: 0px;"><div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--sol-size-spacing-sm); min-height: 4.5rem; padding: 0 var(--sol-size-spacing-xl); border-bottom: 1px solid var(--sol-color-border-subtle); flex: 0 0 auto;"><div style="display: flex; align-items: center; gap: var(--sol-size-spacing-sm);"><button type="button" aria-label="Back" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><h2 class="heading-md" style="margin: 0px;">Page Title</h2></div><button type="button" id="panel-trigger" class="sol-button btn-primary-medium"><span class="projected-content">Open panel</span></button></div><div style="flex: 1 1 auto; min-height: 0px; overflow: auto; padding: var(--sol-size-spacing-xl); background: var(--sol-color-background-surface-panel);"><ul class="body-md" style="color: var(--sol-color-text-secondary); padding-left: var(--sol-size-spacing-lg); margin: 0px;"><li>Focus moves into the panel on open.</li><li>Focus returns to the trigger button on close.</li><li>The panel root has <code>role="complementary"</code>.</li><li>Dismissal is intentional: only the × close button closes the panel.</li></ul></div></div><section role="complementary" tabindex="-1" aria-label="Accessibility Demo" class="sol-side-panel sol-side-panel--push sol-side-panel--hidden" style="--panel-w: 25rem;"><div class="sol-side-panel__inner"><div class="sol-side-panel__resize" title="Drag to resize"></div><header class="sol-side-panel__header"><div class="sol-side-panel__titles"><h2 id="_r_3_" class="sol-side-panel__title heading-md">Accessibility Demo</h2></div><div class="sol-side-panel__header-actions"><button type="button" aria-label="Close side panel" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium sol-side-panel__close"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></header><div class="sol-side-panel__body"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_7_"><span class="sol-label-content"><span id="_r_7_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">First focusable field</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_7_" aria-describedby="a11y-panel-instructions" placeholder="Focus lands here on open" autocomplete="off" type="text" value="" name="a11yField"></div></div><p id="a11y-panel-instructions" class="body-md" style="color: var(--sol-color-text-secondary); margin-top: var(--sol-size-spacing-sm);">Use <kbd>Tab</kbd> to cycle through focusable elements. Close the panel to return focus to the trigger button.</p></div><div class="sol-side-panel-footer"><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Close</span></button></div></div></section></div></main>
```

## Examples / As Secondary Sidebar

Usage:
```tsx
({
  panelId,
  persistent,
  ariaRole,
  minWidth,
  maxWidth
}) => {
  const [open, setOpen] = useState(true);
  return <SidePanelProvider>
      <header>
        <h1 className="sol-screenreader-only">Side panel as secondary sidebar</h1>
      </header>
      <main>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: 520,
        border: '1px solid var(--sol-color-border-subtle)'
      }} className="cxone-app-panel-main">
          <div style={{
          display: 'flex',
          flex: '1 1 auto',
          overflowX: 'auto',
          overflowY: 'hidden'
        }} className="cxone-app-panel-main-interior">
            <SOLSidePanel open={open} onOpenChange={setOpen} panelId={panelId || undefined} mode="push" edge="left" persistent={persistent} ariaRole={ariaRole} title="Dashboards" size="16rem" minWidth={minWidth} maxWidth={maxWidth}>
              <p className="body-sm" style={{
              padding: 'var(--sol-size-spacing-md)',
              color: 'var(--sol-color-text-secondary)'
            }}>
                This is where sidebar content will go.
              </p>
            </SOLSidePanel>
            <main style={{
            flex: '1 1 auto',
            minWidth: 0,
            padding: 24,
            overflow: 'auto'
          }}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sol-size-spacing-sm)',
              padding: '0 var(--sol-size-spacing-sm)',
              height: 44,
              borderBottom: '1px solid var(--sol-color-border-subtle)',
              flexShrink: 0
            }}>
                {!open && (panelId ? <PanelIdTrigger panelId={panelId} /> : <SOLButton variant="tertiary" size="medium" ariaLabel="Open sidebar" icon="sol-sidebar-collapse" onButtonClick={() => setOpen(true)} />)}
                <span className="heading-md">Overview</span>
              </div>
              <p className="body-md" style={{
              color: 'var(--sol-color-text-secondary)',
              maxWidth: '50ch'
            }}>
                This is <code>SOLSidePanel</code> configured with push mode, left edge, and persistent. When placed inside the boilerplate layout
                (`.cxone-app-panel-main:has(.cxone-app-panel-main-interior)`), sidebar styling is auto-applied: square corners, no card frame, edge
                divider only.
              </p>
            </main>
          </div>
        </div>
      </main>
    </SidePanelProvider>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Side panel as secondary sidebar</h1></header><main><div class="cxone-app-panel-main" style="display: flex; flex-direction: column; height: 520px; border: 1px solid var(--sol-color-border-subtle);"><div class="cxone-app-panel-main-interior" style="display: flex; flex: 1 1 auto; overflow: auto hidden;"><section role="navigation" tabindex="-1" aria-label="Dashboards" class="sol-side-panel sol-side-panel--push sol-side-panel--edge-left sol-side-panel--persistent is-open" style="--panel-w: 16rem;"><div class="sol-side-panel__inner"><div class="sol-side-panel__resize" title="Drag to resize"></div><header class="sol-side-panel__header"><div class="sol-side-panel__titles"><h2 id="_r_0_" class="sol-side-panel__title heading-md">Dashboards</h2></div><div class="sol-side-panel__header-actions"><button type="button" aria-label="Collapse Dashboards" aria-expanded="true" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 2V14M10.6667 10L8.66667 8L10.6667 6M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></span><span class="projected-content"></span></button></div></header><div class="sol-side-panel__body"><p class="body-sm" style="padding: var(--sol-size-spacing-md); color: var(--sol-color-text-secondary);">This is where sidebar content will go.</p></div></div></section><main style="flex: 1 1 auto; min-width: 0px; padding: 24px; overflow: auto;"><div style="display: flex; align-items: center; gap: var(--sol-size-spacing-sm); padding: 0 var(--sol-size-spacing-sm); height: 44px; border-bottom: 1px solid var(--sol-color-border-subtle); flex-shrink: 0;"><span class="heading-md">Overview</span></div><p class="body-md" style="color: var(--sol-color-text-secondary); max-width: 50ch;">This is <code>SOLSidePanel</code> configured with push mode, left edge, and persistent. When placed inside the boilerplate layout (`.cxone-app-panel-main:has(.cxone-app-panel-main-interior)`), sidebar styling is auto-applied: square corners, no card frame, edge divider only.</p></main></div></div></main>
```

## Examples / Header And Footer Actions

Usage:
```tsx
args => {
  const [open, setOpen] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [notesValue, setNotesValue] = useState('');
  return <>
      <header>
        <h1 className="sol-screenreader-only">Side panel header and footer actions</h1>
      </header>
      <main>
        <div style={layoutStyle}>
          <div style={pageStyle}>
            <div style={pageHeaderStyle}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sol-size-spacing-sm)'
            }}>
                <SOLButton variant="tertiary" size="medium" icon="sol-left-chevron" ariaLabel="Back" onButtonClick={() => undefined} />
                <h2 className="heading-md" style={{
                margin: 0
              }}>
                  Documents
                </h2>
              </div>
              <SOLButton variant="primary" size="medium" onButtonClick={() => setOpen(true)}>
                New document
              </SOLButton>
            </div>
            <div style={pageContentStyle}>
              <p className="body-md" style={{
              color: 'var(--sol-color-text-secondary)',
              maxWidth: '50ch'
            }}>
                Extra actions are slotted into the panel header beside the built-in × close button, and the footer sticks to the bottom while the body
                scrolls.
              </p>
            </div>
          </div>
          <SOLSidePanel open={open} mode={args.mode} title="New Document" onOpenChange={setOpen} actionsSlot={<>
                <SOLButton variant="tertiary" size="small" ariaLabel="Edit" onButtonClick={() => undefined}>
                  Edit
                </SOLButton>
                <SOLButton variant="tertiary" size="small" ariaLabel="Share" onButtonClick={() => undefined}>
                  Share
                </SOLButton>
              </>} footer={<SOLSidePanelFooter>
                <SOLButton variant="secondary" onButtonClick={() => setOpen(false)}>
                  Cancel
                </SOLButton>
                <SOLButton onButtonClick={() => setOpen(false)}>Save</SOLButton>
              </SOLSidePanelFooter>}>
            <SOLTextInput label="Name" name="name" value={nameValue} placeholder="Enter a name…" onValueChange={setNameValue} />
            <div style={{
            marginTop: 'var(--sol-size-spacing-sm)'
          }}>
              <SOLTextArea label="Notes" name="notes" value={notesValue} minRows={4} placeholder="Add notes…" onValueChange={setNotesValue} />
            </div>
          </SOLSidePanel>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Side panel header and footer actions</h1></header><main><div style="position: relative; display: flex; height: 520px; overflow: hidden; border: 1px solid var(--sol-color-border-subtle); border-radius: var(--sol-size-radius-sm); background: var(--sol-color-background-surface-panel);"><div style="display: flex; flex-direction: column; flex: 1 1 0%; min-width: 0px;"><div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--sol-size-spacing-sm); min-height: 4.5rem; padding: 0 var(--sol-size-spacing-xl); border-bottom: 1px solid var(--sol-color-border-subtle); flex: 0 0 auto;"><div style="display: flex; align-items: center; gap: var(--sol-size-spacing-sm);"><button type="button" aria-label="Back" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><h2 class="heading-md" style="margin: 0px;">Documents</h2></div><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">New document</span></button></div><div style="flex: 1 1 auto; min-height: 0px; overflow: auto; padding: var(--sol-size-spacing-xl); background: var(--sol-color-background-surface-panel);"><p class="body-md" style="color: var(--sol-color-text-secondary); max-width: 50ch;">Extra actions are slotted into the panel header beside the built-in × close button, and the footer sticks to the bottom while the body scrolls.</p></div></div><section role="complementary" tabindex="-1" aria-label="New Document" class="sol-side-panel sol-side-panel--push sol-side-panel--hidden" style="--panel-w: 25rem;"><div class="sol-side-panel__inner"><div class="sol-side-panel__resize" title="Drag to resize"></div><header class="sol-side-panel__header"><div class="sol-side-panel__titles"><h2 id="_r_3_" class="sol-side-panel__title heading-md">New Document</h2></div><div class="sol-side-panel__header-actions"><button type="button" aria-label="Edit" class="sol-button btn-tertiary-small"><span class="projected-content">Edit</span></button><button type="button" aria-label="Share" class="sol-button btn-tertiary-small"><span class="projected-content">Share</span></button><button type="button" aria-label="Close side panel" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium sol-side-panel__close"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></header><div class="sol-side-panel__body"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_7_"><span class="sol-label-content"><span id="_r_7_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Name</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_7_" placeholder="Enter a name…" autocomplete="off" type="text" value="" name="name"></div></div><div style="margin-top: var(--sol-size-spacing-sm);"><div class="sol-text-area sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_c_"><span class="sol-label-content"><span id="_r_c_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Notes</span></span></label></div><div class="sol-input-container"><textarea class="sol-input body-md font-size-small hide-scroll" id="_r_c_" name="notes" placeholder="Add notes…" rows="1" autocomplete="off" wrap="on" aria-label="Notes" style="min-height: 120px; height: 120px;"></textarea></div><span class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></span></div></div></div><div class="sol-side-panel-footer"><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Cancel</span></button><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Save</span></button></div></div></section></div></main>
```

## Examples / Playground

Usage:
```tsx
args => {
  const [open, setOpen] = useState(!!args.open);
  useEffect(() => setOpen(!!args.open), [args.open]);
  const [ownerValue, setOwnerValue] = useState('');
  const [notesValue, setNotesValue] = useState('');
  return <>
      <header>
        <h1 className="sol-screenreader-only">Side panel playground</h1>
      </header>
      <main>
        <div style={layoutStyle}>
          <div style={pageStyle}>
            <div style={pageHeaderStyle}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sol-size-spacing-sm)'
            }}>
                <SOLButton variant="tertiary" size="medium" icon="sol-left-chevron" ariaLabel="Back" onButtonClick={() => undefined} />
                <h2 className="heading-md" style={{
                margin: 0
              }}>
                  Page Title
                </h2>
              </div>
              <SOLButton variant="primary" size="medium" onButtonClick={() => setOpen(true)}>
                Open panel
              </SOLButton>
            </div>
            <div style={pageContentStyle}>
              <p className="body-md" style={{
              color: 'var(--sol-color-text-secondary)',
              maxWidth: '50ch'
            }}>
                The panel reflows this area to make room, with no backdrop.
              </p>
            </div>
          </div>
          <SOLSidePanel open={open} mode={args.mode} edge={args.edge} title={args.title} size={args.size} width={args.width} resizable={args.resizable} stickyToViewport={args.stickyToViewport} destroyOnClose={args.destroyOnClose} onOpenChange={v => {
          setOpen(v);
          action('openChange')(v);
        }} onOpened={action('opened')} onClosed={() => {
          action('closed')();
          if (args.destroyOnClose) {
            setOwnerValue('');
            setNotesValue('');
          }
        }} footer={<SOLSidePanelFooter>
                <SOLButton variant="secondary" onButtonClick={() => setOpen(false)}>
                  Cancel
                </SOLButton>
                <SOLButton onButtonClick={() => setOpen(false)}>Apply</SOLButton>
              </SOLSidePanelFooter>}>
            <SOLTextInput label="Owner" name="owner" value={ownerValue} placeholder="Filter by owner" onValueChange={setOwnerValue} />
            <div style={{
            marginTop: 'var(--sol-size-spacing-sm)'
          }}>
              <SOLTextArea label="Notes" name="notes" value={notesValue} minRows={3} placeholder="Add notes…" onValueChange={setNotesValue} />
            </div>
          </SOLSidePanel>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Side panel playground</h1></header><main><div style="position: relative; display: flex; height: 520px; overflow: hidden; border: 1px solid var(--sol-color-border-subtle); border-radius: var(--sol-size-radius-sm); background: var(--sol-color-background-surface-panel);"><div style="display: flex; flex-direction: column; flex: 1 1 0%; min-width: 0px;"><div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--sol-size-spacing-sm); min-height: 4.5rem; padding: 0 var(--sol-size-spacing-xl); border-bottom: 1px solid var(--sol-color-border-subtle); flex: 0 0 auto;"><div style="display: flex; align-items: center; gap: var(--sol-size-spacing-sm);"><button type="button" aria-label="Back" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><h2 class="heading-md" style="margin: 0px;">Page Title</h2></div><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Open panel</span></button></div><div style="flex: 1 1 auto; min-height: 0px; overflow: auto; padding: var(--sol-size-spacing-xl); background: var(--sol-color-background-surface-panel);"><p class="body-md" style="color: var(--sol-color-text-secondary); max-width: 50ch;">The panel reflows this area to make room, with no backdrop.</p></div></div><section role="complementary" tabindex="-1" aria-label="Filters" class="sol-side-panel sol-side-panel--push sol-side-panel--hidden" style="--panel-w: 25rem;"><div class="sol-side-panel__inner"><div class="sol-side-panel__resize" title="Drag to resize"></div><header class="sol-side-panel__header"><div class="sol-side-panel__titles"><h2 id="_r_3_" class="sol-side-panel__title heading-md">Filters</h2></div><div class="sol-side-panel__header-actions"><button type="button" aria-label="Close side panel" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium sol-side-panel__close"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></header><div class="sol-side-panel__body"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_7_"><span class="sol-label-content"><span id="_r_7_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Owner</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_7_" placeholder="Filter by owner" autocomplete="off" type="text" value="" name="owner"></div></div><div style="margin-top: var(--sol-size-spacing-sm);"><div class="sol-text-area sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_c_"><span class="sol-label-content"><span id="_r_c_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Notes</span></span></label></div><div class="sol-input-container"><textarea class="sol-input body-md font-size-small hide-scroll" id="_r_c_" name="notes" placeholder="Add notes…" rows="1" autocomplete="off" wrap="on" aria-label="Notes" style="min-height: 90px; height: 90px;"></textarea></div><span class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></span></div></div></div><div class="sol-side-panel-footer"><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Cancel</span></button><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Apply</span></button></div></div></section></div></main>
```

## Examples / Resizable

Usage:
```tsx
args => {
  const [open, setOpen] = useState(true);
  return <>
      <header>
        <h1 className="sol-screenreader-only">Side panel resizable</h1>
      </header>
      <main>
        <div style={layoutStyle}>
          <div style={pageStyle}>
            <div style={pageHeaderStyle}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sol-size-spacing-sm)'
            }}>
                <SOLButton variant="tertiary" size="medium" icon="sol-left-chevron" ariaLabel="Back" onButtonClick={() => undefined} />
                <h2 className="heading-md" style={{
                margin: 0
              }}>
                  Dashboards
                </h2>
              </div>
              <SOLButton variant="primary" size="medium" onButtonClick={() => setOpen(v => !v)}>
                {open ? 'Close' : 'Open'} panel
              </SOLButton>
            </div>
            <div style={pageContentStyle}>
              <p className="body-md" style={{
              color: 'var(--sol-color-text-secondary)',
              maxWidth: '50ch'
            }}>
                The panel is resizable between its minimum (25rem) and maximum (45rem) bounds. Grab the left edge of the panel and drag to adjust its
                width.
              </p>
            </div>
          </div>
          <SOLSidePanel open={open} mode="push" title="Resizable Panel" size={args.size} resizable={args.resizable} onWidthChange={action('width change')} onOpenChange={setOpen} footer={<SOLSidePanelFooter>
                <SOLButton variant="secondary" onButtonClick={() => setOpen(false)}>
                  Close
                </SOLButton>
              </SOLSidePanelFooter>}>
            <p className="body-md" style={{
            color: 'var(--sol-color-text-secondary)'
          }}>
              Resize by dragging the left edge of this panel.
            </p>
          </SOLSidePanel>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Side panel resizable</h1></header><main><div style="position: relative; display: flex; height: 520px; overflow: hidden; border: 1px solid var(--sol-color-border-subtle); border-radius: var(--sol-size-radius-sm); background: var(--sol-color-background-surface-panel);"><div style="display: flex; flex-direction: column; flex: 1 1 0%; min-width: 0px;"><div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--sol-size-spacing-sm); min-height: 4.5rem; padding: 0 var(--sol-size-spacing-xl); border-bottom: 1px solid var(--sol-color-border-subtle); flex: 0 0 auto;"><div style="display: flex; align-items: center; gap: var(--sol-size-spacing-sm);"><button type="button" aria-label="Back" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.147 2.16a.471.471 0 0 1 .707 0 .581.581 0 0 1 0 .771L6.207 8l4.647 5.069a.581.581 0 0 1 0 .771.471.471 0 0 1-.707 0l-5-5.454a.581.581 0 0 1 0-.772l5-5.454Z"></path></svg></div></span></span><span class="projected-content"></span></button><h2 class="heading-md" style="margin: 0px;">Dashboards</h2></div><button type="button" class="sol-button btn-primary-medium"><span class="projected-content">Close panel</span></button></div><div style="flex: 1 1 auto; min-height: 0px; overflow: auto; padding: var(--sol-size-spacing-xl); background: var(--sol-color-background-surface-panel);"><p class="body-md" style="color: var(--sol-color-text-secondary); max-width: 50ch;">The panel is resizable between its minimum (25rem) and maximum (45rem) bounds. Grab the left edge of the panel and drag to adjust its width.</p></div></div><section role="complementary" tabindex="-1" aria-label="Resizable Panel" class="sol-side-panel sol-side-panel--push is-open" style="--panel-w: 35rem;"><div class="sol-side-panel__inner"><div class="sol-side-panel__resize" title="Drag to resize"></div><header class="sol-side-panel__header"><div class="sol-side-panel__titles"><h2 id="_r_3_" class="sol-side-panel__title heading-md">Resizable Panel</h2></div><div class="sol-side-panel__header-actions"><button type="button" aria-label="Close side panel" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-medium sol-side-panel__close"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></span><span class="projected-content"></span></button></div></header><div class="sol-side-panel__body"><p class="body-md" style="color: var(--sol-color-text-secondary);">Resize by dragging the left edge of this panel.</p></div><div class="sol-side-panel-footer"><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Close</span></button></div></div></section></div></main>
```
