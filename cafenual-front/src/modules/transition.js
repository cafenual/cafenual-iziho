import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
  writer: [
    {
      _id: "",
      name: "",
      role: "",
      status: "",
    },
  ],
};

const transition = createSlice({
  name: "transitionReducer",
  initialState,
  reducers: {
    SetTransition: (state, action) => action.payload,
    EmptyTransition: (state, action) => initialState,
  },
});
export const { SetTransition, EmptyTransition } = transition.actions;
export default transition;
