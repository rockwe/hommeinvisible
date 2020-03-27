import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GroupItem = ({ props, key, game, players, desc }) => {
  return (
    <Group key={key}>
      <Item>Jeu: {game}</Item>
      <Item>Recherche: {players} joueurs</Item>
      <Item>Précisions / description: {desc}</Item>
      <Button> Rejoindre</Button>
    </Group>
  )
}

GroupItem.propTypes = {
  key: PropTypes.string,
  game: PropTypes.string,
  players: PropTypes.string,
  desc: PropTypes.string
}
const Group = styled.div`
  padding: 0 10px;
  border: solid thin ${props => props.theme.primary};
  margin: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.tertiary};
`
const Item = styled.div``
const Button = styled.button`
  background-color: ${props => props.theme.formIn};
  margin: 5px 0;
  border-radius: 4px;
`

export default GroupItem
