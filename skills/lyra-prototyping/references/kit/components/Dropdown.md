# Dropdown (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Checkbox.css`, `css/Dropdown.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Label.css`, `css/Select.css`, `css/Spinner.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-dropdown`, `sol-dropdown-content`, `sol-dropdown-icon`, `sol-dropdown-inside`, `sol-dropdown-trigger`, `sol-error-icon`, `sol-error-message`, `sol-error-message-container`, `sol-icon`, `sol-icon-host`, `sol-info-message`, `sol-input-container`, `sol-input-trailing-button-container`, `sol-input-wrapper`, `sol-label`, `sol-label-content`, `sol-label-text`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Custom Search

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Custom Search Dropdown</h1>
      <div style={{
      height: 480
    }}>
        <SOLDropdown {...args} selection={selection} searchFunction={customSearchFunction} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        <p className="common-text" style={{
        marginTop: '1rem'
      }}>
          <strong>Note:</strong> This dropdown uses a custom search function that matches options starting with the search query (prefix match)
          instead of the default &quot;contains&quot; search.
        </p>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Custom Search Dropdown</h1><div style="height: 480px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Custom Search Dropdown</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><p class="common-text" style="margin-top: 1rem;"><strong>Note:</strong> This dropdown uses a custom search function that matches options starting with the search query (prefix match) instead of the default "contains" search.</p></div></main>
