// Types
import { ICategoriesData } from "../types/data.types";
import {
  ICategoryData,
  ICategoryDataAction,
  IFeaturedData,
  IFeaturedDataAction,
  INewsScroll,
  INewsScrollAction,
  IPostData,
  IPostDataAction,
  ISearchResult,
  ISearchResultAction,
  IVideoData,
  IVideoDataAction,
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

export const setVideo = (data: IVideoData["data"]): IVideoDataAction => ({
  type: "SET_VIDEO",
  payload: data,
});

export const setFeatured = (
  data: IFeaturedData["data"]
): IFeaturedDataAction => ({
  type: "SET_FEATURED",
  payload: data,
});

export const setCategories = (
  data: ICategoryData["data"]
): ICategoryDataAction => ({
  type: "SET_CATEGORIES",
  payload: data,
});
