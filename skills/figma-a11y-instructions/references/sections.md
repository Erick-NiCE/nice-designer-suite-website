# Section Templates — HTML

These templates produce the exact visual style of the Analytics Hub Figma reference.
Replace all `[PLACEHOLDER]` values with screen-specific content from the Figma inspection.
Assemble all five sections inside the **Page Shell** below.

---

## Page Shell (wrap all sections in this)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Accessibility Instructions – [SCREEN NAME]</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    font-size: 14px;
    color: #323130;
    background: #F5F4F3;
    line-height: 1.5;
  }

  /* Sticky Nav */
  .top-nav {
    position: sticky; top: 0; z-index: 100;
    background: #FFFFFF; border-bottom: 1px solid #EDEBE9;
    padding: 0 32px; display: flex; gap: 0; align-items: center;
    height: 44px; overflow-x: auto;
  }
  .top-nav a {
    display: inline-block; padding: 0 16px; height: 44px; line-height: 44px;
    font-size: 13px; font-weight: 500; color: #323130; text-decoration: none;
    white-space: nowrap; border-bottom: 2px solid transparent;
    transition: border-color 0.15s, color 0.15s;
  }
  .top-nav a:hover { color: #0078D4; border-bottom-color: #0078D4; }

  /* Page layout */
  .page { max-width: 1200px; margin: 0 auto; padding: 32px 24px 64px; }
  .page-title {
    font-size: 28px; font-weight: 700; color: #201F1E;
    margin-bottom: 8px;
  }
  .page-subtitle { color: #605E5C; margin-bottom: 32px; }

  /* Section cards */
  .section-card {
    background: #FFFFFF; border: 1px solid #EDEBE9;
    border-radius: 4px; margin-bottom: 32px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.07);
  }
  .section-header {
    padding: 24px 32px 16px;
    border-bottom: 1px solid #EDEBE9;
  }
  .section-number {
    display: inline-block; font-size: 12px; font-weight: 600;
    color: #0078D4; text-transform: uppercase; letter-spacing: 0.5px;
    margin-bottom: 4px;
  }
  .section-title {
    font-size: 22px; font-weight: 700; color: #201F1E;
  }
  .section-body { padding: 24px 32px; }

  /* Overview box */
  .overview-box {
    background: #F9F9F9; border: 1px solid #E1DFDD;
    border-radius: 3px; padding: 16px 20px; margin-bottom: 24px;
  }
  .overview-box h3 {
    font-size: 13px; font-weight: 600; color: #323130; margin-bottom: 6px;
  }
  .overview-box p { font-size: 14px; color: #323130; }

  /* Warning callout */
  .callout-warning {
    background: #FFF4CE; border-left: 3px solid #F2C94C;
    border-radius: 2px; padding: 12px 16px; margin: 16px 0;
  }
  .callout-warning strong { color: #323130; }

  /* Headings inside sections */
  h2.sub-heading {
    font-size: 17px; font-weight: 600; color: #201F1E;
    margin: 28px 0 12px;
  }
  h2.sub-heading:first-child { margin-top: 0; }
  h3.sub-sub-heading {
    font-size: 13px; font-weight: 600; color: #323130;
    margin: 20px 0 8px;
  }
  p.body-text { font-size: 14px; color: #323130; margin-bottom: 12px; }

  /* Tables */
  .a11y-table {
    width: 100%; border-collapse: collapse;
    margin-bottom: 24px; font-size: 14px;
  }
  .a11y-table thead tr {
    background: #F3F2F1;
  }
  .a11y-table thead th {
    padding: 10px 14px; text-align: left;
    font-weight: 600; color: #323130;
    border: 1px solid #EDEBE9;
    white-space: nowrap;
  }
  .a11y-table tbody td {
    padding: 10px 14px; color: #323130;
    border: 1px solid #EDEBE9; vertical-align: top;
  }
  .a11y-table tbody tr:hover { background: #F3F2F1; }

  /* Keyboard key chips */
  kbd {
    display: inline-block;
    background: #F3F2F1; border: 1px solid #8A8886;
    border-radius: 3px; padding: 1px 6px;
    font-family: "Consolas", "Courier New", monospace;
    font-size: 12px; color: #201F1E;
    white-space: nowrap; vertical-align: middle;
  }

  /* Code block */
  .code-block {
    background: #1E1E1E; color: #D4D4D4;
    font-family: "Consolas", "Courier New", monospace;
    font-size: 13px; line-height: 1.6;
    padding: 16px 20px; border-radius: 4px;
    overflow-x: auto; margin: 12px 0 24px;
    white-space: pre;
  }

  /* Screenshot frame */
  .screenshot-frame {
    border: 1px dashed #BDBDBD; border-radius: 4px;
    overflow: hidden; margin: 16px 0 24px;
    position: relative; background: #F0F0F0;
  }
  .screenshot-frame img { width: 100%; display: block; }

  /* Tab order number circles */
  .tab-circle {
    display: inline-flex; align-items: center; justify-content: center;
    width: 24px; height: 24px; border-radius: 50%;
    background: #0078D4; color: #FFFFFF;
    font-size: 11px; font-weight: 600;
    flex-shrink: 0;
  }

  /* Tab order list */
  .tab-order-list {
    display: flex; flex-direction: column; gap: 6px; margin: 12px 0 24px;
  }
  .tab-order-item {
    display: flex; align-items: center; gap: 12px;
    padding: 8px 12px; background: #FAFAF9;
    border: 1px solid #EDEBE9; border-radius: 3px;
    font-size: 14px; color: #323130;
  }

  /* WCAG level badges */
  .badge {
    display: inline-block; padding: 2px 8px; border-radius: 2px;
    font-size: 12px; font-weight: 600; color: #FFFFFF;
    white-space: nowrap;
  }
  .badge-aaa { background: #107C10; }
  .badge-aa  { background: #C19C00; color: #201F1E; }
  .badge-fail { background: #A4262C; }
  .badge-decorative { background: #605E5C; font-weight: 400; }

  /* Color swatch */
  .color-swatch {
    display: inline-block; width: 14px; height: 14px;
    border-radius: 2px; border: 1px solid #C8C6C4;
    vertical-align: middle; margin-right: 6px; flex-shrink: 0;
  }
  .hex-cell { display: flex; align-items: center; font-family: monospace; }

  /* Semantic region overlay labels (for page structure screenshot) */
  .region-label {
    display: inline-block; padding: 2px 8px;
    font-size: 11px; font-weight: 600; border-radius: 2px;
    font-family: monospace;
  }
  .region-header  { background: #DEECF9; color: #004578; border: 1px solid #004578; }
  .region-nav     { background: #DFF6DD; color: #0E5C0A; border: 1px solid #0E5C0A; }
  .region-main    { background: #FFF4CE; color: #7D5700; border: 1px solid #A57600; }
  .region-section { background: #F3E9FF; color: #5C2D91; border: 1px solid #5C2D91; }
  .region-footer  { background: #FFECEC; color: #6E1010; border: 1px solid #A4262C; }
  .region-table   { background: #E3F2FD; color: #01579B; border: 1px solid #01579B; }

  /* Divider */
  .section-divider { height: 1px; background: #EDEBE9; margin: 24px 0; }
</style>
</head>
<body>

<!-- STICKY NAV -->
<nav class="top-nav" aria-label="Section navigation">
  <a href="#section-1">1. Page Structure</a>
  <a href="#section-2">2. Tab Order</a>
  <a href="#section-3">3. Shortcut Keys</a>
  <a href="#section-4">4. Screen Reader</a>
  <a href="#section-5">5. Color &amp; Contrast</a>
</nav>

<div class="page">
  <h1 class="page-title">Accessibility Instructions for Developers</h1>
  <p class="page-subtitle">[SCREEN NAME] · WCAG 2.1 Compliance Specification</p>

  <!-- SECTION 1: PAGE STRUCTURE -->
  <!-- SECTION 2: KEYBOARD TAB ORDER -->
  <!-- SECTION 3: SHORTCUT KEYS & COMPONENT PATTERNS -->
  <!-- SECTION 4: SCREEN READER & ALT TEXT -->
  <!-- SECTION 5: COLOR AND CONTRAST -->

</div>
</body>
</html>
```

---

## Section 1: Page Structure and Semantic HTML

```html
<div class="section-card" id="section-1">
  <div class="section-header">
    <span class="section-number">Section 1</span>
    <h2 class="section-title">Page Structure and Semantic HTML</h2>
  </div>
  <div class="section-body">

    <div class="overview-box">
      <h3>Overview</h3>
      <p>[1–2 sentences describing the screen's purpose and its accessibility approach.]</p>
    </div>

    <h2 class="sub-heading">Heading Hierarchy</h2>
    <p class="body-text">Headings must follow a logical hierarchy without skipping levels.</p>

    <table class="a11y-table" role="table">
      <thead>
        <tr>
          <th scope="col">Heading Level</th>
          <th scope="col">Usage</th>
          <th scope="col">Example from [Screen Name]</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>&lt;h1&gt;</code></td><td>Main page title (one per page)</td><td>[H1 text]</td></tr>
        <tr><td><code>&lt;h2&gt;</code></td><td>Major section headings</td><td>[H2 examples]</td></tr>
        <tr><td><code>&lt;h3&gt;</code></td><td>Subsection headings</td><td>[H3 examples]</td></tr>
        <tr><td><code>&lt;h4&gt;</code></td><td>Sub-subsection headings</td><td>[H4 examples if present]</td></tr>
      </tbody>
    </table>

    <div class="callout-warning">
      <strong>Important:</strong> Never skip heading levels (e.g., don't jump from <code>&lt;h1&gt;</code> to <code>&lt;h3&gt;</code>).
    </div>

    <h2 class="sub-heading">Heading Hierarchy Visualization</h2>
    <p class="body-text">The following diagram shows the heading levels overlaid on the screen.</p>

    <!-- Embed screenshot with heading annotations -->
    <div class="screenshot-frame">
      <img src="data:image/png;base64,[BASE64_SCREENSHOT]" alt="[Screen Name] with heading level annotations" />
      <!-- Heading annotation overlays are described in the table below if SVG overlay is not possible -->
    </div>

    <h2 class="sub-heading">Visual Page Structure</h2>
    <p class="body-text">The following diagram shows the semantic HTML structure overlaid on the screen.</p>

    <!-- Color-coded region legend -->
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
      <span class="region-label region-header">&lt;header&gt;</span>
      <span class="region-label region-nav">&lt;nav&gt;</span>
      <span class="region-label region-main">&lt;main&gt;</span>
      <span class="region-label region-section">&lt;section&gt;</span>
      <span class="region-label region-table">&lt;table&gt;</span>
      <span class="region-label region-footer">&lt;footer&gt;</span>
    </div>

    <table class="a11y-table" role="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">HTML Element</th>
          <th scope="col">Content</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><code>&lt;header&gt;</code></td><td>[describe header content]</td></tr>
        <tr><td>2</td><td><code>&lt;nav&gt;</code></td><td>[describe nav content]</td></tr>
        <tr><td>3</td><td><code>&lt;main&gt;</code></td><td>[describe main content]</td></tr>
        <tr><td>4</td><td><code>&lt;h1&gt;</code></td><td>[page title]</td></tr>
        <tr><td>5</td><td><code>&lt;section&gt;</code></td><td>[section 1 name]</td></tr>
        <tr><td>6</td><td><code>&lt;section&gt;</code></td><td>[section 2 name]</td></tr>
        <tr><td>7</td><td><code>&lt;table&gt;</code></td><td>[data area]</td></tr>
        <tr><td>8</td><td><code>&lt;footer&gt;</code></td><td>[footer content]</td></tr>
      </tbody>
    </table>

  </div>
</div>
```

---

## Section 2: Keyboard Navigation – Tab Order

```html
<div class="section-card" id="section-2">
  <div class="section-header">
    <span class="section-number">Section 2</span>
    <h2 class="section-title">Keyboard Navigation – Tab Order</h2>
  </div>
  <div class="section-body">

    <div class="overview-box">
      <h3>Overview</h3>
      <p>[1–2 sentences about the tab order approach for this screen.]</p>
    </div>

    <h2 class="sub-heading">Complete Tab Order</h2>
    <p class="body-text">The following diagram shows the numbered tab sequence across the screen. Blue circles indicate focus stop order.</p>

    <!-- Screenshot with numbered tab circles embedded as base64 -->
    <div class="screenshot-frame">
      <img src="data:image/png;base64,[BASE64_SCREENSHOT]" alt="[Screen Name] with numbered tab order circles" />
    </div>

    <!-- Tab sequence list with blue circles -->
    <div class="tab-order-list">
      <div class="tab-order-item"><span class="tab-circle">1</span>[Element 1 name – e.g., Skip to main content link]</div>
      <div class="tab-order-item"><span class="tab-circle">2</span>[Element 2 name]</div>
      <div class="tab-order-item"><span class="tab-circle">3</span>[Element 3 name]</div>
      <!-- ...continue for all interactive elements... -->
    </div>

    <h2 class="sub-heading">Keyboard Interaction Patterns</h2>

    <table class="a11y-table" role="table">
      <thead>
        <tr>
          <th scope="col">Key / Combination</th>
          <th scope="col">Function</th>
          <th scope="col">Context</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><kbd>Tab</kbd></td>
          <td>Move focus forward</td>
          <td>Navigate through all interactive elements</td>
        </tr>
        <tr>
          <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
          <td>Move focus backward</td>
          <td>Return to previous element</td>
        </tr>
        <tr>
          <td><kbd>Space</kbd></td>
          <td>Toggle checkbox selection</td>
          <td>Select/deselect rows or options</td>
        </tr>
        <tr>
          <td><kbd>Enter</kbd></td>
          <td>Activate button or link</td>
          <td>Click buttons, open menus</td>
        </tr>
        <tr>
          <td><kbd>Ctrl</kbd> + <kbd>A</kbd></td>
          <td>Select all rows</td>
          <td>Bulk selection (when table has focus)</td>
        </tr>
        <tr>
          <td><kbd>↑</kbd> <kbd>↓</kbd> Arrow Keys</td>
          <td>Navigate within dropdown menus</td>
          <td>When action menu is open</td>
        </tr>
        <tr>
          <td><kbd>Esc</kbd></td>
          <td>Close open menus or dialogs</td>
          <td>Dismiss menus, close dialogs</td>
        </tr>
        <tr>
          <td><kbd>Home</kbd></td>
          <td>Jump to first row</td>
          <td>When table has focus</td>
        </tr>
        <tr>
          <td><kbd>End</kbd></td>
          <td>Jump to last visible row</td>
          <td>When table has focus</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
```

---

## Section 3: Keyboard Navigation – Shortcut Keys & Component Patterns

```html
<div class="section-card" id="section-3">
  <div class="section-header">
    <span class="section-number">Section 3</span>
    <h2 class="section-title">Keyboard Navigation – Shortcut Keys &amp; Component Patterns</h2>
  </div>
  <div class="section-body">

    <div class="overview-box">
      <h3>WCAG Standard Keyboard Interactions (Level A Compliant)</h3>
      <p>All interactive components must support standard keyboard navigation. [Screen-specific note about which component types are present.]</p>
    </div>

    <!-- LINKS -->
    <h2 class="sub-heading">Links</h2>
    <table class="a11y-table">
      <thead><tr><th>Key</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd></td><td>Moves focus to the link</td></tr>
        <tr><td><kbd>Enter</kbd></td><td>Activates the link (navigates to destination)</td></tr>
        <tr><td><kbd>Shift</kbd> + <kbd>Tab</kbd></td><td>Moves focus to previous focusable element</td></tr>
      </tbody>
    </table>

    <!-- BUTTONS -->
    <h2 class="sub-heading">Buttons</h2>
    <table class="a11y-table">
      <thead><tr><th>Key</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd></td><td>Moves focus to the button</td></tr>
        <tr><td><kbd>Enter</kbd> or <kbd>Space</kbd></td><td>Activates the button</td></tr>
        <tr><td><kbd>Shift</kbd> + <kbd>Tab</kbd></td><td>Moves focus to previous focusable element</td></tr>
      </tbody>
    </table>

    <!-- CHECKBOXES -->
    <h2 class="sub-heading">Checkboxes</h2>
    <table class="a11y-table">
      <thead><tr><th>Key</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd></td><td>Moves focus to the checkbox</td></tr>
        <tr><td><kbd>Space</kbd></td><td>Toggles checkbox (check/uncheck)</td></tr>
        <tr><td><kbd>Shift</kbd> + <kbd>Click</kbd></td><td>Selects range of rows (with mouse)</td></tr>
        <tr><td><kbd>Ctrl</kbd> + <kbd>A</kbd></td><td>Select all (when container has focus)</td></tr>
      </tbody>
    </table>

    <!-- TABLE / DATA GRID -->
    <h2 class="sub-heading">Table / Data Grid</h2>
    <table class="a11y-table">
      <thead><tr><th>Key</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd></td><td>Moves between interactive elements (checkboxes, sort buttons, action menus)</td></tr>
        <tr><td><kbd>Enter</kbd> or <kbd>Space</kbd></td><td>Activates focused element</td></tr>
        <tr><td><kbd>Arrow Keys</kbd></td><td>Navigate table cells (with screen reader table mode)</td></tr>
        <tr><td><kbd>Ctrl</kbd> + <kbd>Home</kbd></td><td>Jump to first cell (with screen reader)</td></tr>
        <tr><td><kbd>Ctrl</kbd> + <kbd>End</kbd></td><td>Jump to last cell (with screen reader)</td></tr>
      </tbody>
    </table>

    <!-- SORTABLE COLUMN HEADERS -->
    <h2 class="sub-heading">Sortable Column Headers</h2>
    <table class="a11y-table">
      <thead><tr><th>Key</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd></td><td>Moves focus to sortable column header</td></tr>
        <tr><td><kbd>Enter</kbd> or <kbd>Space</kbd></td><td>Sorts column (toggles ascending/descending)</td></tr>
      </tbody>
    </table>

    <!-- DROPDOWN MENUS -->
    <h2 class="sub-heading">Dropdown Menus</h2>
    <table class="a11y-table">
      <thead><tr><th>Key</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd></td><td>Moves focus to dropdown button</td></tr>
        <tr><td><kbd>Enter</kbd> or <kbd>Space</kbd></td><td>Opens dropdown menu</td></tr>
        <tr><td><kbd>↓</kbd> Arrow Down</td><td>Opens menu or moves to next menu item</td></tr>
        <tr><td><kbd>↑</kbd> Arrow Up</td><td>Moves to previous menu item</td></tr>
        <tr><td><kbd>Home</kbd></td><td>Moves to first menu item</td></tr>
        <tr><td><kbd>End</kbd></td><td>Moves to last menu item</td></tr>
        <tr><td><kbd>Enter</kbd></td><td>Activates focused menu item</td></tr>
        <tr><td><kbd>Esc</kbd></td><td>Closes menu and returns focus to button</td></tr>
      </tbody>
    </table>

    <!-- Add additional component sections as found on screen: Tabs, Radio Groups, Modals, Date Pickers, etc. -->

  </div>
</div>
```

---

## Section 4: Screen Reader Announcements & Alternative Text (COMBINED)

```html
<div class="section-card" id="section-4">
  <div class="section-header">
    <span class="section-number">Section 4</span>
    <h2 class="section-title">Screen Reader Announcements &amp; Alternative Text</h2>
  </div>
  <div class="section-body">

    <div class="overview-box">
      <h3>Overview</h3>
      <p>Screen reader users depend on descriptive text alternatives and accurate announcements. [Screen-specific context sentence about what dynamic elements or complex components are present.]</p>
    </div>

    <h2 class="sub-heading">Table Navigation Announcements</h2>
    <table class="a11y-table">
      <thead><tr><th>User Action</th><th>Screen Reader Announcement</th></tr></thead>
      <tbody>
        <tr><td>Focus enters table</td><td>"[Table name], table with [N] rows and [M] columns"</td></tr>
        <tr><td>Navigate to column header</td><td>"[Column Name], column header, sortable, button"</td></tr>
        <tr><td>Navigate to data cell</td><td>"[Cell value], row [N], [Column Name] column"</td></tr>
        <tr><td>Focus on row checkbox</td><td>"Select [Item Name], checkbox, not checked"</td></tr>
        <tr><td>Focus on status icon</td><td>"Status: [Status], image"</td></tr>
        <tr><td>Focus on actions menu</td><td>"Actions for [Item Name], button, has popup"</td></tr>
      </tbody>
    </table>

    <h2 class="sub-heading">Sort State Announcements</h2>
    <table class="a11y-table">
      <thead><tr><th>Sort State</th><th>Screen Reader Announcement</th></tr></thead>
      <tbody>
        <tr><td>Unsorted column</td><td>"[Column Name], column header, sortable, button"</td></tr>
        <tr><td>After clicking to sort ascending</td><td>"[Column Name], sorted ascending, column header, button"</td></tr>
        <tr><td>After clicking to sort descending</td><td>"[Column Name], sorted descending, column header, button"</td></tr>
      </tbody>
    </table>

    <h2 class="sub-heading">Selection State Announcements</h2>
    <table class="a11y-table">
      <thead><tr><th>Action</th><th>Screen Reader Announcement</th></tr></thead>
      <tbody>
        <tr><td>Check single row</td><td>"Select [Item Name], checkbox, checked"</td></tr>
        <tr><td>Check multiple rows</td><td>"Select [Item Name 2], checkbox, checked. 2 of [N] selected"</td></tr>
        <tr><td>Select all</td><td>"Select all [N] items, checkbox, checked. All [N] items selected"</td></tr>
        <tr><td>Some items selected</td><td>"Select all items, checkbox, mixed. [N] of [Total] selected"</td></tr>
        <tr><td>Deselect all</td><td>"Select all items, checkbox, not checked. 0 items selected"</td></tr>
      </tbody>
    </table>

    <h2 class="sub-heading">Dynamic Content Announcements</h2>
    <p class="body-text">Use ARIA live regions to announce dynamic changes without requiring user navigation.</p>
    <table class="a11y-table">
      <thead><tr><th>Event</th><th>Announcement</th></tr></thead>
      <tbody>
        <tr><td>[Relevant event 1]</td><td>"[Announcement text]"</td></tr>
        <tr><td>Filter applied</td><td>"Showing [N] of [Total] [items]"</td></tr>
        <tr><td>Loading</td><td>"Loading [content name]..."</td></tr>
        <tr><td>Error occurred</td><td>"Error: [Error message]"</td></tr>
        <tr><td>Success action</td><td>"[Action] completed successfully"</td></tr>
      </tbody>
    </table>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:8px;">

      <div>
        <h3 class="sub-sub-heading">ARIA Live Region Implementation</h3>
        <pre class="code-block">&lt;!-- Selection count --&gt;
&lt;div
  aria-live="polite"
  aria-atomic="true"
  class="sr-only"
  id="selection-status"&gt;
  &lt;!-- Updated dynamically: "12 items selected" --&gt;
&lt;/div&gt;

&lt;!-- Operation status --&gt;
&lt;div
  aria-live="assertive"
  aria-atomic="true"
  class="sr-only"
  id="operation-status"&gt;
  &lt;!-- Updated on error/success --&gt;
&lt;/div&gt;</pre>
      </div>

      <div>
        <h3 class="sub-sub-heading">Screen Reader Testing Tips</h3>
        <ul style="padding-left:20px;color:#323130;font-size:14px;line-height:2;">
          <li>Test with NVDA (free) and JAWS (commercial)</li>
          <li>Verify all column headers are announced</li>
          <li>Test selection announcements with multiple rows</li>
          <li>Confirm live region updates are announced</li>
          <li>Test menu navigation with arrow keys</li>
        </ul>
      </div>

    </div>

    <div class="overview-box" style="margin-top:24px;">
      <h3>Common Screen Reader Commands</h3>
      <p>Inform users of these keyboard shortcuts for efficient navigation:</p>
      <ul style="padding-left:20px;margin-top:8px;line-height:2;">
        <li><strong>T:</strong> Jump to next table</li>
        <li><strong>H:</strong> Jump to next heading</li>
        <li><strong>Ctrl+Alt+→/←/↑/↓:</strong> Navigate table cells</li>
        <li><strong>Ctrl+Alt+Home:</strong> Jump to first cell in table</li>
        <li><strong>Insert+F7:</strong> List all links, headings, and landmarks</li>
      </ul>
    </div>

    <div class="section-divider"></div>

    <h2 class="sub-heading">Status Indicator Accessibility</h2>
    <table class="a11y-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Visual Representation</th>
          <th>Accessible Label</th>
          <th>ARIA Implementation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>[Status 1]</td><td>[Visual description]</td><td>Status: [Status 1]</td><td><code>aria-label="[Status 1]" role="status"</code></td></tr>
        <tr><td>[Status 2]</td><td>[Visual description]</td><td>Status: [Status 2]</td><td><code>aria-label="[Status 2]" role="status"</code></td></tr>
      </tbody>
    </table>

    <h2 class="sub-heading">Icon Alternative Text</h2>
    <table class="a11y-table">
      <thead><tr><th>Icon Type</th><th>Visual Appearance</th><th>Accessible Label</th></tr></thead>
      <tbody>
        <tr><td>[Icon 1]</td><td>[Visual description]</td><td>[Descriptive label]</td></tr>
        <tr><td>[Icon 2]</td><td>[Visual description]</td><td>[Descriptive label]</td></tr>
      </tbody>
    </table>

    <h2 class="sub-heading">Interactive Element Labels</h2>
    <table class="a11y-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Visual Appearance</th>
          <th>Accessible Label</th>
          <th>Implementation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>[Button 1]</td><td>[Visual]</td><td>[Label]</td><td><code>aria-label="[label]"</code></td></tr>
        <tr><td>Row Checkbox</td><td>Empty or checked box</td><td>Select [Item Name]</td><td><code>aria-label="Select [Item Name]"</code></td></tr>
        <tr><td>Select All Checkbox</td><td>Header checkbox</td><td>Select all [N] items</td><td><code>aria-label="Select all [items]"</code></td></tr>
        <tr><td>Sort Button</td><td>Column header with arrow</td><td>Sort by [Column], [direction]</td><td><code>aria-sort="ascending"</code></td></tr>
        <tr><td>Actions Menu</td><td>Three dots / kebab menu</td><td>Actions for [Item Name]</td><td><code>aria-label="Actions for [Item Name]" aria-haspopup="menu"</code></td></tr>
      </tbody>
    </table>

  </div>
</div>
```

---

## Section 5: Color and Contrast

```html
<div class="section-card" id="section-5">
  <div class="section-header">
    <span class="section-number">Section 5</span>
    <h2 class="section-title">Color and Contrast</h2>
  </div>
  <div class="section-body">

    <div class="overview-box">
      <h3>WCAG 2.1 Compliance</h3>
      <p>All status indicators, text, and interactive elements must meet minimum contrast requirements. [Screen-specific context sentence.]</p>
    </div>

    <h2 class="sub-heading">Status Indicator Color Palette</h2>
    <table class="a11y-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Icon Color</th>
          <th>Background</th>
          <th>Contrast Ratio</th>
          <th>WCAG Level</th>
          <th>Recommended Color</th>
          <th>New Contrast Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Status 1]</td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#[HEX]"></span>#[HEX]</div></td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#[HEX]"></span>#[HEX]</div></td>
          <td>[X.XX:1]</td>
          <td><span class="badge badge-aaa">AAA ✓</span></td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#[HEX]"></span>#[HEX] (Already AAA)</div></td>
          <td>[X.XX:1]</td>
        </tr>
        <!-- Repeat for each status -->
      </tbody>
    </table>

    <h2 class="sub-heading">[Component] Color Specifications</h2>
    <table class="a11y-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Foreground</th>
          <th>Background</th>
          <th>Contrast Ratio</th>
          <th>WCAG Level</th>
          <th>Recommended Color</th>
          <th>New Contrast Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Element 1]</td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#[HEX]"></span>#[HEX]</div></td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#[HEX]"></span>#[HEX]</div></td>
          <td>[X.XX:1]</td>
          <td><span class="badge badge-aaa">AAA ✓</span></td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#[HEX]"></span>#[HEX]</div></td>
          <td>[X.XX:1]</td>
        </tr>
        <tr>
          <td>Decorative element</td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#EDEBE9"></span>#EDEBE9</div></td>
          <td><div class="hex-cell"><span class="color-swatch" style="background:#FFFFFF"></span>#FFFFFF</div></td>
          <td>1.15:1</td>
          <td><span class="badge badge-decorative">Decorative</span></td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <!-- WCAG badge reference key -->
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;align-items:center;font-size:13px;color:#323130;">
      <strong>Badge key:</strong>
      <span><span class="badge badge-aaa">AAA ✓</span> ≥ 7:1</span>
      <span><span class="badge badge-aa">AA ✓</span> ≥ 4.5:1</span>
      <span><span class="badge badge-fail">✗ Fail</span> &lt; 4.5:1 (normal text)</span>
      <span><span class="badge badge-decorative">Decorative</span> No requirement</span>
    </div>

    <h2 class="sub-heading">Multi-Modal Status Indicator Design Pattern</h2>
    <div class="overview-box">
      <h3>Multi-Modal Status Indicators</h3>
      <p>To ensure accessibility for users with color blindness:</p>
      <ul style="padding-left:20px;margin-top:8px;line-height:2;">
        <li><strong>Color:</strong> [describe the color usage]</li>
        <li><strong>Icon Shape:</strong> [describe icon shapes used]</li>
        <li><strong>Text Label:</strong> [describe text labels]</li>
        <li><strong>Tooltip:</strong> [describe tooltip behavior]</li>
      </ul>
    </div>

  </div>
</div>
```

---

## Notes on Content Quality

- **Be specific**: Use actual element names, actual hex values, actual announcement strings
- **No placeholders in final output**: Every `[PLACEHOLDER]` must be replaced with real content
- **Contrast math**: Show your work inline if a ratio is borderline
- **Decorative elements**: Flag items that are decorative (no contrast requirement)
- **Recommended Color column**: If the current color already meets AAA, repeat the same hex and add "(Already AAA)"
- **Design system priority**: Always prefer design system tokens over arbitrary hex values
- **WCAG badges**: Use `badge-aaa` for ≥ 7:1, `badge-aa` for ≥ 4.5:1, `badge-fail` for failures, `badge-decorative` for decorative
- **Color swatches**: Always render a colored `<span class="color-swatch">` before each hex in color tables
