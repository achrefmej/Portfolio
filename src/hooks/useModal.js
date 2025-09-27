import { useEffect } from 'react';

// Hook pour gérer l'ouverture/fermeture des modals et le scroll du body
export const useModal = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      // Sauvegarder la position de scroll actuelle
      const scrollY = window.scrollY;
      
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restaurer le scroll du body
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // Restaurer la position de scroll
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
};

export default useModal;
