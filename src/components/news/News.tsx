// Modules
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
// Images
import { ReactComponent as ArrRight } from "../../assets/icons/arrow-right.svg";
// Components
import NewsCategory from "../global/NewsCategory";
import NewsDate from "../global/NewsDate";

interface Props {
  title: string;
  text: string;
  category: string;
  date: string;
  img: string;
}

const News = ({ title, text, category, date, img }: Props) => {
  return (
    <div className="news">
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
            <h2 className="news-title">{title}</h2>
            <div className="news-status">
              <NewsCategory title={category} />
              <NewsDate date={date} />
            </div>
            <div className="news-text">{text}</div>
          </div>
          <Link to={`/news/1`} className="news-link">
            <span>прочитать все</span> <ArrRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
