import { motion as Motion } from 'framer-motion';
import { Code2, Layers3, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const principles = [
  { icon: Layers3, title: 'Design-minded', text: 'I care about systems, detail, hierarchy, and the feeling behind every interaction.' },
  { icon: Code2, title: 'Engineering-led', text: 'Clean, resilient code and performance are first-class parts of every experience.' },
  { icon: Sparkles, title: 'Motion-driven', text: 'Purposeful animation turns interfaces into memorable, intuitive digital spaces.' },
];

export default function About() {
  return (
    <section id="about" className="content-section section-shell">
      <SectionHeading eyebrow="01 / About" title={<>Ideas, engineered with <span>intention.</span></>} />
      <div className="about-layout">
        <Motion.div className="about-copy" initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <p className="lead">I turn complex ideas into elegant, human-centered digital products.</p>
          <p>For the past six years, I've worked at the intersection of design and technology—partnering with ambitious teams to create websites and products that feel as good as they perform.</p>
          <p>My process is curious, collaborative, and relentlessly focused on the small details that shape the big picture.</p>
          <div className="about-stats">
            <div><strong>06+</strong><span>Years crafting</span></div>
            <div><strong>42</strong><span>Projects shipped</span></div>
            <div><strong>12</strong><span>Design awards</span></div>
          </div>
        </Motion.div>
        <div className="principle-grid">
          {principles.map((item, index) => (
            <Motion.article className="glass-card principle-card interactive" key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.12 }}>
              <item.icon />
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
