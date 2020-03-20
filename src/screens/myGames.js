import React from 'react'
import styled from 'styled-components'

import GameForm from '../components/gameForm'
import ListFilter from '../components/listGame'
import ListGroup from '../components/listGroups'

const MyGames = () => {
  return (
    <Container>
      <Wrapper>
        <GameForm></GameForm>
        <ListGroup></ListGroup>
        <ListFilter></ListFilter>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 90%;
  background-color: white;
  outline: black solid thin;
  display: flex;
  flex-direction: column;
`

export default MyGames
