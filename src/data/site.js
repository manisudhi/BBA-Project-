/**
 * Single source of truth for site content.
 * Pages read from here so copy changes never require touching markup.
 */

export const company = {
  name: 'Savitur Global Advisians LLP',
  tagline: 'Empowering Transformation with Clarity',
  blurb:
    'A global professional consulting and offshore services firm helping organizations navigate uncertainty, strengthen governance and scale with confidence.',
  founded: 2023,
  countries: 'India · United Kingdom · South Africa',
  profilePdf: '/savitur_global_profile.pdf',
};

export const contact = {
  email: 'info@saviturglobal.in',
  founderEmail: 'neha.chawla@saviturglobal.in',
  phone: '+91 83750 17992',
  phoneHref: '+918375017992',
  whatsapp: 'https://wa.me/918375017992',
  address: [
    'Savitur Global Advisians LLP',
    '2 New Onkar Vihar, Main Road',
    'Behind Sector 33, Jamalpur Awana',
    'Ludhiana, Punjab, India',
  ],
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: 150, prefix: 'Rs. ', suffix: 'L+', label: 'Revenue leakages prevented' },
  { value: 40, suffix: '%+', label: 'Management time saved' },
  { value: 13, suffix: '+', label: 'Years of expertise' },
  { value: 3, suffix: '', label: 'Countries served' },
];

export const marqueeItems = [
  'Internal Audit',
  'Risk Advisory',
  'Internal Financial Controls',
  'SOP Design',
  'ERP Advisory',
  'Governance & Compliance',
  'Offshore Accounting',
  'UK GAAP · US GAAP · IFRS',
  'Forensic Audit',
];

