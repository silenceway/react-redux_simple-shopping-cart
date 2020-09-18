import { SET } from '../actions/products.types'

const initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  if (action.type === SET) {
    return {
      ...state,
      products: action.products
    }
  }
  return state
};
