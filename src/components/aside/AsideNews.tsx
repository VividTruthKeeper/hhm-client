// Modules
import { Link } from 'react-router-dom';
// Images
import { ReactComponent as ArrRight } from '../../assets/icons/arrow-right.svg';
// Components
import NewsCategory from '../global/NewsCategory';
import NewsDate from '../global/NewsDate';

interface Props {
  title: string;
  category: string;
  date: string;
  img: string;
  link: string;
}

const AsideNews = ({ title, category, date, img, link }: Props) => {
  return (
    <div className="aside-news">
      <div className="aside-news-wrapper">
        <div className="aside-news-image">
          <img src={img} alt="img" />
        </div>
        <div className="aside-news-info">
          <div className="aside-news-info-inner">
            <div className="aside-news-status">
              <NewsCategory title={(category = '')} link="" />
              <NewsDate date={date} />
            </div>
            <h2 className="aside-news-title">{title}</h2>
          </div>
          <Link to={`/${link}`} className="aside-news-link">
            <span>прочитать все</span> <ArrRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsideNews;
