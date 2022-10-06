import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectName: "",
  projectSize: "",
  date: "",
  domainName: "",
  budget: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});