```

## Examples / Dropdown Bottom Position

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown Bottom Position</h1>
      <div style={{
      position: 'absolute',
      bottom: 0,
      padding: 24,
      alignItems: 'end',
      width: 700
    }}>
        <SOLDropdown {...args} options={options} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown Bottom Position</h1><div style="position: absolute; bottom: 0px; padding: 24px; align-items: end; width: 700px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-label="Dropdown, Select an option" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Dropdown Custom Item Height Template

Usage:
```tsx
args => {
  const [optionsState, setOptionsState] = useState<OptionType[]>(args.options ?? initialCustomHeightOptions);
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  const [optionIndex, setOptionIndex] = useState(1);
  const addNewOptions = () => {
    const newOptions = [{
      name: `Cloud Infrastructure Platform ${optionIndex}`,
      value: `cloud-platform-${optionIndex}`,
      projectedData: {
        primaryText: `Cloud Infrastructure Platform ${optionIndex}`,
        secondaryText: 'Scalable cloud computing and storage solutions',
        tertiaryText: `Professional Edition - Version 3.${optionIndex} - Support for ${500 + optionIndex * 100} instances`
      }
    }, {
      name: `Machine Learning Toolkit ${optionIndex}`,
      value: `ml-toolkit-${optionIndex}`,
      projectedData: {
        primaryText: `Machine Learning Toolkit ${optionIndex}`,
        secondaryText: 'Advanced AI and machine learning development tools',
        tertiaryText: `Enterprise AI - Version 1.${8 + optionIndex} - GPU acceleration enabled`
      }
    }, {
      name: `Security Management Suite ${optionIndex}`,
      value: `security-suite-${optionIndex}`,
      projectedData: {
        primaryText: `Security Management Suite ${optionIndex}`,
        secondaryText: 'Comprehensive security monitoring and threat detection',
        tertiaryText: `Premium Security - Version 2.${5 + optionIndex} - Real-time protection`
      }
    }];
    setOptionsState(prev => [...prev, ...newOptions]);
    setOptionIndex(prev => prev + 1);
  };
  const initializeData = () => {
    setOptionsState([{
      name: 'Advanced Analytics Platform',
      value: 'analytics-platform',
      projectedData: {
        primaryText: 'Advanced Analytics Platform',
        secondaryText: 'Comprehensive data analysis and visualization tools',
        tertiaryText: 'Enterprise Edition - Version 2.1 - Licensed for 1000 users'
      }
    }]);
    setOptionIndex(1);
    setSelection(args.isMultiple ? [] : null);
  };
  return <div>
      <main>
        <h1 className="sol-screenreader-only">Dropdown Custom Item Height Template</h1>
        <div style={{
        padding: 24,
        minHeight: 300
      }}>
          <div style={{
          marginBottom: 20
        }}>
            <div style={{
            display: 'flex',
            gap: 12,
            marginBottom: 16
          }}>
              <SOLButton variant="secondary" onButtonClick={() => initializeData()}>
                Initialize Analytics Data
              </SOLButton>
              <SOLButton variant="secondary" onButtonClick={() => addNewOptions()}>
                Add New Platform Options
              </SOLButton>
            </div>
            <p style={{
            margin: '10px 0',
            color: '#666',
            fontSize: 14
          }}>
              Current options: <span id="options-count">{optionsState.length}</span>
            </p>
          </div>

          <SOLDropdown {...args} options={optionsState} selection={selection} optionTemplate={renderTallOptionTemplate} selectedOptionTemplate={renderTallSelectedOptionTemplate} onSelectionChange={v => {
          setSelection(v);
          action('selectionChange')(v);
        }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div><main><h1 class="sol-screenreader-only">Dropdown Custom Item Height Template</h1><div style="padding: 24px; min-height: 300px;"><div style="margin-bottom: 20px;"><div style="display: flex; gap: 12px; margin-bottom: 16px;"><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Initialize Analytics Data</span></button><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">Add New Platform Options</span></button></div><p style="margin: 10px 0px; color: rgb(102, 102, 102); font-size: 14px;">Current options: <span id="options-count">1</span></p></div><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Dropdown custom item height template</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Search and select platform...</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Search and select platform...</span></div></div></main></div>
```

## Examples / Dynamic Options Test

Usage:
```tsx
() => {
  const [currentOptions, setCurrentOptions] = useState<OptionType[]>(initialDynamicOptions);
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(null);
  const [optionCounter, setOptionCounter] = useState(1);
  const addOption = () => {
    console.log('Adding option via push method...');
    setCurrentOptions(prev => [...prev, {
      name: `Dynamic Option ${optionCounter}`,
      value: `dynamic${optionCounter}`
    }]);
    setOptionCounter(c => c + 1);
  };
  const addOptionImmutable = () => {
    setCurrentOptions(prev => [...prev, {
      name: `Immutable Option ${optionCounter}`,
      value: `immutable${optionCounter}`
    }]);
    setOptionCounter(c => c + 1);
  };
  const removeLastOption = () => {
    setCurrentOptions(prev => prev.slice(0, -1));
  };
  const removeLastOptionImmutable = () => {
    setCurrentOptions(prev => prev.slice(0, -1));
  };
  const updateFirstOptionName = () => {
    setCurrentOptions(prev => {
      if (prev.length === 0) return prev;
      const first = prev[0];
      const updatedName = first.name.includes('(Updated)') ? first.name.replace(' (Updated)', '') : first.name + ' (Updated)';
      return [{
        ...first,
        name: updatedName
      }, ...prev.slice(1)];
    });
  };
  const addToBeginning = () => {
    setCurrentOptions(prev => [{
      name: `Beginning Option ${optionCounter}`,
      value: `beginning${optionCounter}`
    }, ...prev]);
    setOptionCounter(c => c + 1);
  };
  const removeFromMiddle = () => {
    setCurrentOptions(prev => {
      if (prev.length <= 2) return prev;
      const middle = Math.floor(prev.length / 2);
      return [...prev.slice(0, middle), ...prev.slice(middle + 1)];
    });
  };
  const sortOptions = () => {
    setCurrentOptions(prev => [...prev].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const reverseOptions = () => {
    setCurrentOptions(prev => [...prev].reverse());
  };
  const replaceMiddleItem = () => {
    setCurrentOptions(prev => {
      if (prev.length <= 1) return prev;
      const middle = Math.floor(prev.length / 2);
      const replaced = {
        name: `Replaced Item ${optionCounter}`,
        value: `replaced${optionCounter}`
      };
      return [...prev.slice(0, middle), replaced, ...prev.slice(middle + 1)];
    });
    setOptionCounter(c => c + 1);
  };
  const insertAtIndex = () => {
    setCurrentOptions(prev => {
      const insertIndex = Math.min(1, prev.length);
      const inserted = {
        name: `Inserted Option ${optionCounter}`,
        value: `inserted${optionCounter}`
      };
      return [...prev.slice(0, insertIndex), inserted, ...prev.slice(insertIndex)];
    });
    setOptionCounter(c => c + 1);
  };
  const updateMultipleProperties = () => {
    setCurrentOptions(prev => {
      if (prev.length < 2) return prev;
      const next = [...prev];
      next[0] = {
        ...next[0],
        name: `Multi-Updated 1 ${optionCounter}`
      };
      next[1] = {
        ...next[1],
        name: `Multi-Updated 2 ${optionCounter}`
      };
      return next;
    });
    setOptionCounter(c => c + 1);
  };
  const replaceAllOptions = () => {
    setCurrentOptions([{
      name: 'Replaced Option A',
      value: 'repA'
    }, {
      name: 'Replaced Option B',
      value: 'repB'
    }, {
      name: 'Replaced Option C',
      value: 'repC'
    }]);
  };
  const clearOptions = () => {
    setCurrentOptions([]);
    setSelection(null);
  };
  return <main>
      <header>
        <h1 className="sol-screenreader-only">Dynamic Options Test</h1>
      </header>
      <div style={{
      marginBottom: 20
    }}>
        <p className="common-text">Testing dynamic options updates after initialization</p>
        <div style={{
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            <SOLButton variant="basic" onButtonClick={addOption}>
              push() - Add Option
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={addOptionImmutable}>
              [...spread] - Add Immutable
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={addToBeginning}>
              unshift() - Add to Beginning
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={insertAtIndex}>
              splice(insert) - Insert at Index
            </SOLButton>
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            <SOLButton variant="basic" onButtonClick={removeLastOption}>
              pop() - Remove Last
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={removeLastOptionImmutable}>
              slice() - Remove Last Immutable
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={removeFromMiddle}>
              splice(remove) - Remove from Middle
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={clearOptions}>
              [] = - Clear Options
            </SOLButton>
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            <SOLButton variant="basic" onButtonClick={updateFirstOptionName}>
              [0].prop = - Update First Option Name
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={replaceMiddleItem}>
              [i] = - Replace Middle Item
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={updateMultipleProperties}>
              [x].prop = - Update Multiple Properties
            </SOLButton>
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            <SOLButton variant="basic" onButtonClick={sortOptions}>
              sort() - Sort Options
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={reverseOptions}>
              reverse() - Reverse Options
            </SOLButton>
            <SOLButton variant="basic" onButtonClick={replaceAllOptions}>
              = newArray - Replace All Options
            </SOLButton>
          </div>
        </div>
        <p className="common-text">
          Current options count: <span id="options-count">{currentOptions.length}</span>
        </p>
        <p className="common-text">
          Options: <strong>{JSON.stringify(currentOptions)}</strong>
        </p>
      </div>

      <SOLDropdown options={currentOptions} selection={selection} optionsValue="value" optionsLabel="name" placeholder="Select an option" searchEnabled={true} sortEnabled={false} isMultiple={false} label="Dynamic Options Dropdown" onSelectionChange={v => setSelection(v)} />

      <div style={{
      marginTop: 20
    }}>
        <p className="common-text">
          Selection: <strong>{JSON.stringify(selection)}</strong>
        </p>
        <p className="common-text">
          <em>Issue:</em> When using <code>this.options.push()</code> method, new options don&apos;t appear in UI.
          <br />
          <em>Expected:</em> Options should update dynamically when array changes.
        </p>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><header><h1 class="sol-screenreader-only">Dynamic Options Test</h1></header><div style="margin-bottom: 20px;"><p class="common-text">Testing dynamic options updates after initialization</p><div style="margin-bottom: 10px; display: flex; flex-direction: column; gap: 10px;"><div style="display: flex; flex-wrap: wrap; gap: 8px;"><button type="button" class="sol-button btn-basic-large"><span class="projected-content">push() - Add Option</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">[...spread] - Add Immutable</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">unshift() - Add to Beginning</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">splice(insert) - Insert at Index</span></button></div><div style="display: flex; flex-wrap: wrap; gap: 8px;"><button type="button" class="sol-button btn-basic-large"><span class="projected-content">pop() - Remove Last</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">slice() - Remove Last Immutable</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">splice(remove) - Remove from Middle</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">[] = - Clear Options</span></button></div><div style="display: flex; flex-wrap: wrap; gap: 8px;"><button type="button" class="sol-button btn-basic-large"><span class="projected-content">[0].prop = - Update First Option Name</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">[i] = - Replace Middle Item</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">[x].prop = - Update Multiple Properties</span></button></div><div style="display: flex; flex-wrap: wrap; gap: 8px;"><button type="button" class="sol-button btn-basic-large"><span class="projected-content">sort() - Sort Options</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">reverse() - Reverse Options</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">= newArray - Replace All Options</span></button></div></div><p class="common-text">Current options count: <span id="options-count">3</span></p><p class="common-text">Options: <strong>[{"name":"Initial Option 1","value":"init1"},{"name":"Initial Option 2","value":"init2"},{"name":"Initial Option 3","value":"init3"}]</strong></p></div><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Dynamic Options Dropdown</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span></div><div style="margin-top: 20px;"><p class="common-text">Selection: <strong>null</strong></p><p class="common-text"><em>Issue:</em> When using <code>this.options.push()</code> method, new options don't appear in UI.<br><em>Expected:</em> Options should update dynamically when array changes.</p></div></main>
```

## Examples / External Search

Usage:
```tsx
args => {
  const [loading, setLoading] = useState(false);
  const [externalSearchError, setExternalSearchError] = useState(false);
  const [optionsState, setOptionsState] = useState<OptionType[]>(options2500.slice(0, args.resultsCount ?? 2500));
  const [selection, setSelection] = useState<OptionType[]>([]);
  // Tracks the raw search text only, decoupled from onSearch's options/selection handling below,
  // so the derived totalResultsCount below can't interfere with that (proven-working) logic.
  const [searchQueryState, setSearchQueryState] = useState('');
  // Only one simulated server round-trip should ever be in flight — otherwise a stale earlier
  // search's delayed callback can fire after a later one and clobber options/selection with
  // out-of-date results.
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Reports the actual match count for the current query as totalResultsCount, instead of the
  // unfiltered dataset size — a real backend would report the query's own hit count here.
  const matchingCount = searchQueryState ? options2500.filter(option => option.name.toLowerCase().includes(searchQueryState.toLowerCase()) || option.id.toLowerCase().includes(searchQueryState.toLowerCase())).length : undefined;
  const externalSearchOptionsConfig: ExternalSearchOptions = {
    keyStrokeDelay: 1000,
    resultsCount: args.resultsCount ?? 2500,
    totalResultsCount: searchQueryState ? matchingCount : args.totalResultsCount ?? undefined,
    enabled: true
  };

  // Keep the rendered batch in sync if the resultsCount Storybook control changes after mount.
  useEffect(() => {
    setOptionsState(options2500.slice(0, args.resultsCount ?? 2500));
  }, [args.resultsCount]);
  const onSearch = (event: {
    searchQuery: string;
    selectedItem: string | string[];
  }) => {
    setSearchQueryState(event?.searchQuery ?? '');
    setLoading(true);
    if (searchTimeoutRef.current !== undefined) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = setTimeout(() => {
      const resultsCount = args.resultsCount ?? 2500;
      if (event?.searchQuery) {
        setOptionsState(options2500.filter(option => option.name.toLowerCase().includes(event.searchQuery.toLowerCase()) || option.id.toLowerCase().includes(event.searchQuery.toLowerCase())).slice(0, resultsCount));
      } else {
        let newOptions = options2500.slice(0, resultsCount);
        if (event?.selectedItem) {
          if (Array.isArray(event.selectedItem)) {
            const selectedOptions = event.selectedItem.map(value => options2500.find(option => option.id === value)).filter((option): option is (typeof options2500)[number] => option !== undefined);
            newOptions = Array.from(new Set([...newOptions, ...selectedOptions]));
          } else {
            const foundOption = options2500.find(option => option.id === event.selectedItem);
            if (foundOption) {
              newOptions = Array.from(new Set([...newOptions, foundOption]));
            }
          }
        }
        setOptionsState(newOptions);
      }
      setLoading(false);
    }, 2000);
  };
  const toggleError = () => setExternalSearchError(prev => !prev);
  return <main>
      <h1 className="sol-screenreader-only">External Search</h1>
      <div style={{
      height: 480
    }}>
        <SOLDropdown options={optionsState} selection={selection} optionsValue="id" optionsLabel="name" placeholder="Select an option" searchEnabled={true} isMultiple={true} externalSearchOptions={externalSearchOptionsConfig} label="Dropdown External Search" showFooter={true} loading={loading} externalSearchError={externalSearchError} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onExternalSearch={event => {
        onSearch(event);
        action('externalSearch')(event);
      }} />
        <p className="common-text">Selection: {JSON.stringify(selection)}</p>
        <SOLButton onButtonClick={() => toggleError()}>Error</SOLButton>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">External Search</h1><div style="height: 480px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Dropdown External Search</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span></div><p class="common-text">Selection: []</p><button type="button" class="sol-button btn-primary-large"><span class="projected-content">Error</span></button></div></main>
```

## Examples / Icon In Dropdown Options

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Dropdown with icon</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Long Options Dropdown

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown with long options</h1>
      <div style={{
      width: '16rem'
    }}>
        <SOLDropdown {...args} selection={selection} supportErrorMessage={true} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown with long options</h1><div style="width: 16rem;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">option with long text</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multiple</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select Multi Line Custom Template

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <div>
      <main>
        <h1 className="sol-screenreader-only">Dropdown Multi Line Custom Template</h1>
        <div style={{
        padding: 24,
        minHeight: 300
      }}>
          <SOLDropdown {...args} selection={selection} optionTemplate={renderMultiLineOptionTemplate} selectedOptionTemplate={renderMultiLineSelectedOptionTemplate} onSelectionChange={v => {
          setSelection(v);
          action('selectionChange')(v);
        }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div><main><h1 class="sol-screenreader-only">Dropdown Multi Line Custom Template</h1><div style="padding: 24px; min-height: 300px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Custom Template with Icons and 2 Lines</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="error-_r_1_ sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select options...</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select options...</span><div class="sol-error-message-container body-sm" id="error-_r_1_" role="status" aria-live="polite"><span class="sol-screenreader-only">Custom Template with Icons and 2 Lines: </span><span class="sol-info-message">Up to 3 items</span></div></div></div></main></div>
```

## Examples / Multi Select Search

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multiple with Search</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select Search With Same Name

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multi Select Search with Same Name</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select With Categories

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">option with Multi select category</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select With Categories And Max Selection Limit

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">option with Multi select category</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="error-_r_1_ sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_" role="status" aria-live="polite"><span class="sol-screenreader-only">option with Multi select category: </span><span class="sol-info-message">Up to 4 items</span></div></div></div></main>
```

## Examples / Multi Select With Large Set Items

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multi Select with Large set of items</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select With Max Items Limit

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multi Select with maxItemsLimit</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Multi Select With Max Selection Limit

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multi Select with search and Limit</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="error-_r_1_ sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_" role="status" aria-live="polite"><span class="sol-screenreader-only">Multi Select with search and Limit: </span><span class="sol-info-message">Up to 4 items</span></div></div></div></main>
```

## Examples / Multiple Select Custom Template

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <div>
      <main>
        <h1 className="sol-screenreader-only">Dropdown Custom Template</h1>
        <div style={{
        padding: 24,
        minHeight: 380
      }}>
          <SOLDropdown {...args} selection={selection} optionTemplate={renderOptionTemplate} selectedOptionTemplate={renderSelectedOptionTemplate} onSelectionChange={v => {
          setSelection(v);
          action('selectionChange')(v);
        }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div><main><h1 class="sol-screenreader-only">Dropdown Custom Template</h1><div style="padding: 24px; min-height: 380px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Multiple with custom template</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Search for any option you want...</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Search for any option you want...</span></div></div></main></div>
```

## Examples / Reactive Form

Usage:
```tsx
() => {
  const [selection, setSelection] = useState<OptionType[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [touched, setTouched] = useState(false);
  const [pristine, setPristine] = useState(true);
  const isRequiredEmpty = !selection || selection.length === 0;
  const status = disabled ? 'DISABLED' : isRequiredEmpty ? 'INVALID' : 'VALID';
  const requiredError = isRequiredEmpty ? true : null;
  return <main>
      <h1 className="sol-screenreader-only">Reactive Form</h1>
      <div style={{
      height: 420
    }}>
        <SOLDropdown placeholder="Select an option" options={options} selection={selection} isMultiple={true} errorMessage="" supportErrorMessage={true} searchEnabled={true} optionsValue="value" optionsLabel="name" label="" required={true} disabled={disabled} onSelectionChange={v => {
        setSelection(v);
        setPristine(false);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        <div style={{
        marginTop: '2rem',
        border: '1px solid black',
        padding: '1rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
          <SOLButton variant="basic" onButtonClick={() => setDisabled(d => !d)}>
            Toggle disabled state
          </SOLButton>
          <SOLButton variant="basic" onButtonClick={() => setTouched(true)}>
            Mark as touched
          </SOLButton>
          <SOLButton type="submit" disabled={status !== 'VALID'}>
            Submit
          </SOLButton>
        </div>
        <p className="common-text">
          Form Group Value : <strong>{JSON.stringify({
            dropdown: selection
          })}</strong>
        </p>

        <p className="common-text">Dropdown properties:</p>
        <p className="common-text">
          <i>pristine</i> : <strong>{String(pristine)}</strong>
        </p>
        <p className="common-text">
          <i>touched</i> : <strong>{String(touched)}</strong>
        </p>
        <p className="common-text">
          <i>status</i> : <strong>{status}</strong>
        </p>
        <p className="common-text">
          <i>error</i> : <strong>{String(requiredError)}</strong>
        </p>
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Reactive Form</h1><div style="height: 420px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-label="Dropdown, Select an option, Required" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div><div style="margin-top: 2rem; border: 1px solid black; padding: 1rem; display: flex; gap: 0.5rem;"><button type="button" class="sol-button btn-basic-large"><span class="projected-content">Toggle disabled state</span></button><button type="button" class="sol-button btn-basic-large"><span class="projected-content">Mark as touched</span></button><button type="submit" data-disabled="" disabled="" aria-disabled="true" class="sol-button btn-primary-large"><span class="projected-content">Submit</span></button></div><p class="common-text">Form Group Value : <strong>{"dropdown":[]}</strong></p><p class="common-text">Dropdown properties:</p><p class="common-text"><i>pristine</i> : <strong>true</strong></p><p class="common-text"><i>touched</i> : <strong>false</strong></p><p class="common-text"><i>status</i> : <strong>INVALID</strong></p><p class="common-text"><i>error</i> : <strong>true</strong></p></div></main>
```

## Examples / Single Select

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Single Select Custom Template

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <div>
      <main>
        <h1 className="sol-screenreader-only">Dropdown Custom Template</h1>
        <div style={{
        padding: 24,
        minHeight: 380
      }}>
          <SOLDropdown {...args} selection={selection} optionTemplate={renderOptionTemplate} selectedOptionTemplate={renderSelectedOptionTemplate} onSelectionChange={v => {
          setSelection(v);
          action('selectionChange')(v);
        }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div><main><h1 class="sol-screenreader-only">Dropdown Custom Template</h1><div style="padding: 24px; min-height: 380px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single with custom template</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Search for any option you want !!!</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Search for any option you want !!!</span></div></div></main></div>
```

## Examples / Single Select Disabled

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label disabled" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single Disabled</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container disabled" disabled="" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-disabled="true" tabindex="-1" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Single Select Error Message

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single with Error Message</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container error-border error" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-invalid="true" aria-describedby="error-_r_1_ sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_" role="alert" aria-live="assertive"><span class="sol-screenreader-only">Single with Error Message: </span><span class="sol-error-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width:var(--sol-size-icon-xs);height:var(--sol-size-icon-xs);" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 3a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg></div></span></span><span class="sol-error-message">This is an error message</span></div></div></div></main>
```

## Examples / Single Select Multi Line Custom Template

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <div>
      <main>
        <h1 className="sol-screenreader-only">Dropdown Multi Line Custom Template</h1>
        <div style={{
        padding: 24,
        minHeight: 300
      }}>
          <SOLDropdown {...args} selection={selection} optionTemplate={renderMultiLineOptionTemplate} selectedOptionTemplate={renderMultiLineSelectedOptionTemplate} onSelectionChange={v => {
          setSelection(v);
          action('selectionChange')(v);
        }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
        </div>
      </main>
    </div>;
}
```

Rendered markup:
```html
<div><main><h1 class="sol-screenreader-only">Dropdown Multi Line Custom Template</h1><div style="padding: 24px; min-height: 300px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single with multi line custom template</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Search for any option you want !!!</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Search for any option you want !!!</span></div></div></main></div>
```

## Examples / Single Select Read Only

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(options.find(x => x.value === 'selected'));
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label readonly" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single Read Only</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container readonly" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content display-text" data-base-ui-tooltip-trigger="">Selected White</div></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Selected White, Read only</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```

## Examples / Single Select Sort

Usage:
```tsx
args => {
  const [selection, setSelection] = useState<OptionType | OptionType[] | null>(args.isMultiple ? [] : null);
  return <main>
      <h1 className="sol-screenreader-only">Dropdown</h1>
      <div style={{
      height: 480,
      padding: 4
    }}>
        <SOLDropdown {...args} selection={selection} onSelectionChange={v => {
        setSelection(v);
        action('selectionChange')(v);
      }} onDropdownOpenStateChange={action('dropdownOpenStateChange')} onSearchChanged={action('searchChanged')} onSelectAllToggled={action('selectAllToggled')} />
      </div>
    </main>;
}
```

Rendered markup:
```html
<main><h1 class="sol-screenreader-only">Dropdown</h1><div style="height: 480px; padding: 4px;"><div class="sol-input-wrapper sol-dropdown" id="sol-dropdown-_r_0_"><label class="sol-label" for="sol-dropdown-_r_0_-trigger"><span class="sol-label-content"><span id="sol-dropdown-_r_0_-trigger-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Single Select with Sortable Fields</span></span></label><div><button type="button" role="combobox" id="sol-dropdown-_r_0_-trigger" class="sol-dropdown-trigger sol-input-container" aria-labelledby="sol-dropdown-_r_0_-trigger-label sol-dropdown-_r_0_-trigger-hint" aria-expanded="false" aria-controls="sol-dropdown-_r_0_-select-options" aria-haspopup="listbox" aria-describedby="sol-dropdown-_r_0_-description" tabindex="0" data-base-ui-click-trigger=""><div class="sol-dropdown-inside body-md"><div class="sol-dropdown-content placeholder-text" data-base-ui-tooltip-trigger="">Select an option</div></div><div class="sol-dropdown-icon sol-input-trailing-button-container" aria-hidden="true"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></div></button></div><div class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></div><div class="sol-screenreader-only" aria-live="assertive" aria-atomic="true"></div><div id="sol-dropdown-_r_0_-select-options" aria-hidden="true"></div><span id="sol-dropdown-_r_0_-description" class="sol-screenreader-only">Use enter key to open the dropdown. Use arrow keys to navigate options.</span><span id="sol-dropdown-_r_0_-trigger-hint" class="sol-screenreader-only">Select an option</span><div class="sol-error-message-container body-sm" id="error-_r_1_"></div></div></div></main>
```
