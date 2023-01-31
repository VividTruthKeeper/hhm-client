// Store
// import { functionalityStore } from "../store/functionality";

// Reducers
import { allReducers } from "../store/functionality";

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

export type RootState = ReturnType<typeof allReducers>;
