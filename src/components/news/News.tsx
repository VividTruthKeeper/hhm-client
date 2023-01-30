// Modules
import { Link } from 'react-router-dom';
// Images
import placeholder from '../../assets/images/placeholder.jpg';
import { ReactComponent as ArrRight } from '../../assets/icons/arrow-right.svg';
import NewsCategory from '../global/NewsCategory';
import NewsDate from '../global/NewsDate';

const News = () => {
  return (
    <div className="news">
      <div className="news-wrapper">
        <div className="news-image">
          <img src={placeholder} alt="img" />
        </div>
        <div className="news-info">
          <div className="news-info-inner">
            <h2 className="news-title">
              Президент Туркменистана провёл рабочее совещание по цифровой системе
            </h2>
            <div className="news-status">
              <NewsCategory title="политика" link="" />
              <NewsDate date="12.01.2023" />
            </div>
            <div className="news-text">
              Государственному объединению «Türkmen atlary» разрешено заключить дополнительное
              соглашение с ИП «Röwşen». Государственному объединению «Türkmen atlary» разрешено
              заключить дополнительное соглашение с ИП «Röwşen»
            </div>
          </div>
          <Link to="/" className="news-link">
            <span>прочитать все</span> <ArrRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
