import React from 'react'
import styled from 'styled-components'

import GameForm from '../components/gameForm'
import ListFilter from '../components/listGame'
import ListGroup from '../components/listGroups'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../actions'

import { themeLight, themeDark } from '../config/theme'

const MyGames = props => {
  return (
    <Container>
      <Wrapper>
        <button onClick={() => props.actions.theme.changeTheme(themeLight)}>
          Theme Light
        </button>
        <button onClick={() => props.actions.theme.changeTheme(themeDark)}>
          Theme Dark
        </button>
        <GameForm></GameForm>
        <Content>
          <ListFilter></ListFilter>
          <ListGroup></ListGroup>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 90%;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  outline: black solid thin;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
`

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(MyGames)
