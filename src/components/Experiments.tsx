import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { Terminal } from 'lucide-react';
import './Experiments.css';

export const Experiments: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealGrid = useScrollReveal(0.12);

  const { experiments } = siteData;

  if (!experiments) return null;

  return (
    <section className="section section-experiments" id="experiments" aria-label="Experiments and Lab Explorations">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <div className="experiments-eyebrow-row">
              <span className="eyebrow">{experiments.eyebrow}</span>
              <Terminal size={14} className="experiments-icon" aria-hidden="true" />
            </div>
            <h2>{experiments.title}</h2>
          </div>
          <p>{experiments.description}</p>
        </div>

        <div className="experiments-grid reveal" ref={revealGrid} role="list">
          {experiments.items.map((item, index) => (
            <article className="experiment-card" key={index} role="listitem">
              <div className="experiment-card-top">
                <span className="experiment-category">{item.category}</span>
                <span className="experiment-index" aria-hidden="true">LAB-0{index + 1}</span>
              </div>

              <div className="experiment-card-content">
                <h3 className="experiment-title">{item.title}</h3>
                <p className="experiment-desc">{item.description}</p>
              </div>

              <div className="experiment-card-footer">
                <span className="experiment-tech-tag">{item.tech}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
