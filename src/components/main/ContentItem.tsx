// Modules
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface IProps {
  type?: "small" | "big";
  img: string;
  title: string;
  id: number;
}

const ContentItem = ({ type = "small", img, title, id }: IProps) => {
  return (
    <div className={`main-content-item main-content-item__${type}`}>
      <LazyLoadImage
        src={img}
        alt={img}
        effect="blur"
        useIntersectionObserver
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Link to={`/news/${id}`} className="main-content-item-overlay">
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default ContentItem;
