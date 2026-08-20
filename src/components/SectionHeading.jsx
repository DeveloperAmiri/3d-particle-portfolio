import { motion as Motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Motion.div>
  );
}
