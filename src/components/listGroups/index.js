import React, { useState } from 'react'

import { connect } from 'react-redux'

const Groups = props => {
  console.log('props', props)

  return (
    <div>
      <div>
        {props.gameState?.game?.map(form => {
          console.log('form', form)
          if (
            props.filters.game !== 'all' &&
            props.filters.game !== form.game.game
          )
            return
          return (
            <div key={form.id}>
              <p>
                Pour le jeu {form.game.game}, need {form.game.players} personnes
                : {form.game.description}
              </p>{' '}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  gameState: state.formGame,
  filters: state.filters
})

export default connect(mapStateToProps)(Groups)
