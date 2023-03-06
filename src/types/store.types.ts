// Reducers
import { allReducers } from "../store/functionality";

// Types
import { ICategoriesData, IPostsData } from "./data.types";
import { INewPostsData } from "./posts.types";

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
  data: INewPostsData;
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
export interface IVideoData {
  data: INewPostsData;
}

export interface IVideoDataAction {
  type: "SET_VIDEO";
  payload: INewsScroll["data"];
}
export interface IFeaturedData {
  data: INewPostsData;
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
  data: INewPostsData;
}
export interface ISearchResultAction {
  type: "SET_SEARCH_DATA";
  payload: ISearchResult["data"];
}

export interface ICategoryData {
  data: ICategoriesData;
}

export interface ICategoryDataAction {
  type: "SET_CATEGORIES";
  payload: ICategoryData["data"];
}

// ALL TYPES BEFORE THIS LINE ==================

export type RootState = ReturnType<typeof allReducers>;
