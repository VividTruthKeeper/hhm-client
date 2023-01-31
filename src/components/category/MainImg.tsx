// Modules
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface IProps {
  img: string;
}

const MainImg = ({ img }: IProps) => {
  return (
    <Link to={"/news/123"} className="main-img">
      <LazyLoadImage
        src={img}
        alt={img}
        useIntersectionObserver
        effect="blur"
      />

      <div className="main-img-overlay">
        <h2>
          Полезная информация для поступающих на программы подготовки научных
          кадров в Туркменистане
        </h2>
        <p>
          <span>Политика</span>
          <span>12.01.2023</span>
        </p>
      </div>
    </Link>
  );
};

export default MainImg;
