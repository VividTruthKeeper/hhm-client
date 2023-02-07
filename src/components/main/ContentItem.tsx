// Modules
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
  type?: 'small' | 'big';
  img: string;
  title: string;
}

const ContentItem = ({ type = 'small', img, title }: IProps) => {
  return (
    <div className={`main-content-item main-content-item__${type}`}>
      <LazyLoadImage src={img} alt="" effect="blur" useIntersectionObserver />
      <div className="main-content-item-overlay">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ContentItem;
