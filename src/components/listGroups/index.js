import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Groups = props => {
  console.log('props', props)

  return (
    <div>
      <div>
        {props.gameState?.game?.map(form => {
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
function getVisibleGroups(game, formGame = []) {
  console.log('LOG', formGame)
  return formGame.filter(form => {
    return game === 'all' || game === form.game
  })
}
const mapStateToProps = state => ({
  gameState: getVisibleGroups(state.formGame)
  //gameState: state.formGame
})

export default connect(mapStateToProps)(Groups)
