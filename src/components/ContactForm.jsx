import { useState } from 'react';
import { contact } from '../data/site';
import Icon from './Icon';

const SERVICES = [
  'Internal Audit & Risk Advisory',
  'SOP Design & Process Optimization',
  'Internal Financial Controls (IFC)',
  'ERP Advisory & Implementation',
  'Governance & Compliance',
  'Offshore Accounting & Year-End',
  'Not sure yet',
];

const EMPTY = { name: '', company: '', email: '', phone: '', service: '', message: '' };

/**
 * Opens the visitor's own mail client with the enquiry pre-filled.
 * No backend, no data stored — swap the submit handler for a fetch()
 * if a form endpoint is added later.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, company, email, phone, service, message } = values;

    const subject = `Enquiry${service ? ` — ${service}` : ''}${company ? ` | ${company}` : ''}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company || '—'}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      `Service of interest: ${service || '—'}`,
      '',
      'Message:',
      message,
      '',
    ].join('\n');

    window.location.href =
      `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" id="enquiry-form" onSubmit={onSubmit} noValidate>
      <div className="grid grid-2" style={{ gap: '0 20px' }}>
        <div className="field">
          <label htmlFor="name">Full name <span className="req">*</span></label>
          <input id="name" name="name" type="text" placeholder="Your name" value={values.name} onChange={update} required />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Organisation name" value={values.company} onChange={update} />
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: '0 20px' }}>
        <div className="field">
          <label htmlFor="email">Email <span className="req">*</span></label>
          <input id="email" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={update} required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" value={values.phone} onChange={update} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Service of interest</label>
        <select id="service" name="service" value={values.service} onChange={update}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">How can we help? <span className="req">*</span></label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe the process, the system it runs on, and what has been going wrong."
          value={values.message}
          onChange={update}
          required
        />
      </div>

      <button className="btn btn--gold" type="submit">
        Send enquiry
        <Icon name="send" strokeWidth={2} />
      </button>

      <div className={`form-status${sent ? ' is-shown' : ''}`} role="status">
        Your email client should now be open with the enquiry pre-filled — just press send.
        If nothing happened, write to <strong>{contact.email}</strong> directly.
      </div>

      <p className="form-note">This form opens your own email application. No data is stored on this site.</p>
    </form>
  );
}
