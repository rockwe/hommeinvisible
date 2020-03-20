import { combineReducers } from 'redux'

import formGame from './formGame'
import filters from './filters'

export default combineReducers({
  formGame,
  filters
})
