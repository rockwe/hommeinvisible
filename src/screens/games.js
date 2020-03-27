import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import allTheActions from '../actions'

import styled from 'styled-components'
import GroupItem from '../components/groupItem/'
import GameItem from '../components/gameItem/'

import { withTranslation } from 'react-i18next'

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
  const { t } = props
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>{t('game.1')}</span>
        </Title>
        <Notifications />
        {Games.map(game => (
          <form
            onSubmit={e => onSubmit(e, game)}
            value={game} /*onSubmit={onSubmit} value={game}*/
          >
            <GameItem
              id={game.id}
              title={game.title}
              description={game.description}
            ></GameItem>
          </form>
        ))}
      </Wrapper>
      <Wrapper>
        <Title>
          <span>{t('game.2')}</span>
        </Title>
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
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  background-color: ${props => props.theme.primary};
`
const Container = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.primary};
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Game))
