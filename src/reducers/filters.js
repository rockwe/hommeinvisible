import { SET_GAME } from '../actions/filters'

const initialState = {
  games: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        game: action.game
      }
    default:
      return state
  }
}
