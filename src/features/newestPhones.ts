import { Phone } from '../types/Phone';
import { AnyAction } from '@reduxjs/toolkit';

type AddAction = { type: 'newestPhones/ADD'; payload: Phone[] };

type Action = AddAction;

const add = (data: Phone[]): AddAction => ({
  type: 'newestPhones/ADD',
  payload: data,
});

export const actions = { add };

export const newestPhonesReducer = (
  newestPhones: Phone[] = [],
  action: Action | AnyAction,
) => {
  switch (action.type) {
  case 'newestPhones/ADD':
    // eslint-disable-next-line no-param-reassign
    return (newestPhones = action.payload);

  default:
    return newestPhones;
  }
};
