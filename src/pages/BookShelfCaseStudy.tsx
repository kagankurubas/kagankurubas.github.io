import React from 'react';
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
  Terminal,
  Cpu,
  Lock,
  Server
} from 'lucide-react';
import './BookShelfCaseStudy.css';

interface BookShelfCaseStudyProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const BookShelfCaseStudy: React.FC<BookShelfCaseStudyProps> = ({ onNavigate }) => {
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
          <div className="container">
            <div className="case-hero-content reveal">
              <div className="case-meta-row">
                <span className="eyebrow">CASE STUDY · FULL-STACK / AI ENGINEERING</span>
              </div>

              <h1 className="case-hero-title">BookShelf</h1>
              <p className="case-hero-statement">
                Your personal library, catalogued in seconds and understood by AI.
              </p>
              <p className="case-hero-lead">
                A bilingual (Turkish/English) React application for logging, organizing, and browsing a home library — with camera barcode scanning for fast adding, a real bookshelf-style view, a reading statistics dashboard, and a Gemini-powered assistant that answers questions about the user's own books.
              </p>

              <div className="case-tech-strip">
                <span className="tech-chip">React 19</span>
                <span className="tech-chip">Vite</span>
                <span className="tech-chip">Supabase</span>
                <span className="tech-chip">Gemini API</span>
                <span className="tech-chip">react-i18next</span>
                <span className="tech-chip">html5-qrcode</span>
              </div>

              <div className="case-metrics-grid">
                <div className="case-metric-item">
                  <span className="metric-label">RELEASE</span>
                  <strong className="metric-val">v1.0.0 · Netlify</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">LOCALIZATION</span>
                  <strong className="metric-val">TR / EN Bilingual</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">DATA ISOLATION</span>
                  <strong className="metric-val">Supabase Row Level Security</strong>
                </div>
                <div className="case-metric-item">
                  <span className="metric-label">TESTING</span>
                  <strong className="metric-val">65 automated tests</strong>
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

        {/* ============================================================ */}
        {/* 02 — PRODUCT FEATURES                                        */}
        {/* ============================================================ */}
        <section className="case-section" id="features" ref={revealFeatures}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">PRODUCT SURFACE</span>
                <h2>Cataloging that gets out of the way.</h2>
              </div>
              <p>
                Books can be added by camera scan, searched by title, or entered manually, then browsed across three complementary views.
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
                <strong>Dynamic Bookshelf</strong>
                <p>A visual wooden shelf with category-colored spines. Shelf rows grow to fit however many books are placed on them, with drag-and-drop reordering.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><LayoutGrid size={18} /></div>
                <strong>Cards · Table · Shelf Views</strong>
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

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><ShieldCheck size={18} /></div>
                <strong>Isolated Accounts</strong>
                <p>Email/password sign-in through Supabase Auth, with every user's libraries, books, and chat history isolated by Row Level Security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 — AI READING ASSISTANT FLOW                               */}
        {/* ============================================================ */}
        <section className="case-section" id="assistant" ref={revealAssistant}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">AI READING ASSISTANT</span>
                <h2>The Gemini key never reaches the browser.</h2>
              </div>
              <p>
                Chat requests are grounded in the caller's own library and proxied through a server-side Supabase Edge Function before reaching the Gemini API.
              </p>
            </div>

            <div className="bs-flow-canvas reveal">
              <div className="bs-flow-bar">
                <div className="bs-flow-step">
                  <Terminal size={14} />
                  <span>Client — Book Assistant Chat UI</span>
                </div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-step">
                  <Lock size={14} />
                  <span>Supabase Edge Function (auth-checked)</span>
                </div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-step bs-flow-step-highlight">
                  <Cpu size={14} />
                  <span>Gemini API</span>
                </div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-step">
                  <Server size={14} />
                  <span>Postgres — library context + chat history</span>
                </div>
              </div>
              <p className="bs-flow-note">
                The Edge Function reads the requesting user's own books from Postgres to ground each answer, so recommendations and chat responses stay scoped to that user's actual library.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 — DATA & ACCESS                                           */}
        {/* ============================================================ */}
        <section className="case-section" id="security" ref={revealSecurity}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">DATA & ACCESS</span>
                <h2>Per-user isolation enforced at the database.</h2>
              </div>
              <p>
                Libraries, books, and chat history are scoped per account through Postgres Row Level Security rather than application-level filtering alone.
              </p>
            </div>

            <div className="bs-security-grid reveal">
              <div className="bs-security-card">
                <ShieldCheck size={16} className="bs-security-icon" />
                <div>
                  <strong>Row Level Security Policies</strong>
                  <p>Every table enforces ownership checks in Postgres, so a query can only ever return the requesting user's own rows.</p>
                </div>
              </div>
              <div className="bs-security-card">
                <Library size={16} className="bs-security-icon" />
                <div>
                  <strong>Protected Main Library</strong>
                  <p>The first library a user creates becomes a protected default that always holds every book, so nothing is orphaned if another library is deleted.</p>
                </div>
              </div>
              <div className="bs-security-card">
                <Lock size={16} className="bs-security-icon" />
                <div>
                  <strong>Server-Side AI Key</strong>
                  <p>The Gemini API key lives only in the Supabase Edge Function environment and is never shipped to the client bundle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 — VERIFICATION & DELIVERY                                 */}
        {/* ============================================================ */}
        <section className="case-section" id="testing" ref={revealTesting}>
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow">VERIFICATION & DELIVERY</span>
                <h2>65 automated tests, checked on every push.</h2>
              </div>
              <p>
                Vitest and React Testing Library cover the core hooks, drag-and-drop shelf logic, and the AI chat flow, run by GitHub Actions alongside lint and build.
              </p>
            </div>

            <div className="bs-test-matrix reveal">
              <div className="bs-test-row">
                <div className="bs-test-meta">
                  <code>hooks</code>
                  <span>Library, shelf, and reading-stats data hooks</span>
                </div>
                <span className="bs-test-status"><Check size={14} /> Verified</span>
              </div>
              <div className="bs-test-row">
                <div className="bs-test-meta">
                  <code>shelf drag-and-drop</code>
                  <span>Reordering and cross-shelf movement of books</span>
                </div>
                <span className="bs-test-status"><Check size={14} /> Verified</span>
              </div>
              <div className="bs-test-row">
                <div className="bs-test-meta">
                  <code>ai chat flow</code>
                  <span>Book Assistant request/response handling and history</span>
                </div>
                <span className="bs-test-status"><Check size={14} /> Verified</span>
              </div>
              <div className="bs-test-row">
                <div className="bs-test-meta">
                  <code>ci.yml</code>
                  <span>Lint, test, and build run automatically on every push</span>
                </div>
                <span className="bs-test-status"><Check size={14} /> Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — CLOSING SPEC SHEET                                      */}
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
    </div>
  );
};
