import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id:"",
  email: "",
  name: "",
  role: "",
  wage: 0,
  status: "",
  phoneNumber: "",
};

const user = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    SetUser: (state, action) => action.payload,
    EmptyUser:(state, action) => initialState,
  },
});
export const { SetUser,EmptyUser } = user.actions;
export default user;
