import React from 'react'
import { useTranslation } from 'react-i18next'
import { withTranslation } from 'react-i18next'
import i18next from '../../i18n'

const header = ({ t }) => {
  function handleclick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div>
      <nav style={{ width: '100%', backgroundColor: 'gray' }}>
        <button onClick={() => handleclick('en')}>English</button>
        <button onClick={() => handleclick('fr')}>Francais</button>
      </nav>
    </div>
  )
}

export default header
