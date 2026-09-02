# UI, Extending Obsidian & Automation Reference

---

## Appearance

### Themes

Settings → Appearance → Themes → Manage → Browse community themes

- Switch between light and dark variant from the theme picker
- Some themes have additional settings under "Style Settings" (requires Style Settings community plugin)

### Fonts

Settings → Appearance:
- **Interface font**: affects menus, sidebars
- **Text font**: affects note body
- **Monospace font**: affects code blocks

### Accent Color

Settings → Appearance → Accent color — affects buttons, active states, links.

### CSS Snippets

1. Create a `.css` file in `.obsidian/snippets/`
2. Settings → Appearance → CSS snippets → toggle on

Common snippets:

```css
/* Wider reading view */
.markdown-reading-view .markdown-preview-section {
  max-width: 900px;
}

/* Custom callout */
.callout[data-callout="project"] {
  --callout-color: 100, 149, 237;
  --callout-icon: briefcase;
}

/* Hide frontmatter in reading view */
.markdown-reading-view .metadata-container {
  display: none;
}

/* Bigger H1 */
.cm-header-1, h1 {
  font-size: 2em !important;
}
```

---

## Hotkeys

Settings → Hotkeys — assign or override any command.

Key defaults:

| Action | Mac | Windows/Linux |
|---|---|---|
| Command Palette | `Cmd+P` | `Ctrl+P` |
| Quick Switcher | `Cmd+O` | `Ctrl+O` |
| New note | `Cmd+N` | `Ctrl+N` |
| Toggle sidebar | `Cmd+\` | `Ctrl+\` |
| Graph view | `Cmd+G` | `Ctrl+G` |
| Toggle reading view | `Cmd+E` | `Ctrl+E` |
| Insert template | `Cmd+Shift+I` | `Ctrl+Shift+I` |
| Format bold | `Cmd+B` | `Ctrl+B` |
| Format italic | `Cmd+I` | `Ctrl+I` |

---

## Sidebar & Panels

- **Left sidebar**: File Explorer, Search, Bookmarks, Tags, Graph
- **Right sidebar**: Backlinks, Outgoing Links, Outline, Properties

Drag any panel header to move it between sidebars. Right-click panel → Close, or click the X.

**Stacked tabs (Andy Matuschak mode)**: Settings → Appearance → Show tab title bar → disable. Then right-click a tab → Stack tab.

---

## Tabs & Panes

- **Split pane**: `Cmd+\` or drag a tab to split vertically; `Cmd+Shift+\` to split horizontally
- **Pinned tabs**: Right-click tab → Pin
- **Pop-out window**: Right-click tab → Move to new window (detaches into floating window)
- **Tab groups**: Each split area is a tab group; drag tabs between groups

---

## Drag and Drop

- Drag a file from File Explorer to a note → inserts a wikilink or embed
- Drag an image from Finder/Explorer → embeds the image in the note (copies to vault)
- Drag a tab to another pane split → moves the tab

---

## Status Bar

Bottom strip populated by plugins:
- **Word Count**: shows word/character count
- **Sync**: shows sync status if using Obsidian Sync
- **Tasks**: shows task count if Tasks plugin is enabled

---

## Obsidian URI

Protocol for deep-linking to vault content from other apps.

| Action | URI |
|---|---|
| Open vault | `obsidian://open?vault=VaultName` |
| Open note | `obsidian://open?vault=VaultName&file=Note%20Name` |
| Create new note | `obsidian://new?vault=VaultName&name=Title&content=Body` |
| Search | `obsidian://search?vault=VaultName&query=term` |
| Append to note | `obsidian://new?vault=VaultName&name=Title&append=true&content=new%20line` |

Encode spaces as `%20`. Use `obsidian://hook-get-address` for Hook integration.

**From a note**, link to a URI like this:
```markdown
[Open project note](obsidian://open?vault=MSB&file=10%20-%20Projects%2FProject%20Alpha)
```

---

## Obsidian CLI

Use the `obsidian` CLI tool to control a running Obsidian instance from the terminal.

```bash
# Read a note
obsidian read file="My Note"

# Create a note
obsidian create name="New Note" content="# Hello" template="Daily" silent

# Append to a note
obsidian append file="My Note" content="New line"

# Search vault
obsidian search query="search term" limit=10

# Read/append to today's daily note
obsidian daily:read
obsidian daily:append content="- [ ] New task"

# Set a property
obsidian property:set name="status" value="done" file="My Note"

# List tasks
obsidian tasks daily todo

# Browse tags
obsidian tags sort=count counts

# Show backlinks
obsidian backlinks file="My Note"
```

Target a specific vault: `obsidian vault="Vault Name" <command>`

Use `--copy` on any command to copy output to clipboard. Use `silent` flag to prevent files from opening in the UI.

### Plugin Development Workflow

```bash
# After code changes:
obsidian plugin:reload id=my-plugin

# Check for errors:
obsidian dev:errors

# Screenshot:
obsidian dev:screenshot path=screenshot.png

# Inspect DOM:
obsidian dev:dom selector=".workspace-leaf" text

# Run JavaScript in Obsidian context:
obsidian eval code="app.vault.getFiles().length"

# Console output:
obsidian dev:console level=error
```

---

## Obsidian Headless

Sync vaults from the command line without the desktop app running. Useful for server-side sync and automated backup.

```bash
obsidian sync --vault /path/to/vault
```

Requires Obsidian Sync subscription.

---

## Community Plugins — Managing

Settings → Community Plugins:
1. **Restricted mode** off (required to install community plugins)
2. Browse: Community Plugins → Browse
3. Install → Enable
4. Update: Check for updates from the community plugin panel

**Security**: Review plugin permissions before enabling. Each plugin runs JavaScript with full vault access. Prefer plugins with active maintenance and high download counts for sensitive vault data.

---

## Ribbon (Left Icon Strip)

Right-click any ribbon icon to hide it. Drag to reorder. Settings → Appearance → Show ribbon to toggle the entire strip.

---

## Language Settings

Settings → About → Language — change the interface language. Requires restart.

---

## Pop-out Windows

Right-click any tab → "Move to new window" — creates a detached floating window. Useful for reference notes alongside your main workspace.

Multiple pop-out windows are supported. Each is a full Obsidian pane and can be moved to a second monitor.
