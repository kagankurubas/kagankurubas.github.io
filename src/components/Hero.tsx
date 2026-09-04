import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { ArrowDownRight, ExternalLink } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const revealRef = useScrollReveal(0.05);

  const { hero } = siteData;

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content reveal" ref={revealRef}>
          <div className="hero-meta">
            <span className="hero-name">{hero.name}</span>
            <span className="hero-divider" aria-hidden="true">/</span>
            <span className="hero-roles">{hero.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            {hero.titleLead}{' '}
            <span className="hero-title-accent">{hero.titleAccent}</span>
          </h1>

          <p className="hero-lead">
            {hero.description}
          </p>

          <div className="hero-actions">
            <a 
              className="button button-primary" 
              href={hero.primaryButton.href} 
              onClick={(e) => handleScrollClick(e, hero.primaryButton.href)}
            >
              <span>{hero.primaryButton.label}</span>
              <ArrowDownRight size={16} className="btn-icon" />
            </a>
            <a 
              className="button button-secondary" 
              href={hero.secondaryButton.href} 
              target="_blank" 
              rel="noreferrer"
            >
              <span>{hero.secondaryButton.label}</span>
              <ExternalLink size={14} className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
