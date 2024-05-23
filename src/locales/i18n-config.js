import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translatorEN from './en/translator.json'
import translatorES from './es/translator.json'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translator: translatorES,
    },
    en: {
      translator: translatorEN,
    },
  },
  fallbackLng: 'es',
})
