import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import allTheActions from '../actions'

import styled from 'styled-components'
import GroupItem from '../components/groupItem/'

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
      <Wrapper>
        <Title>Games</Title>
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
      </Wrapper>
      <Wrapper>
        <Title>Groups</Title>
        {props.groupState?.group?.map(form => {
          console.log('form', form)
          if (form.group.players == '0') return
          return (
            <GroupItem
              key={form.id}
              game={form.group.game}
              players={form.group.players}
              desc={form.group.description}
            ></GroupItem>
          )
        })}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`

const Title = styled.h1``

const mapStateToProps = state => ({
  gamesState: state.games,
  groupState: state.formGame
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    games: bindActionCreators(allTheActions.addGame, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
