import { AnyAction } from '@reduxjs/toolkit';

type AddAction = { type: 'accessories/ADD'; payload: [] };

type Action = AddAction;

const add = (data: []): AddAction => ({
  type: 'accessories/ADD',
  payload: data,
});

export const actions = { add };

export const accessoriesReducer = (
  accessories: [] = [],
  action: Action | AnyAction
) => {
  switch (action.type) {
    case 'accessories/ADD':
      return action.payload;

    default:
      return accessories;
  }
};
