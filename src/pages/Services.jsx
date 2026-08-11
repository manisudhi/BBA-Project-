import Reveal, { Stagger } from '../components/Reveal';
import {
  Eyebrow, SectionHead, Checks, Timeline, Faq, Cta, PageHero, IconCard, FactCard,
} from '../components/Blocks';
import { services, offshoreCapabilities, servicesFaq } from '../data/site';

/** Alternates the text/detail columns so the page doesn't march down one side. */
function ServiceBlock({ service, flip, soft }) {
  const copy = (
    <Reveal dir={flip ? 'right' : 'left'}>
      <Eyebrow>{service.eyebrow}</Eyebrow>
      <h2>{service.title}</h2>
      <p className="lead" style={{ marginTop: 16 }}>{service.lead}</p>
      <Checks items={service.points} />
    </Reveal>
  );

  const facts = (
    <Reveal dir={flip ? 'left' : 'right'}>
      <Stagger className="grid grid-2" step={80}>
        {service.facts.map((f) => (
          <FactCard key={f.h} h={f.h} p={f.p} />
        ))}
      </Stagger>
    </Reveal>
  );

  return (
    <section className={`section${soft ? ' section--soft' : ''}`} id={service.id}>
      <div className="wrap">
        <div className="split">
          {flip ? facts : copy}
          {flip ? copy : facts}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const detailed = services.filter((s) => s.id !== 'offshore');
  const offshore = services.find((s) => s.id === 'offshore');

  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title="Assurance, controls and finance operations — under one roof."
        lead="Six practices that combine into whatever your business needs right now: an independent look at risk, a rebuilt process, or a finance function that runs offshore while you sleep."
      />

      {/* Section shortcuts */}
      <div className="chipbar" aria-label="Service shortcuts">
        <div className="wrap">
          {services.map((s) => (
            <a className="chip chip--light" href={`#${s.id}`} key={s.id}>
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {detailed.map((s, i) => (
        <ServiceBlock key={s.id} service={s} flip={i % 2 === 1} soft={i % 2 === 1} />
      ))}

      {/* ---------------- OFFSHORE ---------------- */}
      <section className="section section--soft" id="offshore">
        <div className="wrap">
          <SectionHead eyebrow={offshore.eyebrow} title={offshore.title} lead={offshore.lead} />
          <Stagger className="grid grid-3" step={80}>
            {offshoreCapabilities.map((c) => (
              <IconCard key={c.title} icon={c.icon} title={c.title} text={c.text} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- APPROACH ---------------- */}
      <section className="section" id="approach">
        <div className="wrap">
          <SectionHead
            eyebrow="Our approach"
            title="Five stages, run the same way every time."
            lead="Discipline is what makes findings defensible and improvements permanent."
          />
          <Timeline detailed style={{ maxWidth: 860, marginInline: 'auto' }} />
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <SectionHead eyebrow="Common questions" title="Before you get in touch." />
          <Faq items={servicesFaq} style={{ maxWidth: 820, marginInline: 'auto' }} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="wrap">
          <Cta
            eyebrow="Next step"
            title="Not sure which service you need?"
            text="Describe the problem in plain terms. We will tell you which practice it belongs to — and whether it is worth doing at all."
            primary={{ label: 'Book a consultation', to: '/contact', arrow: true }}
            secondary={{ label: 'View industries', to: '/industries' }}
          />
        </div>
      </section>
    </>
  );
}
