# Modal (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Checkbox.css`, `css/Dropdown.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Label.css`, `css/Modal.css`, `css/RadioButton.css`, `css/Select.css`, `css/Spinner.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / All Modal Types

Usage:
```tsx
args => {
  const {
    manageInitialFocus,
    useAlertDialogRole,
    closeAriaLabel,
    ariaDescribedby,
    maxHeight,
    primaryButtonDisabled,
    width
  } = args;
  const {
    title,
    message,
    primaryButtonLabel,
    secondaryButtonLabel,
    criticalButtonLabel
  } = args;
  const [activeModal, setActiveModal] = useState<AllModalType | null>(null);
  const close = () => setActiveModal(null);
  return <main className="combined-modal-container">
      <h1 className="sol-screenreader-only">All Modal Types</h1>
      {ariaDescribedby && <p id={ariaDescribedby} className="sol-screenreader-only">
          Brief extra context for the dialog.
        </p>}
      <section>
        <div className="modal-buttons-container">
          <SOLButton id="errorModalBtn" size="large" ariaLabel="Error Modal" style={{
          margin: '8px'
        }} onButtonClick={() => setActiveModal('error')}>
            Error Modal
          </SOLButton>
          <SOLButton id="warningModalBtn" size="large" ariaLabel="Warning Modal" style={{
          margin: '8px'
        }} onButtonClick={() => setActiveModal('warning')}>
            Warning Modal
          </SOLButton>
          <SOLButton id="infoModalBtn" size="large" ariaLabel="Info Modal" style={{
          margin: '8px'
        }} onButtonClick={() => setActiveModal('info')}>
            Info Modal
          </SOLButton>
          <SOLButton id="standardModalBtn" size="large" ariaLabel="Standard Modal" style={{
          margin: '8px'
        }} onButtonClick={() => setActiveModal('standard')}>
            Standard Modal
          </SOLButton>
        </div>
      </section>

      <SOLModal open={activeModal === 'error'} onOpenChange={open => !open && close()} type="error" title={title || 'Error'} message={message || LOREM} primaryButtonLabel={primaryButtonLabel || 'Retry'} width={width || undefined} primaryButtonDisabled={primaryButtonDisabled} manageInitialFocus={manageInitialFocus} useAlertDialogRole={useAlertDialogRole} closeAriaLabel={closeAriaLabel || undefined} ariaDescribedby={ariaDescribedby || undefined} maxHeight={maxHeight || undefined} />

      <SOLModal open={activeModal === 'warning'} onOpenChange={open => !open && close()} type="warning" title={title || 'Warning'} message={message || LOREM} secondaryButtonLabel={secondaryButtonLabel || 'Cancel'} primaryButtonLabel={primaryButtonLabel || 'Confirm'} criticalButtonLabel={criticalButtonLabel || ''} allowClickOutside width={width || undefined} primaryButtonDisabled={primaryButtonDisabled} manageInitialFocus={manageInitialFocus} useAlertDialogRole={useAlertDialogRole} closeAriaLabel={closeAriaLabel || undefined} ariaDescribedby={ariaDescribedby || undefined} maxHeight={maxHeight || undefined} />

      <SOLModal open={activeModal === 'info'} onOpenChange={open => !open && close()} type="info" title={title || 'Info'} message={message || LOREM} secondaryButtonLabel={secondaryButtonLabel || 'Cancel'} primaryButtonLabel={primaryButtonLabel || 'Save'} allowClickOutside width={width || undefined} primaryButtonDisabled={primaryButtonDisabled} manageInitialFocus={manageInitialFocus} useAlertDialogRole={useAlertDialogRole} closeAriaLabel={closeAriaLabel || undefined} ariaDescribedby={ariaDescribedby || undefined} maxHeight={maxHeight || undefined} />

      <SOLModal open={activeModal === 'standard'} onOpenChange={open => !open && close()} title={title || 'Standard'} message={message || LOREM} primaryButtonLabel={primaryButtonLabel || 'Save'} secondaryButtonLabel={secondaryButtonLabel || 'Cancel'} allowClickOutside width={width || undefined} primaryButtonDisabled={primaryButtonDisabled} manageInitialFocus={manageInitialFocus} useAlertDialogRole={useAlertDialogRole} closeAriaLabel={closeAriaLabel || undefined} ariaDescribedby={ariaDescribedby || undefined} maxHeight={maxHeight || undefined} />

      <style>{`
        .combined-modal-container {
          padding: 0;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
        }
        .modal-buttons-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 16px;
          margin-top: 0;
        }
      `}</style>
    </main>;
}
```

Rendered markup:
```html
<main class="combined-modal-container"><h1 class="sol-screenreader-only">All Modal Types</h1><section><div class="modal-buttons-container"><button type="button" id="errorModalBtn" aria-label="Error Modal" class="sol-button btn-primary-large" style="margin: 8px;"><span class="projected-content">Error Modal</span></button><button type="button" id="warningModalBtn" aria-label="Warning Modal" class="sol-button btn-primary-large" style="margin: 8px;"><span class="projected-content">Warning Modal</span></button><button type="button" id="infoModalBtn" aria-label="Info Modal" class="sol-button btn-primary-large" style="margin: 8px;"><span class="projected-content">Info Modal</span></button><button type="button" id="standardModalBtn" aria-label="Standard Modal" class="sol-button btn-primary-large" style="margin: 8px;"><span class="projected-content">Standard Modal</span></button></div></section><style>
        .combined-modal-container {
          padding: 0;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
        }
        .modal-buttons-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 16px;
          margin-top: 0;
        }
      </style></main>
```

