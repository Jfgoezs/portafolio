import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './locales/es.json';
import translationEN from './locales/en.json';

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no detecta ninguno
    debug: process.env.NODE_ENV === 'development', // Solo muestra logs en desarrollo
    
    interpolation: {
      escapeValue: false, // React ya hace escape por sí mismo
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // Guarda la preferencia en localStorage
    }
  });

export default i18n;