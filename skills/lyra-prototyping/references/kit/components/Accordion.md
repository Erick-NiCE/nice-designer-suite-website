# Accordion (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/AccordionItem.css`, `css/Icon.css`, `css/Tooltip.css`.
Component classes: `sol-accordion-arrow-icon`, `sol-accordion-group`, `sol-accordion-header-content`, `sol-accordion-item`, `sol-accordion-item-body`, `sol-accordion-item-content`, `sol-accordion-item-header`, `sol-accordion-item-trigger`, `sol-accordion-item-trigger-content`, `sol-icon`, `sol-icon-host`, `sol-panel`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Multiple

Usage:
```tsx
args => <>
    <style>
      {`
        .accordion-custom-header {
          display: flex;
          gap: var(--sol-size-spacing-sm);
          align-items: center;
        }

        .accordion-custom-header svg {
          padding: 0.25rem 0 0;
          width: var(--sol-size-icon-md);
          height: var(--sol-size-icon-md);
        }
      `}
    </style>
    <header>
      <h1 className="sol-screenreader-only">{args.storyTitle}</h1>
    </header>
    <main className="sol-panel">
      <SOLAccordion multiple={args.multiple} id={args.groupId || null} headingLevel={args.headingLevel ? Number(args.headingLevel) : null}>
        <SOLAccordionItem customHeader={customHeaderContent} disabled={args.disabled} onOpened={() => action('accordion 1 opened')()} onClosed={() => action('accordion 1 closed')()} onToggle={() => action('accordion 1 toggle')()}>
          <p>This is the primary content of the panel.</p>
        </SOLAccordionItem>

        <SOLAccordionItem id={args.itemIds ? 'accordion-2' : null} header={args.header} selected={args.selected} onOpened={() => action('accordion 2 opened')()} onClosed={() => action('accordion 2 closed')()} onToggle={() => action('accordion 2 toggle')()}>
          <p id="pInsideAccordionItem" style={{
          margin: 0
        }}>
            This is the content inside
          </p>
          <p style={{
          margin: 0
        }}>
            Interdum non eleifend aliquet viverra erat etiam netus fusce duis, nisl sodales rhoncus turpis consequat dolor lacus dapibus curae, rutrum
            orci auctor maecenas et varius netus aenean.
          </p>
        </SOLAccordionItem>

        <SOLAccordionItem header={args.longHeader ? longHeaderText : 'Accordion 3'} customHeader={args.headerAndCustom ? customHeaderContent : undefined} onOpened={() => action('accordion 3 opened')()} onClosed={() => action('accordion 3 closed')()} onToggle={() => action('accordion 3 toggle')()}>
          <p style={{
          margin: 0
        }}>This is the content of the panel.</p>
          <p style={{
          margin: 0
        }}>more text</p>
        </SOLAccordionItem>

        <SOLAccordionItem customHeader={customHeaderContent} onOpened={() => action('accordion 4 opened')()} onClosed={() => action('accordion 4 closed')()} onToggle={() => action('accordion 4 toggle')()}>
          <p style={{
          margin: 0
        }}>This is also the content of the panel.</p>
        </SOLAccordionItem>
      </SOLAccordion>
    </main>
  </>
```

