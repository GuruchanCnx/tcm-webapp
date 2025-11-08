import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import your translation files from the src directory
import enTranslation from './locales/en/translation.json'
import zhTranslation from './locales/zh/translation.json'

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
