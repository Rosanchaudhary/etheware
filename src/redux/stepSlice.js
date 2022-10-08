import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state) => { 
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { nextStep, previousStep } = stepSlice.actions;
export const selectStep = (state) => state.step.step;

export default stepSlice.reducer;
