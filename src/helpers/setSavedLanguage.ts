import { ILanguage } from "../types/store.types";

export default (title: ILanguage["title"]): ILanguage["title"] => {
  localStorage.setItem("savedLanguage", title);
  return title;
};
