import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import allTheActions from '../actions'

import { Notifications } from 'react-push-notification'
import addNotification from 'react-push-notification'

/* eslint-disable react/jsx-key */

import data from '../data.json'
const Games = data.Jeux

const Game = props => {
  //const [game, setGame] = useState('')

  useEffect(() => {
    //console.log('GAMEEE' + game)
  })

  //const onSubmit = e => {
  const onSubmit = (e, game) => {
    //console.log('GAME' + game)

    e.preventDefault()
    const { actions } = props

    actions.games.addGame({
      GAMERS: game,
      id: uuid()
    })
    //setGame('')

    addNotification({
      title: 'New fav',
      subtitle: 'New fav',
      message: 'New fav',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
    })
  }

  return (
    <div>
      <Notifications />
      {Games.map(game => (
        <form
          onSubmit={e => onSubmit(e, game)}
          value={game} /*onSubmit={onSubmit} value={game}*/
        >
          <div key={game.id}>
            <p key={game.id}>ID: {game.id}</p>
            <p key={game.id}>TITLE: {game.title}</p>
            <p key={game.id}>DESCIRPTION{game.description}</p>

            <button>AJOUT FAVORIS</button>
          </div>
        </form>
      ))}
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
