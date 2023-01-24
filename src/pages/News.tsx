// Components
import NewsItem from '../components/news/NewsItem';
import Aside from '../components/global/Aside';

const News = () => {
  return (
    <main className="news">
      <div className="container">
        <div className="news-inner">
          <NewsItem />
          <Aside />
        </div>
      </div>
    </main>
  );
};

export default News;
