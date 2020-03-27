import { LOGIN_USER } from '../actions/authentification'

const initialState = {
  token: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
export default authReducer
