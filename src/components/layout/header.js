import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

//i18n
//import { useTranslation } from 'react-i18next'
import { withTranslation } from 'react-i18next'
import i18next from '../../i18n'

//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../../actions'

//Images
import FlagFR from './../../assets/img/france.svg'
import FlagUK from './../../assets/img/uk.svg'

//Theme
import { themeLight, themeDark } from '../../config/theme'

const Header = props => {
  function handleclick(lang) {
    i18next.changeLanguage(lang)
  }
  const { t } = props
  return (
    <NavBar>
      <WrapperUl>
        <LinkStyle>
          <Link to='/games'>
            <span>{t('sideBar.1')}</span>
          </Link>
        </LinkStyle>
        <LinkStyle>
          <Link to='/mygames'>
            <span>{t('sideBar.2')}</span>
          </Link>
        </LinkStyle>
      </WrapperUl>

      <Wrapper>
        <Button onClick={() => props.actions.theme.changeTheme(themeLight)}>
          <span>{t('sideBar.3')}</span>
        </Button>
        <Button onClick={() => props.actions.theme.changeTheme(themeDark)}>
          <span>{t('sideBar.4')}</span>
        </Button>
      </Wrapper>

      <Wrapper>
        <button onClick={() => handleclick('en')}>
          <Image src={FlagUK} alt='Flag_uk'></Image>
        </button>
        <button onClick={() => handleclick('fr')}>
          <Image src={FlagFR} alt='Flag_fr'></Image>
        </button>
      </Wrapper>
    </NavBar>
  )
}
const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.text};
`
const Wrapper = styled.div`
  display: flex;
`
const WrapperUl = styled.ul`
  display: flex;
  margin: 0;
`
const Image = styled.img`
  height: 25px;
  width: 25px;
  padding: 4px;
`
const Button = styled.button`
  background-color: ${props => props.theme.secondary};
  padding: 0 10px;
  border: solid thin ${props => props.theme.tertiary};
`
const LinkStyle = styled.li`
  background-color: ${props => props.theme.secondary};
  padding: 0 10px;
  border: solid thin ${props => props.theme.tertiary};
  display: flex;
  align-items: center;
`

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(withTranslation()(Header))
