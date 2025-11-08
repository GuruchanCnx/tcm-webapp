import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Simple English-only translation
const enTranslation = {
  "appTitle": "Chinese Materia Medica",
  "herbBrowser": "Herb Library", 
  "formulaBuilder": "Formula Builder",
  "learningCenter": "Case Studies",
  "languageToggle": "English"
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation }
  },
  lng: 'en', // Default and only language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
