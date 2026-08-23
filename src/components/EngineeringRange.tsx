import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './EngineeringRange.css';

interface EngineeringRangeProps {
  onNavigate?: (path: string, hash?: string) => void;
}

export const EngineeringRange: React.FC<EngineeringRangeProps> = ({ onNavigate }) => {
  const revealHeader = useScrollReveal();
  const revealRows = useScrollReveal(0.1);

  const { engineeringRange } = siteData;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onNavigate && href.startsWith('/')) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section className="section section-range" id="engineering">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{engineeringRange.eyebrow}</span>
            <h2>{engineeringRange.title}</h2>
          </div>
          <p>{engineeringRange.description}</p>
        </div>

        <div className="discipline-list reveal" ref={revealRows} role="list">
          {engineeringRange.disciplines.map((item) => {
            const isBuilding = item.proofLabel === 'CURRENTLY BUILDING';

            return (
              <div className="discipline-row" key={item.number} role="listitem">
                <div className="discipline-num-col">
                  <span className="discipline-num">{item.number}</span>
                </div>

                <div className="discipline-main-col">
                  <h3 className="discipline-title">{item.title}</h3>
                  <p className="discipline-desc">{item.description}</p>
                  <p className="discipline-tech">{item.technologies}</p>
                </div>

                <div className="discipline-proof-col">
                  <span className="discipline-proof-label">{item.proofLabel}</span>
                  <a 
                    className="discipline-proof-link" 
                    href={item.proofHref}
                    onClick={(e) => handleLinkClick(e, item.proofHref)}
                  >
                    <span>{item.proofTitle}</span>
                    {isBuilding ? (
                      <ArrowRight size={14} className="proof-arrow" />
                    ) : (
                      <ArrowUpRight size={14} className="proof-arrow" />
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
