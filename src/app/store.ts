import { createSlice, configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from '../features/phones';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