## Examples / Custom Modal

Usage:
```tsx
() => {
  const [activeModal, setActiveModal] = useState<CustomModalKind | null>(null);
  const close = () => setActiveModal(null);
  const customHeader = <SOLModalHeader>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginRight: '32px'
    }}>
        <SOLIcon icon="./assets/application-icons.svg#icon-Favourite" />
        <h2 className="custom-title" style={{
        margin: 0,
        lineHeight: 1.5
      }}>
          Hello Custom Header
        </h2>
      </div>
    </SOLModalHeader>;
  const customFooter = <SOLModalFooter className="sol-modal-footer-flex-reverse">
      <SOLButton variant="primary" size="large" disabled={false} ariaLabel="Submit" onButtonClick={close}>
        Submit
      </SOLButton>
      <SOLButton variant="secondary" size="large" disabled={false} ariaLabel="Reset" style={{
      marginRight: '8px'
    }} onButtonClick={close}>
        Reset
      </SOLButton>
      <SOLButton variant="secondary" size="large" disabled={false} ariaLabel="Cancel" style={{
      marginRight: '8px'
    }} onButtonClick={close}>
        Cancel
      </SOLButton>
    </SOLModalFooter>;
  return <main>
      <h1 className="sol-screenreader-only">Custom Modal Examples</h1>
      <div className="button-container">
        <SOLButton ariaLabel="Custom Header Modal" style={{
        marginRight: '12px'
      }} onButtonClick={() => setActiveModal('header')}>
          Custom Header Modal
        </SOLButton>
        <SOLButton ariaLabel="Custom Footer Modal" style={{
        marginRight: '12px'
      }} onButtonClick={() => setActiveModal('footer')}>
          Custom Footer Modal
        </SOLButton>
        <SOLButton ariaLabel="Custom Modal Template Ref" onButtonClick={() => setActiveModal('templateRef')}>
          Custom Modal (Template Ref)
        </SOLButton>
      </div>

      <SOLModal open={activeModal === 'header'} onOpenChange={open => !open && close()} primaryButtonLabel="Confirm" secondaryButtonLabel="Cancel" header={customHeader} width="420px">
        <SOLModalBody>
          <span>{LOREM}</span>
        </SOLModalBody>
      </SOLModal>

      <SOLModal open={activeModal === 'footer'} onOpenChange={open => !open && close()} title="Custom Footer Example" footer={customFooter} width="420px">
        <SOLModalBody>
          <span>{LOREM}</span>
        </SOLModalBody>
      </SOLModal>

      <SOLModal open={activeModal === 'templateRef'} onOpenChange={open => !open && close()} title="Custom Modal Ref" primaryButtonLabel="Confirm" secondaryButtonLabel="Cancel" width="420px">
        <SOLModalBody>
          <span>{LOREM}</span>
        </SOLModalBody>
      </SOLModal>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Custom Modal Examples</h1><div class="button-container"><button type="button" aria-label="Custom Header Modal" class="sol-button btn-primary-large" style="margin-right: 12px;"><span class="projected-content">Custom Header Modal</span></button><button type="button" aria-label="Custom Footer Modal" class="sol-button btn-primary-large" style="margin-right: 12px;"><span class="projected-content">Custom Footer Modal</span></button><button type="button" aria-label="Custom Modal Template Ref" class="sol-button btn-primary-large"><span class="projected-content">Custom Modal (Template Ref)</span></button></div></main>
```

## Examples / Multiple Modals

Usage:
```tsx
() => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);
  return <main>
      <h1 className="sol-screenreader-only">Modal</h1>
      <SOLButton id="launchDialogBtn" ariaLabel="Multiple Modals" onButtonClick={() => setFirstOpen(true)}>
        Multiple Modals
      </SOLButton>

      <SOLModal id="firstModal" open={firstOpen} onOpenChange={next => setFirstOpen(next)} title="First Modal" primaryButtonLabel="Confirm" primaryButtonDisabled secondaryButtonLabel="Cancel" allowClickOutside message="This is the first modal. You can open a third modal from here." width="420px">
        <SOLModalBody>
          <div style={{
          marginTop: '32px'
        }}>
            <SOLButton id="openThirdModalBtn" variant="secondary" size="large" ariaLabel="Open Third Modal" onButtonClick={() => setThirdOpen(true)}>
              Open Third Modal
            </SOLButton>
          </div>
        </SOLModalBody>
      </SOLModal>

      <SOLModal id="thirdModal" open={thirdOpen} onOpenChange={next => setThirdOpen(next)} title="Third Modal" primaryButtonLabel="Confirm" primaryButtonDisabled secondaryButtonLabel="Cancel" message={LOREM} allowClickOutside width="380px" />
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Modal</h1><button type="button" id="launchDialogBtn" aria-label="Multiple Modals" class="sol-button btn-primary-large"><span class="projected-content">Multiple Modals</span></button></main>
```

