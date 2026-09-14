import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The linear progress track, ported from the plugin's `.progress-bar-bg` /
 * `.progress-bar-fill`, plus its separate indeterminate top-of-tab bar.
 *
 * Usage: determinate by default - pass `value` (clamped to `0..max`) and set
 * `max` for any scale that is not a percentage. Switch to `indeterminate` for
 * work whose length you genuinely cannot know, and pass `ariaLabel` whenever
 * there is no visible `label`, since the `role="progressbar"` is on the track
 * rather than on the labeled wrapper. Use `GaugeRing` instead when the number
 * is a score being read rather than progress being watched.
 *
 * Don't: don't pass `value` alongside `indeterminate` - the width is dropped
 * and so are all three `aria-value*` attributes, so the number is invisible to
 * everyone, sighted or not. And don't leave it indeterminate as a permanent
 * decoration: a bar that sweeps forever reads as a hung process.
 */
export function ProgressBar(props) {
    const { value = 0, max = 100, tone = 'blue', indeterminate = false, label, ariaLabel, className, style, } = props;
    const span = max > 0 ? max : 100;
    const clamped = Math.min(Math.max(value, 0), span);
    const percent = (clamped / span) * 100;
    const classes = [
        'lynn-progress',
        `lynn-progress-tone-${tone}`,
        indeterminate ? 'lynn-progress-indeterminate' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, children: [_jsx("div", { className: "lynn-progress-track", role: "progressbar", "aria-label": ariaLabel, "aria-valuemin": indeterminate ? undefined : 0, "aria-valuemax": indeterminate ? undefined : span, "aria-valuenow": indeterminate ? undefined : clamped, children: _jsx("div", { className: "lynn-progress-fill", style: indeterminate ? undefined : { width: `${percent}%` } }) }), label != null ? (_jsx("div", { className: "lynn-progress-label", children: label })) : null] }));
}
