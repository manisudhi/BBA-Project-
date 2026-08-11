import Reveal, { Stagger } from '../components/Reveal';
import Icon from '../components/Icon';
import {
  Eyebrow, SectionHead, Checks, Cta, PageHero, NumberCard,
} from '../components/Blocks';
import { industries, recurringThemes, geographies } from '../data/site';

export default function Industries() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Industries we serve"
        title="We know where the money leaks in your sector."
        lead="Nine industries, each with its own failure patterns. Sector familiarity is what lets an audit start at the right place instead of the obvious one."
      />

      {/* ---------------- DETAILED INDUSTRIES ---------------- */}
      <section className="section">
        <div className="wrap">
          <Stagger className="grid grid-3" step={80}>
            {industries.map((ind) => (
              <Reveal as="article" className="card" key={ind.name}>
                <div className="card-icon">
                  <Icon name={ind.icon} />
                </div>
                <h3>{ind.name}</h3>
                <p>{ind.detail}</p>
                <div className="chips" style={{ marginTop: 18 }}>
                  {ind.tags.map((t) => (
                    <span className="chip chip--light" key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- GEOGRAPHY ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split split--wide">
            <Reveal dir="left">
              <Eyebrow>Where we operate</Eyebrow>
              <h2>Three markets, one delivery standard.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Domestic risk consulting and global offshore accounting run from the same bench, under
                the same quality discipline. Whichever market you sit in, the working relationship is
                with people who know your file.
              </p>
              <Checks
                items={geographies.map((g) => (
                  <>
                    <strong>{g.place}.</strong> {g.text}
                  </>
                ))}
              />
            </Reveal>

            <Reveal className="founder" dir="right">
              <Eyebrow light>Reporting frameworks</Eyebrow>
              <h3 style={{ fontSize: '1.35rem' }}>Prepared to the standard your auditor expects.</h3>
              <p style={{ marginTop: 14 }}>
                Year-end financial statements and supporting working papers are prepared under the
                framework applicable to your jurisdiction.
              </p>
              <div className="chips">
                {['UK GAAP', 'US GAAP', 'IFRS', 'Ind AS'].map((f) => (
                  <span className="chip" key={f}>{f}</span>
                ))}
              </div>

              <div
                style={{
                  marginTop: 30,
                  paddingTop: 26,
                  borderTop: '1px solid rgba(255,255,255,.13)',
                }}
              >
                <Eyebrow light>Systems we work in</Eyebrow>
                <div className="chips" style={{ marginTop: 6 }}>
                  {['SAP', 'Oracle', 'Tally', 'Other ERP'].map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- RECURRING THEMES ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Recurring themes"
            title="The same four issues, across almost every sector."
            lead="Industry changes the symptoms. The underlying causes rarely do."
          />
          <Stagger className="grid grid-4" step={80}>
            {recurringThemes.map((t) => (
              <NumberCard key={t.n} n={t.n} title={t.title} text={t.text} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <Cta
            eyebrow="Your sector"
            title="Don't see your industry listed?"
            text="The method transfers. Tell us what you do and we will tell you honestly whether we are the right fit."
            primary={{ label: 'Talk to us', to: '/contact', arrow: true }}
            secondary={{ label: 'Browse services', to: '/services' }}
          />
        </div>
      </section>
    </>
  );
}
