import { useEffect, useState } from 'react';
import { navItems } from '../content.js';
import DownloadCvButton from './DownloadCvButton.jsx';

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);
    if (!('IntersectionObserver' in window) || sections.length === 0) return undefined;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav className="topnav">
        <div className="wrap">
          <a href="#top" className="brandmark">
            <span className="seal-mini">DW</span>
            Derek Watson
          </a>
          <ul className="navlinks">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={active === item.href ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <DownloadCvButton className="theme-toggle" aria-label="Download CV as PDF" title="Download CV (PDF)">
              {null}
            </DownloadCvButton>
            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 1v2M8 13v2M1 8h2M13 8h2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M13.5 9.5A6 6 0 116.5 2.5a5 5 0 007 7z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <button
              className="navtoggle"
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className={`navsheet ${open ? 'open' : ''}`}>
        <div className="wrap">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <DownloadCvButton className="navsheet-download" onClick={() => setOpen(false)} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
