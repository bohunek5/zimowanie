import { useEffect, useState } from 'react';

export type Theme = 'day' | 'night';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('zimowanie-theme-v3');
    return saved === 'night' ? 'night' : 'day';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('zimowanie-theme-v3', theme);
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((current) => current === 'day' ? 'night' : 'day') };
}
