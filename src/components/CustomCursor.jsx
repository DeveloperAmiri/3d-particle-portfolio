import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef();
  const ring = useRef();

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    let x = 0, y = 0, ringX = 0, ringY = 0, frame;

    const move = (event) => {
      x = event.clientX; y = event.clientY;
      dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const render = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };
    const over = (event) => {
      ring.current.classList.toggle('cursor-hover', Boolean(event.target.closest('a, button, input, textarea, .interactive')));
    };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over);
    frame = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>;
}
