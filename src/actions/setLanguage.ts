// Types
import { ILanguage, ILanguageAction } from "../types/store.types";

// Helpers
import setSavedLanguage from "../helpers/setSavedLanguage";

export const setLanguage = (title: ILanguage["title"]): ILanguageAction => ({
  type: "SET_LANGUAGE",
  payload: setSavedLanguage(title),
});
