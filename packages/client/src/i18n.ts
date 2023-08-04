import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resourcesEnCA } from './locales/en_CA';
import { resourcesFrCA } from './locales/fr_CA';

const resources = {
  en_CA: { ...resourcesEnCA },
  fr_CA: { ...resourcesFrCA },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fr_CA',
    resources,
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage', 'cookie'],
    },
  });
