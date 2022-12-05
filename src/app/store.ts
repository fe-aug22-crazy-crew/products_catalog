import { configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from '../features/phones';
import { favouriteReducer } from '../features/favourites';

import { newestPhonesReducer } from '../features/newestPhones';
import { hotPhonesReducer } from '../features/hotPhones';

import { cartReducer } from '../features/cart';
import { queryReducer } from '../features/query';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    favourites: favouriteReducer,
    newestPhones: newestPhonesReducer,
    hotPhones: hotPhonesReducer,
    cart: cartReducer,
    query: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
