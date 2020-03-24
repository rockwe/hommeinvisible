import { combineReducers } from 'redux'
import authReducer from './authReducer'
import formGame from './formGame'
import filters from './filters'
import theme from './theme'

export default combineReducers({
  formGame,
  filters,
  theme,
  authReducer
})
