import { ADD, INCREMENT, DECREMENT, RESET } from './cart.types';

export const addToCart = (product) => {
  return {
    type: ADD,
    data: product,
  }
};

export const incrementCart = (product) => {
  return {
    type: INCREMENT,
    data: product,
  }
};

export const decrementCart = (product) => {
  return {
    type: DECREMENT,
    data: product,
  }
};

export const resetCart = () => {
  return {
    type: RESET,
  }
};
