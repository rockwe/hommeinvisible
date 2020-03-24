import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'

//import fr from './fr.json'
import en from './en.json'

const STORAGE_KEY = '@APP:languageCode'

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async callback => {
    const savedDataJSON = await localStorage.getItem(STORAGE_KEY)
    const lng = savedDataJSON ? savedDataJSON : null
    const selectLanguage = lng || null
    // console.log('detect - selectLanguage:', selectLanguage);
    callback(selectLanguage)
  },
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: { en },

    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: true
    }
  })

export default i18n
