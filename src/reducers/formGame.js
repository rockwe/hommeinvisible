import { ADD_GAME } from '../actions/formGame'

const initialState = {
  game: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        game: [...state.game, action.payload]
      }
    default:
      return state
  }
}
