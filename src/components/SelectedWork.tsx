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
  const byId = (id: string) => selectedWork.projects.find((project) => project.id === id)!;
  const plugvan = byId('plugvan');
  const bookshelf = byId('bookshelf');
  const zombie = byId('zombie');

  const statusLabel = (status: string) => (status === 'shipped' ? 'Shipped' : 'In progress');
  const statusDotClass = (status: string) => (status === 'shipped' ? 'status-dot-active' : 'status-dot-planning');

  const [expanded, setExpanded] = React.useState<string | null>(null);
  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  const [activeBookshelfScreen, setActiveBookshelfScreen] = React.useState(0);

  const bookshelfScreens = [
    {
      id: 'shelf',
      label: 'Shelf',
      src: '/bookshelf/shelf-view.jpg',
      alt: 'BookShelf dynamic bookshelf-style view'
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

  const handlePlugvanClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && plugvan.primaryLink.href.startsWith('/')) {
      e.preventDefault();
      onNavigate(plugvan.primaryLink.href);
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
          {/* 01 — BOOKSHELF                                                */}
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
              <span className="index-row-status project-row-status">
                <span className={`status-dot ${statusDotClass(bookshelf.status)}`} aria-hidden="true" />
                {statusLabel(bookshelf.status)}
              </span>
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
                      {bookshelf.secondaryLink && (
                        <a
                          className="button button-secondary"
                          href={bookshelf.secondaryLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{bookshelf.secondaryLink.label}</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
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
                        <span>Tested in CI · Supabase RLS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 02 — PLUGVAN                                                  */}
          {/* ============================================================ */}
          <article className={`project-row ${expanded === 'plugvan' ? 'open' : ''}`}>
            <button
              type="button"
              className="project-row-header"
              onClick={() => toggle('plugvan')}
              aria-expanded={expanded === 'plugvan'}
              aria-controls="panel-plugvan"
            >
              <span className="project-row-num">{plugvan.index}</span>
              <span className="project-row-name">{plugvan.title}</span>
              <span className="project-row-leader" aria-hidden="true"></span>
              <span className="project-row-category">{plugvan.category}</span>
              <span className="index-row-status project-row-status">
                <span className={`status-dot ${statusDotClass(plugvan.status)}`} aria-hidden="true" />
                {statusLabel(plugvan.status)}
              </span>
              <ChevronDown size={18} className="project-row-chevron" aria-hidden="true" />
            </button>

            <div className={`project-row-panel ${expanded === 'plugvan' ? 'open' : ''}`} id="panel-plugvan">
              <div className="project-row-panel-inner">
                <div className="project-row-grid">
                  <div className="showcase-content">
                    <h3 className="showcase-headline">{plugvan.headline}</h3>
                    <p className="showcase-description">{plugvan.description}</p>

                    {plugvan.highlight && (
                      <div className="showcase-highlight-pill">
                        <ShieldCheck size={15} className="highlight-icon" />
                        <span>{plugvan.highlight}</span>
                      </div>
                    )}

                    <div className="tag-list" aria-label="Plugvan technologies">
                      {plugvan.tags.map((tag, idx) => (
                        <span className="tag" key={idx}>{tag}</span>
                      ))}
                    </div>

                    <div className="showcase-actions">
                      <a
                        className="button button-primary"
                        href={plugvan.primaryLink.href}
                        onClick={handlePlugvanClick}
                      >
                        <span>{plugvan.primaryLink.label}</span>
                        <ArrowRight size={16} className="cta-arrow" />
                      </a>
                      {plugvan.secondaryLink && (
                        <a
                          className="button button-secondary"
                          href={plugvan.secondaryLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{plugvan.secondaryLink.label}</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="showcase-visual showcase-visual-plugvan">
                    <div className="architecture-canvas" aria-label="MCP Architecture Diagram Preview">
                      <div className="arch-header">
                        <div className="arch-header-left">
                          <span className="arch-dot red"></span>
                          <span className="arch-dot yellow"></span>
                          <span className="arch-dot green"></span>
                          <span className="arch-title">plugvan.todoist · local stdio</span>
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
                          <span className="connector-label">Local stdio</span>
                        </div>

                        <div className="arch-node arch-node-server">
                          <div className="arch-node-icon">
                            <Cpu size={16} />
                          </div>
                          <div className="arch-node-meta">
                            <div className="arch-node-heading">
                              <strong>Plugvan MCP Server</strong>
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
                          <span className="connector-label">Todoist API v1 / API token auth</span>
                        </div>

                        <div className="arch-node arch-node-api">
                          <div className="arch-node-icon">
                            <Layers size={16} />
                          </div>
                          <div className="arch-node-meta">
                            <strong>Todoist Cloud API</strong>
                            <span>Projects · Tasks · Labels</span>
                          </div>
                        </div>
                      </div>

                      <div className="arch-footer">
                        <div className="arch-footer-item">
                          <CheckCircle2 size={13} className="check-icon" />
                          <span>Hermetic pytest suite, CI on Python 3.10–3.14 and Windows</span>
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
          {/* 03 — ZOMBIEBARRICADEIDLE                                      */}
          {/* ============================================================ */}
          <article className={`project-row ${expanded === 'zombie' ? 'open' : ''}`}>
            <button
              type="button"
              className="project-row-header"
              onClick={() => toggle('zombie')}
              aria-expanded={expanded === 'zombie'}
              aria-controls="panel-zombie"
            >
              <span className="project-row-num">{zombie.index}</span>
              <span className="project-row-name">{zombie.title}</span>
              <span className="project-row-leader" aria-hidden="true"></span>
              <span className="project-row-category">{zombie.category}</span>
              <span className="index-row-status project-row-status">
                <span className={`status-dot ${statusDotClass(zombie.status)}`} aria-hidden="true" />
                {statusLabel(zombie.status)}
              </span>
              <ChevronDown size={18} className="project-row-chevron" aria-hidden="true" />
            </button>

            <div className={`project-row-panel ${expanded === 'zombie' ? 'open' : ''}`} id="panel-zombie">
              <div className="project-row-panel-inner">
                <div className="project-row-grid single-col">
                  <div className="showcase-content">
                    <h3 className="showcase-headline">{zombie.headline}</h3>
                    <p className="showcase-description">{zombie.description}</p>

                    <div className="tag-list" aria-label="ZombieBarricadeIdle technologies">
                      {zombie.tags.map((tag, idx) => (
                        <span className="tag" key={idx}>{tag}</span>
                      ))}
                    </div>

                    <div className="showcase-actions">
                      <a
                        className="button button-primary"
                        href={zombie.primaryLink.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{zombie.primaryLink.label}</span>
                        <ExternalLink size={14} />
                      </a>
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
