// Modules
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducers
import { activeLinkReducer } from "../reducers/activeLink.reducer";
import { languageReducer } from "../reducers/language.reducer";

export const allReducers = combineReducers({
  activeLink: activeLinkReducer,
  language: languageReducer,
});

export const functionalityStore = configureStore({
  reducer: allReducers,
});
