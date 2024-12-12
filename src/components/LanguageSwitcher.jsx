import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div aria-label="Language Switcher">
      <button onClick={() => changeLanguage('en')} aria-label="Switch to English">
        English
      </button>
      <button onClick={() => changeLanguage('es')} aria-label="Switch to Spanish">
        Español
      </button>

    </div>
  );
};

export default LanguageSwitcher;
