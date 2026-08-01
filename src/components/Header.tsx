import React, { useState } from 'react';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { siteData } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const scrolled = useHeaderScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Go to the top of the page" onClick={(e) => handleScrollClick(e, '#top')}>
          <span className="brand-mark">{siteData.header.brand.initials}</span>
          <span>{siteData.header.brand.name}</span>
        </a>

        <button 
          className="nav-menu-button" 
          type="button" 
          aria-label="Toggle navigation" 
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {siteData.header.navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => handleScrollClick(e, link.href)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a className="button button-secondary button-small" href="#contact" onClick={(e) => handleScrollClick(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
