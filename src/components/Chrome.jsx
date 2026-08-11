import { useEffect, useState } from 'react';
import Icon from './Icon';

/** Gold reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setRatio(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="progress" aria-hidden="true" style={{ transform: `scaleX(${ratio})` }} />;
}

export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      className={`to-top${shown ? ' is-shown' : ''}`}
      aria-label="Back to top"
      onClick={toTop}
      type="button"
    >
      <Icon name="arrowUp" strokeWidth={2} />
    </button>
  );
}
