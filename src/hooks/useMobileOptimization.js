import { useEffect } from 'react';

/**
 * Hook personnalisé pour optimiser les performances sur mobile
 * Implémente différentes stratégies d'optimisation
 */
const useMobileOptimization = () => {
  useEffect(() => {
    let lastTouchTime = 0;

    // Désactiver le zoom double-tap sur iOS
    const preventDoubleTapZoom = (e) => {
      const t2 = e.timeStamp;
      const t1 = lastTouchTime || t2;
      const dt = t2 - t1;
      const fingers = e.touches ? e.touches.length : 0;
      
      lastTouchTime = t2;
      
      if (!dt || dt > 500 || fingers > 1) return; // not double-tap
      
      e.preventDefault();
      if (e.target && e.target.click) {
        e.target.click();
      }
    };

    document.addEventListener('touchstart', preventDoubleTapZoom, { passive: false });

    // Améliorer le scroll sur mobile
    const improveScrolling = () => {
      document.body.style.webkitOverflowScrolling = 'touch';
      document.body.style.overscrollBehavior = 'contain';
    };

    improveScrolling();

    // Prévenir le pull-to-refresh sur Chrome mobile
    const preventPullToRefresh = (e) => {
      if (e.touches.length > 1) return;
      
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY === 0) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', preventPullToRefresh, { passive: false });

    // Optimiser les images lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', preventDoubleTapZoom);
      document.removeEventListener('touchstart', preventPullToRefresh);
    };
  }, []);
};

export default useMobileOptimization;
