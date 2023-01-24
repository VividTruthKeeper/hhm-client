// Components
import NewsItem from '../components/news/NewsItem';

const News = () => {
  return (
    <main className="news">
      <div className="container">
        <div className="news-inner">
          <NewsItem />
        </div>
      </div>
    </main>
  );
};

export default News;
