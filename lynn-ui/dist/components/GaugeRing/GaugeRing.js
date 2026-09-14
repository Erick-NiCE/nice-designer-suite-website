import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
/**
 * The radial gauge, ported from the plugin's `.score-ring`: a dim track
 * circle plus a `stroke-dasharray`-clipped arc, with the SVG rotated -90deg
 * so the arc starts at 12 o'clock.
 *
 * The arc animates from empty to `value` once on mount - the fill is the
 * whole point of the ring, and a gauge that is simply *there* at its final
 * length reads as a static graphic.
 *
 * The ring sits on a raised neumorphic plate (`--lynn-shadow-raised`) that
 * takes a quick 180ms imprint (`--lynn-shadow-pressed`) while the pointer is
 * over it, so a dial that is only ever read still answers to being touched.
 *
 * Usage: `size` is the only dimension you normally set - `thickness` derives
 * from it (`size / 11`, the source's 10-at-110 ratio) and so does the radius,
 * so one number rescales the whole dial. Use `format` when the raw count
 * matters more than the percentage the ring communicates by shape
 * (`format={(value) => value}`), and set `max` for any scale that is not 0-100.
 *
 * Don't: don't drive `value` from a ticking counter and expect the arc to
 * animate along with it - the fill-from-empty transition runs once on mount,
 * and every later change just re-points the dash offset. And don't leave both
 * `label` and `ariaLabel` off: the wrapper is a `role="progressbar"`, so with
 * no name it announces a bare number with nothing to attach it to.
 */
export function GaugeRing(props) {
    const { value, max = 100, size = 110, thickness, tone = 'blue', label, format, ariaLabel, className, style, } = props;
    const span = max > 0 ? max : 100;
    const clamped = Math.min(Math.max(value, 0), span);
    const ratio = clamped / span;
    const stroke = thickness ?? Math.max(4, Math.round(size / 11));
    const center = size / 2;
    const radius = size * 0.4;
    const circumference = 2 * Math.PI * radius;
    const [filled, setFilled] = useState(false);
    useEffect(() => {
        setFilled(true);
    }, []);
    const classes = [
        'lynn-gauge',
        `lynn-gauge-tone-${tone}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const readout = format
        ? format(clamped, span)
        : `${Math.round(ratio * 100)}%`;
    return (_jsxs("div", { className: classes, style: { width: size, height: size, ...style }, role: "progressbar", "aria-label": ariaLabel ?? (typeof label === 'string' ? label : undefined), "aria-valuemin": 0, "aria-valuemax": span, "aria-valuenow": clamped, children: [_jsx("div", { className: "lynn-gauge-plate", "aria-hidden": "true" }), _jsxs("svg", { className: "lynn-gauge-svg", width: size, height: size, viewBox: `0 0 ${size} ${size}`, "aria-hidden": "true", children: [_jsx("circle", { cx: center, cy: center, r: radius, fill: "none", stroke: "var(--lynn-color-card)", strokeWidth: stroke }), _jsx("circle", { className: "lynn-gauge-arc", cx: center, cy: center, r: radius, fill: "none", stroke: "var(--lynn-gauge-accent)", strokeWidth: stroke, strokeLinecap: "round", strokeDasharray: circumference, strokeDashoffset: filled ? circumference * (1 - ratio) : circumference })] }), _jsxs("div", { className: "lynn-gauge-value", children: [_jsx("span", { className: "lynn-gauge-num", children: readout }), label != null ? (_jsx("span", { className: "lynn-gauge-label", children: label })) : null] })] }));
}
