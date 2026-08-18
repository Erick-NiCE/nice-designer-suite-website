# NiCE Designer Suite — Website Guide

A plain-English explainer for what this website is and how to push changes to
it. For the technical architecture (theme system, reusable effects API), see
[README.md](README.md) — this file is about the "what is this" and "how do I
ship an edit" side of things.

## What this is

This repo is the source for the **NiCE Designer** marketing/documentation
site — a static website (plain HTML/CSS/JS, no build step, no framework)
hosted for free on **GitHub Pages**.

- **Live site:** https://erick-nice.github.io/nice-designer-suite-website/
- **Repo:** https://github.com/Erick-NiCE/nice-designer-suite-website

The whole site is currently **password-gated** — see [Access codes](#access-codes)
below.

### Pages

| File                  | Nav tab       | What it is                                            |
| ---------------------- | ------------- | ------------------------------------------------------ |
| `index.html`           | Overview      | Landing page / site home                                |
| `install-guide.html`   | Install Guide | Setup steps for the plugin, extension, and MCP server    |
| `claude-skills.html`   | Claude Skills | The 9 Claude skills that ship with the suite             |
| `the-suite.html`       | The Suite     | The 8 product tools + the Supercharge panel              |
| `use-cases.html`       | Use Cases     | Scenarios organized by job-to-be-done                    |
| `scoring.html`         | Scoring       | How the compliance scores are calculated                 |
| `dashboard.html`       | Dashboard     | CXone accessibility audit dashboard                      |
| `roadmap.html`         | Roadmap       | Product roadmap (has its own *extra* password on top)    |
| `tools.html`           | —             | Full tool catalog (not linked from the nav)              |
| `404.html`             | —             | Not-found page; also auto-redirects a couple of old URLs |

### Shared files (edit these, not each page, when possible)

- **`theme.css`** — every color, font, and the top nav bar. Change a brand
  color here and it updates on all 10 pages at once.
- **`nice-effects.css` / `nice-effects.js`** — the reusable hover effects
  (liquid fill, plasma lightning), page-transition fade, mobile-nav animation,
  and brand gradients.
- **`site-gate.css` / `site-gate.js`** — the password screen that covers the
  whole site.
- **`downloads/`** — the actual `.zip` file people download from the
  "Download v10" button on the Overview page.

### Access codes

| Where                        | Code     |
| ----------------------------- | -------- |
| Whole site                    | `NiCEUX` |
| Roadmap page (second, extra lock) | `dex`    |

Both are typed case-insensitively (`niceux`, `NiCEUX`, `NICEUX` all work).

**Important:** this is a *soft* gate meant to keep the site out of search
engines and scrapers, not a real security measure — the password check runs
in the browser, so anyone who views the page source can find it. Don't put
anything on this site you wouldn't want a determined visitor to see.

To change either password, search for it in `site-gate.js` (site-wide) or
`roadmap.html` (the `dex` code) and edit the compared value.

## Making a change

1. Ask Claude to make the edit (what you're doing right now), **or** edit the
   HTML/CSS files directly by hand — they're plain files, no build step, no
   `npm install` required.
2. If you want to preview a change before it's public, open the file directly
   in a browser, or run a tiny local server from the repo folder:
   ```bash
   python3 -m http.server 3000
   ```
   then visit `http://localhost:3000/`.

## How to push changes to GitHub

Pushing to the `main` branch is what makes a change go live — GitHub Pages
rebuilds the site automatically within a minute or two of every push.

### One-time setup (only needed once per computer)

1. Make sure `git` is installed (`git --version` in Terminal).
2. Make sure you have push access to the repo and an SSH key set up with
   GitHub (this was already done once for this Mac — `git@github.com` should
   work without a password prompt). To check, run:
   ```bash
   ssh -T git@github.com
   ```
   You should see a message like "Hi Erick-NiCE! You've successfully
   authenticated..."
3. Clone the repo (if you don't already have a local copy):
   ```bash
   git clone git@github.com:Erick-NiCE/nice-designer-suite-website.git
   cd nice-designer-suite-website
   ```

### Every time you want to publish a change

```bash
# 1. Go to your local copy of the repo
cd nice-designer-suite-website

# 2. Make sure you're up to date with what's already live
git pull origin main

# 3. Make your edits (or let Claude make them)

# 4. See what changed
git status

# 5. Stage and commit your changes
git add -A
git commit -m "Describe what you changed, e.g. 'Fix typo on Overview page'"

# 6. Push — this makes it go live
git push origin main
```

That's it. GitHub Pages picks up the push automatically; give it a minute or
two, then refresh the live site.

### If something goes wrong

- **`git push` asks for a username/password and rejects it:** you're on
  HTTPS instead of SSH. Fix with:
  ```bash
  git remote set-url origin git@github.com:Erick-NiCE/nice-designer-suite-website.git
  ```
- **`git pull` complains about local changes conflicting:** commit or stash
  your local changes first (`git stash`), pull, then re-apply (`git stash pop`).
- **The live site didn't update after pushing:** wait ~2 minutes (GitHub
  Pages build time), then hard-refresh the browser (Cmd+Shift+R) — browsers
  aggressively cache static sites.
- **You built a new release and need to publish it:** add the new
  `NiCE-Designer-Vx.y.zip` to `downloads/` and update `version.json`'s
  `latest`, `notes`, and `downloadUrl` fields to match. That's the only file
  the download buttons on `index.html` and `install-guide.html` actually
  read (via `downloads.js`) — they pick up the new version and filename
  automatically on next page load, no HTML edits needed. Old zips can stay
  in `downloads/` or be deleted; nothing else references them once
  `version.json` moves on.

## Renaming the repo

The repo was renamed to `nice-designer-suite-website` to match what it now
is — the full marketing site, not just the original token-audit-dashboard
project. If you rename it again, the live URL changes too, and old links may
stop working — see GitHub's repo Settings → General → "Repository name".
Update the local remote URL afterward with the `git remote set-url` command
shown above, using the new repo name.
