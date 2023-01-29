// Modules
import { v4 as uuiv4 } from "uuid";

// Components
import SectionTitle from "../global/SectionTitle";
import VideosItem from "./VideosItem";

// Images
import Placeholder from "../../assets/images/placeholder.jpg";

// Videos
import VideoPlaceholder from "../../assets/videos/placeholder.mp4";

// Types
import { videosDataType } from "../../types/videos.types";

const videosData: videosDataType[] = [
  {
    placeholder: Placeholder,
    url: VideoPlaceholder,
  },
  {
    placeholder: Placeholder,
    url: VideoPlaceholder,
  },
  {
    placeholder: Placeholder,
    url: VideoPlaceholder,
  },
  {
    placeholder: Placeholder,
    url: VideoPlaceholder,
  },
];

const Videos = () => {
  return (
    <section className="videos">
      <div className="container">
        <div className="videos-inner">
          <SectionTitle
            title="Видео"
            givenClass="videos"
            linkData={{ link: "/", title: "Посмотреть все" }}
          />
          <div className="videos-items">
            {videosData.map((videosDataItem: videosDataType) => {
              return (
                <VideosItem
                  key={uuiv4()}
                  url={videosDataItem.url}
                  placeholder={videosDataItem.placeholder}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
