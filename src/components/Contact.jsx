import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="content-section section-shell contact-section">
      <SectionHeading eyebrow="04 / Contact" title={<>Have an idea?<br /><span>Let's make it real.</span></>} description="Tell me a little about what you're building. I'll get back to you within two business days." />
      <div className="contact-layout">
        <Motion.form className="glass-card contact-form" onSubmit={(e) => e.preventDefault()} initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <label>Name<input type="text" placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@company.com" /></label>
          <label>Tell me about your project<textarea rows="4" placeholder="A few words about the idea, timeline, or challenge..." /></label>
          <button className="button button-primary interactive" type="submit">Send inquiry <ArrowUpRight size={18} /></button>
        </Motion.form>
        <Motion.aside className="contact-aside" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><span className="contact-label">Email directly</span><a className="email-link interactive" href="mailto:hello@alexmorgan.dev"><Mail size={18} /> hello@alexmorgan.dev</a></div>
          <div><span className="contact-label">Find me online</span><div className="socials"><a className="interactive" href="https://linkedin.com">LinkedIn ↗</a><a className="interactive" href="https://github.com">GitHub ↗</a><a className="interactive" href="https://dribbble.com">Dribbble ↗</a></div></div>
          <p className="timezone"><span /> Based in New York · Working worldwide</p>
        </Motion.aside>
      </div>
    </section>
  );
}
