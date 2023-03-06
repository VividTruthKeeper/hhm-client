// Modules
import placeholder from "../../assets/images/placeholder.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactPlayer from "react-player";

interface IProps {
  img: string;
  video: string | null;
}

const NewsArticleImg = ({ img, video }: IProps) => {
  return (
    <div className={"news-article-image"}>
      {video && video.length > 0 ? (
        <ReactPlayer url={video} controls width="100%" height="100%" />
      ) : (
        <LazyLoadImage
          src={img}
          alt={img}
          effect="opacity"
          useIntersectionObserver
          placeholderSrc={placeholder}
        />
      )}
    </div>
  );
};

export default NewsArticleImg;
