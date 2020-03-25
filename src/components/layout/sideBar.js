import React from 'react'
import { useTranslation } from 'react-i18next'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

const sideBar = props => {
  const isActiveRoute = route => {
    return window.location.pathname.indexOf(route) !== -1
  }
  const { t } = props
  return (
    <div>
      <div>
        <a href='/'>Accueil</a>
      </div>
      <ul>
        <li>
          <a href='/games' className='nav-link'>
            <i className='fas fa-fire' />
            <span>{t('sideBar.1')}</span>
          </a>
        </li>
        <li>
          <a href='/mygames' className='nav-link'>
            <i className='fas fa-lightbulb' />
            <span>{t('sideBar.2')}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default withTranslation()(sideBar)
