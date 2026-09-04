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
  ArrowDown,
  ChevronDown
} from 'lucide-react';
import './SelectedWork.css';

interface SelectedWorkProps {
  onNavigate?: (path: string, hash?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onNavigate }) => {
  const revealHeader = useScrollReveal();
  const revealList = useScrollReveal(0.1);

  const { selectedWork } = siteData;
  const habitto = selectedWork.projects[0];
  const todoist = selectedWork.projects[1];
  const bookshelf = selectedWork.projects[2];

  const [expanded, setExpanded] = React.useState<string | null>(null);
  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

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

  const [activeBookshelfScreen, setActiveBookshelfScreen] = React.useState(0);

  const bookshelfScreens = [
    {
      id: 'shelf',
      label: 'Shelf',
      src: '/bookshelf/shelf-view.jpg',
      alt: 'BookShelf dynamic wooden bookshelf view'
    },
    {
      id: 'cards',
      label: 'Cards',
      src: '/bookshelf/cards-view.jpg',
      alt: 'BookShelf card grid view of a library'
    },
    {
      id: 'table',
      label: 'Table',
      src: '/bookshelf/table-view.jpg',
      alt: 'BookShelf filterable table view'
    },
    {
      id: 'chat',
      label: 'AI Chat',
      src: '/bookshelf/ai-chat.jpg',
      alt: 'BookShelf AI Book Assistant chat panel'
    }
  ];

  const handleNextBookshelfScreen = () => {
    setActiveBookshelfScreen((prev) => (prev + 1) % bookshelfScreens.length);
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

  const handleBookshelfClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && bookshelf.primaryLink.href.startsWith('/')) {
      e.preventDefault();
      onNavigate(bookshelf.primaryLink.href);
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

        <div className="project-index reveal" ref={revealList}>
          {/* ============================================================ */}
          {/* 01 — HABITTO                                                  */}
          {/* ============================================================ */}
          <article className={`project-row ${expanded === 'habitto' ? 'open' : ''}`}>
            <button
              type="button"
              className="project-row-header"
              onClick={() => toggle('habitto')}
              aria-expanded={expanded === 'habitto'}
              aria-controls="panel-habitto"
            >
              <span className="project-row-num">{habitto.index}</span>
              <span className="project-row-name">{habitto.title}</span>
              <span className="project-row-leader" aria-hidden="true"></span>
              <span className="project-row-category">{habitto.category}</span>
              <ChevronDown size={18} className="project-row-chevron" aria-hidden="true" />
            </button>

            <div className={`project-row-panel ${expanded === 'habitto' ? 'open' : ''}`} id="panel-habitto">
              <div className="project-row-panel-inner">
                <div className="project-row-grid">
                  <div className="showcase-content">
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
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 02 — TODOIST MCP BRIDGE                                       */}
          {/* ============================================================ */}
          <article className={`project-row ${expanded === 'todoist' ? 'open' : ''}`}>
            <button
              type="button"
              className="project-row-header"
              onClick={() => toggle('todoist')}
              aria-expanded={expanded === 'todoist'}
              aria-controls="panel-todoist"
            >
              <span className="project-row-num">{todoist.index}</span>
              <span className="project-row-name">{todoist.title}</span>
              <span className="project-row-leader" aria-hidden="true"></span>
              <span className="project-row-category">{todoist.category}</span>
              <ChevronDown size={18} className="project-row-chevron" aria-hidden="true" />
            </button>

            <div className={`project-row-panel ${expanded === 'todoist' ? 'open' : ''}`} id="panel-todoist">
              <div className="project-row-panel-inner">
                <div className="project-row-grid">
                  <div className="showcase-content">
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
                          <span>168 Pytest Automated Tests</span>
                        </div>
                        <div className="arch-footer-item">
                          <Workflow size={13} className="check-icon" />
                          <span>Strict Pydantic Validation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 03 — BOOKSHELF                                                */}
          {/* ============================================================ */}
          <article className={`project-row ${expanded === 'bookshelf' ? 'open' : ''}`}>
            <button
              type="button"
              className="project-row-header"
              onClick={() => toggle('bookshelf')}
              aria-expanded={expanded === 'bookshelf'}
              aria-controls="panel-bookshelf"
            >
              <span className="project-row-num">{bookshelf.index}</span>
              <span className="project-row-name">{bookshelf.title}</span>
              <span className="project-row-leader" aria-hidden="true"></span>
              <span className="project-row-category">{bookshelf.category}</span>
              <ChevronDown size={18} className="project-row-chevron" aria-hidden="true" />
            </button>

            <div className={`project-row-panel ${expanded === 'bookshelf' ? 'open' : ''}`} id="panel-bookshelf">
              <div className="project-row-panel-inner">
                <div className="project-row-grid">
                  <div className="showcase-content">
                    <h3 className="showcase-headline">{bookshelf.headline}</h3>
                    <p className="showcase-description">{bookshelf.description}</p>

                    {bookshelf.highlight && (
                      <div className="showcase-highlight-pill">
                        <ShieldCheck size={15} className="highlight-icon" />
                        <span>{bookshelf.highlight}</span>
                      </div>
                    )}

                    <div className="tag-list" aria-label="BookShelf technologies">
                      {bookshelf.tags.map((tag, idx) => (
                        <span className="tag" key={idx}>{tag}</span>
                      ))}
                    </div>

                    <div className="showcase-actions">
                      <a
                        className="button button-primary"
                        href={bookshelf.primaryLink.href}
                        onClick={handleBookshelfClick}
                      >
                        <span>{bookshelf.primaryLink.label}</span>
                        <ArrowRight size={16} className="cta-arrow" />
                      </a>
                      <a
                        className="button button-secondary"
                        href={bookshelf.secondaryLink.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{bookshelf.secondaryLink.label}</span>
                        <ExternalLink size={14} />
                      </a>
                      {bookshelf.demoLink && (
                        <a
                          className="button button-secondary"
                          href={bookshelf.demoLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{bookshelf.demoLink.label}</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="showcase-visual showcase-visual-bookshelf">
                    <div className="bs-browser-mockup">
                      <div className="bs-browser-topbar">
                        <div className="bs-browser-dots">
                          <span className="arch-dot red"></span>
                          <span className="arch-dot yellow"></span>
                          <span className="arch-dot green"></span>
                        </div>
                        <span className="bs-browser-url">yourbookshelf-app.netlify.app</span>
                      </div>

                      <div
                        className="bs-browser-screen"
                        onClick={handleNextBookshelfScreen}
                        title="Click to view next screen"
                      >
                        <img
                          key={bookshelfScreens[activeBookshelfScreen].id}
                          src={bookshelfScreens[activeBookshelfScreen].src}
                          alt={bookshelfScreens[activeBookshelfScreen].alt}
                          className={`bs-browser-img bs-browser-img-${bookshelfScreens[activeBookshelfScreen].id}`}
                          loading="lazy"
                        />
                      </div>

                      <div className="bs-browser-tabs" role="tablist" aria-label="BookShelf screen preview selector">
                        {bookshelfScreens.map((screen, idx) => (
                          <button
                            key={screen.id}
                            type="button"
                            role="tab"
                            aria-selected={activeBookshelfScreen === idx}
                            className={`bs-browser-tab ${activeBookshelfScreen === idx ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveBookshelfScreen(idx);
                            }}
                          >
                            {screen.label}
                          </button>
                        ))}
                      </div>

                      <div className="bs-browser-badge">
                        <span className="bs-browser-status-dot"></span>
                        <span>65 tests · Supabase RLS</span>
                      </div>
                    </div>
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
