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
  category: string;
  link: string;
}

const AsideNews = ({ title, date, img, category, link }: Props) => {
  return (
    <div className="aside-news">
      <div className="aside-news-wrapper">
        <Link to={link} className="aside-news-image">
          <LazyLoadImage
            src={img}
            alt="image"
            useIntersectionObserver
            effect="blur"
          />
        </Link>
        <div className="aside-news-info">
          <div className="aside-news-info-inner">
            <div className="aside-news-status">
              <NewsCategory title={category} id={1} />
              <NewsDate date={date} />
            </div>
            <Link to={link}>
              <h2 className="aside-news-title">{title}</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideNews;
