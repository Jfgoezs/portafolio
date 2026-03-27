import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Change language"
    >
      {currentLanguage === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
    </button>
  );
};

export default LanguageToggle;