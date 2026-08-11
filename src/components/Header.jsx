import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, company } from '../data/site';
import Icon from './Icon';

export default function Header({ ctaLabel = 'Book a consultation', ctaTo = '/contact' }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setStuck(window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation, Escape, or resize past the breakpoint.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 980 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const isCtaHash = ctaTo.startsWith('#');

  const cta = isCtaHash ? (
    <a className="btn btn--gold" href={ctaTo}>
      {ctaLabel}
      <Icon name="arrow" strokeWidth={2} />
    </a>
  ) : (
    <Link className="btn btn--gold" to={ctaTo}>
      {ctaLabel}
      <Icon name="arrow" strokeWidth={2} />
    </Link>
  );

  return (
    <>
      <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap">
          <nav className="nav" aria-label="Primary">
            <Link className="brand" to="/" aria-label={`${company.name} — home`}>
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt={company.name}
                width="212"
                height="52"
              />
            </Link>

            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              {cta}
              <button
                className="nav-toggle"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
                type="button"
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <nav className={`mobile-nav${open ? ' is-open' : ''}`} id="mobile-nav" aria-label="Mobile">
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {l.label}
          </NavLink>
        ))}
        {isCtaHash ? (
          <a className="btn btn--gold" href={ctaTo} onClick={() => setOpen(false)}>
            {ctaLabel}
          </a>
        ) : (
          <Link className="btn btn--gold" to={ctaTo}>
            {ctaLabel}
          </Link>
        )}
      </nav>
    </>
  );
}
