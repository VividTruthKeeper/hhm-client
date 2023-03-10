// Modules
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// Components
import Aside from "../components/aside/Aside";
import NewsArticleSlider from "../components/news/NewsArticleSlider";
import Loader from "../components/global/Loader";

// Icons
import { ReactComponent as View } from "../assets/icons/eye.svg";

// Types
import { RootState } from "../types/store.types";
import { IPostData } from "../types/store.types";

// Actions
import { setPost } from "../actions/setData";

// Api
import { Api } from "../api/Api";
import { url } from "../url";

const NewsArticle = () => {
  const { id } = useParams();

  // api
  const api = new Api(`${url}/posts/${id}`);

  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<string>(language);

  // redux
  const data = useSelector<RootState, RootState["post"]["data"]>(
    (state) => state.post.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !(data.data.id === parseInt(id as string) && lastLanguage === language)
    ) {
      api.get(data, (data: IPostData["data"]) => dispatch(setPost(data)));
      setLastLanguage(language);
    }
  }, [language, lastLanguage]);

  // SEO
  useEffect(() => {
    const metaDescription: any = document.querySelector(
      "meta#meta-description"
    );
    const metaKeywords: any = document.querySelector("meta#meta-keywords");
    const title: any = document.querySelector("title");
    try {
      title.innerText = data.data.powerseo_title;
      metaDescription.content = data.data.powerseo_description;
      metaKeywords.content = data.data.powerseo_keywords;
    } catch (err) {
      console.log(err);
    }
  }, [data]);

  return (
    <div className="news-article">
      <div className="container">
        <div className="news-article-inner">
          {data.data.id > -1 ? (
            <div className="news-article-content">
              <div className="news-article-info">
                <div className="news-article-status">
                  <div className="news-article-left">
                    {data.data.categories.map((category) => (
                      <Link
                        key={uuidv4()}
                        to={`/category/${category.id}`}
                        className="news-article-category"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <div className="news-article-right">
                    <div className="news-article-view">
                      <View />
                      <span>993</span>
                    </div>
                    <h3 className="news-article-date">
                      {data.data.published_at}
                    </h3>
                  </div>
                </div>
                <h2 className="news-article-title">{data.data.title}</h2>
              </div>
              <div className="news-article-slider-wrapper">
                <NewsArticleSlider
                  images={data.data.featured_images}
                  video={data.data.video}
                />
              </div>
              <p
                className="news-article-text"
                dangerouslySetInnerHTML={{ __html: data.data.content_html }}
              ></p>
            </div>
          ) : (
            <Loader />
          )}
          <Aside type="latest" />
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
