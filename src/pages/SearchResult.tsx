// Modules
import { useEffect, useState, useMemo } from "react";
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

// Api
import { url } from "../url";
import { INewPostsData } from "../types/posts.types";
import Loader from "../components/global/Loader";

const SearchResult = () => {
  const { word } = useParams();
  const [activePage, setActivePage] = useState<number>(1);
  const pageMemo = useMemo(
    () => ({ activePage, setActivePage }),
    [activePage, setActivePage]
  );
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
  const api = new Api(url + "/pagination/new/posts", params);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);

  // redux
  const data = useSelector<RootState, RootState["searchData"]["data"]>(
    (state) => state.searchData.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const newParams = params.slice();
    newParams[2].value = activePage;
    setParams(newParams);
  }, [activePage]);

  useEffect(() => {
    api.get(data, (data: INewPostsData) => dispatch(setSearchResult(data)));
  }, [params]);

  useEffect(() => {
    if (!(language === lastLanguage)) {
      api.get(data, (data: INewPostsData) => dispatch(setSearchResult(data)));
    }
  }, [language, lastLanguage]);

  return (
    <main className="sresult">
      <div className="container">
        <div className="sresult-inner">
          <div className="sresult-title">
            <LoopBlack />
            <h1>
              {language === "EN"
                ? `Results for "${word}"`
                : language === "RU"
                ? `Результаты по поиску "${word}"`
                : `"${word}" gözleg boýunça netijeler`}
            </h1>
          </div>
          <div className="sresult-content">
            {data.data.length > 0 ? (
              data?.data[0]?.id > -1 ? (
                <CustomNewsScroll
                  pagination={true}
                  data={data}
                  word={word}
                  pageMemo={pageMemo}
                />
              ) : (
                <Loader />
              )
            ) : (
              <span className="empty">
                {" "}
                {language === "EN"
                  ? `No results for "${word}"`
                  : language === "RU"
                  ? `Нет результаты по поиску "${word}"`
                  : `"${word}" gözleg boýunça netije ýok`}
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
