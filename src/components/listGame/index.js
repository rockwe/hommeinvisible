import React from 'react'
import { connect } from 'react-redux'
import allTheActions from '../../actions/'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Game = props => {
  console.log('props', props)

  return (
    <div>
      <div> hello</div>
    </div>
  )
}

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
      <ButtonCustom
        value='League of Legends'
        onClick={e => onGameChange(e.target.value)}
      >
        League of Legends
      </ButtonCustom>
      <ButtonCustom
        value='World of Warcraft'
        onClick={e => onGameChange(e.target.value)}
      >
        World of Warcraft
      </ButtonCustom>
      <ButtonCustom value='Warzone' onClick={e => onGameChange(e.target.value)}>
        Warzone
      </ButtonCustom>
    </Wrapper>
  )
}

Filters.propTypes = {
  onGameChange: PropTypes.func
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const ButtonCustom = styled.button`
  background-color: ${props => props.theme.formIn};
  border: solid thin ${props => props.theme.primary};
  border-radius: 0 10px 0 0;
  padding: 10px 0;
`

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
