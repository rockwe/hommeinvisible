import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Games = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h3>{t('Thanks.1')}</h3>
    </div>
  )
}

export default Games
