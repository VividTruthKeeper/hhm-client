// Modules
import { useParams } from 'react-router-dom';

// Components
import NewsItem from '../components/news/NewsItem';
import Aside from '../components/global/Aside';

const News = () => {
  const { id } = useParams<string>();
  console.log(`News id: ${id}`);
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
