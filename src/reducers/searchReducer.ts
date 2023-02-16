// Types
import { ISearchData, ISearchDataAction } from "../types/store.types";

const initialState: ISearchData = {
  value: "",
};

export const searchReducer = (
  state: ISearchData = initialState,
  action: ISearchDataAction
) => {
  switch (action.type) {
    case "SET_SEARCH": {
      return { value: action.payload };
    }
    default: {
      return state;
    }
  }
};
