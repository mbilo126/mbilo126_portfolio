import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  lineWidth: number;
}

const MAX_RIPPLES = 20;
const INTERACTIVE_SELECTOR = 'a, button, [role="button"], .gradient-border, .group, input, textarea, select';

const CursorRipple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameRef = useRef(0);
  const lastRippleTime = useRef(0);
  const isDarkRef = useRef(document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Track dark mode changes efficiently
    const observer = new MutationObserver(() => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let w = 0, h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const isOverInteractive = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y);
      return el ? !!el.closest(INTERACTIVE_SELECTOR) : false;
    };

    const addRipple = (x: number, y: number, minInterval: number) => {
      if (isOverInteractive(x, y)) return;
      const now = performance.now();
      if (now - lastRippleTime.current < minInterval) return;
      lastRippleTime.current = now;

      const ripples = ripplesRef.current;
      if (ripples.length >= MAX_RIPPLES) ripples.shift();

      ripples.push({
        x, y,
        radius: 0,
        maxRadius: 80 + Math.random() * 40,
        opacity: 0.3,
        lineWidth: 1.5,
      });
    };

    const handleMove = (e: MouseEvent) => addRipple(e.clientX, e.clientY, 160);
    const handleClick = (e: MouseEvent) => {
      if (isOverInteractive(e.clientX, e.clientY)) return;
      const ripples = ripplesRef.current;
      if (ripples.length >= MAX_RIPPLES) ripples.shift();
      ripples.push({
        x: e.clientX, y: e.clientY,
        radius: 0, maxRadius: 120 + Math.random() * 40,
        opacity: 0.45, lineWidth: 2,
      });
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) addRipple(t.clientX, t.clientY, 120);
    };
    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) addRipple(t.clientX, t.clientY, 0);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("click", handleClick);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    let lastFrame = 0;
    const animate = (time: number) => {
      // Throttle to ~60fps
      if (time - lastFrame < 16) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrame = time;

      const ripples = ripplesRef.current;
      ctx.clearRect(0, 0, w, h);

      if (ripples.length === 0) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const hue = isDarkRef.current ? "192, 91%, 54%" : "192, 91%, 35%";

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.2;
        r.opacity -= 0.005;
        r.lineWidth = Math.max(0.2, r.lineWidth - 0.012);

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${hue}, ${r.opacity})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};

export default CursorRipple;
