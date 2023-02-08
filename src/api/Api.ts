// Modules
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";

// Types
import { IurlParamAdder } from "../types/api.types";
import { RootState } from "../types/store.types";

// Helpers
import { urlParamAdder } from "../helpers/urlParamAdder";

export class Api {
  url: string = "";
  params?: IurlParamAdder[];
  language = useSelector<RootState, RootState["language"]["title"]>(
    (state) => state.language.title
  );

  constructor(url: string, params?: IurlParamAdder[]) {
    this.url = url;
    this.params = params;
  }

  get(state: any, setState: Dispatch<SetStateAction<any>>) {
    const locale = { name: "locale", value: this.language };
    if (
      this.url.match(
        "^(http(s)://.)[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$"
      )
    )
      throw new Error("Bad URL");
    axios
      .get(urlParamAdder(locale, this.url, this.params))
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}
