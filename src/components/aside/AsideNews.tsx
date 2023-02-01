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
  date: string;
  img: string;
}

const AsideNews = ({ title, date, img }: Props) => {
  return (
    <div className="aside-news">
      <div className="aside-news-wrapper">
        <div className="aside-news-image">
          <LazyLoadImage
            src={img}
            alt="image"
            useIntersectionObserver
            effect="blur"
          />
        </div>
        <div className="aside-news-info">
          <div className="aside-news-info-inner">
            <div className="aside-news-status">
              <NewsCategory title="политика" />
              <NewsDate date={date} />
            </div>
            <h2 className="aside-news-title">{title}</h2>
          </div>
          <Link to={`/news/1`} className="aside-news-link">
            <span>прочитать все</span> <ArrRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsideNews;
