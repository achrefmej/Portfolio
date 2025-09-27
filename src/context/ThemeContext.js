import React, { createContext, useContext, useState, useEffect } from 'react';
import { colors } from '../theme/colors';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [primaryColor, setPrimaryColor] = useState('purple');

  // Charger le thème depuis localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('primaryColor');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    if (savedColor) {
      setPrimaryColor(savedColor);
    }
  }, []);

  // Sauvegarder le thème dans localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('primaryColor', primaryColor);
    
    // Appliquer les variables CSS globales
    const root = document.documentElement;
    const theme = isDarkMode ? colors.dark : colors.light;
    
    root.style.setProperty('--bg-primary', theme.bg.primary);
    root.style.setProperty('--bg-secondary', theme.bg.secondary);
    root.style.setProperty('--bg-tertiary', theme.bg.tertiary);
    root.style.setProperty('--bg-card', theme.bg.card);
    root.style.setProperty('--bg-card-hover', theme.bg.cardHover);
    
    root.style.setProperty('--text-primary', theme.text.primary);
    root.style.setProperty('--text-secondary', theme.text.secondary);
    root.style.setProperty('--text-muted', theme.text.muted);
    root.style.setProperty('--text-accent', theme.text.accent);
    
    root.style.setProperty('--border-color', theme.border);
    root.style.setProperty('--shadow-color', theme.shadow);
    
    // Couleurs d'accent
    root.style.setProperty('--primary-500', colors.primary[500]);
    root.style.setProperty('--primary-600', colors.primary[600]);
    root.style.setProperty('--accent-cyan', colors.accent.cyan);
    root.style.setProperty('--accent-emerald', colors.accent.emerald);
    
    // Gradients
    root.style.setProperty('--gradient-primary', colors.gradients.primary);
    root.style.setProperty('--gradient-glow', colors.gradients.glow);
    
  }, [isDarkMode, primaryColor]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getCurrentTheme = () => {
    return isDarkMode ? colors.dark : colors.light;
  };

  const value = {
    isDarkMode,
    primaryColor,
    toggleTheme,
    setPrimaryColor,
    getCurrentTheme,
    colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};