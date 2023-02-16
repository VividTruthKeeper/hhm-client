// Types
import { ISearchData, ISearchDataAction } from "../types/store.types";

export const setSearch = (value: ISearchData["value"]): ISearchDataAction => ({
  type: "SET_SEARCH",
  payload: value,
});
