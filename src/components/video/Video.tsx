// Modules
import { v4 as uuidv4 } from "uuid";

// Components
import VideoItem from "./VideoItem";

// Images
import VideoItemImg from "../../assets/images/video-item.jpg";

const Video = () => {
  const date = "11.01.2023";
  const title = "В Туркменистане отметили Новый год";
  const data = [
    { date, title, img: VideoItemImg },
    { date, title, img: VideoItemImg },
    { date, title, img: VideoItemImg },
    { date, title, img: VideoItemImg },
  ];
  return (
    <section className="video">
      <div className="container">
        <div className="video-inner">
          <h2>Видео</h2>
          <div className="video-wrapper">
            {data.map((dataItem: Record<string, string>) => {
              return (
                <VideoItem
                  key={uuidv4()}
                  img={dataItem.img}
                  date={dataItem.date}
                  title={dataItem.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
