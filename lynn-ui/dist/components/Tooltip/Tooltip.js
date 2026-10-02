import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, isValidElement, useCallback, useEffect, useId, useLayoutEffect, useRef, useState, } from 'react';
import { createPortal } from 'react-dom';
const MARGIN = 6;
const GAP = 6;
/**
 * A hover/focus tooltip.
 *
 * One bubble is portaled to `document.body` and placed from the target's real
 * `getBoundingClientRect()`, measured before paint. That is what lets it do
 * three things a CSS-only bubble cannot: it sizes to its text (wrapping past
 * 220px), it can never be clipped by an `overflow: hidden` or scrolling
 * ancestor, and it stays inside the viewport, flipping above the target when
 * there is no room below.
 *
 * When `children` is a single DOM element (`<button>`, `<a>`, `<input>`, ...)
 * the hover/focus handlers are cloned onto it, so the tooltip adds no box to
 * the layout and a focusable target reveals the bubble on keyboard focus.
 * Anything else - text, a fragment, several children, or a lynn-ui component,
 * none of which forward handlers to the DOM - gets an inline-flex wrapper,
 * which is given `tabIndex={0}` so the bubble stays keyboard-reachable.
 *
 * Usage: best on a single focusable DOM element. Use `side="right"` for a
 * target near a container's right edge. Keep the label short: it explains a
 * control, it is not a place for content people must read.
 *
 * Don't: don't put anything interactive in the label (it is plain text and
 * ignores the pointer), and don't rely on it for information a touch user
 * needs - there is no hover on touch, so the same text must be reachable some
 * other way.
 */
export function Tooltip(props) {
    const { label, side = 'bottom', children, className, style } = props;
    const id = useId();
    const [anchor, setAnchor] = useState(null);
    const [placement, setPlacement] = useState(null);
    const bubbleRef = useRef(null);
    const show = useCallback((el) => {
        setAnchor(el.getBoundingClientRect());
    }, []);
    const hide = useCallback(() => {
        setAnchor(null);
        setPlacement(null);
    }, []);
    // Measure the bubble, then place it. Runs before paint, so the one-frame
    // "render, measure, move" pass never shows a visible jump.
    useLayoutEffect(() => {
        if (anchor == null || bubbleRef.current == null)
            return;
        const { width, height } = bubbleRef.current.getBoundingClientRect();
        let left = side === 'right'
            ? anchor.right - width
            : anchor.left + anchor.width / 2 - width / 2;
        left = Math.max(MARGIN, Math.min(left, window.innerWidth - width - MARGIN));
        let top = anchor.bottom + GAP;
        let above = false;
        if (top + height > window.innerHeight - MARGIN) {
            top = anchor.top - height - GAP;
            above = true;
        }
        setPlacement({ left, top: Math.max(MARGIN, top), above });
    }, [anchor, label, side]);
    // A rect pinned to a spot the target has since scrolled away from is worse
    // than no tooltip, so any scroll, resize or Escape just closes it.
    useEffect(() => {
        if (anchor == null)
            return;
        const close = () => hide();
        const onKey = (event) => {
            if (event.key === 'Escape')
                hide();
        };
        window.addEventListener('scroll', close, true);
        window.addEventListener('resize', close);
        document.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('scroll', close, true);
            window.removeEventListener('resize', close);
            document.removeEventListener('keydown', onKey);
        };
    }, [anchor, hide]);
    const open = anchor != null;
    // Keyboard focus shows it; a mouse click that happens to focus a button
    // does not leave it stuck open.
    const onFocusShow = (event) => {
        let visible = true;
        try {
            visible = event.currentTarget.matches(':focus-visible');
        }
        catch {
            /* :focus-visible unsupported - fall back to showing */
        }
        if (visible)
            show(event.currentTarget);
    };
    const bubble = open && typeof document !== 'undefined'
        ? createPortal(_jsx("div", { ref: bubbleRef, id: id, role: "tooltip", className: "lynn-tooltip", "data-above": placement?.above ? 'true' : undefined, "data-ready": placement ? 'true' : undefined, style: { left: placement?.left ?? 0, top: placement?.top ?? 0 }, children: label }), document.body)
        : null;
    if (isValidElement(children) && typeof children.type === 'string') {
        const child = children;
        const merged = [child.props.className, className].filter(Boolean).join(' ');
        const p = child.props;
        return (_jsxs(_Fragment, { children: [cloneElement(child, {
                    className: merged.length > 0 ? merged : undefined,
                    style: style != null ? { ...p.style, ...style } : p.style,
                    'aria-describedby': open ? id : p['aria-describedby'],
                    onMouseEnter: (e) => {
                        p.onMouseEnter?.(e);
                        show(e.currentTarget);
                    },
                    onMouseLeave: (e) => {
                        p.onMouseLeave?.(e);
                        hide();
                    },
                    onFocus: (e) => {
                        p.onFocus?.(e);
                        onFocusShow(e);
                    },
                    onBlur: (e) => {
                        p.onBlur?.(e);
                        hide();
                    },
                }), bubble] }));
    }
    const classes = ['lynn-tooltip-wrap', className].filter(Boolean).join(' ');
    return (_jsxs(_Fragment, { children: [_jsx("span", { className: classes, style: style, tabIndex: 0, "aria-describedby": open ? id : undefined, onMouseEnter: (e) => show(e.currentTarget), onMouseLeave: hide, onFocus: onFocusShow, onBlur: hide, children: children }), bubble] }));
}
