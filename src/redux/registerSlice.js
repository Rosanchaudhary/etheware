import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser, addUserDetail } from "../api/registerUser";

const initialState = {
  step: 0,
  user: null,
  status: "idle",
  email:"",
  country: "",
  language: "",
  fullName: "",
  contactNumber: "",
  vision: "",
  category: "",
};
export const addUserDetails = createAsyncThunk(
  "register/addUserDetail",
  async (organizationName, { getState }) => {
    const state = getState();

    console.log(state.register.email);

    await addUserDetail(
      state.register.email,
      state.register.fullName,
      state.register.contactNumber,
      state.register.country,
      state.register.language,
      state.register.vision,
      state.register.category,
      organizationName
    );
  }
);
export const registerUserThunk = createAsyncThunk(
  "register/registerUser",
  async ({
    email,
    password,
    selectCountry,
    selectLanguage,
    contact,
    fullName,
  }) => {
    const response = await registerUser(
      email,
      password,
      selectCountry,
      selectLanguage,
      contact,
      fullName
    );
    return response;
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setVision: (state, actions) => {
      state.vision = actions.payload;
      state.step += 1;
    },
    setCategory: (state, actions) => {
      state.category = actions.payload;
      state.step += 1;
    },
    setOrganizationName: (state, actions) => {
      state.organizationName = actions.payload;
      state.step += 1;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registerUserThunk.fulfilled, (state, actions) => {
      state.status = "loaded";
      state.email = actions.payload.email;
      state.user = actions.payload.userid;
      state.country = actions.payload.country;
      state.language = actions.payload.language;
      state.contactNumber = actions.payload.contactNumber;
      state.fullName = actions.payload.fullName;
      state.step += 1;
    });
    builder.addCase(addUserDetails.pending, (state) => {

      state.status = "loading";
    });
    builder.addCase(addUserDetails.fulfilled, (state) => {
      state.status = "loaded";
    });
  },
});

export const {
  nextStep,
  previousStep,
  setVision,
  setCategory,
  setOrganizationName,
} = registerSlice.actions;
export const selectStep = (state) => state.register.step;

export default registerSlice.reducer;
