import { combineReducers } from 'redux'

import authReducer from './authReducer'
import formGame from './formGame'
import filters from './filters'
import theme from './theme'
import addGame from './addGame'

export default combineReducers({
  formGame,
  filters,
  theme,
  authReducer,
  addGame
})