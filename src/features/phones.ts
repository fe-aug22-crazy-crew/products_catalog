import { Phone } from '../types/Phone';
import { AnyAction } from '@reduxjs/toolkit';

type AddAction = { type: 'phones/ADD'; payload: Phone[] };

type Action = AddAction;

const add = (data: Phone[]): AddAction => ({
  type: 'phones/ADD',
  payload: data,
});

export const actions = { add };

export const phonesReducer = (
  phones: Phone[] = [],
  action: Action | AnyAction
) => {
  switch (action.type) {
  case 'phones/ADD':
    return (phones = action.payload);

  default:
    return phones;
  }
};
