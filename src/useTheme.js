import { useCallback, useEffect, useState } from 'react';

function getSystemPref() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('dw-theme') || 'system';
    } catch {
      return 'system';
    }
  });
  const [resolved, setResolved] = useState(() =>
    theme === 'system' ? getSystemPref() : theme
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      setResolved(getSystemPref());
    } else {
      root.setAttribute('data-theme', theme);
      setResolved(theme);
    }
    try {
      localStorage.setItem('dw-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== 'system') return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setResolved(getSystemPref());
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const current = t === 'system' ? getSystemPref() : t;
      return current === 'dark' ? 'light' : 'dark';
    });
  }, []);

  return { theme, resolved, toggle };
}
