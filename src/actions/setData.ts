// Types
import {
  INewsScroll,
  INewsScrollAction,
  IPostData,
  IPostDataAction,
  ISearchResult,
  ISearchResultAction,
} from "../types/store.types";

// NewsScroll

export const setNewsScroll = (
  data: INewsScroll["data"]
): INewsScrollAction => ({
  type: "SET_NEWS_SCROLL",
  payload: data,
});

export const setSearchResult = (
  data: ISearchResult["data"]
): ISearchResultAction => ({
  type: "SET_SEARCH_DATA",
  payload: data,
});

// Post

export const setPost = (data: IPostData["data"]): IPostDataAction => ({
  type: "SET_POST",
  payload: data,
});
