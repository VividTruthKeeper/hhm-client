// Modules
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps {
  img: string;
  title: string;
}

const NewsArticleImg = ({ img, title }: IProps) => {
  return (
    <div className={"news-article-image"}>
      <LazyLoadImage src={img} alt="" effect="blur" useIntersectionObserver />
      <div className="swiper-lazy-preloader"></div>
    </div>
  );
};

export default NewsArticleImg;
