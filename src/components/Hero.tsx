import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './Hero.css';

export const Hero: React.FC = () => {
  const revealRef = useScrollReveal();
  const revealRefProfile = useScrollReveal(0.2);

  const { hero } = siteData;

  const renderDescription = (text: string) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

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
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal" ref={revealRef}>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            {hero.titleMain}
            <span>{hero.titleAccent}</span>
          </h1>
          <p className="hero-description">
            {renderDescription(hero.description)}
          </p>

          <div className="button-row">
            <a className="button button-primary" href={hero.primaryButton.href} onClick={(e) => handleScrollClick(e, hero.primaryButton.href)}>
              {hero.primaryButton.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryButton.href} target="_blank" rel="noreferrer">
              {hero.secondaryButton.label}
            </a>
          </div>


        </div>

        <aside className="profile-panel reveal" ref={revealRefProfile} aria-label="Profile overview">
          <div className="hero-proof" aria-label="Current portfolio highlights">
            {hero.proofs.map((proof, index) => (
              <span className="proof-pill" key={index}>{proof}</span>
            ))}
          </div>
          <div className="profile-card">
            <div className="profile-visual">
              <img src={hero.profile.image} alt="Illustrated portrait of Nuri Kağan Kurubaş" />
              <div className="profile-status">
                <div className="profile-status-details">
                  <div className="profile-status-header">
                    <strong>{hero.profile.statusTitle}</strong>
                    <span className="status-dot" aria-hidden="true"></span>
                  </div>
                  <span>{hero.profile.statusSubtitle}</span>
                  <span className="profile-contact-info">
                    <a href={`mailto:${hero.profile.email}`}>{hero.profile.email}</a>
                    <span>{hero.profile.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

