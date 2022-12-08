import { Phone } from '../types/Phone';
import { AnyAction } from '@reduxjs/toolkit';

type AddAction = { type: 'hotPhones/ADD'; payload: Phone[] };

type Action = AddAction;

const add = (data: Phone[]): AddAction => ({
  type: 'hotPhones/ADD',
  payload: data,
});

export const actions = { add };

export const hotPhonesReducer = (
  phones: Phone[] = [],
  action: Action | AnyAction,
) => {
  switch (action.type) {
  case 'hotPhones/ADD':
    // eslint-disable-next-line no-param-reassign
    return (phones = action.payload);

  default:
    return phones;
  }
};
