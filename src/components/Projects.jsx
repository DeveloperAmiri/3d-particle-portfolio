import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  { number: '01', title: 'Aether Finance', category: 'Fintech · Product design', description: 'An intelligent financial workspace that transforms complex market data into calm, clear decisions.', tags: ['React', 'D3.js', 'Motion'], visual: 'orb' },
  { number: '02', title: 'Vela Studio', category: 'Fashion · Digital experience', description: 'A spatial e-commerce experience built around editorial typography, fluid motion, and tactile discovery.', tags: ['Next.js', 'GSAP', 'WebGL'], visual: 'ripple' },
  { number: '03', title: 'Synapse', category: 'AI · Creative tools', description: 'A collaborative AI canvas for turning scattered thoughts into structured, expressive visual stories.', tags: ['Three.js', 'React', 'AI'], visual: 'grid' },
];

export default function Projects() {
  return (
    <section id="projects" className="content-section section-shell projects-section">
      <SectionHeading eyebrow="03 / Selected work" title={<>Built for impact.<br /><span>Designed to linger.</span></>} />
      <div className="project-list">
        {projects.map((project, index) => (
          <Motion.article className="project-card glass-card interactive" key={project.title} initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.08 }}>
            <div className={`project-visual visual-${project.visual}`}>
              <div className="visual-noise" />
              {project.visual === 'orb' && <><i /><i /><i /></>}
              {project.visual === 'ripple' && <><i /><i /><i /><i /></>}
              {project.visual === 'grid' && <div className="mini-grid">{Array.from({ length: 25 }, (_, i) => <i key={i} />)}</div>}
              <span>{project.number}</span>
            </div>
            <div className="project-info">
              <div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
              <p>{project.description}</p>
              <div className="project-footer"><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button aria-label={`View ${project.title}`}><ArrowUpRight /></button></div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
