import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import './Skills.css';

const SkillGroup: React.FC<{ group: any; index: number }> = ({ group, index }) => {
  const revealGroup = useScrollReveal(0.1 + index * 0.05);
  return (
    <article className="skill-group reveal" ref={revealGroup}>
      <h3>{group.title}</h3>
      <div className="tag-list">
        {group.tags.map((tag: string, tagIndex: number) => (
          <span className="tag" key={tagIndex}>{tag}</span>
        ))}
      </div>
    </article>
  );
};

export const Skills: React.FC = () => {
  const revealHeader = useScrollReveal();
  const { skills } = siteData;

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{skills.eyebrow}</span>
            <h2>{skills.title}</h2>
          </div>
          <p>{skills.description}</p>
        </div>

        <div className="skills-grid">
          {skills.groups.map((group, index) => (
            <SkillGroup key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
