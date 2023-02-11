// Modules
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { DispatchProp, useSelector } from 'react-redux';

// Types
import { IurlParamAdder } from '../types/api.types';
import { RootState } from '../types/store.types';

// Helpers
import { urlParamAdder } from '../helpers/urlParamAdder';

export class Api {
  private url: string = '';
  private params?: IurlParamAdder[];
  public language = useSelector<RootState, RootState['language']['title']>(
    (state) => state.language.title,
  );

  constructor(url: string, params?: IurlParamAdder[]) {
    this.url = url;
    this.params = params;
  }

  get(state: any, setState: Dispatch<SetStateAction<any>>) {
    const locale = { name: 'locale', value: this.language };
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
