// Modules
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import placeholder from "../../assets/images/placeholder.webp";

// Types
import { RootState } from "../../types/store.types";

const MainImg = () => {
  // redux
  const data = useSelector<RootState, RootState["newsScroll"]["data"]>(
    (state) => state.newsScroll.data
  );
  return (
    <>
      {data.length > 0 ? (
        data[0].id > -1 ? (
          <Link to={`/news/${data[0].id}`} className="main-img">
            <LazyLoadImage
              placeholderSrc={placeholder}
              src={
                (data[0].featured_images.length > 0
                  ? data[0].featured_images[0].path
                  : "") as string
              }
              alt={
                (data[0].featured_images.length > 0
                  ? data[0].featured_images[0].file_name
                  : "") as string
              }
              useIntersectionObserver
              effect="opacity"
            />

            <div className="main-img-overlay">
              <h2>{data[0].title}</h2>
              <div className="main-img-overlay-wrapper">
                <p className="cats">
                  {data[0].categories.map((category) => {
                    return <span key={uuidv4()}>{category.name}</span>;
                  })}
                </p>
                <span className="date">{data[0].published_at}</span>
              </div>
            </div>
          </Link>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
};

export default MainImg;
