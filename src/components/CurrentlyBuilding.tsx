import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './CurrentlyBuilding.css';

export const CurrentlyBuilding: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealGrid = useScrollReveal(0.12);

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

        <div className="building-panel-grid reveal" ref={revealGrid}>
          {currentlyBuilding.items.map((item, index) => {
            const statusClass = 
              item.status === 'PLANNING' 
                ? 'status-indicator-planning' 
                : item.status === 'PROTOTYPE' 
                  ? 'status-indicator-prototype' 
                  : 'status-indicator-active';

            return (
              <article 
                className={`building-panel ${index === 0 ? 'building-panel-featured' : ''}`} 
                key={index}
              >
                <div className="building-panel-header">
                  <span className="building-category">{item.category}</span>
                  <span className="building-status">
                    <span 
                      className={`status-indicator ${statusClass}`} 
                      aria-hidden="true"
                    />
                    <span>{item.status}</span>
                  </span>
                </div>

                <div className="building-panel-body">
                  <h3 className="building-panel-title">{item.title}</h3>
                  <p className="building-panel-desc">{item.description}</p>
                </div>

                <div className="building-panel-footer">
                  <span className="building-tech-line">{item.tech}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
