import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './CurrentlyBuilding.css';

export const CurrentlyBuilding: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealList = useScrollReveal(0.12);

  const { currentlyBuilding } = siteData;

  return (
    <section className="section section-building" id="building" aria-label="Active Development Section">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{currentlyBuilding.eyebrow}</span>
            <h2>{currentlyBuilding.title}</h2>
          </div>
          <p>{currentlyBuilding.description}</p>
        </div>

        <div className="index-list reveal" ref={revealList} role="list">
          {currentlyBuilding.items.map((item, index) => {
            const statusClass =
              item.status === 'PLANNING'
                ? 'status-dot-planning'
                : item.status === 'PROTOTYPE'
                  ? 'status-dot-prototype'
                  : 'status-dot-active';

            return (
              <div className="index-row" key={index} role="listitem">
                <div className="index-row-top">
                  <span className="index-row-label">{item.category}</span>
                  <span className="index-row-status">
                    <span className={`status-dot ${statusClass}`} aria-hidden="true" />
                    <span>{item.status}</span>
                  </span>
                </div>
                <h3 className="index-row-title">{item.title}</h3>
                <p className="index-row-desc">{item.description}</p>
                <span className="index-row-tech">{item.tech}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
