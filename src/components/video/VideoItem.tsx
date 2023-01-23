// Images
import VideoItemImg from "../../assets/images/video-item.jpg";

const VideoItem = () => {
  return (
    <div className="video-item">
      <div className="video-item-top">
        <div className="video-img">
          <img src={VideoItemImg} alt="" />
        </div>
      </div>
      <div className="video-item-bottom">
        <span>11.01.2023</span>
        <h5>В Туркменистане отметили Новый год</h5>
      </div>
    </div>
  );
};

export default VideoItem;
