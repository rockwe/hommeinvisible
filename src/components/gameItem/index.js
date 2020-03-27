import React from 'react'
import styled from 'styled-components'

const GameItem = ({ id, title, description }) => {
  return (
    <Group>
      <Image src={require(`./../../assets/img/${id}.png`)}></Image>
      <GameTitle>{title}</GameTitle>
      <Content>{description}</Content>
      <button>AJOUT FAVORIS</button>
    </Group>
  )
}

const Group = styled.div`
  padding: 0 10px;
  border: solid thin ${props => props.theme.tertiary};
  margin: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.secondary};
`

const Image = styled.img`
  max-heigth: 225px
  max-width: 500px
`
const GameTitle = styled.h2``
const Content = styled.div``

export default GameItem
