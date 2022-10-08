import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProjectToServer, uploadPhoto } from "../api/projectRepository";

const initialState = {
  status: "idle",
  projectName: "",
  projectId: "",
  projectImage: "",
  date: "",
  domainName: "",
  budget: "",
};

export const uploadProjectPhoto = createAsyncThunk(
  "project/uploadProjectPhoto",
  async (selectedImage) => {
    const response = await uploadPhoto(selectedImage);
    return response;
  }
);

export const addProject = createAsyncThunk(
  "project/createProject",
  async (test,{ getState }) => {
    console.log(test)
    const state = getState();

    const data = {
      projectName: state.project.projectName,
      projectId: state.project.projectId,
      projectImage: state.project.projectImage,
      date: state.project.date,
      domainName: state.project.domainName,
      budget: state.project.budget,
    };
    console.log(data)

   await addProjectToServer(data);
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    projectTitle: (state, actions) => {
      state.projectName = actions.payload.projectName;
      state.projectId = actions.payload.projectId;
    },
    projectDate: (state, actions) => {
      state.date = actions.payload;
    },
    setDomain: (state, actions) => {
      console.log(actions.payload);
      state.domainName = actions.payload;
    },
    setBudget: (state, actions) => {
      state.budget = actions.payload;
    },
    placeOrder: (state) => {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadProjectPhoto.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadProjectPhoto.fulfilled, (state, actions) => {
        state.status = "succeeded";
        console.log(actions);
        state.projectImage = actions.payload;
      });

      builder
      .addCase(addProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProject.fulfilled, (state) => {
        state.status = "succeeded";
      });
  },
});

export const { projectTitle, projectDate, setDomain, setBudget } =
  projectSlice.actions;

export default projectSlice.reducer;
