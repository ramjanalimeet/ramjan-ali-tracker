"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { GeoPermissibleObjects } from "d3-geo";

export type GlobePin = { name: string; href: string; lng: number; lat: number };

const OCEAN_LIGHT = "#2f5a7a";
const OCEAN_DARK = "#0d2238";
const LAND = "#a9d8bf";
const LAND_EDGE = "rgba(13, 34, 56, 0.35)";
const GRID = "rgba(255, 255, 255, 0.08)";
const PIN = "#ffffff";
const PIN_ACTIVE = "#c6f432";
const INK = "#111210";

/** Degrees per second while auto-rotating. */
const SPEED = 8;
/** How long each highlighted city stays labelled. */
const LABEL_MS = 2600;

/**
 * A rotating globe with a pin on every city served. Drag to spin it, click a pin to open that city's page.
 * The map libraries and land shapes load after the page, so they never hold up the first paint.
 */
export function Globe({ pins, label }: { pins: GlobePin[]; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) setPaused(true);

    let raf = 0;
    let alive = true;
    let size = 0;
    let dpr = 1;
    // Start over the Atlantic so North America, the UK and Europe are in view.
    const rotation: [number, number, number] = [40, -18, 0];
    let active = 0;
    let lastSwap = 0;
    let last = 0;
    let dragging: { x: number; y: number; r: [number, number, number] } | null = null;
    let moved = false;
    let screen: { x: number; y: number; i: number }[] = [];
    let cleanup = () => {};

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
    };

    Promise.all([import("d3-geo"), import("topojson-client"), import("world-atlas/land-110m.json")]).then(
      ([d3, topo, atlas]) => {
        if (!alive) return;
        const world = (atlas as { default?: unknown }).default ?? atlas;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const land = topo.feature(world as any, (world as any).objects.land) as GeoPermissibleObjects;
        const graticule = d3.geoGraticule10();
        const projection = d3.geoOrthographic().clipAngle(90);
        const path = d3.geoPath(projection, ctx);

        const visible = (p: GlobePin) =>
          d3.geoDistance([p.lng, p.lat], [-rotation[0], -rotation[1]]) < Math.PI / 2 - 0.08;

        const nextActive = () => {
          for (let step = 1; step <= pins.length; step++) {
            const i = (active + step) % pins.length;
            if (visible(pins[i])) return i;
          }
          return active;
        };

        const draw = () => {
          const r = size / 2 - 1;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, size, size);
          projection
            .translate([size / 2, size / 2])
            .scale(r)
            .rotate(rotation);

          // Ocean, lit from the top left.
          const ocean = ctx.createRadialGradient(size * 0.36, size * 0.3, r * 0.1, size / 2, size / 2, r);
          ocean.addColorStop(0, OCEAN_LIGHT);
          ocean.addColorStop(1, OCEAN_DARK);
          ctx.beginPath();
          path({ type: "Sphere" });
          ctx.fillStyle = ocean;
          ctx.fill();

          ctx.beginPath();
          path(graticule);
          ctx.strokeStyle = GRID;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          path(land);
          ctx.fillStyle = LAND;
          ctx.fill();
          ctx.strokeStyle = LAND_EDGE;
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Shade the far edge so it reads as a sphere.
          const shade = ctx.createRadialGradient(size * 0.38, size * 0.32, r * 0.45, size / 2, size / 2, r);
          shade.addColorStop(0, "rgba(255,255,255,0.10)");
          shade.addColorStop(0.7, "rgba(0,0,0,0)");
          shade.addColorStop(1, "rgba(5,15,28,0.45)");
          ctx.beginPath();
          path({ type: "Sphere" });
          ctx.fillStyle = shade;
          ctx.fill();

          // Pins.
          screen = [];
          pins.forEach((p, i) => {
            if (!visible(p)) return;
            const xy = projection([p.lng, p.lat]);
            if (!xy) return;
            screen.push({ x: xy[0], y: xy[1], i });
            if (i === active) return;
            ctx.beginPath();
            ctx.arc(xy[0], xy[1], 3.4, 0, Math.PI * 2);
            ctx.fillStyle = PIN;
            ctx.fill();
            ctx.lineWidth = 1.4;
            ctx.strokeStyle = INK;
            ctx.stroke();
          });

          // Highlighted city: a glowing pin with its name.
          const a = pins[active];
          const axy = visible(a) ? projection([a.lng, a.lat]) : null;
          if (axy) {
            const [x, y] = axy;
            const pulse = (performance.now() % 1600) / 1600;
            ctx.beginPath();
            ctx.arc(x, y, 5 + pulse * 12, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(198, 244, 50, ${0.45 * (1 - pulse)})`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fillStyle = PIN_ACTIVE;
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = INK;
            ctx.stroke();

            ctx.font = "600 13px system-ui, -apple-system, 'Segoe UI', sans-serif";
            const w = ctx.measureText(a.name).width + 22;
            const h = 28;
            let lx = x + 12;
            if (lx + w > size - 4) lx = x - 12 - w;
            const ly = y - h / 2;
            ctx.beginPath();
            ctx.roundRect(lx, ly, w, h, 8);
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = "rgba(0,0,0,0.25)";
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.fillStyle = INK;
            ctx.textBaseline = "middle";
            ctx.fillText(a.name, lx + 11, y + 1);
          }
        };

        const tick = (t: number) => {
          const dt = last ? Math.min(t - last, 64) : 16;
          last = t;
          if (!pausedRef.current && !dragging) rotation[0] += (SPEED * dt) / 1000;
          if (t - lastSwap > LABEL_MS || !visible(pins[active])) {
            active = nextActive();
            lastSwap = t;
          }
          draw();
          raf = requestAnimationFrame(tick);
        };

        // Only animate while the globe is on screen.
        const io = new IntersectionObserver(([e]) => {
          cancelAnimationFrame(raf);
          last = 0;
          if (e.isIntersecting) raf = requestAnimationFrame(tick);
        });
        io.observe(canvas);

        const pinAt = (ev: PointerEvent) => {
          const box = canvas.getBoundingClientRect();
          const x = ev.clientX - box.left;
          const y = ev.clientY - box.top;
          let best = -1;
          let bestD = 14 * 14;
          for (const s of screen) {
            const d = (s.x - x) ** 2 + (s.y - y) ** 2;
            if (d < bestD) {
              bestD = d;
              best = s.i;
            }
          }
          return best;
        };

        const down = (ev: PointerEvent) => {
          dragging = { x: ev.clientX, y: ev.clientY, r: [...rotation] };
          moved = false;
          canvas.setPointerCapture(ev.pointerId);
        };
        const move = (ev: PointerEvent) => {
          if (dragging) {
            const k = 180 / size;
            const dx = ev.clientX - dragging.x;
            const dy = ev.clientY - dragging.y;
            if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
            rotation[0] = dragging.r[0] + dx * k;
            rotation[1] = Math.max(-60, Math.min(60, dragging.r[1] - dy * k));
            return;
          }
          const i = pinAt(ev);
          canvas.style.cursor = i >= 0 ? "pointer" : "grab";
          if (i >= 0 && i !== active) {
            active = i;
            lastSwap = performance.now();
          }
        };
        const up = (ev: PointerEvent) => {
          const wasDrag = moved;
          dragging = null;
          if (!wasDrag) {
            const i = pinAt(ev);
            if (i >= 0) router.push(pins[i].href);
          }
        };
        canvas.addEventListener("pointerdown", down);
        canvas.addEventListener("pointermove", move);
        canvas.addEventListener("pointerup", up);
        canvas.addEventListener("pointercancel", () => (dragging = null));

        cleanup = () => {
          io.disconnect();
          canvas.removeEventListener("pointerdown", down);
          canvas.removeEventListener("pointermove", move);
          canvas.removeEventListener("pointerup", up);
        };
      },
    );

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      cleanup();
    };
  }, [pins, router]);

  return (
    <figure className="globe">
      <figcaption className="globe-top">
        <span>
          <i aria-hidden="true" /> {label}
        </span>
        <button type="button" className="globe-btn" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
          {paused ? "Play rotation" : "Pause rotation"}
        </button>
      </figcaption>
      <div className="globe-stage">
        <span className="globe-orbit" aria-hidden="true" />
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`Globe with a pin on each of the ${pins.length} cities I serve: ${pins.map((p) => p.name).join(", ")}.`}
        />
      </div>
    </figure>
  );
}
