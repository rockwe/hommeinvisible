import { combineReducers } from 'redux'

import formGame from './formGame'
import filters from './filters'
import theme from './theme'

export default combineReducers({
  formGame,
  filters,
  theme
})
