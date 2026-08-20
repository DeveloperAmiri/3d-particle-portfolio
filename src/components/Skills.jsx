import { motion as Motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'Creative Development', level: 94, detail: 'React · Three.js · WebGL' },
  { name: 'Interaction Design', level: 90, detail: 'Motion · Prototyping · UX' },
  { name: 'Frontend Engineering', level: 92, detail: 'TypeScript · Next.js · APIs' },
  { name: 'Visual Systems', level: 84, detail: 'Figma · Design systems · A11y' },
];
const tools = ['React', 'Three.js', 'TypeScript', 'Framer Motion', 'Next.js', 'WebGL', 'Figma', 'GSAP'];

export default function Skills() {
  return (
    <section id="skills" className="content-section section-shell">
      <SectionHeading eyebrow="02 / Capabilities" title={<>Tools are temporary.<br /><span>Curiosity is permanent.</span></>} description="A hybrid skill set for building distinctive products from first sketch to final deploy." />
      <div className="skills-layout">
        <div className="skill-bars glass-card">
          {skills.map((skill, index) => (
            <Motion.div className="skill" key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <div className="skill-meta"><div><strong>{skill.name}</strong><span>{skill.detail}</span></div><b>{skill.level}%</b></div>
              <div className="skill-track"><Motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 + index * 0.1 }} /></div>
            </Motion.div>
          ))}
        </div>
        <Motion.div className="tool-cloud" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.07 } } }}>
          {tools.map((tool, i) => <Motion.span className="tool-pill interactive" key={tool} variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} style={{ '--i': i }}>{tool}</Motion.span>)}
        </Motion.div>
      </div>
    </section>
  );
}
