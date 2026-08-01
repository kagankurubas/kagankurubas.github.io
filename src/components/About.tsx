import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './About.css';

export const About: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealCopy = useScrollReveal(0.15);
  const revealExperience = useScrollReveal(0.2);

  const { about } = siteData;

  const renderBioText = (text: string) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2>{about.title}</h2>
          </div>
          <p>{about.description}</p>
        </div>

        <div className="about-grid">
          <div className="panel about-copy reveal" ref={revealCopy}>
            <h3>I care about systems that feel clear, responsive, and intentional.</h3>
            {about.bio.map((paragraph, index) => (
              <p key={index}>{renderBioText(paragraph)}</p>
            ))}
            
            <div className="about-focus-areas">
              {about.focusAreas.map((area, index) => (
                <div key={index} className="focus-area">
                  <strong>{area.title}</strong>
                  <span>{area.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel experience-list reveal" ref={revealExperience}>
            {about.experience.map((exp, index) => (
              <article className="experience-card" key={index}>
                <header>
                  <h3>{exp.title}</h3>
                  <time>{exp.timeline}</time>
                </header>
                <p>{exp.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
