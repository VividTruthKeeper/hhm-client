// Components
import VideoItem from "./VideoItem";
const Video = () => {
  return (
    <section className="video">
      <div className="container">
        <div className="video-inner">
          <h2>Видео</h2>
          <div className="video-wrapper">
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
