import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import allTheActions from '../../actions/'
import { bindActionCreators } from 'redux'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

const LoginForm = props => {
  //const history = useHistory()
  const [form, setForm] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    const { actions } = props
    actions.auth.loginUserCall(form.username, form.password)
    setForm('')
    console.log('Todo -> props', form)
  }

  /* const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  })*/

  return (
    <FormContainer>
      <FormStyled onSubmit={onSubmit}>
        <StyledInput
          placeholder='Entrer Email'
          name='username'
          onChange={e => setForm({ ...form, username: e.target.value })}
          type='text'
          onBlur={() =>
            form.username.length < 8
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Mail invalide'
                })
              : setForm({ ...form, isError: false })
          }
        ></StyledInput>
        {form.isError ? (
          <MessageError>
            <p>{form.isErrorMessage}</p>
          </MessageError>
        ) : null}
        <StyledInput
          name='password'
          placeholder='Entrer Password'
          onChange={e => setForm({ ...form, password: e.target.value })}
          type='password'
          onBlur={() =>
            form.password.length < 8
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Password Invalide'
                })
              : setForm({ ...form, isError: false })
          }
        ></StyledInput>
        <StyledInput disabled={form.isError} type='submit'></StyledInput>
      </FormStyled>
    </FormContainer>
  )
}

const MessageError = styled.div``

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
  background-color: ${props => props.theme.formIn};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  border-radius: 8px;
`

LoginForm.propTypes = {
  submit: PropTypes.func
}

const mapStateToProps = state => ({
  loginState: state.auth
})
const mapDispatchToProps = () => dispatch => ({
  actions: {
    auth: bindActionCreators(allTheActions.auth, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
withTranslation(['home', 'common'], { wait: true })(LoginForm)
