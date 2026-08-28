import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';
import {
  ArrowLeft,
  ExternalLink,
  ScanLine,
  Sparkles,
  LayoutGrid,
  BarChart3,
  Library,
  ShieldCheck,
  Languages,
  Check,
  ArrowRight,
  Lock,
  ZoomIn
} from 'lucide-react';
import './BookShelfCaseStudy.css';

interface BookShelfCaseStudyProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const BookShelfCaseStudy: React.FC<BookShelfCaseStudyProps> = ({ onNavigate }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  usePageMetadata({
    title: 'BookShelf — Personal Library & AI Reading Assistant | Kağan Kurubaş',
    description: 'Engineering case study of BookShelf, a personal book cataloging app with barcode-scan adding, a Gemini-powered AI reading assistant, and Supabase-backed accounts.',
    canonical: 'https://kagankurubas.github.io/projects/bookshelf',
    robots: 'index, follow',
    ogType: 'article',
    ogTitle: 'BookShelf — Personal Library & AI Reading Assistant | Kağan Kurubaş',
    ogDescription: 'Engineering case study of BookShelf, a personal book cataloging app with barcode-scan adding, a Gemini-powered AI reading assistant, and Supabase-backed accounts.',
    ogUrl: 'https://kagankurubas.github.io/projects/bookshelf',
    ogImage: 'https://kagankurubas.github.io/og/bookshelf.png',
    ogImageAlt: 'BookShelf — Personal Library & AI Reading Assistant Case Study',
    twitterCard: 'summary_large_image',
    twitterTitle: 'BookShelf — Personal Library & AI Reading Assistant | Kağan Kurubaş',
    twitterDescription: 'Engineering case study of BookShelf, a personal book cataloging app with barcode-scan adding, a Gemini-powered AI reading assistant, and Supabase-backed accounts.',
    twitterImage: 'https://kagankurubas.github.io/og/bookshelf.png',
    twitterImageAlt: 'BookShelf — Personal Library & AI Reading Assistant Case Study',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      'name': 'BookShelf',
      'programmingLanguage': 'TypeScript',
      'codeRepository': 'https://github.com/kagankurubas/bookshelf',
      'description': 'A personal book cataloging app with barcode scanning, a Gemini-powered AI reading assistant, and a bilingual (Turkish/English) interface.',
      'author': {
        '@type': 'Person',
        'name': 'Kağan Kurubaş',
        'url': 'https://kagankurubas.github.io/'
      }
    }
  });

  const revealHero = useScrollReveal(0.05);
  const revealTour = useScrollReveal(0.08);
  const revealFeatures = useScrollReveal(0.08);
  const revealAssistant = useScrollReveal(0.08);
  const revealSecurity = useScrollReveal(0.08);
  const revealTesting = useScrollReveal(0.08);
  const revealClosing = useScrollReveal(0.08);

  return (
    <div className="case-study-page bookshelf-case-study">
      {/* ============================================================ */}
      {/* CASE STUDY NAVIGATION HEADER                                 */}
      {/* ============================================================ */}
      <header className="case-study-header">
        <div className="container case-nav-inner">
          <button
            type="button"
            className="back-button"
            onClick={() => onNavigate('/', '#work')}
            aria-label="Back to Selected Work"
          >
            <ArrowLeft size={16} />
            <span>Selected Work</span>
          </button>

          <div className="case-header-meta">
            <span className="case-brand-tag">BookShelf</span>
            <span className="case-version-pill">v1.0.0 · Live on Netlify</span>
          </div>
        </div>
      </header>

      <main>
        {/* ============================================================ */}
        {/* 01 — HERO                                                    */}
        {/* ============================================================ */}
        <section className="case-section case-hero" ref={revealHero}>
          <div className="container case-hero-grid">
            <div className="case-hero-content reveal">
              <span className="eyebrow">CASE STUDY · FULL-STACK / AI ENGINEERING</span>

              <h1 className="case-hero-title">BookShelf</h1>
              <p className="case-hero-statement">
                Your personal library, catalogued in seconds and understood by AI.
              </p>
              <p className="case-hero-lead">
                A bilingual (Turkish/English) React app for logging, organizing, and browsing a home library — with camera barcode scanning for fast adding, a real bookshelf-style view, a reading dashboard, and a Gemini-powered assistant that answers questions about the user's own books.
              </p>

              <div className="case-tech-strip">
                <span className="tech-chip">React 19</span>
                <span className="tech-chip">Vite</span>
                <span className="tech-chip">Supabase</span>
                <span className="tech-chip">Gemini API</span>
                <span className="tech-chip">react-i18next</span>
                <span className="tech-chip">html5-qrcode</span>
              </div>

              <div className="case-stat-row">
                <div className="case-stat-chip">
                  <strong>v1.0.0</strong>
                  <span>Shipped on Netlify</span>
                </div>
                <div className="case-stat-chip">
                  <strong>TR / EN</strong>
                  <span>Fully bilingual</span>
                </div>
                <div className="case-stat-chip">
                  <strong>65 tests</strong>
                  <span>Vitest + RTL</span>
                </div>
              </div>

              <div className="case-hero-actions">
                <a
                  className="button button-primary"
                  href="https://yourbookshelf-app.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/kagankurubas/bookshelf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* HERO MEDIA — LIVE DEMO WALKTHROUGH */}
            <div className="case-hero-media reveal">
              <div className="bs-media-frame">
                <div className="bs-media-topbar">
                  <span className="bs-media-dot"></span>
                  <span className="bs-media-dot"></span>
                  <span className="bs-media-dot"></span>
                  <span className="bs-media-url">yourbookshelf-app.netlify.app</span>
                </div>
                <img
                  src="/bookshelf/demo.gif"
                  alt="BookShelf walkthrough: browsing views, the dynamic shelf, and the AI Book Assistant"
                  className="bs-media-img"
                  loading="eager"
                  onClick={() => setLightboxImg('/bookshelf/demo.gif')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 02 — PRODUCT TOUR (real screenshots)                         */}
        {/* ============================================================ */}
        <section className="case-section bs-section-tint" id="tour" ref={revealTour}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">PRODUCT TOUR</span>
              <h2 className="section-title">Three ways to browse the same library.</h2>
              <p className="section-lead">
                Cards, a filterable table, and a real wooden shelf all read from the same data, so switching views never means losing context.
              </p>
            </div>

            <div className="bs-tour-dominant reveal" onClick={() => setLightboxImg('/bookshelf/shelf-view.jpg')}>
              <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
              <img src="/bookshelf/shelf-view.jpg" alt="BookShelf dynamic wooden bookshelf view with drag-and-drop spines" className="bs-tour-img bs-tour-img-shelf" loading="lazy" />
              <div className="bs-tour-caption">
                <strong>Dynamic Bookshelf</strong>
                <span>Category-colored spines, shelves that grow to fit your books, drag-and-drop reordering</span>
              </div>
            </div>

            <div className="bs-tour-grid reveal">
              <div className="bs-tour-card" onClick={() => setLightboxImg('/bookshelf/cards-view.jpg')}>
                <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
                <img src="/bookshelf/cards-view.jpg" alt="BookShelf card grid view of a library" className="bs-tour-img bs-tour-img-cards" loading="lazy" />
                <div className="bs-tour-caption">
                  <strong>Cards View</strong>
                  <span>Covers, ratings, and status at a glance</span>
                </div>
              </div>
              <div className="bs-tour-card" onClick={() => setLightboxImg('/bookshelf/table-view.jpg')}>
                <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
                <img src="/bookshelf/table-view.jpg" alt="BookShelf filterable table view" className="bs-tour-img bs-tour-img-table" loading="lazy" />
                <div className="bs-tour-caption">
                  <strong>Table View</strong>
                  <span>Search and filter by title, author, category, status</span>
                </div>
              </div>
              <div className="bs-tour-card" onClick={() => setLightboxImg('/bookshelf/ai-chat.jpg')}>
                <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
                <img src="/bookshelf/ai-chat.jpg" alt="BookShelf AI Book Assistant chat panel" className="bs-tour-img bs-tour-img-chat" loading="lazy" />
                <div className="bs-tour-caption">
                  <strong>Book Assistant</strong>
                  <span>Recommendations grounded in the user's own shelf</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — PRODUCT FEATURES                                        */}
        {/* ============================================================ */}
        <section className="case-section" id="features" ref={revealFeatures}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">PRODUCT SURFACE</span>
              <h2 className="section-title">Cataloging that gets out of the way.</h2>
              <p className="section-lead">
                Books can be added by camera scan, searched by title, or entered manually, then organized across libraries and shelves.
              </p>
            </div>

            <div className="bs-feature-grid reveal">
              <div className="bs-feature-card">
                <div className="bs-feature-icon"><ScanLine size={18} /></div>
                <strong>Barcode Fast Add</strong>
                <p>Single or batch camera barcode scanning resolves titles through the Open Library API, with manual entry and title search as fallbacks.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Library size={18} /></div>
                <strong>Multiple Libraries</strong>
                <p>Books can be organized into separate libraries. The first one becomes a protected main library that always holds every book.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><LayoutGrid size={18} /></div>
                <strong>Cards · Table · Shelf</strong>
                <p>The same library surfaces as filterable cards, a searchable table, or the shelf visualization, depending on how the user wants to browse.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><BarChart3 size={18} /></div>
                <strong>Reading Dashboard</strong>
                <p>Yearly and monthly reading trends, total books and pages read, average rating, and a category breakdown chart, filterable by year.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Sparkles size={18} /></div>
                <strong>AI Reading Assistant</strong>
                <p>A Gemini-powered chat panel that recommends books and answers questions grounded in the user's own library, in their app language.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Languages size={18} /></div>
                <strong>Full TR / EN Localization</strong>
                <p>Every screen, including the AI assistant's replies, is localized across Turkish and English via react-i18next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — AI READING ASSISTANT                                    */}
        {/* ============================================================ */}
        <section className="case-section bs-section-tint" id="assistant" ref={revealAssistant}>
          <div className="container bs-assistant-grid">
            <div className="reveal">
              <span className="eyebrow">AI READING ASSISTANT</span>
              <h2 className="section-title">The Gemini key never reaches the browser.</h2>
              <p className="section-lead">
                Chat requests are grounded in the caller's own library and proxied through a server-side Supabase Edge Function before reaching the Gemini API. The Edge Function reads the requesting user's books from Postgres, so recommendations and answers stay scoped to that user's actual shelf — never someone else's.
              </p>

              <div className="bs-flow-row">
                <div className="bs-flow-pill">Book Assistant chat UI</div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-pill">
                  <Lock size={13} />
                  <span>Supabase Edge Function</span>
                </div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-pill bs-flow-pill-accent">Gemini API</div>
              </div>
            </div>

            <div
              className="bs-assistant-visual reveal"
              onClick={() => setLightboxImg('/bookshelf/ai-chat.jpg')}
            >
              <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
              <img src="/bookshelf/ai-chat.jpg" alt="BookShelf AI Book Assistant chat panel recommending a book" className="bs-tour-img bs-tour-img-chat" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 — DATA & ACCESS                                           */}
        {/* ============================================================ */}
        <section className="case-section" id="security" ref={revealSecurity}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">DATA & ACCESS</span>
              <h2 className="section-title">Per-user isolation enforced at the database.</h2>
              <p className="section-lead">
                Libraries, books, and chat history are scoped per account through Postgres Row Level Security rather than application-level filtering alone.
              </p>
            </div>

            <div className="bs-security-grid reveal">
              <div className="bs-security-card">
                <ShieldCheck size={18} className="bs-security-icon" />
                <strong>Row Level Security Policies</strong>
                <p>Every table enforces ownership checks in Postgres, so a query can only ever return the requesting user's own rows.</p>
              </div>
              <div className="bs-security-card">
                <Library size={18} className="bs-security-icon" />
                <strong>Protected Main Library</strong>
                <p>The first library a user creates becomes a protected default that always holds every book, so nothing is orphaned if another library is deleted.</p>
              </div>
              <div className="bs-security-card">
                <Lock size={18} className="bs-security-icon" />
                <strong>Server-Side AI Key</strong>
                <p>The Gemini API key lives only in the Supabase Edge Function environment and is never shipped to the client bundle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — VERIFICATION & DELIVERY                                 */}
        {/* ============================================================ */}
        <section className="case-section bs-section-tint" id="testing" ref={revealTesting}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">VERIFICATION & DELIVERY</span>
              <h2 className="section-title">65 automated tests, checked on every push.</h2>
              <p className="section-lead">
                Vitest and React Testing Library cover the core hooks, drag-and-drop shelf logic, and the AI chat flow, run by GitHub Actions alongside lint and build.
              </p>
            </div>

            <div className="bs-test-list reveal">
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>Data hooks</strong>
                  <span>Library, shelf, and reading-stats hooks</span>
                </div>
              </div>
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>Shelf drag-and-drop</strong>
                  <span>Reordering and cross-shelf movement of books</span>
                </div>
              </div>
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>AI chat flow</strong>
                  <span>Book Assistant request/response handling and history</span>
                </div>
              </div>
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>Continuous integration</strong>
                  <span>Lint, test, and build run automatically on every push</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07 — CLOSING SPEC SHEET                                      */}
        {/* ============================================================ */}
        <section className="case-section case-release" id="closing" ref={revealClosing}>
          <div className="container">
            <div className="release-closing-wrap reveal">
              <span className="eyebrow">SUMMARY</span>
              <h2 className="release-headline">BookShelf</h2>
              <p className="release-lead">
                A full-stack personal library app pairing fast physical-book cataloging with an AI assistant grounded in the user's own collection.
              </p>

              <div className="release-spec-sheet">
                <div className="spec-row">
                  <span className="spec-label">DOMAIN</span>
                  <strong>Full-Stack / AI Engineering</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">TECH STACK</span>
                  <span>React 19 · Vite · Supabase · Gemini API · react-i18next · html5-qrcode</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">VERIFICATION</span>
                  <span>65 Vitest + React Testing Library automated tests</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">DEPLOYMENT</span>
                  <span>Netlify, running on Supabase and Gemini free tiers</span>
                </div>
              </div>

              <div className="release-actions-row">
                <a
                  className="button button-primary"
                  href="https://yourbookshelf-app.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/kagankurubas/bookshelf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => onNavigate('/', '#work')}
                >
                  <ArrowLeft size={14} />
                  <span>Back to Selected Work</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* IMAGE LIGHTBOX MODAL                                         */}
      {/* ============================================================ */}
      {lightboxImg && (
        <div
          className="bs-lightbox-backdrop"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot"
        >
          <div className="bs-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Enlarged BookShelf screenshot" className="bs-lightbox-img" />
            <button
              type="button"
              className="bs-lightbox-close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close enlarged screenshot"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
