import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="logo interactive" href="#home" aria-label="Go to home">
        A<span>M</span><i>.</i>
      </a>
      <nav className={open ? 'open' : ''} aria-label="Main navigation">
        {links.map((link) => (
          <a className="interactive" href={`#${link.toLowerCase()}`} key={link} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
        <a className="nav-cta interactive" href="#contact" onClick={() => setOpen(false)}>Let's talk</a>
      </nav>
      <button className="menu-btn interactive" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
