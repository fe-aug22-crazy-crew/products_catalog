import { AnyAction } from '@reduxjs/toolkit';

type AddAction = { type: 'searchParams/ADD'; payload: URLSearchParams };

type Action = AddAction;

const add = (data: URLSearchParams): AddAction => ({
  type: 'searchParams/ADD',
  payload: data,
});

export const actions = { add };

export const queryReducer = (
  searchParams: URLSearchParams = new URLSearchParams({
    qr: 'newest',
    limit: '24',
    pg: '1',
  }),
  action: Action | AnyAction,
) => {
  switch (action.type) {
  case 'searchParams/ADD':
    return action.payload;

  default:
    return searchParams;
  }
};
