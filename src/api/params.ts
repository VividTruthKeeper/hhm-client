import { IurlParamAdder } from "../types/api.types";

export const newsScrollParams: IurlParamAdder[] = [
  {
    name: "count",
    value: 5,
  },
  {
    name: "page",
    value: 1,
  },
];

export const categoriesParams: IurlParamAdder[] = [
  {
    name: "count",
    value: 7,
  },
  {
    name: "page",
    value: 1,
  },
];
