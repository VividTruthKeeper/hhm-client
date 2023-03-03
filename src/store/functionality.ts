// Modules
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducers
import { activeLinkReducer } from "../reducers/activeLink.reducer";
import { languageReducer } from "../reducers/language.reducer";
import {
  newsScrollReducer,
  postReducer,
  searchDataReducer,
  featuredReducer,
  videoReducer,
  categoriesReducer,
} from "../reducers/dataReducer";
import { searchReducer } from "../reducers/searchReducer";

export const allReducers = combineReducers({
  activeLink: activeLinkReducer,
  language: languageReducer,
  newsScroll: newsScrollReducer,
  post: postReducer,
  search: searchReducer,
  searchData: searchDataReducer,
  featured: featuredReducer,
  video: videoReducer,
  categories: categoriesReducer,
});

export const functionalityStore = configureStore({
  reducer: allReducers,
});
