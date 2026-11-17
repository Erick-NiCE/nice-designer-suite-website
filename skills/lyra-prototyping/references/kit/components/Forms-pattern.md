# Forms (pattern) (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/AccordionItem.css`, `css/Button.css`, `css/Calendar.css`, `css/Checkbox.css`, `css/DatePicker.css`, `css/Dropdown.css`, `css/ErrorMessage.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Label.css`, `css/NumericSelector.css`, `css/Select.css`, `css/Spinner.css`, `css/Switch.css`, `css/TextArea.css`, `css/TextCounter.css`, `css/TextInput.css`, `css/TimePicker.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-date-picker`, `sol-error-message-container`, `sol-icon`, `sol-icon-button`, `sol-icon-host`, `sol-input`, `sol-input-container`, `sol-input-container-date-picker`, `sol-input-label-area`, `sol-input-trailing-button-container`, `sol-input-wrapper`, `sol-label`, `sol-label-content`, `sol-label-text`, `sol-numeric-selector`, `sol-screenreader-only`, `sol-switch`, `sol-switch-wrapper`, `sol-text-input`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Dynamic Form

Usage:
```tsx
() => {
  const defaultStatus = taskStatusOptions[0];
  const [formState, setFormState] = useState<DynamicFormState>({
    projectName: '',
    projectDescription: '',
    startDate: undefined,
    endDate: undefined,
    storyPoints: undefined,
    flag: false,
    tasks: []
  });

  // ── Task management handlers ────────────────────────────────────────────────

  const addTask = () => {
    const newTask: Task = {
      taskId: crypto.randomUUID(),
      taskName: '',
      taskDescription: '',
      taskStatus: defaultStatus,
      subtasks: []
    };
    setFormState(prev => ({
      ...prev,
      tasks: [...prev.tasks, newTask]
    }));
  };
  const removeTask = (taskIndex: number) => {
    setFormState(prev => ({
      ...prev,
      tasks: prev.tasks.filter((_, i) => i !== taskIndex)
    }));
  };
  const updateTaskName = (taskIndex: number, taskName: string) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        taskName
      };
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };
  const updateTaskDescription = (taskIndex: number, taskDescription: string) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        taskDescription
      };
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };
  const updateTaskStatus = (taskIndex: number, taskStatus: {
    name: string;
    value: string;
  } | null) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        taskStatus
      };
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };

  // ── Subtask management handlers ────────────────────────────────────────────

  const addSubtask = (taskIndex: number) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      const updatedTask = {
        ...updatedTasks[taskIndex]
      };
      updatedTask.subtasks = [...updatedTask.subtasks, {
        subtaskId: crypto.randomUUID(),
        subtaskName: '',
        subtaskDescription: ''
      }];
      updatedTasks[taskIndex] = updatedTask;
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };
  const removeSubtask = (taskIndex: number, subtaskIndex: number) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      const updatedTask = {
        ...updatedTasks[taskIndex]
      };
      updatedTask.subtasks = updatedTask.subtasks.filter((_, i) => i !== subtaskIndex);
      updatedTasks[taskIndex] = updatedTask;
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };
  const updateSubtaskName = (taskIndex: number, subtaskIndex: number, subtaskName: string) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      const updatedTask = {
        ...updatedTasks[taskIndex]
      };
      const updatedSubtask = {
        ...updatedTask.subtasks[subtaskIndex],
        subtaskName
      };
      updatedTask.subtasks = [...updatedTask.subtasks.slice(0, subtaskIndex), updatedSubtask, ...updatedTask.subtasks.slice(subtaskIndex + 1)];
      updatedTasks[taskIndex] = updatedTask;
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };
  const updateSubtaskDescription = (taskIndex: number, subtaskIndex: number, subtaskDescription: string) => {
    setFormState(prev => {
      const updatedTasks = [...prev.tasks];
      const updatedTask = {
        ...updatedTasks[taskIndex]
      };
      const updatedSubtask = {
        ...updatedTask.subtasks[subtaskIndex],
        subtaskDescription
      };
      updatedTask.subtasks = [...updatedTask.subtasks.slice(0, subtaskIndex), updatedSubtask, ...updatedTask.subtasks.slice(subtaskIndex + 1)];
      updatedTasks[taskIndex] = updatedTask;
      return {
        ...prev,
        tasks: updatedTasks
      };
    });
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formState);
  };
  return <main style={{
    padding: '2rem',
    fontFamily: 'var(--sol-font-family, sans-serif)'
  }}>
      <header style={{
      marginBottom: '2rem'
    }}>
        <h1 style={{
        fontSize: '1.75rem',
        fontWeight: 600,
        margin: '0 0 0.5rem 0'
      }}>Dynamic form example</h1>
        <p style={{
        color: '#666',
        margin: 0
      }}>A dropdown nested inside a repeating task/subtask form</p>
      </header>

      <form onSubmit={onFormSubmit}>
        <section style={{
        marginBottom: '2rem'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
            <SOLTextInput label="Project name" value={formState.projectName} onValueChange={projectName => setFormState(prev => ({
            ...prev,
            projectName
          }))} />
            <SOLTextInput label="Project description" value={formState.projectDescription} onValueChange={projectDescription => setFormState(prev => ({
            ...prev,
            projectDescription
          }))} />
          </div>

          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
            <SOLDatePicker label="Start Date" prevNextButtons={false} value={formState.startDate} onChange={startDate => setFormState(prev => ({
            ...prev,
            startDate
          }))} />
            <SOLDatePicker label="End Date" prevNextButtons={false} value={formState.endDate} onChange={endDate => setFormState(prev => ({
            ...prev,
            endDate
          }))} />
          </div>

          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
            <SOLNumericSelector label="Story points" value={formState.storyPoints} onValueChange={value => setFormState(prev => ({
            ...prev,
            storyPoints: value === '' ? undefined : Number(value)
          }))} />
            <SOLSwitch label="Flag" symbol checked={formState.flag} onChange={({
            checked
          }) => setFormState(prev => ({
            ...prev,
            flag: checked
          }))} />
          </div>

          <div>
            <SOLButton type="button" variant="secondary" onButtonClick={addTask}>
              + Task
            </SOLButton>
          </div>
        </section>

        {formState.tasks.length > 0 && <section style={{
        marginBottom: '2rem'
      }}>
            <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>Tasks</h2>

            <SOLAccordion key={formState.tasks.length}>
              {formState.tasks.map((task, taskIndex) => <SOLAccordionItem key={task.taskId} id={task.taskId} header={task.taskName || 'Task'} selected={taskIndex + 1 === formState.tasks.length}>
                  <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
                    <SOLTextInput label="Task Name" placeholder="Enter task name" value={task.taskName} onValueChange={value => updateTaskName(taskIndex, value)} />
                    <SOLDropdown label="Status" placeholder="Select status" options={taskStatusOptions} selection={task.taskStatus} onSelectionChange={selection => updateTaskStatus(taskIndex, selection as {
                name: string;
                value: string;
              } | null)} isMultiple={false} optionsLabel="name" optionsValue="value" />
                    <SOLTextArea label="Description" placeholder="Enter task description" value={task.taskDescription} cols={200} minRows={3} onValueChange={value => updateTaskDescription(taskIndex, value)} />
                  </div>

                  <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
                    <SOLButton type="button" variant="secondary" onButtonClick={() => addSubtask(taskIndex)}>
                      + Subtask
                    </SOLButton>
                    <SOLButton type="button" variant="critical" onButtonClick={() => removeTask(taskIndex)}>
                      Remove Task
                    </SOLButton>
                  </div>

                  {task.subtasks.length > 0 && <div>
                      <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                margin: '0 0 1rem 0'
              }}>Sub Tasks</h3>

                      {task.subtasks.map((subtask, subtaskIndex) => <div key={subtask.subtaskId} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr auto',
                gap: '1rem',
                alignItems: 'start',
                marginBottom: '1rem'
              }}>
                          <SOLTextInput label="Name" placeholder="Enter name" value={subtask.subtaskName} onValueChange={value => updateSubtaskName(taskIndex, subtaskIndex, value)} />
                          <SOLTextInput label="Description" placeholder="Enter description" value={subtask.subtaskDescription} onValueChange={value => updateSubtaskDescription(taskIndex, subtaskIndex, value)} />
                          <SOLButton type="button" variant="secondary" onButtonClick={() => removeSubtask(taskIndex, subtaskIndex)}>
                            Remove Subtask
                          </SOLButton>
                        </div>)}
                    </div>}
                </SOLAccordionItem>)}
            </SOLAccordion>
          </section>}

        <SOLButton type="submit">Submit</SOLButton>
      </form>

      <section style={{
      marginTop: '2rem'
    }}>
        <span style={{
        fontWeight: 600
      }}>Form Value:</span>
        <pre style={{
        backgroundColor: '#f5f5f5',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '1rem',
        overflow: 'auto',
        fontFamily: 'monospace',
        fontSize: '0.875rem'
      }}>
          <code>{JSON.stringify(formState, null, 2)}</code>
        </pre>
      </section>
    </main>;
}
```

