// Modules
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { v4 as uuidv4 } from "uuid";

// Components
import NewsArticleImg from "./NewsArticleImg";

import { IPostData } from "../../types/store.types";

interface IProps {
  images: IPostData["data"]["data"]["featured_images"];
  video: IPostData["data"]["data"]["video"];
}

const NewsArticleSlider = ({ images, video }: IProps) => {
  let loop = images.length > 1;
  return (
    <div className="news-article-slider">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop={loop}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={uuidv4()}>
            <NewsArticleImg img={img.path} video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsArticleSlider;
