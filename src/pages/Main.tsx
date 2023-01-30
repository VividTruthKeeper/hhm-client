import Aside from '../components/aside/Aside';
import NewsScroll from '../components/global/NewsScroll';

const Main = () => {
  return (
    <div className="main">
      <div className="news-section">
        <div className="container">
          <div className="news-inner">
            <NewsScroll />
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
