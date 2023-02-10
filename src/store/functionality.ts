// Modules
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducers
import { activeLinkReducer } from "../reducers/activeLink.reducer";
import { languageReducer } from "../reducers/language.reducer";
import { newsScrollReducer, postReducer } from "../reducers/dataReducer";

export const allReducers = combineReducers({
  activeLink: activeLinkReducer,
  language: languageReducer,
  newsScroll: newsScrollReducer,
  post: postReducer,
});

export const functionalityStore = configureStore({
  reducer: allReducers,
});
