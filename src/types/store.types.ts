// Reducers
import { allReducers } from "../store/functionality";

// Types
import { IPostsData } from "./data.types";

// NavLink
export interface ActiveLinkType {
  active: number;
}
export interface ActiveLinkActionType {
  type: "SET_ACTIVE_LINK";
  payload: number;
}

// Language
export interface ILanguage {
  title: "RU" | "EN" | "TM";
}

export interface ILanguageAction {
  type: "SET_LANGUAGE";
  payload: "RU" | "EN" | "TM";
}

// NewsScroll

export interface INewsScroll {
  data: IPostsData[];
}
export interface INewsScrollAction {
  type: "SET_NEWS_SCROLL";
  payload: INewsScroll["data"];
}

// Post

export interface IPostData {
  data: {
    data: IPostsData;
  };
}

export interface IPostDataAction {
  type: "SET_POST";
  payload: IPostData["data"];
}
export interface IFeaturedData {
  data: IPostsData[];
}

export interface IFeaturedDataAction {
  type: "SET_FEATURED";
  payload: IFeaturedData["data"];
}

//

export interface ISearchData {
  value: string;
}
export interface ISearchDataAction {
  type: "SET_SEARCH";
  payload: ISearchData["value"];
}

export interface ISearchResult {
  data: IPostsData[];
}
export interface ISearchResultAction {
  type: "SET_SEARCH_DATA";
  payload: ISearchResult["data"];
}

// ALL TYPES BEFORE THIS LINE ==================

export type RootState = ReturnType<typeof allReducers>;
