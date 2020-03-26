import React from 'react'
//import { useTranslation } from 'react-i18next'
import { withTranslation } from 'react-i18next'
import i18next from '../../i18n'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../../actions'

//Images
import FlagFR from './../../assets/img/france.svg'
import FlagUK from './../../assets/img/uk.svg'

//Theme
import { themeLight, themeDark } from '../../config/theme'

const Header = (props, t) => {
  function handleclick(lang) {
    i18next.changeLanguage(lang)
  }
  function handleTheme(theme) {
    props.actions.theme.changeTheme(theme)
  }
  console.log('PROPS', props)
  return (
    <NavBar>
      <Wrapper>
        <Button onClick={() => handleTheme(themeLight)}>light</Button>
        <Button onClick={() => handleTheme(themeDark)}>dark</Button>
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
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
`
const Wrapper = styled.div`
  display: flex;
`
const Image = styled.img`
  height: 25px;
  width: 25px;
  padding: 4px;
`
const Button = styled.button`
  background-color: ${props => props.theme.secondary};
  padding: 0 10px;
  border: solid thin ${props => props.theme.primary};
`

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(Header)
