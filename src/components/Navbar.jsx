import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <a href="/" className="navbar__logo" aria-label="Studio Legale Orsini – Home">
        <div className="navbar__wordmark">
          <span className="navbar__avv">Studio Legale</span>
          <span className="navbar__name">Orsini</span>
        </div>
      </a>

      <nav
        className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}
        aria-label="Navigazione principale"
      >
        <a href="#aree" onClick={closeMenu}>Aree di Pratica</a>
        <a href="#studio" onClick={closeMenu}>Lo Studio</a>
        <a href="#contatti" onClick={closeMenu}>Contatti</a>
        <a href="#contatti" className="navbar__cta" onClick={closeMenu}>
          Consulenza
        </a>
      </nav>

      <button
        className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar__nav"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__overlay" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  );
}