export const services = [
  {
    id: 'internal-audit',
    icon: 'shieldCheck',
    title: 'Internal Audit & Risk Advisory',
    short:
      'Identify control gaps, improve governance frameworks and strengthen internal oversight with risk-based, evidence-led audits.',
    eyebrow: '01 — Assurance',
    lead:
      'Identify control gaps, improve governance frameworks and strengthen internal oversight. Audits are planned against risk, not against a checklist — so effort lands where exposure actually sits.',
    points: [
      'Risk assessment and annual risk-based audit plan',
      'Process-level audits across procure-to-pay, order-to-cash, inventory and payroll',
      'Revenue leakage and margin erosion reviews',
      'Forensic and special-purpose investigations',
      'Audit committee reporting with root cause analysis',
    ],
    facts: [
      { h: 'Typical trigger', p: 'Unexplained margin drift, a control incident, investor or lender expectations, or a first-time internal audit mandate.' },
      { h: 'What you receive', p: 'Risk register, tested findings with evidence, prioritized recommendations and a management action plan.' },
      { h: 'Typical duration', p: '4–8 weeks per cycle, or a rolling quarterly programme for larger operations.' },
      { h: 'Measured by', p: 'Value of leakage identified, gaps closed, and repeat findings eliminated in the next cycle.' },
    ],
  },
  {
    id: 'sop',
    icon: 'doc',
    title: 'SOP Design & Process Optimization',
    short:
      'Standardize operations with clearly documented procedures, defined ownership and measurable efficiency gains.',
    eyebrow: '02 — Process',
    lead:
      'Standardize operations with clearly documented procedures and improve efficiency. Processes are documented as they truly run first — then redesigned around control points that matter.',
    points: [
      'End-to-end process mapping and current-state assessment',
      'Standard operating procedures with embedded controls',
      'Delegation of authority and approval matrices',
      'Bottleneck removal and hand-off rationalization',
    ],
    facts: [
      { h: 'Typical trigger', p: 'Rapid growth, key-person dependency, inconsistent execution across plants, branches or entities.' },
      { h: 'What you receive', p: 'Documented SOPs, process maps, RACI matrices and a delegation-of-authority framework.' },
      { h: 'Typical duration', p: '3–6 weeks per function, run in parallel across priority processes.' },
      { h: 'Measured by', p: 'Cycle-time reduction, fewer exceptions, and management hours released back to the business.' },
    ],
  },
  {
    id: 'ifc',
    icon: 'chart',
    title: 'Internal Financial Controls (IFC)',
    short:
      'Strengthen financial accuracy, reliability and regulatory compliance through a tested, documented control framework.',
    eyebrow: '03 — Controls',
    lead:
      'Strengthen financial accuracy, reliability and regulatory compliance. A documented, tested control framework that stands up to statutory scrutiny and to your own board.',
    points: [
      'Risk and control matrices by process',
      'Design effectiveness and operating effectiveness testing',
      'Deficiency assessment and remediation roadmap',
      'Segregation-of-duties analysis inside the ERP',
    ],
    facts: [
      { h: 'Typical trigger', p: 'Statutory IFC reporting requirements, audit observations, or preparation for fundraising and due diligence.' },
      { h: 'What you receive', p: 'A complete RCM library, test evidence, deficiency register and remediation plan with owners.' },
      { h: 'Typical duration', p: '6–10 weeks for a first-time framework; annual refresh thereafter.' },
      { h: 'Measured by', p: 'Clean statutory reporting and a measurable fall in control deficiencies year on year.' },
    ],
  },
  {
    id: 'erp',
    icon: 'monitor',
    title: 'ERP Advisory & Implementation',
    short:
      'Align SAP, Oracle and Tally environments with your business processes, controls and compliance requirements.',
    eyebrow: '04 — Systems',
    lead:
      'Align ERP systems with business processes, controls and compliance requirements. Technology only delivers when the process underneath it has been designed properly.',
    points: [
      'Requirement gathering and fit-gap analysis',
      'Control configuration and approval workflow design',
      'Master data governance and user access review',
      'Post-implementation review and stabilization',
    ],
    facts: [
      { h: 'Typical trigger', p: 'A new ERP rollout, a migration, or a system that was implemented technically but never adopted operationally.' },
      { h: 'What you receive', p: 'Requirement blueprints, control configuration, UAT support and post-go-live process assurance.' },
      { h: 'Platforms', p: 'SAP, Oracle and Tally — with process design that survives the version upgrade.' },
      { h: 'Measured by', p: 'Adoption, reduced manual workarounds, and controls that operate in the system rather than in spreadsheets.' },
    ],
  },
  {
    id: 'governance',
    icon: 'shieldAlert',
    title: 'Governance & Compliance',
    short:
      'Ensure adherence to regulatory requirements and strengthen board-level oversight with a clear reporting rhythm.',
    eyebrow: '05 — Oversight',
    lead:
      'Ensure adherence to regulatory requirements and strengthen organizational oversight, with a reporting rhythm that gives the board a defensible view of risk.',
    points: [
      'Compliance calendars and ownership mapping',
      'Policy framework design and refresh',
      'Board and audit committee reporting packs',
      'Related-party, vendor and conflict-of-interest reviews',
    ],
    facts: [
      { h: 'Typical trigger', p: 'Regulatory change, a compliance miss, or governance expectations arriving with new investors.' },
      { h: 'What you receive', p: 'A live compliance register, a policy library and a standing reporting cadence.' },
      { h: 'Typical duration', p: '4–6 weeks to establish, then an ongoing quarterly rhythm.' },
      { h: 'Measured by', p: 'Zero missed statutory deadlines and clear accountability for every requirement.' },
    ],
  },
  {
    id: 'offshore',
    icon: 'globe',
    title: 'Offshore Accounting & Year-End',
    short:
      'End-to-end offshore accounting including year-end financial statements and compliance across UK GAAP, US GAAP and IFRS.',
    eyebrow: '06 — Finance operations',
    lead:
      'End-to-end offshore accounting including year-end financial statements and compliance across UK GAAP, US GAAP and IFRS — delivered by qualified accountants working to your calendar.',
    points: [],
    facts: [],
  },
];

export const offshoreCapabilities = [
  { icon: 'grid', title: 'Bookkeeping & management accounts', text: 'Day-to-day ledger maintenance, reconciliations and monthly management reporting packs.' },
  { icon: 'fileText', title: 'Year-end financial statements', text: 'Statutory accounts prepared under UK GAAP, US GAAP or IFRS, audit-ready with working papers.' },
  { icon: 'users', title: 'Payroll & compliance support', text: 'Payroll processing, statutory filings and ongoing compliance administration.' },
  { icon: 'chart', title: 'Tax preparation support', text: 'Computation preparation and supporting schedules coordinated with your local tax advisor.' },
  { icon: 'shieldCheck', title: 'Controls that travel', text: 'Offshore delivery designed with the same control discipline we apply to audit engagements.' },
  { icon: 'clock', title: 'Time-zone aligned', text: 'Delivery hours mapped to your working day so the close never waits on a hand-off.' },
];

