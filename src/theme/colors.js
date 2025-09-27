// Système de couleurs moderne et professionnel
export const colors = {
  // Couleurs principales modernes
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7', // Couleur principale (violet moderne)
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  // Couleurs d'accent
  accent: {
    cyan: '#06b6d4',
    emerald: '#10b981',
    amber: '#f59e0b',
    rose: '#f43f5e',
    indigo: '#6366f1',
  },
  
  // Thème sombre moderne
  dark: {
    bg: {
      primary: '#0a0a0f',
      secondary: '#1a1a2e',
      tertiary: '#16213e',
      card: 'rgba(26, 26, 46, 0.7)',
      cardHover: 'rgba(26, 26, 46, 0.9)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      accent: '#a855f7',
    },
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
  
  // Thème clair moderne
  light: {
    bg: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      card: 'rgba(255, 255, 255, 0.8)',
      cardHover: 'rgba(255, 255, 255, 0.95)',
    },
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      muted: '#64748b',
      accent: '#7c3aed',
    },
    border: 'rgba(0, 0, 0, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  
  // Gradients modernes
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    dark: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
    glassmorphism: 'rgba(255, 255, 255, 0.1)',
    glow: 'linear-gradient(45deg, #a855f7, #06b6d4, #10b981)',
  }
};

// Animations et transitions
export const animations = {
  transition: {
    fast: '0.2s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Framer Motion variants
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  },
  
  scaleOnHover: {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    whileTap: { scale: 0.95 }
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Breakpoints responsive
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Spacing système
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
};