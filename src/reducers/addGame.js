import { ADD_GAME } from '../actions/addGame'

const initialState = {
  games: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload]
      }
    default:
      return state
  }
}
