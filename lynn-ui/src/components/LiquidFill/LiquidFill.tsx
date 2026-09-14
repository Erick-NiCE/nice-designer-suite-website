import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import Matter from 'matter-js';

export interface LiquidFillProps {
  /** Fill color. Source default: `#3694FC` (the `blue` accent). */
  color?: string;
  /** Opacity of the fill layer while hovered. Source default: 0.5. */
  opacity?: number;
  /**
   * Particle count. Source default: `max(110, round(width * 0.6))`, computed
   * from the container's measured width at first hover.
   */
  count?: number;
  /** Content layered above the fill. */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Wall thickness, thick enough that fast particles cannot tunnel out. */
const WALL_THICKNESS = 60;
const GOO_DEFS_ID = 'lynn-goo-defs';

/**
 * Injects the metaball "goo" SVG filter once per document.
 * Ported from `ensureGoo()` in nice-effects.js, with the filter renamed
 * `lynn-goo` to match this package's namespace (LiquidFill.css references
 * that id).
 */
function ensureGoo(): void {
  if (typeof document === 'undefined') return;
  if (document.getElementById(GOO_DEFS_ID)) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('id', GOO_DEFS_ID);
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
  svg.innerHTML =
    '<filter id="lynn-goo">' +
    '<feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="blur" />' +
    '<feColorMatrix in="blur" mode="matrix" ' +
    'values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />' +
    '<feBlend in="SourceGraphic" in2="goo" />' +
    '</filter>';
  document.body.appendChild(svg);
}

/**
 * `lynn/motion/liquid-fill`
 *
 * A physics-driven particle pool that splashes up, fills the container and
 * sloshes toward the cursor on hover, then drains back on leave. Ported from
 * `liquidFill()` in nice-effects.js, with all of its real constants:
 * restitution 0.4, friction 0.02, frictionAir 0.008, density 0.001, particle
 * radius 1.75-2.5px, 1.6x horizontal gravity steering, and the splash
 * impulse of x +/-5.5 / y -6 to -15.
 *
 * Unlike the original this takes `matter-js` as a real npm dependency rather
 * than reading a global `window.Matter`, so the physics types resolve at
 * build time and consumers need no CDN script tag. The import is only paid
 * for by bundles that actually reference this component.
 *
 * Under `prefers-reduced-motion: reduce` no engine is created and the fill
 * layer stays hidden - the component renders as a plain container.
 *
 * Usage: one instance, as a hover-to-discover stage - the CSS floors it at
 * 240px and paints its own `#1b1b24` ground, and the matter.js world is only
 * built on the first `mouseenter`, so an instance nobody hovers costs nothing
 * but its markup. Leave `count` unset to get the width-derived default
 * (`max(110, width * 0.6)`), which is what keeps the pool looking the same
 * density at every size.
 *
 * Don't: don't put it anywhere a pointer will not reach - the engine starts on
 * `mouseenter` and only steers on `mousemove`, so on touch it is a flat dark
 * box forever. And don't drive `color`, `opacity` or `count` from a live
 * control: they are the effect's dependencies, so every change tears down the
 * whole world (`Matter.World.clear` + `Engine.clear`) and rebuilds it on the
 * next hover. Once running it is a 60fps physics step over 110+ bodies drawn
 * through an SVG blur filter, so one per page is the budget.
 */
export function LiquidFill(props: LiquidFillProps) {
  const { color = '#3694FC', opacity = 0.5, count, children, className, style } =
    props;

  const containerRef = useRef<HTMLDivElement>(null);
  const fxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const fx = fxRef.current;
    const canvas = canvasRef.current;
    if (!container || !fx || !canvas) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ensureGoo();

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let engine: Matter.Engine | null = null;
    let particles: Matter.Body[] = [];
    let width = 0;
    let height = 0;
    let running = false;
    let raf: number | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const build = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const created = Matter.Engine.create();
      created.gravity.y = 1;
      const wt = WALL_THICKNESS;
      Matter.World.add(created.world, [
        Matter.Bodies.rectangle(
          width / 2,
          height + wt / 2,
          width + wt * 2,
          wt,
          { isStatic: true }
        ),
        Matter.Bodies.rectangle(-wt / 2, height / 2, wt, height * 4, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(width + wt / 2, height / 2, wt, height * 4, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(
          width / 2,
          -height * 1.5,
          width + wt * 2,
          wt,
          { isStatic: true }
        ),
      ]);

      const particleCount = count ?? Math.max(110, Math.round(width * 0.6));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const radius = 1.75 + Math.random() * 0.75;
        particles.push(
          Matter.Bodies.circle(
            20 + Math.random() * (width - 40),
            height - 10 - Math.random() * 70,
            radius,
            {
              restitution: 0.4,
              friction: 0.02,
              frictionAir: 0.008,
              density: 0.001,
            }
          )
        );
      }
      Matter.World.add(created.world, particles);
      engine = created;
    };

    const splash = () => {
      for (const body of particles) {
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 11,
          y: -6 - Math.random() * 9,
        });
      }
    };

    const loop = () => {
      if (!engine) return;
      Matter.Engine.update(engine, 1000 / 60);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      let moving = false;
      for (const body of particles) {
        ctx.beginPath();
        ctx.arc(
          body.position.x,
          body.position.y,
          body.circleRadius ?? 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        if (Math.abs(body.velocity.x) + Math.abs(body.velocity.y) > 0.12) {
          moving = true;
        }
      }
      raf = running || moving ? window.requestAnimationFrame(loop) : null;
    };

    const steer = (event: MouseEvent) => {
      if (!engine) return;
      const rect = container.getBoundingClientRect();
      engine.gravity.x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 1.6;
    };

    const enter = (event: MouseEvent) => {
      if (!engine) build();
      running = true;
      fx.style.opacity = String(opacity);
      steer(event);
      splash();
      if (raf === null) raf = window.requestAnimationFrame(loop);
    };

    const leave = () => {
      running = false;
      fx.style.opacity = '0';
      if (engine) engine.gravity.x = 0;
    };

    // The source tears the whole world down on resize and lazily rebuilds it
    // on the next hover, rather than trying to remap particle positions.
    const onResize = () => {
      if (resizeTimer !== undefined) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!engine) return;
        Matter.World.clear(engine.world, false);
        Matter.Engine.clear(engine);
        engine = null;
        if (raf !== null) {
          window.cancelAnimationFrame(raf);
          raf = null;
        }
        ctx.clearRect(0, 0, width, height);
      }, 200);
    };

    container.addEventListener('mouseenter', enter);
    container.addEventListener('mousemove', steer);
    container.addEventListener('mouseleave', leave);
    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('mouseenter', enter);
      container.removeEventListener('mousemove', steer);
      container.removeEventListener('mouseleave', leave);
      window.removeEventListener('resize', onResize);
      if (resizeTimer !== undefined) clearTimeout(resizeTimer);
      if (raf !== null) window.cancelAnimationFrame(raf);
      if (engine) {
        Matter.World.clear(engine.world, false);
        Matter.Engine.clear(engine);
        engine = null;
      }
    };
  }, [color, opacity, count]);

  const classes = ['lynn-liquid', className].filter(Boolean).join(' ');

  return (
    <div ref={containerRef} className={classes} style={style}>
      <div ref={fxRef} className="lynn-liquid-fx" aria-hidden="true">
        <canvas ref={canvasRef} className="lynn-liquid-canvas" />
      </div>
      {children != null ? (
        <div className="lynn-liquid-content">{children}</div>
      ) : null}
    </div>
  );
}
