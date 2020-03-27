import { ADD_GROUP } from '../actions/formGame'
import shop from '../services/shop'
const initialState = {
  group: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        group: [...state.group, action.payload]
      }
    default:
      return state
  }
}

// ????
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
