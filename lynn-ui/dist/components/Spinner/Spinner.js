import { jsx as _jsx } from "react/jsx-runtime";
/**
 * The bordered-ring loading spinner, ported from the plugin's `.spinner`.
 *
 * Usage: `tone` describes the ground the spinner sits on, not the active theme
 * - `light` (the default) for Lynn's dark surfaces and inside a filled
 * `Button`, `dark` for a light panel, so the choice does not change when the
 * `ThemeToggle` moves. `size="sm"` is the 11px in-button size `Button.loading`
 * uses; `md` and `lg` are for a standalone loading state.
 *
 * Don't: don't leave the default `ariaLabel` on a spinner that already sits
 * inside a labeled loading region or a busy `Button` - you get "Loading"
 * announced twice; pass `ariaLabel={null}` to make it decorative, which is
 * exactly what `Button` and `AccessGate` do. And don't use it for work with a
 * known length: `ProgressBar` or `GaugeRing` tell the reader how much is left.
 */
export function Spinner(props) {
    const { size = 'sm', tone = 'light', ariaLabel = 'Loading', className, style, } = props;
    const classes = [
        'lynn-spinner',
        `lynn-spinner-${size}`,
        `lynn-spinner-${tone}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("span", { className: classes, style: style, role: ariaLabel == null ? undefined : 'status', "aria-label": ariaLabel ?? undefined, "aria-hidden": ariaLabel == null ? true : undefined }));
}
