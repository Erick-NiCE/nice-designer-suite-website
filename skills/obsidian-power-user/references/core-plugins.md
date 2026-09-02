# Core Plugins Reference

All plugins below are built into Obsidian (Settings → Core Plugins). No installation required.

---

## Daily Notes

Config: Settings → Core Plugins → Daily Notes

| Setting | Recommended |
|---|---|
| Date format | `YYYY-MM-DD` |
| New file location | `Daily/` |
| Template file | `Templates/Daily Note` |
| Open on startup | Personal preference |

Usage: `Ctrl/Cmd+Shift+D` opens today's note.

---

## Templates (Core)

Static template insertion — use Templater community plugin for dynamic content.

Tokens: `{{title}}` · `{{date}}` · `{{time}}`

Date format: ISO 8601, e.g. `{{date:YYYY-MM-DD}}`

Config: Set template folder in Settings → Core Plugins → Templates

Insert: `Ctrl/Cmd+Shift+I` or Command Palette → "Insert template"

---

## Search

Full-text search with operators:

| Operator | Description |
|---|---|
| `path:folder/` | Limit to folder |
| `file:name` | Match filename |
| `tag:#tagname` | Filter by tag |
| `line:(term1 term2)` | Both terms on same line |
| `block:(term)` | Match within a block |
| `section:(term)` | Match within a heading section |
| `content:term` | Search note content only |
| `/regex/` | Regular expression search |

Combine: `path:Projects tag:#active status` — spaces are AND, `OR` is explicit.

Embed search results in a note:

```markdown
```query
tag:#project status:active
```
```

---

## Graph View

**Global graph** (`Ctrl/Cmd+G`): Shows all notes and connections.

**Local graph**: Shows connections for the current note.

Display settings:
- **Arrows** — show link direction
- **Orphans** — show unlinked notes
- **Tags** — show tags as nodes
- **Attachments** — show media files

Filters: Use search syntax to filter visible nodes (e.g., `path:Projects`)

Groups: Add a filter expression and assign a color — useful for visualizing note types.

Forces:
- **Repel** — pushes nodes apart (increase for less clutter)
- **Link** — pulls linked notes together
- **Center** — pulls all nodes toward center

---

## Backlinks

Shows all notes that link to the current note.

- **Backlinks panel**: View in sidebar or toggle in document footer
- **Unlinked mentions**: Notes containing the current note's title as plain text (not a wikilink) — useful for creating missing links

---

## Outgoing Links

Shows all wikilinks in the current note, including unresolved links (links to notes that don't exist yet).

---

## Bookmarks

Save and organize:
- Notes
- Headings within notes
- Blocks within notes
- Searches
- Graph views
- URLs

Right-click any note or heading → Add bookmark. Organize in groups via the Bookmarks panel.

---

## Canvas

See main SKILL.md for full canvas JSON schema.

Keyboard: `Ctrl/Cmd+N` to create a new card · Double-click to create a text node · Hold `Alt` + drag to clone a node

---

## Command Palette

`Ctrl/Cmd+P` — fuzzy search all available commands.

Pin frequently-used commands: Right-click any command → Pin to palette.

---

## File Explorer

- `Ctrl/Cmd+N` — new note in current folder
- Right-click folder → New folder
- Drag to reorganize
- Right-click note → Reveal in Finder/Explorer

Sort options: alphabetical, by modified date, by created date.

---

## File Recovery

Automatically snapshots notes at set intervals.

Config:
- **Snapshot interval**: default 5 minutes
- **Retention period**: how many days to keep snapshots

Recover: Command Palette → "Open file recovery" → browse snapshots → restore.

---

## Note Composer

- **Extract selection**: select text → Command Palette → "Extract current selection" → creates a new note from the selection and replaces it with a wikilink
- **Merge notes**: Command Palette → "Merge current file with another file"

---

## Outline

Shows the heading structure of the current note as a navigable tree in the sidebar.

Toggle: View → Show outline

---

## Page Preview

Hover over any wikilink while holding `Ctrl/Cmd` to preview the linked note without opening it.

---

## Properties View

Sidebar panel for browsing and editing YAML frontmatter properties.

- View all properties used across the vault
- Manage property types (text, number, date, checkbox, list)
- Search notes by property value

---

## Quick Switcher

`Ctrl/Cmd+O` — fuzzy search to open or create notes.

Tip: Type a non-existent title and press Enter to create a new note with that name.

---

## Slash Commands

Type `/` while editing to open an inline command picker. Trigger any command without leaving the keyboard.

---

## Tags View

Sidebar panel showing all tags used in the vault, with counts and nested hierarchy.

Click any tag to see all notes with that tag.

---

## Unique Note Creator

Creates a new note with a Zettelkasten-style timestamp prefix.

Config: Settings → Core Plugins → Unique Note Creator → set prefix format (default: `YYYYMMDDHHmm`)

Result: `202503111423 Note title.md`

---

## Word Count

Status bar shows word count for current note. Hover for character count.

---

## Workspaces

Save the entire pane layout (open notes, sidebar state, split arrangement) as a named workspace.

- Save: Command Palette → "Manage workspaces" → Save
- Load: Command Palette → "Manage workspaces" → Load
- Switch quickly with `Ctrl/Cmd+Shift+W` (if hotkey assigned)

Useful for: separate "Writing mode" and "Review mode" layouts.

---

## Random Note

Command Palette → "Open random note" — opens a random vault note. Useful for review and serendipitous discovery.

---

## Slides

Turn any note into a presentation. Use `---` (horizontal rule) as a slide separator.

Start: Command Palette → "Start presentation"

Navigate: arrow keys. Exit: Escape.

---

## Web Viewer

Open web pages inside Obsidian panes (alongside notes). Command Palette → "Open web browser".

---

## Format Converter

Converts legacy markdown formats (e.g., Roam-style `[[wikilinks]]` to standard, old highlight syntax). Run once on import from other tools.

---

## Audio Recorder

Record audio directly into the vault. The recording is saved as a file and embedded in the current note.

Config: Set recording folder in Settings → Core Plugins → Audio Recorder
