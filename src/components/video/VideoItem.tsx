// Modules
import { LazyLoadImage } from "react-lazy-load-image-component";

// Types
import { videoItemType } from "../../types/video.types";

const VideoItem = ({ img, date, title }: videoItemType) => {
  return (
    <div className="video-item">
      <div className="video-item-top">
        <div className="video-img">
          <LazyLoadImage src={img} effect="blur" useIntersectionObserver />
        </div>
      </div>
      <div className="video-item-bottom">
        <span>{date}</span>
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default VideoItem;
