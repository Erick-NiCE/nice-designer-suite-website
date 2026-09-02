# Obsidian Publish & Web Clipper Reference

---

## Obsidian Publish

### Setup

1. Settings → Publish → Connect to a Publish site
2. Name your site and choose a subdomain (`yoursite.obsidian.site`)
3. Select the vault folder to publish from

### Publishing Notes

- **Publish/unpublish**: Open the Publish dialog (`Ctrl/Cmd+Shift+P`) → check/uncheck notes
- **Bulk**: Publish all, publish changed, or select individually
- **Private notes**: Leave unchecked — they never leave your vault

### Controlling Navigation

Frontmatter property `publish: true` marks a note as published. You can also set this manually to control which notes appear.

To exclude a folder from ever being publishable: Settings → Publish → excluded folders.

### Multiple Sites

Settings → Publish → Site options → Create new site. Switch between sites in the same dialog.

### Custom CSS

Create `publish.css` in the root of your vault. It applies to the published site.

```css
/* Example: wider content area */
.publish-article {
  max-width: 900px;
}

/* Custom callout color */
.callout[data-callout="project"] {
  --callout-color: 100, 149, 237;
}
```

### SEO & Social

```yaml
---
title: "Page Title (overrides note title)"
description: "150 chars max — used for meta description and social cards"
image: "[[cover-image.png]]"
permalink: custom-url-slug
publish: true
---
```

- `description`: Shows in search results and link previews
- `image`: Open Graph image for social sharing
- `permalink`: Set a clean URL instead of using the note filename

### Custom Domains

Settings → Publish → Site options → Custom domain → enter your domain → add the CNAME record provided.

### Analytics

Settings → Publish → Site options → paste your Google Analytics (gtag) or Plausible tracking ID.

### Password Protection

Settings → Publish → Site options → Password → set a site-wide password.

### Collaborators

Settings → Publish → Site options → Collaborators → add Obsidian account emails.

### Limitations

- Only `.md`, `.canvas`, images, audio, video, and PDF files are supported
- Community plugin rendering does not work on Publish (Dataview, Templater, etc.)
- Max file size: 50 MB per file
- Bases files are not rendered on Publish

---

## Obsidian Web Clipper

Browser extension for saving web content to the vault.

### Installation

Available for Chrome, Firefox, Safari, and Arc. Install from the browser's extension store.

### Clipping Modes

- **Full page**: Saves the entire page content
- **Article**: Extracts main article content (removes nav, sidebar, ads)
- **Selection**: Clips only highlighted text
- **Screenshot**: Saves a screenshot of the page

### Highlight Before Clipping

Use the highlighter tool in the extension to mark text before clipping. Highlighted sections are captured with `==highlight==` syntax.

### Templates

Templates define how clipped content is formatted. Create in the extension settings.

#### Full Template Reference

```
---
title: "{{title}}"
url: {{url}}
date: {{date:YYYY-MM-DD}}
author: {{author}}
domain: {{domain}}
description: {{description}}
published: {{published:YYYY-MM-DD}}
image: {{image}}
tags: [clipping]
---

# {{title}}

> {{description}}

Source: {{url}}

{{content}}
```

### Variables

| Variable | Description |
|---|---|
| `{{title}}` | Page title |
| `{{url}}` | Source URL |
| `{{date}}` | Clip date (supports format string: `{{date:YYYY-MM-DD}}`) |
| `{{content}}` | Main page content as Markdown |
| `{{author}}` | Author name |
| `{{description}}` | Meta description |
| `{{image}}` | Open Graph image URL |
| `{{published}}` | Publication date (supports format string) |
| `{{domain}}` | Domain name (e.g., `nytimes.com`) |
| `{{highlights}}` | Only the highlighted selections |
| `{{excerpt}}` | First paragraph of content |

### Filters

Transform variable output with pipe syntax:

```
{{title | lower}}                   lowercase
{{title | upper}}                   uppercase
{{title | trim}}                    remove whitespace
{{title | replace("old","new")}}    find and replace
{{content | slice(0,500)}}          first 500 characters
{{date | date("MMMM D, YYYY")}}     format date
{{title | default("Untitled")}}     fallback value
```

### Logic

```
{% if author %}By: {{author}}{% endif %}
{% for tag in tags %}#{{tag}} {% endfor %}
{{title | default("Untitled")}}
```

### AI Interpretation

The "Interpret" mode uses AI to extract structured properties from the page — useful for clipping articles and automatically populating frontmatter fields like `author`, `published`, `tags`.

### Saving Location

Config per template:
- Target vault
- Target folder (supports `{{date:YYYY}}` for year-based folders)
- Filename pattern (e.g., `{{date:YYYY-MM-DD}} {{title}}`)
