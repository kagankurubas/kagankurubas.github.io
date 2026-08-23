import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { Music, Radio, Sparkles, Disc } from 'lucide-react';
import './BeyondEngineering.css';

export const BeyondEngineering: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealCards = useScrollReveal(0.12);

  const { beyondEngineering } = siteData;

  if (!beyondEngineering) return null;

  const icons = [
    <Disc size={18} key="prod" aria-hidden="true" />,
    <Radio size={18} key="guitar" aria-hidden="true" />,
    <Music size={18} key="comp" aria-hidden="true" />,
    <Sparkles size={18} key="ttrpg" aria-hidden="true" />
  ];

  return (
    <section className="section section-beyond" id="beyond" aria-label="Beyond Engineering & Creative Disciplines">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <div className="beyond-eyebrow-row">
              <span className="eyebrow">{beyondEngineering.eyebrow}</span>
              <span className="beyond-rhythm-wave" aria-hidden="true">
                <span className="wave-bar wave-bar-1"></span>
                <span className="wave-bar wave-bar-2"></span>
                <span className="wave-bar wave-bar-3"></span>
                <span className="wave-bar wave-bar-4"></span>
              </span>
            </div>
            <h2>{beyondEngineering.title}</h2>
          </div>
          <p>{beyondEngineering.description}</p>
        </div>

        <div className="beyond-grid reveal" ref={revealCards} role="list">
          {beyondEngineering.items.map((item, index) => (
            <div className="beyond-card" key={index} role="listitem">
              <div className="beyond-card-icon-wrap">
                {icons[index % icons.length]}
              </div>
              <div className="beyond-card-body">
                <h3 className="beyond-card-title">{item.title}</h3>
                <p className="beyond-card-desc">{item.description}</p>
                <span className="beyond-card-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
