// Modules
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { activeLinkReducer } from "../reducers/activeLink.reducer";

export const functionalityStore = configureStore({
  reducer: activeLinkReducer,
});
