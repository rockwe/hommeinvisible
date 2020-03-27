import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import uuid from 'uuid/v4'

import allTheActions from '../../actions/'

const GroupForm = props => {
  const [form, setForm] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    const { actions } = props
    actions.formGroup.addGroup({
      group: form,
      id: uuid()
    })
    setForm('')
  }

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

GroupForm.propTypes = {
  submit: PropTypes.func
}

const mapStateToProps = state => ({
  gameState: state.formGroup
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    formGroup: bindActionCreators(allTheActions.formGame, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
