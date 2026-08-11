import Reveal, { Stagger } from '../components/Reveal';
import Icon from '../components/Icon';
import { Eyebrow, SectionHead, Checks, Faq, Quote, PageHero } from '../components/Blocks';
import ContactForm from '../components/ContactForm';
import { contact, company, contactFaq } from '../data/site';

function ContactCard({ icon, label, value, href, external, delay }) {
  return (
    <Reveal
      as="a"
      className="contact-card"
      href={href}
      delay={delay}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="ico">
        <Icon name={icon} />
      </div>
      <div>
        <h3>{label}</h3>
        <span>{value}</span>
      </div>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about what your controls are costing you."
        lead="A short conversation is usually enough to identify where the leakage sits. Reach us directly, or send an enquiry and we will respond within one working day."
      />

      {/* ---------------- CONTACT DETAILS + FORM ---------------- */}
      <section className="section">
        <div className="wrap">
          <Stagger className="grid grid-4" step={70} style={{ marginBottom: 56 }}>
            <ContactCard
              icon="mail"
              label="General enquiries"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactCard
              icon="user"
              label="Founder"
              value={contact.founderEmail}
              href={`mailto:${contact.founderEmail}`}
            />
            <ContactCard
              icon="phone"
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phoneHref}`}
            />
            <ContactCard
              icon="whatsapp"
              label="WhatsApp"
              value="Message us directly"
              href={contact.whatsapp}
              external
            />
          </Stagger>

          <div className="split split--wide">
            <Reveal dir="left">
              <Eyebrow>Send an enquiry</Eyebrow>
              <h2>Tell us what you're trying to fix.</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                The more specific you are, the more useful our first reply will be. Describe the
                process, the system it runs on and what has been going wrong — we will come back with a
                view on scope and what it is likely worth.
              </p>

              <Checks
                items={[
                  'Response within one working day',
                  'No-charge scoping conversation',
                  'Everything discussed stays confidential',
                ]}
              />

              <div
                style={{
                  marginTop: 36,
                  paddingTop: 28,
                  borderTop: '1px solid var(--line)',
                }}
              >
                <Eyebrow>Registered office</Eyebrow>
                <p style={{ fontWeight: 500, color: 'var(--navy-900)' }}>
                  {contact.address.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < contact.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p style={{ marginTop: 14, fontSize: '.9rem', color: 'var(--ink-400)' }}>
                  Clients served across {company.countries}
                </p>
              </div>
            </Reveal>

            <Reveal dir="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section section--soft">
        <div className="wrap">
          <SectionHead eyebrow="Good to know" title="What happens after you write in." />
          <Faq items={contactFaq} style={{ maxWidth: 820, marginInline: 'auto' }} />
        </div>
      </section>

      {/* ---------------- QUOTE ---------------- */}
      <section className="section">
        <div className="wrap">
          <Quote />
        </div>
      </section>
    </>
  );
}
