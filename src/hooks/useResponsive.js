import { useState, useEffect } from 'react';

// Hook personnalisé pour gérer le responsive design
const useResponsive = () => {
  // Fonction pour détecter si c'est un appareil mobile
  const isMobileDevice = () => {
    if (typeof window === 'undefined') return false;
    
    // Vérifier le user agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
    const isMobileUA = mobileRegex.test(userAgent);
    
    // Vérifier avec matchMedia (plus fiable que innerWidth)
    const isMobileMedia = window.matchMedia('(max-width: 768px)').matches;
    
    // Vérifier l'orientation et le type de pointeur
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Largeur de l'écran
    const width = window.innerWidth;
    const screenWidth = window.screen.width;
    
    // Logique de détection combinée
    // Si user agent mobile OU largeur < 768 OU matchMedia mobile
    return isMobileUA || width < 768 || isMobileMedia || (isTouchDevice && screenWidth < 768);
  };

  // Fonction pour calculer le type d'appareil
  const getDeviceType = () => {
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        width: 1200,
        height: 800
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = window.screen.width;
    const mobile = isMobileDevice();
    
    console.log('🔍 Detection Details:', {
      innerWidth: width,
      screenWidth: screenWidth,
      userAgent: navigator.userAgent,
      matchMedia: window.matchMedia('(max-width: 768px)').matches,
      touch: 'ontouchstart' in window,
      finalIsMobile: mobile
    });
    
    return {
      isMobile: mobile,
      isTablet: !mobile && width >= 768 && width < 1024,
      isDesktop: !mobile && width >= 1024,
      width,
      height
    };
  };

  // État initial avec détection immédiate
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = getDeviceType();
      setDeviceType(newDeviceType);
      console.log('📱 Device Type Updated:', newDeviceType);
    };

    // Initial check
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return deviceType;
};

export default useResponsive;
