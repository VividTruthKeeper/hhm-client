// Modules
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { v4 as uuidv4 } from 'uuid';
import ReactPlayer from 'react-player';

// Components
import NewsCategory from '../global/NewsCategory';
import NewsDate from '../global/NewsDate';
import { IPostsData } from '../../types/data.types';
import placeholder from '../../assets/images/placeholder.webp';
import { dateParse } from '../../helpers/dateParser';

interface Props {
  id: IPostsData['id'];
  title: IPostsData['title'];
  text: IPostsData['content_html'];
  categories: IPostsData['categories'];
  date: IPostsData['published_at'];
  img: IPostsData['featured_images'][0]['path'];
  video: IPostsData['video'];
}

const News = ({ id, title, text, categories, date, img, video }: Props) => {
  return (
    <Link to={`/news/${id}`}>
      <div className="news-wrapper">
        <div className="news-image">
          {video && video.length > 0 ? (
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
        <div className="news-info">
          <div className="news-info-inner">
            <h2 className="news-title">{title}</h2>
            <div className="news-status">
              <div className="news-status-left">
                {categories.map((category) => {
                  return <NewsCategory key={uuidv4()} title={category.name} />;
                })}
              </div>
              <div className="news-status-right">
                <NewsDate date={dateParse(date)} />
              </div>
            </div>
            <div className="news-text" dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default News;
