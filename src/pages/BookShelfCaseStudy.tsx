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
  ZoomIn,
  Share2,
  WifiOff,
  ArrowLeftRight
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
            <span className="case-version-pill">Shipped · Deployed on Netlify</span>
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
                Scan a book&apos;s barcode to add it. Ask an AI assistant about your own shelf.
              </p>
              <p className="case-hero-lead">
                BookShelf is a bilingual (Turkish/English) React app for logging, organizing, and browsing a home library. Books are added by scanning a barcode with the camera, searching by title, or entering them manually. They live on a bookshelf-style view with category-colored spines, alongside card and table views and a reading dashboard. A Gemini-powered assistant answers questions about the user&apos;s own books.
              </p>

              <div className="case-tech-strip">
                <span className="tech-chip">React 19</span>
                <span className="tech-chip">Vite</span>
                <span className="tech-chip">Supabase</span>
                <span className="tech-chip">Gemini API</span>
                <span className="tech-chip">react-i18next</span>
                <span className="tech-chip">zxing-wasm</span>
              </div>

              <div className="case-stat-row">
                <div className="case-stat-chip">
                  <strong>Shipped</strong>
                  <span>Deployed on Netlify</span>
                </div>
                <div className="case-stat-chip">
                  <strong>TR / EN</strong>
                  <span>Turkish and English UI; a test fails if the two locale files drift apart.</span>
                </div>
                <div className="case-stat-chip">
                  <strong>Tested at three levels: components and hooks, RLS integration tests, static security checks</strong>
                  <span>Vitest, React Testing Library, GitHub Actions</span>
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
                <a
                  className="button button-secondary"
                  href="https://github.com/kagankurubas/bookshelf/releases"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Releases</span>
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="section-lead" style={{ marginTop: '12px', fontSize: '0.84rem' }}>
                Create a free account to try it. The AI assistant shares a small daily free-tier quota across all users, so it can be busy.
              </p>
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
                Three ways to browse the same library. The shelf, card, and table views all read from the same book data.
              </p>
            </div>

            <div className="bs-tour-dominant reveal" onClick={() => setLightboxImg('/bookshelf/shelf-view.jpg')}>
              <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
              <img src="/bookshelf/shelf-view.jpg" alt="A bookshelf-style view. Category-colored spines, shelves that grow to fit your books, and drag-and-drop reordering." className="bs-tour-img bs-tour-img-shelf" loading="lazy" />
              <div className="bs-tour-caption">
                <strong>Dynamic Bookshelf</strong>
                <span>A bookshelf-style view. Category-colored spines, shelves that grow to fit your books, and drag-and-drop reordering.</span>
              </div>
            </div>

            <div className="bs-tour-grid reveal">
              <div className="bs-tour-card" onClick={() => setLightboxImg('/bookshelf/cards-view.jpg')}>
                <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
                <img src="/bookshelf/cards-view.jpg" alt="BookShelf card grid view of a library" className="bs-tour-img bs-tour-img-cards" loading="lazy" />
                <div className="bs-tour-caption">
                  <strong>Cards View</strong>
                  <span>Covers, ratings, and reading status at a glance.</span>
                </div>
              </div>
              <div className="bs-tour-card" onClick={() => setLightboxImg('/bookshelf/table-view.jpg')}>
                <span className="bs-zoom-badge"><ZoomIn size={13} /></span>
                <img src="/bookshelf/table-view.jpg" alt="BookShelf filterable table view" className="bs-tour-img bs-tour-img-table" loading="lazy" />
                <div className="bs-tour-caption">
                  <strong>Table View</strong>
                  <span>Search and filter by title, author, category, and status. Notes and tags are searchable too.</span>
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
                Books are added by camera scan, searched by title, entered manually, or imported from Goodreads and StoryGraph, then organized across libraries and shelves.
              </p>
            </div>

            <div className="bs-feature-grid reveal">
              <div className="bs-feature-card">
                <div className="bs-feature-icon"><ScanLine size={18} /></div>
                <strong>Barcode Fast Add</strong>
                <p>Single or batch camera barcode scanning, decoded in the browser with zxing-wasm. ISBNs resolve through the Open Library API. Title search and manual entry take over when a lookup fails or the device is offline.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Library size={18} /></div>
                <strong>Multiple Libraries</strong>
                <p>Books are organized into separate libraries. The first one becomes the main library. The app won&apos;t delete it, and every book the app adds or edits is linked to it, so deleting another library never orphans its books.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><LayoutGrid size={18} /></div>
                <strong>Cards · Table · Shelf</strong>
                <p>The same library is browsable as cards, a searchable table, and the shelf visualization.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><BarChart3 size={18} /></div>
                <strong>Reading Dashboard</strong>
                <p>Yearly and monthly reading trends, total books and pages read, average rating, and a category breakdown chart, filterable by year.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Share2 size={18} /></div>
                <strong>Reading Recap</strong>
                <p>A month or a year of finished books becomes a shareable image, either a square shelf card or a calendar, rendered in the browser.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><WifiOff size={18} /></div>
                <strong>Installable &amp; Offline</strong>
                <p>A PWA with offline support: the app shell and cover images are cached, and books added offline wait in a per-user queue and sync once the connection is back.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><ArrowLeftRight size={18} /></div>
                <strong>Import &amp; Export</strong>
                <p>The whole library exports as CSV or JSON. Goodreads and StoryGraph imports show a preview, with duplicate detection, before anything is added.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Sparkles size={18} /></div>
                <strong>AI Reading Assistant</strong>
                <p>A Gemini-powered chat panel recommends books and answers questions grounded in the user&apos;s own library (title, author, category, status, rating for a bounded slice of the shelf). It replies in the language the user writes in, falling back to the UI language.</p>
              </div>

              <div className="bs-feature-card">
                <div className="bs-feature-icon"><Languages size={18} /></div>
                <strong>Full TR / EN Localization</strong>
                <p>Turkish and English UI through react-i18next. A test keeps the two locale files in key parity.</p>
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
                The client calls a Supabase Edge Function. It authenticates the caller, consumes from a daily quota (a single app-wide counter that protects the free-tier Gemini limit), reads that user&apos;s books from Postgres through the caller&apos;s own session, and only then calls Gemini. Row Level Security keeps the context to the requesting user&apos;s rows, never someone else&apos;s.
              </p>

              <div className="bs-flow-row">
                <div className="bs-flow-pill">UI</div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-pill">
                  <Lock size={13} />
                  <span>Edge Function (auth + quota)</span>
                </div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-pill">Postgres (RLS-bound read)</div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-pill bs-flow-pill-accent">Gemini API</div>
                <ArrowRight size={16} className="bs-flow-arrow" />
                <div className="bs-flow-pill">Reply</div>
              </div>

              <p className="section-lead" style={{ marginTop: '20px' }}>
                If Gemini never answers, the quota unit is refunded, and a busy state reaches the UI as its own status rather than a raw error. The quota table has RLS enabled and no policies on purpose: its counters are reachable only through security-definer functions granted to the service role.
              </p>
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
              <h2 className="section-title">Per-user isolation is enforced in the database.</h2>
              <p className="section-lead">
                Libraries, books, and chat history are scoped per account through Postgres Row Level Security rather than application-level filtering alone.
              </p>
            </div>

            <div className="bs-security-grid reveal">
              <div className="bs-security-card">
                <ShieldCheck size={18} className="bs-security-icon" />
                <strong>Row Level Security Policies</strong>
                <p>Every user-owned table has Row Level Security enabled with an ownership policy. Tables with a user_id compare it to auth.uid(). Child tables (notes, book-library links, AI messages) check ownership through their parent with an EXISTS subquery. The one deliberate exception is the AI quota table: RLS on, zero policies. Dashboard statistics are security-invoker functions, so they run under the caller&apos;s RLS. A query made with a user&apos;s session can only return that user&apos;s rows.</p>
              </div>
              <div className="bs-security-card">
                <Library size={18} className="bs-security-icon" />
                <strong>Protected Main Library</strong>
                <p>The first library a user creates becomes a main library the app won't delete, and every book the app adds or edits is linked to it, so deleting another library doesn't orphan those books.</p>
              </div>
              <div className="bs-security-card">
                <Lock size={18} className="bs-security-icon" />
                <strong>Server-Side AI Key</strong>
                <p>The Gemini API key lives only in the Edge Function environment. The client bundle carries just the Supabase URL and anon key.</p>
              </div>
            </div>

            <p className="section-lead reveal" style={{ marginTop: '28px' }}>
              Service-role clients exist in exactly two Edge Functions: AI quota accounting and account deletion.
            </p>
            <p className="section-lead reveal" style={{ marginTop: '12px' }}>
              Per-user accounts arrived through a staged three-step migration (003 to 005) on top of the original single-user schema.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 — VERIFICATION & DELIVERY                                 */}
        {/* ============================================================ */}
        <section className="case-section bs-section-tint" id="testing" ref={revealTesting}>
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">VERIFICATION & DELIVERY</span>
              <h2 className="section-title">Tests are layered by what they protect. CI runs on pushes to main and on pull requests that target main.</h2>
              <p className="section-lead">
                Vitest and React Testing Library cover the core hooks, drag-and-drop shelf logic, and the AI chat flow, run by GitHub Actions alongside lint, build, static security checks, and RLS integration tests against a local Supabase.
              </p>
            </div>

            <div className="bs-test-list reveal">
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>Components and hooks</strong>
                  <span>Vitest and React Testing Library on jsdom cover the core hooks (library, shelf, reading stats, add-book flow, AI chat, offline queue) and the main screens. Shelf drag-and-drop covers reordering and cross-shelf movement. The AI chat tests cover request/response handling and history. Library code (Open Library client, import/export, offline queue, recap, error classification) has its own unit tests, and one test enforces TR/EN key parity.</span>
                </div>
              </div>
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>RLS integration tests</strong>
                  <span>A second CI job boots a local Supabase stack, serves the Edge Functions against a fake Gemini server, and runs tests that prove cross-user isolation for libraries, books, book-library links, notes, AI chat, quota and book writes, including the Gemini retry path. Credentials come from that run&apos;s own status output; no repository secrets are used.</span>
                </div>
              </div>
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>Static security checks</strong>
                  <span>A CI step fails the build on missing RLS, leaked secrets, unguarded quota paths, integration tests that could reach a non-local Supabase, and unsafe SQL patterns in migrations and source.</span>
                </div>
              </div>
              <div className="bs-test-row">
                <span className="bs-test-check"><Check size={14} /></span>
                <div className="bs-test-meta">
                  <strong>Continuous integration</strong>
                  <span>GitHub Actions runs lint, tests, build and the static security checks in one job, and the RLS integration tests in another.</span>
                </div>
              </div>
            </div>

            <p className="section-lead reveal" style={{ marginTop: '20px' }}>
              Not automated: browser-level end-to-end tests (the camera scanner is mocked at its boundary), and Edge Function deployment, which is done by hand through the Supabase dashboard.
            </p>
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
                A full-stack personal library app built around camera-based cataloging of physical books.
              </p>

              <div className="release-spec-sheet">
                <div className="spec-row">
                  <span className="spec-label">DOMAIN</span>
                  <strong>Full-Stack / AI Engineering</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">TECH STACK</span>
                  <span>React 19 and Vite (plain JavaScript/JSX client); Supabase Postgres, Auth and RLS; TypeScript Edge Functions on Deno; Gemini API; react-i18next; zxing-wasm; Open Library API.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">VERIFICATION</span>
                  <span>Vitest and React Testing Library component tests, RLS integration tests against a local Supabase stack, and static security checks, all run in GitHub Actions.</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">DEPLOYMENT</span>
                  <span>Client on Netlify, Edge Functions deployed via the Supabase dashboard. Designed to run entirely on the free tiers of Supabase and Gemini.</span>
                </div>
              </div>

              <p className="release-lead" style={{ marginTop: '24px' }}>
                Design decisions are recorded as ADRs in the repository.
              </p>

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
