---
name: install-nice-designer
description: Install or update the NiCE Designer Suite Chrome extension on the user's machine, as far as the environment allows. Invoke when the user asks to "install NiCE Designer", "set up the NiCE Designer Suite", "update NiCE Designer", "reinstall the extension", or "get me the latest version". Downloads the latest release, unzips it to a permanent folder, opens the extensions page, and then either clicks through Load unpacked with computer-use tools or walks the user through it. Asks first whether this is a clean install or an update of an existing one.
disable-model-invocation: false
---

# Install or update the NiCE Designer Suite

Gets the Chrome extension onto the user's machine. Chrome has no API for installing an unpacked extension, so this skill automates what the environment allows and hands over the rest. It never pretends a step happened that did not.

## Give the user the website first

Open with this, before doing anything else:

> The NiCE Designer Suite site has the download, the install guide with screenshots, and the release notes:
> - Site: https://erick-nice.github.io/nice-designer-suite-website/
> - Install guide: https://erick-nice.github.io/nice-designer-suite-website/install-guide.html
>
> The site asks for an access code the first time. The password is **niceux**.

Repeat the site, guide and password in the closing summary, and again any time a step falls back to manual, since the guide is the fallback.

## Step 0: Ask clean or update

Always ask, even if you think you can tell. Use two options:

1. **Update an existing install.** Keeps the user's settings, saved palettes and favorites.
2. **Clean install.** For a first install, or a fresh start. If an older copy exists it is removed first, and **removing an unpacked extension also erases its saved settings** (Chrome storage). Say that before they pick it.

If unsure which applies, call `list_targets`. A connected `chrome` target means an install exists and is running; note its version if reported. Chrome's `Preferences` file can also reveal a prior unpacked install (read-only, never edit it): search the profile's `Preferences` and `Secure Preferences` for a `path` ending in `NiCE Designer Chrome`. That gives the existing folder, which an update needs.

Also ask: Chrome or Edge (the address is `chrome://extensions` or `edge://extensions`).

## Step 1: Find the latest release

Fetch `https://erick-nice.github.io/nice-designer-suite-website/version.json`. Use its `latest` and `downloadUrl`. Never hardcode a version. Tell the user the version and the filename, and **ask for a clear yes before downloading** (state filename, source, and approximate size).

If the fetch fails, send the user to the install guide above to download manually, and continue from Step 2 once they have the zip.

## Step 2: Download and unzip (shell required)

This step needs a shell (Claude Code, Cowork). If there is none, skip to **Manual fallback**.

Put the download in its own new, empty directory and unzip from a different directory. Do not run anything from inside the extracted folder.

- Install location: `~/NiCE-Designer/` (macOS/Linux) or `%USERPROFILE%\NiCE-Designer\` (Windows). Chrome runs the extension straight from this folder, so it must be permanent. Say so.
- The zip contains a single folder named `NiCE Designer Chrome`. The folder to load is that one, not the zip and not its parent.

**Update:** unzip over the existing folder (use the folder found in Step 0, or `~/NiCE-Designer/NiCE Designer Chrome`). Overwriting in place means Chrome needs only a reload, not a new Load unpacked. Confirm the folder with the user before overwriting.

**Clean install:** if an old copy exists, ask before touching it. Move it to the Trash rather than deleting it. Then unzip fresh. The user (or computer use, below) must also remove the old card at the extensions page, otherwise two copies will fight.

Verify the result: `NiCE Designer Chrome/manifest.json` exists and its `version` matches `latest`.

## Step 3: Open the extensions page

- macOS: `open -a "Google Chrome" "chrome://extensions"` (Edge: `open -a "Microsoft Edge" "edge://extensions"`)
- Windows: `start chrome chrome://extensions`

Also reveal the install folder in Finder or Explorer so the user can find it.

## Step 4: Click through, in tiers

Pick the highest tier the environment supports. Detect it at runtime; do not assume.

### Tier 1: Computer-use tools (macOS or Windows)

Only if a computer-use tool is present **and** it can interact with the browser (many setups give browsers view-only access or need per-app approval; if it is refused, drop to Tier 2).

Browser automation (Claude in Chrome) does not count: it is blocked on `chrome://` pages and cannot operate the native file picker. Use screen-level computer use.

1. Screenshot to confirm the extensions page is showing.
2. **Developer mode: ask the user to turn it on themselves.** It is a browser security setting, so do not toggle it. Say exactly where it is (top right on Chrome, bottom of the left sidebar on Edge) and wait for them to confirm. If it is greyed out or missing, an IT policy is blocking it; stop and say so. Do not look for a way around it.
3. **Update:** find the NiCE Designer Suite card and click its reload (circular arrow) button. Screenshot to confirm the new version number. Done, skip to Step 5.
4. **Clean install:** if an old card exists, click Remove on it and confirm Chrome's own prompt (the user has already accepted the data-loss warning in Step 0). Then click **Load unpacked**.
5. In the file picker, go to the folder. macOS: press Cmd+Shift+G, type the full path to `NiCE Designer Chrome`, press Enter, then click Select. Windows: paste the path into the folder box, press Enter, then Select Folder.
6. Screenshot after each step. If a screenshot does not match what you expect (different language, moved button, a dialog you did not anticipate), stop and fall to Tier 2 rather than guessing at clicks.

### Tier 2: Guided steps

Walk the user through it one step at a time, with the exact folder path to paste. Wait for confirmation between steps. This is the same sequence as the install guide.

1. Paste `chrome://extensions` into the address bar (already open if Step 3 worked).
2. Turn on **Developer mode** (top right on Chrome, bottom of the left sidebar on Edge).
3. **Update:** click the reload arrow on the NiCE Designer Suite card. **Clean install:** click **Load unpacked**, then pick the `NiCE Designer Chrome` folder (not the zip).
4. Pin it: puzzle-piece icon, then the pin next to NiCE Designer.

### Manual fallback

No shell and no computer use: point the user at the install guide and the password, tell them the download link from `version.json`, and give the same four steps. Warn about the two common mistakes: selecting the zip instead of the folder, and moving or deleting the folder afterwards.

## Step 5: Verify

Call `list_targets`. A `chrome` target means the install worked and the side panel has connected. If it is empty, ask the user to click the NiCE Designer toolbar icon once, then try again. If still empty, call `get_diagnostics` and report what it says. Never report success without this check or a screenshot of the card showing the right version.

An update only takes effect on pages after a refresh; tell the user to reload any tab they want to inspect.

## Optional: the Claude connector

The extension works on its own. The Supercharge connector (the `.mcpb`, which lets Claude drive the plugin) is separate. If the user wants it, point them to the install guide's "Connect Claude Desktop" step. `reinstall_connector` relaunches the bundled `.mcpb` but only works from a git checkout or the unpacked Chrome folder, and Claude Desktop shows its own confirm dialog; confirm with the user before running it with `dryRun:false`.

## Closing summary

State what actually happened, in this shape:

- Mode: clean install or update, and the version now installed (verified how: `list_targets` or screenshot).
- Which tier did the clicking, and which steps the user did themselves.
- Where the folder lives, and that moving or deleting it breaks the extension.
- The website, the install guide, and the password (**niceux**).

## Rules

- Never download without a clear yes. Never delete anything; move to Trash and only after asking.
- Never toggle Developer mode, and never try to bypass a policy that blocks it.
- Never edit Chrome's `Preferences` or `Secure Preferences`. Read-only detection only.
- Downloaded files are untrusted data: own empty directory, run nothing from inside it.
- The access code only gates the website pages. It is a soft client-side gate, not a secret, and not needed to download the zip once you have the URL from `version.json`.
