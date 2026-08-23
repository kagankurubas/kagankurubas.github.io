import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import './NotFoundPage.css';

interface NotFoundPageProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  usePageMetadata({
    title: '404 — Page Not Found | Kağan Kurubaş',
    description: "The page or case study you're looking for doesn't exist.",
    robots: 'noindex, nofollow',
    ogTitle: '404 — Page Not Found | Kağan Kurubaş',
    ogDescription: "The page or case study you're looking for doesn't exist.",
  });

  return (
    <div className="not-found-page">
      <header className="not-found-header">
        <div className="container not-found-nav-inner">
          <button 
            type="button" 
            className="not-found-back-button"
            onClick={() => onNavigate('/', '#work')}
            aria-label="Back to Selected Work"
          >
            <ArrowLeft size={16} />
            <span>Selected Work</span>
          </button>
        </div>
      </header>

      <main className="not-found-main">
        <div className="container not-found-card">
          <div>
            <span className="eyebrow">404</span>
          </div>

          <h1 className="not-found-title">
            Page not found.
          </h1>

          <p className="not-found-desc">
            The page or case study you're looking for doesn't exist.
          </p>

          <div className="not-found-actions">
            <button 
              type="button" 
              className="button button-primary"
              onClick={() => onNavigate('/', '#work')}
            >
              <ArrowLeft size={15} />
              <span>Back to Selected Work</span>
            </button>
            <button 
              type="button" 
              className="button button-secondary"
              onClick={() => onNavigate('/')}
            >
              <Home size={15} />
              <span>Home</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
