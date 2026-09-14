import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from '../Avatar/Avatar.js';
import { Badge } from '../Badge/Badge.js';
import { PulseDot } from '../PulseDot/PulseDot.js';
/**
 * The roadmap's vertical phase timeline.
 *
 * Ported from roadmap.html's `.timeline` / `.phase` / `.card` family - the
 * site's single richest pattern. The connecting rule is the container's own
 * gradient pseudo-element, so phases can be added and removed without any
 * per-phase line bookkeeping.
 *
 * Usage: a container only - put `Phase` children in it, in reading order, and
 * the vertical rule draws itself down the dot gutter however many there are.
 *
 * Don't: don't put anything but `Phase` directly inside it - the gradient rule
 * is positioned against the phases' dot gutter, so a stray card sits beside a
 * line that has nothing to connect to. Wrap extra content in a `Phase`, or put
 * it outside the timeline.
 */
export function Timeline(props) {
    const { children, className, style } = props;
    const classes = ['lynn-timeline', className].filter(Boolean).join(' ');
    return (_jsx("div", { className: classes, style: style, children: children }));
}
/** How long each pulsing state's loop runs, in seconds. Source values. */
const PULSE_DURATION = {
    active: 2,
    next: 2.5,
};
/**
 * One phase of a `Timeline`: dot, header, description, optional dependency
 * chip, then a grid of items.
 *
 * Usage: `status` drives both the dot's color and whether it moves at all -
 * `active` is a blue `PulseDot` at 2s, `next` an emerald one at 2.5s (two
 * speeds so two live phases are tellable apart), while `shipped` and `future`
 * are static. Children are `RoadmapItemCard`s, laid out in a responsive grid.
 * Give it an `id` so a `DocRail` section link can jump to it.
 *
 * Don't: don't write "Requires: X" into `dependency` - the component already
 * renders the `Requires:` prefix, so you get it twice; pass only the
 * dependency itself. And don't mark more than one phase `active`: the pulse is
 * the roadmap's "here is where we are", and two of them say nothing.
 */
export function Phase(props) {
    const { status = 'future', title, period, description, dependency, children, id, className, style, } = props;
    const classes = [
        'lynn-phase',
        `lynn-phase-${status}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, id: id, children: [_jsx("div", { className: "lynn-phase-dot-slot", children: status === 'active' || status === 'next' ? (_jsx(PulseDot, { tone: status === 'active' ? 'blue' : 'emerald', size: 12, duration: PULSE_DURATION[status], className: "lynn-phase-dot" })) : (_jsx("span", { className: "lynn-phase-dot", "aria-hidden": "true" })) }), _jsxs("div", { className: "lynn-phase-body", children: [_jsxs("div", { className: "lynn-phase-header", children: [_jsx("span", { className: "lynn-phase-title", children: title }), period != null ? (_jsx("span", { className: "lynn-phase-period", children: period })) : null] }), description != null ? (_jsx("p", { className: "lynn-phase-desc", children: description })) : null, dependency != null ? (_jsxs("div", { className: "lynn-phase-dep", children: [_jsx("span", { className: "lynn-phase-dep-label", children: "Requires:" }), dependency] })) : null, children != null ? (_jsx("div", { className: "lynn-phase-cards", children: children })) : null] })] }));
}
/**
 * One item inside a `Phase`: a small card with a left accent stripe, a name,
 * a description, and any of a status badge, tag chips, an assignee stack and
 * a footer of named approval gates.
 *
 * Usage: `accentColor` is any CSS color for the 3px left stripe and is how the
 * roadmap codes items by tool (blue audit, emerald convert, lynn handoff, teal
 * parity) - feed it `designTokens.color.accent[...]`. `people` and each
 * `gates[].people` take initials and render as `sm` / `xs` `Avatar` stacks.
 * `highlight` is the blue-tinted "this one" treatment; use it on at most one
 * card per phase.
 *
 * Don't: don't pass duplicate initials in `people` or `gates[].people` - the
 * avatars are keyed by the initials string, so two people who share initials
 * collide on one React key and only one disc renders. And don't pass
 * `statusVariant` without `status`: the footer badge only renders when there is
 * a label, so the variant alone does nothing.
 */
export function RoadmapItemCard(props) {
    const { name, description, status, statusVariant = 'active', tags = [], people = [], gates = [], gatesLabel = 'Required before ship', accentColor = 'rgba(255,255,255,0.15)', highlight = false, children, id, className, style, } = props;
    const classes = [
        'lynn-roadmap-item',
        highlight ? 'lynn-roadmap-item-highlight' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const mergedStyle = {
        ...style,
        '--lynn-item-accent': accentColor,
    };
    const hasFooter = tags.length > 0 || people.length > 0;
    return (_jsxs("div", { className: classes, style: mergedStyle, id: id, children: [_jsxs("div", { className: "lynn-roadmap-item-body", children: [_jsxs("div", { className: "lynn-roadmap-item-top", children: [_jsx("span", { className: "lynn-roadmap-item-name", children: name }), status != null ? (_jsx(Badge, { status: statusVariant, children: status })) : null] }), description != null ? (_jsx("p", { className: "lynn-roadmap-item-desc", children: description })) : null, children, hasFooter ? (_jsxs("div", { className: "lynn-roadmap-item-footer", children: [_jsx("div", { className: "lynn-roadmap-item-tags", children: tags.map((tag) => (_jsx("span", { className: "lynn-roadmap-item-tag", children: tag }, tag))) }), people.length > 0 ? (_jsx("div", { className: "lynn-roadmap-item-people", children: people.map((initials) => (_jsx(Avatar, { initials: initials, size: "sm" }, initials))) })) : null] })) : null] }), gates.length > 0 ? (_jsxs("div", { className: "lynn-roadmap-item-gates", children: [_jsx("div", { className: "lynn-roadmap-item-gates-label", children: gatesLabel }), _jsx("div", { className: "lynn-roadmap-item-gates-rows", children: gates.map((gate, index) => (_jsxs("span", { className: "lynn-roadmap-item-gate", children: [gate.icon != null ? (_jsx("span", { className: "lynn-roadmap-item-gate-icon", "aria-hidden": "true", children: gate.icon })) : null, gate.label, gate.people != null && gate.people.length > 0 ? (_jsx("span", { className: "lynn-roadmap-item-gate-avatars", children: gate.people.map((initials) => (_jsx(Avatar, { initials: initials, size: "xs" }, initials))) })) : null] }, index))) })] })) : null] }));
}
