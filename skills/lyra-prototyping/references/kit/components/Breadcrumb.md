# Breadcrumb (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Breadcrumb.css`, `css/Button.css`, `css/Icon.css`, `css/Menu.css`, `css/Tooltip.css`.
Component classes: `sol-breadcrumb`, `sol-breadcrumb-item`, `sol-breadcrumb-item-last`, `sol-breadcrumb-item-menu`, `sol-breadcrumb-item-second-to-last`, `sol-breadcrumb-link`, `sol-breadcrumb-link-truncated`, `sol-breadcrumb-list`, `sol-breadcrumb-separator`, `sol-breadcrumb-text`, `sol-breadcrumb-text-last`, `sol-button`, `sol-icon`, `sol-icon-host`, `sol-icon-pointer-events-none`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / All Scenarios

Usage:
```tsx
({
  useHandlers,
  items: customItems,
  ariaLabel: customAriaLabel,
  dir
}) => {
  const [clickMessages, setClickMessages] = useState<ClickMessages>({});
  const onBreadcrumbItemClick = (section: string, label: string) => {
    setClickMessages(prev => ({
      ...prev,
      [section]: `${label} clicked!`
    }));
  };
  const buildHandler = (section: string) => (data: {
    item: BreadcrumbItem;
  }) => {
    onBreadcrumbItemClick(section, data.item.label);
  };
  const toItems = (section: string, items: BreadcrumbItem[]) => useHandlers ? items.map(item => item.path ? {
    label: item.label,
    handler: () => onBreadcrumbItemClick(section, item.label)
  } : item) : items;
  const sectionHeaderStyle: React.CSSProperties = {
    margin: '0 0 1rem 0'
  };
  const sectionWrapperStyle: React.CSSProperties = {
    border: '1px dashed #ccc',
    padding: '0.5rem'
  };
  const messageStyle: React.CSSProperties = {
    padding: '0.5rem',
    marginTop: '0.5rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px'
  };
  return <main>
      <h1 className="sol-screenreader-only">Breadcrumb</h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '100%'
    }}>
        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Single Item with 100% width
          </h2>
          <div style={sectionWrapperStyle}>
            <SOLBreadcrumb ariaLabel="Single item breadcrumb" items={[{
            label: 'Current Page Title'
          }]} />
          </div>
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Two Items with 100% width
          </h2>
          <div style={sectionWrapperStyle}>
            <SOLBreadcrumb ariaLabel="Two items breadcrumb" items={toItems('two', [{
            label: 'Parent name',
            path: '/parent'
          }, {
            label: 'Current Page Title'
          }])} onItemClicked={buildHandler('two')} />
          </div>
          {clickMessages['two'] && <div className="click-message" style={messageStyle}>
              {clickMessages['two']}
            </div>}
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Three Items with 100% width
          </h2>
          <div style={sectionWrapperStyle}>
            <SOLBreadcrumb ariaLabel="Three items breadcrumb" items={toItems('three', [{
            label: 'Home',
            path: '/home'
          }, {
            label: 'Level 1',
            path: '/level1'
          }, {
            label: 'Current Page Title'
          }])} onItemClicked={buildHandler('three')} />
          </div>
          {clickMessages['three'] && <div className="click-message" style={messageStyle}>
              {clickMessages['three']}
            </div>}
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Four Items (No Truncation)
          </h2>
          <div style={sectionWrapperStyle}>
            <SOLBreadcrumb ariaLabel="Four items breadcrumb" items={toItems('four', [{
            label: 'Home',
            path: '/home'
          }, {
            label: 'Level 2',
            path: '/level2'
          }, {
            label: 'Parent Name',
            path: '/parent'
          }, {
            label: 'Current Page Title'
          }])} onItemClicked={buildHandler('four')} />
          </div>
          {clickMessages['four'] && <div className="click-message" style={messageStyle}>
              {clickMessages['four']}
            </div>}
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Five Items (With Truncation Menu)
          </h2>
          <div style={sectionWrapperStyle}>
            <SOLBreadcrumb ariaLabel="Five items breadcrumb with truncation" items={toItems('five', [{
            label: 'Home',
            path: '/home'
          }, {
            label: 'Level 1',
            path: '/level1'
          }, {
            label: 'Level 2',
            path: '/level2'
          }, {
            label: 'Parent Name',
            path: '/parent'
          }, {
            label: 'Current Page Title'
          }])} onItemClicked={buildHandler('five')} />
          </div>
          {clickMessages['five'] && <div className="click-message" style={messageStyle}>
              {clickMessages['five']}
            </div>}
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Small Container
          </h2>
          <div style={{
          width: '197px',
          ...sectionWrapperStyle
        }}>
            <SOLBreadcrumb ariaLabel="Small container breadcrumb" items={toItems('small', [{
            label: 'Home',
            path: '/home'
          }, {
            label: 'Level 1',
            path: '/level1'
          }, {
            label: 'Level 2',
            path: '/level2'
          }, {
            label: 'Parent name',
            path: '/parent'
          }, {
            label: 'Current Page Title'
          }])} onItemClicked={buildHandler('small')} />
          </div>
          {clickMessages['small'] && <div className="click-message" style={messageStyle}>
              {clickMessages['small']}
            </div>}
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Very Small Container
          </h2>
          <div style={{
          width: '235px',
          ...sectionWrapperStyle
        }}>
            <SOLBreadcrumb ariaLabel="Very Small container with overflow" items={toItems('verySmall', [{
            label: 'Home',
            path: '/home'
          }, {
            label: 'Level 1',
            path: '/level1'
          }, {
            label: 'Level 2',
            path: '/level2'
          }, {
            label: 'Parent name with longer text',
            path: '/parent'
          }, {
            label: 'Current Page Title'
          }])} onItemClicked={buildHandler('verySmall')} />
          </div>
          {clickMessages['verySmall'] && <div className="click-message" style={messageStyle}>
              {clickMessages['verySmall']}
            </div>}
        </section>

        <section>
          <h2 className="common-text" style={sectionHeaderStyle}>
            Long Second-to-Last Item with Tooltip
          </h2>
          <div style={{
          width: '250px',
          ...sectionWrapperStyle
        }}>
            <SOLBreadcrumb ariaLabel="Breadcrumb with long item and tooltip" items={toItems('tooltip', [{
            label: 'Home',
            path: '/home'
          }, {
            label: 'Level 1',
            path: '/level1'
          }, {
            label: 'Level 2',
            path: '/level2'
          }, {
            label: 'This is a very long parent name that will show ellipsis and tooltip',
            path: '/parent'
          }, {
            label: 'Current Page'
          }])} onItemClicked={buildHandler('tooltip')} />
          </div>
          {clickMessages['tooltip'] && <div className="click-message" style={messageStyle}>
              {clickMessages['tooltip']}
            </div>}
        </section>

        {customItems?.length ? <section dir={dir}>
            <h2 className="common-text" style={sectionHeaderStyle}>
              Custom items
            </h2>
            <div style={sectionWrapperStyle}>
              <SOLBreadcrumb ariaLabel={customAriaLabel} items={customItems} />
            </div>
          </section> : null}
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Breadcrumb</h1><div style="display: flex; flex-direction: column; gap: 2rem; width: 100%;"><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Single Item with 100% width</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Single item breadcrumb" class="sol-breadcrumb"><span class="sol-breadcrumb-text sol-breadcrumb-text-last body-md" aria-current="page">Current Page Title</span></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Two Items with 100% width</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Two items breadcrumb" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item"><a href="/parent" class="sol-breadcrumb-link body-md">Parent name</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-last"><span class="sol-breadcrumb-text sol-breadcrumb-text-last body-md" aria-current="page">Current Page Title</span></li></ol></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Three Items with 100% width</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Three items breadcrumb" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item"><a href="/home" class="sol-breadcrumb-link body-md">Home</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-second-to-last"><a href="/level1" class="sol-breadcrumb-link body-md">Level 1</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-last"><span class="sol-breadcrumb-text sol-breadcrumb-text-last body-md" aria-current="page">Current Page Title</span></li></ol></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Four Items (No Truncation)</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Four items breadcrumb" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item"><a href="/home" class="sol-breadcrumb-link body-md">Home</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item"><a href="/level2" class="sol-breadcrumb-link body-md">Level 2</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-second-to-last"><a href="/parent" class="sol-breadcrumb-link body-md">Parent Name</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-last"><span class="sol-breadcrumb-text sol-breadcrumb-text-last body-md" aria-current="page">Current Page Title</span></li></ol></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Five Items (With Truncation Menu)</h2><div style="border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Five items breadcrumb with truncation" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item"><a href="/home" class="sol-breadcrumb-link body-md">Home</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-menu"><button type="button" tabindex="0" aria-label="Show more breadcrumb items" aria-expanded="false" aria-haspopup="menu" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></div></span></span><span class="projected-content"></span></button><span class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></span><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-second-to-last"><a href="/parent" class="sol-breadcrumb-link body-md">Parent Name</a><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-last"><span class="sol-breadcrumb-text sol-breadcrumb-text-last body-md" aria-current="page">Current Page Title</span></li></ol></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Small Container</h2><div style="width: 197px; border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Small container breadcrumb" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item sol-breadcrumb-item-menu"><button type="button" tabindex="0" aria-label="Show more breadcrumb items" aria-expanded="false" aria-haspopup="menu" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></div></span></span><span class="projected-content"></span></button><span class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></span><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-second-to-last"><a href="/parent" class="sol-breadcrumb-link body-md">Parent name</a></li></ol></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Very Small Container</h2><div style="width: 235px; border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Very Small container with overflow" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item sol-breadcrumb-item-menu"><button type="button" tabindex="0" aria-label="Show more breadcrumb items" aria-expanded="false" aria-haspopup="menu" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></div></span></span><span class="projected-content"></span></button><span class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></span><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-second-to-last"><a href="/parent" class="sol-breadcrumb-link body-md sol-breadcrumb-link-truncated" data-base-ui-tooltip-trigger="">Parent name with longer text</a></li></ol></nav></div></section><section><h2 class="common-text" style="margin: 0px 0px 1rem;">Long Second-to-Last Item with Tooltip</h2><div style="width: 250px; border: 1px dashed rgb(204, 204, 204); padding: 0.5rem;"><nav aria-label="Breadcrumb with long item and tooltip" class="sol-breadcrumb"><ol class="sol-breadcrumb-list"><li class="sol-breadcrumb-item sol-breadcrumb-item-menu"><button type="button" tabindex="0" aria-label="Show more breadcrumb items" aria-expanded="false" aria-haspopup="menu" data-base-ui-tooltip-trigger="" class="sol-button btn-tertiary-small"><span class="sol-icon-pointer-events-none"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></div></span></span><span class="projected-content"></span></button><span class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></span><span class="sol-breadcrumb-separator body-md" aria-hidden="true">/</span></li><li class="sol-breadcrumb-item sol-breadcrumb-item-second-to-last"><a href="/parent" class="sol-breadcrumb-link body-md sol-breadcrumb-link-truncated" data-base-ui-tooltip-trigger="">This is a very long parent name that will show ellipsis and tooltip</a></li></ol></nav></div></section></div></main>
```
