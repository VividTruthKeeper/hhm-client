// Modules
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";

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
    <Link to={`/news/${id}`}>
      <div className="news-wrapper">
        <div className="news-image">
          <LazyLoadImage
            src={img}
            alt="image"
            useIntersectionObserver
            effect="blur"
          />
        </div>
        <div className="news-info">
          <div className="news-info-inner">
            <Link to={`/news/${id}`}>
              <h2 className="news-title">{title}</h2>
            </Link>
            <div className="news-status">
              <div className="news-status-left">
                {categories.map((category) => {
                  return <NewsCategory key={uuidv4()} title={category.name} />;
                })}
              </div>
              <div className="news-status-right">
                <NewsDate date={date} />
              </div>
            </div>
            <div
              className="news-text"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default News;
