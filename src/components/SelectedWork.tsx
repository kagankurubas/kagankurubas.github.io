import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/portfolioData';
import { 
  ArrowRight, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  Layers,
  ArrowDown
} from 'lucide-react';
import './SelectedWork.css';

interface SelectedWorkProps {
  onNavigate?: (path: string, hash?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onNavigate }) => {
  const revealHeader = useScrollReveal();
  const revealHabitto = useScrollReveal(0.1);
  const revealTodoist = useScrollReveal(0.1);

  const { selectedWork } = siteData;
  const habitto = selectedWork.projects[0];
  const todoist = selectedWork.projects[1];

  const [activeHabittoScreen, setActiveHabittoScreen] = React.useState(1);

  const habittoScreens = [
    {
      id: 'routines',
      label: 'Routines',
      src: habitto.image,
      alt: 'Habitto Routine Tracker Screen'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      src: '/statistics.jpg',
      alt: 'Habitto Analytics & Trends Screen'
    },
    {
      id: 'achievements',
      label: 'Badges',
      src: '/habitto/achievements.jpg',
      alt: 'Habitto Gamification & Badges Screen'
    }
  ];

  const handleNextScreen = () => {
    setActiveHabittoScreen((prev) => (prev + 1) % habittoScreens.length);
  };

  const handleHabittoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && habitto.primaryLink.href.startsWith('/')) {
      e.preventDefault();
      onNavigate(habitto.primaryLink.href);
    }
  };

  const handleTodoistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && todoist.primaryLink.href.startsWith('/')) {
      e.preventDefault();
      onNavigate(todoist.primaryLink.href);
    }
  };

  return (
    <section className="section section-work" id="work">
      <div className="container">
        <div className="section-heading reveal" ref={revealHeader}>
          <div>
            <span className="eyebrow">{selectedWork.eyebrow}</span>
            <h2>{selectedWork.title}</h2>
          </div>
          <p>{selectedWork.description}</p>
        </div>

        <div className="showcase-stack">
          {/* ============================================================ */}
          {/* 01 — HABITTO SHOWCASE (Product-oriented & Visual)            */}
          {/* ============================================================ */}
          <article className="showcase-item showcase-habitto reveal" ref={revealHabitto}>
            <div className="showcase-content">
              <div className="showcase-meta">
                <span className="showcase-label">{habitto.label}</span>
                <span className="showcase-category">{habitto.category}</span>
              </div>

              <h3 className="showcase-headline">{habitto.headline}</h3>
              <p className="showcase-description">{habitto.description}</p>

              <div className="tag-list" aria-label="Habitto technologies">
                {habitto.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>{tag}</span>
                ))}
              </div>

              <div className="showcase-actions">
                <a 
                  className="button button-primary" 
                  href={habitto.primaryLink.href}
                  onClick={handleHabittoClick}
                >
                  <span>{habitto.primaryLink.label}</span>
                  <ArrowRight size={16} className="cta-arrow" />
                </a>
                <a 
                  className="button button-secondary" 
                  href={habitto.secondaryLink.href} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <span>{habitto.secondaryLink.label}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="showcase-visual showcase-visual-habitto">
              <div className="habitto-visual-container">
                {/* Left Flank: 3 Engineering Annotations Stack */}
                <div className="habitto-annotations-stack" aria-hidden="true">
                  <div className="habitto-annotation">
                    <div className="annot-indicator">
                      <span className="annot-node"></span>
                      <span className="annot-line annot-line-h"></span>
                    </div>
                    <div className="annot-text">
                      <span className="annot-label">LOCAL-FIRST</span>
                      <span className="annot-meta">Hive · On-device</span>
                    </div>
                  </div>

                  <div className="habitto-annotation">
                    <div className="annot-indicator">
                      <span className="annot-node"></span>
                      <span className="annot-line annot-line-h"></span>
                    </div>
                    <div className="annot-text">
                      <span className="annot-label">PRIVACY</span>
                      <span className="annot-meta">No account · No cloud</span>
                    </div>
                  </div>

                  <div className="habitto-annotation">
                    <div className="annot-indicator">
                      <span className="annot-node"></span>
                      <span className="annot-line annot-line-h"></span>
                    </div>
                    <div className="annot-text">
                      <span className="annot-label">SCHEDULING</span>
                      <span className="annot-meta">5 recurrence models</span>
                    </div>
                  </div>
                </div>

                {/* Right Flank: Vertical Module Switcher */}
                <div className="habitto-screen-tabs-v" role="tablist" aria-label="Habitto screen preview selector">
                  <span className="tabs-v-title" aria-hidden="true">MODULES</span>
                  {habittoScreens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      type="button"
                      role="tab"
                      aria-selected={activeHabittoScreen === idx}
                      className={`habitto-screen-tab-v ${activeHabittoScreen === idx ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHabittoScreen(idx);
                      }}
                    >
                      <span className="tab-v-indicator"></span>
                      <span>{screen.label}</span>
                    </button>
                  ))}
                </div>

                {/* Center: Sleek Phone Mockup */}
                <div className="habitto-mockup-frame">
                  <div 
                    className="habitto-phone-frame"
                    onClick={handleNextScreen}
                    title="Click to view next screen"
                  >
                    <div className="phone-top-bar" aria-hidden="true">
                      <span className="phone-camera-dot"></span>
                    </div>
                    <div className="phone-inner-screen">
                      <img 
                        key={habittoScreens[activeHabittoScreen].id}
                        src={habittoScreens[activeHabittoScreen].src} 
                        alt={habittoScreens[activeHabittoScreen].alt} 
                        className="habitto-app-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="habitto-badge">
                    <span className="habitto-status-dot"></span>
                    <span>Android Release v1.1.0</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 02 — TODOIST SHOWCASE (System-oriented & Architectural)      */}
          {/* ============================================================ */}
          <article className="showcase-item showcase-todoist reveal" ref={revealTodoist}>
            <div className="showcase-content">
              <div className="showcase-meta">
                <span className="showcase-label">{todoist.label}</span>
                <span className="showcase-category">{todoist.category}</span>
              </div>

              <h3 className="showcase-headline">{todoist.headline}</h3>
              <p className="showcase-description">{todoist.description}</p>

              {todoist.highlight && (
                <div className="showcase-highlight-pill">
                  <ShieldCheck size={15} className="highlight-icon" />
                  <span>{todoist.highlight}</span>
                </div>
              )}

              <div className="tag-list" aria-label="Todoist Bridge technologies">
                {todoist.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>{tag}</span>
                ))}
              </div>

              <div className="showcase-actions">
                <a 
                  className="button button-primary" 
                  href={todoist.primaryLink.href}
                  onClick={handleTodoistClick}
                >
                  <span>{todoist.primaryLink.label}</span>
                  <ArrowRight size={16} className="cta-arrow" />
                </a>
                <a 
                  className="button button-secondary" 
                  href={todoist.secondaryLink.href} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <span>{todoist.secondaryLink.label}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="showcase-visual showcase-visual-todoist">
              <div className="architecture-canvas" aria-label="MCP Architecture Diagram Preview">
                <div className="arch-header">
                  <div className="arch-header-left">
                    <span className="arch-dot red"></span>
                    <span className="arch-dot yellow"></span>
                    <span className="arch-dot green"></span>
                    <span className="arch-title">mcp-server-todoist · local stdio</span>
                  </div>
                  <span className="arch-tag">Protocol Flow</span>
                </div>

                <div className="arch-flow">
                  {/* Layer 1: Client Host */}
                  <div className="arch-node arch-node-client">
                    <div className="arch-node-icon">
                      <Terminal size={16} />
                    </div>
                    <div className="arch-node-meta">
                      <strong>Claude Desktop / AI Host</strong>
                      <span>Model Context Protocol Client</span>
                    </div>
                  </div>

                  <div className="arch-connector arch-connector-1">
                    <ArrowDown size={14} className="connector-arrow" />
                    <span className="connector-label">Local stdio / JSON-RPC 2.0</span>
                  </div>

                  {/* Layer 2: MCP Core Bridge */}
                  <div className="arch-node arch-node-server">
                    <div className="arch-node-icon">
                      <Cpu size={16} />
                    </div>
                    <div className="arch-node-meta">
                      <div className="arch-node-heading">
                        <strong>Todoist MCP Server</strong>
                        <span className="arch-badge-live">FastMCP Core</span>
                      </div>
                      <div className="arch-tool-chips">
                        <code>create_task</code>
                        <code>list_tasks</code>
                        <code>complete_task</code>
                      </div>
                    </div>
                  </div>

                  <div className="arch-connector arch-connector-2">
                    <ArrowDown size={14} className="connector-arrow" />
                    <span className="connector-label">REST API v2 / OAuth 2.0</span>
                  </div>

                  {/* Layer 3: Target System */}
                  <div className="arch-node arch-node-api">
                    <div className="arch-node-icon">
                      <Layers size={16} />
                    </div>
                    <div className="arch-node-meta">
                      <strong>Todoist Cloud API</strong>
                      <span>Projects · Tasks · Labels · Webhooks</span>
                    </div>
                  </div>
                </div>

                <div className="arch-footer">
                  <div className="arch-footer-item">
                    <CheckCircle2 size={13} className="check-icon" />
                    <span>114 Pytest Automated Tests</span>
                  </div>
                  <div className="arch-footer-item">
                    <Workflow size={13} className="check-icon" />
                    <span>Strict Pydantic Validation</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
