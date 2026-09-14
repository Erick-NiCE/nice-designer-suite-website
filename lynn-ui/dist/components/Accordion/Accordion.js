import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '../Button/Button.js';
/**
 * A stack of independently collapsible sections.
 *
 * Deliberately not an "only one open at a time" accordion: neither source
 * behaves that way, and both reasons they don't are good ones - a reference
 * panel is compared across sections, and an FAQ reader opens two questions at
 * once.
 *
 * Usage: a layout wrapper and nothing more - it holds no state and passes no
 * context, so each `AccordionItem` owns its own open flag. Use it to get the
 * stacked spacing; a lone collapsible section works fine as a bare
 * `AccordionItem`.
 *
 * Don't: don't reach for this when you need exclusive "one open at a time"
 * behavior - there is no mechanism here to close a sibling, and no prop will
 * give you one.
 */
export function Accordion(props) {
    const { children, className, style } = props;
    const classes = ['lynn-accordion', className].filter(Boolean).join(' ');
    return (_jsx("div", { className: classes, style: style, children: children }));
}
const STORAGE_PREFIX = 'lynn-ui-accordion-';
/* Storage is unavailable outright in some embeddings (a sandboxed iframe, a
   browser with site data blocked), where touching it throws rather than
   returning null - so every access is guarded and simply falls back to the
   in-memory default. */
function readStored(key) {
    if (typeof window === 'undefined')
        return null;
    try {
        const raw = window.localStorage.getItem(key);
        if (raw === null)
            return null;
        return raw !== '0';
    }
    catch {
        return null;
    }
}
function writeStored(key, open) {
    if (typeof window === 'undefined')
        return;
    try {
        window.localStorage.setItem(key, open ? '1' : '0');
    }
    catch {
        /* Nothing to do: the section still works, it just won't be remembered. */
    }
}
/**
 * One collapsible section.
 *
 * The behavior is a port of the plugin's `DevSection`
 * (`src/ui/dev-section.tsx`): a chevron that rotates 90 degrees when open, a
 * `hint` tooltip on the header, an `actions` slot outside the toggle, and a
 * `localStorage`-remembered open state - with the storage key derived from
 * `id` instead of being fixed to one product's namespace.
 *
 * The card chrome around it is faq.html's `.faq-item`, since that is the real
 * Lynn-side surface for this shape; the plugin's own section is unstyled
 * because it lives inside an already-framed panel.
 *
 * Usage: `id` is both the `aria-controls` target and the `localStorage` suffix,
 * so pick something stable and meaningful. Explain a section through `hint`
 * (a header tooltip) rather than a paragraph that costs vertical space
 * forever, and put any control - a `Button`, a `Badge`, a `Switch` - in
 * `actions`, which renders outside the toggle because a button cannot nest
 * inside a button. Set `persist={false}` for equal-weight lists such as a
 * plain FAQ, where a remembered open row is noise rather than a preference.
 *
 * Don't: don't rename a shipped section's `id` - the stored key moves with it,
 * so every existing reader silently loses their collapsed state. And don't
 * expect `defaultOpen` to keep applying once `persist` is on: it seeds the
 * first render only, and any stored value takes precedence from then on.
 */
export function AccordionItem(props) {
    const { id, title, hint, actions, defaultOpen = true, persist = true, children, className, style, } = props;
    const key = `${STORAGE_PREFIX}${id}`;
    const [open, setOpen] = useState(() => {
        if (!persist)
            return defaultOpen;
        return readStored(key) ?? defaultOpen;
    });
    const toggle = () => {
        const next = !open;
        setOpen(next);
        if (persist)
            writeStored(key, next);
    };
    const classes = [
        'lynn-accordion-item',
        open ? 'lynn-accordion-item-open' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const panelId = `${id}-panel`;
    return (_jsxs("div", { className: classes, style: style, children: [_jsxs("div", { className: "lynn-accordion-head", children: [_jsx(Button, { variant: "ghost", className: "lynn-accordion-toggle", onClick: toggle, "aria-expanded": open, "aria-controls": panelId, ...(hint != null ? { title: hint } : {}), icon: _jsx("span", { className: [
                                'lynn-accordion-chevron',
                                open ? 'lynn-accordion-chevron-open' : null,
                            ]
                                .filter(Boolean)
                                .join(' '), children: "\u25B6" }), children: title }), actions != null ? (_jsx("div", { className: "lynn-accordion-actions", children: actions })) : null] }), _jsx("div", { className: "lynn-accordion-panel", id: panelId, hidden: !open, children: children })] }));
}
