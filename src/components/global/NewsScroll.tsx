// Modules
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

// Components
import News from "../news/News";
import SectionTitle from "./SectionTitle";
import Loader from "./Loader";

// Api
import { url } from "../../url";
import { Api } from "../../api/Api";
import { newsScrollParams } from "../../api/params";

// Types
import { IPostsData } from "../../types/data.types";
import { RootState } from "../../types/store.types";

// Actions
import { setNewsScroll } from "../../actions/setData";

interface Props {
  title: boolean;
  category?: number;
}

const NewsScroll = ({ title, category }: Props) => {
  const params = newsScrollParams.slice();
  category ? params.push({ name: "category", value: category }) : null;

  const api = new Api(url + "/posts", params);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<string>(language);

  // redux
  const rawData = useSelector<RootState, RootState["newsScroll"]["data"]>(
    (state) => state.newsScroll.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    api.get(rawData, (data: IPostsData[]) => dispatch(setNewsScroll(data)));
    setLastLanguage(language);
  }, [category]);

  useEffect(() => {
    if (rawData.length > 0) {
      if (
        !((rawData as IPostsData[])[0].id > -1 && lastLanguage === language)
      ) {
        api.get(rawData, (rawData: IPostsData[]) =>
          dispatch(setNewsScroll(rawData))
        );
        setLastLanguage(language);
      }
    }
  }, [language, lastLanguage]);

  const [filteredData, setFilteredData] = useState<IPostsData[]>(rawData);

  useEffect(() => {
    const filtered = rawData.filter((el, index) => {
      if (index > 0) {
        return el;
      }
    });
    setFilteredData(filtered);
  }, [rawData]);

  return (
    <div className="news-scroll">
      <div className="news-scroll-wrapper">
        {title === true ? (
          <SectionTitle
            title="Лента новостей"
            linkData={{ link: "/all/null", title: "Посмотреть все" }}
          />
        ) : null}
        <div className="news-scroll-inner">
          {filteredData.length > 0 ? (
            (filteredData as IPostsData[])[0].id > -1 ? (
              (filteredData as IPostsData[]).map((dataEl, index) => {
                return (
                  <News
                    key={uuidv4()}
                    id={dataEl.id}
                    title={dataEl.title}
                    text={dataEl.excerpt}
                    date={dataEl.published_at}
                    categories={dataEl.categories}
                    img={
                      dataEl.featured_images[0]
                        ? dataEl.featured_images[0].path
                        : ""
                    }
                  />
                );
              })
            ) : (
              <Loader />
            )
          ) : (
            <p className="scroll-empty">Нет новостей в этой категории</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsScroll;
