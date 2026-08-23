import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealMeta = useScrollReveal(0.12);

  const { about } = siteData;

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="section section-about" id="about" aria-label="About Section">
      <div className="container">
        <div className="about-editorial-grid reveal" ref={revealHeader}>
          <div className="about-identity-col">
            {about.avatar && (
              <div className="about-avatar-wrap">
                <img 
                  src={about.avatar} 
                  alt="Kağan Kurubaş portrait illustration" 
                  className="about-avatar-img"
                  loading="lazy"
                />
              </div>
            )}
            <div className="about-headline-wrap">
              <div className="about-eyebrow-row">
                <span className="eyebrow">{about.eyebrow}</span>
                <span className="about-rhythm-indicator" aria-hidden="true">
                  <span className="rhythm-bar rhythm-bar-1"></span>
                  <span className="rhythm-bar rhythm-bar-2"></span>
                  <span className="rhythm-bar rhythm-bar-3"></span>
                </span>
              </div>
              <h2 className="about-headline">{about.title}</h2>
            </div>
          </div>

          <div className="about-content-col">
            {about.bio.map((paragraph, index) => (
              <p className="about-paragraph" key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-meta-strip reveal" ref={revealMeta}>
          <div className="about-meta-items">
            {about.metadata.map((item, index) => (
              <div className="about-meta-block" key={index}>
                <span className="about-meta-label">{item.label}</span>
                <span className="about-meta-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="about-resume-wrap">
            <a 
              className="about-resume-link" 
              href={about.resumeLink.href}
              onClick={(e) => handleResumeClick(e, about.resumeLink.href)}
            >
              <span>{about.resumeLink.label}</span>
              <ArrowUpRight size={14} className="resume-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
