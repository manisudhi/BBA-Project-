import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Adds `is-visible` the first time the element scrolls into view.
 * SSR-safe: markup renders identically on the server, the class is added
 * only in the browser. `delay` staggers items within a group.
 */
export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return {
    ref,
    className: visible ? 'is-visible' : '',
    style: delay ? { transitionDelay: `${delay}ms` } : undefined,
  };
}

/**
 * Wraps children in a revealing element.
 *
 *   <Reveal as="section" dir="left" className="card">…</Reveal>
 *
 * `dir` maps to the data-reveal variants defined in the stylesheet:
 * undefined (up), "left", "right" or "zoom".
 */
export default function Reveal({
  as: Tag = 'div',
  dir,
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const r = useReveal(delay);
  return (
    <Tag
      ref={r.ref}
      data-reveal={dir || ''}
      className={[className, r.className].filter(Boolean).join(' ')}
      style={{ ...r.style, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Staggers any <Reveal> children by `step` milliseconds, mirroring the
 * data-stagger behaviour of the original static build.
 */
export function Stagger({ step = 90, children, ...rest }) {
  const items = Children.toArray(children);
  return (
    <div {...rest}>
      {items.map((child, i) =>
        isValidElement(child) ? cloneElement(child, { key: i, delay: i * step }) : child
      )}
    </div>
  );
}
