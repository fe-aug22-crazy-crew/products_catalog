import { configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from '../features/phones';
import { favouriteReducer } from '../features/favourites';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    favourites: favouriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
