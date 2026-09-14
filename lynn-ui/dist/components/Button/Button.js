import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMagneticButton } from '../../hooks/useMagneticButton.js';
import { Spinner } from '../Spinner/Spinner.js';
/**
 * A Lynn action button.
 *
 * `<Button>Get started</Button>` alone is a complete primary button: solid
 * `blue`, pill radius, glow shadow, and magnetic hover drift.
 *
 * Usage: set `magnetic` only to override the per-variant default (on for
 * `primary`, off for `secondary` and `ghost`) - the drift wants a little empty
 * space around the button, so turn it off inside a dense toolbar. `href`
 * swaps the element for an `<a>`, which makes `type` inert and `target` /
 * `rel` meaningful. When the button is a disclosure trigger, pass both
 * `aria-expanded` and `aria-controls`; `Accordion` and `ChangelogEntry` both
 * do, and the props exist here because Lynn's house rule is that every
 * clickable control is a real `Button`.
 *
 * `glow` is the loud version of the resting halo - one per page at most. It
 * composes with `loading` (the sweep still reads on top of it) and is
 * ignored on a `disabled` button, which has no accent left to glow with.
 *
 * Don't: don't treat `loading` and `disabled` as independent - `loading`
 * disables on top of `disabled`, so code that gates a second click on
 * `disabled` alone will find the button already inert. And don't pass `icon`
 * together with `loading` expecting to see it: the `Spinner` takes the same
 * leading slot and the icon is not rendered at all.
 */
export function Button(props) {
    const { children, variant = 'primary', icon, href, target, rel, type = 'button', disabled = false, loading = false, glow = false, magnetic, title, className, style, onClick, 'aria-label': ariaLabel, 'aria-expanded': ariaExpanded, 'aria-controls': ariaControls, } = props;
    // `loading` is additive: it disables on top of `disabled` rather than
    // replacing it, so a button that was already disabled stays disabled.
    const inert = disabled || loading;
    const magneticEnabled = (magnetic ?? variant === 'primary') && !inert;
    // One ref per rendered element type. Only the mounted branch's ref is ever
    // populated, so the other hook's effect is a no-op - this keeps the ref
    // types exact instead of casting a single `HTMLElement` ref onto both.
    const anchorRef = useMagneticButton({
        enabled: magneticEnabled,
    });
    const buttonRef = useMagneticButton({
        enabled: magneticEnabled,
    });
    const classes = [
        'lynn-btn',
        `lynn-btn-${variant}`,
        // The greyed-out *look* stays tied to the real `disabled` prop: a loading
        // button is inert but keeps its accent, which is what the sweep tints.
        disabled ? 'lynn-btn-disabled' : null,
        loading ? 'lynn-btn-loading' : null,
        // A greyed-out button has no accent left to glow with, so `disabled`
        // wins here the same way it wins over the primary fill.
        glow && !disabled ? 'lynn-btn-glow' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const body = (_jsxs(_Fragment, { children: [loading ? (
            // The package's own Spinner, in the leading slot - while loading the
            // icon would only compete with it for the same 11px of space.
            _jsx(Spinner, { size: "sm", className: "lynn-btn-spinner", ariaLabel: null })) : icon != null ? (_jsx("span", { className: "lynn-btn-icon", "aria-hidden": "true", children: icon })) : null, _jsx("span", { className: "lynn-btn-label", children: children })] }));
    if (href != null) {
        return (_jsx("a", { ref: anchorRef, className: classes, style: style, href: inert ? undefined : href, target: target, rel: rel, title: title, onClick: onClick, "aria-label": ariaLabel, "aria-expanded": ariaExpanded, "aria-controls": ariaControls, "aria-disabled": inert || undefined, "aria-busy": loading || undefined, children: body }));
    }
    return (_jsx("button", { ref: buttonRef, className: classes, style: style, type: type, disabled: inert, title: title, onClick: onClick, "aria-label": ariaLabel, "aria-expanded": ariaExpanded, "aria-controls": ariaControls, "aria-busy": loading || undefined, children: body }));
}
