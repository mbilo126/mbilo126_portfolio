import { useEffect, useRef, useCallback } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  lineWidth: number;
}

const CursorRipple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastRippleTime = useRef(0);

  const addRipple = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastRippleTime.current < 80) return;
    lastRippleTime.current = now;

    ripplesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 80 + Math.random() * 40,
      opacity: 0.35,
      lineWidth: 1.5,
    });

    // secondary ring
    setTimeout(() => {
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 50 + Math.random() * 30,
        opacity: 0.2,
        lineWidth: 1,
      });
    }, 120);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);

    const handleMove = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 120 + Math.random() * 40,
        opacity: 0.5,
        lineWidth: 2,
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ripples = ripplesRef.current;

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.2;
        r.opacity -= 0.004;
        r.lineWidth = Math.max(0.2, r.lineWidth - 0.01);

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(192, 91%, 54%, ${r.opacity})`;
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
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, [addRipple]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  );
};

export default CursorRipple;
