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
}

const NewsScroll = ({ title }: Props) => {
  const api = new Api(url + "/posts", newsScrollParams);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<string>(language);

  // redux
  const data = useSelector<RootState, RootState["newsScroll"]["data"]>(
    (state) => state.newsScroll.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!((data as IPostsData[])[0].id > -1 && lastLanguage === language)) {
      api.get(data, (data: IPostsData[]) => dispatch(setNewsScroll(data)));
      setLastLanguage(language);
    }
  }, [language, lastLanguage]);

  return (
    <div className="news-scroll">
      <SectionTitle title="Лента новостей" />
      <div className="news-scroll-wrapper">
        {title === true ? (
          <SectionTitle
            title="Лента новостей"
            linkData={{ link: "/", title: "Посмотреть все" }}
          />
        ) : null}
        <div className="news-scroll-inner">
          {data ? (
            (data as IPostsData[]).map((dataEl) => {
              return (
                <News
                  key={uuidv4()}
                  id={dataEl.id}
                  title={dataEl.title}
                  text={dataEl.content_html}
                  date={dataEl.published_at}
                  categories={dataEl.categories}
                  img={dataEl.featured_images[0].path}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsScroll;
