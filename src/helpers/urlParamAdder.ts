import { IurlParamAdder } from "../types/api.types";

export const urlParamAdder = (
  locale: IurlParamAdder,
  url: string,
  params?: IurlParamAdder[]
): string => {
  url = url + `?${locale.name}=${(locale.value as string).toLowerCase()}`;
  if (!params) return url;
  let concatendated: string = "";
  params.forEach((param: IurlParamAdder) => {
    concatendated = concatendated + `&${param.name}=${param.value}`;
  });
  return url + concatendated;
};
