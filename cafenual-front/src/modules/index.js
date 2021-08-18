import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transition from "./transition";
import user from "./users";

const rootReducer = combineReducers({
  user: user.reducer,
  transition: transition.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
