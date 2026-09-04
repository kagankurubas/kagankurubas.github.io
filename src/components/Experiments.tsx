import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './Experiments.css';

export const Experiments: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealList = useScrollReveal(0.12);

  const { experiments } = siteData;

  if (!experiments) return null;

  return (
    <section className="section section-experiments" id="experiments" aria-label="Experiments and Lab Explorations">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{experiments.eyebrow}</span>
            <h2>{experiments.title}</h2>
          </div>
          <p>{experiments.description}</p>
        </div>

        <div className="index-list reveal" ref={revealList} role="list">
          {experiments.items.map((item, index) => (
            <div className="index-row" key={index} role="listitem">
              <div className="index-row-top">
                <span className="index-row-label">{item.category}</span>
                <span className="index-row-status mono">{`LAB-0${index + 1}`}</span>
              </div>
              <h3 className="index-row-title">{item.title}</h3>
              <p className="index-row-desc">{item.description}</p>
              <span className="index-row-tech">{item.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
