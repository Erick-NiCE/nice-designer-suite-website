import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
/** Number of filaments radiating from the electrode. Source value: 7. */
const TENDRIL_COUNT = 7;
/** Midpoint-displacement subdivision passes per bolt. Source value: 5. */
const BOLT_ITERATIONS = 5;
/** Radius of the central electrode glow, in px. Source value: 55. */
const CORE_RADIUS = 55;
function hexToRgb(hex) {
    let value = (hex || '').trim().replace('#', '');
    if (value.length === 3) {
        value =
            value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
    }
    const n = Number.parseInt(value, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function lighten(rgb, amount) {
    return {
        r: Math.round(rgb.r + (255 - rgb.r) * amount),
        g: Math.round(rgb.g + (255 - rgb.g) * amount),
        b: Math.round(rgb.b + (255 - rgb.b) * amount),
    };
}
function rgba(c, alpha) {
    return `rgba(${c.r},${c.g},${c.b},${alpha})`;
}
/**
 * `lynn/motion/plasma-lightning`
 *
 * A canvas plasma ball: seven filaments radiate from a central electrode,
 * flicker via midpoint displacement, and bend toward the cursor, with
 * drifting light motes tracing the container's edge.
 *
 * The algorithm, constants and draw order are reimplemented directly from
 * `nice-effects.js`'s `lightning()` - this component has no runtime
 * dependency on the site's script or on a global `window.NiceEffects`.
 *
 * Like the original it pauses whenever it scrolls off screen, and it renders
 * a single static frame under `prefers-reduced-motion: reduce`.
 *
 * The container is framed by a rotating conic-gradient ring tinted with the
 * same `glow`/`color` pair the filaments are drawn in, so the border reads as
 * the same electricity rather than as an unrelated line.
 *
 * Usage: one instance per page, as a feature stage - the CSS floors it at
 * 240px tall and paints its own deep `#1b1b24` ground, so give it real width
 * and let it be the hero of its section. Anything in `children` is layered
 * above both canvases. `motes={0}` skips the second canvas entirely, which is
 * the cheap way to keep the plasma without the edge sparkle.
 *
 * Don't: don't run several at once - each instance owns a
 * `requestAnimationFrame` loop that redraws seven midpoint-displaced bolts
 * (five subdivision passes, two strokes each) plus up to 54 shadowed motes
 * across two canvases every frame, so a grid of them is the most expensive
 * thing in this package. It does pause itself off-screen and falls back to one
 * static frame under `prefers-reduced-motion`. And don't pass anything but a
 * hex to `color` / `glow`: `hexToRgb` strips a `#` and `parseInt`s the rest,
 * so an `rgb()` string or a `var(--lynn-color-blue)` yields NaN channels and
 * the filaments disappear - pass `designTokens.color.accent.blue` instead.
 */
export function Lightning(props) {
    const { color = '#B98FFF', glow = '#6100FF', opacity = 0.5, motes: moteCount = 54, followPointer = true, children, className, style, } = props;
    const containerRef = useRef(null);
    const plasmaRef = useRef(null);
    const motesRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        const plasma = plasmaRef.current;
        if (!container || !plasma)
            return;
        if (typeof window === 'undefined')
            return;
        const ctx = plasma.getContext('2d');
        if (!ctx)
            return;
        const moteCanvas = moteCount > 0 ? motesRef.current : null;
        const mctx = moteCanvas ? moteCanvas.getContext('2d') : null;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const baseRgb = hexToRgb(color);
        const glowRgb = hexToRgb(glow);
        const brightRgb = lighten(baseRgb, 0.55);
        let width = 0;
        let height = 0;
        let cx = 0;
        let cy = 0;
        const resize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            cx = width / 2;
            cy = height / 2;
            for (const canvas of [plasma, moteCanvas]) {
                if (!canvas)
                    continue;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                canvas.getContext('2d')?.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
        };
        resize();
        const tendrils = [];
        for (let i = 0; i < TENDRIL_COUNT; i++) {
            tendrils.push({
                angle: (i / TENDRIL_COUNT) * Math.PI * 2,
                angleV: (Math.random() - 0.5) * 0.012,
                reach: 0.55 + Math.random() * 0.4,
                tx: cx,
                ty: cy,
            });
        }
        const motes = [];
        for (let i = 0; i < moteCount; i++) {
            motes.push({
                d: Math.random(),
                speed: (Math.random() < 0.5 ? 1 : -1) * (0.02 + Math.random() * 0.03),
                inset: 4 + Math.random() * 26,
                osc: 4 + Math.random() * 10,
                oscSpeed: 0.4 + Math.random() * 0.8,
                phase: Math.random() * Math.PI * 2,
                r: 0.5 + Math.random() * 1.0,
                tw: 0.3 + Math.random() * 0.7,
            });
        }
        const pointer = { x: 0, y: 0, active: false };
        const onMove = (event) => {
            const rect = container.getBoundingClientRect();
            pointer.x = event.clientX - rect.left;
            pointer.y = event.clientY - rect.top;
            pointer.active = true;
        };
        const onLeave = () => {
            pointer.active = false;
        };
        /** Midpoint displacement, halving the offset each pass. */
        const bolt = (x1, y1, x2, y2, displacement) => {
            let points = [
                { x: x1, y: y1 },
                { x: x2, y: y2 },
            ];
            let d = displacement;
            for (let it = 0; it < BOLT_ITERATIONS; it++) {
                const next = [];
                for (let i = 0; i < points.length - 1; i++) {
                    const a = points[i];
                    const b = points[i + 1];
                    next.push(a);
                    const mx = (a.x + b.x) / 2;
                    const my = (a.y + b.y) / 2;
                    const nx = -(b.y - a.y);
                    const ny = b.x - a.x;
                    const len = Math.hypot(nx, ny) || 1;
                    const off = (Math.random() - 0.5) * d;
                    next.push({ x: mx + (nx / len) * off, y: my + (ny / len) * off });
                }
                next.push(points[points.length - 1]);
                points = next;
                d *= 0.5;
            }
            return points;
        };
        const stroke = (points, lineWidth, strokeStyle, shadowColor, shadowBlur) => {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = lineWidth;
            ctx.shadowColor = shadowColor;
            ctx.shadowBlur = shadowBlur;
            ctx.stroke();
        };
        /** Walks the inset rectangle's perimeter; `d` is a 0-1 fraction of it. */
        const edgePoint = (d, inset) => {
            const w = Math.max(1, width - 2 * inset);
            const h = Math.max(1, height - 2 * inset);
            const perimeter = 2 * (w + h);
            let s = (((d % 1) + 1) % 1) * perimeter;
            if (s < w)
                return { x: inset + s, y: inset };
            s -= w;
            if (s < h)
                return { x: inset + w, y: inset + s };
            s -= h;
            if (s < w)
                return { x: inset + w - s, y: inset + h };
            s -= w;
            return { x: inset, y: inset + h - s };
        };
        let t = 0;
        let raf = null;
        let visible = false;
        const drawFrame = () => {
            t += 0.016;
            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'lighter';
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            const rx = width * 0.46;
            const ry = height * 0.46;
            for (let idx = 0; idx < tendrils.length; idx++) {
                const td = tendrils[idx];
                td.angle += td.angleV + Math.sin(t * 0.7 + idx) * 0.004;
                const pulse = td.reach + Math.sin(t * 1.3 + idx * 1.7) * 0.09;
                let baseX = cx + Math.cos(td.angle) * rx * pulse;
                let baseY = cy + Math.sin(td.angle) * ry * pulse;
                if (pointer.active) {
                    const pull = idx < 2 ? 0.72 : 0.14;
                    baseX += (pointer.x - baseX) * pull;
                    baseY += (pointer.y - baseY) * pull;
                }
                td.tx += (baseX - td.tx) * 0.12;
                td.ty += (baseY - td.ty) * 0.12;
                const dist = Math.hypot(td.tx - cx, td.ty - cy);
                const points = bolt(cx, cy, td.tx, td.ty, Math.max(18, dist * 0.32));
                stroke(points, 3.4, rgba(baseRgb, 0.42), rgba(glowRgb, 0.9), 14);
                stroke(points, 1.2, rgba(brightRgb, 0.75 + Math.random() * 0.25), rgba(baseRgb, 0.95), 8);
            }
            ctx.shadowBlur = 0;
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, CORE_RADIUS);
            gradient.addColorStop(0, rgba(lighten(baseRgb, 0.7), 0.9));
            gradient.addColorStop(0.35, rgba(baseRgb, 0.5));
            gradient.addColorStop(1, rgba(glowRgb, 0));
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(cx, cy, CORE_RADIUS, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
            if (mctx) {
                mctx.clearRect(0, 0, width, height);
                mctx.globalCompositeOperation = 'lighter';
                for (const mote of motes) {
                    const inset = mote.inset + Math.sin(t * mote.oscSpeed + mote.phase) * mote.osc;
                    const p = edgePoint(mote.d + t * mote.speed, inset);
                    const twinkle = mote.tw * (0.55 + 0.45 * Math.sin(t * 2.1 + mote.phase * 2));
                    mctx.beginPath();
                    mctx.arc(p.x, p.y, mote.r, 0, Math.PI * 2);
                    mctx.fillStyle = rgba(brightRgb, twinkle);
                    mctx.shadowColor = rgba(baseRgb, 0.9);
                    mctx.shadowBlur = 4;
                    mctx.fill();
                }
                mctx.globalCompositeOperation = 'source-over';
            }
        };
        const frame = () => {
            drawFrame();
            raf = visible ? window.requestAnimationFrame(frame) : null;
        };
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) {
            // One static frame: the plasma ball is still legible, nothing moves.
            drawFrame();
            const onResizeStatic = () => {
                resize();
                drawFrame();
            };
            window.addEventListener('resize', onResizeStatic);
            return () => {
                window.removeEventListener('resize', onResizeStatic);
            };
        }
        const start = () => {
            visible = true;
            if (raf === null)
                raf = window.requestAnimationFrame(frame);
        };
        const stop = () => {
            visible = false;
        };
        let observer = null;
        if (typeof IntersectionObserver === 'undefined') {
            start();
        }
        else {
            observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting)
                        start();
                    else
                        stop();
                }
            }, { threshold: 0.02 });
            observer.observe(container);
        }
        window.addEventListener('resize', resize);
        if (followPointer) {
            container.addEventListener('mousemove', onMove);
            container.addEventListener('mouseleave', onLeave);
        }
        return () => {
            stop();
            if (raf !== null)
                window.cancelAnimationFrame(raf);
            observer?.disconnect();
            window.removeEventListener('resize', resize);
            if (followPointer) {
                container.removeEventListener('mousemove', onMove);
                container.removeEventListener('mouseleave', onLeave);
            }
        };
    }, [color, glow, moteCount, followPointer]);
    const classes = ['lynn-lightning', className].filter(Boolean).join(' ');
    // The animated ring reads the same two colors the canvases draw with, so a
    // re-tinted plasma ball re-tints its own frame.
    const ringVars = {
        '--lynn-lightning-color': color,
        '--lynn-lightning-glow': glow,
    };
    return (_jsxs("div", { ref: containerRef, className: classes, style: { ...style, ...ringVars }, children: [_jsx("div", { className: "lynn-lightning-ring", "aria-hidden": "true", children: _jsx("div", { className: "lynn-lightning-ring-inner" }) }), _jsx("canvas", { ref: plasmaRef, className: "lynn-lightning-plasma", style: { opacity }, "aria-hidden": "true" }), moteCount > 0 ? (_jsx("canvas", { ref: motesRef, className: "lynn-lightning-motes", "aria-hidden": "true" })) : null, children != null ? (_jsx("div", { className: "lynn-lightning-content", children: children })) : null] }));
}
