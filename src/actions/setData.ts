// Types
import { INewsScroll, INewsScrollAction } from "../types/store.types";

export const setNewsScroll = (
  data: INewsScroll["data"]
): INewsScrollAction => ({
  type: "SET_NEWS_SCROLL",
  payload: data,
});
