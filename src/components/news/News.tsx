// Modules
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";
// Images
import { ReactComponent as ArrRight } from "../../assets/icons/arrow-right.svg";
// Components
import NewsCategory from "../global/NewsCategory";
import NewsDate from "../global/NewsDate";
import { IPostsData } from "../../types/data.types";

interface Props {
  id: IPostsData["id"];
  title: IPostsData["title"];
  text: IPostsData["content_html"];
  categories: IPostsData["categories"];
  date: IPostsData["published_at"];
  img: IPostsData["featured_images"][0]["path"];
}

const News = ({ id, title, text, categories, date, img }: Props) => {
  return (
    <div className="news">
      <div className="news-wrapper">
        <Link to={`/news/${id}`} className="news-image">
          <LazyLoadImage
            src={img}
            alt="image"
            useIntersectionObserver
            effect="blur"
          />
        </Link>
        <div className="news-info">
          <div className="news-info-inner">
            <Link to={`/news/${id}`}>
              <h2 className="news-title">{title}</h2>
            </Link>
            <div className="news-status">
              {categories.map((category) => {
                return (
                  <NewsCategory
                    key={uuidv4()}
                    title={category.name}
                    id={category.id}
                  />
                );
              })}
              <NewsDate date={date} />
            </div>
            <div
              className="news-text"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
