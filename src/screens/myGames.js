import React from 'react'
import styled from 'styled-components'

import GameForm from '../components/gameForm'
import ListFilter from '../components/listGame'
import ListGroup from '../components/listGroups'

const MyGames = props => {
  return (
    <Container>
      <Wrapper>
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
  min-height: 100vh;
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

export default MyGames
