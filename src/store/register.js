import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux/registerSlice.js';

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
