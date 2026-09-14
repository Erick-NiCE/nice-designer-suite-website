import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A Lynn pill badge.
 *
 * `<Badge>Beta</Badge>` alone is a complete blue-tinted pill.
 *
 * Usage: reach for `status` when the label is one of the thirteen real site
 * states (roadmap phases, score grades, lifecycle pills) and `tone` for
 * anything else. `bordered` adds the 20%-accent outline the Figma / Chrome /
 * both target badges use. The system convention for a Superpowers/MCP-only
 * feature is `tone="lynn"` with `icon={<IconBolt />}`.
 *
 * Don't: don't pass `status` and `tone` together - `status` wins and both
 * `tone` and `bordered` are dropped on the floor, so the badge you get is not
 * the one you wrote. And don't invent a status by passing an accent that
 * "looks right": the thirteen pairs are hand-tuned and are what the legends
 * elsewhere on a page are explaining.
 */
export function Badge(props) {
    const { children, tone = 'blue', status, bordered = false, icon, className, style, } = props;
    const classes = [
        'lynn-badge',
        status ? `lynn-badge-status-${status}` : `lynn-badge-tone-${tone}`,
        bordered && !status ? 'lynn-badge-bordered' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("span", { className: classes, style: style, children: [icon != null ? (_jsx("span", { className: "lynn-badge-icon", "aria-hidden": "true", children: icon })) : null, children] }));
}
