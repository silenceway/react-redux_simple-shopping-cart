import { SET } from './products.types'

export function setProducts(products) {
  return {
    type: SET,
    products
  }
};
