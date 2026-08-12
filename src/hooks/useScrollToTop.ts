import { useLayoutEffect } from 'react';

export function useScrollToTop(pathname: string) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const reset = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      root.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    root.classList.add('route-reset');
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    reset();
    const firstFrame = window.requestAnimationFrame(reset);
    const secondFrame = window.requestAnimationFrame(() => window.requestAnimationFrame(reset));
    const settle = window.setTimeout(reset, 80);
    const finish = window.setTimeout(() => {
      reset();
      root.classList.remove('route-reset');
    }, 180);
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(settle);
      window.clearTimeout(finish);
      root.classList.remove('route-reset');
    };
  }, [pathname]);
}
