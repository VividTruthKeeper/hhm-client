// Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../api/Api";
import { useSelector, useDispatch } from "react-redux";
import { IPostData, RootState } from "../types/store.types";

// Icons
import { ReactComponent as LoopBlack } from "../assets/icons/loop-black.svg";
import { IurlParamAdder } from "../types/api.types";
import { setNewsScroll } from "../actions/setData";

// Components
import CustomNewsScroll from "../components/global/CustomNewsScroll";
import { IPostsData } from "../types/data.types";

const SearchResult = () => {
  const { word } = useParams();
  const [params, setParams] = useState<IurlParamAdder[]>([
    {
      name: "s",
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
  const api = new Api("/post", params);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState(language);

  // redux
  const data = useSelector<RootState, RootState["searchData"]["data"]>(
    (state) => state.searchData.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    api.get(data, (data: IPostsData[]) => dispatch(setNewsScroll(data)));
  }, [params]);
  return (
    <main className="sresult">
      <div className="container">
        <div className="sresult-inner">
          <div className="sresult-title">
            <LoopBlack />
            <h1>Результаты по поиску "{word}"</h1>
          </div>
          <div className="sresult-content">
            <CustomNewsScroll data={data as any} word={word} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
