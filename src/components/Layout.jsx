import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ScrollProgress, BackToTop } from './Chrome';
import { pageMeta } from '../data/site';

/**
 * Restores scroll position on navigation and honours #hash targets,
 * which React Router does not do on its own.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

/** Keeps <title> and the meta description in sync with the active route. */
function Meta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname];
    if (!meta) return;
    document.title = meta.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const onContact = pathname === '/contact';

  return (
    <>
      <Meta />
      <ScrollManager />
      <ScrollProgress />
      <Header
        ctaLabel={onContact ? 'Send an enquiry' : 'Book a consultation'}
        ctaTo={onContact ? '#enquiry-form' : '/contact'}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