export const approach = [
  {
    title: 'Planning',
    short: 'Define audit protocols, scope, objectives and a risk-based audit plan.',
    long: 'Define audit protocols, scope, objectives and a risk-based audit plan agreed with management before fieldwork begins.',
  },
  {
    title: 'Process walkthrough & assessment of current state',
    shortTitle: 'Process Walkthrough',
    short: 'Understand end-to-end processes, identify control gaps and document the current state.',
    long: 'Understand end-to-end processes as they actually operate, identify control gaps and document the current state with evidence.',
  },
  {
    title: 'Execution & reporting',
    shortTitle: 'Execution & Reporting',
    short: 'Sampling, testing, root cause analysis and reports with actionable management action plans.',
    long: 'Sampling and testing, audit reports with actionable recommendations, root cause analysis and management action plans with named owners.',
  },
  {
    title: 'Process re-engineering',
    shortTitle: 'Process Re-Engineering',
    short: 'Design efficient, standardized processes with clear SOPs and delegation of authority.',
    long: 'Design efficient, standardized and controlled processes with clear SOPs and a workable delegation of authority.',
  },
  {
    title: 'Post-implementation review',
    shortTitle: 'Post-Implementation Review',
    short: 'Confirm process compliance, control effectiveness and drive continuous improvement.',
    long: 'Return to confirm process compliance and control effectiveness, and to drive continuous improvement rather than one-off fixes.',
  },
];

export const industries = [
  { icon: 'factory', name: 'Manufacturing', hint: 'Plant, inventory & costing controls', detail: 'Costing accuracy, inventory movement, plant-level procurement and production reconciliation.', tags: ['BOM variance', 'Stores controls', 'Vendor rates'] },
  { icon: 'textile', name: 'Textile', hint: 'Yield, wastage & job-work audits', detail: 'Yield reconciliation, wastage norms, job-work accounting and processing-house controls.', tags: ['Yield norms', 'Job work', 'Wastage'] },
  { icon: 'car', name: 'Automotive', hint: 'Supply chain & dealer controls', detail: 'Supply chain controls, warranty and claim processing, spares inventory and dealer margin integrity.', tags: ['Warranty claims', 'Spares', 'Schemes'] },
  { icon: 'building', name: 'Infrastructure & Government', hint: 'Project & contract assurance', detail: 'Project cost assurance, contractor billing verification, tender compliance and milestone certification.', tags: ['RA bills', 'Tender compliance', 'Escalation'] },
  { icon: 'steel', name: 'Steel', hint: 'Scrap, weighbridge & yield checks', detail: 'Weighbridge integrity, scrap accounting, melting loss norms and freight cost verification.', tags: ['Weighbridge', 'Scrap', 'Melting loss'] },
  { icon: 'paper', name: 'Paper', hint: 'Input-output & procurement review', detail: 'Input-output ratios, chemical consumption, procurement pricing and energy cost review.', tags: ['Input-output', 'Consumables', 'Energy'] },
  { icon: 'fmcg', name: 'FMCG & Food Processing', hint: 'Distribution & scheme audits', detail: 'Distributor claims, trade scheme settlement, expiry and returns handling, secondary sales validation.', tags: ['Trade schemes', 'Returns', 'Secondary sales'] },
  { icon: 'store', name: 'Dealerships & Services', hint: 'Revenue leakage & claims', detail: 'Revenue leakage in service bays, cash handling, discount authorization and receivable ageing discipline.', tags: ['Cash controls', 'Discounts', 'Receivables'] },
  { icon: 'trend', name: 'Stock Exchange', hint: 'Regulatory & compliance audits', detail: 'Regulatory compliance audits, client fund segregation, margin reporting and system access controls.', tags: ['Fund segregation', 'Margin reporting', 'Access controls'] },
];

export const recurringThemes = [
  { n: '01', title: 'Pricing & discount drift', text: 'Approved rates that quietly diverge from what is actually invoiced.' },
  { n: '02', title: 'Inventory reconciliation', text: 'Physical and book quantities that stop agreeing between counts.' },
  { n: '03', title: 'Approval bypass', text: 'Authority matrices that exist on paper but not in the system.' },
  { n: '04', title: 'Manual dependency', text: "Critical controls that live in one person's spreadsheet." },
];

export const differentiators = [
  { n: '01', title: 'Outcome-led scoping', text: 'Engagements are scoped against a business result — leakage recovered, close cycle shortened, control gap closed — not against hours billed.' },
  { n: '02', title: 'Proactive communication', text: 'No surprises at the closing meeting. Issues surface as they are found, with the context and the recommended fix attached.' },
  { n: '03', title: 'Implementation support', text: 'We stay through re-engineering and post-implementation review, so recommendations become operating reality.' },
  { n: '04', title: 'Systems fluency', text: 'Comfortable inside SAP, Oracle and Tally — controls are designed where the transaction actually happens.' },
  { n: '05', title: 'Cross-border capability', text: 'Reporting under UK GAAP, US GAAP and IFRS, with delivery hours aligned to your working day.' },
  { n: '06', title: 'Partner-level attention', text: 'Senior involvement on every engagement — you get the experience you were sold, not a handover to juniors.' },
];

