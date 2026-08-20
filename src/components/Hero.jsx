import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="home" className="hero section-shell">
      <Motion.div className="hero-content" style={{ y, opacity }}>
        <Motion.div className="availability" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <span /> Available for select projects
        </Motion.div>
        <Motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Creative developer · New York</Motion.p>
        <Motion.h1 initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
          I build digital<br />experiences that <span>move.</span>
        </Motion.h1>
        <Motion.p className="hero-intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.65 }}>
          I'm Alex Morgan, a creative developer blending thoughtful design, expressive motion, and robust code into immersive experiences.
        </Motion.p>
        <Motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
          <a href="#projects" className="button button-primary interactive">Explore my work <ArrowUpRight size={18} /></a>
          <a href="#contact" className="button button-ghost interactive">Start a conversation</a>
        </Motion.div>
      </Motion.div>
      <a href="#about" className="scroll-indicator interactive" aria-label="Scroll to about"><span>Scroll</span><ArrowDown size={17} /></a>
      <div className="hero-index">01 <span>/</span> 05</div>
    </section>
  );
}
