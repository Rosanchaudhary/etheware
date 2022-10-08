import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser, addUserDetail, loginUser } from "../api/registerUser";

const initialState = {
  user: null,
  status: "idle",
  email: "",
  country: "",
  language: "",
  fullName: "",
  contactNumber: "",
  vision: "",
  category: "",
  errormessage: "",
};
export const addUserDetails = createAsyncThunk(
  "register/addUserDetail",
  async (organizationName, { getState }) => {
    const state = getState();

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
export const loginUserThunk = createAsyncThunk(
  "register/loginUser",
  async (formValues, { rejectWithValue }) => {
    try {
      const response = await loginUser(formValues);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message.toString());
      return rejectWithValue(error.message.toString());
    }
  }
);
export const registerUserThunk = createAsyncThunk(
  "register/registerUser",
  async (formValues, { rejectWithValue }) => {
    try {
      const response = await registerUser(formValues);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message.toString());
      return rejectWithValue(error.message.toString());
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setVision: (state, actions) => {
      state.vision = actions.payload;
    },
    setCategory: (state, actions) => {
      state.category = actions.payload;
      state.step += 1;
    },
    setOrganizationName: (state, actions) => {
      state.organizationName = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registerUserThunk.fulfilled, (state, actions) => {
      state.status = "succeeded";
      state.email = actions.payload.email;
      state.user = actions.payload.userid;
      state.country = actions.payload.country;
      state.language = actions.payload.language;
      state.contactNumber = actions.payload.contact;
      state.fullName = actions.payload.fullName;
    });
    builder.addCase(registerUserThunk.rejected, (state, actions) => {
      state.status = "failed";
      state.errormessage = actions.payload;
    });

    builder.addCase(loginUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUserThunk.fulfilled, (state, actions) => {
      state.status = "succeeded";
      state.user = actions.payload.userid;
    });
    builder.addCase(loginUserThunk.rejected, (state, actions) => {
      state.status = "failed";
      state.errormessage = actions.payload;
    });

    builder.addCase(addUserDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addUserDetails.fulfilled, (state) => {
      state.status = "succeeded";
    });
  },
});

export const { setVision, setCategory, setOrganizationName } =
  registerSlice.actions;

export const selectStatus = (state) => state.register.status;
export const errorMessage = (state) => state.register.errormessage;
export default registerSlice.reducer;