## Examples / Restricted Close

Usage:
```tsx
args => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [notes, setNotes] = useState('');
  const [search, setSearch] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<{
    name: string;
    value: string;
  }>({
    name: 'Select Priority',
    value: ''
  });

  // Mirrors Angular's `restrictedForm.invalid` — the `data` control has
  // `Validators.required`, every other control is optional.
  const isFormValid = data.trim().length > 0;
  const primaryButtonDisabled = !args.validateOnSubmit && !isFormValid;

  // validateOnSubmit: Save Changes stays enabled; an invalid submit keeps the modal open, shows the error and focuses the field.
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const rejectCloseRef = useRef(false);
  const dataInputRef = useRef<HTMLInputElement>(null);
  const dataError = submitAttempts > 0 && !isFormValid ? DATA_ERROR_MESSAGE : undefined;
  useEffect(() => {
    if (submitAttempts > 0) dataInputRef.current?.focus();
  }, [submitAttempts]);

  // Mirrors Angular's hasUnsavedChanges.bind(this). The Angular check looks
  // at form.dirty plus per-control comparisons against the original options;
  // here we approximate it by treating any non-empty field as a change.
  const hasUnsavedChanges = () => data !== '' || notes !== '' || selectedPriority.value !== '' || search !== '';
  return <main>
      <h1 className="sol-screenreader-only">Modal</h1>
      <SOLButton id="launchDialogBtn" ariaLabel="Restricted Close Modal" onButtonClick={() => setOpen(true)}>
        Restricted Close Modal
      </SOLButton>

      <SOLModal open={open} onClosed={() => {
      if (args.validateOnSubmit && !isFormValid) {
        rejectCloseRef.current = true;
        setSubmitAttempts(n => n + 1);
      }
    }} onOpenChange={next => {
      if (!next && rejectCloseRef.current) {
        rejectCloseRef.current = false;
        return;
      }
      setOpen(next);
      // Angular opens a fresh form each time; reset so a reopened modal starts pristine.
      if (!next) {
        setSubmitAttempts(0);
        setData('');
        setNotes('');
        setSearch('');
        setSelectedPriority({
          name: 'Select Priority',
          value: ''
        });
      }
    }} title="Modal with Restricted Close" primaryButtonLabel="Save Changes" secondaryButtonLabel="Cancel" allowClose={args.allowClose} allowClickOutside={args.allowClickOutside} allowEscape={args.allowEscape} hasUnsavedChanges={hasUnsavedChanges} primaryButtonDisabled={primaryButtonDisabled} width="420px">
        <SOLModalBody>
          <form>
            {args.radioGroupFirst && <div style={{
            marginBottom: '16px'
          }}>
                <SOLRadioGroup name="scheduleUnit" label="Duplicate by">
                  <SOLRadioButton value="day">Day</SOLRadioButton>
                  <SOLRadioButton value="week">Week</SOLRadioButton>
                </SOLRadioGroup>
              </div>}
            <div style={{
            marginBottom: '16px'
          }}>
              <h3>Restricted Close Modal</h3>
              <h4>Configuration</h4>
              <ul style={{
              margin: '8px 0',
              paddingLeft: '20px'
            }}>
                <li>allowClose: {String(args.allowClose)}</li>
                <li>allowClickOutside: {String(args.allowClickOutside)}</li>
                <li>allowEscape: {String(args.allowEscape)}</li>
              </ul>
              <p>Try different actions to see how configuration affects modal behavior.</p>
            </div>
            <div style={{
            marginBottom: '16px'
          }}>
              <SOLTextInput label="Search" labelHelpText="Search by name, ID, or keyword" type="search" placeholder="Try pressing Esc to clear search" name="search" value={search} clearSearchAriaLabel="Clear search" onValueChange={setSearch} />
            </div>
            <SOLTextInput ref={dataInputRef} label="Important Data" placeholder="Enter some important information" name="data" value={data} required errorMessage={dataError} onValueChange={setData} />
            <div style={{
            marginTop: '16px'
          }}>
              <SOLTextInput label="Additional Notes" placeholder="Enter additional notes (optional)" name="notes" value={notes} onValueChange={setNotes} />
            </div>
            <div style={{
            marginTop: '16px'
          }}>
              <SOLDropdown label="Priority Level" options={PRIORITY_OPTIONS} optionsValue="value" optionsLabel="name" selection={selectedPriority} placeholder="Select priority level" onSelectionChange={selected => {
              if (selected && !Array.isArray(selected)) {
                setSelectedPriority(selected);
              }
            }} />
            </div>
          </form>
        </SOLModalBody>
      </SOLModal>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Modal</h1><button type="button" id="launchDialogBtn" aria-label="Restricted Close Modal" class="sol-button btn-primary-large"><span class="projected-content">Restricted Close Modal</span></button></main>
```
