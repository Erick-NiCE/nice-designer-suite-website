# Inline Notification (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/InlineNotification.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-icon`, `sol-icon-host`, `sol-inline-notification`, `sol-inline-notification-close-button`, `sol-inline-notification-close-icon`, `sol-inline-notification-details`, `sol-inline-notification-icon`, `sol-inline-notification-info`, `sol-inline-notification-subtitle`, `sol-inline-notification-text-wrapper`, `sol-inline-notification-title`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / All Inline

Usage:
```tsx
args => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);
  const toggleNotification = (type: InlineNotificationType) => {
    switch (type) {
      case 'success':
        setShowSuccess(v => !v);
        break;
      case 'info':
        setShowInfo(v => !v);
        break;
      case 'warning':
        setShowWarning(v => !v);
        break;
      case 'error':
        setShowError(v => !v);
        break;
    }
  };
  const showAllNotifications = () => {
    setShowSuccess(true);
    setShowInfo(true);
    setShowWarning(true);
    setShowError(true);
  };
  const hideAllNotifications = () => {
    setShowSuccess(false);
    setShowInfo(false);
    setShowWarning(false);
    setShowError(false);
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Notification Variants</h1>
      </header>
      <main>
        <div style={{
        marginBottom: '15px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <SOLButton variant="secondary" size="medium" onButtonClick={showAllNotifications}>
            Show All
          </SOLButton>
          <SOLButton variant="secondary" size="medium" onButtonClick={hideAllNotifications}>
            Hide All
          </SOLButton>
          <div style={{
          width: '1px',
          height: '30px',
          background: '#dee2e6',
          margin: '0 5px'
        }} />
        </div>

        <div style={{
        marginBottom: '20px',
        display: 'flex',
        gap: '10px'
      }}>
          <SOLButton variant="secondary" size="medium" onButtonClick={() => toggleNotification('success')}>
            Toggle Success
          </SOLButton>
          <SOLButton variant="secondary" size="medium" onButtonClick={() => toggleNotification('info')}>
            Toggle Info
          </SOLButton>
          <SOLButton variant="secondary" size="medium" onButtonClick={() => toggleNotification('warning')}>
            Toggle Warning
          </SOLButton>
          <SOLButton variant="secondary" size="medium" onButtonClick={() => toggleNotification('error')}>
            Toggle Error
          </SOLButton>
        </div>

        {/* Each notification stays mounted; only its `show` prop toggles (never conditionally
            mount/unmount the component itself). Unmounting would destroy its persistent live
            region, which must pre-exist for polite (success/info) announcements to be reliably
            read by VoiceOver. */}
        <div style={{
        marginBottom: '10px'
      }}>
          <SOLInlineNotification messageType="success" messageTitle={args.messageTitle} messageData={args.messageData} showClose={args.showClose} show={showSuccess} role={args.role} />
        </div>

        <div style={{
        marginBottom: '10px'
      }}>
          <SOLInlineNotification messageType="info" messageTitle={args.messageTitle} messageData={args.messageData} showClose={args.showClose} show={showInfo} role={args.role} />
        </div>

        <div style={{
        marginBottom: '10px'
      }}>
          <SOLInlineNotification messageType="warning" messageTitle={args.messageTitle} messageData={args.messageData} showClose={args.showClose} show={showWarning} role={args.role} />
        </div>

        <div style={{
        marginBottom: '10px'
      }}>
          <SOLInlineNotification messageType="error" messageTitle={args.messageTitle} messageData={args.messageData} showClose={args.showClose} show={showError} role={args.role} />
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Notification Variants</h1></header><main><div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center;"><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Show All</span></button><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Hide All</span></button><div style="width: 1px; height: 30px; background: rgb(222, 226, 230); margin: 0px 5px;"></div></div><div style="margin-bottom: 20px; display: flex; gap: 10px;"><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle Success</span></button><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle Info</span></button><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle Warning</span></button><button type="button" class="sol-button btn-secondary-medium"><span class="projected-content">Toggle Error</span></button></div><div style="margin-bottom: 10px;"><div class="sol-screenreader-only" role="status" aria-atomic="true"></div></div><div style="margin-bottom: 10px;"><div class="sol-screenreader-only" role="status" aria-atomic="true"></div></div><div style="margin-bottom: 10px;"><div class="sol-screenreader-only" role="alert" aria-atomic="true"></div></div><div style="margin-bottom: 10px;"><div class="sol-screenreader-only" role="alert" aria-atomic="true"></div></div></main>
```

## Examples / Inline

Usage:
```tsx
args => <>
    <header>
      <h1 className="sol-screenreader-only">Inline Notifications</h1>
    </header>
    <main>
      <SOLInlineNotification messageType={args.messageType} messageTitle={args.messageTitle} messageData={args.messageData} showClose={args.showClose} show={args.show} messageId={args.messageId} onClose={action('close fired')} />
    </main>
  </>
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Inline Notifications</h1></header><main><div class="sol-screenreader-only" role="status" aria-atomic="true">Sample notification Sample error message</div><div id="notification-0" class="sol-inline-notification sol-inline-notification-info"><div class="sol-inline-notification-details body-md"><span class="sol-screenreader-only">Information</span><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-inline-notification-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0-4.2a1.2 1.2 0 1 0 .001 2.4A1.2 1.2 0 0 0 8 2.8Z" clip-rule="evenodd"></path></svg></div></span><div class="sol-inline-notification-text-wrapper"><div class="sol-inline-notification-title">Sample notification</div><div class="sol-inline-notification-subtitle">Sample error message</div></div></div><button type="button" class="sol-inline-notification-close-button" aria-label="Close Information Notification"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg class="sol-inline-notification-close-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.123 4.15a.514.514 0 0 1 .727.726L8.726 8l3.124 3.124a.514.514 0 0 1-.726.727L8 8.726 4.876 11.85a.513.513 0 1 1-.726-.727L7.274 8 4.15 4.876a.513.513 0 1 1 .726-.726L8 7.274l3.124-3.124Z"></path></svg></div></span></button></div></main>
```
