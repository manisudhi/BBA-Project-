import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal, { Stagger, useReveal } from '../components/Reveal';
import {
  Eyebrow, SectionHead, Checks, ArrowLink, StatsBand, Marquee,
  Timeline, Quote, Cta, IconCard,
} from '../components/Blocks';
import { company, services, industries, founder } from '../data/site';

/** Pointer-follow glow + card parallax, desktop only, motion permitting. */
function useHeroParallax() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    if (!hero) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !window.matchMedia('(min-width: 981px)').matches) return;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', `${(x * 16).toFixed(2)}px`);
      hero.style.setProperty('--py', `${(y * 16).toFixed(2)}px`);
      // Don't fight the entry animation.
      if (card && card.classList.contains('is-visible')) {
        card.style.transform =
          'translate3d(calc(var(--px, 0px) * -0.4), calc(var(--py, 0px) * -0.4), 0)';
      }
    };
    const onLeave = () => {
      if (card) card.style.transform = '';
    };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return { heroRef, cardRef };
}

export default function Home() {
  const { heroRef, cardRef } = useHeroParallax();
  const heroCard = useReveal();

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero" ref={heroRef}>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Reveal as="span" className="pill">
                <span className="dot" /> Founded {company.founded} · {company.countries}
              </Reveal>

              <Reveal as="h1">
                Empowering transformation with <span className="accent">clarity</span>.
              </Reveal>

              <Reveal as="p" className="lead">
                {company.name} helps organizations navigate uncertainty, strengthen governance
                and scale operations with confidence — through risk advisory, internal audit,
                process transformation and end-to-end offshore accounting.
              </Reveal>

              <Reveal className="btn-row">
                <Link className="btn btn--gold" to="/services">
                  Explore our services
                  <Icon name="arrow" strokeWidth={2} />
                </Link>
                <a
                  className="btn btn--ghost-light"
                  href={company.profilePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="download" strokeWidth={2} />
                  Download firm profile
                </a>
              </Reveal>

              <Reveal className="hero-meta">
                <span>Ex – Grant Thornton (Big-5) leadership</span>
                <span>13+ years of professional experience</span>
                <span>SAP · Oracle · Tally · ERP</span>
              </Reveal>
            </div>

            <aside
              ref={(node) => {
                cardRef.current = node;
                heroCard.ref.current = node;
              }}
              className={`hero-card ${heroCard.className}`}
              data-reveal="right"
            >
              <h3>Where we create value</h3>
              <p className="card-sub">Outcomes our clients measure us on</p>
              <ul>
                <li>Revenue leakages prevented <b>Rs. 150L+</b></li>
                <li>Management time saved <b>40%+</b></li>
                <li>Countries served <b>3</b></li>
                <li>Industries covered <b>9</b></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------------- ABOUT SNAPSHOT ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="split split--wide">
            <Reveal dir="left">
              <Eyebrow>Who we are</Eyebrow>
              <h2>A consulting partner built for execution, not just advice.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Founded in 2023 with a focused vision — eliminate operational bottlenecks, strengthen
                control environments and deliver practical, business-aligned solutions. What began as a
                one-person practice is today a team of Chartered Accountants and MBA professionals
                serving clients across three continents.
              </p>
              <Checks
                items={[
                  'Risk-based audit plans tailored to how your business actually runs.',
                  'Recommendations that come with owners, timelines and follow-through.',
                  'Offshore finance teams that plug straight into your existing ERP.',
                ]}
              />
              <div className="btn-row" style={{ marginTop: 32 }}>
                <Link className="btn btn--ghost" to="/about">
                  More about the firm
                  <Icon name="arrow" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>

            <Reveal className="founder" dir="right">
              <div className="founder-avatar">{founder.initials}</div>
              <Eyebrow light>Founder spotlight</Eyebrow>
              <h3 style={{ fontSize: '1.55rem' }}>{founder.name}</h3>
              <p style={{ marginTop: 6, fontSize: '.94rem' }}>
                {founder.role} · Ex – Grant Thornton (Big-5)
              </p>
              <p style={{ marginTop: 18 }}>
                A first-generation Chartered Accountant with 13+ years across risk management, internal
                audit and strategic consulting. She left a Big-5 practice in 2023 to build a firm defined
                by responsiveness, accountability and measurable outcomes.
              </p>
              <div className="chips">
                {founder.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title="Six practices, one objective — a business you can control."
            lead="From identifying control gaps to running your entire year-end close offshore, every engagement is scoped around a measurable business outcome."
          />

          <Stagger className="grid grid-3" step={90}>
            {services.map((s) => (
              <IconCard key={s.id} icon={s.icon} title={s.title} text={s.short} />
            ))}
          </Stagger>

          <Reveal className="center" style={{ marginTop: 42 }}>
            <Link className="btn" to="/services">
              See how each engagement runs
              <Icon name="arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- IMPACT ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Impact delivered" title="Measurable impact — not just audit reports." />
          <StatsBand />
        </div>
      </section>

      {/* ---------------- APPROACH ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split">
            <Reveal dir="left">
              <Eyebrow>Our approach</Eyebrow>
              <h2>A five-stage method that ends with change, not a report.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Every engagement follows the same disciplined arc — plan against risk, understand the
                process as it truly operates, test and report with evidence, redesign what is broken,
                then come back and confirm it stuck.
              </p>
              <div className="btn-row" style={{ marginTop: 30 }}>
                <Link className="btn btn--ghost" to="/services#approach">
                  Walk through the method
                  <Icon name="arrow" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>

            <Timeline />
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Industries we serve"
            title="Sector depth across manufacturing, trade and regulated finance."
          />

          <Stagger className="ind-grid" step={60}>
            {industries.map((ind) => (
              <Reveal className="ind" key={ind.name}>
                <div className="ind-ico">
                  <Icon name={ind.icon} />
                </div>
                <div>
                  <strong>{ind.name}</strong>
                  <small>{ind.hint}</small>
                </div>
              </Reveal>
            ))}
          </Stagger>

          <Reveal className="center" style={{ marginTop: 40 }}>
            <ArrowLink to="/industries">See what we look for in each sector</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ---------------- QUOTE ---------------- */}
      <section className="section section--tight section--soft">
        <div className="wrap">
          <Quote />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="wrap">
          <Cta
            eyebrow="Get in touch"
            title="Let's find out what your controls are costing you."
            text="A short conversation is usually enough to identify where the leakage sits. No obligation, no boilerplate deck."
            primary={{ label: 'Book a consultation', to: '/contact', arrow: true }}
            secondary={{ label: 'Email us', to: 'mailto:info@saviturglobal.in' }}
          />
        </div>
      </section>
    </>
  );
}
