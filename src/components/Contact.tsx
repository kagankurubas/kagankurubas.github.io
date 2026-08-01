import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './Contact.css';

export const Contact: React.FC = () => {
  const revealCard = useScrollReveal();
  const { contact } = siteData;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card reveal" ref={revealCard}>
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>

          <div className="contact-links">
            <a className="contact-link" href={contact.secondaryButton.href} target="_blank" rel="noreferrer">
              {contact.secondaryButton.label}
            </a>
            {contact.links.map((link, index) => (
              link.href ? (
                <a className="contact-link" href={link.href} key={index} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <span className="contact-link" key={index}>
                  {link.label}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
