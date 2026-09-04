import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './BeyondEngineering.css';

export const BeyondEngineering: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealList = useScrollReveal(0.12);

  const { beyondEngineering } = siteData;

  if (!beyondEngineering) return null;

  return (
    <section className="section section-beyond" id="beyond" aria-label="Beyond Engineering & Creative Disciplines">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{beyondEngineering.eyebrow}</span>
            <h2>{beyondEngineering.title}</h2>
          </div>
          <p>{beyondEngineering.description}</p>
        </div>

        <div className="index-list reveal" ref={revealList} role="list">
          {beyondEngineering.items.map((item, index) => (
            <div className="index-row" key={index} role="listitem">
              <div className="index-row-top">
                <h3 className="index-row-title">{item.title}</h3>
                <span className="index-row-tech">{item.tag}</span>
              </div>
              <p className="index-row-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
