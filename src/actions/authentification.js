import axios from 'axios'
import { history } from './history'
export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = payload => ({
  type: LOGIN_USER,
  payload
})

export const loginUserCall = (username, password) => dispatch => {
  axios
    .post('https://easy-login-api.herokuapp.com/users/login', {
      username: username,
      password: password
    })
    .then(res => {
      console.log(res.data)
      dispatch(loginUser(res.data))
      const json = res.headers['x-access-token']
      const obj = JSON.stringify(json)
      console.log(obj)
      localStorage.setItem('x-access-token', obj)
      history.push('/games')
      window.location.reload()
    })
    .catch(err => console.error(err))
}
