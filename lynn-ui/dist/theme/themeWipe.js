/**
 * `lynn/motion/theme-wipe`
 *
 * The circular screen reveal that plays when the theme changes, ported from
 * the plugin's own `switchTheme(next, originEl)`.
 *
 * The technique, and the reason it is imperative rather than a component: an
 * expanding `clip-path: circle()` on a `position: fixed` overlay appended to
 * `document.body`. It has to be the *document's* overlay, not the React
 * tree's - `ThemeProvider` renders one `.lynn-root` div, and on the migrated
 * site pages half the chrome (the nav, the footer) is portalled to mount
 * points outside it. An overlay scoped to the provider's div would wipe a
 * 0x0 corner of the page.
 *
 * The order is the whole point. The circle grows from the clicked segment to
 * the far corner of the viewport *first*, with the old theme still painted
 * underneath; only once it covers every pixel does the theme flip, hidden;
 * then the overlay fades off and the new theme is simply there. Flipping any
 * earlier and the "before" state is never seen, which is the one way to get
 * this wrong and still have it look like it did something.
 *
 * Differences from the plugin's version, both deliberate:
 *  - the Web Animations API instead of a CSS transition plus a forced
 *    `offsetHeight` reflow and a `transitionend` listener. Same curve, same
 *    durations, but `animate()` cannot start in the "already at the end
 *    state" hole a missed reflow leaves, and `finish` fires once by
 *    construction rather than once per animated property.
 *  - no zoom math. The plugin's app root is CSS-zoomed, so it divides
 *    everything by its scale factor; a page is not, so viewport coordinates
 *    are already the overlay's coordinates.
 */
/** ms the circle takes to cover the viewport. The plugin's own figure. */
const SWEEP_MS = 500;
/** ms the overlay takes to fade off once the new theme is underneath it. */
const FADE_MS = 200;
/** The plugin's easing, verbatim - a standard material-style ease-in-out. */
const SWEEP_EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
/**
 * One wipe at a time. A second click mid-sweep in the plugin queued a second
 * listener and flipped the theme twice (a net no-op) with the overlay left
 * stranded; the same guard, for the same reason. It is module-level rather
 * than per-component because the overlay is document-level: two toggles on
 * one page must not both be sweeping it.
 */
let sweeping = false;
function prefersReducedMotion() {
    return (typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}
/**
 * Plays the reveal and flips the theme underneath it.
 *
 * Every bail-out path still calls `apply()`, so the theme change is never
 * lost to a missing origin, a reduced-motion preference, an engine without
 * `Element.animate`, or a second click arriving mid-sweep. The wipe is
 * decoration on top of a state change, never the thing that performs it.
 */
export function runThemeWipe(options) {
    const { theme, origin, apply } = options;
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        apply();
        return;
    }
    const body = document.body;
    if (sweeping ||
        !body ||
        !origin ||
        prefersReducedMotion() ||
        typeof body.animate !== 'function') {
        // Reduced motion gets today's behavior unchanged: the tokens swap and
        // that is the whole transition.
        apply();
        return;
    }
    const rect = origin.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // The distance to the farthest viewport corner from that center: the
    // radius at which the circle has covered every pixel and it is safe to
    // swap the tokens behind it.
    const reach = Math.hypot(Math.max(cx, window.innerWidth - cx), Math.max(cy, window.innerHeight - cy));
    sweeping = true;
    const overlay = document.createElement('div');
    overlay.className = 'lynn-theme-wipe';
    // The fill is per-mode and lives in ThemeToggle.css, so the three washes
    // stay editable as CSS rather than as string literals in here.
    overlay.setAttribute('data-lynn-wipe', theme);
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.clipPath = `circle(0px at ${cx}px ${cy}px)`;
    body.appendChild(overlay);
    let settled = false;
    const cleanup = () => {
        overlay.remove();
        sweeping = false;
    };
    const reveal = () => {
        if (settled)
            return;
        settled = true;
        window.clearTimeout(sweepSafety);
        apply();
        const fade = overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: FADE_MS,
            easing: 'linear',
            fill: 'forwards',
        });
        let swept = false;
        const off = () => {
            if (swept)
                return;
            swept = true;
            window.clearTimeout(fadeSafety);
            cleanup();
        };
        fade.addEventListener('finish', off);
        fade.addEventListener('cancel', off);
        // A backgrounded tab never fires `finish`, and an overlay left on the
        // page is not a cosmetic problem - it covers the whole document.
        const fadeSafety = window.setTimeout(off, FADE_MS + 300);
    };
    const sweep = overlay.animate([
        { clipPath: `circle(0px at ${cx}px ${cy}px)` },
        { clipPath: `circle(${reach.toFixed(1)}px at ${cx}px ${cy}px)` },
    ], { duration: SWEEP_MS, easing: SWEEP_EASE, fill: 'forwards' });
    sweep.addEventListener('finish', reveal);
    sweep.addEventListener('cancel', reveal);
    // Same safety net the plugin keeps, same reason: the theme must not be
    // left un-flipped behind a stuck overlay.
    const sweepSafety = window.setTimeout(reveal, SWEEP_MS + 300);
}
