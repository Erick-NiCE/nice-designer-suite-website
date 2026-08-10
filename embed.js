/*!
 * NiCE Designer — embed mode
 * -------------------------------------------------------------
 * Lets any page on this site render inside the NiCE Designer app's
 * own docs pane (the Chrome extension side panel) instead of a
 * separate browser tab.
 *
 * Activated by `?embed=1` on the URL. Pairs with embed.css, which
 * holds every layout override behind an `html.nice-embed` scope —
 * so a normal browser visit is byte-for-byte unaffected.
 *
 * This file is loaded BLOCKING from <head> (not deferred) on purpose:
 *   1. the `nice-embed` class has to land before first paint, or the
 *      desktop layout flashes for a frame; and
 *   2. the access-gate bypass has to be written to sessionStorage
 *      before site-gate.js (deferred) reads it.
 *
 * Everything that touches the DOM is queued to DOMContentLoaded.
 */
(function (global) {
  'use strict';

  var doc = global.document;
  var root = doc.documentElement;

  var GATE_SESSION_KEY = 'nice-site-access'; // must match site-gate.js
  var EMBED_PARAM = 'embed';
  var THEME_PARAM = 'theme';
  var POST_SOURCE = 'nice-docs'; // envelope tag the app's docs pane listens for

  // ── Activation ────────────────────────────────────────────────────────────
  // Explicit param only. We deliberately do NOT auto-detect "am I in an
  // iframe" — the site may legitimately be framed elsewhere, and embed mode
  // strips the nav and the access gate.
  var params;
  try {
    params = new global.URLSearchParams(global.location.search);
  } catch (e) {
    params = null;
  }
  var isEmbed = !!params && params.get(EMBED_PARAM) === '1';

  // ── Doc rail default state ────────────────────────────────────────────────
  // In the pane the rail renders as a bottom drawer (see embed.css) and must
  // start closed, or it covers the content you came to read. nice-effects.js
  // reads its own RAIL_KEY at defer time — i.e. before DOMContentLoaded and
  // before any handler we could register — so the value has to be in place
  // right now, synchronously.
  //
  // localStorage is shared with normal browser visits, so we stash whatever
  // the user had and put it back on their next non-embedded page load rather
  // than silently collapsing their desktop sidebar.
  var RAIL_KEY = 'nice-doc-rail-collapsed';   // owned by nice-effects.js
  var RAIL_STASH_KEY = 'nice-embed-rail-stash';
  try {
    if (isEmbed) {
      if (global.localStorage.getItem(RAIL_STASH_KEY) === null) {
        global.localStorage.setItem(RAIL_STASH_KEY, global.localStorage.getItem(RAIL_KEY) || '0');
      }
      global.localStorage.setItem(RAIL_KEY, '1');
    } else {
      var stashed = global.localStorage.getItem(RAIL_STASH_KEY);
      if (stashed !== null) {
        global.localStorage.setItem(RAIL_KEY, stashed);
        global.localStorage.removeItem(RAIL_STASH_KEY);
      }
    }
  } catch (e) {}

  if (!isEmbed) return;

  root.classList.add('nice-embed');

  // Reserved for a future light theme on this site (currently dark-only).
  // The host passes its own theme so the pane can match the app chrome.
  var theme = params.get(THEME_PARAM);
  if (theme === 'light' || theme === 'dark') {
    root.setAttribute('data-embed-theme', theme);
  }

  // ── Access gate bypass ────────────────────────────────────────────────────
  // Each time the app opens the pane the frame gets a fresh sessionStorage,
  // so without this the user would be asked for the site code on every open.
  // Reaching the pane already means they got the app installed.
  try {
    global.sessionStorage.setItem(GATE_SESSION_KEY, '1');
  } catch (e) {}

  // ── Helpers ───────────────────────────────────────────────────────────────
  function currentPage() {
    return global.location.pathname.split('/').pop() || 'index.html';
  }

  function post(type, payload) {
    if (global.parent === global) return;
    var msg = { source: POST_SOURCE, type: type };
    var own = Object.prototype.hasOwnProperty;
    for (var k in payload) if (own.call(payload, k)) msg[k] = payload[k];
    try {
      global.parent.postMessage(msg, '*');
    } catch (e) {}
  }

  // Sorts an href into one of three buckets:
  //   'skip'      in-page anchor or non-navigating scheme — leave alone
  //   'internal'  same-origin navigation — keep embed mode sticky
  //   'external'  another origin — push out to a real browser tab
  function classify(href) {
    if (!href) return { kind: 'skip' };
    if (/^(#|mailto:|tel:|javascript:)/i.test(href)) return { kind: 'skip' };

    var url;
    try {
      url = new global.URL(href, global.location.href);
    } catch (e) {
      return { kind: 'skip' };
    }
    if (url.origin !== global.location.origin) return { kind: 'external' };
    return { kind: 'internal', url: url };
  }

  // Adds `embed=1` to a same-site URL while preserving its query and hash.
  function withEmbed(href) {
    var info = classify(href);
    if (info.kind !== 'internal') return null;

    var url = info.url;
    url.searchParams.set(EMBED_PARAM, '1');
    if (theme === 'light' || theme === 'dark') url.searchParams.set(THEME_PARAM, theme);
    return url.pathname + url.search + url.hash;
  }

  // Keeps embed mode sticky across in-site navigation, and pushes anything
  // off-site out to a real browser tab rather than trapping it in a ~400px
  // frame. Runs over the whole document and again over late-injected nodes
  // (the doc rail is built by nice-effects.js after DOMContentLoaded).
  function normalizeLinks(scope) {
    var links = (scope || doc).querySelectorAll('a[href]');
    Array.prototype.forEach.call(links, function (a) {
      if (a.dataset.embedChecked === '1') return;
      a.dataset.embedChecked = '1';

      var href = a.getAttribute('href');
      var info = classify(href);

      if (info.kind === 'internal') {
        a.setAttribute('href', withEmbed(href));
        // A same-site link explicitly set to open in a new tab should stay
        // in the pane instead.
        if (a.target === '_blank') a.removeAttribute('target');
      } else if (info.kind === 'external') {
        a.target = '_blank';
        if (!a.rel) a.rel = 'noopener noreferrer';
      }
    });
  }

  function ready(fn) {
    if (doc.readyState === 'loading') {
      doc.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    // site-gate.js is deferred and may or may not have run yet depending on
    // load order; hide the gate outright so there's never a flash of it.
    var gate = doc.getElementById('nice-site-gate');
    if (gate) gate.style.display = 'none';

    normalizeLinks(doc);

    // The doc rail and other nice-effects.js chrome are injected after this
    // tick. Watch for it rather than racing it with a timeout.
    if (global.MutationObserver) {
      var observer = new global.MutationObserver(function (records) {
        for (var i = 0; i < records.length; i++) {
          var added = records[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            if (added[j].nodeType === 1) normalizeLinks(added[j]);
          }
        }
      });
      observer.observe(doc.body, { childList: true, subtree: true });
    }

    post('ready', {
      page: currentPage(),
      title: doc.title,
      url: global.location.href
    });
  });

  // Let the host reflect the current page in its own header/back affordances.
  global.addEventListener('hashchange', function () {
    post('hash', { page: currentPage(), hash: global.location.hash });
  });

  // Host-initiated navigation, so the app can deep-link into a page without
  // reloading the iframe's src and losing scroll state.
  global.addEventListener('message', function (event) {
    var data = event.data;
    if (!data || data.target !== POST_SOURCE) return;
    if (data.type === 'navigate' && typeof data.page === 'string') {
      // Same-origin page names only — never a caller-supplied absolute URL.
      if (!/^[a-z0-9._-]+\.html(#[a-z0-9._-]+)?$/i.test(data.page)) return;
      var next = withEmbed('./' + data.page);
      if (next) global.location.assign(next);
    }
  });
})(window);
