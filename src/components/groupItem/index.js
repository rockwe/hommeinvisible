import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GroupItem = ({ key, game, players, desc }) => {
  return (
    <Group key={key}>
      <p>
        Pour le jeu {game}, need {players} personnes : {desc}
      </p>{' '}
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
`

export default GroupItem
