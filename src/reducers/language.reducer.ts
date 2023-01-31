// Types
import { ILanguage, ILanguageAction } from "../types/store.types";

// Helpers
import getSavedLanguage from "../helpers/getSavedLanguage";

const initialState = {
  title: getSavedLanguage(),
};

export const languageReducer = (
  state: ILanguage = initialState,
  action: ILanguageAction
) => {
  switch (action.type) {
    case "SET_LANGUAGE": {
      return { ...state, title: action.payload };
    }
    default: {
      return state;
    }
  }
};
