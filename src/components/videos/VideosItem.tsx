// Modules
import ReactPlayer from "react-player";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// Types
import { videosDataType } from "../../types/videos.types";

const VideosItem = ({ url, placeholder }: videosDataType) => {
  return (
    <div className="videos-item">
      <LazyLoadComponent
        useIntersectionObserver
        // placeholder={<h1>asdasdasd</h1>}
      >
        <div className="videos-item-video">
          <ReactPlayer
            url={url}
            controls
            light={placeholder}
            width="100%"
            height="100%"
            playIcon={<span></span>}
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
