import React from 'react'
import styled from 'styled-components'

import LoginForm from '../components/loginForm'

import login from '../services/login'

const submit = (e, form, history) => {
  e.preventDefault()
  const { username, password } = form
  login(username, password, history)
}

const Login = props => {
  console.log('TCL: props', props)
  return (
    <Container>
      <LoginForm submit={submit}></LoginForm>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Login
