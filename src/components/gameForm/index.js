import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import uuid from 'uuid/v4'

import allTheActions from '../../actions/'

const GameForm = props => {
  const [form, setForm] = useState('')

  useEffect(() => {
    console.log(form)
  })

  const onSubmit = e => {
    e.preventDefault()
    const { actions } = props
    actions.formGame.addGame({
      game: form,
      id: uuid()
    })
    setForm('')
    console.log('Todo -> props', form)
  }
  console.log(props)

  return (
    <div>
      <FormContainer>
        <FormStyled onSubmit={onSubmit}>
          <StyledInput
            placeholder='Game'
            name='game'
            onChange={e => setForm({ ...form, game: e.target.value })}
            type='text'
          ></StyledInput>
          <StyledInput
            placeholder='How many?'
            name='players'
            onChange={e => setForm({ ...form, players: e.target.value })}
            type='number'
            min='0'
          ></StyledInput>
          <StyledInput
            placeholder='Description'
            name='description'
            onChange={e => setForm({ ...form, description: e.target.value })}
            type='textarea'
          ></StyledInput>
          <StyledInput type='submit'></StyledInput>
        </FormStyled>
      </FormContainer>
    </div>
  )
}

const StyledInput = styled.input`
  outline: none;
  margin: 3px 0px;
  border-radius: 4px;
  border: none;
  height: 20px;
  padding: 0px 12px;
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormStyled = styled.form`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.formIn};
`

GameForm.propTypes = {
  submit: PropTypes.func
}

const mapStateToProps = state => ({
  gameState: state.formGame
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    formGame: bindActionCreators(allTheActions.formGame, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GameForm)
