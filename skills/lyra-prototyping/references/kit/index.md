# Lyra component kit (generated)

Generated 2026-11-16 from the SOL/Lyra Storybook, 48 components, 282 stories. Regenerate with `npm run gen:lyra-kit`.

This is where real Lyra components come from. There is no package to install and nothing to ask the user for. Build from it:

1. Call `get_component_kit({ components: ["Button", "Tabs"] })`, or read `components/<Name>.md`. It returns the real markup, usage code and exactly the CSS those components need.
2. Put `data-theme="lyra"` on `<html>`, include `base.css` (its `fonts/` folder holds the Lyra Sans font, which is Inter), then the component CSS, then the markup, unchanged.
3. Wire behavior (open and close, selection, validation) in your own code, following each component's usage code and the props in `../components/<Name>.md`.
4. The audit recognizes real components by their `sol-*` classes, so a screen assembled from kit markup is counted as real components and a hand-drawn look-alike is not.

| Component | Stories | Framework |
|---|---|---|
| Accordion | 2 | react |
| Action Bar | 1 | react |
| AI Assistant | 6 | react |
| Autocomplete | 3 | react |
| Breadcrumb | 1 | react |
| Button | 17 | react |
| Calendar | 6 | react |
| Card | 2 | react |
| Checkbox | 11 | react |
| Checkbox Group | 9 | react |
| Chip | 6 | react |
| Chip Group | 2 | react |
| Conversation UI | 4 | react |
| Date Picker | 4 | react |
| Date Range Picker | 5 | react |
| Dropdown | 25 | react |
| File Upload | 1 | react |
| Forms (pattern) | 1 | react |
| Grid | 9 | react |
| Icon | 7 | react |
| Icon (internal) | 4 | react |
| Info Overlay | 7 | react |
| Inline Notification | 2 | react |
| Label | 6 | react |
| Label & Error Message (internal) | 1 | react |
| Menu | 2 | react |
| Modal | 4 | react |
| Numeric Selector | 7 | react |
| Omnibar | 1 | react |
| Panel | 12 | react |
| Popover | 3 | react |
| Progress Bar | 2 | react |
| Query Builder | 9 | react |
| Query Builder Filter Types | 8 | react |
| RadioButtonGroup | 9 | react |
| Range Slider | 6 | react |
| Select | 14 | react |
| Side Panel | 5 | react |
| Spinner | 3 | react |
| Switch | 10 | react |
| Tabs | 4 | react |
| Text Input | 14 | react |
| Textarea | 2 | react |
| Time Picker | 3 | react |
| Toastr Notification | 4 | react |
| Toggle Group | 7 | react |
| Tooltip | 5 | react |
| Wizard | 6 | react |
