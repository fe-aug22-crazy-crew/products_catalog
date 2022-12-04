/* eslint-disable max-len */
import { AnyAction } from '@reduxjs/toolkit';
import { Phone } from '../types/Phone';

type addAction = { type: 'cart/ADD'; payload: Phone };
type removeAction = { type: 'cart/REMOVE'; payload: Phone };
type loadAction = { type: 'cart/LOAD'; payload: Phone[] };
type plusOneAction = { type: 'cart/PLUSONE'; payload: Phone };
type minusOneAction = { type: 'cart/MINUSONE'; payload: Phone };

type Action =
  | addAction
  | removeAction
  | loadAction
  | plusOneAction
  | minusOneAction;

const add = (phone: Phone): addAction => ({
  type: 'cart/ADD',
  payload: phone,
});

const remove = (phone: Phone): removeAction => ({
  type: 'cart/REMOVE',
  payload: phone,
});

const load = (phones: Phone[]): loadAction => ({
  type: 'cart/LOAD',
  payload: phones,
});

const plusOne = (phone: Phone): plusOneAction => ({
  type: 'cart/PLUSONE',
  payload: phone,
});

const minusOne = (phone: Phone): minusOneAction => ({
  type: 'cart/MINUSONE',
  payload: phone,
});

export const actions = {
  add,
  remove,
  load,
  plusOne,
  minusOne,
};

type cartItem = {
  product: Phone;
  count: number;
};

export const cartReducer = (
  cart: cartItem[] = [],
  action: Action | AnyAction,
) => {
  switch (action.type) {
  case 'cart/ADD':
    return [...cart, action.payload];
  case 'cart/REMOVE':
    return cart.filter((state) => state.product.id !== action.payload.id);
  case 'cart/LOAD':
    return [...action.payload];
  case 'cart/PLUSONE':
    return [
      ...cart,
      cart.forEach(() => {
        let foundProduct = cart.find((item) => item.product.id === action.payload.id) || null;

        if (foundProduct) {
          foundProduct = {
            ...foundProduct,
            count: foundProduct.count++,
          };
        }

        return foundProduct;
      }),
    ];

  case 'cart/MINUSONE':
    return [
      ...cart,
      cart.forEach(() => {
        let foundProduct = cart.find((item) => item.product.id === action.payload.id) || null;

        if (foundProduct) {
          foundProduct = {
            ...foundProduct,
            count: foundProduct.count--,
          };
        }

        return foundProduct;
      }),
    ];

  default:
    return cart;
  }
};