Rendered markup:
```html
<main style="padding: 2rem; font-family: var(--sol-font-family, sans-serif);"><header style="margin-bottom: 2rem;"><h1 style="font-size: 1.75rem; font-weight: 600; margin: 0px 0px 0.5rem;">Dynamic form example</h1><p style="color: rgb(102, 102, 102); margin: 0px;">A dropdown nested inside a repeating task/subtask form</p></header><form><section style="margin-bottom: 2rem;"><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;"><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_0_"><span class="sol-label-content"><span id="_r_0_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Project name</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_0_" autocomplete="off" type="text" value=""></div></div><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"><label class="sol-label" for="_r_5_"><span class="sol-label-content"><span id="_r_5_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Project description</span></span></label></div><div class="sol-input-container size-large"><input class="sol-input" id="_r_5_" autocomplete="off" type="text" value=""></div></div></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;"><div class="sol-date-picker sol-input-wrapper"><label class="sol-label" for="sol-date-picker-text-input-_r_a_"><span class="sol-label-content"><span id="sol-date-picker-text-input-_r_a_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Start Date</span></span></label><div class="sol-input-container-date-picker"><div class="input-text"><div class="input-wrapper"><span class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></span><span id="sol-date-picker-text-input-_r_a_-format-hint" class="sol-screenreader-only">Date format: MMM d, y</span><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large"><input class="sol-input" id="sol-date-picker-text-input-_r_a_" autocomplete="off" type="text" value="" aria-describedby="sol-date-picker-text-input-_r_a_-format-hint"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="Start Date, open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></div></div></div></div></div><div class="sol-error-message-container body-sm" id="error-_r_b_"></div></div><div class="sol-date-picker sol-input-wrapper"><label class="sol-label" for="sol-date-picker-text-input-_r_l_"><span class="sol-label-content"><span id="sol-date-picker-text-input-_r_l_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">End Date</span></span></label><div class="sol-input-container-date-picker"><div class="input-text"><div class="input-wrapper"><span class="sol-screenreader-only" aria-live="polite" aria-atomic="true"></span><span id="sol-date-picker-text-input-_r_l_-format-hint" class="sol-screenreader-only">Date format: MMM d, y</span><div class="sol-text-input sol-input-wrapper"><div class="sol-input-label-area"></div><div class="sol-input-container size-large"><input class="sol-input" id="sol-date-picker-text-input-_r_l_" autocomplete="off" type="text" value="" aria-describedby="sol-date-picker-text-input-_r_l_-format-hint"><span class="sol-icon-host"><button class="sol-icon-button" type="button" aria-label="End Date, open calendar" data-base-ui-tooltip-trigger=""><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"></path><path d="M8.5 6.5h2v2h-2v-2Zm0 3h2v2h-2v-2Zm0 3h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm3-3h2v2h-2v-2Zm0-3h2v2h-2v-2Zm-3 3h2v2h-2v-2Zm9-3h2v2h-2v-2Zm0 3h2v2h-2v-2Z"></path><path fill-rule="evenodd" d="M15 6H1V4h14v2ZM4.5 3V0h1v3h-1Zm6 0V0h1v3h-1Z" clip-rule="evenodd"></path></svg></div></button></span></div></div></div></div></div><div class="sol-error-message-container body-sm" id="error-_r_m_"></div></div></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;"><div class="sol-numeric-selector sol-input-wrapper"><label class="sol-label" for="sol-numeric-selector-input-_r_10_"><span class="sol-label-content"><span id="sol-numeric-selector-input-_r_10_-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Story points</span></span></label><div role="group" class="sol-input-container"><input id="sol-numeric-selector-input-_r_10_" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" role="spinbutton" class="sol-input body-md" type="text" value=""><div class="sol-input-trailing-button-container numeric-buttons"><button type="button" tabindex="-1" class="top-button" aria-label="Increment Story points"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 10.878a.484.484 0 0 0 .643 0 .393.393 0 0 0 0-.59L8.32 6.123a.484.484 0 0 0-.642 0L3.132 10.29a.393.393 0 0 0 0 .589.484.484 0 0 0 .643 0L8 7.006l4.224 3.872Z"></path></svg></div></span></button><button type="button" tabindex="-1" class="bottom-button" aria-label="Decrement Story points"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.224 6.122a.484.484 0 0 1 .643 0 .393.393 0 0 1 0 .59L8.32 10.877a.484.484 0 0 1-.642 0L3.133 6.711a.393.393 0 0 1 0-.589.484.484 0 0 1 .643 0L8 9.994l4.224-3.872Z"></path></svg></div></span></button></div></div><div class="sol-screenreader-only" role="status" aria-live="polite" aria-atomic="true"></div></div><input step="1" aria-hidden="true" tabindex="-1" type="number" value="" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><div class="sol-switch-wrapper"><div id="sol-switch-_r_16_" class="sol-switch large icon"><span id="sol-switch-_r_16_-interaction-hint" class="sol-screenreader-only">Press Enter or Space bar to toggle</span><button type="button" data-unchecked="" tabindex="0" id="sol-switch-_r_16_-button" role="switch" aria-checked="false" aria-labelledby="sol-switch-_r_16_-button-label" aria-describedby="sol-switch-_r_16_-interaction-hint"><span data-unchecked=""></span></button><input tabindex="-1" aria-hidden="true" type="checkbox" style="clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"><label class="sol-label" for="sol-switch-_r_16_-button"><span class="sol-label-content"><span id="sol-switch-_r_16_-button-label" class="sol-label-text" data-base-ui-tooltip-trigger="">Flag</span></span></label></div></div></div><div><button type="button" class="sol-button btn-secondary-large"><span class="projected-content">+ Task</span></button></div></section><button type="submit" class="sol-button btn-primary-large"><span class="projected-content">Submit</span></button></form><section style="margin-top: 2rem;"><span style="font-weight: 600;">Form Value:</span><pre style="background-color: rgb(245, 245, 245); border: 1px solid rgb(221, 221, 221); border-radius: 4px; padding: 1rem; overflow: auto; font-family: monospace; font-size: 0.875rem;"><code>{
  "projectName": "",
  "projectDescription": "",
  "flag": false,
  "tasks": []
}</code></pre></section></main>
```
