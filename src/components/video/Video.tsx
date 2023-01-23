// Modules
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import VideoItem from "./VideoItem";

// Images
import VideoItemImg from "../../assets/images/video-item.jpg";

// Icons
import { ReactComponent as ArrowRightWhite } from "../../assets/icons/arrow-right-white.svg";

// Animations
import { videoArrowMotion } from "../../animations/video.animations";

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
          <Link to="/videos" className="video-link">
            <motion.div initial={"rest"} whileHover={"hover"} className="inner">
              <span>Показать все видео</span>
              <motion.div className="arrow-div" variants={videoArrowMotion}>
                <ArrowRightWhite />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Video;
