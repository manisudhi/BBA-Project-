import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Reveal, { useReveal } from './Reveal';
import { company, marqueeItems, stats as defaultStats, approach } from '../data/site';

/* ------------------------------------------------------------------ */
/* Small primitives                                                    */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, light, center }) {
  return (
    <span className={`eyebrow${light ? ' eyebrow--light' : ''}${center ? ' eyebrow--center' : ''}`}>
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, lead, center = true, light }) {
  return (
    <Reveal className={`sec-head${center ? ' center' : ''}`}>
      {eyebrow && <Eyebrow light={light} center={center}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

export function Checks({ items }) {
  return (
    <ul className="checks">
      {items.map((item, i) => (
        <li key={i}>
          <Icon name="check" strokeWidth={2.2} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArrowLink({ to, children }) {
  return (
    <Link className="link-arrow" to={to}>
      {children}
      <Icon name="arrow" strokeWidth={2} />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */

function Counter({ value, prefix = '', suffix = '', duration = 1500 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(`${prefix}${value}${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduce) return;

    setDisplay(`${prefix}0${suffix}`);

    let raf;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          let start = null;
          const tick = (ts) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(`${prefix}${Math.round(value * eased)}${suffix}`);
            if (p < 1) raf = window.requestAnimationFrame(tick);
          };
          raf = window.requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [value, prefix, suffix, duration]);

  return <span ref={ref}>{display}</span>;
}

export function StatsBand({ items = defaultStats, twoUp = false }) {
  return (
    <Reveal className="stats-band" dir="zoom">
      <div className={`stats${twoUp ? ' stats--2' : ''}`}>
        {items.map((s) => (
          <div className="stat" key={s.label}>
            <span className="num">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </span>
            <span className="lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee                                                             */
/* ------------------------------------------------------------------ */

export function Marquee({ items = marqueeItems }) {
  // Duplicated so the -50% keyframe loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Approach timeline                                                   */
/* ------------------------------------------------------------------ */

export function Timeline({ detailed = false, style }) {
  const r = useReveal();
  return (
    <div ref={r.ref} className={`timeline ${r.className}`} style={style}>
      {approach.map((step, i) => (
        <div className="step" key={step.title}>
          <div className="step-num">{i + 1}</div>
          <div>
            <h3>{detailed ? step.title : step.shortTitle || step.title}</h3>
            <p>{detailed ? step.long : step.short}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ accordion                                                       */
/* ------------------------------------------------------------------ */

function FaqItem({ q, a, isOpen, onToggle }) {
  const panel = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen && panel.current ? panel.current.scrollHeight : 0);
  }, [isOpen, a]);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-q" type="button" aria-expanded={isOpen} onClick={onToggle}>
        {q}
        <span className="sign" />
      </button>
      <div className="faq-a" style={{ height }}>
        <div ref={panel}>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ items, style }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <Reveal className="faq" style={style}>
      {items.map((item, i) => (
        <FaqItem
          key={item.q}
          {...item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Quote + CTA bands                                                   */
/* ------------------------------------------------------------------ */

export function Quote({ text = 'Delivering measurable impact — not just audit reports.' }) {
  return (
    <Reveal className="quote" dir="zoom">
      <p>{text}</p>
      <cite>{company.name}</cite>
    </Reveal>
  );
}

export function Cta({ eyebrow, title, text, primary, secondary }) {
  const renderBtn = (btn, className) => {
    if (!btn) return null;
    const inner = (
      <>
        {btn.label}
        {btn.arrow && <Icon name="arrow" strokeWidth={2} />}
      </>
    );
    if (btn.external) {
      return (
        <a className={className} href={btn.to} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    if (btn.to.startsWith('mailto:') || btn.to.startsWith('#')) {
      return <a className={className} href={btn.to}>{inner}</a>;
    }
    return <Link className={className} to={btn.to}>{inner}</Link>;
  };

  return (
    <Reveal className="cta">
      <div className="cta-inner">
        <div>
          {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="btn-row">
          {renderBtn(primary, 'btn btn--gold')}
          {renderBtn(secondary, 'btn btn--ghost-light')}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Page hero (inner pages)                                             */
/* ------------------------------------------------------------------ */

export function PageHero({ crumb, eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          {crumb}
        </div>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

export function IconCard({ icon, title, text, delay, children }) {
  return (
    <Reveal as="article" className="card" delay={delay}>
      {icon && (
        <div className="card-icon">
          <Icon name={icon} />
        </div>
      )}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {children}
    </Reveal>
  );
}

export function NumberCard({ n, title, text, delay }) {
  return (
    <Reveal as="article" className="card" delay={delay}>
      <span className="card-num">{n}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  );
}

export function FactCard({ h, p, delay }) {
  return (
    <Reveal as="article" className="card" delay={delay}>
      <h3>{h}</h3>
      <p>{p}</p>
    </Reveal>
  );
}
