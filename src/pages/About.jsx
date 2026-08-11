import Reveal, { Stagger } from '../components/Reveal';
import {
  Eyebrow, SectionHead, Checks, StatsBand, Cta, PageHero, IconCard, NumberCard,
} from '../components/Blocks';
import { company, founder, differentiators } from '../data/site';

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About the firm"
        title="Built to remove the bottlenecks other advisors only describe."
        lead={`${company.name} is a global professional consulting and offshore services firm working with clients across India, the United Kingdom and South Africa.`}
      />

      {/* ---------------- STORY ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="split split--wide">
            <Reveal dir="left">
              <Eyebrow>Our story</Eyebrow>
              <h2>Founded in 2023 with a focused vision.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Modern businesses operate under uncertainty, compliance pressure and growing financial
                complexity. Most struggle not for lack of ambition, but for lack of structured systems,
                risk visibility and financial discipline.
              </p>
              <p style={{ marginTop: 16 }}>
                {company.name} was incorporated in August 2023 to close exactly that gap. The firm
                delivers Risk Advisory, Internal Control &amp; Process Reviews and End-to-End Offshore
                Accounting Solutions — eliminating operational bottlenecks, enhancing control
                environments and delivering practical, business-aligned solutions.
              </p>
              <p style={{ marginTop: 16 }}>
                What began as a one-person practice in Ludhiana has grown into a team of Chartered
                Accountants and MBA professionals serving clients on three continents — with the same
                operating principle throughout: be the partner who executes, not the one who only advises.
              </p>
            </Reveal>

            <Reveal dir="right">
              <Stagger className="grid grid-2" step={80}>
                <IconCard
                  icon="clock"
                  title="Established 2023"
                  text="Incorporated as an LLP in August 2023, headquartered in Ludhiana, Punjab."
                />
                <IconCard
                  icon="globe"
                  title="Three markets"
                  text="Clients served across India, the United Kingdom and South Africa."
                />
                <IconCard
                  icon="users"
                  title="Specialist team"
                  text="Chartered Accountants and MBA professionals working as one delivery unit."
                />
                <IconCard
                  icon="star"
                  title="Big-5 pedigree"
                  text="Methodology shaped by Grant Thornton practice, sized for mid-market realities."
                />
              </Stagger>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- FOUNDER ---------------- */}
      <section className="section section--soft" id="founder">
        <div className="wrap">
          <SectionHead
            eyebrow="Founder spotlight"
            title={founder.name}
            lead={`${founder.role} · ${founder.credentials}`}
          />

          <Reveal className="founder" dir="zoom">
            <div className="split" style={{ alignItems: 'flex-start' }}>
              <div>
                <div className="founder-avatar">{founder.initials}</div>
                <h3 style={{ fontSize: '1.5rem' }}>A journey rooted in resilience.</h3>
                <p style={{ marginTop: 16 }}>
                  A first-generation Chartered Accountant from Ludhiana, Neha entered the profession
                  without an established network or inherited opportunity. Every client relationship and
                  every milestone was built independently, through persistence and credibility.
                </p>
                <p style={{ marginTop: 14 }}>
                  One defining moment shaped the firm: leaving a secure Big-5 role to build something of
                  her own. Early clients were won by demonstrating outcomes rather than pitching them —
                  an approach that still defines how Savitur works today.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 14 }}>Areas of expertise</h3>
                <div className="chips" style={{ marginTop: 0 }}>
                  {founder.expertise.map((e) => (
                    <span className="chip" key={e}>{e}</span>
                  ))}
                </div>

                <h3 style={{ fontSize: '1.15rem', margin: '30px 0 14px' }}>Leadership philosophy</h3>
                <p>
                  People-centric by design. The aim is not a workforce but a bench of independent
                  thinkers — built on trust, accountability, learning and ownership. Leadership, in her
                  framing, begins with becoming better than yesterday.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- DIFFERENTIATORS ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why clients stay"
            title="Execution, not recommendations."
            lead="Technical expertise is the entry ticket. Clients stay for responsiveness, accountability and practical implementation."
          />
          <Stagger className="grid grid-3" step={90}>
            {differentiators.map((d) => (
              <NumberCard key={d.n} n={d.n} title={d.title} text={d.text} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- VALUES ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="split">
            <Reveal dir="left">
              <Eyebrow>What we stand for</Eyebrow>
              <h2>Clarity, discipline, and a bias toward doing.</h2>
              <Checks
                items={[
                  <><strong>Clarity.</strong> Complexity simplified into decisions a management team can act on this quarter.</>,
                  <><strong>Integrity.</strong> Findings reported as they are, with evidence, regardless of who owns the process.</>,
                  <><strong>Accountability.</strong> Every recommendation carries an owner, a timeline and a follow-up review.</>,
                  <><strong>Partnership.</strong> A strategic partner, not a transactional service provider.</>,
                ]}
              />
            </Reveal>

            <StatsBand twoUp />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="wrap">
          <Cta
            eyebrow="Work with us"
            title="Tell us where the friction is."
            text="We'll come back with a scoped view of what to review first and what it is likely worth."
            primary={{ label: 'Start a conversation', to: '/contact', arrow: true }}
            secondary={{ label: 'Download profile', to: company.profilePdf, external: true }}
          />
        </div>
      </section>
    </>
  );
}
