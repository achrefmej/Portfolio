import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Importations des fichiers de traduction locaux
import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const resources = {
  fr: {
    translation: frTranslations
  },
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i18n
  // Détecteur de langue
  .use(LanguageDetector)
  // Plugin pour React
  .use(initReactI18next)
  // Initialisation
  .init({
    resources,
    fallbackLng: 'fr', // Français comme langue de base
    lng: 'fr', // Langue par défaut
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;