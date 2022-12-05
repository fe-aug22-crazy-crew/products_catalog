import { configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from '../features/phones';
import { favouriteReducer } from '../features/favourites';
import { cartReducer } from '../features/cart';
import { queryReducer } from '../features/query';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    favourites: favouriteReducer,
    cart: cartReducer,
    query: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
