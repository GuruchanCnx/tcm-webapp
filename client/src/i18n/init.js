import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import your translation files
import enTranslation from '../public/locales/en/translation.json'
import zhTranslation from '../public/locales/zh/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    zh: { translation: zhTranslation }
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n