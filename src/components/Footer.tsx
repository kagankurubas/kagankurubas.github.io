import React from 'react';
import { siteData } from '../data/portfolioData';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { footer } = siteData;

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-identity">
          <strong className="footer-name">{footer.name}</strong>
          <span className="footer-role">{footer.role}</span>
          <span className="footer-copy">© {currentYear}</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footer.links.map((link) => (
            link.external ? (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
            ) : (
              <a 
                key={link.label}
                href={link.href}
                onClick={handleScrollTop}
                className="footer-link"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </footer>
  );
};
