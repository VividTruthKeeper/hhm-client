// Modules
import placeholder from "../../assets/images/placeholder.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps {
  img: string;
}

const NewsArticleImg = ({ img }: IProps) => {
  return (
    <div className={"news-article-image"}>
      <LazyLoadImage
        delayMethod="debounce"
        src={img}
        alt={img}
        effect="opacity"
        useIntersectionObserver
        placeholderSrc={placeholder}
      />
    </div>
  );
};

export default NewsArticleImg;
