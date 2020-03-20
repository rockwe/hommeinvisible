import React from 'react'
import { connect } from 'react-redux'

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
function Filters({ selectedGame, onGameChange }) {
  return (
    <div>
      <div>
        Filters:
        <div>
          Game:
          <select
            defaultValue={selectedGame}
            onChange={e => onGameChange(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='League of Legends'>League of Legends</option>
            <option value='World of Warcraft'>World of Warcraft</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
