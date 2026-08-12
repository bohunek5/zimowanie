import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BackToTopProps {
  readonly threshold?: number;
}

export function BackToTop({ threshold = 520 }: Readonly<BackToTopProps>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > threshold);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, [threshold]);

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Wróć na górę strony"
      title="Wróć na górę"
    >
      <ArrowUp/>
      <span>Do góry</span>
    </button>
  );
}
