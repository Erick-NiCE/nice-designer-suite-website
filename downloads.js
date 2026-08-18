// ─── Keep download links in sync with the latest release ────────────────────
//
// version.json (repo root) is the single source of truth for "what's the
// latest build" — the same file the NiCE Designer Chrome extension's own
// "check for updates" button reads. Rather than hand-editing a version
// number and a .zip filename into every page on every release, pages mark
// the elements that need updating and this script fills them in on load:
//
//   data-latest-download   → set on the actual download link. Its href
//                             becomes version.json's downloadUrl, and its
//                             text becomes the zip's filename.
//   data-latest-label      → set on anything that just displays a version
//                             number in its own text (e.g. "Download v10").
//                             Only the "vX.Y" substring is replaced.
//   data-latest-when       → replaced entirely with "vX.Y · Mon YYYY", built
//                             from `latest` and `updatedAt` (e.g. the hero
//                             badge under the download button).
//
// If the fetch fails (offline preview, version.json not deployed yet), the
// hardcoded fallback already in the HTML is left alone — this only upgrades
// it, never breaks it.
(function () {
  var VERSION_URL = 'https://erick-nice.github.io/nice-designer-suite-website/version.json';

  function applyVersion(data) {
    if (!data || !data.latest) return;
    var filename = data.downloadUrl ? data.downloadUrl.split('/').pop() : null;

    document.querySelectorAll('[data-latest-download]').forEach(function (el) {
      if (data.downloadUrl) el.setAttribute('href', data.downloadUrl);
      if (filename) el.textContent = filename;
    });

    document.querySelectorAll('[data-latest-label]').forEach(function (el) {
      el.textContent = el.textContent.replace(/v[\d.]+/i, 'v' + data.latest);
    });

    if (data.updatedAt) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      var parts = data.updatedAt.split('-'); // 'YYYY-MM-DD', parsed manually to avoid TZ shifts
      var monthName = months[Number(parts[1]) - 1];
      if (monthName) {
        document.querySelectorAll('[data-latest-when]').forEach(function (el) {
          el.textContent = 'v' + data.latest + ' · ' + monthName + ' ' + parts[0];
        });
      }
    }
  }

  fetch(VERSION_URL, { cache: 'no-store' })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(applyVersion)
    .catch(function () { /* keep whatever's already hardcoded in the HTML */ });
})();
