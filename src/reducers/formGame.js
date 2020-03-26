import { ADD_GAME } from '../actions/formGame'
import shop from '../services/shop'
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
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}
