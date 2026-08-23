import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { Mail, ExternalLink } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const revealContent = useScrollReveal();
  const { contact } = siteData;

  return (
    <section className="section section-contact" id="contact" aria-label="Contact Section">
      <div className="container">
        <div className="contact-closing-wrap reveal" ref={revealContent}>
          <div className="contact-meta">
            <span className="eyebrow">{contact.eyebrow}</span>
          </div>

          <h2 className="contact-headline">{contact.title}</h2>
          <p className="contact-lead">{contact.description}</p>

          <div className="contact-action-row">
            <a 
              className="button button-primary" 
              href={`mailto:${contact.email}`}
              aria-label={`Send email to ${contact.email}`}
            >
              <Mail size={16} />
              <span>{contact.email}</span>
            </a>

            <div className="contact-links-group">
              {contact.links.map((link, index) => {
                if (link.primary) return null;
                return (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="button button-secondary"
                    aria-label={`Visit ${link.label.replace(' ↗', '')}`}
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