Rendered markup:
```html
<style>
        .accordion-custom-header {
          display: flex;
          gap: var(--sol-size-spacing-sm);
          align-items: center;
        }
        .accordion-custom-header svg {
          padding: 0.25rem 0 0;
          width: var(--sol-size-icon-md);
          height: var(--sol-size-icon-md);
        }
      </style><header><h1 class="sol-screenreader-only">Multiple</h1></header><main class="sol-panel"><div data-orientation="vertical" dir="ltr" role="region" class="sol-accordion-group"><div data-disabled="" data-orientation="vertical" data-hidden="" data-index="0" data-closed="" class="sol-accordion-item"><div data-disabled="" data-orientation="vertical" data-hidden="" data-index="0" data-closed="" class="sol-accordion-item-header"><button type="button" tabindex="-1" data-value="accordion-2" data-disabled="" data-orientation="vertical" data-hidden="" aria-disabled="true" aria-expanded="false" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content"><span class="accordion-custom-header"><svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg>Accordion Details</span></span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-disabled="" data-orientation="vertical" data-hidden="" data-index="0" data-closed="" hidden="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto;"><div class="sol-accordion-item-body"><p>This is the primary content of the panel.</p></div></div></div><div data-orientation="vertical" data-index="1" data-open="" id="accordion-2" class="sol-accordion-item"><div data-orientation="vertical" data-index="1" data-open="" class="sol-accordion-item-header"><button type="button" tabindex="0" data-value="accordion-2" data-orientation="vertical" data-index="1" data-panel-open="" aria-disabled="false" aria-expanded="true" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content">Accordion 2</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-orientation="vertical" data-index="1" data-open="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto; animation-name: none;"><div class="sol-accordion-item-body"><p id="pInsideAccordionItem" style="margin: 0px;">This is the content inside</p><p style="margin: 0px;">Interdum non eleifend aliquet viverra erat etiam netus fusce duis, nisl sodales rhoncus turpis consequat dolor lacus dapibus curae, rutrum orci auctor maecenas et varius netus aenean.</p></div></div></div><div data-orientation="vertical" data-hidden="" data-index="2" data-closed="" class="sol-accordion-item"><div data-orientation="vertical" data-hidden="" data-index="2" data-closed="" class="sol-accordion-item-header"><button type="button" tabindex="0" data-value="accordion-2" data-orientation="vertical" data-hidden="" data-index="2" aria-disabled="false" aria-expanded="false" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content">Accordion 3</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-orientation="vertical" data-hidden="" data-index="2" data-closed="" hidden="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto;"><div class="sol-accordion-item-body"><p style="margin: 0px;">This is the content of the panel.</p><p style="margin: 0px;">more text</p></div></div></div><div data-orientation="vertical" data-hidden="" data-index="3" data-closed="" class="sol-accordion-item"><div data-orientation="vertical" data-hidden="" data-index="3" data-closed="" class="sol-accordion-item-header"><button type="button" tabindex="0" data-value="accordion-2" data-orientation="vertical" data-hidden="" data-index="3" aria-disabled="false" aria-expanded="false" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content"><span class="accordion-custom-header"><svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg>Accordion Details</span></span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-orientation="vertical" data-hidden="" data-index="3" data-closed="" hidden="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto;"><div class="sol-accordion-item-body"><p style="margin: 0px;">This is also the content of the panel.</p></div></div></div><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span></div></main>
```

## Examples / Single

Usage:
```tsx
args => <>
    <style>
      {`
        .accordion-custom-header {
          display: flex;
          gap: var(--sol-size-spacing-sm);
          align-items: center;
        }

        .accordion-custom-header svg {
          padding: 0.25rem 0 0;
          width: var(--sol-size-icon-md);
          height: var(--sol-size-icon-md);
        }
      `}
    </style>
    <header>
      <h1 className="sol-screenreader-only">{args.storyTitle}</h1>
    </header>
    <main className="sol-panel">
      <SOLAccordion multiple={args.multiple} id={args.groupId || null} headingLevel={args.headingLevel ? Number(args.headingLevel) : null}>
        <SOLAccordionItem customHeader={customHeaderContent} disabled={args.disabled} onOpened={() => action('accordion 1 opened')()} onClosed={() => action('accordion 1 closed')()} onToggle={() => action('accordion 1 toggle')()}>
          <p>This is the primary content of the panel.</p>
        </SOLAccordionItem>

        <SOLAccordionItem id={args.itemIds ? 'accordion-2' : null} header={args.header} selected={args.selected} onOpened={() => action('accordion 2 opened')()} onClosed={() => action('accordion 2 closed')()} onToggle={() => action('accordion 2 toggle')()}>
          <p id="pInsideAccordionItem" style={{
          margin: 0
        }}>
            This is the content inside
          </p>
          <p style={{
          margin: 0
        }}>
            Interdum non eleifend aliquet viverra erat etiam netus fusce duis, nisl sodales rhoncus turpis consequat dolor lacus dapibus curae, rutrum
            orci auctor maecenas et varius netus aenean.
          </p>
        </SOLAccordionItem>

        <SOLAccordionItem header={args.longHeader ? longHeaderText : 'Accordion 3'} customHeader={args.headerAndCustom ? customHeaderContent : undefined} onOpened={() => action('accordion 3 opened')()} onClosed={() => action('accordion 3 closed')()} onToggle={() => action('accordion 3 toggle')()}>
          <p style={{
          margin: 0
        }}>This is the content of the panel.</p>
          <p style={{
          margin: 0
        }}>more text</p>
        </SOLAccordionItem>

        <SOLAccordionItem customHeader={customHeaderContent} onOpened={() => action('accordion 4 opened')()} onClosed={() => action('accordion 4 closed')()} onToggle={() => action('accordion 4 toggle')()}>
          <p style={{
          margin: 0
        }}>This is also the content of the panel.</p>
        </SOLAccordionItem>
      </SOLAccordion>
    </main>
  </>
```

