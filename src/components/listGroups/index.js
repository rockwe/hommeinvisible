import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { connect } from 'react-redux'
import GroupItem from '../groupItem/'

const Groups = props => {
  console.log('props', props)

  return (
    <Wrapper>
      {props.gameState?.game?.map(form => {
        console.log('form', form)
        if (
          props.filters.game !== 'all' &&
          props.filters.game !== form.game.game
        )
          return
        return (
          <GroupItem
            key={form.id}
            game={form.game.game}
            players={form.game.players}
            desc={form.game.description}
          ></GroupItem>
        )
      })}
    </Wrapper>
  )
}

Groups.propTypes = {
  filters: PropTypes.object,
  gameState: PropTypes.object
}
const Wrapper = styled.div`
  width: 100%;
`

const mapStateToProps = state => ({
  gameState: state.formGame,
  filters: state.filters
})

export default connect(mapStateToProps)(Groups)
