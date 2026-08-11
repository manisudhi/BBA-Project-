/**
 * Single inline-SVG icon set. All icons share a 24x24 viewBox and inherit
 * `currentColor`, so they take the colour of whatever element wraps them.
 */

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
  download: <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />,
  check: <path d="M20 6L9 17l-5-5" />,
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />,

  shieldCheck: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  shieldAlert: (
    <>
      <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z" />
      <path d="M12 8v5M12 16h.01" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </>
  ),
  fileText: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 13h6M9 17h4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
      <path d="M7 9h3M14 9h3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  users: (
    <>
      <path d="M17 20v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 20v-2a4 4 0 00-3-3.87" />
    </>
  ),
  star: <path d="M12 3l2.6 5.6 6.4.8-4.7 4.3 1.3 6.3L12 17l-5.6 3 1.3-6.3L3 9.4l6.4-.8z" />,
  grid: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M4 9h16M9 9v11" />
    </>
  ),

  /* Industry marks */
  factory: <path d="M3 21h18M4 21V10l5 3V10l5 3V7l5 3v11" />,
  textile: (
    <>
      <path d="M4 6h16v4l-3 1v7H7v-7l-3-1z" />
      <path d="M9 6a3 3 0 006 0" />
    </>
  ),
  car: (
    <>
      <path d="M5 16h14l-1.5-5.5A2 2 0 0015.6 9H8.4a2 2 0 00-1.9 1.5z" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M6 21V8l6-4 6 4v13" />
      <path d="M10 21v-5h4v5" />
    </>
  ),
  steel: (
    <>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M4 14h16M9 20v-6h6v6" />
    </>
  ),
  paper: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 12h7M9 16h5" />
    </>
  ),
  fmcg: (
    <>
      <path d="M5 21h14l-1-11H6z" />
      <path d="M9 10V6a3 3 0 016 0v4" />
    </>
  ),
  store: <path d="M3 10h18M5 10V6h14v4M5 20V10M19 20V10M3 20h18" />,
  trend: (
    <>
      <path d="M3 17l5-6 4 3 4-6 5 4" />
      <path d="M3 21h18" />
    </>
  ),

  /* Contact */
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0116 0" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
  ),
  whatsapp: <path d="M21 11.5a8.4 8.4 0 01-12.3 7.5L3 21l2-5.7A8.4 8.4 0 1121 11.5z" />,
};

export default function Icon({ name, strokeWidth = 1.8, ...rest }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {d}
    </svg>
  );
}
