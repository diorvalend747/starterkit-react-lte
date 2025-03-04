import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationID from '../locales/id/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationID,
  },
};

i18n
  .use(initReactI18next as any) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
    },
  } as any);

export default i18n;
