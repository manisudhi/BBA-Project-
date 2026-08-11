import { Link } from 'react-router-dom';
import { company, contact } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img src="/logo-light.png" alt={company.name} width="212" height="52" />
            <p>{company.blurb}</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/about#founder">Founder</Link></li>
              <li><Link to="/services#approach">Our approach</Link></li>
              <li><a href={company.profilePdf} target="_blank" rel="noopener noreferrer">Firm profile (PDF)</a></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#internal-audit">Internal audit</Link></li>
              <li><Link to="/services#ifc">Financial controls</Link></li>
              <li><Link to="/services#erp">ERP advisory</Link></li>
              <li><Link to="/services#offshore">Offshore accounting</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={`mailto:${contact.founderEmail}`}>{contact.founderEmail}</a></li>
              <li><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></li>
              <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Clients served across {company.countries}</span>
        </div>
      </div>
    </footer>
  );
}
