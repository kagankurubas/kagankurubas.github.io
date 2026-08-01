import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { Check } from 'lucide-react';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  const revealHeader = useScrollReveal();
  const revealCard = useScrollReveal(0.15);

  const { selectedWork } = siteData;
  const { project } = selectedWork;

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{selectedWork.eyebrow}</span>
            <h2>{selectedWork.title}</h2>
          </div>
          <p>{selectedWork.description}</p>
        </div>

        <article className="project-card reveal" ref={revealCard}>
          <div className="project-top">
            <div className="project-copy">
              <span className="project-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>

              <div className="button-row">
                <a className="button button-primary" href={project.primaryButton.href} target="_blank" rel="noreferrer">
                  {project.primaryButton.label}
                </a>
                <a className="button button-secondary" href={project.secondaryButton.href} target="_blank" rel="noreferrer">
                  {project.secondaryButton.label}
                </a>
              </div>
            </div>

            <div className="project-showcase" aria-label={`${project.title} application screenshots`}>
              <div className="phone-stage">
                <figure className="phone phone-left">
                  <img src={project.screenshots[0]} alt={`${project.title} screenshot 1`} />
                </figure>
                <figure className="phone phone-center">
                  <img src={project.screenshots[1]} alt={`${project.title} screenshot 2`} />
                </figure>
                <figure className="phone phone-right">
                  <img src={project.screenshots[2]} alt={`${project.title} screenshot 3`} />
                </figure>
              </div>
            </div>
          </div>

          <div className="project-bottom">
            {project.metrics.map((metric, index) => (
              <div className="project-metric" key={index}>
                <strong>{metric.title}</strong>
                <span>{metric.subtitle}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
