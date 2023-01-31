// Components
import Aside from '../components/aside/Aside';
// Images
import placeholder from '../assets/images/placeholder3.png';

const NewsArticle = () => {
  return (
    <div className="news-article">
      <div className="container">
        <div className="news-article-inner">
          <div className="news-article-content">
            <div className="news-article-status">
              <h3 className="news-article-category">Спорт</h3>
              <h3 className="news-article-date">15:23, 21 января 2023</h3>
            </div>
            <h2 className="news-article-title">
              В федерации футбола Туркменистана подвели итоги прошедшего года и наметили курс на
              2023 год
            </h2>
            <div className="news-article-image">
              <img src={placeholder} alt="image" />
            </div>
            <p className="news-article-text">
              Lorem ipsum dolor sit amet consectetur. Vestibulum eget elementum urna tincidunt diam
              commodo mauris ac sodales. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
              sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vestibulum eget
              elementum urna tincidunt diam commodo mauris ac sodales. Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Vestibulum eget elementum urna tincidunt diam commodo mauris ac sodales.
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
              ipsum dolor sit amet consectetur. Vestibulum eget elementum urna tincidunt diam
              commodo mauris ac sodales. Lorem ipsum dolor sit amet consectetur. Vestibulum eget
              elementum urna tincidunt diam commodo mauris ac sodales. Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Vestibulum eget elementum urna tincidunt diam commodo mauris ac sodales.
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
              ipsum dolor sit amet consectetur. Vestibulum eget elementum urna tincidunt diam
              commodo mauris ac sodales. Lorem ipsum dolor sit amet consectetur. Vestibulum eget
              elementum urna tincidunt diam commodo mauris ac sodales. Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Vestibulum eget elementum urna tincidunt diam commodo mauris ac sodales.
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
              ipsum dolor sit amet consectetur. Vestibulum eget elementum urna tincidunt diam
              commodo mauris ac sodales.
            </p>
          </div>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
