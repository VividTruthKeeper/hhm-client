// Modules
import ReactPlayer from "react-player";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// Types
import { videosDataType } from "../../types/videos.types";

const VideosItem = ({ url, placeholder }: videosDataType) => {
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
          <span>11.01.2023</span>
          <p>В Туркменистане отметили Новый год</p>
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default VideosItem;
