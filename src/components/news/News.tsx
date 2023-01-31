// Modules
import { Link } from 'react-router-dom';
// Images
import { ReactComponent as ArrRight } from '../../assets/icons/arrow-right.svg';
// Components
import NewsCategory from '../global/NewsCategory';
import NewsDate from '../global/NewsDate';

interface Props {
  title: string;
  text: string;
  category: string;
  date: string;
  img: string;
  link: string;
}

const News = ({ title, text, category, date, img, link }: Props) => {
  return (
    <div className="news">
      <div className="news-wrapper">
        <div className="news-image">
          <img src={img} alt="img" />
        </div>
        <div className="news-info">
          <div className="news-info-inner">
            <h2 className="news-title">{title}</h2>
            <div className="news-status">
              <NewsCategory title="Политика" link="" />
              <NewsDate date={date} />
            </div>
            <div className="news-text">{text}</div>
          </div>
          <Link to={`/${link}`} className="news-link">
            <span>прочитать все</span> <ArrRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
