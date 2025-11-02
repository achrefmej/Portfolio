import { useEffect } from 'react';

/**
 * Hook personnalisé pour optimiser les performances sur mobile
 * IMPORTANT: Ne pas bloquer les événements touch car ça empêche le scroll!
 */
const useMobileOptimization = () => {
  useEffect(() => {
    // Améliorer le scroll sur mobile avec smooth scrolling
    const improveScrolling = () => {
      // Smooth scrolling pour iOS
      document.documentElement.style.webkitOverflowScrolling = 'touch';
      document.body.style.webkitOverflowScrolling = 'touch';
      
      // Contrôler le comportement du overscroll (bounce effect)
      document.body.style.overscrollBehavior = 'auto';
    };

    improveScrolling();

    // Optimiser les images lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    }

    // Pas de cleanup nécessaire car on ne modifie que les styles
    return () => {
      // Cleanup si nécessaire
    };
  }, []);
};

export default useMobileOptimization;