Rendered markup:
```html
<style>
        .accordion-custom-header {
          display: flex;
          gap: var(--sol-size-spacing-sm);
          align-items: center;
        }
        .accordion-custom-header svg {
          padding: 0.25rem 0 0;
          width: var(--sol-size-icon-md);
          height: var(--sol-size-icon-md);
        }
      </style><header><h1 class="sol-screenreader-only">Single</h1></header><main class="sol-panel"><div data-orientation="vertical" dir="ltr" role="region" class="sol-accordion-group"><div data-disabled="" data-orientation="vertical" data-hidden="" data-index="0" data-closed="" class="sol-accordion-item"><div data-disabled="" data-orientation="vertical" data-hidden="" data-index="0" data-closed="" class="sol-accordion-item-header"><button type="button" tabindex="-1" data-value="accordion-2" data-disabled="" data-orientation="vertical" data-hidden="" aria-disabled="true" aria-expanded="false" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content"><span class="accordion-custom-header"><svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg>Accordion Details</span></span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-disabled="" data-orientation="vertical" data-hidden="" data-index="0" data-closed="" hidden="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto;"><div class="sol-accordion-item-body"><p>This is the primary content of the panel.</p></div></div></div><div data-orientation="vertical" data-index="1" data-open="" id="accordion-2" class="sol-accordion-item"><div data-orientation="vertical" data-index="1" data-open="" class="sol-accordion-item-header"><button type="button" tabindex="0" data-value="accordion-2" data-orientation="vertical" data-index="1" data-panel-open="" aria-disabled="false" aria-expanded="true" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content">Accordion 2</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-orientation="vertical" data-index="1" data-open="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto; animation-name: none;"><div class="sol-accordion-item-body"><p id="pInsideAccordionItem" style="margin: 0px;">This is the content inside</p><p style="margin: 0px;">Interdum non eleifend aliquet viverra erat etiam netus fusce duis, nisl sodales rhoncus turpis consequat dolor lacus dapibus curae, rutrum orci auctor maecenas et varius netus aenean.</p></div></div></div><div data-orientation="vertical" data-hidden="" data-index="2" data-closed="" class="sol-accordion-item"><div data-orientation="vertical" data-hidden="" data-index="2" data-closed="" class="sol-accordion-item-header"><button type="button" tabindex="0" data-value="accordion-2" data-orientation="vertical" data-hidden="" data-index="2" aria-disabled="false" aria-expanded="false" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content">Accordion 3</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-orientation="vertical" data-hidden="" data-index="2" data-closed="" hidden="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto;"><div class="sol-accordion-item-body"><p style="margin: 0px;">This is the content of the panel.</p><p style="margin: 0px;">more text</p></div></div></div><div data-orientation="vertical" data-hidden="" data-index="3" data-closed="" class="sol-accordion-item"><div data-orientation="vertical" data-hidden="" data-index="3" data-closed="" class="sol-accordion-item-header"><button type="button" tabindex="0" data-value="accordion-2" data-orientation="vertical" data-hidden="" data-index="3" aria-disabled="false" aria-expanded="false" class="sol-accordion-item-trigger"><span class="sol-accordion-item-trigger-content"><span class="sol-accordion-header-content"><span class="accordion-custom-header"><svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor"></path><path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor"></path><path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor"></path><path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor"></path><path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor"></path></svg>Accordion Details</span></span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-accordion-arrow-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></span></button></div><div data-orientation="vertical" data-hidden="" data-index="3" data-closed="" hidden="" role="region" class="sol-accordion-item-content" style="--accordion-panel-height: auto; --accordion-panel-width: auto;"><div class="sol-accordion-item-body"><p style="margin: 0px;">This is also the content of the panel.</p></div></div></div><span class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></span></div></main>
```
