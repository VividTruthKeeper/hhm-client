// Modules
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps {
  img: string;
}

const NewsArticleImg = ({ img }: IProps) => {
  return (
    <div className={"news-article-image"}>
      <LazyLoadImage src={img} alt="" effect="blur" useIntersectionObserver />
    </div>
  );
};

export default NewsArticleImg;
