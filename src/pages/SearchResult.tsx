// Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../api/Api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store.types";

// Icons
import { ReactComponent as LoopBlack } from "../assets/icons/loop-black.svg";
import { IurlParamAdder } from "../types/api.types";
import { setSearchResult } from "../actions/setData";

// Components
import CustomNewsScroll from "../components/global/CustomNewsScroll";
import { IPostsData } from "../types/data.types";

// Api
import { url } from "../url";

const SearchResult = () => {
  const { word } = useParams();
  const [params, setParams] = useState<IurlParamAdder[]>([
    {
      name: "search",
      value: word || "",
    },
    {
      name: "count",
      value: 10,
    },
    {
      name: "page",
      value: 1,
    },
  ]);
  const api = new Api(url + "/posts", params);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);

  // redux
  const data = useSelector<RootState, RootState["searchData"]["data"]>(
    (state) => state.searchData.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    api.get(data, (data: IPostsData[]) => dispatch(setSearchResult(data)));
  }, [params]);

  useEffect(() => {
    if (!(language === lastLanguage)) {
      api.get(data, (data: IPostsData[]) => dispatch(setSearchResult(data)));
    }
  }, [language, lastLanguage]);

  return (
    <main className="sresult">
      <div className="container">
        <div className="sresult-inner">
          <div className="sresult-title">
            <LoopBlack />
            <h1>Результаты по поиску "{word}"</h1>
          </div>
          <div className="sresult-content">
            <CustomNewsScroll pagination={false} data={data} word={word} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
