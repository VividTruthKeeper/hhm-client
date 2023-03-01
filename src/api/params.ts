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

export const asideParams: IurlParamAdder[] = [
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
    value: 100,
  },
  {
    name: "page",
    value: 1,
  },
];

export const featuredParams: IurlParamAdder[] = [
  {
    name: "count",
    value: 5,
  },
  {
    name: "page",
    value: 1,
  },
  {
    name: "featured",
    value: "true",
  },
];

export const videoParams: IurlParamAdder[] = [
  {
    name: "count",
    value: 10,
  },
  {
    name: "page",
    value: 1,
  },
  {
    name: "type",
    value: "video",
  },
];
