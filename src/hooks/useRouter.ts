import { useState, useEffect, useCallback } from 'react';

/**
 * Normalizes the current window location into a clean canonical application path.
 * Canonical routes:
 *   - '/'
 *   - '/projects/habitto'
 *   - '/projects/todoist'
 */
function getNormalizedPath(): string {
  // Normalize single or multiple trailing slashes to canonical form (e.g. '/projects/habitto/' -> '/projects/habitto')
  const rawPath = window.location.pathname;
  const cleanPath = rawPath.replace(/\/+$/, '') || '/';

  // Handle hash-based fallbacks if direct access was routed via hash (e.g. #/projects/habitto)
  const hash = window.location.hash;
  if (hash === '#/projects/habitto' || hash === '#projects/habitto' || hash === '#/projects/habitto/') {
    return '/projects/habitto';
  }
  if (hash === '#/projects/todoist' || hash === '#projects/todoist' || hash === '#/projects/todoist/') {
    return '/projects/todoist';
  }

  // Exact canonical match
  if (cleanPath === '/projects/habitto') {
    return '/projects/habitto';
  }
  if (cleanPath === '/projects/todoist') {
    return '/projects/todoist';
  }
  if (cleanPath === '/') {
    return '/';
  }

  // Return the normalized unrecognized path for 404 handling
  return cleanPath;
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = useCallback((path: string, hash?: string) => {
    const targetUrl = path + (hash || '');
    if (window.location.pathname + window.location.hash !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
      setCurrentPath(getNormalizedPath());
      
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return { currentPath, navigate };
}
