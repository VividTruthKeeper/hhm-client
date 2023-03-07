// Modules
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactPlayer from 'react-player';
import { dateParse } from '../../helpers/dateParser';
// Images
// import { ReactComponent as ArrRight } from "../../assets/icons/arrow-right.svg";
import placeholder from '../../assets/images/placeholder.webp';
// Components
import NewsCategory from '../global/NewsCategory';
import NewsDate from '../global/NewsDate';

interface Props {
  title: string;
  date: string;
  img: string;
  category: string;
  id: number;
  video: string | null;
}

const AsideNews = ({ title, date, img, category, id, video }: Props) => {
  return (
    <Link to={`/news/${id}`} className="aside-news">
      <div className="aside-news-wrapper">
        <div className="aside-news-image">
          {video && video.length > 53 ? (
            <ReactPlayer url={video} controls light={img} width="100%" height="100%" />
          ) : (
            <LazyLoadImage
              src={img}
              alt={img}
              useIntersectionObserver
              effect="opacity"
              placeholderSrc={placeholder}
            />
          )}
        </div>
        <div className="aside-news-info">
          <div className="aside-news-info-inner">
            <div className="aside-news-status">
              <NewsCategory title={category} />
              <NewsDate date={date} />
            </div>
            <h2 className="aside-news-title">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AsideNews;
