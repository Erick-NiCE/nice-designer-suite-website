# Form page

Use for: creating or editing one thing.

Inside the shell panel: breadcrumb, title ("Create queue", "Edit agent"), then the form as real components: Text Input, Textarea, Select or Dropdown, Checkbox, Radio group, Switch, Date Picker. Group related fields in Cards or sections with a heading. Required fields marked and explained once. Validation messages use the components' own error state with the actionable phrase first. A sticky footer with Cancel (secondary) and Save (primary) on the right.

States: pristine, invalid, saving, saved (Toastr), server error (Inline Notification).
Acceptance extras: every input has a label; focus moves to the first error on submit; the form works by keyboard only.
