// Modules
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

// Components
import Aside from "../components/aside/Aside";
import NewsArticleSlider from "../components/news/NewsArticleSlider";
import Loader from "../components/global/Loader";
import VideosItem from "../components/videos/VideosItem";

// Icons
import { ReactComponent as Share } from "../assets/icons/share.svg";

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

  console.log(data.data);

  return (
    <motion.div
      className="news-article"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.15 } }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
    >
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
                    <h3 className="news-article-date">
                      {data.data.published_at}
                    </h3>
                  </div>
                </div>
                <h2 className="news-article-title">{data.data.title}</h2>
              </div>
              <div className="news-article-slider-wrapper">
                {/* {data.data.video ? (
                  <VideosItem
                    url={data.data.video}
                    placeholder={
                      data.data.featured_images[0]
                        ? data.data.featured_images[0].path
                        : ""
                    }
                  />
                ) : (
                  <NewsArticleSlider images={data.data.featured_images} />
                )} */}
                <NewsArticleSlider images={data.data.featured_images} />
              </div>
              <p
                className="news-article-text"
                dangerouslySetInnerHTML={{ __html: data.data.content_html }}
              ></p>
              <button className="share-btn">
                <Share /> <span>Поделиться</span>
              </button>
            </div>
          ) : (
            <Loader />
          )}
          <Aside />
        </div>
      </div>
    </motion.div>
  );
};

export default NewsArticle;
