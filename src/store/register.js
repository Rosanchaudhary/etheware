import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux/registerSlice.js';
import projectReducer from '../redux/projectSlice';
import stepReducer from '../redux/stepSlice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    project:projectReducer,
    step:stepReducer
  },
});
