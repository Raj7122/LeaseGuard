import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = saved === 'true' || (!saved && prefersDark);
    setIsDark(enabled);
    if (enabled) document.documentElement.classList.add('dark');
  }, []);

  const toggle = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    if (newValue) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(newValue));
  };

  return { isDark, toggle };
}

export default useDarkMode;


