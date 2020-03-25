import React from 'react'
import { connect } from 'react-redux'
import allTheActions from '../../actions/'
import { bindActionCreators } from 'redux'

const Game = props => {
  console.log('props', props)

  return (
    <div>
      <div> hello</div>
    </div>
  )
}

import PropTypes from 'prop-types'
import styled from 'styled-components'

function mapStateToProps(state) {
  const { game } = state
  return {
    selectedGame: game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGameChange(game) {
      dispatch({
        type: 'SET_GAME',
        game
      })
    }
  }
}
function Filters({ onGameChange }) {
  return (
    <Wrapper>
      <button
        value='League of Legends'
        onClick={e => onGameChange(e.target.value)}
      >
        League of Legends
      </button>
      <button
        value='World of Warcraft'
        onClick={e => onGameChange(e.target.value)}
      >
        World of Warcraft
      </button>
      <button value='Warzone' onClick={e => onGameChange(e.target.value)}>
        Warzone
      </button>
    </Wrapper>
  )
}

Filters.propTypes = {
  onGameChange: PropTypes.func
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
