// Reducers
import { allReducers } from "../store/functionality";

// Types
import { IPostsData } from "./data.types";

export interface ActiveLinkType {
  active: number;
}
export interface ActiveLinkActionType {
  type: "SET_ACTIVE_LINK";
  payload: number;
}

export interface ILanguage {
  title: "RU" | "EN" | "TM";
}

export interface ILanguageAction {
  type: "SET_LANGUAGE";
  payload: "RU" | "EN" | "TM";
}

export interface INewsScroll {
  data: IPostsData[];
}
export interface INewsScrollAction {
  type: "SET_NEWS_SCROLL";
  payload: INewsScroll["data"];
}

// ALL TYPES BEFORE THIS LINE ==================

export type RootState = ReturnType<typeof allReducers>;
