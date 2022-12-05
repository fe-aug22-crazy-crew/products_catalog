import { configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from '../features/phones';
import { favouriteReducer } from '../features/favourites';
import { newestPhonesReducer } from '../features/newestPhones';
import { hotPhonesReducer } from '../features/hotPhones';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    favourites: favouriteReducer,
    newestPhones: newestPhonesReducer,
    hotPhones: hotPhonesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