export const founder = {
  initials: 'NC',
  name: 'CA Neha Chawla',
  role: 'Founder & Managing Partner',
  credentials: 'Ex – Grant Thornton (Big-5) · 13+ years professional experience',
  chips: [
    '13+ years experience',
    'Risk advisory',
    'Internal audits',
    'Process reviews & IFC',
    'SAP · Oracle · Tally',
    'Multi-industry consulting',
  ],
  expertise: [
    'Risk advisory',
    'Internal audit',
    'Forensic audit',
    'Process reviews & IFC',
    'Offshore accounting',
    'SAP · Oracle · Tally · ERP',
    'Multi-industry consulting',
    'Governance frameworks',
  ],
};

export const servicesFaq = [
  { q: 'How does an engagement usually start?', a: 'With a scoping conversation. We look at your structure, systems and the specific friction you have described, then come back with a proposed scope, timeline and the outcome we expect to deliver. There is no charge for that first assessment.' },
  { q: 'Do you work with businesses that have never had an internal audit?', a: 'Frequently. First-time mandates are among the most valuable engagements, because the gaps are usually structural rather than technical. We start with a risk assessment and prioritize the two or three processes where exposure is highest.' },
  { q: 'Which accounting frameworks do you report under?', a: 'Offshore accounting and year-end financial statements are delivered under UK GAAP, US GAAP and IFRS, alongside Indian requirements for domestic clients.' },
  { q: 'How do you handle confidentiality and data access?', a: 'Engagements are covered by confidentiality terms agreed up front. Access is limited to the specific systems and records required for the scope, on a named-user basis, and is revoked at closure.' },
  { q: 'Can you work inside our existing ERP?', a: 'Yes. The team works within SAP, Oracle and Tally environments, and designs controls where the transaction actually happens rather than in parallel spreadsheets.' },
  { q: 'What happens after the report is issued?', a: 'The report is the middle of the engagement, not the end. Stages four and five — process re-engineering and post-implementation review — exist specifically to make sure recommendations become operating reality.' },
];

export const contactFaq = [
  { q: 'How quickly will I hear back?', a: 'Within one working day. If your enquiry arrives over a weekend or a public holiday in India, expect a reply on the next working morning.' },
  { q: 'Is the first conversation chargeable?', a: 'No. The initial scoping discussion is at no cost. We would rather establish whether there is a real problem worth solving before anyone commits to a fee.' },
  { q: 'What information should I have ready?', a: 'A rough sense of turnover, entity structure, the ERP or accounting system in use, and the specific process causing concern. Nothing confidential is needed at this stage.' },
  { q: 'Do you work with clients outside India, the UK and South Africa?', a: 'Those are our established markets, but offshore accounting and reporting under UK GAAP, US GAAP and IFRS travel well. Get in touch and we will be direct about fit.' },
];

export const geographies = [
  { place: 'India', text: 'Internal audit, IFC, SOP design, ERP advisory and governance for mid-market and listed groups.' },
  { place: 'United Kingdom', text: 'Offshore accounting, year-end statutory accounts under UK GAAP, payroll and compliance support.' },
  { place: 'South Africa', text: 'Finance operations support and IFRS reporting for growing enterprises.' },
];

/** Per-route <title> and meta description, used at runtime and at prerender time. */
export const pageMeta = {
  '/': {
    title: 'Savitur Global Advisians LLP | Risk Advisory, Internal Audit & Offshore Accounting',
    description:
      'Savitur Global Advisians LLP is a global consulting and offshore services firm delivering risk advisory, internal audit, internal financial controls and end-to-end offshore accounting across India, the UK and South Africa.',
  },
  '/about': {
    title: 'About Us | Savitur Global Advisians LLP',
    description:
      'Founded in 2023 by CA Neha Chawla, Savitur Global Advisians LLP is a consulting and offshore services firm built on execution, accountability and measurable outcomes.',
  },
  '/services': {
    title: 'Services | Savitur Global Advisians LLP',
    description:
      'Internal audit and risk advisory, SOP design, internal financial controls, ERP advisory, governance and compliance, and end-to-end offshore accounting under UK GAAP, US GAAP and IFRS.',
  },
  '/industries': {
    title: 'Industries | Savitur Global Advisians LLP',
    description:
      'Sector experience across manufacturing, textile, automotive, infrastructure and government, steel, paper, FMCG and food processing, dealerships and services, and stock exchange.',
  },
  '/contact': {
    title: 'Contact | Savitur Global Advisians LLP',
    description:
      'Get in touch with Savitur Global Advisians LLP — email info@saviturglobal.in or call +91 83750 17992. Clients served across India, the United Kingdom and South Africa.',
  },
};

export const routes = Object.keys(pageMeta);
