import { jsx as _jsx } from "react/jsx-runtime";
import { useTiltSpotlight } from '../../hooks/useTiltSpotlight.js';
/**
 * A Lynn surface card.
 *
 * `<Card>...</Card>` alone is a complete card: `card` background, 1px
 * border, `lg` radius, hover lift, tilt and spotlight.
 *
 * Usage: pass `interactive` only where the card has mouse-move room - the
 * 7-degree tilt and the 220px spotlight need travel to read as depth, and look
 * wrong on cards packed edge-to-edge in a dense grid or nested inside another
 * interactive surface. Turn it off (`interactive={false}`) for a static
 * container, which is what every card on the playground page does. `accent`
 * draws the 2px top strip; `blue`, `indigo` and `teal` render two-stop
 * gradients and the other four render solid.
 *
 * Don't: don't set `liquid` on a `solid` card - the drifting highlight is
 * layered into the translucent pane, so the class is only applied when
 * `variant="glass"` and otherwise does nothing at all. And don't treat
 * `onClick` as making the card a button: this renders a plain `div` with no
 * role, no `tabIndex` and no key handling, so a clickable card is unreachable
 * by keyboard - put a real `Button` or link inside it instead.
 */
export function Card(props) {
    const { children, variant = 'solid', accent, interactive = true, liquid = false, className, style, onClick, } = props;
    const ref = useTiltSpotlight({ enabled: interactive });
    const classes = [
        'lynn-card',
        `lynn-card-${variant}`,
        accent ? `lynn-card-accent lynn-card-accent-${accent}` : null,
        interactive ? 'lynn-card-interactive' : null,
        liquid && variant === 'glass' ? 'lynn-card-liquid' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("div", { ref: ref, className: classes, style: style, onClick: onClick, children: children }));
}
