import { ILanguage } from "../types/store.types";

export default (): ILanguage["title"] => {
  // @ts-ignore
  return localStorage.getItem("savedLanguage") || ("TM" as ILanguage["title"]);
};
