import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import allTheActions from '../actions'

/* eslint-disable react/jsx-key */

import data from '../data.json'
const Jeux = data.Jeux

const Game = props => {
  //console.log('GAME', props)
  const [game, setGame] = useState('')

  /*console.log(props)
  console.log(game)
  console.log(setGame)
  console.log(Jeux)*/

  useEffect(() => {
    //console.log('OKOK' + game)
  })

  const onSubmit = e => {
    //console.log('HAAHAHHA')

    e.preventDefault()
    const { actions } = props
    console.log('TEST:' + actions.games)
    actions.games.addGame({
      GAMERS: game,
      id: uuid()
    })
    setGame('')
    //console.log('ok')
  }

  return (
    <div>
      <div>
        {Jeux.map(s => (
          <div key={s.id}>
            <p key={s.id}>ID: {s.id}</p>
            <p key={s.id}>TITLE: {s.title}</p>
            <p key={s.id}>DESCIRPTION{s.description}</p>
            <form onSubmit={onSubmit}>
              <button value={game} onChange={e => setGame(e.target.value)}>
                AJOUT FAVORIS
              </button>
            </form>
          </div>
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
