import { AnyAction } from '@reduxjs/toolkit';
import { Phone } from '../types/Phone';

type addAction = { type: 'favourite/ADD', payload: Phone }; 
type removeAction = { type: 'favourite/REMOVE', payload: Phone }; 
type loadAction = { type: 'favourite/LOAD', payload: Phone[] }; 

type Action = addAction | removeAction | loadAction;

const add = (phone: Phone): addAction => ({ type: 'favourite/ADD', payload: phone });
const remove = (phone: Phone): removeAction => ({ type: 'favourite/REMOVE', payload: phone });
const load = (phones: Phone[]): loadAction => ({ type: 'favourite/LOAD' , payload: phones });

export const actions = { add, remove, load };

export const favouriteReducer = (
  favourites: Phone[] = [],
  action: Action | AnyAction,
) => {
  switch (action.type) {
  case 'favourite/ADD':
    return [...favourites, action.payload];
  case 'favourite/REMOVE':
    return favourites.filter(phone => phone.id !== action.payload.id);
  case 'favourite/LOAD':
    return [...action.payload];

  default: 
    return favourites;
  }
};
