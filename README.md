# Interactive 3D Particle Portfolio

A modern single-page creative developer portfolio with an immersive, cursor-reactive 3D particle field. The interface pairs expressive typography and motion with a dark, glassmorphic visual system.

## Features

- **Interactive particle environment** — thousands of GPU-rendered points drift through 3D space and smoothly repel from the cursor.
- **Responsive by design** — tailored layouts and adaptive particle counts for desktop, tablet, and mobile.
- **Scroll-driven motion** — subtle reveal, parallax, and stagger animations powered by Framer Motion.
- **Glassmorphism UI** — layered transparent cards, soft borders, and neon blue-to-purple accents.
- **Custom cursor** — a smoothly interpolated cursor that expands over interactive elements (fine-pointer devices only).
- **Complete portfolio flow** — hero, about, capabilities, selected work, and contact sections.
- **Performance conscious** — a single `THREE.Points` geometry, limited device pixel ratio, additive rendering, and no per-particle React objects.
- **Accessibility touches** — semantic landmarks, visible labels, reduced-motion support, and mobile-native cursors.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)
- Vanilla CSS with responsive layouts and custom animations

## Run locally

```bash
git clone https://github.com/DeveloperAmiri/3d-particle-portfolio.git
cd 3d-particle-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ParticleBackground.jsx
│   ├── Projects.jsx
│   ├── SectionHeading.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Customize

Update the placeholder identity, project details, links, and email inside the component files in `src/components/`. The primary colors and global visual tokens live at the top of `src/styles.css`.

## License

This project is available for personal portfolio use and customization.
