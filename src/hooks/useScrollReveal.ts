import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Make visible immediately if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('visible');
      node.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '50px 0px' }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [threshold]);

  return ref;
}
