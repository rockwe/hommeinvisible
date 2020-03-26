import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import allTheActions from '../actions'

/* eslint-disable react/jsx-key */

import data from '../data.json'
const Games = data.Jeux

const Game = props => {
  const [game, setGame] = useState('')

  useEffect(() => {
    //console.log('GAMEEE' + game)
  })

  const onSubmit = e => {
    //console.log(e)
    console.log('GAME' + game)

    e.preventDefault()
    const { actions } = props
    //console.log('e:' + JSON.stringify(e))

    actions.games.addGame({
      GAMERS: game,
      id: uuid()
    })
    setGame('')
  }

  return (
    <div>
      <div>
        {Games.map(game => (
          <form onSubmit={onSubmit} value={game}>
            <div key={game.id}>
              <p key={game.id}>ID: {game.id}</p>
              <p key={game.id}>TITLE: {game.title}</p>
              <p key={game.id}>DESCIRPTION{game.description}</p>

              <button>AJOUT FAVORIS</button>
            </div>
          </form>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  gamesState: state.games
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    games: bindActionCreators(allTheActions.addGame, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
