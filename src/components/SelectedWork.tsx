import React, { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { Check } from 'lucide-react';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealCard = useScrollReveal(0.15);

  const { selectedWork } = siteData;
  const { project } = selectedWork;
  const images = project.screenshots;

  const [activeIndex, setActiveIndex] = useState(1);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (diff > 40) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -40) {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{selectedWork.eyebrow}</span>
            <h2>{selectedWork.title}</h2>
          </div>
          <p>{selectedWork.description}</p>
        </div>

        <article className="project-card reveal" ref={revealCard}>
          <div className="project-top">
            <div className="project-copy">
              <span className="project-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>

              <div className="button-row">
                <a className="button button-primary" href={project.primaryButton.href} target="_blank" rel="noreferrer">
                  {project.primaryButton.label}
                </a>
                <a className="button button-secondary" href={project.secondaryButton.href} target="_blank" rel="noreferrer">
                  {project.secondaryButton.label}
                </a>
              </div>
            </div>

            <div className="project-showcase" aria-label={`${project.title} application screenshots`}>
              <div 
                className="phone-stage"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {images.map((src, index) => {
                  let positionClass = '';
                  if (index === activeIndex) {
                    positionClass = 'phone-center';
                  } else if (index === (activeIndex - 1 + images.length) % images.length) {
                    positionClass = 'phone-left';
                  } else if (index === (activeIndex + 1) % images.length) {
                    positionClass = 'phone-right';
                  } else {
                    positionClass = 'phone-hidden';
                  }

                  return (
                    <figure 
                      className={`phone ${positionClass}`} 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img src={src} alt={`${project.title} screenshot ${index + 1}`} />
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="project-bottom">
            {project.metrics.map((metric, index) => (
              <div className="project-metric" key={index}>
                <strong>{metric.title}</strong>
                <span>{metric.subtitle}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
