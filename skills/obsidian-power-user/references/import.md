# Importing Notes into Obsidian

Use the official Importer plugin (community plugin, developed by Obsidian team): Settings → Community Plugins → Importer

---

## Apple Notes

**Method**: Importer plugin

**Process**:
1. On Mac: File → Export → Export All Notes as HTML (or per-folder)
2. Import the exported HTML files using Importer → Apple Notes (or HTML)

**Preserved**: Text, basic formatting, images
**Limitations**: Checklists become plain lists; attachments need manual handling; no tags

---

## Bear

**Method**: Importer plugin

**Process**:
1. Bear → File → Export notes → Export as Markdown (zip)
2. Importer → Bear → select the zip file

**Preserved**: Markdown formatting, images (in zip), tags (converted to `#hashtags`)
**Limitations**: Bear-specific syntax may not fully convert; attachments need manual review

---

## Craft

**Method**: Manual export + Importer

**Process**:
1. Craft → Export → Markdown
2. Import folder into Obsidian directly (Craft exports standard Markdown)

**Preserved**: Headings, lists, links
**Limitations**: Internal Craft links become plain text; no tag migration

---

## Evernote

**Method**: Importer plugin

**Process**:
1. Evernote → File → Export notes as `.enex` (per notebook or all)
2. Importer → Evernote → select `.enex` files

**Preserved**: Text, attachments, tags (as `#tag`), created/modified dates (as frontmatter), notebooks (as folders)
**Limitations**: Handwriting notes not imported; complex layouts may lose formatting

---

## Google Keep

**Method**: Importer plugin via Google Takeout

**Process**:
1. Go to `takeout.google.com` → select Google Keep → export
2. Extract the zip, find the `Keep/` folder with `.json` files
3. Importer → Google Keep → select the folder

**Preserved**: Text, labels (as tags), colors (as frontmatter)
**Limitations**: Images and drawings need manual handling; no hierarchy

---

## Microsoft OneNote

**Method**: Importer plugin (Windows only for full export)

**Process**:
1. OneNote → File → Export → Section or Notebook → `.docx` format
2. Importer → OneNote → select exported files

**Alternative (any OS)**:
1. Export OneNote pages as Word `.docx` files
2. Importer → Word Documents

**Preserved**: Text, images, tables
**Limitations**: Handwriting, audio, and video not imported; section colors lost

---

## Notion

**Method**: Importer plugin

**Process**:
1. Notion → Settings → Export → Export all workspace content → Markdown & CSV
2. Extract the zip
3. Importer → Notion → select the export folder

**Preserved**: Pages (as `.md`), databases (as CSV), basic formatting, images
**Limitations**: Notion blocks (callouts, toggles) become plain text; database views not preserved; internal Notion links need manual repair with Format Converter

---

## Roam Research

**Method**: Importer plugin

**Process**:
1. Roam → Export → Markdown (zip)
2. Importer → Roam Research → select the zip

**Preserved**: Pages, block references (converted to `^block-id` style), tags, daily notes structure, TODO/DONE blocks
**Limitations**: Block-level indentation may not fully convert; Roam queries don't carry over

---

## CSV Files

**Method**: Manual + Bases

**Process**:
1. Import the CSV to a folder in your vault
2. Create a `.base` file that reads from that folder (if the CSV data maps to note properties)
3. Or use the Importer plugin → CSV to create individual notes per row

Each CSV row becomes a note with frontmatter properties matching column headers.

---

## HTML Files

**Method**: Importer plugin

**Process**:
1. Importer → HTML → select folder with `.html` files
2. Converts to Markdown using basic HTML→MD rules

**Limitations**: JavaScript-rendered content, iframes, and complex layouts may not convert cleanly. Use Defuddle CLI for better conversion of web-clipped HTML.

---

## Markdown Files

**Method**: Direct copy

**Process**:
1. Copy `.md` files directly into the vault folder
2. Run Format Converter if notes use non-standard syntax (e.g., `[[wikilinks]]` from another tool)
3. Use the Importer plugin → Markdown if links need conversion

---

## Textbundle Files

**Method**: Importer plugin

**Process**:
1. Importer → Textbundle → select `.textbundle` or `.textpack` files
2. Extracts both markdown content and attachments

**Supported apps**: Ulysses, iA Writer, Drafts, Bear, Taio

---

## Zettelkasten Notes

**Method**: Direct import or custom script

**Process**:
1. Copy notes into vault
2. If notes use numeric IDs (e.g., `202503111423 Title.md`), they import as-is — Obsidian respects the filename
3. Enable Unique Note Creator if continuing the Zettelkasten workflow
4. Use Format Converter to fix any non-standard link syntax

**Tip**: If coming from The Archive, nvUltra, or Zettlr, the Markdown files can usually be copied directly — just check link syntax.

---

## Apple Journal

**Method**: Export + Importer

**Process**:
1. Apple Journal doesn't have a native Markdown export (as of early 2025)
2. Workaround: use a shortcut or third-party tool to export journal entries as text/HTML
3. Import via HTML or Markdown importer

**Limitations**: Photos, locations, and mood data have no direct Obsidian equivalent; consider frontmatter for metadata.

---

## General Tips for All Imports

- Always import into a temporary `_Import/` folder first; review before integrating
- Run Format Converter after import to fix legacy link syntax
- Use the backlinks panel to identify broken links post-import
- Attachments: check the Importer's output folder — images often land in a dedicated `_assets/` subfolder
- Tags: most importers map source tags to `#tags` or frontmatter `tags:`; audit with the Tags View panel after import
