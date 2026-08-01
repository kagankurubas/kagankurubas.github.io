import React from 'react';
import { siteData } from '../data/portfolioData';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { footer } = siteData;

  return (
    <footer>
      <div className="container footer-inner">
        <span>© {currentYear} {footer.copyright}</span>
        <span className="mono">{footer.builtWith}</span>
      </div>
    </footer>
  );
};
