import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './Now.css';

const NowCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const revealItem = useScrollReveal(0.1 + index * 0.05);
  return (
    <article className="now-card reveal" ref={revealItem}>
      <span className="now-card-number">{item.number}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
};

export const Now: React.FC = () => {
  const revealHeader = useScrollReveal();
  const { now } = siteData;

  return (
    <section className="section" id="now">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{now.eyebrow}</span>
            <h2>{now.title}</h2>
          </div>
          <p>{now.description}</p>
        </div>

        <div className="now-grid">
          {now.items.map((item, index) => (
            <NowCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
