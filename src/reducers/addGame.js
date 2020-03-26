import { ADD_GAME } from '../actions/addGame'

const initialState = {
  games: []
}

export default (state = initialState, action) => {
  console.log('STATE' + action.payload)
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
