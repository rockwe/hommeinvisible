import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/loginForm'

import login from '../services/login'

import LogoImg from './../assets/img/lfg.png'

const submit = (e, form, history) => {
  e.preventDefault()
  const { username, password } = form
  login(username, password, history)
}

const Login = props => {
  console.log('TCL: props', props)
  return (
    <Container>
      <Logo src={LogoImg} alt='Logo'></Logo>
      <LoginForm submit={submit}></LoginForm>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
`
const Logo = styled.img`
  height: 60px;
  width: 60px;
`

export default Login
