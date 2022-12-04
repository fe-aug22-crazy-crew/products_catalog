/* eslint-disable max-len */
// import { AnyAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';
import { Phone } from '../types/Phone';

type addAction = { type: 'cart/ADD'; payload: CartItem };
type removeAction = { type: 'cart/REMOVE'; payload: Phone };
type loadAction = { type: 'cart/LOAD'; payload: CartItem[] };
type plusOneAction = { type: 'cart/PLUSONE'; payload: Phone };
type minusOneAction = { type: 'cart/MINUSONE'; payload: Phone };
type clearAll = { type: 'cart/CLEARAll' };

type Action =
  | addAction
  | removeAction
  | loadAction
  | plusOneAction
  | minusOneAction
  | clearAll;

const add = (phone: CartItem): addAction => ({
  type: 'cart/ADD',
  payload: phone,
});

const remove = (phone: Phone): removeAction => ({
  type: 'cart/REMOVE',
  payload: phone,
});

const clear = (): clearAll => ({ type: 'cart/CLEARAll' });

const load = (phones: CartItem[]): loadAction => ({
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
  clear,
};

export const cartReducer = (
  cart: CartItem[] = [],
  action: Action,
) => {
  switch (action.type) {
  case 'cart/ADD':
    return [...cart, action.payload];
  case 'cart/REMOVE':
    return cart.filter((state) => state.product.id !== action.payload.id);
  case 'cart/LOAD':
    return [...action.payload];

  case 'cart/PLUSONE': {
    const foundCartItemInfo
        = cart.find((state) => state.product.id === action.payload.id) || null;

    if (foundCartItemInfo) {
      foundCartItemInfo.count++;
    }

    return [...cart];
  }

  case 'cart/MINUSONE': {
    const foundCartItemInfo
        = cart.find((state) => state.product.id === action.payload.id) || null;

    if (foundCartItemInfo) {
      foundCartItemInfo.count--;
    }

    return [...cart];
  }

  case 'cart/CLEARAll':
    return [];

  default:
    return cart;
  }
};
