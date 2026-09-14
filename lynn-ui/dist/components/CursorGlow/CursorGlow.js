import { jsx as _jsx } from "react/jsx-runtime";
import { useCursorGlow } from '../../hooks/useCursorGlow.js';
/**
 * `lynn/motion/cursor-glow`
 *
 * A 480px radial glow that trails the pointer across the whole page,
 * composited with `mix-blend-mode: screen`. Ported from index.html's
 * `#nice-cursor-glow`.
 *
 * Mount it once, anywhere - it is `position: fixed` and purely decorative
 * (`pointer-events: none`, `aria-hidden`).
 *
 * Usage: treat it as a page-level singleton, mounted next to `ToastViewport`
 * at the app root. `enabled={false}` is a real off switch rather than a
 * visibility toggle - it renders nothing and binds no `mousemove` listener at
 * all, which is what makes it safe to drive from a user preference.
 *
 * Don't: don't mount more than one - each instance binds its own pointer
 * listener and they composite on top of each other through
 * `mix-blend-mode: screen`, so two glows read as one twice-as-bright blob for
 * twice the per-move work. And don't expect it over a light surface: the
 * screen blend and the 5.5%-alpha blue are calibrated against Lynn's dark
 * `bg`, and vanish entirely on white.
 */
export function CursorGlow(props) {
    const { size = 480, enabled = true, className, style } = props;
    const ref = useCursorGlow({ enabled });
    if (!enabled)
        return null;
    const classes = ['lynn-cursor-glow', className].filter(Boolean).join(' ');
    const mergedStyle = {
        ...style,
        '--lynn-cursor-glow-size': `${size}px`,
    };
    return (_jsx("div", { ref: ref, className: classes, style: mergedStyle, "aria-hidden": "true" }));
}
