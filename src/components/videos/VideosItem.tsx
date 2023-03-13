// Modules
import ReactPlayer from "react-player";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// Types
import { videosDataType } from "../../types/videos.types";

const VideosItem = ({ url, placeholder, date, title }: videosDataType) => {
  return (
    <div className="videos-item">
      <LazyLoadComponent useIntersectionObserver>
        <div className="videos-item-video">
          <ReactPlayer
            url={url}
            controls
            light={placeholder}
            width="100%"
            height="100%"
          />
        </div>
        <div className="videos-item-data">
          <span>{date}</span>
          <p>{title}</p>
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default VideosItem;
