import { combineReducers } from 'redux'
import authReducer from './authReducer'
import formGame from './formGame'
import filters from './filters'

export default combineReducers({
  formGame,
  filters,
  authReducer
})
