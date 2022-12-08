import { AnyAction } from '@reduxjs/toolkit';

type AddAction = { type: 'tablets/ADD'; payload: [] };

type Action = AddAction;

const add = (data: []): AddAction => ({
  type: 'tablets/ADD',
  payload: data,
});

export const actions = { add };

export const tabletsReducer = (
  tablets: [] = [],
  action: Action | AnyAction
) => {
  switch (action.type) {
    case 'tablets/ADD':
      return action.payload;

    default:
      return tablets;
  }
};
